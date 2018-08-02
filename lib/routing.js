var express= require('express');
var router= express.Router();
var mfortune = require('./fortune.js');

module.exports.getRoute= function(app){
    router.get('/',function(req,res){
        res.render('home');
    });
    router.get('/about', function(req,res){
        res.render('about', {fortune: mfortune.getFortune()});
    });
    router.get('/headers', function(req,res){
        res.set('Content-Type','text/plain');
        var s='';
        for (var name in req.headers) s+= name + ': '+req.headers[name] + '\n';
        res.send(s);
    });

    app.use(router);
}