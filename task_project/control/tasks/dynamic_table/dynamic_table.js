const express = require("express");
const router = express.Router()
const {verifyAuth_is_login}=require('../../../middleware/is_login')

const dynamic_table=(req,res)=>{
    res.render('dynamic_table/task_1')
}


module.exports = {dynamic_table};