const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'raw-loader',
          {
            loader: path.resolve(__dirname, '../../lib/loader.js'),
            options: {cloudName: 'demo'}
          }]
      }]
  },
  plugins: [
    new StyleLintPlugin({failOnError: true}),
  ],
};