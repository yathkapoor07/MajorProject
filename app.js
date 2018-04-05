//var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var prescription = require('./models/prescription.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Webapp');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
    console.log("Connection successful.");
});

var port = 3000;
var index = require('./routes/index');
var login = require('./routes/login');
var presc_history = require('./routes/presc_history');

/*var Schema = mongoose.Schema;
var PreSchema = new Schema({
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
var Presc = mongoose.model('Prescriptions', PreSchema);*/

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'views')));
//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Add new Prescription

app.post("/", function(request, response) {
    var NewPresc = new prescription.Presc({

        name: request.body.name,
        gender: request.body.gender,
        age: request.body.age,
        weight: request.body.weight,
        p_id: request.body.p_id,
        symptoms: request.body.symptoms,
        medicine: request.body.medicine,
        dosage: request.body.dosage,
        duration: request.body.duration,
        nooftimes: request.body.nooftimes,
        specinst: request.body.specinst
    });
    NewPresc.save(function(error){
        if(error)
            console.log(error);
        console.log('Saved!');
    });
    console.log(request.body);
});

//

app.listen(port, function(){
    console.log('Server started on port ' + port);
});

app.use('/', login);
app.use('/api/login', login);
app.use('/home', index);
app.use('/api/home', index);
app.use('/presc_history', presc_history);
app.use('/api/presc_history', presc_history);