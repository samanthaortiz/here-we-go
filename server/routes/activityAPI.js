var router = require("express").Router();
var request = require('request');

// ACTIVITIES SEARCH API ================================================================== 
var getActivityData = function(req, res, next){
  console.log('>> ENTER ACTIVITIES API ROUTER ', req.body);

  var urlAPI = 'http://terminal2.expedia.com:80/x/activities/search?location='+req.body.location+'&resultsPerPage=25&startDate='+req.body.startDate+'&endDate='+req.body.endDate+'&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767'

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('Activity Response Body', body);
      res.data.push({ activityData: JSON.parse(body) });
      next();
    }
  });
}

module.exports = getActivityData;
