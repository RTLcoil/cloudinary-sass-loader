
Cloudinary
==========

Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

Easily upload images to the cloud. Automatically perform smart image resizing, cropping and conversion without installing any complex software. Integrate Facebook or Twitter profile image extraction in a snap, in any dimension and style to match your website's graphics requirements. Images are seamlessly delivered through a fast CDN, and much much more.

Cloudinary offers comprehensive APIs and administration capabilities and is easy to integrate with any web application, existing or new.

Cloudinary provides URL and HTTP based APIs that can be easily integrated with any Web development framework.

Cloudinary provides a webpack loader for simplifying the integration with SASS/SCSS even further. It is a drop-in replacement for sass-loader with extra options.

## Install

`npm install cloudinary-sass-loader node-sass webpack --save-dev`

## Options

Required:

* `cloud_name` - The cloudinary cloud name associated with your Cloudinary account.

Optional:

* `private_cdn`, `secure_distribution`, `cname`, `cdn_subdomain` - Please refer to [Cloudinary Documentation](http://cloudinary.com/documentation/rails_additional_topics#configuration_options) for information on these parameters.

As it is a wrapper around [Sass Loader](https://www.npmjs.com/package/sass-loader), all parameters supported by Sass Loader are also supported by cloudinary-sass-loader.

## Examples

Add the loader to your webpack config:
```js
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "cloudinary-sass-loader",
          options: {
            cloud_name: 'demo' // replace 'demo' with your Cloudinary cloud name
          }
        }
      ]
    }]
  }
};
```

Then you can use `cloudinary-url` function in your SASS files:
```scss
body { background: cloudinary-url('sample', (width: 11, height: 40, crop: "fit")) }
```

The loader will transpile this to a simple url:
```css
body { background: url("http://res.cloudinary.com/demo/image/upload/c_fit,h_40,w_11/sample")) }
```

If you want keep using sass-loader directly, you can define a custom function in your config for `cloudinary-url`

```js
// webpack.config.js
const { cloudinaryUrlFactory } = require('cloudinary-sass-loader');
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            functions: {
              'cloudinary-url($id, $params)': cloudinaryUrlFactory('demo') // replace 'demo' with your Cloudinary cloud name
            }
          }
        }
      ]
    }]
  }
};
```