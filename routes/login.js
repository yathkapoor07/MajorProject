var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User101 = require('C:/Users/Yatharth Kapoor/WebstormProjects/untitled/models/user_data.js');
var yath = require('C:/Users/Yatharth Kapoor/Documents/MajorProject/routes/yath.json');
var natt = require('C:/Users/Yatharth Kapoor/Documents/MajorProject/routes/natt.json');
var guest = require('C:/Users/Yatharth Kapoor/Documents/MajorProject/routes/guest.json');

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('C://Users//Yatharth Kapoor//Documents//MajorProject//views//Doctor Side//webpagecode.html');
});
//Register New User
router.get('/register', function(req, res){
    res.render('register');
});


//Register Request
router.post('/api/register', function(req, res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var username = req.body.username;
    var pass = req.body.pass;
    var emp_id = req.body.emp_id;

    // Validation
    /*req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if(errors){
        res.render('register',{
            errors:errors
        });
    } else { */
        var newUser = new User101({
            fname: fname,
            lname: lname,
            username: username,
            pass: pass,
            emp_id: emp_id
        });

        User101.createUser(newUser, function(err, user){
            if(err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'You are registered and can now login');

        res.redirect('/users/login');
    //}
});

//Login
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
    if(username === 'yatharth'){
        return res.render('C://Users//Yatharth Kapoor//Documents//MajorProject//views//Doctor Side//webpagecode.html');;
    }
    else if(username === 'natasha'){
        return res.render('C://Users//Yatharth Kapoor//Documents//MajorProject//views//Pharmacy Side//webpagecode.html');
    }
    console.log('YES');
});

module.exports = router;
