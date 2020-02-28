# Javascript API


## Installation

```bash
npm i @bitrise/api-client
```

## Usage

The package is distributed in ES5 transpiled format and works both in NodeJS and DOM environment (see differences below).

_Note_: You need to specify token explicitly in order to use this library from outside bitrise domain. You can get the token on user [security settings](https://app.bitrise.io/me/profile#/security).

```javascript
import createClient from '@bitrise/api-client';
const client = createClient({ apiToken: <TOKEN> });
const apps = await client.apps_list({ ... });
```
Type bindings are exported with the package, if you are using typescript you can get intellisense support for existing endpoints.

Otherwise check [swagger](../swagger.json) description for available endpoint names.
