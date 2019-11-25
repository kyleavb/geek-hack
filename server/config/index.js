// require('dotenv').config();

module.exports = {
    "PORT" : process.env.PORT || '8080',
    "DB_USER" : process.env.DB_USER || 'default',
    "DB_PASS" : process.env.DB_PASS || null
}