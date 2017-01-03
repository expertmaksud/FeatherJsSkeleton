'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
//const middleware = require('./api/middleware');
//const models = require('./api/models');
//const services = require('./api/services');
let apiV1 = require('./api/v1');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .configure(rest())
  .configure(socketio())
  .use('/api/v1', apiV1)
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic(app.get('public')));
  //.use(bodyParser.json())
  //.use(bodyParser.urlencoded({
  //  extended: true
  //}))
  
  //.configure(models)
  //.configure(services)
  //.configure(middleware);

module.exports = app;
