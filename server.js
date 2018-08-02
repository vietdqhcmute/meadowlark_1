var express= require('express');
var exphdbs= require('express-handlebars').create({defaultLayout:'main'});

var app=express();
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    ];

app.set('port',3300);
app.engine('handlebars',exphdbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.render('home');
});
app.get('/about', function(req,res){
    var randomFortune= fortunes[Math.floor(Math.random()* fortunes.length)];
    res.render('about', {fortune:randomFortune});
});

app.listen(app.get('port'));