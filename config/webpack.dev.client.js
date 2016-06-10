const helpers = require('./helpers');
module.exports = {
  target: 'web',
  entry: './src/main.browser',
  output: {
    path: helpers.root('..', 'dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};
