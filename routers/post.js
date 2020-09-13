const express = require ( 'express' );
const router = express.Router ( );

router.get ( '/', function ( req, res ) {
    res.json ( {
        post: 'OK'
    } )
} );

module.exports = router