const express = require('express');
const swaggerUi = require('swagger-ui-express');
const jwt = require('express-jwt');

const UserMetaController = require('controller/user-meta');
const highTeaController = require('controller/high-tea');
const swaggerDocument = require('./swagger.json');
const config = require('./config');
const logger = require('./logger');

logger.info(process.env.NODE_ENV);
const app = express();

app.use('/usermeta', jwt({secret: config.secret}), UserMetaController);
app.use('/hightea', highTeaController);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(function (err, req, res, next) {
        
    if(err.name === 'UnauthorizedError')
    {
        res.status(401).send('Invalid token provided.');
    }

    logger.error(err.name);
});


module.exports = app;