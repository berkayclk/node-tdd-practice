const Sequelize = require('sequelize');
const {
  DATABASE,
  USERNAME,
  PASSWORD,
  DIALECT,
  STORAGE,
} = require('../constants/databaseConfig');

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  dialect: DIALECT,
  storage: STORAGE,
  logging: false,
});

module.exports = sequelize;
