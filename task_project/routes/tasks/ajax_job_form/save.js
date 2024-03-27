const express = require("express");
const connectMySql = require("../../../db");

const router = express.Router()

router.post('/basic_details', async (req, res) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name
    const designation = req.body.designation;
    const address1 = req.body.address1
    const address2 = req.body.address2
    const phoneNumber = req.body.phoneNumber;
    const Gender = req.body.gender
    const RelationShip = req.body.relationshipstatus
    const dob = req.body.dob
    const email = req.body.email;
    const city = req.body.city
    const state = req.body.state
    const zip_id = req.body.zip_id


    const sql_job_application_master = `INSERT INTO basic_details (first_name,last_name,designation,address1,address2,phoneNumber,gender,relationship_status,zip_id,dob,email,city,state)  VALUES( '${first_name}','${last_name}','${designation}', '${address1}' , '${address2}' , '${phoneNumber}' , '${Gender}' , '${RelationShip}' , '${zip_id}' ,'${dob}' ,'${email}','${city}','${state}');`


    try {


        connectMySql.query(sql_job_application_master, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,message: result,job_id: result.insertId  });
            }

           
        })
    }
    catch (err) {
        return res.json({ error: "something wrong" })
    }

})


router.post('/course_details', async (req, res) => {

    const id=req.body.job_id
    const course_name = req.body.course_name
    const passing_year = req.body.passing_year
    const percentage = req.body.percentage
    if (course_name != "") {

        if (typeof course_name == "string") {
            let course_details = `INSERT INTO course_d (job_id,name,passing_year,percentage,c_no) VALUES ('${id}','${course_name}','${passing_year}','${percentage}','1')`

            try {


                connectMySql.query(course_details, (err, result) => {
                    if(err){
                        var success=false;
                        return res.status(400).json({ success,err: err });
                    }else{
                        return res.status(200).json({ success:true,message: result });
                    }

                })
            } catch (error) {
                return res.status(400).json({ error_insert: "insert course_details" })

            }
        } else {

            let course_details = `INSERT INTO course_d (job_id,name,passing_year,percentage,c_no) VALUES `

            for (let i = 0; i < course_name.length; i++) {

                if (i == course_name.length - 1) {
                    course_details = course_details + `('${id}','${course_name[i]}','${passing_year[i]}','${percentage[i]}','${i + 1}')`

                } else {

                    course_details = course_details + `('${id}','${course_name[i]}','${passing_year[i]}','${percentage[i]}','${i + 1}'),`
                }
            }

            try {
                connectMySql.query(course_details, (err, result) => {
                    if(err){
                        var success=false;
                        return res.status(400).json({ success,err: err });
                    }else{
                        return res.status(200).json({ success:true,message: result });
                    }
                })
            } catch (error) {
                return  res.status(400).json({ error_insert: "insert course_details" })

            }
        }
    }
})

router.post('/language', async (req, res) => {
    const id=req.body.job_id
    const hindi = req.body.hindi || ""
    const hindiread = req.body.hindiread || ""
    const hindiwrite = req.body.hindiwrite || ""
    const hindispeak = req.body.hindispeak || ""
    const english = req.body.english || ""
    const englishread = req.body.englishread || ""
    const englishwrite = req.body.englishwrite || ""
    const englishspeak = req.body.englishspeak || ""
    const gujarat = req.body.gujarat || ""
    const gujaratread = req.body.gujaratread || ""
    const gujaratwrite = req.body.gujaratwrite || ""
    const gujaratspeak = req.body.gujaratspeak || ""


    if (hindi != "") {
        const language_hindi = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${id}','${hindi}','${hindiread}','${hindiwrite}','${hindispeak}')`

        try {
            connectMySql.query(language_hindi, (err, result) => {
                if(err){
                    var success=false;
                    //  res.status(400).json({ success,err: err });
                }else{
                    //  res.status(200).json({ success:true,message: result });
                }
                //////console.log("successful language_hindi");
            })
        } catch (error) {
            //  res.status(400).json({ error_insert: "insert language_hindi" })

        }


    }

    if (gujarat != "") {
        const language_gujrati = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${id}','${gujarat}','${gujaratread}','${gujaratwrite}','${gujaratspeak}')`

        try {
            connectMySql.query(language_gujrati, (err, result) => {
                if(err){
                    var success=false;
                    //  res.status(400).json({ success,err: err });
                }else{
                    //  res.status(200).json({ success:true,message: result });
                }
            })
        } catch (error) {
            //  res.status(400).json({ error_insert: "insert language_gujrati" })

        }


    }

    if (english != "") {
        const language_english = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${id}','${english}','${englishread}','${englishwrite}','${englishspeak}')`    // 

        try {
            connectMySql.query(language_english, (err, result) => {
                if(err){
                    var success=false;
                    // return res.status(400).json({ success,err: err });
                }else{
                    // return res.status(200).json({ success:true,message: result });
                }
            })
        } catch (error) {
            // return res.status(400).json({ error_insert: "insert language_english" })

        }


    }






})

