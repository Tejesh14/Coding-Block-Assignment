const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    author : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    img : {
        type: String
    },
    content : {
        type: String
    }
})

const Blog = mongoose.model('Blog',blogsSchema);

module.exports = Blog;