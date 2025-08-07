const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const app = express();

//init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init db
require('./models/init.mongodb');
const { checkOverload } = require('./helpers/checkConnect');
// checkOverload();

//init routes
app.get('/', (req, res, next) => {
	const strCompress = "hello world";
	return res.status(200).json({
		message: "welcome to Node-template",
		metadata: strCompress.repeat(100000)
	})
});
//handling errors

module.exports = app;