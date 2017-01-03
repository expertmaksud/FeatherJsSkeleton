let path = require('path');
let feathers = require('feathers');
let rest = require('feathers-rest');
let socketio = require('feathers-socketio');
let hooks = require('feathers-hooks');
let bodyParser = require('body-parser');
let errorHandler = require('feathers-errors/handler');
let configuration = require('feathers-configuration');
let middleware = require('./middleware');
let models = require('./models');
let services = require('./services');

let app = feathers();
app.configure(configuration(path.join(__dirname, '../../..')));

app.configure(rest())
  .configure(socketio())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .configure(hooks())
  .use(errorHandler())
  .configure(models)
  .configure(services)
  .configure(middleware);

module.exports = app;


