const express = require("express");
const router = express();
const localStorage = require("localStorage");
const jwt = require('jsonwebtoken');
const JWT_SECRET = `${process.env.JWT_SECRET}`

//Simple request time logger
const verifyAuth_not_login = async (req, res, next) => {
  const authHeader = localStorage.getItem("authToken")

  // next()
  if (authHeader == null) {
    next()
  } else {
    res.redirect('/user/profile')

  }
}

const verifyAuth_is_login = async (req, res, next) => {

  const authHeader = localStorage.getItem("authToken")
  // next()


  if (authHeader) {
    jwt.verify(authHeader, JWT_SECRET, (err, payload) => {
      if (err) {

        // res.render('login', { err: "you are not login" })
      }

      next();
    });
  } else {

    res.render('login', { err: "you are not login" })
  }
}

module.exports = { verifyAuth_not_login, verifyAuth_is_login };
