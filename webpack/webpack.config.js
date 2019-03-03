const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cwd = process.cwd();
const OUTPUT_PATH = path.resolve(cwd, './dist');
const PUBLIC_PATH = '/';

const config = {
  entry: './src/index.js',
  output: {
    path: OUTPUT_PATH,
    filename: '[name].[hash].js',
    publicPath: PUBLIC_PATH
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    usedExports: true,
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          filename: '[name].bundle.js',
          chunks: 'all'
        }
      }
    }
  },
  performance: {
    maxAssetSize: 400000,
    maxEntrypointSize: 400000
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Movie List'
    }),
    new CleanWebpackPlugin([OUTPUT_PATH], {
      root: cwd
    })
  ]
};

module.exports = config;
