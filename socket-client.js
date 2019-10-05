const socket = require('socket.io-client');
const moment = require('moment');


let es = [];
let i = 0;
let sum = 0;
let num = 0;

setTimeout(() => setInterval(() => {
    console.log('Mean is : ' + sum / num)
}, 5000), 15000);

function myLoop() {
    setTimeout(function () {

        es.push(socket('http://10.24.51.65:4001'));

        es[i].on('connect', function () {
            // console.log('connected to socket server');
            // socket.emit('message', 'Client: hello!');

            es[i].on('message', function (event) {
                let data = JSON.parse(event);
                let currTime = moment();

                let millisecondsDiff = currTime.diff(data.time, 'milliseconds');
                if (i >= 10000) {
                    sum += millisecondsDiff;
                    num++
                }
            });

            es[i].on('disconnect', function () {
                console.log('disconnected from socket server !!');
            });

            es[i].on('connect_error', (error) => {
                console.log('connect_error');
                console.log(error);
            });

            es[i].on('connect_timeout', (timeout) => {
                console.log('connect_timeout');
                console.log(timeout);
            });

            es[i].on('error', (error) => {
                console.log('error');
                console.log(error);
            });

            i++;
            if (i < 10000) {
                myLoop();
            }

        });
    }, 1)
}

myLoop();
