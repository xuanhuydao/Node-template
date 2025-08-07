'use strict'

const mongoose = require('mongoose');
const strConnection = "mongodb://localhost:27017/shopDev";
const {countConnect} = require('../helpers/checkConnect');

class Database {
	constructor() {
		this.connect();
	}

	//connect to the database
	connect(type = "mongodb") {
		if (1 === 1) {
			mongoose.set('debug', true);
			mongoose.set('debug', { color: true });
		}

		mongoose.connect(strConnection).then(_ => { console.log("Connected to mongodb successfully"), countConnect() })
		.catch(err => console.log("Error connecting to mongodb", err));
	}
	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;