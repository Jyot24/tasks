const express = require("express");
const router = express.Router()
const {
    verifyAuth_is_login
  } = require('../middleware/is_login');

const {verifyAuth_not_login}= require('../middleware/is_login');

const localStorage = require("localStorage");


//=======================================================================================================NaN
const expire=require('../control/expire/expire')
//*************************** expire code
router.post('/expire/activation_code',(req,res)=>{
    expire.activation_code(req,res)
})

router.all('/expire/verifyUser',(req,res)=>{
    expire.verifyUser(req,res)
})

//=======================================================================================================NaN

//*************************** forgot password
const forgot=require('../control/forgot/update_password')

router.post('/forgot/password',async (req,res)=>{
    forgot.password(req,res)
})


//=======================================================================================================NaN
//*************************** login
const login=require('../control/login/login')
router.post('/login',async (req,res)=>{
    login.login(req,res)
})

//=======================================================================================================NaN
//*************************** logout
router.get('/logout', verifyAuth_is_login,async (req,res)=>{
    localStorage.clear();
    // res.end()
    ////////////console.log("logout");
    res.redirect('/login')
})

//=======================================================================================================NaN
//*************************** register
const register=require('../control/register/register')

router.post('/register',(req,res)=>{
    register.activation_code(req,res)
})

router.all('/register/verifyUser',(req,res)=>{
    register.verifyUser(req,res)
})

router.post('/register/createPassword',async (req,res)=>{
    register.createPassword(req,res)
})

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

//=======================================================================================================NaN
//*************************** task list
const task=require('../control/users/user')

router.get('/user/profile', verifyAuth_is_login,async (req,res)=>{
    task.task(req,res)
})


//=======================================================================================================NaN
//*************************** after login  
router.get('/auth/home',verifyAuth_is_login ,(req,res)=>{
    res.render('home')
})






module.exports=router