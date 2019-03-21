const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const config = {
  mode: 'production',
  entry: { index: './src/components/Snackbar.vue' },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: './[name].js',
    library: 'VueSnackbar',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      { test: /\.vue$/, exclude: /node_modules/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2'],
          env: {
            test: {
              plugins: ['transform-runtime', 'istanbul'],
            },
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}
module.exports = config
