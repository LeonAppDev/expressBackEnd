const express = require('express');
const swaggerUi = require('swagger-ui-express');

const UserMetaController = require('./controllers/wprh_usermetaController');
const swaggerDocument = require('./swagger.json');
const jwt = require('express-jwt');
const config = require('./config');

console.log(process.env.NODE_ENV);
const app = express();
app.use('/usermeta', jwt({secret: config.secret}), UserMetaController);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.static('node_modules/swagger-ui-dist'));
app.use('/nodeapp', express.static('node_modules/swagger-ui-dist'));
app.use(function (err, req, res, next) {
        
    if(err.name === 'UnauthorizedError')
    {
        res.status(401).send('Invalid token provided.');
    }

    console.log(err.name);
});

module.exports = app;