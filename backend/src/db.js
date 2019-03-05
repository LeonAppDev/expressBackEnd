const Sequelize = require('sequelize');

const config = require('./config');


const db = new Sequelize(config.db, config.dbUser, config.dbPassword, {

	host: config.host,
	dialect: 'mysql',

	pool: {
		max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
	},

	operatorAliases: false,
	define: {
        timestamps: false
    }
});

db.authenticate().then(() => {
	console.log('Connection has been established successfully');
})
.catch((err) => {
	console.error('Unable to connect to the database:', err);
});

module.exports = db;