var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    weight: Number,
    p_id: String,
    symptoms: String,
    medicine: String,
    dosage: String,
    duration: String,
    nooftimes: Number,
    specinst: String
});
var PrescModel = mongoose.model('Prescriptions', Schema);
module.exports.Presc = PrescModel;


// Get all prescriptions

module.exports.getAllPresc = function(callback, limit){
    PrescModel.find(callback).limit(limit);
};
