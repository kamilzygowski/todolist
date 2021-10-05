const webSocketServerPort = 8001;
const webSocketServer = require('websocket').server;
const http = require('http');

// Spinning the http server and the websocket server together
const server = http.createServer();
server.listen(webSocketServerPort);
console.log('listening to port ' + webSocketServerPort);

const wsServer = new webSocketServer({
    httpServer: server
});

const clients = {};

const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
}

wsServer.on('request', function (request) {
    var userID = getUniqueID();
    console.log((new Date()) + " Recieved a new connection form origin " + request.origin + ".");

    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log("Connected: " + userID + " in " + Object.getOwnPropertyNames(clients));

    connection.on('message', function(message){
        if (message.type === 'utf8') {
            console.log("Received message: ", message.utf8Data);

            for(var key in clients){
                clients[key].sendUTF(message.utf8Data);
                console.log('sent message to: ', clients[key]);
            }
        }
    })
})