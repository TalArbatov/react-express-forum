const bodyparser = require('./bodyparser');
const testMiddleware = require('./testMiddleware');
const staticMiddelware = require('./staticMiddleware')
const middlewares = [bodyparser, testMiddleware, staticMiddelware];
const applyMiddlewares = app => middlewares.forEach(middleware => middleware(app));

module.exports = applyMiddlewares