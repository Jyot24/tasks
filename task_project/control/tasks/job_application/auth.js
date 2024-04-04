const localStorage = require("localStorage");
const express = require("express");
const connectMySql = require("../../../db");
const router = express.Router()
const object = require('../../form')


const { body, validationResult } = require('express-validator')
// router.get('/',(req,res)=>{

//     res.redirect('auth')
// })

const job_form = async (req, res) => {

    const errors = validationResult(req);
    //////console.log(errors);
    if (!errors.isEmpty()) {
        var success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }

    // res.status(200).send(req.body);

    const First = req.body.First;
    const last = req.body.last
    const Designation = req.body.Designation;
    const address1 = req.body.address1
    const address2 = req.body.address2
    const Phone = req.body.Phone;
    const Gender = req.body.gender
    const RelationShip = req.body.relationshipstatus
    const dob = req.body.dob
    const Email = req.body.Email;
    const city = req.body.city
    const state = req.body.state
    const zipcode = req.body.zipcode
    // //////console.log("RelationShip:"+RelationShip)
    // const SSCBoard = req.body.SSCBoard
    // const SSCPassiong = req.body.SSCPassiong
    // const SSCPercentage = req.body.SSCPercentage
    // const HSCBoard = req.body.HSCBoard
    // const HSCPercentage = req.body.HSCPercentage
    // const HSCPassiong = req.body.HSCPassiong
    // const beCourse = req.body.beCourse
    // const beUniversity = req.body.beUniversity
    // const bePassiong = req.body.bePassiong
    // const bePercentage = req.body.bePercentage
    // const mdCourse = req.body.mdCourse
    // const mdUniversity = req.body.mdUniversity
    // const mdPercentage = req.body.mdPercentage
    // const mdPassiong = req.body.mdPassiong
    const company = req.body.company || ""
    const workDesignation = req.body.workDesignation || ""
    const From = req.body.From || ""
    const to = req.body.to || ""
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
    const php = req.body.php || ""
    const phplevel = req.body.phplevel || ""
    const mysql = req.body.mysql || ""
    const mysqllevel = req.body.mysqllevel || ""
    const laravel = req.body.laravel || ""
    const laravelLevel = req.body.laravellevel || ""
    const oracle = req.body.oracle || ""
    const oraclelevel = req.body.oraclelevel || ""
    const ReferanceName = req.body.ReferanceName || ""
    const ReferanceContact = req.body.ReferanceContact || ""
    const Relation = req.body.Relation || ""
    // const ReferanceName2 = req.body.ReferanceName2 || ""
    // const Relation2 = req.body.Relation2 || ""
    const Prefedlocation = req.body.prefedlocation || ""
    const Noticeperiod = req.body.Noticeperiod || ""
    const ExpactedCtc = req.body.ExpactedCtc || ""
    const CurrentcTC = req.body.CurrentcTC || ""
    const Department = req.body.department || ""


    const course_name = req.body.course_name
    const passing_year = req.body.passing_year
    const percentage = req.body.percentage
    let array_tech = [php, laravel, mysql, oracle]

    // connectMySql.connect((err) => {
    //     
    //     //////console.log("Connected!");

    // const technologies_temp = `INSERT INTO technologies (job_id,name,level) VALUES ('${localStorage.getItem('job_id')}','${php}','${phplevel}')`+` ${mysql}!="" ?,('${localStorage.getItem('job_id')}','${mysql}','${mysqllevel}'): "" ` `,('${localStorage.getItem('job_id')}','${laravel}','${laravelLevel}'),('${localStorage.getItem('job_id')}','${oracle}','${oraclelevel}')`


    const sql_job_application_master = `INSERT INTO basic_details (first_name,last_name,designation,address1,address2,phoneNumber,gender,relationship_status,zip_id,dob,email,city,state)  VALUES( '${First}','${last}','${Designation}', '${address1}' , '${address2}' , '${Phone}' , '${Gender}' , '${RelationShip}' , '${zipcode}' ,'${dob}' ,'${Email}','${city}','${state}');`


    try {


        connectMySql.query(sql_job_application_master, (err, result) => {

            localStorage.setItem('job_id', result.insertId)
            // job_id= result.insertId;
            //////console.log("Number of records inserted: " + localStorage.getItem('job_id'));
            call(result.insertId)

            // })

            function call(id) {
                // const sql_employee_education_detail = `INSERT INTO employee_education_detail (job_id,ssc_board_name,ssc_board_passing_year,ssc_board_percentage,hsc_board_name,hsc_board_percentage,hsc_board_passing_year,be_course_name,be_university,be_passing_year,be_board_percentage,master_degree_course_name,master_degree_university,master_degree_percentage,master_degree_passing_year) VALUES ('${localStorage.getItem('job_id')}','${SSCBoard}','${SSCPassiong}','${SSCPercentage}','${HSCBoard}','${HSCPercentage}','${HSCPassiong}','${beCourse}','${beUniversity}','${bePassiong}','${bePercentage}','${mdCourse}','${mdUniversity}','${mdPercentage}','${mdPassiong}')`

                // connectMySql.query(sql_employee_education_detail, (err, result) => {
                //     
                //     //////console.log("successful sql_employee_education_detail");
                // })

                if (hindi != "") {
                    const language_hindi = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${localStorage.getItem('job_id')}','${hindi}','${hindiread}','${hindiwrite}','${hindispeak}')`

                    try {
                        connectMySql.query(language_hindi, (err, result) => {

                            //////console.log("successful language_hindi");
                        })
                    } catch (error) {
                        res.status(400).json({ error_insert: "insert language_hindi" })

                    }


                }

                if (gujarat != "") {
                    const language_gujrati = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${localStorage.getItem('job_id')}','${gujarat}','${gujaratread}','${gujaratwrite}','${gujaratspeak}')`

                    try {
                        connectMySql.query(language_gujrati, (err, result) => {

                            //////console.log("successful language_gujrati");
                        })
                    } catch (error) {
                        res.status(400).json({ error_insert: "insert language_gujrati" })

                    }


                }

                if (english != "") {
                    const language_english = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${localStorage.getItem('job_id')}','${english}','${englishread}','${englishwrite}','${englishspeak}')`    // 

                    try {
                        connectMySql.query(language_english, (err, result) => {

                            //////console.log("successful language_english");
                        })
                    } catch (error) {
                        res.status(400).json({ error_insert: "insert language_english" })

                    }


                }





                if (php != "") {
                    const technologies_php = `INSERT INTO technologies (job_id,name,level) VALUES ('${localStorage.getItem('job_id')}','${php}','${phplevel}')`

                    try {
                        connectMySql.query(technologies_php, (err, result) => {

                            //////console.log("successful technologies");

                        })
                    } catch (error) {
                        res.status(400).json({ error_insert: "insert technologies_php" })

                    }


                }


                if (mysql != "") {
                    const technologies_mysql = `INSERT INTO technologies (job_id,name,level) VALUES ('${localStorage.getItem('job_id')}','${mysql}','${mysqllevel}')`

                    try {

                        connectMySql.query(technologies_mysql, (err, result) => {


                        })
                    } catch (error) {
                        res.status(400).json({ error_insert: "insert technologies_mysql" })

                    }


                }


                if (oracle != "") {
                    const technologies_oracle = `INSERT INTO technologies (job_id,name,level) VALUES ('${localStorage.getItem('job_id')}','${oracle}','${oraclelevel}')`

                    try {

                        connectMySql.query(technologies_oracle, (err, result) => {


                        })
                    } catch (error) {
                        res.status(400).json({ error_insert: "insert technologies_oracle" })

                    }

                }



                if (laravel != "") {
                    const technologies_laravel = `INSERT INTO technologies (job_id,name,level) VALUES ('${localStorage.getItem('job_id')}','${laravel}','${laravelLevel}')`

                    try {
                        connectMySql.query(technologies_laravel, (err, result) => {

                        })
                    } catch (error) {
                        res.status(400).json({ error_insert: "insert technologies_laravel" })

                    }

                }








                const preferances = `INSERT INTO preferances (job_id,preferd_location,notice_period,expacted_ctc,current_ctc,department) VALUES ('${localStorage.getItem('job_id')}','${Prefedlocation}','${Noticeperiod}','${ExpactedCtc}','${CurrentcTC}','${Department}')`

                try {


                    connectMySql.query(preferances, (err, result) => {

                        //////console.log("successful preferances");

                    })
                } catch (error) {
                    res.status(400).json({ error_insert: "insert preferances" })

                }

                if (course_name != "") {

                    if (typeof course_name == "string") {
                        let course_details = `INSERT INTO course_d (job_id,name,passing_year,percentage,c_no) VALUES ('${localStorage.getItem('job_id')}','${course_name}','${passing_year}','${percentage}','1')`

                        try {


                            connectMySql.query(course_details, (err, result) => {

                                //////console.log("successful course_details");

                            })
                        } catch (error) {
                            res.status(400).json({ error_insert: "insert course_details" })

                        }
                    } else {

                        let course_details = `INSERT INTO course_d (job_id,name,passing_year,percentage,c_no) VALUES `

                        for (let i = 0; i < course_name.length; i++) {

                            if (i == course_name.length - 1) {
                                course_details = course_details + `('${localStorage.getItem('job_id')}','${course_name[i]}','${passing_year[i]}','${percentage[i]}','${i + 1}')`

                            } else {

                                course_details = course_details + `('${localStorage.getItem('job_id')}','${course_name[i]}','${passing_year[i]}','${percentage[i]}','${i + 1}'),`
                            }
                        }

                        try {
                            connectMySql.query(course_details, (err, result) => {
                            })
                        } catch (error) {
                            res.status(400).json({ error_insert: "insert course_details" })

                        }
                    }
                }

                if (company != "") {
                    if (typeof company == "string") {
                        let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES ('${localStorage.getItem('job_id')}','${company}','${workDesignation}','${From}','${to}','1')`

                        try {


                            connectMySql.query(work_experience, (err, result) => {

                                //////console.log("successful work_experience");

                            })
                        } catch (error) {
                            res.status(400).json({ error_insert: "insert work_experience" })

                        }
                    } else {

                        let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES `

                        for (let i = 0; i < company.length; i++) {

                            if (i == company.length - 1) {
                                work_experience = work_experience + `('${localStorage.getItem('job_id')}','${company[i]}','${workDesignation[i]}','${From[i]}','${to[i]}','${i + 1}')`

                            } else {

                                work_experience = work_experience + `('${localStorage.getItem('job_id')}','${company[i]}','${workDesignation[i]}','${From[i]}','${to[i]}','${i + 1}'),`
                            }
                        }

                        //////console.log("query work_experience:" + work_experience);

                        try {
                            connectMySql.query(work_experience, (err, result) => {

                                //////console.log("successful work_experience");

                            })
                        } catch (error) {
                            res.status(400).json({ error_insert: "insert work_experience" })

                        }
                    }
                }

                if (ReferanceName != "") {

                    if (typeof ReferanceName == "string") {
                        let referance_contact = `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${localStorage.getItem('job_id')}','${ReferanceName}','${ReferanceContact}','${Relation}','1');`

                        try {

                            connectMySql.query(referance_contact, (err, result) => {

                                res.status(400).json({ error_insert: "insert referance_contact" })

                            })
                        } catch (error) {

                        }
                    } else {

                        let referance_contact = ``
                        //////console.log("referance_contact: type:" + typeof ReferanceName + typeof ReferanceName[0]);

                        for (let i = 0; i < Relation.length; i++) {
                            if (i == Relation.length - 1) {
                                referance_contact = referance_contact + `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${localStorage.getItem('job_id')}','${ReferanceName[i]}','${ReferanceContact[i]}','${Relation[i]}','${i + 1}');`

                            } else {

                                referance_contact = referance_contact + `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${localStorage.getItem('job_id')}','${ReferanceName[i]}','${ReferanceContact[i]}','${Relation[i]}','${i + 1}');`
                            }
                        }

                        // //////console.log("query referance_contact:" + referance_contact);

                        try {
                            connectMySql.query(referance_contact, (err, result) => {

                            })
                        } catch (error) {
                            res.status(400).json({ error_insert: "insert referance_contact" })
                        }

                    }
                }


            }
            //////console.log("workDesignation:" + workDesignation[0]);
            res.redirect(`/job_application/getRecord/${localStorage.getItem('job_id')}`)
            // getRecord
            // res.end("complete")
            if (((company != "") && (workDesignation != "") && (From != "") && (to != ""))) {
                //////console.log("vnuhueft")
            }
            // connectMySql.end();

            // connectMySql.end();
        })
    } catch (error) {
        res.status(400).json({ error_insert: "insert basic" })

    }
}
// })


