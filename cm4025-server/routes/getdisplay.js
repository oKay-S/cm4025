var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

router.get('/', async (req, res) => {
    MongoClient.connect(url, async function (err, database) {
        var dbase = database.db("mydb");
        var users = await dbase.collection('users')
        const displaynameforuser = dbase.users.findOne({'username': req.session.loggedinas}, req.body.displayname)
            res.redirect('/landing')
        return displaynameforuser;
    });
    }
);

module.exports = router;
