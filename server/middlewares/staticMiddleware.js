require('dotenv').config()
const express = require('express');
const config = require('../config')
const publicPath = require('path').join(__dirname, '..', '..' , 'client', 'public')
const deployPath =config.deployPath 

const applyMiddleware = app => {
    return app.use(deployPath, express.static(publicPath))    
}

module.exports = applyMiddleware