const cors = require('cors');

const applyMiddleware = app => app.use(cors())

module.exports = applyMiddleware