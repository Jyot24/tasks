const express = require("express");
const connectMySql = require("../../../db");

const { Result } = require("express-validator");
const router = express.Router()

router.post('/basic_details', async (req, res) => {

    // ////console.log("update basic:"+JSON.stringify(req.body));

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

    const sql_job_application_master = `UPDATE basic_details SET first_name ='${first_name}' ,last_name ='${last_name}' ,designation ='${designation}' ,address1 ='${address1}' ,address2 ='${address2}' ,phoneNumber ='${phoneNumber}',gender ='${Gender}' ,relationship_status ='${RelationShip}' ,dob ='${dob}' ,email ='${email}' ,zip_id ='${zip_id}' ,city ='${city}' ,state ='${state}' WHERE job_id ='${req.body.job_id}' ;`
    try {
        connectMySql.query(sql_job_application_master, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,message: result });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong query_basic_details" })
    }

})

router.post('/course_details', async (req, res) => {

    const course_name = req.body.course_name
    const passing_year = req.body.passing_year
    const percentage = req.body.percentage
    const key_course=req.body.key_course



    if (typeof course_name == "string") {
        let course_details = `UPDATE course_d SET name = '${course_name}',passing_year = '${passing_year}',percentage ='${percentage}'  WHERE job_id = '${req.body.job_id}' AND c_no = '1';`

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
            res.status(500).json({ err: "update course_details" })

        }
    } else {

        let course_details = ""
        // let work_experience = `INSERT INTO work_experience (job_id,company_name,designation,w_from,w_to) VALUES `

        for (let i = 0; i < course_name.length; i++) {

            if (i == course_name.length - 1) {
                course_details = course_details + `UPDATE course_d SET name = '${course_name[i]}',passing_year = '${passing_year[i]}',percentage ='${percentage[i]}'  WHERE job_id = '${req.body.job_id}' AND id ='${key_course[i]}';`

            } else {
                course_details = course_details + `UPDATE course_d SET name = '${course_name[i]}',passing_year = '${passing_year[i]}',percentage ='${percentage[i]}'  WHERE job_id = '${req.body.job_id}' AND id ='${key_course[i]}';`
            }
        }

        try {


            connectMySql.query(course_details, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }

                for (const key in result) {
                    if (result[key].affectedRows == 0) {
                        let course_details = `INSERT INTO course_d (job_id,name,passing_year,percentage,c_no) VALUES ('${req.body.job_id}','${course_name[key]}','${passing_year[key]}','${percentage[key]}','${Number(key) + 1}')`

                        try {

                            connectMySql.query(course_details, (err, result) => {
                                //////console.log("successful course_details");
                            })
                        } catch (error) {
                            res.status(500).json({ err: "update course_details" })

                        }
                    }
                }

            })
        } catch (error) {
            res.status(500).json({ err: "update course_details" })

        }
    }

})

router.post('/language', async (req, res) => {
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
        const language_hindi = `UPDATE language SET language_name ='${hindi}',l_read ='${hindiread}' ,l_write ='${hindiwrite}' ,l_speak ='${hindispeak}' WHERE job_id ='${req.body.job_id}' and language_name ='${hindi}';`

        try {

            connectMySql.query(language_hindi, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }
                if (result.affectedRows == 0) {
                    const language_hindi = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${req.body.job_id}','${hindi}','${hindiread}','${hindiwrite}','${hindispeak}')`

                    try {



                        connectMySql.query(language_hindi, (err, result) => {
                            if(err){
                                var success=false;
                                return res.status(400).json({ success,err: err });
                            }else{
                                return res.status(200).json({ success:true,message: result });
                            }


                        })
                    } catch (error) {
                        res.status(500).json({ err: "update language_hindi" })

                    }
                }
            })
        } catch (error) {
            res.status(500).json({ err: "update language_hindi" })

        }
    }

    if (gujarat != "") {
        const language_gujrati = `UPDATE language SET language_name ='${gujarat}', l_read ='${gujaratread}',l_write ='${gujaratwrite}' ,l_speak ='${gujaratspeak}' WHERE job_id ='${req.body.job_id}' and language_name ='${gujarat}';
            `
        try {


            connectMySql.query(language_gujrati, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }
                if (result.affectedRows == 0) {
                    const language_gujrati = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${req.body.job_id}','${gujarat}','${gujaratread}','${gujaratwrite}','${gujaratspeak}')`

                    try {


                        connectMySql.query(language_gujrati, (err, result) => {
                            if(err){
                                var success=false;
                                return res.status(400).json({ success,err: err });
                            }else{
                                return res.status(200).json({ success:true,message: result });
                            }
                        })
                    } catch (error) {
                        res.status(500).json({ err: "update language_gujrati" })

                    }
                }
            })
        } catch (error) {
            res.status(500).json({ err: "update language_gujrati" })

        }

    }

    if (english != "") {
        const language_english = `UPDATE language SET language_name ='${english}' ,l_read ='${englishread}' ,l_write ='${englishwrite}' ,l_speak ='${englishspeak}'  WHERE job_id ='${req.body.job_id}' and language_name ='${english}';`

        try {


            connectMySql.query(language_english, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }
                if (result.affectedRows == 0) {
                    const language_english = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${req.body.job_id}','${english}','${englishread}','${englishwrite}','${englishspeak}')`    // 

                    try {
                        connectMySql.query(language_english, (err, result) => {
                            if(err){
                                var success=false;
                                return res.status(400).json({ success,err: err });
                            }else{
                                return res.status(200).json({ success:true,message: result });
                            }
                        })
                    } catch (error) {
                        res.status(500).json({ err: "update language_english" })

                    }
                }
            })
        } catch (error) {
            res.status(500).json({ err: "update language_english" })

        }
    }


})

