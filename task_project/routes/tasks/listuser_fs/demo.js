const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator')
var fs = require('fs')

router.get('/', (req, res) => {
    // res.render('index'); 
    res.render('listuser_fs/pages/' + 'Home', { name: 'jyot' });
    // res.send('bfyuwergfy67'+req.body.name)
})

router.post('/addUser', [
    body('firstname', 'Enter a valid firstname').isLength({ min: 2 }),
    body('lastname', 'Enter a valid lastname').isLength({ min: 3 }),
    body('age', 'Enter a valid age').isNumeric(),
    body('phonenumber', 'Enter a valid phonenumber').isMobilePhone(),
    body('gender', 'Select valid Gender').isLength({ min: 4 }),
    body('hobbies', 'Select valid hobbies').isArray(),
    body('address', 'Enter a valid address').isLength({ min: 10 }),
    //  age,phonenumber,gender,hobbies,address
    body('email', 'enter a valid email').isEmail()

], (req, res) => {
    // const errors = validationResult(req);
    // if(errors){
    //     var success=false;
    //     return res.status(400).json({ success,errors: errors.array() });
    // }
    // console.log(errors);
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



})

router.get('/listUser', (req, res) => {
   
    try {
        fs.readFile('./files/userData.json', function (err, data) {
            var temp = JSON.parse(data)
            res.render('listuser_fs/pages/' + 'ListUser', { temp: temp });
        })
    } catch (error) {
        res.render('listuser_fs/pages/' + 'NotFound')
    }


})

router.get('/userData/:id', (req, res) => {
    try {
        fs.readFile('./files/userData.json', function (err, data) {
            var temp = JSON.parse(data)
            res.render('listuser_fs/pages/' + 'user', { data: temp[req.params.id] });

        })
    } catch (error) {
        res.render('listuser_fs/pages/' + 'NotFound')
    }

})


module.exports = router;