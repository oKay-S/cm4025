//Adapted Code from:
// https://github.com/accimeesterlin/mernapp_youtube/blob/master/models/blogPost.js
const mongoose = require('mongoose');
const {ObjectId} = require("mongodb");


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    _id: String,
    commentUsername: String,
    comment: String
});

// Model
const Comment = db.model('Comments', BlogPostSchema);

module.exports =  Comment;