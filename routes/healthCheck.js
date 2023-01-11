const express = require('express'),
    router = express.Router();

router.get('/', health);

async function health(req, res, next) {
    let healthResponse,
        metaData = {
            dateTime: new Date().toISOString(),
            status: 'Success',
            statusCode: 200
        },
        data = {
            message: 'Server Up!'
        };
    healthResponse = {
        metaData,
        data
    }
    res.status(healthResponse.metaData.statusCode).send(healthResponse);
}

module.exports = router;
