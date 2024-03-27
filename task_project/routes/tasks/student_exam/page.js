const express = require('express');
const router = express.Router();
const con = require("../../../db");

// const session = require("express-session");
// const cookieParser = require("cookie-parser");

// router.use(cookieParser());
 
// router.use(session({
//     secret: "amar",
//     saveUninitialized: true,
//     resave: true
// }));
 
// // User Object
 
// const user = {
//     name: "Amar",
//     Roll_number: 43,
//     Address: "Pune"
// };

router.get('/', (req, res) => {
    // fetch('https://quotes.toscrape.com/random')
    // .then((response) => response.text())
    // .then((body) => {
    //     //console.log(body);
    // }); 
    // res.render('Home');
    // res.render('pages/' + 'Home', { name: 'jyot' });
    // res.send('hello')
    res.redirect('/student_exam/listuser/1')
})
router.get('/listuser/*', (req, res) => {
    // res.render('Home');
    // res.render('pages/' + 'Home', { name: 'jyot' });
    // res.send('hello')
    res.redirect('/student_exam/listuser/1')
})

router.get('/getuser/*', (req, res) => {
    // res.render('GetUser');
    // res.render('pages/' + 'Home', { name: 'jyot' });
    // res.send('hello')
})

router.get('/userAttendence/*' ,(req, res) => {
   
    res.redirect('/student_exam/userAttendence/1?order=DEC2023')
})

router.get('/userResult/*', (req, res) => {
    // res.render('GetUser');
    // res.render('pages/' + 'Home', { name: 'jyot' });
    res.redirect('/student_exam/userResult/1')
    // res.send('hello')
})

router.get('/*',(req, res) => {
    res.end("NOT VALID URL..-")
})
module.exports=router