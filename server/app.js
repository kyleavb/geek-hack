const app = require('express')();
const express = require('express');
const path = require( 'path' );
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');

const users = require('./data/users.json')
const feed = require('./data/feedData.json')
// Serve the static files from the React app
// app.use(express.static(path.resolve(__dirname, '/data')));
// app.use(express.static(path.join( __dirname, '../', 'client', 'build')));
app.use(bodyParser.json())

app.post( '/auth', ( req, res ) => {
    let login = req.body.login;
    let pass = req.body.pass;
    let sendback = null;

    for( let item of users.users ){
        if( item.email === login && item.pass === pass ){
            sendback = item.guid
        }
    }
    res.send( sendback );
})

app.post( '/feed', ( req, res ) => {
    let user = parseInt(req.body.login);
    let events = null;
    for(let item of feed.data ){
        if( parseInt(item.id) === user ){
            events = item.events;
        }
    }
    if( events.length < 1){
        events = null;
    }
    res.send( events );
})

app.get('/data', ( req, res ) => {
    console.log('client request');
    res.sendStatus(200);
});

app.post( '/event', ( req, res ) => {
    let user = req.body.login;
    let eventId = req.body.event;
    let temp;
    let ret;
    for(let item of feed.data){
        if(item.id == user){
            temp = item.events;
        }
    }

    for(let item of temp){
        if(item.id == eventId){
            ret = item;
        }
    }
    res.send( ret );
})
app.all( '/*', routes );
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