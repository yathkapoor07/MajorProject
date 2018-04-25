var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
UserData = require('C:/Users/Yatharth Kapoor/WebstormProjects/untitled/models/user_data.js');

/* GET home page. */
router.get('/', function(req, res1, res2) {
  res1.render('C://Users//Yatharth Kapoor//Documents//MajorProject//views//Doctor Side//doctorpage.html');
  //UserData.

});

module.exports = router;
