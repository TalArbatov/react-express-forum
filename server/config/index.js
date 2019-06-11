require("dotenv").config();

module.exports = {
  isProduction: process.env.NODE_ENV === "production",
  deployPath: process.env.DEPLOY_PATH || "/",
  port: process.env.PORT || 3000,
  dbAddress: "mongodb://localhost:27017/reactExpressForums",

  jwt: {
    secret: this.isProduction ? process.env.JWT_SECRET : "secret"
  },

  facebook: {
    appID: process.env.FB_APP_ID,
    secret: process.env.FB_SECRET
  }
};
