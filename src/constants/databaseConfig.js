module.exports = Object.freeze({
  DIALECT: process.env.DIALECT || 'sqlite',
  DATABASE: process.env.DATABASE || 'testdb',
  USERNAME: process.env.USERNAME || 'user',
  PASSWORD: process.env.PASSWORD || 'pass',
  STORAGE: process.env.STORAGE || './database.sqlite',
});
