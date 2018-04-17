var express = require('express');
var router = express.Router();
var prescription = require('C:/Users/Yatharth Kapoor/WebstormProjects/untitled/models/prescription.js');
var mongoose = require('mongoose');
var test = require('C://Users//Yatharth Kapoor//Documents//MajorProject//views//Pharmacy Side//Exp//myjson.json');

router.get('/', function(req, res, next) {
    res.render('C://Users//Yatharth Kapoor//Documents//MajorProject//views//Pharmacy Side//Exp//index.html');
});

/* GET prescription history. */
router.get('/api', function(req, res) {
    /*prescription.getAllPresc(function(err, obj){
        if(err)
            throw err;
        res.send(obj);
    })
    //res.send('History');*/
    res.send(test);
});

module.exports = router;