const getRecord = async (req, res) => {

    var sm_relationshipstatus = await object.selectMaster("relationshipstatus")
    var relation = await object.select(sm_relationshipstatus.id, sm_relationshipstatus.select_name);

    var sm_prefedlocation = await object.selectMaster("preferdlocation")
    var perefed = await object.select(sm_prefedlocation.id, sm_prefedlocation.select_name);


    var sm_department = await object.selectMaster("department")
    var department = await object.select(sm_department.id, sm_department.select_name);

    var sm_gender = await object.selectMaster("gender")
    var gender = await object.radio(sm_gender.id, sm_gender.select_name)


    var languageknown = await object.combo(2, ['read', 'write', 'speak'], true)

    var technologies = await object.combo(3, ['Beginer', 'Mideator', 'Expert'], false)



    var sm_rcourse_name = await object.selectMaster("course_combo")
    var course_name = await object.select(sm_rcourse_name.id, sm_rcourse_name.select_name, "check-all-fill-or-not course");





    let query_basic_details = `SELECT * FROM basic_details where job_id=${req.params.id};`;
    let course_details = `SELECT * FROM course_d where job_id=${req.params.id};`;
    let query_language = `SELECT * FROM language where job_id=${req.params.id};`;
    let query_preferances = `SELECT * FROM preferances where job_id=${req.params.id};`;
    let query_referance_contact = `SELECT * FROM referance_c where job_id=${req.params.id};`;
    let query_technologies = `SELECT * FROM technologies where job_id=${req.params.id};`;
    let query_work_experience = `SELECT * FROM work_e where job_id=${req.params.id};`;

    connectMySql.query(query_basic_details + course_details + query_language + query_preferances + query_referance_contact + query_technologies + query_work_experience, (err, result) => {
        // 
        // //////console.log("result upadte:"+result[0]);
        if (result[0] == "") {
            return res.end("not present that user id:" + req.params.id)
        }
        // res.redirect('')
        // res.render('read', { temp: result })
        // res.render('update', { temp_update: result })
        res.render('job_application/job', { temp_update: result, course_name: course_name, relation: relation, perefed: perefed, department: department, gender: gender, languageknown: languageknown, technologies: technologies, check: req.query.check })



    })

}

