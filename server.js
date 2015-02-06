var express = require('express');

var app = express();

app.listen(12201);

app.use(function(req, res, next) {
	res.setHeader('Access-Controll-Allow-Origin', '*');
	res.setHeader('Access-Controll-Allow-Methods', 'OPTION, GET, POST');
	res.setHeader('Access-Controll-Allow-Header', 'Origin, X-Requested, Content-Type, Accept');
	next();
})