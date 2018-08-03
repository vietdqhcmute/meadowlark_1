var express = require('express');
var router = express.Router();
var mfortune = require('./fortune.js');
var weatherData = require('./weatherData');

module.exports.getAllRoute = function(app) {
	router.get('/', function(req, res) {
		//Weather widget testing
		app.use(function(req, res, next) {
			if (!res.locals.partials) res.locals.partials = {};
			console.log(weatherData.getWeatherData());
			res.locals.partials.weather = weatherData.getWeatherData();
			next();
		});
		res.render('home');
	});

	router.get('/about', function(req, res) {
		res.render('about', { fortune: mfortune.getFortune() });
	});

	router.get('/headers', function(req, res) {
		res.set('Content-Type', 'text/plain');
		var s = '';
		for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
		res.send(s);
	});

	app.use(router);
};
