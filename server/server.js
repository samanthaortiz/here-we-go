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
var passport = require('passport')
// var util = require('util')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./database/models/User')
var Itinerary = require('./database/models/itinerary')
var siftConfig = require('./routes/config/siftConfig');
var newBookedFlight = require('./newBookedFlight');

var SiftAPI = require('siftapi').default;
var siftapi = new SiftAPI(siftConfig.sift.API_KEY, siftConfig.sift.API_SECRET);

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

passport.use(new GoogleStrategy(googleConfig.google, function(accessToken, refreshToken, profile, done) {
  User.forge()
  .where({'google_id': profile.id})
  .fetch()
  .then(function(user) {
    if(!user) {
      console.log("ADDING NEW USER");
      new User({
        'google_id': profile.id, // set the users google id                   
        'accessToken': accessToken, // we will save the token that google provides to the user                    
        'refreshToken': refreshToken,
        'fullName': profile.name.givenName + ' ' + profile.name.familyName, // look at the passport user profile to see how names are returned
        'email': profile.emails[0].value
      })
      .save()
    }
    
    console.log('this is the user after adding to db:', user)
  }) // CLOSES LINE 58
  .then(function(err, user) {
    console.log('user profile before sift', profile);
    email = profile.emails[0].value;
    siftapi.addUser(email)
    .then(body => {
      newUser = body.result;
      console.log('new user response', body.result);
    })
  })
  // .then(function() {
    // siftapi.getConnectToken(email)
    // .then(function(body) {
    //   console.log('user token from sift:', body.result.connect_token)
    //   // connectToken = body.result.connect_token;
    // })
    // .then(function() {

    //   // app.get('/auth/google/callback', function(req, res) {
    //   //   // passport.authenticate('google', { 
    //   //     res.redirect("https://api.easilydo.com/v1/connect_email?api_key=" + siftConfig.API_KEY + "&username="+ email + "&token="+ connectToken);
    //   //     console.log('>>>> REDIRECTED <<<<')
    //   //   // }
    //   // });
    //   console.log('redirecting')
    // })
    .then(function(){
      var emailConnections;
      siftapi.getEmailConnections(email)
      .then(function(body) {
        console.log('email connections:', body.result)
        emailConnections = body.result;
      }) // CLOSES LINE 96
      .then(function(){
        siftapi.getSifts(email, {})
        .then(body => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< c0fb13e216a1488958b53fb0948f3e0490cd0fce
<<<<<<< 144b43525aba1971923632ee6ae1be5c3609fb04
          console.log('>>> ADDING PAYLOAD TO DB <<<')
          // console.log(body.result)
          var counter = 0;
          body.result.forEach(function(item, i) {
            //add custom middlware here to call within forEach depending on item domain type
            if(item.domain === "flight"){
                newBookedFlight(item.payload);
              // counter++;
              // console.log('item #'+ i, item);
              // console.log('item #'+ i +"payload: "+ JSON.stringify(item.payload))
              // console.log('<---===--------===----------===---------===--->')
              //if (item.domain === "hotel") ...
                //new Hotel({...}) middleware
              //else if (item.domain === "rentalCar") ...
                //new Car({...}) middleware
              //else if (item.domain === "flight") ...

              //   //for now, add new itinerary into db. (THIS IS WORKING!)
              // new Itinerary({
              //   // status: "ticket",
              //   trip_id: counter,
              //   status: item.domain
              // })
              // .save()
            } 
          })
          console.log('FILTERED LENGTH: ', counter);
          console.log('RESULT LENGTH: ', body.result.length);
=======
=======
          console.log('>>> ADDING PAYLOAD TO DB <<<')
          // console.log(body.result)
          var counter = 0;
>>>>>>> chore(Update): Updated code for routes.js and server.js
          body.result.forEach(function(item, i) {
            //add custom middlware here to call within forEach depending on item domain type
            if(item.domain === "hotel"){
                // newBookedFlight(item.payload);
              // counter++;
              console.log('item #'+ i, item);
              console.log('item #'+ i +"payload: "+ JSON.stringify(item.payload))
              // console.log('<---===--------===----------===---------===--->')
              //if (item.domain === "hotel") ...
                //new Hotel({...}) middleware
              //else if (item.domain === "rentalCar") ...
                //new Car({...}) middleware
              //else if (item.domain === "flight") ...

              //   //for now, add new itinerary into db. (THIS IS WORKING!)
              // new Itinerary({
              //   // status: "ticket",
              //   trip_id: counter,
              //   status: item.domain
              // })
              // .save()
            } 
          })
<<<<<<< c0fb13e216a1488958b53fb0948f3e0490cd0fce
=======
=======
          console.log('>>> ADDING PAYLOAD TO DB <<<')
          // console.log(body.result)
          var counter = 0;
>>>>>>> a64488c8109bbb59826653baa469ac348c858490
          body.result.forEach(function(item, i) {
            //add custom middlware here to call within forEach depending on item domain type
            if(item.domain === "hotel"){
                // newBookedFlight(item.payload);
              // counter++;
              console.log('item #'+ i, item);
              console.log('item #'+ i +"payload: "+ JSON.stringify(item.payload))
              // console.log('<---===--------===----------===---------===--->')
              //if (item.domain === "hotel") ...
                //new Hotel({...}) middleware
              //else if (item.domain === "rentalCar") ...
                //new Car({...}) middleware
              //else if (item.domain === "flight") ...

              //   //for now, add new itinerary into db. (THIS IS WORKING!)
              // new Itinerary({
              //   // status: "ticket",
              //   trip_id: counter,
              //   status: item.domain
              // })
              // .save()
            } 
          })
<<<<<<< HEAD
>>>>>>> localBranch
          // console.log('>>>>> getSifts: ', body.result.payload)
          // console.log(body.result)
          // body.result.forEach(function(item, i) {
          //   console.log('item #'+ i, item.payload);
          // })
>>>>>>> chore(Styles): Added styles to the dashboard page
=======
          console.log('FILTERED LENGTH: ', counter);
          console.log('RESULT LENGTH: ', body.result.length);
>>>>>>> chore(Update): Updated code for routes.js and server.js
=======
          console.log('FILTERED LENGTH: ', counter);
          console.log('RESULT LENGTH: ', body.result.length);
>>>>>>> a64488c8109bbb59826653baa469ac348c858490
        })   
      })
    })
    .then(function(){
      console.log("USER IN DATABASE");
      done(null, profile);
    })
    .catch(err => {
      console.log(err)
    })
  // }) // CLOSES LINE 82
})); // CLOSES 'passport.use(...)'

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

module.exports = {
  siftInfo: {
    newUser: newUser,
    result: result,
    connectToken: connectToken, 
    email: email   
  }
}