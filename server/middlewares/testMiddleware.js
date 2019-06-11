const applyMiddleware = app => {
    return app.use([
        firstTest,
        secondTest
    ])
}

const firstTest = (req,res,next) => {
    req.test1 = 'testing middlewares 1'
    next();
}

const secondTest = (req,res,next) => {
    console.log(req.test1);
    next();
}

module.exports = applyMiddleware