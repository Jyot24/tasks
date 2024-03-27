const express = require('express');
const router = express.Router();
const con = require("../../../db");

var name

router.get('/listuser/:id', (req, res) => {

    //console.log("name:" + req.query.order);
    let count_record


    var query_COUNT = `SELECT COUNT(*) AS COUNTER FROM student_master;`
    con.query(query_COUNT, function (err, result) {

        let totalpageno = Math.ceil(result[0].COUNTER / 20)

        // if(req.params.id==1 && req.params.id>=1 && req.params.id<=totalpageno){
        if (req.params.id >= 1 && req.params.id <= totalpageno) {
            count_record = (req.params.id - 1) * 20
        }
        else {
            count_record = 0

        }

        let order
        let query
        if (req.query.order == '"DESC"') {
            order = "DESC"
            query = `SELECT * FROM student_master ORDER BY first_name DESC LIMIT ${count_record},20;`
        }
        else if (req.query.order == '"ASC"') {
            order="ASC"
            query = `SELECT * FROM student_master ORDER BY first_name ASC LIMIT ${count_record},20;`
        }
        else {
            order="ASC"
            query = `SELECT * FROM student_master LIMIT ${count_record},20;`
        }

        con.query(query, function (err, result) {
            if (err) {
                let success = false
                return res.status(400).json({ success, error: err })
            }
            //console.log("ORDER:"+order);
            // //console.log("result:" + JSON.stringify(result) + ":");

            res.render('student_exam/ListUser', { temp: result, CURRENT_PAGE: totalpageno >= Number(req.params.id) ? Number(req.params.id) : 1, totalpageno: totalpageno, order: req.query.order });

            // res.render( 'user', { data: result});
            // return res.status(200).json({ success: true, result: result })
        });
    })
})


router.get('/userAttendence/:id', (req, res) => {



    let count_record


    var query_COUNT = `SELECT COUNT(*) AS COUNTER FROM student_master;`
    con.query(query_COUNT, function (err, result) {

        let totalpageno = Math.ceil(result[0].COUNTER / 20)


        if (req.params.id >= 1 && req.params.id <= totalpageno) {
            count_record = (req.params.id - 1) * 20
        }
        else {
            count_record = 0

        }
        // //console.log("hi");
        // }
        // query ="select MONTH(date), count(case when attendance_status = 'P' then 1 end )*100/ count(*) AS PERCENT from student_attendence group by MONTH(date)"
        // var query = `SELECT * FROM user where id='${req.params.id}';`
        let order
        let query
        let month
        let order_by
        if (req.query.order) {
            order = req.query.order
            query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${req.query.order}))*100 AS PERCENTAGE
               from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${req.query.order} and student_attendence.attendence='P' group by student_id LIMIT ${count_record},20;`
        }

        if (req.query.order == "JAN2024") {
            let month_value = 1
            if (req.query.field) {
                order_by = req.query.order_by ? req.query.order_by : "ASC"
                query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE
                       from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id order by ${req.query.field} ${order_by} LIMIT ${count_record},20;`
            } else {
                query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id LIMIT ${count_record},20;`

            }
            // query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE
            //    from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id LIMIT ${count_record},20;`
        }

        if (req.query.order == "DEC2023") {
            let month_value = 12
            if (req.query.field) {
                order_by = req.query.order_by ? req.query.order_by : "ASC"
                query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE
                       from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id order by ${req.query.field} ${order_by} LIMIT ${count_record},20;`
            }
            else {
                query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id LIMIT ${count_record},20;`
    
            }
        } 
        //     let month_value = 12

        if (req.query.order == "FEB2024") {
            let month_value = 2
            if (req.query.field) {
                order_by = req.query.order_by ? req.query.order_by : "ASC"
                query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE
                       from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id order by ${req.query.field} ${order_by} LIMIT ${count_record},20;`
            }
            else {
                query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id LIMIT ${count_record},20;`

            }
        }
        // else if( req.query.order=='"ASC"'){
        //     query = `SELECT * FROM student_master ORDER BY first_name ASC LIMIT ${count_record},20;`
        // }
        // else {
        //     // query = `SELECT * FROM student_master LIMIT ${count_record},20;`
        //     query = `select student_master.student_id,student_master.first_name, count(attendence),(count(attendence)/(select count(distinct date) from student_attendence where month(date) = '12'))*100  from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = '12' and student_attendence.attendence='P' group by student_id LIMIT ${count_record},20;`

        // if(req.query.field){

        // query = `select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = ${month_value}))*100 AS PERCENTAGE
        //        from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = ${month_value} and student_attendence.attendence='P' group by student_id order by ${req.query.field} LIMIT ${count_record},20;`
        // }

        // }

        con.query(query, function (err, result) {
            if (err) {
                let success = false
                return res.status(400).json({ success, error: err })
            }

            res.render('student_exam/attendence', { temp: result, CURRENT_PAGE: totalpageno >= Number(req.params.id) ? Number(req.params.id) : 1, totalpageno: totalpageno, order: req.query.order, month: month, order_by });

            // res.render( 'user', { data: result});
            // return res.status(200).json({ success: true, result: result })
        });
    })
})

