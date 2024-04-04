const express = require("express");
const router = express.Router()
const {verifyAuth_is_login}=require('../../../middleware/is_login')

const timezone=(req,res)=>{
   res.render('timezone/index')
}

module.exports = {timezone};

