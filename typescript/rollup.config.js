import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import builtins from 'rollup-plugin-node-builtins';

import pkg from './package.json';

export default [
  // UMD
  {
    input: 'src/index.ts',
    output: {
      name: 'ApiClient',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: true
      }),
      commonjs(),
      typescript(),
      builtins()
    ]
  },

  // CommonJS
  {
    input: 'src/index.ts',
    plugins: [typescript(), builtins()],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es',  sourcemap: true }
    ]
  }
];