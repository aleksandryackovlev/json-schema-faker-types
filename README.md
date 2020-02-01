<div align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="Typescript logo" width="100" height="100">
  </a>
  <a href="https://github.com/json-schema-faker/json-schema-faker">
    <img src="https://raw.githubusercontent.com/json-schema-faker/json-schema-faker/master/logo/JSF_logo.png" alt="json-schema-faker logo" width="280" height="100">
  </a>
</div>

[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![Build Status](https://travis-ci.org/aleksandryackovlev/json-schema-faker-types.svg?branch=master)](https://travis-ci.org/aleksandryackovlev/json-schema-faker-types)
[![size](https://packagephobia.now.sh/badge?p=json-schema-faker-types)](https://packagephobia.now.sh/result?p=json-schema-faker-types)

# json-schema-faker-types

This package contains type definitions for [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker).

## Installation
```console
$ npm install json-schema-faker-types --save
```

## Usage

Add `typings` folder into `typeRoots` in your `tsconfig.json`

**tsconfig.json**

```js
{
  "compilerOptions": {
    ...
    "typeRoots" : ["./typings", "./node_modules/@types"],
    ...
  }
}
```

Create `typings` folder in the root of your project and put there a directory with the name `json-schema-faker`.

**typings/json-schema-faker/index.d.ts**

```js
import 'json-schema-faker-types';
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)


[npm]: https://img.shields.io/npm/v/json-schema-faker-types.svg
[npm-url]: https://npmjs.com/package/json-schema-faker-types
[deps]: https://david-dm.org/aleksandryackovlev/json-schema-faker-types.svg
[deps-url]: https://david-dm.org/aleksandryackovlev/json-schema-faker-types

