const bodyparser = require("./bodyparser");
const testMiddleware = require("./testMiddleware");
const staticMiddelware = require("./staticMiddleware");
const cors = require("./cors");

const middlewares = [cors,bodyparser, testMiddleware, staticMiddelware, ];

const applyMiddlewares = app =>
  middlewares.forEach(middleware => middleware(app));

module.exports = applyMiddlewares;
