const express = require ( 'express' );
const bodyParser = require ( 'body-parser' );
const mongoose = require ( 'mongoose' );

const keys = require('./config/key')
const port = 5000;

const app = express ( );

app.use ( bodyParser.json ( ));

// Routers
const router_user = require ( './routers/user' );
const router_post = require ( './routers/post' );

app.get ( '/', function ( req, res ) {
    res.send ( { status: 'OK' } );
} )

app.use ( '/user', router_user );
app.use ( '/post', router_post );

mongoose
    .connect ( keys.mongoURI )
    .then  ( function ( ) { console.log('mongoDB conectado.'); } )
    .catch ( function ( err ) { console.log(err); } );

app.listen ( port, function ( ) {
    console.log ( `server rodando na porta ${port}` );
} );