const express = require("express");
const router = express.Router()
const {verifyAuth_is_login}=require('../../../middleware/is_login')

const kuku_cube=(req,res)=>{
    res.render('kuku cube/1')
}


module.exports = {kuku_cube};