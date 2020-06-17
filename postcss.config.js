const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');
const postcssUrl = require('postcss-url');

module.exports = {
  plugins: [
    postcssNormalize({
      browsers: ['last 2 versions'],
    }),
    autoprefixer,
    postcssEasyImport,
    postcssPresetEnv({
      stage: 1,
      features: { 'nesting-rules': true },
    }),
    postcssUrl({
      url: 'inline',
    }),
    cssnano,
  ],
  module: true,
  url: false,
};
