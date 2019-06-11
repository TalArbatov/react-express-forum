require('dotenv').config()
const express = require('express');
const path = require('path');
const applyMiddlewares = require('./middlewares');
const config = require('./config')

const app = express();
applyMiddlewares(app);

app.listen(config.port, () => {
    console.log(`Listening on ${config.port}`)
})