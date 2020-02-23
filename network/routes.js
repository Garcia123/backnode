// const express = require('express');
const mensaje  = require('../components/message/network');
const user = require('../components/user/network');

// const router = express.Router();

const routes = function(server){
    server.use('/message', mensaje);
    server.use('/user', user);
}

module.exports = routes;