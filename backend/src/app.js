const express = require('express');
const swaggerUi = require('swagger-ui-express');
const jwt = require('express-jwt');

const UserMetaController = require('controller/user-meta');
const highTeaController = require('controller/high-tea');
const swaggerDocument = require('./swagger.json');
const logger = require('./logger');
const config = require('./config');

logger.info(process.env.NODE_ENV);
const app = express();

app.use('/usermeta', jwt({secret: config.secret}), UserMetaController);
app.use('/hightea', jwt({secret: config.secret}), highTeaController);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(function (err, req, res, next) {
        
    if(err.name === 'UnauthorizedError')
    {
        res.status(401).send('Invalid token provided.');
    }

    logger.error(err.name);
});


module.exports = app;