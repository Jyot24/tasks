const express = require("express");
const router = express.Router()
const localStorage = require("localStorage");


const logout=async (req,res)=>{
    localStorage.clear();
    res.redirect('/login')
}

module.exports={logout}
