# commitlint-config-armour

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/commitlint-config-armour.svg)](https://www.npmjs.com/package/commitlint-config-armour)
[![Template from jarvis](https://img.shields.io/badge/Hi-Jarvis-ff69b4.svg)](https://github.com/Armour/Jarvis)

My shareable config for [commitlint](https://github.com/conventional-changelog/commitlint), see [COMMIT_CONVENTION.md](.github/COMMIT_CONVENTION.md) for detailed explanation.

## Usage

### Installation

```shell
npm i commitlint-config-armour
```

or

```shell
yarn add commitlint-config-armour
```

or

```shell
npx commitlint-config-armour
```

### Define the config for your project

```shell
echo "module.exports = {extends: ['armour']};" > .commitlintrc.js
```

or

```shell
echo "extends: ['armour']" > .commitlintrc.yml
```

### Define the [husky](https://github.com/typicode/husky) hook in `package.json` file

```json
...
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
...
```

## Contributing

See [CONTRIBUTING.md](https://github.com/Armour/commitlint-config-armour/blob/master/.github/CONTRIBUTING.md)

## License

[MIT License](https://github.com/Armour/commitlint-config-armour/blob/master/LICENSE)
