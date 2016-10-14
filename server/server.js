var db = require('../server/database/db.js')
var mySQL = require('mysql');
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var googleConfig = require('./routes/config/googleConfig');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport')
// var util = require('util')

//DATABASE MODELS:
var User = require('./database/models/User');
var Hotel = require('./database/models/Hotel');
var Car = require('./database/models/Car');
var Flight = require('./database/models/Flight');
var Itinerary = require('./database/models/itinerary')


var siftConfig = require('./routes/config/siftConfig');
var SiftAPI = require('siftapi').default;
var siftapi = new SiftAPI(siftConfig.sift.API_KEY, siftConfig.sift.API_SECRET);

var newBookedFlight = require('./newBookedFlight');
var newBookedHotel = require('./newBookedHotel');
var newBookedCar = require('./newBookedCar');

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

var newUser;
var result;
var connectToken;
var email;
var emailConnections;
var google_id;

passport.use(new GoogleStrategy(googleConfig.google, function(accessToken, refreshToken, profile, done) {
  User.forge()
  .where({'google_id': profile.id})
  .fetch()
  .then(function(user) {
    if(!user) {
      // console.log("ADDING NEW USER");
      new User({
        'google_id': profile.id, // set the users google id                   
        'accessToken': accessToken, // we will save the token that google provides to the user                    
        'refreshToken': refreshToken, // needed for sift api 
        'fullName': profile.name.givenName + ' ' + profile.name.familyName,
        'email': profile.emails[0].value
      })
      .save()
    }
  })
    .then(function(){
      // console.log("USER IN DATABASE");
      email = profile.emails[0].value;
      google_id = profile.id;
      done(null, profile);
    })
    .catch(err => {
      console.log(err)
    })
})); 



// API ROUTES
var apiRouter = require("./routes/routes.js");
app.use("/api", apiRouter);

var reservationRouter = require('./routes/reservationRoutes');
app.use('/', reservationRouter)


app.get('/siftAuth', function(req, res){
  // console.log('res in sift', res.body)
    siftapi.addUser(email)
    .then(body => {
      newUser = body.result;
      // console.log('new user response', body.result);
    })
  .then(function() {
    siftapi.getConnectToken(email)
    .then(function(body) {
      // console.log('user token from sift:', body.result.connect_token)
      connectToken = body.result.connect_token;
    })
    .then(function(){
      siftapi.getEmailConnections(email)
        .then(function(body) {
          // console.log('email connections:', body.result)
          emailConnections = body.result;
          // res.end(emailConnections[0].email);
      }) 
    .then(function() {
      if(emailConnections.length === 0){
        res.redirect("https://api.easilydo.com/v1/connect_email?api_key=" 
          + siftConfig.sift.API_KEY + "&username="+ email 
          + "&token="+ connectToken + '&redirect_url=https://herewegoapp.herokuapp.com/');
        // console.log('>>>> REDIRECTED TO SIFT AUTH<<<<')
      } else{

        res.redirect('/?email='+email);
      }
      })
  })
      .then(function(){
        siftapi.getSifts(email, {})
        .then(body => {
          // console.log('>>> ADDING PAYLOAD TO DB <<<')
          var counter = 0;
          body.result.forEach(function(item, i) {
            if(item.domain === "hotel"){
              Hotel.forge()
              .where({"sift_id": item.sift_id})
              .fetch()
              .then(function(hotel, email){
                email = emailConnections[0].email
                if(!hotel){
                  newBookedHotel(item, email);
                }
              })
            } else if(item.domain === "flight"){
              Flight.forge()
              .where({"sift_id": item.sift_id})
              .fetch()
              .then(function(flight, email){
                 email = emailConnections[0].email
                if(!flight){
                  newBookedFlight(item, email);
                }
              })
            } else if(item.domain === "rentalcar"){
              Car.forge()
              .where({"sift_id": item.sift_id})
              .fetch()
              .then(function(car, email){
                 email = emailConnections[0].email
                if(!car){
                  newBookedCar(item, email);
                }
              })
            }
          })
        })
      })
    })
})



app.use(express.static('./dist'));


app.use('/', function (req, res){
  res.sendFile(path.resolve('client/index.html'));
})

var port = process.env.PORT || 4000;

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
});

module.exports = {
  siftInfo: {
    newUser: newUser,
    result: result,
    connectToken: connectToken, 
    email: email   
  }
}
