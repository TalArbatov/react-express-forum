const bodyparser = require('./bodyparser');
const testMiddleware = require('./testMiddleware');

const applyMiddlewares = app => {
    const middlewares = [bodyparser, testMiddleware];
    middlewares.forEach(middleware => {
        return app.use(middleware)
    })
}

module.exports = applyMiddlewares