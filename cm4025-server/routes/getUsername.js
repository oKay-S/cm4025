var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

router.get('/', async (req, res) => {
        try{
            return await req.session.loggedinas;
            return res.json({success: true});
        }
        catch (e) {
            return res.json({success: false});
        }
    }
);

module.exports = router;