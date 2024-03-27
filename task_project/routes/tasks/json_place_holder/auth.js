const express = require("express");
const router = express.Router()
require('dotenv').config()

router.get('/',(req,res)=>{
    res.redirect('/json_place_holder/posts')
})


router.get('/posts',(req,res)=>{
    res.render('json_place_holder/index')
})

router.get('/postDetails/:id?',(req,res)=>{
    res.render('json_place_holder/post_details',{id:req.params.id})
})



module.exports = router;


