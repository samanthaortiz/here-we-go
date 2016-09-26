var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var authConfig = require('./auth/config');
var passport = require('passport')
var util = require('util')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(logger('dev'));
app.use(cookieParser());
app.use(session({
  secret: 'herewegoisthebest',
  resave: false,
  saveUninitialized: false
}));
// app.set('views', __dirname + '../client/views');
// app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));


// API ROUTES
var apiRouter = require("./routes/routes.js");
app.use("/api", apiRouter);

//passport config
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  //find user
  done(null, obj);
});


passport.use(new GoogleStrategy(
  authConfig.google,
 function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));


// app.get('/', function(req, res) {
//   res.render('index', {
//     user: req.user
//   });
// });

// app.get('/login', function(req, res){
//   res.render('login', { user: req.user });
// });


// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['openid email profile'] }));


// app.get('/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/login'
//   }),
//   function(req, res) {
//     // Authenticated successfully
//     res.redirect('/');
//   });

// app.get('/account', ensureAuthenticated, function(req, res) {
//   res.render('account', {
//     user: req.user
//   });
// });

// app.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });


// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// }




app.use(express.static('./dist'));

app.use('/', function (req, res){
  res.sendFile(path.resolve('client/index.html'));
})

var port = process.env.PORT || 4000;

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
});
