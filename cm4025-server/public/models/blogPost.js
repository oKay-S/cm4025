//Adapted Code from:
// https://github.com/accimeesterlin/mernapp_youtube/blob/master/models/blogPost.js
const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Comment = mongoose.model('BlogPost', BlogPostSchema);

module.exports =  Comment;