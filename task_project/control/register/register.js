const express = require("express");
const connectMySql = require("../../db");
const router = express.Router()
var crypto = require("crypto");
const md5 = require('md5') 
const bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();//needed when you get information from .env file
const APP_PASSWORD = `${process.env.APP_PASSWORD}`

const activation_code=(req,res)=>{
    let activation_code = crypto.randomBytes(12).toString('hex');

    // activation_code
    let query_users=`INSERT INTO users (firstname,lastname,email,gender,activation_code) VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.email}','${req.body.gender}','${activation_code}');`
    connectMySql.query(query_users, (err, result) => {
        if(err){
            var success=false;
            res.render('index',{err:"email is already exists!"})
            // return res.status(400).json({ success,err: err });
        }else{
            // var transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: 'jyot.khant.2024@gmail.com',
            //         pass: APP_PASSWORD
            //     }
            // });
        
            // var mailOptions = {
            //     from: 'jyot.khant.2024@gmail.com',
            //     to: req.body.email,
            //     subject: 'Account Activation Code',
            //     text: `
            //     Hi ${req.body.firstname} ${req.body.lastname}
            //     Your Account Activation code is ${activation_code}`,
        
            // };
        
            // transporter.sendMail(mailOptions, function (error, info) {
            //     if (error) {
            //         res.status(500).json("error:" + error);
            //     } else {
            //         res.status(200).json('Email sent: ' + info.response);
            //     }
            // });

            res.render('component/register/verifyUser',{email:req.body.email ,err:"" ,activation_code:activation_code})
        }
    })
}

const verifyUser=(req,res)=>{
    let query_verify_user=`SELECT * FROM users where email='${req.query.email}' and activation_code='${req.query.activation_code}' and status = '0';`
    let email=req.query.email
   
    // let query_verify_user=`SELECT * FROM users where email='${req.body.email}' and activation_code='${req.body.activation_code}' and status = '0';`
    connectMySql.query(query_verify_user, (err, result) => {
        //////////console.log("hittt"+JSON.stringify(result)+query_verify_user);
        if(err){
            res.render('component/register/verifyUser',{email:email ,err:"invalid credentials"})
            // var success=false;
            // return res.status(400).json({ success,err: err });
        }else{
            if(result==""){
                res.render('component/register/verifyUser',{email:email ,err:"invalid credentials"})
            }else{
                
                let followedAt = new Date(result[0]["timestamp"]);
    
                let currentDate=new Date();
            
                const diffTime = Math.abs(currentDate - followedAt);
            
                if(diffTime<3600000){
                    const set_status=`UPDATE users SET status ='1' WHERE email='${email}' ;`
                    connectMySql.query(set_status, (err, result) => {
                        if(err){
                            res.render('component/register/verifyUser',{email:email ,err:"internal error"})

                            // return res.status(400).json({ success:false,err: err });
                        }
                        if(result.affectedRows == 1){
                           
                                res.render('component/register/password',{email:email ,err:""})
                          
                           
                        }else{
                            res.render('component/register/verifyUser',{email:email ,err:"internal error"})

                            // return res.status(400).json({ success:false,err: "internal error" });
                        }
                    })
                    

                }else{
                    res.render('component/register/verifyUser',{email:email ,expire_code:true ,err:"your code is expire we will send a code again" })
                //    res.json("your activation code is expried" + router.get('email'))
                   
                //    res.redirect('/expire/activation_code')
                
                }


            }
        }
    })
}

const createPassword= async (req,res)=>{
    let salt_key=await bcrypt.genSalt(10);
    let password=md5(`${req.body.password}`+salt_key);
    // const salt = 
    let query_login=`INSERT INTO login (email,password,salt_key) VALUES ('${req.body.email}','${password}','${salt_key}');`
    connectMySql.query(query_login, (err, result) => {
        if(err){
            ////////////console.log("err:"+err);
            res.render('component/register/password',{email:req.body.email ,err:"something is wrong"})
        }
        res.render('login',{err:""})
    })
}

// router.post('/verify',async (req,res)=>{
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'jyot.khant.2024@gmail.com',
//             pass: APP_PASSWORD
//         }
//     });

//     var mailOptions = {
//         from: 'jyot.khant.2024@gmail.com',
//         to: req.body.email,
//         // to: 'jyotkhant2002@gmail.com',
//         subject: 'LogIn OTP',
//         text: `Your OTP code is ${this.otpCode}`,

//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             res.status(500).json("error:" + error);
//         } else {
//             res.status(200).json('Email sent: ' + info.response);
//         }
//     });
// })
module.exports = {activation_code,verifyUser,createPassword};