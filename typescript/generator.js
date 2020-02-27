#!/usr/bin/env node
const fs = require("fs");
const { CodeGen } = require("swagger-typescript-codegen");

const readFile = (fileName) => fs.readFileSync(fileName, "utf-8");

const SWAGGER_FILE = "../swagger.json";
const swagger = JSON.parse(readFile(SWAGGER_FILE));

const tsSourceCode = CodeGen.getTypescriptCode({
  className: "BitriseAPI",
  swagger: swagger,
  beautify: true,
  template: {
    class: readFile("./templates/class.mustache"),
    method: readFile("./templates/method.mustache"),
    type: readFile("./templates/type.mustache")
  },
  mustache: {
    normalizedType: () => (text, render) => render(text).replace(/\./g, "_"),
    // TODO: remove this when the bug fixed: https://github.com/janl/mustache.js/pull/490
    normalizedTypeV2: () => (text, render) => render(`{{=<% %>=}}${text}`).replace(/\./g, "_")
  }
});

fs.writeFileSync("./src/client/api.ts", tsSourceCode);