router.post('/preferances', async (req, res) => {
    const id=req.body.job_id
    const Prefedlocation = req.body.prefedlocation || ""
    const Noticeperiod = req.body.Noticeperiod || ""
    const ExpactedCtc = req.body.ExpactedCtc || ""
    const CurrentcTC = req.body.CurrentcTC || ""
    const Department = req.body.department || ""

    ////console.log("preferances : Route"+JSON.stringify(req.body));

    const preferances = `INSERT INTO preferances (job_id,preferd_location,notice_period,expacted_ctc,current_ctc,department) VALUES ('${id}','${Prefedlocation}','${Noticeperiod}','${ExpactedCtc}','${CurrentcTC}','${Department}')`

    try {


        connectMySql.query(preferances, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,message: result });
            }

        })
    } catch (error) {
        return res.status(400).json({ error_insert: "insert preferances" })

    }
})

router.post('/referance_contact', async (req, res) => {
    const id=req.body.job_id
    const ReferanceName = req.body.ReferanceName || ""
    const ReferanceContact = req.body.ReferanceContact || ""
    const Relation = req.body.Relation || ""
    if (ReferanceName != "") {

        if (typeof ReferanceName == "string") {
            let referance_contact = `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${id}','${ReferanceName}','${ReferanceContact}','${Relation}','1');`

            try {

                connectMySql.query(referance_contact, (err, result) => {
                    if(err){
                        var success=false;
                        return res.status(400).json({ success,err: err });
                    }else{
                        return res.status(200).json({ success:true,message: result });
                    }
                })
            } catch (error) {
                return res.status(400).json({ error_insert: "insert referance_contact" })

            }
        } else {

            let referance_contact = ``
            //////console.log("referance_contact: type:" + typeof ReferanceName + typeof ReferanceName[0]);
            ////console.log("referance_contact")
            for (let i = 0; i < Relation.length; i++) {
                if (i == Relation.length - 1) {
                    referance_contact = referance_contact + `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${id}','${ReferanceName[i]}','${ReferanceContact[i]}','${Relation[i]}','${i + 1}');`

                } else {

                    referance_contact = referance_contact + `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${id}','${ReferanceName[i]}','${ReferanceContact[i]}','${Relation[i]}','${i + 1}');`
                }
            }


            try {
                connectMySql.query(referance_contact, (err, result) => {
                ////console.log("query referance_contact:" + JSON.stringify(result));

                    
                    if(err){
                        var success=false;
                        return res.status(400).json({ success,err: err });
                    }else{
                        return res.status(200).json({ success:true,message: result });
                    }
                })
            } catch (error) {
                return res.status(400).json({ error_insert: "insert referance_contact" })
            }

        }
    }
})

