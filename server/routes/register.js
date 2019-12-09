const router = require('express').Router();

router.post( '/', ( req, res ) => {
    console.log('Register new user route.');
    res.sendStatus(200);
});

module.exports = router;