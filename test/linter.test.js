/**
 * @jest-environment node
 */
const {useConfig, removeSpaces} = require('./helper');
const sassLintConfig = require('./configs/linter-sass-lint');
const styleintConfig = require('./configs/linter-stylelint');

const expectedUrl = 'http://res.cloudinary.com/demo/image/upload/c_fit,h_40,w_11/sample1';
const expectedResult = `module.exports="body{background:url('${expectedUrl}');}"`;

test('Passess sass-lint validation', async () => {
  const stats = await useConfig(sassLintConfig, './styles/custom-func.scss');
  const output = stats.toJson().modules[0].source;
  expect(removeSpaces(output)).toBe(expectedResult);
});

test('Passess styleint validation', async () => {
  const stats = await useConfig(styleintConfig, './styles/custom-func.scss');
  const output = stats.toJson().modules[0].source;
  expect(removeSpaces(output)).toBe(expectedResult);
});

