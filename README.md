# nuxt-buefy
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-buefy/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-buefy)
[![npm](https://img.shields.io/npm/dt/nuxt-buefy.svg?style=flat-square)](https://npmjs.com/package/nuxt-buefy)
[![CircleCI](https://img.shields.io/circleci/project/github/buefy/nuxt-buefy.svg?style=flat-square)](https://circleci.com/gh/buefy/nuxt-buefy)
[![Codecov](https://img.shields.io/codecov/c/github/buefy/nuxt-buefy.svg?style=flat-square)](https://codecov.io/gh/buefy/nuxt-buefy)
[![Dependencies](https://david-dm.org/buefy/nuxt-buefy/status.svg?style=flat-square)](https://david-dm.org/buefy/nuxt-buefy)
[![js-standard-style](https://img.shields.io/badge/code_style-buefy-7957d5.svg?style=flat-square)](http://buefy.github.io)

> It's really very simple to start with nuxt. But we can make it even simpler by adding <a href="https://github.com/buefy/nuxt-buefy">nuxt-buefy</a>.

[📖 **Release Notes**](./CHANGELOG.md)

## Install

```bash
npm i nuxt-buefy
# or
yarn add nuxt-buefy
```

## Usage

```js
{
  modules: [
    // Simple usage
    'nuxt-buefy',

    ['nuxt-buefy', { /* buefy options */ }]
 ]
}
```

or 

```js
{
  modules: [
    // Simple usage
    'nuxt-buefy',
 ],
 buefy: { /* buefy options */ }
}
```

## Options

Name | Description | Type | Values | Default |
-----|-------------|------|--------|---------|
css     | Add buefy css | Boolean | `true` or `false` | `true` |
materialDesignIcons | Add material desigin icons | Boolean | `true` or `false` | `true` |

> You can use buefy [construct options](https://buefy.github.io/documentation/constructor-options).


## Development

- Clone this repository
- Install dependnecies using `yarn install` or `npm install`
- Start development server using `yarn run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Rafael Beraldo
