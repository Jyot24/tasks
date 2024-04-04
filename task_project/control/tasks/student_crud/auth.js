const express = require('express');
const router = express.Router();
const con = require("../../../db");


// Route 1: Add new user
const addUser= (req, res) => {

    var query = `INSERT INTO user (firstname,lastname,age,phonenumber,email,gender,hobbies,address)  VALUES( '${req.body.firstname}','${req.body.lastname}','${req.body.age}', '${req.body.phonenumber}' , '${req.body.email}' , '${req.body.gender}', '${req.body.hobbies}', '${req.body.address}');`

    con.query(query, function (err, result) {
        if (err) {
            let success = false
            return res.status(400).json({ success, error: "Sorry a user can't add" })
        }
        res.redirect('/student_crud')
    });
}

// Route 2: get user 
// router.get('/getUser/:id', (req, res) => {
const getUser= (req, res) => {
    //console.log("ud:" + JSON.stringify(req.body));

    // var query = `SELECT * FROM user where id='${req.params.id}';`
    var query = `SELECT * FROM user where id='${req.body.id}';`

    con.query(query, function (err, result) {
        if (err) {
            let success = false
            return res.status(400).json({ success, error: err })
        }
        //console.log("result:" + result +":");
        if(result==""){
            return res.status(400).json({ success:"false",error:"user not exits" })
        }
        res.render('student_crud/user', { data: result });
        // return res.status(200).json({ success: true, result: result })
    });




}

const getUser_UpdateUser= (req, res) => {
    var query = `SELECT * FROM user where id='${req.params.id}';`
    con.query(query, function (err, result) {
        if (err) {
            let success = false
            return res.status(400).json({ success, error: err })
        }
        //console.log("result:" + result);
        res.render('student_crud/UpdateUser', { data: result });
        // return res.status(200).json({ success: true, result: result })
    });
}

const listuser= (req, res) => {
    //console.log("ud:" + JSON.stringify(req.body));

    // var query = `SELECT * FROM user where id='${req.params.id}';`
    var query = `SELECT * FROM user ;`

    con.query(query, function (err, result) {
        if (err) {
            let success = false
            return res.status(400).json({ success, error: err })
        }
        //console.log("result:" + result + ":");
        

        res.render('student_crud/ListUser', { temp: result });
        // res.render( 'user', { data: result});
        // return res.status(200).json({ success: true, result: result })
    });




}

// Route 3: user detail update
const updateUser= (req, res) => {
    var query = `UPDATE user SET firstname='${req.body.firstname}', lastname='${req.body.lastname}',age='${req.body.age}', phonenumber='${req.body.phonenumber}' , email='${req.body.email}' , gender='${req.body.gender}',hobbies= '${req.body.hobbies}', address='${req.body.address}' WHERE id = '${req.body.id}';`

    con.query(query, function (err, result) {
        if (err) {
            let success = false
            return res.status(400).json({ success, error: err })
        }
        //console.log("result:"+result);
        return res.status(200).json({ success: true, result: "User Update Sucessfully" })
    });

}

// Route 3: user detail Delete

const deleteUser= (req, res) => {

    var query = `DELETE FROM user WHERE id = '${req.params.id}'`

    con.query(query, function (err, result) {
        if (err) {
            let success = false
            return res.status(400).json({ success, error: err })
        }
        return res.status(200).json({ success: true, result: "User Delete Sucessfully" })
    });

}

module.exports = {addUser,getUser,getUser_UpdateUser,listuser,updateUser,deleteUser};