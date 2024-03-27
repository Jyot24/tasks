const express = require("express");
const router = express.Router()
const {verifyAuth_is_login}=require('../../../middleware/is_login')

router.get('/html1',(req,res)=>{
    res.render('html1/frame')
})

router.get('/html2',(req,res)=>{
    res.render('html2/index')
})

router.get('/html3',(req,res)=>{
    res.render('html3/style')
})


module.exports = router;