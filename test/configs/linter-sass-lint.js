const path = require('path');

const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'raw-loader',
          {
            loader: path.resolve(__dirname, '../../lib/loader.js'),
            options: {cloud_name: 'demo'}
          }]
      }]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['npm run lint-test-style'],
      dev: false,
    }),
  ],
};