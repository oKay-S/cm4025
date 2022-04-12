var express = require('express');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

/* GET users listing. */
router.get('/', function(req, res, next) {

        MongoClient.connect(url, async function (err, database) {
            var dbase = database.db("mydb");
            var users = await dbase.collection('users').findOne({'username': req.body.username})

            if (users !== null && users.password === req.body.password){
                console.log('login', users.username);
                req.session.loggedinas = users.username;
                res.redirect('/landing');
            }
            else{
                console.log("failed login");
            }
        });
});

module.exports = router;
