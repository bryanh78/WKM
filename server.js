var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();
var userCtrl = require('./controllers/usersControl.js')
var passport = require('passport')
var passportConfig = require('./passportConfig.js')


// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


var session = require('express-session')
app.sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
})
app.use(app.sessionMiddleware)
app.use(passport.initialize());
app.use(passport.session());

// Routes \\
app.get('/', function(req, res){
  res.sendFile('/html/game.html',{root:'./public'})
});

app.get('/death', function(req, res) {
  res.sendFile('/html/death.html',{root:'./public'})
})

app.get('/victory', function(req, res) {
  res.sendFile('/html/victory.html',{root:'./public'})
})

app.isAuthenticatedAjax = function(req, res, next){
    // If the current user is logged in...
    if(req.isAuthenticated()){
    // Middleware allows the execution chain to continue.
        return next();
    }
    // If not, redirect to login
    res.send({error:'not logged in'});
}

app.post('/victory', userCtrl.score)
app.post('/signup', userCtrl.signUp)
app.post('/login', userCtrl.logIn)

app.get('/profile', app.isAuthenticatedAjax, function(req, res) {
	res.send(req.user)
})












// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
