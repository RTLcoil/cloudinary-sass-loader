/**
 * @jest-environment node
 */
const {useConfig, removeSpaces, containsWebpackError} = require('./helper');
const customLoader = require('./configs/custom-loader');
const customLoaderDart = require('./configs/custom-loader-dart');
const sassLoader = require('./configs/sass-loader-custom-function');
const loaderNoCloudName = require('./configs/custom-loader-no-cloud-name');
const loaderDuplicateFunction = require('./configs/custom-loader-duplicate-function');

const expectedUrl = 'http://res.cloudinary.com/demo/image/upload/c_fit,h_40,w_11/sample1';
const expectedResult = `module.exports="body{background:url('${expectedUrl}');}"`;

expect.extend({containsWebpackError});

test('Compiles cloudinary-url in sass file', async () => {
  const stats = await useConfig(customLoader, './styles/custom-func.sass');
  const output = stats.toJson().modules[0].source;
  expect(removeSpaces(output)).toBe(expectedResult);
});

test('Compiles cloudinary-url in scss file', async () => {
  const stats = await useConfig(customLoader, './styles/custom-func.scss');
  const output = stats.toJson().modules[0].source;
  expect(removeSpaces(output)).toBe(expectedResult);
});

test('Compiles cloudinary-url with nested calls', async () => {
  const stats = await useConfig(customLoader, './styles/custom-func-nested.scss');
  const output = stats.toJson().modules[0].source;
  expect(removeSpaces(output)).toBe(expectedResult);
});

test('Throws error if cloudName is not specified', async () => {
  await expect(useConfig(loaderNoCloudName, './styles/custom-func.scss'))
      .rejects.containsWebpackError(/cloudName/);
});

test('Throws error on duplicate function name', async () => {
  await expect(useConfig(loaderDuplicateFunction, './styles/custom-func.scss'))
      .rejects.containsWebpackError(/Function name/);
});

test('Compiles cloudinary-url using dart-sass', async () => {
  const stats = await useConfig(customLoaderDart, './styles/custom-func.scss');
  const output = stats.toJson().modules[0].source;
  expect(removeSpaces(output)).toBe(expectedResult);
});

test('Compile scss file with sass-loader and custom function', async () => {
  const stats = await useConfig(sassLoader, './styles/custom-func.scss');
  const output = stats.toJson().modules[0].source;
  expect(removeSpaces(output)).toBe(expectedResult);
});