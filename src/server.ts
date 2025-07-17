import * as http from 'http';
import { app } from './app';


//# creating a functional server nodejs with htpp protocol

/*
@types/node to download the package with types for http in nodejs
 createServer to create a server in node, the parameters specified are the http request (to control requests)
 and response (to control the server responses) with types: http.IncomingMessage for request and http.ServerResponse
 for the response
 i'm defining that my api will communicate using http protocol: requests to receive and responses to give
 */
const server = http.createServer(app);

const port = process.env.PORT;

//creating the door to access the server; the server will "listen" to this door
server.listen(port, () => {
    console.log(`server started in door ${port}`);
});