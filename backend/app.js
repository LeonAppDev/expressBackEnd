const express = require('express');
const swaggerUi = require('swagger-ui-express');

const BoatsController = require('./boats/BoatsController');
const swaggerDocument = require('./swagger.json');

console.log(process.env.NODE_ENV);
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/boats', BoatsController);
app.use('/', (req, res) => {
    
    res.status(200).send('Welcome to boats manager.');
});

module.exports = app;