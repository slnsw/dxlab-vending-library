'use strict';

const { createServer, proxy } = require('aws-serverless-express');
const app = require('./build/app').app;

const server = createServer(app);

exports.hello = (event, context) => {
  return proxy(server, event, context);
}
