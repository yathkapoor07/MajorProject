var express = require('express');
var router = express.Router();
var prescription = require('C:/Users/Yatharth Kapoor/WebstormProjects/untitled/models/prescription.js');
var mongoose = require('mongoose');

/* GET prescription history. */
router.get('/', function(req, res) {
    prescription.getAllPresc(function(err, obj){
        if(err)
            throw err;
        res.send(obj);
    })
    //res.send('History');
});

module.exports = router;
