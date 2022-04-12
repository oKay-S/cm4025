var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;

router.post('/', (req, res) => {
    MongoClient.connect(url, function (err, database) {
        var dbase = database.db("mydb");
        var users = dbase.collection('users')
        console.log(req.session.loggedinas);
        const displaynameforuser = users.updateOne({'username': req.session.loggedinas}, {$set: {'displayname': req.body.displayname}})
            console.log('metachange', users.username)
        return res.json({displaynameforuser, success: true});
    });
    }
);

module.exports = router;
