const express = require('express');
const cors = require('cors');
const { checkIfAuthenticated } = require('./firebase-service');
const port = 8080

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send({data: 'hello'});
})

app.get('/validate-token', async (req, res) => {
    const response = await checkIfAuthenticated(req, res);
    res.send(response);
})

app.listen(port);