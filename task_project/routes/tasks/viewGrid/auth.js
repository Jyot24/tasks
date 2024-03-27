const express = require('express');
const router = express.Router();
const con = require("../../../db");


router.all('/viewGrid/:id?', (req, res) => {
    let query
    let query_COUNT
    let send_query

    if (req.method == "POST") {
        query_COUNT = req.body.sql_query
    } else {
        query_COUNT = req.query.query
    }
    try {
        con.query(query_COUNT, function (err, result) {
            if (err) {
                return res.end("query is not valid")
            }
            let totalpageno
            // numRows = result.affectedRows;
            if (result.length == 1) {
                totalpageno = 1
                //console.log("result.length:" + result.length);
            } else {
                totalpageno = Math.ceil(result.length / 20)
            }
            if (req.params.id >= 1 && req.params.id <= totalpageno) {
                count_record = (req.params.id - 1) * 20
            }
            else {
                count_record = 0

            }

            

            if (req.body.sql_query) {
                send_query = req.body.sql_query
                if(send_query.includes("limit")){
                    query = req.body.sql_query
                }else{
                    query = req.body.sql_query + ` limit ${count_record},20`
                }
            } else if (req.query.query) {
                send_query = req.query.query
                if(send_query.includes("limit")){
                    query = req.body.sql_query
                }else{
                query = req.query.query + ` limit ${count_record},20`
            }
            } else if (!(req.params.id)) {
                query = "SELECT * FROM student_27_2.exam_result;"
            }



            // //console.log("query:"+req.body.sql_query);
            con.query(query, function (err, result) {
                if (err) {
                    let success = false
                    return res.status(400).json({ success, error: err })
                }

                res.render('viewGrid/Home', { temp: result, CURRENT_PAGE: totalpageno >= Number(req.params.id) ? Number(req.params.id) : 1, totalpageno: totalpageno, url: "viewGrid", query: send_query });


            });

        })
    } catch (error) {
        res.send("query is not valid")
    }

    //    let query=req.body.query

    // let query="SELECT * FROM student_27_2.exam_result;"

    //     con.query(query, function (err, result) {
    //         if (err) {
    //             let success = false
    //             return res.status(400).json({ success, error: err })
    //         }

    //         res.render('ViewGrid', { temp: result});

    //         // res.render( 'user', { data: result});
    //         // return res.status(200).json({ success: true, result: result })
    //     });
})

//select student_master.student_id,student_master.first_name, count(attendence) AS PRESENTDAYS,(count(attendence)/(select count(distinct date) from student_attendence where month(date) = 1))*100 AS PERCENTAGE  from student_master inner join student_attendence where student_master.student_id = student_attendence.student_id and month(date) = 1 and student_attendence.attendence='P' group by student_id


module.exports = router;

