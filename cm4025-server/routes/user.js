var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

router.post('/', (req, res) => {
    MongoClient.connect(url, function (err, database) {
        var dbase = database.db("mydb");
        var users = dbase.collection('users')
        const displaynameforuser = dbase.users.updateOne({'username': req.session.loggedinas}, req.body.displayname)
            console.log('metachange', users.username)
            res.redirect('/landing')
        return displaynameforuser;
    });
    }
);

module.exports = router;
