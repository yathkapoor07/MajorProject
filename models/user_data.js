var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    username: String,
    pass: String,
    emp_id: String,
    fname: String,
    lname: String
});
var UserModel = mongoose.model('user_data', Schema);

module.exports.UserData = UserModel;

//module.exports.