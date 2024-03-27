const express = require("express");
const router = express.Router()
var crypto = require("crypto");
const md5 = require('md5') 
const bcrypt = require('bcryptjs');
const connectMySql = require("../../db");


module.exports=router

router.post('/password',async (req,res)=>{
    let salt_key=await bcrypt.genSalt(10);
    let password=md5(`${req.body.password}`+salt_key);
    
    let query_login=`UPDATE login SET password ='${password}' , salt_key ='${salt_key}'  WHERE email ='${req.body.email}' ;`

    //////console.log("query_login:"+query_login);
    connectMySql.query(query_login, (err, result) => {
        if(err){
            //////console.log("err:"+err);
            res.render('component/register/password',{email:req.body.email ,err:"something is wrong"})
        }
        //////console.log("err:"+JSON.stringify(result));
        res.render('login',{err:""})
    })
})

// UPDATE login SET password = salt_key =  WHERE email = ;
