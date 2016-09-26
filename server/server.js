var db = require('../server/database/db.js');
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

var logger = require('morgan');
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


var User = require('../server/database/models/User')

passport.use(new GoogleStrategy(
  authConfig.google,
 function(req, accessToken, refreshToken, profile, done) {
  // asynchronous
  process.nextTick(function(){
    if (!req.user) {

db.knex.select('*')
  .from('users')
  .where({'googe_id': profile.id}, function(err, user){
      if (err)
        return done(err);
      if(user){
        return(null, user);
      }else{
        var newUser = new User();
        newUser.google_id  = profile.id; // set the users facebook id                   
        newUser.token = accessToken; // we will save the token that facebook provides to the user                    
        newUser.fullName  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
        newUser.email = profile.emails[0].value;

         newUser.save()
         .then(function(err) {
          if (err)
            throw err;

          return done(null, newUser);
        });
       }
     });
  } 
    else{
      var user = req.user;
      user.google_id = profile.id;
      user.token = accessToken;
      user.fullName = profile.name.givenName + ' ' + profile.name.familyName;
      user.email = profile.emails[0].value;

      user.save()
      .then(function(err){
        if(err){
          throw err;
        }
        return done(null, user);
        });
      }

    });
// }));

  // if(req.user){
  //   var user = User.where('email', email);
  console.log("USER ID", profile.id);
  console.log("NAME", profile.name.givenName + ' ' + profile.name.familyName);
  console.log("EMAIL", profile.emails[0].value)
    // return done(null, profile);
  }));


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
