const router = require('express').Router();
const feed = require('../data/feedData.json');

router.get( '/', ( req, res ) => {
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
} );

module.exports = router;