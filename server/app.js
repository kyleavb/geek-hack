require('dotenv').config();
const app = require('express')();
const express = require('express');
const path = require( 'path' );
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');
const db = require("./models");

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '/data')));
app.use(express.static(path.join( __dirname, '../', 'client', 'build')));
app.use(bodyParser.json())
app.use(routes);




// app.post( '/event', ( req, res ) => {
//     let user = req.body.login;
//     let eventId = req.body.event;
//     let temp;
//     let ret;
//     for(let item of feed.data){
//         if(item.id == user){
//             temp = item.events;
//         }
//     }

//     for(let item of temp){
//         if(item.id == eventId){
//             ret = item;
//         }
//     }
//     res.send( ret );
// });

// app.get('/', ( req, res ) => {
//     res.sendStatus(200)
//     res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'))
// });


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