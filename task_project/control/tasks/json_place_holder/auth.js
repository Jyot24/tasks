const express = require("express");
const router = express.Router()
require('dotenv').config()

const json_place_holder_posts=(req,res)=>{
    res.redirect('/json_place_holder/posts')
}

const json_place_holder_index=(req,res)=>{
    res.render('json_place_holder/index')
}

const json_place_holder_post_details=(req,res)=>{
    res.render('json_place_holder/post_details',{id:req.params.id})
}



module.exports = {json_place_holder_posts,json_place_holder_index,json_place_holder_post_details};


