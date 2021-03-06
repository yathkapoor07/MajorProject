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

module.exports.createUser = function(newUser, callback{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    UserModel.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    UserModel.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}