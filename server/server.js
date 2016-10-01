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
var siftConfig = require('./routes/config/siftConfig');

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

passport.use(new GoogleStrategy(
  googleConfig.google,
 function(accessToken, refreshToken, profile, done) {
    User.forge().where({'google_id': profile.id}).fetch()
      .then(function(user){
        if(!user){
          console.log("ADDING NEW USER")
          // console.log("REFRESH TOKEN", refreshToken)
          new User({
          'google_id': profile.id, // set the users google id                   
        'accessToken': accessToken, // we will save the token that google provides to the user                    
        'refreshToken': refreshToken,
        'fullName': profile.name.givenName + ' ' + profile.name.familyName, // look at the passport user profile to see how names are returned
        'email': profile.emails[0].value
        }).save()
      }
      console.log('this is the user after adding to db:', user)
    })
    .then(function(err, user){
        console.log('user profile before sift', profile);
        var email = profile.emails[0].value;
        siftapi.addUser(email)
          .then(body => {
          newUser = body.result;
          console.log('new user response', body.result)
          
          // {
          //     "user_id": "<newly created user id>",
          //     "username": "<given user name>"
          // }
          
          })

        siftapi.getConnectToken(email)
          .then(function(body) {
            console.log('user token from sift:', body.result.connect_token)
            connectToken = body.result.connect_token;
          })
          .catch(function(err) {
            console.log('error getting connect token')
            return console.log(err);
          }); 


        // var params = {
        //   account: email,
        //   refresh_token: '1/DEeyCZbCypQT6-b46pPthFxmEpNVEQSvPlzTAoq1rhA'
        // };

        // var newEmailConnectionId;
        // siftapi.addEmailConnection(email, 'google', params)
        //   .then(function(body) {
        //     console.log('body from addemail connection', body)
        //     console.log('added email connection: ', body.result)
        //     newEmailConnectionId = body.result.id;
        //   })
        //   .catch(function(err) {
        //     console.log('error creating email connection')
        //     return console.log(err);
        //   });


        var emailConnections;
        siftapi.getEmailConnections(email)
          .then(function(body) {
            console.log('email connections:', body.result)
            emailConnections = body.result;
          })
          .catch(function(err) {
            console.log('error getting email connections')
            return console.log(err);
          });



          // siftapi.getSift(profile.emails[0].value, '', { include_eml: 1 })
          //   .then(function(body) {
          //     console.log('get sift body result:', body.result)
          //     result = body.result;
          //   })
          //   .catch(function(err) {
          //     return console.log(err);
          //   });


          // fs.readFile('', function(err, eml) {
          //   if(err) {
          //     return console.log(err);
          //   }

          //   sift.discovery('', eml)
          //     .then(function(body) {
          //       data = body;
          //     })
          //     .catch(function(err) {
          //       return console.log(err);
          //     });
          // });



          siftapi.getSifts(email, {})
            .then(body => {
              // body.result.forEach(function(item, i){
              //   console.log('item #'+ i, item.payload)
              // })

              // body.result[28].payload.reservationFor.forEach(function(res, i){
              //   console.log('dep air', res.departureAirport, 'arr air', res.arrivalAirport, 'seller',res.seller)
              // })
                // console.log('get sifts body', body.result.length)
                
          //       {
          //           "message": "success",
          //           "code": 200,
          //           "id": "<uuid>",
          //           "result": [
          //               {
          //                   "payload": <schema object for sift payload>,
          //                   "sift_id": <sift id>,
          //                   "mime_id": <id of raw email message>,
          //                   "fid": <id of folder in the email server>,
          //                   "mid": <id of message in the email server>,
          //                   "account_id": <id of email account>,
          //                   "user_id": <id of user>
          //               }, ...
          //           ]
          //       }
                
            })
      // console.log('accessToken', accessToken);
      // console.log('refresh token', refreshToken);
      // console.log('profile.refreshToken', refreshToken);
      console.log("USER IN DATABASE");
      done(null, profile);
    })
      .catch(err => {
        console.log(err)
      });
  // console.log("USER ID", profile.id);
  // console.log("NAME", profile.name.givenName + ' ' + profile.name.familyName);
  // console.log("EMAIL", profile.emails[0].value)
  //   console.log("TOKEN", accessToken)
  })
);

// siftapi.addUser(user)
//     .then(body => {
//         newUser = body.result;
//         console.log('new user response', body.result)
        
//         {
//             "user_id": "<newly created user id>",
//             "username": "<given user name>"
//         }
        
//     })
//     .catch(err => {
//         console.log(err)
//     });

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
