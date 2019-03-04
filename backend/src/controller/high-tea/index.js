const express = require('express');
const bodyParser = require('body-parser');

const db = require('db');

const router = express.Router();
router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());

const posts = db.import('../../models/wprh_posts');
const postMeta = db.import('../../models/wprh_postmeta');
const wcOrderItems = db.import('../../models/wprh_woocommerce_order_items');
const wcOrderItemMeta = db.import('../../models/wprh_woocommerce_order_itemmeta');

posts.hasMany(postMeta, {as: 'orderMetas'});

router.get('/', async (req, res) => {
    
    let postData = await post.findAll();

});


module.exports = router;