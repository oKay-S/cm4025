var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

// POST method route
router.post('/', async (req, res) => {
    MongoClient.connect(url, async function (err, database) {
        var dbase = database.db("mydb");
        var notvalid = await dbase.collection('users').findOne({$or: [{'username': req.body.username}]})
        if (notvalid === null) {
            try {
                await dbase.collection('users').insertOne(req.body);
                console.log('saved to database');
                res.redirect('/login');
            }
            catch(e){
                console.log(e);
            }

        }
        else{
            console.log("invalid register");
        }
    });
});

module.exports = router;
