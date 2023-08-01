const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./routes/index');

const errorHandler = require('./utils/middlewares/errorHandler');
const setHeader = require('./utils/middlewares/setHeader');

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(setHeader);

server.use('/', router);

server.use(errorHandler);

module.exports = server;
