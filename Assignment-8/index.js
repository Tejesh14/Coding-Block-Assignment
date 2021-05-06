const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const methodOverride = require('method-override')
const blogRoutes = require('./routes/blogs');
// const seedDB = require('./seed');

mongoose.connect('mongodb://localhost:27017/blogApp', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
// seedDB();

app.use(blogRoutes);

app.get('/',(req,res)=>{
    res.render('index');
})



app.listen(8080,()=>{
    console.log('Server is working on port 8080');
})