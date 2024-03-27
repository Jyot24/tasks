const express = require("express");
const router = express.Router()

const {
   
    verifyAuth_is_login
   
  } = require('../middleware/is_login');


router.get('/home',verifyAuth_is_login ,(req,res)=>{
    res.render('home')
})

module.exports = router;