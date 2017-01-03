const Sequelize = require('sequelize');
const test1 = require('./test1');
const user = require('./user');

module.exports = function () {
  const app = this;

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: console.log
  });

  app.set('sequelize', sequelize);

  app.configure(test1);
  app.configure(user);

  app.set('models', sequelize.models);

  Object.keys(sequelize.models).forEach(modelName => {
    if ('associate' in sequelize.models[modelName]) {
      sequelize.models[modelName].associate();
    }
  });

  sequelize.sync();
};
