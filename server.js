var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'))
var Xhndlbrs = require('express-handlebars');
app.engine('handlebars', Xhndlbrs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port);