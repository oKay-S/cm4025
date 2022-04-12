var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var multer = require('multer');
var session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

var dbase;
var upload = multer();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var landingRouter = require('./routes/landing');
var usernameRouter = require('./routes/getUsername');


var app = express();
var expresssession = session({secret: "supersecretsecretsecretandalsoilikecheese", resave: true, saveUninitialized: true});

// for parsing multipart/form-data
app.use(upload.array());
app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(expresssession);
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
    try{
        dbase.createCollection("users", function(err, res){
            console.log("collection comments created!");
        })
    }
    catch(error){
        console.log(error);
    }
});


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/signupform', signupRouter);
app.use('/loginform', loginRouter);
app.use('/landing', landingRouter);
app.use('/getUsername', usernameRouter);

module.exports = app;
