const express = require("express");
const router = express.Router()
const {verifyAuth_is_login}=require('../../../middleware/is_login')

const tic_tak_toc=(req,res)=>{
    res.render('tic_tak_toc/index')
}


module.exports = {tic_tak_toc};