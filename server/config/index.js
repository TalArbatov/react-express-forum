require('dotenv').config();

module.exports = {
    isProduction: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    secret: this.isProduction ? process.env.JWT_SECRET : 'secret'
}