router.get('/userResult/:id', (req, res) => {

    let count_record


    var query_COUNT = `SELECT COUNT(*) AS COUNTER FROM student_master;`
    con.query(query_COUNT, function (err, result) {

        let totalpageno = Math.ceil(result[0].COUNTER / 20)

        // if(req.params.id==1 && req.params.id>=1 && req.params.id<=totalpageno){
        if (req.params.id >= 1 && req.params.id <= totalpageno) {
            count_record = (req.params.id - 1) * 20
        }
        else {
            count_record = 0

        }

        let order
        let query
        // if (req.query.order == '"DESC"') {
        //     order = "DESC"
        //     query = `SELECT * FROM student_master ORDER BY first_name DESC LIMIT ${count_record},20;`
        // }
        // else if (req.query.order == '"ASC"') {
        //     query = `SELECT * FROM student_master ORDER BY first_name ASC LIMIT ${count_record},20;`
        // }
        // else {
        // query=`SELECT student_master.student_id,student_master.first_name ,sum(prilimias_mark_pr + prilimias_mark_th) as prilimiasObtainedMarks, sum(terminal_mark_pr+terminal_mark_th) as terminalObtainedMarks ,sum(final_mark_pr+final_mark_th) as finalObtainedMarks,sum(e.prilimias_mark_pr+e.prilimias_mark_th+e.terminal_mark_pr+e.terminal_mark_th+e.final_mark_pr+e.final_mark_th) as totalmark FROM exam_result as e, student_master where student_master.student_id=e.student_id group by student_id LIMIT ${count_record},20`

        // query = `SELECT student_master.student_id,student_master.first_name ,e.prilimias_mark_pr as p_practical,e.prilimias_mark_th as p_theory,e.terminal_mark_pr as t_pratical,e.terminal_mark_th as t_theory,e.final_mark_pr as f_practical,e.final_mark_th as f_theory FROM exam_result as e, student_master where student_master.student_id=e.student_id and e.subject_id=1 LIMIT ${count_record},20;`

        query = `SELECT student_master.student_id,student_master.first_name ,sum(prilimias_mark_pr) as p_practical,sum(prilimias_mark_th) as p_theory, sum(terminal_mark_pr) as t_practical,sum(terminal_mark_th) as t_theory ,sum(final_mark_pr) as f_practical,sum(final_mark_th) as f_theory FROM exam_result as e, student_master where student_master.student_id=e.student_id group by student_id LIMIT ${count_record},20`


        // }

        con.query(query, function (err, result) {
            if (err) {
                let success = false
                return res.status(400).json({ success, error: err })
            }
            // //console.log("result:" + JSON.stringify(result) + ":");

            res.render('student_exam/result', { temp: result, CURRENT_PAGE: totalpageno >= Number(req.params.id) ? Number(req.params.id) : 1, totalpageno: totalpageno, order: order });

            // res.render( 'user', { data: result});
            // return res.status(200).json({ success: true, result: result })
        });
    })
})

