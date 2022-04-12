var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

router.get('/', async (req, res) => {
        return req.session.loggedinas;
    }
);

module.exports = router;