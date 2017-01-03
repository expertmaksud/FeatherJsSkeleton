'use strict';
const test1 = require('./test1');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function () {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(test1);
};
