"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloudinaryUrlFactory;

const {
  Cloudinary
} = require('cloudinary-core');

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

function cloudinaryUrlFactory(cloudinaryOptions, sassImplementation = null) {
  const sass = sassImplementation || getDefaultSassImplementation();
  const cloudinary = new Cloudinary(cloudinaryOptions);
  return cloudinaryUrl.bind(null, sass, cloudinary);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbG91ZGluYXJ5LXNhc3MtZnVuY3Rpb24uanMiXSwibmFtZXMiOlsiQ2xvdWRpbmFyeSIsInJlcXVpcmUiLCJjbG91ZGluYXJ5VXJsIiwic2FzcyIsImNsb3VkaW5hcnkiLCJpZCIsImt3YXJncyIsImxlbmd0aCIsImdldExlbmd0aCIsIm9wdGlvbnMiLCJpIiwia2V5IiwiZ2V0S2V5IiwiZ2V0VmFsdWUiLCJ1cmwiLCJ0eXBlcyIsIlN0cmluZyIsImdldERlZmF1bHRTYXNzSW1wbGVtZW50YXRpb24iLCJlcnJvciIsImNsb3VkaW5hcnlVcmxGYWN0b3J5IiwiY2xvdWRpbmFyeU9wdGlvbnMiLCJzYXNzSW1wbGVtZW50YXRpb24iLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQWlCQyxPQUFPLENBQUMsaUJBQUQsQ0FBOUI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJDLFVBQTdCLEVBQXlDQyxFQUF6QyxFQUE2Q0MsTUFBN0MsRUFBcUQ7QUFDbkQsUUFBTUMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLFNBQVAsRUFBZjtBQUVBLFFBQU1DLE9BQU8sR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQXBCLEVBQTRCRyxDQUFDLEVBQTdCLEVBQWlDO0FBQy9CLFVBQU1DLEdBQUcsR0FBR0wsTUFBTSxDQUFDTSxNQUFQLENBQWNGLENBQWQsRUFBaUJHLFFBQWpCLEVBQVo7QUFDQUosSUFBQUEsT0FBTyxDQUFDRSxHQUFELENBQVAsR0FBZUwsTUFBTSxDQUFDTyxRQUFQLENBQWdCSCxDQUFoQixFQUFtQkcsUUFBbkIsRUFBZjtBQUNEOztBQUVELFFBQU1DLEdBQUcsR0FBR1YsVUFBVSxDQUFDVSxHQUFYLENBQWVULEVBQUUsQ0FBQ1EsUUFBSCxFQUFmLEVBQThCSixPQUE5QixDQUFaO0FBQ0EsU0FBTyxJQUFJTixJQUFJLENBQUNZLEtBQUwsQ0FBV0MsTUFBZixDQUF1QixRQUFPRixHQUFJLElBQWxDLENBQVA7QUFDRDs7QUFFRCxTQUFTRyw0QkFBVCxHQUF3QztBQUN0QyxNQUFJZCxJQUFKOztBQUVBLE1BQUk7QUFDRjtBQUNBQSxJQUFBQSxJQUFJLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBQWQ7QUFDRCxHQUhELENBR0UsT0FBT2lCLEtBQVAsRUFBYztBQUNkO0FBQ0FmLElBQUFBLElBQUksR0FBR0YsT0FBTyxDQUFDLE1BQUQsQ0FBZDtBQUNEOztBQUNELFNBQU9FLElBQVA7QUFDRDs7QUFFYyxTQUFTZ0Isb0JBQVQsQ0FBOEJDLGlCQUE5QixFQUFpREMsa0JBQWtCLEdBQUcsSUFBdEUsRUFBNEU7QUFDekYsUUFBTWxCLElBQUksR0FBR2tCLGtCQUFrQixJQUFJSiw0QkFBNEIsRUFBL0Q7QUFDQSxRQUFNYixVQUFVLEdBQUcsSUFBSUosVUFBSixDQUFlb0IsaUJBQWYsQ0FBbkI7QUFDQSxTQUFPbEIsYUFBYSxDQUFDb0IsSUFBZCxDQUFtQixJQUFuQixFQUF5Qm5CLElBQXpCLEVBQStCQyxVQUEvQixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENsb3VkaW5hcnkgfSA9IHJlcXVpcmUoJ2Nsb3VkaW5hcnktY29yZScpO1xuXG5mdW5jdGlvbiBjbG91ZGluYXJ5VXJsKHNhc3MsIGNsb3VkaW5hcnksIGlkLCBrd2FyZ3MpIHtcbiAgY29uc3QgbGVuZ3RoID0ga3dhcmdzLmdldExlbmd0aCgpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGt3YXJncy5nZXRLZXkoaSkuZ2V0VmFsdWUoKTtcbiAgICBvcHRpb25zW2tleV0gPSBrd2FyZ3MuZ2V0VmFsdWUoaSkuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbnN0IHVybCA9IGNsb3VkaW5hcnkudXJsKGlkLmdldFZhbHVlKCksIG9wdGlvbnMpO1xuICByZXR1cm4gbmV3IHNhc3MudHlwZXMuU3RyaW5nKGB1cmwoJyR7dXJsfScpYCk7XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTYXNzSW1wbGVtZW50YXRpb24oKSB7XG4gIGxldCBzYXNzO1xuXG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcywgZ2xvYmFsLXJlcXVpcmVcbiAgICBzYXNzID0gcmVxdWlyZSgnbm9kZS1zYXNzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcywgZ2xvYmFsLXJlcXVpcmVcbiAgICBzYXNzID0gcmVxdWlyZSgnc2FzcycpO1xuICB9XG4gIHJldHVybiBzYXNzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG91ZGluYXJ5VXJsRmFjdG9yeShjbG91ZGluYXJ5T3B0aW9ucywgc2Fzc0ltcGxlbWVudGF0aW9uID0gbnVsbCkge1xuICBjb25zdCBzYXNzID0gc2Fzc0ltcGxlbWVudGF0aW9uIHx8IGdldERlZmF1bHRTYXNzSW1wbGVtZW50YXRpb24oKTtcbiAgY29uc3QgY2xvdWRpbmFyeSA9IG5ldyBDbG91ZGluYXJ5KGNsb3VkaW5hcnlPcHRpb25zKTtcbiAgcmV0dXJuIGNsb3VkaW5hcnlVcmwuYmluZChudWxsLCBzYXNzLCBjbG91ZGluYXJ5KTtcbn1cbiJdfQ==