router.post('/technologies', async (req, res) => {
    const id=req.body.job_id
    const php = req.body.php || ""
    const phplevel = req.body.phplevel || ""
    const mysql = req.body.mysql || ""
    const mysqllevel = req.body.mysqllevel || ""
    const laravel = req.body.laravel || ""
    const laravelLevel = req.body.laravellevel || ""
    const oracle = req.body.oracle || ""
    const oraclelevel = req.body.oraclelevel || ""

    ////console.log("technologies:ROUTE"+JSON.stringify(req.body));
    if (php != "") {
        const technologies_php = `INSERT INTO technologies (job_id,name,level) VALUES ('${id}','${php}','${phplevel}')`

        try {
            connectMySql.query(technologies_php, (err, result) => {
                if(err){
                    var success=false;
                    // return res.status(400).json({ success,err: err });
                }else{
                    // return res.status(200).json({ success:true,message: result });
                }

            })
        } catch (error) {
            // return res.status(400).json({ error_insert: "insert technologies_php" })

        }


    }


    if (mysql != "") {
        const technologies_mysql = `INSERT INTO technologies (job_id,name,level) VALUES ('${id}','${mysql}','${mysqllevel}')`

        try {

            connectMySql.query(technologies_mysql, (err, result) => {
                if(err){
                    var success=false;
                    // return res.status(400).json({ success,err: err });
                }else{
                    // return res.status(200).json({ success:true,message: result });
                }

            })
        } catch (error) {
            // return res.status(400).json({ error_insert: "insert technologies_mysql" })

        }


    }


    if (oracle != "") {
        const technologies_oracle = `INSERT INTO technologies (job_id,name,level) VALUES ('${id}','${oracle}','${oraclelevel}')`

        try {

            connectMySql.query(technologies_oracle, (err, result) => {
                if(err){
                    var success=false;
                    // return res.status(400).json({ success,err: err });
                }else{
                    // return res.status(200).json({ success:true,message: result });
                }
            })
        } catch (error) {
            // return res.status(400).json({ error_insert: "insert technologies_oracle" })

        }

    }



    if (laravel != "") {
        const technologies_laravel = `INSERT INTO technologies (job_id,name,level) VALUES ('${id}','${laravel}','${laravelLevel}')`

        try {
            connectMySql.query(technologies_laravel, (err, result) => {
                if(err){
                    var success=false;
                    // return res.status(400).json({ success,err: err });
                }else{
                    // return res.status(200).json({ success:true,message: result });
                }
            })
        } catch (error) {
            // return res.status(400).json({ error_insert: "insert technologies_laravel" })

        }

    }
})

router.post('/work_experience', async (req, res) => {
    const id=req.body.job_id
    const company = req.body.company || ""
    const workdesignation = req.body.workdesignation || ""
    const From = req.body.From || ""
    const to = req.body.to || ""


    if (company != "") {
        if (typeof company == "string") {
            let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES ('${id}','${company}','${workdesignation}','${From}','${to}','1')`

            try {


                connectMySql.query(work_experience, (err, result) => {
                    if(err){
                        var success=false;
                        return res.status(400).json({ success,err: err });
                    }else{
                        return res.status(200).json({ success:true,message: result });
                    }

                })
            } catch (error) {
                return  res.status(400).json({ error_insert: "insert work_experience" })

            }
        } else {

            let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES `

            for (let i = 0; i < company.length; i++) {

                if (i == company.length - 1) {
                    work_experience = work_experience + `('${id}','${company[i]}','${workdesignation[i]}','${From[i]}','${to[i]}','${i + 1}')`

                } else {

                    work_experience = work_experience + `('${id}','${company[i]}','${workdesignation[i]}','${From[i]}','${to[i]}','${i + 1}'),`
                }
            }

            //////console.log("query work_experience:" + work_experience);

            try {
                connectMySql.query(work_experience, (err, result) => {
                    if(err){
                        var success=false;
                        return res.status(400).json({ success,err: err });
                    }else{
                        return res.status(200).json({ success:true,message: result });
                    }
                })
            } catch (error) {
                return res.status(400).json({ error_insert: "insert work_experience" })

            }
        }
    }

})


module.exports = router;