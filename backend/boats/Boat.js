const Sequelize = require('sequelize');

const db = require('../db');

const Boat = db.define('boat', {
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	name:{
        type: Sequelize.STRING    
	},
	type:{
		type: Sequelize.ENUM('sail', 'motor')
	},
	length:{
		type: Sequelize.DECIMAL(4,2)
	},
	work_description:{
		type: Sequelize.TEXT
	},
	photo: {
		type: Sequelize.STRING
	},
	arrival_date: {
		type: Sequelize.DATE
	},
	delivery_date: {
		type: Sequelize.DATE
	}

}, {
	tableName: 'boat',
	timestamps: false
});

module.exports = Boat;