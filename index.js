'use strict'

if( process.env.NODE_ENV === 'development' ) {
  console.log('Dev Mode Engaged')
  require('dotenv').config();
}

const config = require('./server/config');
require('./server/app').init( config.PORT );