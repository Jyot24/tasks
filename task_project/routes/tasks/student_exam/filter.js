// searchById
const express = require('express');
const router = express.Router();
const con = require("../../../db");

router.post('/searchById', (req, res) => {
    var s_id = req.body.student_id

    query = `SELECT * FROM student_master where student_id=${s_id};`
    console.log("s_id:" + s_id);

    con.query(query, function (err, result) {
        if(err){
            res.end("Query is not correct.")
        }
        // res.render()
        // console.log("result filter:" + JSON.stringify(result));
        res.render('student_exam/component/read', { temp: result })
    })
})

router.post('/filterResult', (req, res) => {
    var s_id = req.body.percentage
    let percentage
    let query;
    if(req.body.percentage){
        percentage=req.body.percentage
    }else{
        percentage=0
    }
    //and
    if (req.body.type == "AND") {
        query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS ,  (count(attendence)/(select count(distinct date) from student_attendence ))*100  AS PERCENTAGE  from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and student_attendence.attendence='P' AND student_master.first_name like '%${req.body.firstname}%' AND student_master.last_name like '%${req.body.lastname}%' group by student_id HAVING (count(attendence)/(select count(distinct date) from student_attendence ))*100 > ${percentage} LIMIT 20;`

    } else {
        query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS ,  (count(attendence)/(select count(distinct date) from student_attendence ))*100  AS PERCENTAGE  from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and student_attendence.attendence='P' AND (student_master.first_name like '%${req.body.firstname}%' or student_master.last_name like '%${req.body.lastname}%') group by student_id HAVING (count(attendence)/(select count(distinct date) from student_attendence ))*100 > ${percentage} LIMIT 20;`
    }

    //or


    // console.log("query:"+query);

    con.query(query, function (err, result) {
        if (err) {
            res.end('query is not write:'+err)
        }
        // res.render()
        // console.log("result filter:"+JSON.stringify(result));
        // res.render('component/read',{temp:result,filter:"filter"})
        res.render('student_exam/attendence', { temp: result, filter: "filter" })

    })
})

module.exports = router