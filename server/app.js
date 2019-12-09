require('dotenv').config();
const app = require('express')();
const express = require('express');
const path = require( 'path' );
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '/data')));
app.use(express.static(path.join( __dirname, '../', 'client', 'build')));
app.use(bodyParser.json())
app.use(routes);

// common 404
app.use( (req, res) => res.status( 404 ).send('Shit Broke, Not Found') );


const listen = ( log ) => {
    return app.listen( config.PORT, () => {
        console.log( log );
    });
}

module.exports.init = () => {
    return listen( `Server listening on port ${ config.PORT }.` );
};