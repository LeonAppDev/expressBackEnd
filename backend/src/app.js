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
        
     //Enable CORS for all mehod
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(err.name === 'UnauthorizedError')
    {
        res.status(401).send('Invalid token provided.');
    }
    
    logger.error(err.name);
    next();
});


module.exports = app;