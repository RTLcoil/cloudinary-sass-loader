const path = require('path');

const sass = require('sass');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'raw-loader',
          {
            loader: path.resolve(__dirname, '../../lib/loader.js'),
            options: {cloudName: 'demo', implementation: sass}
          }]
      }]
  }
};