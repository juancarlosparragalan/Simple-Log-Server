const express = require('express'),
    router = express.Router();

router.get('/', healt);

async function healt(req, res, next) {
    let healtResponse,
        metaData = {
            dateTime: new Date().toISOString(),
            status: 'Success',
            statusCode: 200
        },
        data = {
            message: 'Server Up!'
        };
    healtResponse = {
        metaData,
        data
    }
    res.status(healtResponse.metaData.statusCode).send(healtResponse);
}

module.exports = router;