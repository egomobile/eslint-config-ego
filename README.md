# eslint-config-ego

[![npm](https://img.shields.io/npm/v/eslint-config-ego.svg)](https://www.npmjs.com/package/eslint-config-ego)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [e.GO style guide](https://www.e-go-digital.com/)


## Installation

```
$ npm install --save-dev eslint eslint-config-ego
```

## Usage

Once the `eslint-config-ego` package is installed, you can use it by specifying `ego` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "ego",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

MIT © e.GO Digital GmbH
