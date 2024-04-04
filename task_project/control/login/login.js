const express = require("express");
const connectMySql = require("../../db");
const router = express.Router()
const md5 = require('md5') 
const localStorage = require("localStorage");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET =`${process.env.JWT_SECRET}`




const login=async (req,res)=>{

    let query_verify_email=`SELECT * FROM login where email='${req.body.email}';`


   
    connectMySql.query(query_verify_email, (err, result) => {
        if(err){
            var success=false;
            res.render('login',{err:"invalid credentials"})
            // return res.status(400).json({ success,err: err });
        }else{
            if(result==""){
                res.render('login',{err:"invalid credentials"})
                // return res.status(400).json({ success:false,err: err });
            }else{
                let salt_key=result[0].salt_key
                let password=md5(`${req.body.password}`+salt_key);
                let query_verify_user=`SELECT * FROM login where email='${req.body.email}' and password='${password}';`
                connectMySql.query(query_verify_user, (err, result) => {
                    if(err){
                        var success=false;
                        res.render('login',{err:"invalid credentials"})
                        // return res.status(400).json({ success,err: err });
                    }else{
                        if(result==""){
                            res.render('login',{err:"invalid credentials"})
                            // return res.status(400).json({ success:false,err: err });
                        }else{

                            const authToken = jwt.sign(req.body.email, JWT_SECRET);

                           ////////console.log("authToken:"+authToken);
                            localStorage.setItem("isLogin",true)
                            localStorage.setItem("authToken",authToken)
                            localStorage.setItem("email",req.body.email)
                        //    res.setHeader("authToken",authToken)
                            res.redirect('/user/profile')
                            // res.render('home',{result:result})
            
                        }
                    }
                })
            }
        }
    })
   
    
}

module.exports = {login};