const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'raw-loader',
          {
            loader: path.resolve(__dirname, '../../lib/loader.js'),
            options: {
              cloud_name: 'demo',
              functions: {
                'cloudinary-url': function cloudinaryUrl(){}
              }
            }
          }]
      }]
  }
};