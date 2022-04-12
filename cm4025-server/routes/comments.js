var express = require('express');
var router = express.Router();

const Comment = require('../models/blogPost');


// Routes
router.get('/', (req, res) => {

    Comment.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

module.exports = router;
