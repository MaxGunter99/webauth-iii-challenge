
//IMPORTS ⬇︎
const server = require( './api/server' );
const port = process.env.PORT || 4242;

//SERVER LOCATION ⬇︎
server.listen( port , () => console.log( `\n Server is up on http://localhost:${port} \n` ));