const helpers = require('./helpers');
module.exports = {
  target: 'node',
  entry: './src/server', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: helpers.root('..', 'dist/server')
  },
  externals: helpers.checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};
