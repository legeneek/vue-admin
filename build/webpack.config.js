const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
function getStyleLoader(type) {
  let cssLoader = [
    ExtractCssChunks.loader,
    'css-loader'
  ]
  let typeLoaderMap = {
    'less': 'less-loader',
    'sass': 'sass-loader',
  }
  let loader = typeLoaderMap[type]
  return loader ? cssLoader.concat(loader) : cssLoader
}

const webpackMode = 'development'

module.exports = {
  mode: webpackMode,
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: getStyleLoader('css')
      },
      {
        test: /\.less$/,
        use: getStyleLoader('less')
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'asserts/[name].[ext]'
        },
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractCssChunks(
      {
        hot: webpackMode === 'development'
      }
    ),
    new HtmlWebpackPlugin({
      template: resolve('src/public/template/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000
  }
}