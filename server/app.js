require('dotenv').config()
const express = require('express');
const path = require('path');
const applyMiddlewares = require('./middlewares');
const config = require('./config')
const mongoose = require('mongoose')
const router = require('./')
//init app and apply middlewares
const app = express();
applyMiddlewares(app);

//connect to mongo
mongoose.connect(config.dbAddress, {useNewUrlParser: true}, (err) => {
    if(err) console.log(`Problem connecting to ${config.dbAddress} \n Error: ${err}`)
})
//load mongoose schemas
require('./models/UserSchema')



app.listen(config.port, () => {
    console.log(`Listening on ${config.port}`)
})