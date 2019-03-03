const merge = require('webpack-merge');

const base = require('./webpack.config');

const config = merge(base, {
  mode: 'production'
});

module.exports = config;
