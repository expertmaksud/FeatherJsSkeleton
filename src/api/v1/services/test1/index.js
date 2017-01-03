'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: app.get('models').test1s,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/test1s', service(options));

  // Get our initialize service to that we can bind hooks
  const test1Service = app.service('/test1s');

  // Set up our before hooks
  test1Service.before(hooks.before);

  // Set up our after hooks
  test1Service.after(hooks.after);
};
