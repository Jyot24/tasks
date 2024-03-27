const express = require("express");
const router = express.Router()
const {verifyAuth_not_login}=require('../middleware/is_login')

router.get('/',verifyAuth_not_login,(req,res)=>{
    res.render('index',{err:""})
})

router.get('/password/:id', verifyAuth_not_login,(req,res)=>{
    res.render('component/register/password',{err:"",email:req.params.id})
})

router.get('/login', verifyAuth_not_login,(req,res)=>{
    res.render('login',{err:""})
})

router.post('/forgotPaasword', verifyAuth_not_login,async (req,res)=>{
    res.render('component/auth/verifyToken',{email:req.body.email ,err:"" ,is_forgot:true})
})

router.get('/verifyEmail', verifyAuth_not_login,(req,res)=>{
    res.render('component/auth/email')
})

router.get('/*',verifyAuth_not_login,(req,res)=>{
   res.end('404 not found!')
})

module.exports = router;