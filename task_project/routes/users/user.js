const express = require("express");
const connectMySql = require("../../db");
const router = express.Router()
const localStorage = require("localStorage");
const {
   
  verifyAuth_is_login
 
} = require('../../middleware/is_login');


router.get('/profile', verifyAuth_is_login,async (req,res)=>{
  
  const query_task=`SELECT task_name,task_link FROM task where status=1;`
    const query_users_profile=`select firstname,lastname,email,gender from users where email='${localStorage.getItem('email')}'`
 
    connectMySql.query(query_task, (err, result) => {
        res.render('read',{temp:result})
    })
})



module.exports = router;