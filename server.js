var express = require('express');
var exphdbs = require('express-handlebars').create({ defaultLayout: 'main' });
var router = require('./lib/routing');
var app = express();

//Configuration
app.set('port', 3300);
app.engine('handlebars', exphdbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

//Routing
router.getAllRoute(app);

app.listen(app.get('port'));
