const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.config');

const PORT = process.env.PORT;

const config = merge(base, {
  mode: 'development',

  devServer: {
    hot: true,
    port: 3000,
    proxy: {
      '/api': `http://localhost: + ${PORT}`
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

module.exports = config;
