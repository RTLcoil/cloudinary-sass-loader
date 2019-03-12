const { Cloudinary } = require('cloudinary-core');

function cloudinaryUrl(sass, cloudinary, id, kwargs) {
  const length = kwargs.getLength();

  const options = {};
  for (let i = 0; i < length; i++) {
    const key = kwargs.getKey(i).getValue();
    options[key] = kwargs.getValue(i).getValue();
  }

  const url = cloudinary.url(id.getValue(), options);
  return new sass.types.String(`url('${url}')`);
}

function getDefaultSassImplementation() {
  let sass;

  try {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    sass = require('node-sass');
  } catch (error) {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    sass = require('sass');
  }
  return sass;
}

export default function cloudinaryUrlFactory(cloudinaryOptions, sassImplementation = null) {
  const sass = sassImplementation || getDefaultSassImplementation();
  const cloudinary = new Cloudinary(cloudinaryOptions);
  return cloudinaryUrl.bind(null, sass, cloudinary);
}
