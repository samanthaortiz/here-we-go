var router = require("express").Router();
var request = require('request');


// // HOTEL SEARCH API ================================================================== */
function getCampgroundData(req, res, next) {
  // console.log('>> ENTER Campground API ROUTER ', req.body);

  var urlAPI = 'http://terminal2.expedia.com:80/x/mCampgrounds/search?city='+req.body.location+'&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.data = [];
      res.data.push({ campgroundData: JSON.parse(body) });
      next();
    }
  });
}

module.exports = getCampgroundData;