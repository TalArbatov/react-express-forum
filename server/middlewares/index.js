const bodyparser = require('./bodyparser');
const testMiddleware = require('./testMiddleware');

const middlewares = [bodyparser, testMiddleware];
const applyMiddlewares = app => middlewares.forEach(middleware => middleware(app));

module.exports = applyMiddlewares