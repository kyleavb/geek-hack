let config = require('./index');

module.exports = {
  "development": {
    "username": config.DB_USER,
    "password": config.DB_PASS,
    "database": "geek_dev",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": config.DB_USER,
    "password": config.DB_PASS,
    "database": "geek_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": config.DB_USER,
    "password": config.DB_PASS,
    "database": "geek_live",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
