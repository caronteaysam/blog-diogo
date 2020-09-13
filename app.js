const express = require ( 'express' );
const bodyParser = require ( 'body-parser' );
const port = 5000;

const app = express ( );

app.use ( bodyParser.json ( ));

app.get ( '/', function ( req, res ) {

    res.send ( { status: 'OK' } );
} )

app.listen ( port, function ( ) {
    console.log ( `server rodando na porta ${port}` );
} );