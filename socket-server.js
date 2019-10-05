const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const moment = require('moment');

let id = 0;
let num = 0;

const ws = (socket, id) => {
    return () => {
        let time = moment();
        let body = {name: `${id}`, time: time};
        socket.emit('message', JSON.stringify(body));
    }
};

io.on('connection', (socket) => {
    console.log(id);
    num++;
    setInterval(ws(socket, id), 1000);

    socket.on('message', function (message) {
        console.log(message);
    });
    id++;
});

server.listen(4001, () => {
    console.log(`Server is listening on 4001`);
});
