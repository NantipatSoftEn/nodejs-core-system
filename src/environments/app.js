require('dotenv').config();

const environments = {
    PORT_APP: process.env.PORT_APP || 3000
}

module.exports = environments;