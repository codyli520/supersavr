
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var stats = require('./routes/stats');
var login = require('./routes/login');
//var add = require('./routes/add');
var signup = require('./routes/signup');
var addGrocery = require('./routes/addGrocery');
var addClothes = require('./routes/addClothes');
var addFood = require('./routes/addFood');
var addOthers = require('./routes/addOthers');
var addCategories = require('./routes/addCategories');
var account = require('./routes/account');
var goal = require('./routes/goal');
var help = require('./routes/help');
var setting = require('./routes/setting');




var addSavingGrocery = require('./routes/addSavingGrocery');
var addSavingCloth = require('./routes/addSavingCloth');
var addSavingFood = require('./routes/addSavingFood');
var addSavingOther = require('./routes/addSavingOther');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/index', index.view);
app.get('/stats',stats.view);
app.get('/',login.view);
app.get('/login',login.view);
app.get('/signup',signup.view);
app.get('/addGrocery',addGrocery.view);
app.get('/addClothes', addClothes.view);
app.get('/addFood', addFood.view);
app.get('/addOthers',addOthers.view);
app.get('/addCategories',addCategories.view);
app.get('/account', account.view);
app.get('/goal', goal.view);
app.get('/goal/:id', goal.getItemDetail);
app.get('/help', help.view);
app.get('/setting', setting.view);



app.get('/addSavingGrocery', addSavingGrocery.view);
app.get('/addSavingCloth', addSavingCloth.view);
app.get('/addSavingFood', addSavingFood.view);
app.get('/addSavingOther', addSavingOther.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
