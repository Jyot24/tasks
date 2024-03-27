const express = require("express");
const router = express.Router()
const localStorage = require("localStorage");

const {
   
    verifyAuth_is_login
   
  } = require('../../middleware/is_login');
  

router.get('/', verifyAuth_is_login,async (req,res)=>{
    localStorage.clear();
    // res.end()
    ////console.log("logout");
    res.redirect('/login')
})

module.exports=router
