//Adapted Code from:
// https://github.com/accimeesterlin/mernapp_youtube/blob/master/models/blogPost.js
const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    commentUsername: String,
    bulk: String
});

// Model
const Comment = db.model('Comments', BlogPostSchema);

module.exports =  Comment;