const express = require('express');
const bodyParser = require('body-parser');
const Op = require('sequelize').Op;

const db = require('db');
const logger = require('logger');
const constants = require('../../constants');

/*const constants = {
	highTea: 'HighTea',
};*/

const router = express.Router();
router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());

const posts = db.import('../../models/wprh_posts');
const postMeta = db.import('../../models/wprh_postmeta');
const wcOrderItems = db.import('../../models/wprh_woocommerce_order_items');
const wcOrderItemMeta = db.import('../../models/wprh_woocommerce_order_itemmeta');

posts.hasMany(postMeta, { foreignKey: 'post_id', sourceKey: 'ID'});
postMeta.belongsTo(posts, { foreignKey: 'post_id', targetKey: 'ID' });
posts.hasMany(wcOrderItems, { foreignKey: 'order_id', sourceKey: 'ID'});
wcOrderItems.belongsTo(posts, { foreignKey: 'order_id', targetKey: 'ID'});
wcOrderItems.hasMany(wcOrderItemMeta, { foreignKey: 'order_item_id', sourceKey: 'order_item_id'});
wcOrderItemMeta.belongsTo(wcOrderItems, { foreignKey: 'order_item_id', targetKey: 'order_item_id'});

router.get('/', async (req, res) => {
    
    try{
		    let postData = await posts.findAll({
		    	include: [ postMeta,
		    	    { model: wcOrderItems,
		    	      where: {
		                order_item_name: {
		                	[Op.like]: '%'+constants.highTea+'%'
		                }, 
		    	        },
		    	      include: [wcOrderItemMeta]
		    	     } ],
		    	where: {
		    		post_type: 'shop_order',
		    		post_status: {
		    			[Op.or]: ['wc-processing', 'wc-completed']
		    		}
		    	}
				})
				console.log(req);
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		    res.status(200).send(postData);
		}
		catch(error)
		{
			  res.status(500).send('There was a problem finding the usermeta. '+err)

		}

});


module.exports = router;