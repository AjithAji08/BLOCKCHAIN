//We will simply fetch contents of blockchain and display them here..
const lget = require('lodash/get');
const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:8008/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});

instance
    .get('/state', {
        params: {
            address: '1d78d5',
        },
    })
    .then(response => {
        let data = lget(response, 'data.data');
        //console.log('\nPARTIES\n=================\n');
        for (patient of data) {
            const patientData = patient.data;
            const buf = Buffer.from(patientData, 'base64');
            console.log(buf.toString());
        }
    });

instance
    .get('/state', {
        params: {
            address: '1d78d5',
        },
    })
    .then(response => {
        let data = lget(response, 'data.data');
        //console.log('\nVoters\n=================\n');
        for (patient of data) {
            const patientData = patient.data;
            const buf = Buffer.from(patientData, 'base64');
            console.log(buf.toString());
        }
    });

instance
    .get('/state', {
        params: {
            address: '1d78d5',
        },
    })
    .then(response => {
        let data = lget(response, 'data.data');
        //console.log('\nVotes\n=================\n');
        for (patient of data) {
            const patientData = patient.data;
            const buf = Buffer.from(patientData, 'base64');
            console.log(buf.toString());
        }
    });