router.post('/preferances', async (req, res) => {
    const Prefedlocation = req.body.preferdlocation || ""
    const Noticeperiod = req.body.Noticeperiod || ""
    const ExpactedCtc = req.body.ExpactedCtc || ""
    const CurrentcTC = req.body.CurrentcTC || ""
    const Department = req.body.department || ""
    const preferances = `UPDATE preferances SET preferd_location ='${Prefedlocation}' , notice_period = '${Noticeperiod}',expacted_ctc ='${ExpactedCtc}' ,current_ctc ='${CurrentcTC}' ,department ='${Department}' WHERE job_id =${req.body.job_id};`

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
        res.status(500).json({ err: "update preferances" })
    }


})

router.post('/work_experience', async (req, res) => {
    const company = req.body.company || ""
    const workDesignation = req.body.workdesignation || ""
    const From = req.body.From || ""
    const to = req.body.to || ""

    ////console.log("update work_experience:" + JSON.stringify(req.body));
    if (typeof company == "string") {
        let work_experience = `UPDATE work_e SET company_name ='${company}' , designation ='${workDesignation}' ,w_from ='${From}' , w_to ='${to}'  WHERE job_id =${req.body.job_id} and w_no='1';`

        ////console.log("work_experience QUERY:" + work_experience);
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
            res.status(500).json({ err: "update work_experience" })
        }
    } else {

        let work_experience = ""
        // let work_experience = `INSERT INTO work_experience (job_id,company_name,designation,w_from,w_to) VALUES `

        for (let i = 0; i < company.length; i++) {

            if (i == company.length - 1) {
                work_experience = work_experience + `UPDATE work_e SET company_name ='${company[i]}' , designation ='${workDesignation[i]}' ,w_from ='${From[i]}' , w_to ='${to[i]}' WHERE job_id =${req.body.job_id} and w_no='${i + 1}';`

            } else {
                work_experience = work_experience + `UPDATE work_e SET company_name ='${company[i]}' , designation ='${workDesignation[i]}' ,w_from ='${From[i]}' , w_to ='${to[i]}' WHERE job_id =${req.body.job_id} and w_no='${i + 1}';`
            }
        }

        //////console.log("query work_experience:" + work_experience);

        try {


            connectMySql.query(work_experience, (err, result) => {
                 if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }
                try {

                    if (result.affectedRows == 0) {
                        let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES ('${req.body.job_id}','${company}','${workDesignation}','${From}','${to}','1')`


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
                            res.status(500).json({ err: "update work_experience" })
                        }
                        
                    }
                } catch (error) {

                }

                for (const key in result) {
                    if (result[key].affectedRows == 0) {
                        let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES ('${req.body.job_id}','${company[key]}','${workDesignation[key]}','${From[key]}','${to[key]}','${Number(key) + 1}')`

                        try {


                            connectMySql.query(work_experience, (err, result) => {
                                if(err){
                                    var success=false;
                                    return res.status(400).json({ success,err: err });
                                }

                            })
                        } catch (error) {
                            res.status(500).json({ err: "update work_experience" })
                        }
                    }
                }

            })
        } catch (error) {
            res.status(500).json({ err: "update work_experience" })
        }
    }


})

router.post('/referance_contact', async (req, res) => {
    const ReferanceName = req.body.ReferanceName || ""
    const ReferanceContact = req.body.ReferanceContact || ""
    const Relation = req.body.Relation || ""

    if (typeof ReferanceName == "string") {
        let referance_contact = `UPDATE referance_c SET name ='${ReferanceName}' ,contactNumber ='${ReferanceContact}' , relation ='${Relation}' WHERE job_id ='${req.body.job_id}' AND r_no ='1' ;
            `
        // let referance_contact = `,,) `
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
            res.status(500).json({ err: "update ReferanceName" })
        }
    } else {

        let referance_contact = ""

        for (let i = 0; i < Relation.length; i++) {
            if (i == Relation.length - 1) {
                referance_contact = referance_contact + `UPDATE referance_c SET name ='${ReferanceName[i]}' ,contactNumber ='${ReferanceContact[i]}' , relation ='${Relation[i]}' WHERE job_id ='${req.body.job_id}' AND r_no ='${i + 1}';`;

            } else {

                referance_contact = referance_contact + `UPDATE referance_c SET name ='${ReferanceName[i]}' ,contactNumber ='${ReferanceContact[i]}' , relation ='${Relation[i]}' WHERE job_id ='${req.body.job_id}' AND r_no ='${i + 1}';`;
            }
        }

        // //////console.log("query referance_contact:" + referance_contact);
        try {


            connectMySql.query(referance_contact, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }

                if (result.affectedRows == 0) {
                    let referance_contact = `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${req.body.job_id}','${ReferanceName}','${ReferanceContact}','${Relation}','1') `

                    connectMySql.query(referance_contact, (err, result) => {
                        if(err){
                            var success=false;
                            return res.status(400).json({ success,err: err });
                        }else{
                            return res.status(200).json({ success:true,message: result });
                        }
                    })
                    return
                }
                for (const key in result) {
                    if (result[key].affectedRows == 0) {
                        let referance_contact = `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${req.body.job_id}','${ReferanceName[key]}','${ReferanceContact[key]}','${Relation[key]}','${Number(key) + 1}') `

                        try {
                            connectMySql.query(referance_contact, (err, result) => {
                                if(err){
                                    var success=false;
                                    return res.status(400).json({ success,err: err });
                                }
                            })
                        } catch (error) {
                            res.status(500).json({ err: "update ReferanceName" })

                        }

                    }
                }

            })
        } catch (error) {
            res.status(500).json({ err: "update ReferanceName" })

        }
    }
})