// router.get('/getRecordDelete/:id', (req, res) => {

//     let query_basic_details = ` DELETE FROM job_app_db_29.basic_details where job_id=${req.params.id};`;
//     let query_employee_education_detail = ` DELETE FROM job_app_db_29.employee_education_detail where job_id=${req.params.id};`;
//     let query_language = ` DELETE FROM job_app_db_29.language where job_id=${req.params.id};`;
//     let query_preferances = ` DELETE FROM job_app_db_29.preferances where job_id=${req.params.id};`;
//     let query_referance_contact = ` DELETE FROM job_app_db_29.referance_contact where job_id=${req.params.id};`;
//     let query_technologies = ` DELETE FROM job_app_db_29.technologies where job_id=${req.params.id};`;
//     let query_work_experience = ` DELETE FROM job_app_db_29.work_experience where job_id=${req.params.id};`;

//     connectMySql.query(query_basic_details + query_employee_education_detail + query_language + query_preferances + query_referance_contact + query_technologies + query_work_experience, (err, result) => {
//         
//         return res.end("successful  DELETE :" + `${req.params.id}`);

//         // res.render('read',{temp:result})

//     })

// })

const job_form_update = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var success = false;
        return res.status(400).json({ success, errors: errors.array() });
    }


    const First = req.body.First;
    const last = req.body.last
    const Designation = req.body.Designation;
    const address1 = req.body.address1
    const address2 = req.body.address2
    const Phone = req.body.Phone;
    const Gender = req.body.gender
    const RelationShip = req.body.relationshipstatus
    const dob = req.body.dob
    const Email = req.body.Email;
    const city = req.body.city
    const state = req.body.state
    const zipcode = req.body.zipcode
    // //////console.log("RelationShip:"+RelationShip)
    const course_name = req.body.course_name
    const passing_year = req.body.passing_year
    const percentage = req.body.percentage
    const company = req.body.company || ""
    const workDesignation = req.body.workDesignation || ""
    const From = req.body.From || ""
    const to = req.body.to || ""
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
    const php = req.body.php || ""
    const phplevel = req.body.phplevel || ""
    const mysql = req.body.mysql || ""
    const mysqllevel = req.body.mysqllevel || ""
    const laravel = req.body.laravel || ""
    const laravelLevel = req.body.laravellevel || ""
    const oracle = req.body.oracle || ""
    const oraclelevel = req.body.oraclelevel || ""
    const ReferanceName = req.body.ReferanceName || ""
    const ReferanceContact = req.body.ReferanceContact || ""
    const Relation = req.body.Relation || ""
    // const ReferanceName2 = req.body.ReferanceName2 || ""
    // const Relation2 = req.body.Relation2 || ""
    const Prefedlocation = req.body.prefedlocation || ""
    const Noticeperiod = req.body.Noticeperiod || ""
    const ExpactedCtc = req.body.ExpactedCtc || ""
    const CurrentcTC = req.body.CurrentcTC || ""
    const Department = req.body.department || ""

    const workDeleteId = req.body.workDeleteId || ""

    const sql_job_application_master = `UPDATE basic_details SET first_name ='${First}' ,last_name ='${last}' ,designation ='${Designation}' ,address1 ='${address1}' ,address2 ='${address2}' ,phoneNumber ='${Phone}',gender ='${Gender}' ,relationship_status ='${RelationShip}' ,dob ='${dob}' ,email ='${Email}' ,zip_id ='${zipcode}' ,city ='${city}' ,state ='${state}' WHERE job_id ='${req.body.job_id}' ;`


    // ////console.log("company_no hidden workDeleteId"+workDeleteId);

    // for(let i of workDeleteId){
    //     ////console.log("company_no hidden:"+i);
    //     let work_experience_workDeleteId = `UPDATE job_app_db_29.work_experience SET status='false' where job_id =${req.body.job_id} and w_no=${i};`

    //     connectMySql.query(work_experience_workDeleteId, (err, result) => {

    //     })
    // }



    connectMySql.query(sql_job_application_master, (err, result) => {
        // 

        // job_id= result.insertId;
        //////console.log("update: sql_job_application_master:" + err);
        // call(req.body.job_id)

        // })

        if (typeof course_name == "string") {
            let course_details = `UPDATE course_d SET name = '${course_name}',passing_year = '${passing_year}',percentage ='${percentage}'  WHERE job_id = '${req.body.job_id}' AND c_no = '1';`

            try {


                connectMySql.query(course_details, (err, result) => {
                    // 
                    //////console.log("successful course_details:" + err);

                })
            } catch (error) {
                res.status(500).json({ err: "update course_details" })

            }
        } else {

            let course_details = ""
            // let work_experience = `INSERT INTO work_experience (job_id,company_name,designation,w_from,w_to) VALUES `

            for (let i = 0; i < course_name.length; i++) {

                if (i == course_name.length - 1) {
                    course_details = course_details + `UPDATE course_d SET name = '${course_name[i]}',passing_year = '${passing_year[i]}',percentage ='${percentage[i]}'  WHERE job_id = '${req.body.job_id}' AND c_no = '${i + 1}';`

                } else {
                    course_details = course_details + `UPDATE course_d SET name = '${course_name[i]}',passing_year = '${passing_year[i]}',percentage ='${percentage[i]}'  WHERE job_id = '${req.body.job_id}' AND c_no = '${i + 1}';`
                }
            }

            try {


                connectMySql.query(course_details, (err, result) => {
                    // 
                    //////console.log("successful course_details:" + err + result.length + "\n");

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



        if (hindi != "") {
            const language_hindi = `UPDATE language SET language_name ='${hindi}',l_read ='${hindiread}' ,l_write ='${hindiwrite}' ,l_speak ='${hindispeak}' WHERE job_id ='${req.body.job_id}' and language_name ='${hindi}';`

            try {

                connectMySql.query(language_hindi, (err, result) => {
                    // 
                    //////console.log("successful update  language_hindi:" + err + "language_hindi:" + result);
                    if (result.affectedRows == 0) {
                        const language_hindi = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${req.body.job_id}','${hindi}','${hindiread}','${hindiwrite}','${hindispeak}')`

                        try {



                            connectMySql.query(language_hindi, (err, result) => {
                                //////console.log("successful language_hindi");


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

                    if (result.affectedRows == 0) {
                        const language_gujrati = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${req.body.job_id}','${gujarat}','${gujaratread}','${gujaratwrite}','${gujaratspeak}')`

                        try {


                            connectMySql.query(language_gujrati, (err, result) => {
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
                    // 
                    //////console.log("successful language_english:" + err + result);
                    if (result.affectedRows == 0) {
                        const language_english = `INSERT INTO language (job_id,language_name,l_read,l_write,l_speak) VALUES ('${req.body.job_id}','${english}','${englishread}','${englishwrite}','${englishspeak}')`    // 

                        try {
                            connectMySql.query(language_english, (err, result) => {
                                //////console.log("successful language_english");
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

        if (php != "") {
            const technologies_php = `UPDATE technologies SET name = '${php}', level ='${phplevel}' WHERE job_id ='${req.body.job_id}' and name = '${php}';`

            try {



                connectMySql.query(technologies_php, (err, result) => {

                    if (result.affectedRows == 0) {
                        try {


                            const technologies_php = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${php}','${phplevel}')`
                            connectMySql.query(technologies_php, (err, result) => {
                                // 
                                //////console.log("successful technologies");

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
                    // 
                    //////console.log("successful technologies_mysql:" + err);
                    if (result.affectedRows == 0) {
                        const technologies_mysql = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${mysql}','${mysqllevel}')`

                        try {



                            connectMySql.query(technologies_mysql, (err, result) => {
                                //////console.log("successful technologies_mysql");

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
                    // 
                    //////console.log("successful technologies_oracle:" + err + JSON.stringify(result));

                    if (result.affectedRows == 0) {
                        const technologies_oracle = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${oracle}','${oraclelevel}')`

                        try {


                            connectMySql.query(technologies_oracle, (err, result) => {
                                //////console.log("successful technologies_oracle HUERGI");

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
                    // 
                    //////console.log("successful technologies_laravel:" + err + result);
                    if (result.affectedRows == 0) {
                        const technologies_laravel = `INSERT INTO technologies (job_id,name,level) VALUES ('${req.body.job_id}','${laravel}','${laravelLevel}')`

                        try {


                            connectMySql.query(technologies_laravel, (err, result) => {
                                // 
                                //////console.log("successful technologies_laravel");

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

        const preferances = `UPDATE preferances SET preferd_location ='${Prefedlocation}' , notice_period = '${Noticeperiod}',expacted_ctc ='${ExpactedCtc}' ,current_ctc ='${CurrentcTC}' ,department ='${Department}' WHERE job_id =${req.body.job_id};`

        try {


            connectMySql.query(preferances, (err, result) => {
                // 
                //////console.log("successful preferances:" + err);

            })
        } catch (error) {
            res.status(500).json({ err: "update preferances" })
        }

        if (typeof company == "string") {
            let work_experience = `UPDATE work_e SET company_name ='${company}' , designation ='${workDesignation}' ,w_from ='${From}' , w_to ='${to}'  WHERE job_id =${req.body.job_id} and w_no='1';`

            try {


                connectMySql.query(work_experience, (err, result) => {
                    // 
                    //////console.log("successful work_experience:" + err);

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
                    // 

                    if (result.affectedRows == 0) {
                        let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES ('${req.body.job_id}','${company}','${workDesignation}','${From}','${to}','1')`


                        try {


                            connectMySql.query(work_experience, (err, result) => {
                                // 
                                ////console.log("successful work_experience");

                            })
                        } catch (error) {
                            res.status(500).json({ err: "update work_experience" })
                        }
                        return
                    }
                    for (const key in result) {
                        if (result[key].affectedRows == 0) {
                            let work_experience = `INSERT INTO work_e (job_id,company_name,designation,w_from,w_to,w_no) VALUES ('${req.body.job_id}','${company[key]}','${workDesignation[key]}','${From[key]}','${to[key]}','${Number(key) + 1}')`

                            try {


                                connectMySql.query(work_experience, (err, result) => {
                                    // 
                                    //////console.log("successful work_experience");

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

        if (typeof ReferanceName == "string") {
            let referance_contact = `UPDATE referance_c SET name ='${ReferanceName}' ,contactNumber ='${ReferanceContact}' , relation ='${Relation}' WHERE job_id ='${req.body.job_id}' AND r_no ='1' ;
                    `
            // let referance_contact = `,,) `
            try {


                connectMySql.query(referance_contact, (err, result) => {
                    // 
                    //////console.log("successful referance_contact:" + err);

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
                    // 
                    //////console.log("successful HI referance_contact:" + JSON.stringify(result));

                    if (result.affectedRows == 0) {
                        let referance_contact = `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${req.body.job_id}','${ReferanceName}','${ReferanceContact}','${Relation}','1') `

                        connectMySql.query(referance_contact, (err, result) => {
                            // 
                            //////console.log("successful referance_contact");

                        })
                        return
                    }
                    for (const key in result) {
                        if (result[key].affectedRows == 0) {
                            let referance_contact = `INSERT INTO referance_c (job_id,name,contactNumber,relation,r_no) VALUES ('${req.body.job_id}','${ReferanceName[key]}','${ReferanceContact[key]}','${Relation[key]}','${Number(key) + 1}') `

                            try {
                                connectMySql.query(referance_contact, (err, result) => {
                                    // 
                                    //////console.log("successful referance_contact");

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


        res.redirect(`/job_application/getRecord/${req.body.job_id}`)


    })
}



const dynamic_component = async (req, res) => {




    var sm_relationshipstatus = await object.selectMaster("relationshipstatus")
    var relation = await object.select(sm_relationshipstatus.id, sm_relationshipstatus.select_name, "field-required");

    var sm_prefedlocation = await object.selectMaster("preferdlocation")
    var perefed = await object.select(sm_prefedlocation.id, sm_prefedlocation.select_name, "field-required");


    var sm_department = await object.selectMaster("department")
    var department = await object.select(sm_department.id, sm_department.select_name, "field-required");

    var sm_gender = await object.selectMaster("gender")
    var gender = await object.radio(sm_gender.id, sm_gender.select_name)


    var languageknown = await object.combo(2, ['read', 'write', 'speak'], true)

    var technologies = await object.combo(3, ['Beginer', 'Mideator', 'Expert'], false)

    var sm_rcourse_name = await object.selectMaster("course_combo")
    var course_name = await object.select(sm_rcourse_name.id, sm_rcourse_name.select_name, "check-all-fill-or-not course");
    // var name="course_name"


    res.render('job_application/job', { relation: relation, course_name: course_name, perefed: perefed, department: department, gender: gender, languageknown: languageknown, technologies: technologies })
    // form();

}

const search = async (req, res) => {
    res.render('job_application/component/search')
}

module.exports = { job_form, getRecord, job_form_update,dynamic_component,search };
