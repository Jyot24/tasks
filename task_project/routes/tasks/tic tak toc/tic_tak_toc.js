const express = require("express");
const router = express.Router()
const {verifyAuth_is_login}=require('../../../middleware/is_login')

router.get('/',(req,res)=>{
    res.render('tic tak toc/index')
})


module.exports = router;