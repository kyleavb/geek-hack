// const path = require( 'path' );
const router = require('express').Router();
const db = require("../models");

router.post('/', ( req, res ) => {
    
    let login = req.body.login;
    let pass = req.body.pass;
    let sendback = null;

    console.log(`User:${login} Pass:${pass}`);

    
    console.log( `sending: ${sendback}` );
    res.send( sendback );
})

module.exports = router;