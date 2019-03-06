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

export default function cloudinaryUrlFactory(cloudName, sassImplementation = null) {
  const sass = sassImplementation || getDefaultSassImplementation();
  const cloudinary = Cloudinary.new({ cloud_name: cloudName });
  return cloudinaryUrl.bind(null, sass, cloudinary);
}
