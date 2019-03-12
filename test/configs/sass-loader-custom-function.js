const { cloudinaryUrlFactory } = require('../../lib/loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              functions: {'cloudinary-url': cloudinaryUrlFactory({cloud_name: 'demo'})}
            }
          }]
      }]
  }
};