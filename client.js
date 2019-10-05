const EventSource = require("eventsource");
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

        es.push(new EventSource('http://10.24.51.65:4001/r1'));
        es[i].onmessage = function (event) {
            let data = JSON.parse(event.data);
            let currTime = moment();

            let millisecondsDiff = currTime.diff(data.time, 'milliseconds');
            if (i === 13000) {
                sum += millisecondsDiff;
                num++;
            }
            // if (millisecondsDiff >= 10) {
            //     console.log(data.name + '\t' + millisecondsDiff);
            // }
        };

        i++;
        if (i < 13000) {
            myLoop();
        }
    }, 1)
}

myLoop();
