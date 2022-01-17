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

If you create new project from scratch, just choose buefy right from create-nuxt-app!

For already existing project just:

```bash
npm i nuxt-buefy
# or
yarn add nuxt-buefy
```

### TypeScript support

Add `buefy/types` to `tsconfig.json`:

```js
{
  "compilerOptions": {
    "types": [
      "buefy/types"
    ]
  }
}
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

### Options

Name | Description | Type | Values | Default |
-----|-------------|------|--------|---------|
`css`     | Add buefy css | Boolean | `true` or `false` | `true` |
`materialDesignIcons` | Add material design icons | Boolean | `true` or `false` | `true` |
`materialDesignIconsHRef` | Specify material design icons version | String | Any CDN URL to MDI | `https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css` |

> You can use buefy [construct options](https://buefy.org/documentation/constructor-options).

### Customization

If you're familiar with Sass and want to customize Buefy with your own theme, follow these steps:

0. If not already installed, install `sass` and `sass-loader`

```bash
npm i sass sass-loader@10 --save-dev
# or
yarn add --dev sass sass-loader@10
```

1. Disable buefy css in module options:

```js
{
  modules: [
    ['nuxt-buefy', { css: false }]
 ]
}
```

2. Create a `.scss` file:

```css
// Import bulma styles
@import "~bulma";

// Import buefy styles
@import "~buefy/src/scss/buefy";
```

3. Define `css` property in `nuxt.config`:

```js
{
  css: ['@/assets/scss/main.scss']
}
```

## Development

- Clone this repository
- Install dependnecies using `yarn install` or `npm install`
- Start development server using `yarn run dev` or `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Rafael Beraldo
