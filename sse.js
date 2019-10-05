const express = require('express');
const app = express();
const moment = require('moment');
const PORT = process.env.PORT || 4001;


let id = 0;
let num = 0;
const sse = function sse(req, res, id) {

    return () => {
        id++;
        let time = moment();
        // let body = {name: `${id}`, time: time};
        let body1 = {
            for: 'PowerMeter',
            success: true,
            devData:
            {
                index: 1,
                name: "کنتور برق واحد ۱",
                dBrand: "LinkElecs",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0MDAwIiwiZGV2RXVpIjoiMTAwNGEwNTEyNjQ4NzExMSIsIm9yZ05hbWUiOiLZhNuM2Ybaqdm-IC0g2K_Zgdiq2LEg2YXYt9mH2LHbjCIsImlhdCI6MTU2NzIyNDQ1OX0.mEu06nO__oIU8ua4lXaApGOkWvs0SX5WUaw4Yy5bCJY",
                updateTime: 10000,
                data: {
                    power: 100 * parseInt(id),
                    unit: "kWh"
                },
                dateTime: "2020-08-24T18:21:21.000Z"
            },
            errors: ""
        };
        let body2 = {
            for: 'WaterMeter',
            "success": true,
            "devData":
            {
                name: "کنتور آب واحد ۲",
                dBrand: "LinkElecs",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0MDAwIiwiZGV2RXVpIjoiMTAwNGEwNTEyNjQ4NzUzNCIsIm9yZ05hbWUiOiLZhNuM2Ybaqdm-IC0g2K_Zgdiq2LEg2YXYt9mH2LHbjCIsImlhdCI6MTU2NzIyOTQyOH0.vXuaFY2vj7B8h05n4ok3Ei8yAPHlQaCKDA-0qQyoYbw",
                updateTime: 10000,
                data: {
                    water: 48 + 2 * parseInt(id),
                    unit: "m<sup>3</sup>"
                },
                dateTime: "2019-08-24T18:17:45.000Z"
            },
            errors: "no error"
        };
        let body3 = {
            for: 'WeatherQuality',
            success: true,
            devData:
            {
                name: "کیفیت هوا واحد ۱",
                dBrand: "Zane",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0NDAxIiwiZGV2RXVpIjoiNjY2NjExMDA3MTEyMzMzMyIsIm9yZ05hbWUiOiLZhNuM2Ybaqdm-IC0g2K_Zgdiq2LEg2YXYt9mH2LHbjCIsImlhdCI6MTU2NzIzMzAzMn0.jm6g7dlLM4AevlO2cOw2NjqBoVgNeKUhIoAFsnaiykY",
                updateTime: 10000,
                data: {
                    tempreture: 27.7 + parseInt(id),
                    humidity: 52 + 2 * parseInt(id),
                    co2: 1770 + 3 * parseInt(id)
                },
                dateTime: "2019-07-24T20:15:22.827Z"
            },
            errors: "no error"
        };
        let body4 = {
            for: 'LightControl',
            success: true,
            hubMac: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodWJNYWMiOiIweDAwMTI0YjAwMThkZDA1M2QiLCJpYXQiOjE1NjcyMzMyMDR9.ZzjGVILI5E7ck48AVb5DvUPxRVFVvax5rbxn4MLJ-Eg",
            devData:
            {
                index: 2,
                updateTime: 1000,
                name: "روشنایی واحد 2",
                dBrand: "XHY_wall_switch",
                protocol: "zigbee",
                devEui: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFdWkiOiIweDAwMTI0YjAwMTRkYzI3MGIiLCJpYXQiOjE1NjcyMzMyMDR9.gZS9GBDH1d9xfUbyABlkB9gdyZivzgjnC0vKPPmHtAk",
                data: {
                    state_2: id % 2 == 0 ? "ON" : "OFF",
                    linkquality: 63,
                    state_1: id % 3 == 0 ? "ON" : "OFF",
                    state_3: id % 5 == 0 ? "ON" : "OFF",
                    dateTime: "2019-08-26T09:02:33.039Z"
                }
            }

        };
        let body5 = {
            for: 'DoorSensor',
            success: true,
            hubMac: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodWJNYWMiOiIweDAwMTI0YjAwMThkZDA1M2QiLCJpYXQiOjE1NjcyMzM1NDd9.Kb5lP8-oX3Z3mEXfWeFxL1V0ciIwSwJQEdySYwKLD8g",
            devData:
            {
                index: 1,
                updateTime: 1000,
                name: "سنسور در واحد ۱",
                dBrand: "XHY",
                protocol: "zigbee",
                devEui: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFdWkiOiIweDAwMTI0YjAwMWJiMjk4NmEiLCJpYXQiOjE1NjcyMzM1NDd9.k6lUjJO7N_pWOwz9dxpRVWF7k2EYDVdKy2Ib0pEozQ4",
                data: {
                    voltage: null,
                    battery: 100,
                    status: id % 2 == 0 ? "OPEN" : "CLOSE",
                    linkquality: 49,
                    dateTime: "2019-08-26T09:02:33.033Z"
                }
            }

        };
        let body6 = {
            for: 'Thermostat',
            success: true,
            hubMac: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodWJNYWMiOiIweDAwMTI0YjAwMThkZDA1M2QiLCJpYXQiOjE1NjcyMzM5NjB9.bmPvRpRd6olFBOhBbpBkLQkTNBG4EEEVEd57FmvA_zY",
            devData:
            {
                index: 1,
                updateTime: 1000,
                name: "ترموستات واحد ۱",
                dBrand: "owon_thermostat",
                protocol: "zigbee",
                devEui: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFdWkiOiIweDNjNmEyY2ZmZmVkMDIxOGQiLCJpYXQiOjE1NjcyMzM5NjB9.4ghEbOWYsfDXtZKucqw2VsSMOLqreFTUW3AfH0TkIWY",
                data: {
                    occupied_heating_setpoint: 19.5,
                    humidity: 46 + parseInt(id),
                    linkquality: 92,
                    local_temperature: 19.5,
                    control_sequence_of_operation: "cooling and heating 4-pipes",
                    system_mode: "cool",
                    running_mode: "cool",
                    running_state: "fan only",
                    fanMode: 2,
                    tempDisplayMode: 0,
                    keypadLockout: 0,
                    fanModeSequence: 2,
                    unoccupied_heating_setpoint: 11,
                    dateTime: "2019-07-30T06:44:17.162Z"
                }
            }

        }
        let body7 = {
            for: 'MotionDetection',
            success: true,
            devData: 
                {
                    index: 2,
                    name: "رو به روی راه پله پایین",
                    dBrand: "SenLab",
                    protocol: "lorawan",
                    id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0NDAxIiwiZGV2RXVpIjoiMDAwNjExMDA3MTAyNTAwMyIsIm9yZ05hbWUiOiJzYWtodGVtYW5lUmlib24iLCJpYXQiOjE1NjgyMDM5Mzd9.rYC7HcNTgMc7PUKSmHxIuPrkeDcRBBwJT8vGYR4osis",
                    updateTime: 10000,
                    data: {
                        battery: null,
                        count: parseInt(id)
                    },
                    dateTime: "2019-01-05T03:59:10.300Z"
                },
            errors: ""
        }
        res.write(`event: message\nid: ${id}\ndata: ${JSON.stringify(body7)}\n\n`);

    }
};

