const webpack = require('webpack');
const MemoryFS = require('memory-fs');

export function removeSpaces(str) {
  return str.replace(/([\s\n]|\\n)/g, '');
}

export function useConfig(config, inputFilePath) {
  const configClone = Object.assign({entry: inputFilePath, context: __dirname}, config);
  const compiler = webpack(configClone);
  compiler.outputFileSystem = new MemoryFS();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(stats.compilation.errors);
      }

      return resolve(stats);
    });
  });
}

export function containsWebpackError(received, messageRegEx) {
  return {pass: received && received.find && !!received.find(x => x.error && messageRegEx.test(x.error.message))}
}