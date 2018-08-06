var express = require('express');
var router = express.Router();
var mfortune = require('./fortune.js');
var weatherData = require('./weatherData');

module.exports.getAllRoute = function(app) {
	router.get('/', function(req, res,next) {
		res.render('home');

	});

	router.get('/about', function(req, res) {
		res.render('about', { fortune: mfortune.getFortune() });
	});

	router.get('/headers', function(req, res) {
		res.set('Content-Type', 'text/plain');
		var s = '';
		for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
		// for (var name in req) s += name + ': ' + req[name] + '\n';
	});

	app.use(router);
};