router.post('/technologies', async (req, res) => {
    const php = req.body.php || ""
    const phplevel = req.body.phplevel || ""
    const mysql = req.body.mysql || ""
    const mysqllevel = req.body.mysqllevel || ""
    const laravel = req.body.laravel || ""
    const laravelLevel = req.body.laravellevel || ""
    const oracle = req.body.oracle || ""
    const oraclelevel = req.body.oraclelevel || ""


    if (php != "") {
        const technologies_php = `UPDATE technologies SET name = '${php}', level ='${phplevel}' WHERE job_id ='${req.body.job_id}' and name = '${php}';`

        try {



            connectMySql.query(technologies_php, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }
                if (result.affectedRows == 0) {
                    try {


                        const technologies_php = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${php}','${phplevel}')`
                        connectMySql.query(technologies_php, (err, result) => {
                            if(err){
                                var success=false;
                                return res.status(400).json({ success,err: err });
                            }else{
                                return res.status(200).json({ success:true,message: result });
                            }
                        })
                    } catch (error) {
                        res.status(500).json({ err: "update technologies_php" })

                    }
                }
            })
        } catch (error) {
            res.status(500).json({ err: "update technologies_php" })

        }

    }
    if (mysql != "") {
        const technologies_mysql = `UPDATE technologies SET name ='${mysql}' , level ='${mysqllevel}'  WHERE job_id ='${req.body.job_id}' and name ='${mysql}';`

        try {


            connectMySql.query(technologies_mysql, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }
                if (result.affectedRows == 0) {
                    const technologies_mysql = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${mysql}','${mysqllevel}')`

                    try {



                        connectMySql.query(technologies_mysql, (err, result) => {
                            if(err){
                                var success=false;
                                return res.status(400).json({ success,err: err });
                            }else{
                                return res.status(200).json({ success:true,message: result });
                            }
                        })
                    } catch (error) {
                        res.status(500).json({ err: "update technologies_mysql" })

                    }
                }
            })
        } catch (error) {
            res.status(500).json({ err: "update technologies_mysql" })

        }

    }


    if (oracle != "") {
        const technologies_oracle = `UPDATE technologies SET name ='${oracle}' , level ='${oraclelevel}'  WHERE job_id ='${req.body.job_id}' and name ='${oracle}';`

        try {



            connectMySql.query(technologies_oracle, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }

                if (result.affectedRows == 0) {
                    const technologies_oracle = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${oracle}','${oraclelevel}')`

                    try {


                        connectMySql.query(technologies_oracle, (err, result) => {
                            if(err){
                                var success=false;
                                return res.status(400).json({ success,err: err });
                            }else{
                                return res.status(200).json({ success:true,message: result });
                            }
                        })
                    } catch (error) {
                        res.status(500).json({ err: "update technologies_oracle" })

                    }
                }

            })
        } catch (error) {
            res.status(500).json({ err: "update technologies_oracle" })

        }

    }



    if (laravel != "") {
        const technologies_laravel = `UPDATE technologies SET name ='${laravel}' , level ='${laravelLevel}'  WHERE job_id ='${req.body.job_id}' and name ='${laravel}';`

        try {


            connectMySql.query(technologies_laravel, (err, result) => {
                if(err){
                    var success=false;
                    return res.status(400).json({ success,err: err });
                }
                if (result.affectedRows == 0) {
                    const technologies_laravel = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${laravel}','${laravelLevel}')`

                    try {


                        connectMySql.query(technologies_laravel, (err, result) => {
                            if(err){
                                var success=false;
                                return res.status(400).json({ success,err: err });
                            }else{
                                return res.status(200).json({ success:true,message: result });
                            }
                        })
                    } catch (error) {
                        res.status(500).json({ err: "update technologies_laravel" })

                    }
                }
            })
        } catch (error) {
            res.status(500).json({ err: "update technologies_laravel" })

        }

    }
})

module.exports = router;