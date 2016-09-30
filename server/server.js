var db = require('../server/database/db.js')
var mySQL = require('mysql');
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');


var cookieParser = require('cookie-parser');
var session = require('express-session');
var authConfig = require('./auth/config');
var passport = require('passport')
// var util = require('util')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./database/models/User')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(logger('dev'));
app.use(cookieParser());
app.use(session({
  secret: 'herewegoisthebest',
  resave: false,
  saveUninitialized: false
}));

//passport config
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));



passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  //find user
  // console.log('OBJECT IN DES', obj)
    done(null, obj);
});



passport.use(new GoogleStrategy(
  authConfig.google,
 function(accessToken, refreshToken, profile, done) {
    User.forge().where({'google_id': profile.id}).fetch()
      .then(function(user){
        if(!user){
          console.log("ADDING NEW USER")
          new User({
          'google_id': profile.id, // set the users facebook id                   
        'token': accessToken, // we will save the token that facebook provides to the user                    
        'fullName': profile.name.givenName + ' ' + profile.name.familyName, // look at the passport user profile to see how names are returned
        'email': profile.emails[0].value
        }).save()
      }
    })
    .then(function(err, user){
      console.log(profile);
      console.log("USER IN DATABASE")
      done(null, profile);
    })
  // console.log("USER ID", profile.id);
  // console.log("NAME", profile.name.givenName + ' ' + profile.name.familyName);
  // console.log("EMAIL", profile.emails[0].value)
  //   console.log("TOKEN", accessToken)
    }));



// API ROUTES
var apiRouter = require("./routes/routes.js");
app.use("/api", apiRouter);


app.use(express.static('./dist'));

app.use('/', function (req, res){
  res.sendFile(path.resolve('client/index.html'));
})

var port = process.env.PORT || 4000;

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
});
