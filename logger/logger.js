const {
    createLogger,
    format
} = require('winston');
var winston = require('winston');
require('winston-daily-rotate-file');

const {
    combine,
    timestamp,
    ms,
    prettyPrint
} = format;

var transportErr = new winston.transports.DailyRotateFile({
        filename: __dirname + 'logs/' + 'error-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        maxSize: '20m',
        level: 'error'
    }),
    transportInfo = new winston.transports.DailyRotateFile({
        filename: __dirname + 'logs/' + 'info-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        maxSize: '20m',
        level: 'info'
    });

transportErr.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});
transportInfo.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(), ms(),
        prettyPrint()),
    defaultMeta: {
        service: 'Logger Server'
    },
    transports: [
        transportErr,
        transportInfo
    ],
});
module.exports = {
    async logger(message) {
        logger.info(message);
        console.log(message);
    }
}