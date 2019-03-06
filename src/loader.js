const loaderUtils = require('loader-utils');
const sassLoader = require('sass-loader');

// eslint-disable-next-line global-require
export const cloudinaryUrlFactory = require('./cloudinary-sass-function').default;

const cloudinaryFunctionName = 'cloudinary-url';
const cloudinaryFunctionSig = `${cloudinaryFunctionName}($id, $params)`;

export default function (source) {
  const options = Object.assign({ functions: {} }, loaderUtils.getOptions(this));

  if (!options.cloudName) {
    throw new Error('`cloudName` loader option is mandatory.');
  }

  const registered = Object.keys(options.functions);
  if (registered.find(x => !!`${x}(`.startsWith(`${cloudinaryFunctionName}(`))) {
    throw new Error(`Function name '${cloudinaryFunctionName}' is reserved`);
  }

  options.functions[cloudinaryFunctionSig] = cloudinaryUrlFactory(options.cloudName, options.implementation);
  this.loaders[this.loaderIndex].options = options;

  sassLoader.bind(this)(source);
}
