const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator')
var fs = require('fs')

const listuser_fs_home= (req, res) => {
    // res.render('index'); 
    res.render('listuser_fs/pages/' + 'Home', { name: 'jyot' });
    // res.send('bfyuwergfy67'+req.body.name)
}

const addUser=(req, res) => {
    // const errors = validationResult(req);
    // if(errors){
    //     var success=false;
    //     return res.status(400).json({ success,errors: errors.array() });
    // }
    // //console.log(errors);
    var uniqueId = Math.floor(Math.random() * 10000);
    var temp
    try {
        fs.readFile('./files/userData.json', function (err, data) {
            if (data.length == 0) {
                temp = { [uniqueId]: { ...req.body } }
            } else {
                temp = JSON.parse(data)
                temp = { ...temp, [uniqueId]: { ...req.body } }
            }

            fs.writeFile('./files/userData.json', JSON.stringify(temp), function (err) {
                if (err) {
                    res.render('pages/' + 'NotFound')
                }
            });
        });

        res.end("saved")
    } catch (error) {
        res.render('listuser_fs/pages/' + 'NotFound')
    }



}

const listUser= (req, res) => {
   
    try {
        fs.readFile('./files/userData.json', function (err, data) {
            var temp = JSON.parse(data)
            res.render('listuser_fs/pages/' + 'ListUser', { temp: temp });
        })
    } catch (error) {
        res.render('listuser_fs/pages/' + 'NotFound')
    }


}

const userData= (req, res) => {
    try {
        fs.readFile('./files/userData.json', function (err, data) {
            var temp = JSON.parse(data)
            res.render('listuser_fs/pages/' + 'user', { data: temp[req.params.id] });

        })
    } catch (error) {
        res.render('listuser_fs/pages/' + 'NotFound')
    }

}


module.exports = {listuser_fs_home,addUser,listUser,userData};