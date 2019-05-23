
//IMPORTS ⬇︎
const express = require( 'express' );
const helmet = require( 'helmet' );
const cors = require( 'cors' );
const morgan = require( 'morgan' );
const server = express();
const session = require( 'express-session' );
const KnexSessionStore = require( 'connect-session-knex' )( session );
const db = require( '../data/dbConfig');

//IMPORT ROUTERS ⬇︎
const authenticationRouter = require( '../routes/authentication/authentication-router' );
const userRouter = require( '../routes/users/users-router' );

//COOKIE CONFIG
const sessionConfig = {
    name: 'Mothership',
    secret: 'Take me to your leader!',
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({ 
      knex: db,
      tablename: 'sessions',
      createtable: true,
      clearInterval: 1000 * 60 * 60
    })
}

//APPLY MIDDLEWARE GLOBAL ⬇︎
server.use( express.json());
server.use( helmet());
server.use( cors());
server.use( morgan( 'short' ));
server.use( session( sessionConfig ) );

//ROUTES ⬇︎
server.use( '/api/auth' , authenticationRouter );
server.use( '/api/users' , userRouter );

//HOME PAGE ⬇︎
server.get( '/' , ( req , res ) => {
    res.send( 'Hello there, yes, chill.. Im alive' );
});

//EXPORTS ⬇︎
module.exports = server;