// setInterval(() => {
//     console.log(num);
// }, 1000);

app.get('/r1', (req, res, next) => {
    num++;
    res.status(200).set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
    console.log(req.get('Authorization'));
    // console.log(JSON.stringify(req.headers));

    var listener = sse(req, res, id);
    var i = setInterval(listener, 2000);
    req.on('close', () => {
        clearInterval(i);
        console.log('closed1');
        num--;
    });
    id++;
});

// echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
// sudo apt-get install -y mongodb-org
// sudo service mongod start
app.get('/r2', (req, res, next) => {
    let body1 = {
        for: 'PowerMeter',
        success: true,
        devData:
        {
            index: 1,
            name: "کنتور برق واحد ۱",
            dBrand: "LinkElecs",
            protocol: "lorawan",
            id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0MDAwIiwiZGV2RXVpIjoiMTAwNGEwNTEyNjQ4NzExMSIsIm9yZ05hbWUiOiLZhNuM2Ybaqdm-IC0g2K_Zgdiq2LEg2YXYt9mH2LHbjCIsImlhdCI6MTU2NzIyNDQ1OX0.mEu06nO__oIU8ua4lXaApGOkWvs0SX5WUaw4Yy5bCJY",
            updateTime: 10000,
            data: {
                power: 100 * parseInt(id),
                unit: "kWh"
            },
            dateTime: "2020-08-24T18:21:21.000Z"
        },
        errors: ""
    };
    let body2 = {
        for: 'WaterMeter',
        "success": true,
        "devData": [
            {
                name: "کنتور آب واحد ۱",
                dBrand: "LinkElecs",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0MDAwIiwiZGV2RXVpIjoiMTAwNGEwNTEyNjQ4NzMyMSIsIm9yZ05hbWUiOiLZhNuM2Ybaqdm-IC0g2K_Zgdiq2LEg2YXYt9mH2LHbjCIsImlhdCI6MTU2NzIyOTQyOH0.iAPnZalbwr2MZ521CSmGjwEO-O6NE9MdQkiKS3ouxgY",
                updateTime: 10000,
                data: {
                    water: 48 + parseInt(id),
                    unit: "m<sup>3</sup>"
                },
                dateTime: "2019-08-24T18:18:16.000Z"
            },
            {
                name: "کنتور آب واحد ۲",
                dBrand: "LinkElecs",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0MDAwIiwiZGV2RXVpIjoiMTAwNGEwNTEyNjQ4NzUzNCIsIm9yZ05hbWUiOiLZhNuM2Ybaqdm-IC0g2K_Zgdiq2LEg2YXYt9mH2LHbjCIsImlhdCI6MTU2NzIyOTQyOH0.vXuaFY2vj7B8h05n4ok3Ei8yAPHlQaCKDA-0qQyoYbw",
                updateTime: 10000,
                data: {
                    water: 48 + 3 * parseInt(id),
                    unit: "m<sup>3</sup>"
                },
                dateTime: "2019-08-24T18:17:45.000Z"
            }
        ],
        errors: "no error"
    };
    let body3 = {
        for: 'WeatherQuality',
        success: true,
        devData: [
            {
                name: "کیفیت هوا واحد ۱",
                dBrand: "Zane",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0NDAxIiwiZGV2RXVpIjoiNjY2NjExMDA3MTEyMzMzMyIsIm9yZ05hbWUiOiLZhNuM2Ybaqdm-IC0g2K_Zgdiq2LEg2YXYt9mH2LHbjCIsImlhdCI6MTU2NzIzMzAzMn0.jm6g7dlLM4AevlO2cOw2NjqBoVgNeKUhIoAFsnaiykY",
                updateTime: 10000,
                data: {
                    tempreture: 27.7 + parseInt(id),
                    humidity: 52 + 2 * parseInt(id),
                    co2: 1770 + 3 * parseInt(id)
                },
                dateTime: "2019-07-24T20:15:22.827Z"
            }
        ],
        errors: "no error"
    };
    let body4 = {
        for: 'LightControl',
        success: true,
        hubMac: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodWJNYWMiOiIweDAwMTI0YjAwMThkZDA1M2QiLCJpYXQiOjE1NjcyMzMyMDR9.ZzjGVILI5E7ck48AVb5DvUPxRVFVvax5rbxn4MLJ-Eg",
        devData: [
            {
                index: 1,
                updateTime: 1000,
                name: "روشنایی واحد ۱",
                dBrand: "tmp",
                protocol: "zigbee",
                devEui: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFdWkiOiIweDAwMTI0YjAwMTRkYzI2NDQiLCJpYXQiOjE1NjcyMzMyMDR9.3WUmU2Fo7npwQkopi73ApNzMncfUdzfX3NMj2gaOCEQ",
                data: {
                    state: "OFF",
                    linkquality: 34,
                    dateTime: "2019-08-26T09:02:33.032Z"
                }
            },
            {
                index: 2,
                updateTime: 1000,
                name: "روشنایی واحد 2",
                dBrand: "XHY_wall_switch",
                protocol: "zigbee",
                devEui: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFdWkiOiIweDAwMTI0YjAwMTRkYzI3MGIiLCJpYXQiOjE1NjcyMzMyMDR9.gZS9GBDH1d9xfUbyABlkB9gdyZivzgjnC0vKPPmHtAk",
                data: {
                    state_2: id % 2 == 0 ? "ON" : "OFF",
                    linkquality: 63,
                    state_1: id % 3 == 0 ? "ON" : "OFF",
                    state_3: id % 5 == 0 ? "ON" : "OFF",
                    dateTime: "2019-08-26T09:02:33.039Z"
                }
            }
        ]
    };
    let body5 = {
        for: 'DoorSensor',
        success: true,
        hubMac: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodWJNYWMiOiIweDAwMTI0YjAwMThkZDA1M2QiLCJpYXQiOjE1NjcyMzM1NDd9.Kb5lP8-oX3Z3mEXfWeFxL1V0ciIwSwJQEdySYwKLD8g",
        devData: [
            {
                index: 1,
                updateTime: 1000,
                name: "سنسور در واحد ۱",
                dBrand: "XHY",
                protocol: "zigbee",
                devEui: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFdWkiOiIweDAwMTI0YjAwMWJiMjk4NmEiLCJpYXQiOjE1NjcyMzM1NDd9.k6lUjJO7N_pWOwz9dxpRVWF7k2EYDVdKy2Ib0pEozQ4",
                data: {
                    voltage: null,
                    battery: 100,
                    status: id % 2 == 0 ? "OPEN" : "CLOSE",
                    linkquality: 49,
                    dateTime: "2019-08-26T09:02:33.033Z"
                }
            }
        ]
    };
    let body6 = {
        for: 'Thermostat',
        success: true,
        hubMac: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodWJNYWMiOiIweDAwMTI0YjAwMThkZDA1M2QiLCJpYXQiOjE1NjcyMzM5NjB9.bmPvRpRd6olFBOhBbpBkLQkTNBG4EEEVEd57FmvA_zY",
        devData: [
            {
                index: 1,
                updateTime: 1000,
                name: "ترموستات واحد ۱",
                dBrand: "owon_thermostat",
                protocol: "zigbee",
                devEui: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFdWkiOiIweDNjNmEyY2ZmZmVkMDIxOGQiLCJpYXQiOjE1NjcyMzM5NjB9.4ghEbOWYsfDXtZKucqw2VsSMOLqreFTUW3AfH0TkIWY",
                data: {
                    occupied_heating_setpoint: 19.5,
                    humidity: 46 + parseInt(id),
                    linkquality: 92,
                    local_temperature: 19.5,
                    control_sequence_of_operation: "cooling and heating 4-pipes",
                    system_mode: "cool",
                    running_mode: "cool",
                    running_state: "fan only",
                    fanMode: 2,
                    tempDisplayMode: 0,
                    keypadLockout: 0,
                    fanModeSequence: 2,
                    unoccupied_heating_setpoint: 11,
                    dateTime: "2019-07-30T06:44:17.162Z"
                }
            }
        ]
    }
    let body7 = {
        for: 'MotionDetection',
        success: true,
        devData: [
            {
                index: 1,
                name: "رو به روی راه پله پایین",
                dBrand: "SenLab",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0NDAxIiwiZGV2RXVpIjoiMDAwNjExMDA3MTAyNTAwMyIsIm9yZ05hbWUiOiJzYWtodGVtYW5lUmlib24iLCJpYXQiOjE1NjgyMDM5Mzd9.rYC7HcNTgMc7PUKSmHxIuPrkeDcRBBwJT8vGYR4osis",
                updateTime: 10000,
                data: {
                    battery: null,
                    count: 1
                },
                dateTime: "2019-01-05T03:59:10.300Z"
            },
            {
                index: 2,
                name: "رو به روی گیشه پایین",
                dBrand: "SenLab",
                protocol: "lorawan",
                id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBFdWkiOiI3MGIzZDU3ZWQwMDA0NDAxIiwiZGV2RXVpIjoiMDAwNjExMDA3MTAyNTAwNSIsIm9yZ05hbWUiOiJzYWtodGVtYW5lUmlib24iLCJpYXQiOjE1NjgyMDM5Mzd9.Kb_2R3NzWLL5zGIUpL1261OGO6NsbPOJD7t1kq4RW6w",
                updateTime: 10000,
                data: {
                    battery: null,
                    count: 1
                }
            }
        ],
        errors: ""
    }
    res.status(200).send(body7);
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});