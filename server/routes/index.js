const router = require( 'express' ).Router();

// routes
const auth = require( './auth' );
const feed = require( './feed' );
const health = require('./health');

router.use( '/auth', auth );
router.use( '/feed', feed );
router.use( ['/health', '/healthz'], health );


module.exports = router;