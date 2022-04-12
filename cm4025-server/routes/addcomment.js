var express = require('express');
var router = express.Router();

const Comment = require('../models/blogPost');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";


// POST method route
router.post('/', async (req, res) => {
    MongoClient.connect(url, async function (err, database) {

        var dbase = database.db("mydb");
        try {
            await dbase.collection('comments').insertOne({'comment': req.body.bulk, 'username': req.session.loggedinas});
            console.log('saved comment to database');
            return res.json({success: true});
        }
        catch(e){
            return res.json({success: false});
        }
    })
});

module.exports = router;
