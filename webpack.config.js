const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'src/views/index.html'
      }),
      new VueLoaderPlugin()
  ],
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
      ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};