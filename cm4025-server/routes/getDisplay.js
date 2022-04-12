var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;

router.get('/', async (req, res) => {
    MongoClient.connect(url, async function (err, database) {
        var dbase = database.db("mydb");
        var users = dbase.collection('users');
        const displaynameforuser = await users.findOne({'username': req.session.loggedinas}, req.body.displayname);
        return displaynameforuser;
    });
    }
);

module.exports = router;
