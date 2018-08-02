var express= require('express');
var exphdbs= require('express-handlebars').create({defaultLayout:'main'});
var mfortune = require('./lib/fortune.js');

var app=express();


app.set('port',3300);
app.engine('handlebars',exphdbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.render('home');
});
app.get('/about', function(req,res){
    res.render('about', {hello:'Hello world', fortune: mfortune.getFortune()});
});

app.listen(app.get('port'));