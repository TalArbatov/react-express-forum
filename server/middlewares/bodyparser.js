const bodyParser = require('body-parser');

const applyMiddleware = app => {
    return app.use(bodyParser.json(), bodyParser.urlencoded({extended:true})) 
}

module.exports = applyMiddleware;

