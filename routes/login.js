var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User101 = require('C:/Users/Yatharth Kapoor/WebstormProjects/untitled/models/user_data.js');

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('C:/Users/Yatharth Kapoor/WebstormProjects/untitled/views/webpagecode.html');
});

router.post('/api/login', function(req, res){
    var username = req.body.username;
    var pass = req.body.pass;

    /*User101.UserData.findOne({username: username, pass: pass}, function(err, users){
        if(err){
            throw console.log(err);
            return res.status(500).send();
        }
        if(!users)
            return res.status(404).send();

        return res.json(User101.UserData.find({username: 'username'}));
    });*/
    if(username === 'yatharth' || username === 'natasha')
        return res.status(200).send();
    //console.log('YES');
});

module.exports = router;
