const loaderUtils = require('loader-utils');
const sassLoader = require('sass-loader');
const pick = require('lodash/pick');

// eslint-disable-next-line global-require
export const cloudinaryUrlFactory = require('./cloudinary-sass-function').default;

const cloudinaryFunctionName = 'cloudinary-url';
const cloudinaryFunctionSig = `${cloudinaryFunctionName}($id, $params)`;
const cloudinaryOptionKeys = ['cloud_name', 'private_cdn', 'secure_distribution', 'cname', 'cdn_subdomain'];

export default function (source) {
  const options = Object.assign({ functions: {} }, loaderUtils.getOptions(this));

  if (!options.cloud_name) {
    throw new Error('`cloud_name` loader option is mandatory.');
  }

  const registered = Object.keys(options.functions);
  if (registered.find(x => x === cloudinaryFunctionName)) {
    throw new Error(`Function name '${cloudinaryFunctionName}' is reserved`);
  }
  const cloudinaryOptions = pick(options, cloudinaryOptionKeys);
  options.functions[cloudinaryFunctionSig] = cloudinaryUrlFactory(cloudinaryOptions, options.implementation);
  this.loaders[this.loaderIndex].options = options;

  sassLoader.bind(this)(source);
}