router.get('/userResultReport/:student_id', (req, res) => {



    let order
    let query
    // if (req.query.order == '"DESC"') {
    //     order = "DESC"
    //     query = `SELECT * FROM student_master ORDER BY first_name DESC LIMIT ${count_record},20;`
    // }
    // else if (req.query.order == '"ASC"') {
    //     query = `SELECT * FROM student_master ORDER BY first_name ASC LIMIT ${count_record},20;`
    // }
    // else {
    // query = `SELECT sum(prilimias_mark_pr + prilimias_mark_th) as prilimiasObtainedMarks, sum(terminal_mark_pr+terminal_mark_th) as terminalObtainedMarks ,sum(final_mark_pr+final_mark_th) as finalObtainedMarks FROM student_27_2.exam_result where subject_id=1 and student_id=${req.params.student_id};;`

    // query=`SELECT subject_id,sum(prilimias_mark_pr + prilimias_mark_th) as prilimiasObtainedMarks, sum(terminal_mark_pr+terminal_mark_th) as terminalObtainedMarks ,sum(final_mark_pr+final_mark_th) as finalObtainedMarks, sum(prilimias_mark_pr + prilimias_mark_th+terminal_mark_pr+terminal_mark_th+final_mark_pr+final_mark_th)as totalMark ,sum(prilimias_mark_pr + prilimias_mark_th+terminal_mark_pr+terminal_mark_th+final_mark_pr+final_mark_th)/sum(parlimias_pr_total+parlimias_th_total+terminal_pr_total+terminal_th_total+final_pr_total+final_mark_th_total)*100 as percentage FROM exam_result where student_id=${req.params.student_id} group by subject_id;`

    // query="UPDATE `student_27_2`.`exam_result` SET `prilimias_mark_pr` = 0,`prilimias_mark_th` = 0,`terminal_mark_pr` = 0,`terminal_mark_th` = 0,`final_mark_pr` = 0,`final_mark_th` =0 WHERE `attendence` = 'a'"

    query = `SELECT subject_id,sum(prilimias_mark_pr) as p_practical,sum(prilimias_mark_th) as theory,sum(terminal_mark_pr) as t_pratical,sum(terminal_mark_th) as t_theory,sum(final_mark_pr) as f_practical,sum(final_mark_th) as f_theory, sum(prilimias_mark_pr + prilimias_mark_th+terminal_mark_pr+terminal_mark_th+final_mark_pr+final_mark_th)as totalMark ,sum(prilimias_mark_pr + prilimias_mark_th+terminal_mark_pr+terminal_mark_th+final_mark_pr+final_mark_th)/sum(parlimias_pr_total+parlimias_th_total+terminal_pr_total+terminal_th_total+final_pr_total+final_mark_th_total)*100 as percentage FROM exam_result where student_id=${req.params.student_id} group by subject_id;`

    // }

    con.query(query, function (err, result) {
        if (err) {
            let success = false
            return res.status(400).json({ success, error: err })
        }
        // //console.log(totalpageno);
        // //console.log("result:" + JSON.stringify(result) + ":");

        // res.render('component/result_report', { temp: result });
        res.render('student_exam/report_result', { temp: result, student_id: req.params.student_id })
        // res.render( 'user', { data: result});
        // return res.status(200).json({ success: true, result: result })
    });
})


module.exports = router;

//select student_id,count(month(date)),(count(attendance_status)/count(student_id))*100 from student_attendence where attendance_status = 'p' and MONTH(date)=1 group by student_id

//SELECT student_master.first_name,e.prilimias_mark_pr,e.parlimias_pr_total,e.prilimias_mark_th,e.parlimias_th_total,e.terminal_mark_pr,e.terminal_pr_total,e.terminal_mark_th,e.terminal_th_total,e.final_mark_pr,e.final_pr_total,e.final_mark_th,e.final_mark_th_total, FROM exam_result as e, student_master where student_master.student_id=exam_result.student_id and e.subject_id=1