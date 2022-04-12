var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
const mongoose = require('mongoose');
global.db = mongoose.createConnection("mongodb://localhost:27017/mydb");

const uri = process.env.MONGODB_URI;


var dbase;
var upload = multer();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var landingRouter = require('./routes/landing');
var usernameRouter = require('./routes/getUsername');
var commentRouter = require('./routes/comments');
var commentaddRouter = require('./routes/addcomment');
var displaynameRouter = require('./routes/getDisplay');

var app = express();


var expresssession = session({secret: "supersecretsecretsecretandalsoilikecheese", resave: true, saveUninitialized: true, cookie: {secure: false}});

// for parsing multipart/form-data
app.use(upload.array());
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
        dbase.createCollection("comments", function(err, res){
            console.log("collection comments created!");
        })
    }
    catch(error){
        console.log(error);
    }
});


app.use('/user', userRouter);
app.use('/signupform', signupRouter);
app.use('/loginform', loginRouter);
app.use('/landing', landingRouter);
app.use('/getUsername', usernameRouter);
app.use('/getDisplay', displaynameRouter);
app.use('/comments', commentRouter);
app.use('/addcomment', commentaddRouter);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

module.exports = app;
