const express = require('express');
const router = express.Router();
const con = require("../../../db");



router.get('/', (req, res) => {
    
    res.render('viewGrid/Home');
})

router.get('/photo/', function(req, res) {
    res.write("permission denied");
    return  res.end()
 });

module.exports=router