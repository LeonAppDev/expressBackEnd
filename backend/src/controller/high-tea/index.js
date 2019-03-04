const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('db');

const router = express.Router();
router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());



router.get('/', (req, res) => {

    console.log('Get all high tea');
});


module.exports = router;