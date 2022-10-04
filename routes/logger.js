const express = require('express'),
    router = express.Router(),
    loggerF = require('../logger/logger').logger;

router.post('/', logger);

function logger(req, res, next) {
    let message = req.body
    loggerF(message);
    res.header('x-security', 'hard').status(204).send();
}

module.exports = logger;