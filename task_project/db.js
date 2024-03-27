var mysql = require('mysql');
const dotenv = require('dotenv').config();
var con = mysql.createConnection({
  multipleStatements: true,
  host: `${process.env.HOST_DB}`,
  user: `${process.env.USER_DB}`,
  password: `${process.env.PASSWORD_DB}`,
  database: `${process.env.DATABASE_DB}`
});

con.connect();
module.exports = con