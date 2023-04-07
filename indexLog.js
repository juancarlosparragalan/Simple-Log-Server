const config = require('./config/config'),
    express = require("express"),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    health = require('./routes/healthCheck'),
    logger = require('./routes/logger');

const app = express(),
    server = require('http').Server(app);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(bodyParser.json());

//health server
app.use('/health', health);

app.use('/logger', logger);

server.listen(config.port, () => {
    console.log("El servidor está inicializado en el puerto: " + config.port);
});
