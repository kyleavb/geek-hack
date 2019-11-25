// const path = require( 'path' );
const router = require('express').Router();
const users = require('../data/users');

router.post('/', ( req, res ) => {
    
    let login = req.body.login;
    let pass = req.body.pass;
    let sendback = null;

    for( let item of users.users ){
        if( item.email === login && item.pass === pass ){
            sendback = item.guid
        }
    }
    // console.log( sendback );
    res.send( sendback );
    // res.sendStatus(200);
})

module.exports = router;