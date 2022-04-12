var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;

// POST method route
router.post('/', async (req, res) => {
    MongoClient.connect(url, async function (err, database) {
        var dbase = database.db("mydb");
        var notvalid = await dbase.collection('users').findOne({$or: [{'username': req.body.username}]})
        if (notvalid === null) {
            try {
                await dbase.collection('users').insertOne(req.body);
                console.log('saved to database');
                return res.json({success: true});
            }
            catch(e){
                return res.json({success: false});
            }

        }
        else{
            console.log("invalid register");
        }
    });
});

module.exports = router;
