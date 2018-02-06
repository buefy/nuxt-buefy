module.exports = {
  env: {
    jest: true
  },
  extends: [
    'buefy'
  ],
  plugins: [
    'jest'
  ],
  globals: {
    'jest/globals': true,
    jasmine: true
  }
}
