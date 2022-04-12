var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var multer = require('multer');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

var dbase;
var upload = multer();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');

var app = express();

// for parsing multipart/form-data
app.use(upload.array());
app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Connect to mongoDB
MongoClient.connect(url, function(err, database){
    if(err) throw err;
    console.log("Database Created");
    dbase = database.db("mydb");
    try{
        dbase.createCollection("users", function(err, res){
            console.log("collection users created!");
        })
    }
    catch(error){
        console.log(error);
    }
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signupform', signupRouter);

module.exports = app;
