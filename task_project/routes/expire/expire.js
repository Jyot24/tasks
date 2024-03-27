const express = require("express");
const connectMySql = require("../../db");
const router = express.Router()
const md5 = require('md5'); 
var crypto = require("crypto");
const APP_PASSWORD = `${process.env.APP_PASSWORD}`
var nodemailer = require('nodemailer');


router.post('/activation_code',(req,res)=>{
    let activation_code = crypto.randomBytes(12).toString('hex');

    let query_users=`UPDATE users SET activation_code ='${activation_code}' WHERE email = '${req.body.email}';`

   //console.log("activation_code");



    connectMySql.query(query_users, (err, result) => {
        if(err){
            var success=false;
            return res.status(400).json({ success,err: err });
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
            //     subject: 'Account resend Activation Code',
            //     text: `
            //     Hi 
            //     Your Account Activation code is ${activation_code}`,
        
            // };
        
            // transporter.sendMail(mailOptions, function (error, info) {
            //     if (error) {
            //         res.status(500).json("error:" + error);
            //     } else {
            //         res.status(200).json('Email sent: ' + info.response);
            //     }
            // });
            // ////console.log("query_users exprie:"+err)
            // res.render('component/register/verifyUser',{email:req.body.email})

            return res.status(400).json({ success:true,err: "" ,activation_code:activation_code});
        }
    })
})

router.all('/verifyUser',(req,res)=>{
    let query_verify_user=`SELECT * FROM users where email='${req.query.email}' and activation_code='${req.query.activation_code}';`
    let email=req.query.email
    //console.log("email:"+email+"query"  + query_verify_user);
    // let query_verify_user=`SELECT * FROM users where email='${req.body.email}' and activation_code='${req.body.activation_code}' and status = '0';`
    connectMySql.query(query_verify_user, (err, result) => {
        //console.log("hittt"+JSON.stringify(result)+err);
        if(err){
            res.render('component/auth/verifyToken',{email:email ,err:"invalid credentials"})
            // var success=false;
            // return res.status(400).json({ success,err: err });
        }else{
            if(result==""){
                res.render('component/auth/verifyToken',{email:email ,err:"invalid credentials"})
            }else{
                res.render('component/register/password',{email:email ,err:"" ,is_forgot:true})



            }
        }
    })
})

module.exports = router;