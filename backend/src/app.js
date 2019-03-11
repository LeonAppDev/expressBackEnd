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
app.use('/hightea', highTeaController);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(function (err, req, res, next) {
        
    //Enable CORS for all mehod
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   if(err.name === 'UnauthorizedError')
   {
       res.status(401).send('Invalid token provided.');
   }
   
   logger.error(err.name);
    //intercepts OPTIONS method
   if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
      }
      else {
      //move on
        next();
      }
});



module.exports = app;