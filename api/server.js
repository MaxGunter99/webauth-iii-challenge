
//IMPORTS ⬇︎
const express = require( 'express' );
const helmet = require( 'helmet' );
const cors = require( 'cors' );
const morgan = require( 'morgan' );
const server = express();

//IMPORT ROUTERS ⬇︎
const authenticationRouter = require( '../routes/authentication/authentication-router' );
const userRouter = require( '../routes/users/users-router' );

//APPLY MIDDLEWARE GLOBAL ⬇︎
server.use( express.json());
server.use( helmet());
server.use( cors());
server.use( morgan( 'short' ));

//ROUTES ⬇︎
server.use( '/api/auth' , authenticationRouter );
server.use( '/api/users' , userRouter );

//HOME PAGE ⬇︎
server.get( '/' , ( req , res ) => {
    res.send( 'Hello there, yes, chill.. Im alive' );
});

//EXPORTS ⬇︎
module.exports = server;

