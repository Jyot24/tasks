const express = require("express");
const connectMySql = require("../../db");
const router = express.Router()
const localStorage = require("localStorage");



const task= async (req,res)=>{
  
  const query_task=`SELECT task_name,task_link FROM task where status=1;`
 
    connectMySql.query(query_task, (err, result) => {
        res.render('read',{temp:result})
    })
}



module.exports = {task};