const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false
	},
	quantity: {
		type: Sequelize.INTEGER,
		max: 10
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'image.text'
	}
});
