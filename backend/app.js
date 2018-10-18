const express = require('express');
const swaggerUi = require('swagger-ui-express');

const UserMetaController = require('./controllers/wprh_usermetaController');
const swaggerDocument = require('./swagger.json');
const jwt = require('express-jwt');
const config = require('./config');

console.log(process.env.NODE_ENV);
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/usermeta', jwt({secret: config.secret}), UserMetaController);
app.use('/', (req, res) => {
    
    res.status(200).send('Welcome to express wordpress backend.');
});

module.exports = app;