var router = require("express").Router();
var request = require('request');


// // HOTEL SEARCH API ================================================================== */
function getHotelData(req, res, next) {
  console.log('>> ENTER HOTEL API ROUTER ', req.body);

  var urlAPI = 'http://terminal2.expedia.com:80/x/mhotels/search?city='+req.body.location+'&resultsPerPage=25&checkInDate='+req.body.startDate+'&checkOutDate='+req.body.endDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

  request({
    url: urlAPI,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'
    }
  }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.data = [];
      res.data.push({ hotelData: JSON.parse(body) });
      next();
    } else {
      console.error('EERRRRROOOOOOR', error);
    }
  });
}

module.exports = getHotelData;