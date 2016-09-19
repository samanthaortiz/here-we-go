var router = require("express").Router();
var request = require('request');

var db = require('./db.js');
var mysql = require('mysql');
var Users = require ('./collections/Users.js')

// DB ====================================================================== */
router.get('/user-account', function(req, res) {
  console.log('>>>>>>>>>> ENTER GET USER ACCOUNT FROM DB <<<<<<<<<<');

  db.knex.select().table('users')
    .then(function(rows) {
      console.log('>>>>>>>>>> ROWS: ', rows);
    });
});





// HOTEL SEARCH ============================================================ */
router.post("/HotelSearch", function(req, res) {

  console.log('>> ENTER /HotelSearch');

  console.log('request: ', req.body);
  var urlAPI = 'http://terminal2.expedia.com:80/x/mhotels/search?city='+req.body.city+'&checkInDate='+req.body.checkInDate+'&checkOutDate='+req.body.checkOutDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });

  // var urlAPI = 'https://api.meetup.com/2/categories?key=4e47134a736d2f51696c4b8653b684c&sign=true';
 
  // request({url: urlAPI}, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     res.send(body);
  //   }
  // });

});

module.exports = router;