var express = require('express');
var router = express.Router();

const Comment = require('../models/blogPost');


// Routes
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find({})


        console.log(comments);

        return res.json(comments || []);
    } catch (e) {
        return res.json([]);
    }
    });

module.exports = router;
