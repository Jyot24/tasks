const express = require("express");
const router = express.Router()
const {verifyAuth_is_login}=require('../../../middleware/is_login')

const html1=(req,res)=>{
    res.render('html1/frame')
}

const html2=(req,res)=>{
    res.render('html2/index')
}

const html3=(req,res)=>{
    res.render('html3/style')
}


module.exports = {html1,html2,html3};