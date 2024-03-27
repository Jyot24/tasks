const express = require("express");
const router = express();
const localStorage = require("localStorage");
const jwt = require('jsonwebtoken');
const JWT_SECRET =`${process.env.JWT_SECRET}`


const verifyAuth_not_login = async (req, res, next) => {
    const authHeader = req.headers.authToken;

    
          if (! authHeader) {
            next()
          } else {
            res.redirect('user/profile')
          }
}

const verifyAuth_is_login = async (req, res, next) => {
    const authHeader = req.headers.authToken;

   
          if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(authHeader, JWT_SECRET, (err, payload) => {
              if (err) {
                // res.status(403).json('Invalid token');
                res.render('login',{err:"you are not login"})
              }
              req.user = payload;
              next();
            });
          } else {
            // return res.status(400).json('not authorized');
            res.render('login',{err:"you are not login"})
          }
}
// user/profile
// router.use(function(req, res, next){
//     const authHeader = req.headers.authToken;

//     ////console.log("authHeader not_is_login:"+authHeader);
//           if (!authHeader) {
//             next()
//           } else {
//             res.redirect('user/profile')
//           }
   
   
// });

module.exports = {verifyAuth_not_login,verifyAuth_is_login};
