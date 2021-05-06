const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

// To get all Blogs
router.get('/blogs',async(req,res)=>{
    const blogs = await Blog.find({});
    res.render('blogs/show',{blogs});
})

// To get new blogs form
router.get('/blogs/new',(req,res)=>{
    res.render('blogs/new');
})

// To save the blog
router.post('/blogs',async(req,res)=>{
    // console.log(req.body);
    await Blog.create(req.body);
    res.redirect('/blogs');
})

// To see specific Blog post
router.get('/blogs/:id', async(req,res)=>{
    // console.log(req.params);
    const {id} = req.params;
    const blogData = await Blog.findById(id);
    res.render('blogs/viewBlog',{blogData});
})

// To get edit form
router.get('/blogs/:id/edit',async(req,res)=>{
    const {id} = req.params;
    const blogData = await Blog.findById(id);
    res.render('blogs/edit',{blogData});
})

// To update details by patch req
router.patch('/blogs/:id',async(req,res)=>{
    // console.log(req.body);
    const {id} = req.params;
    await Blog.findByIdAndUpdate(id,req.body);
    res.redirect('/blogs');
})

// To delete blog
router.delete('/blogs/:id',async(req,res)=>{
    const {id} = req.params;
    await Blog.findByIdAndRemove(id);
    res.redirect('/blogs');
})

module.exports = router;