const express = require("express");
const con = require("../../../db");
const router = express.Router()
const object = require('../../../control/form')

router.get('/', async (req, res) => {
    

    

    var sm_relationshipstatus = await object.selectMaster("relationshipstatus")
    var relation = await object.select(sm_relationshipstatus.id,sm_relationshipstatus.select_name,"field-required");

    var sm_prefedlocation = await object.selectMaster("preferdlocation")
    var perefed = await object.select(sm_prefedlocation.id,sm_prefedlocation.select_name,"field-required");


    var sm_department = await object.selectMaster("department")
    var department = await object.select(sm_department.id,sm_department.select_name,"field-required");

    var sm_gender = await object.selectMaster("gender")
    var gender = await object.radio(sm_gender.id,sm_gender.select_name)


    var languageknown = await object.combo(2, ['read', 'write', 'speak'], true)

    var technologies = await object.combo(3, ['Beginer', 'Mideator', 'Expert'], false)

    var sm_rcourse_name = await object.selectMaster("course_combo")
    var course_name=await object.select(sm_rcourse_name.id,sm_rcourse_name.select_name,"check-all-fill-or-not course");
    // var name="course_name"
    

    res.render('job_application/job', { relation: relation,course_name:course_name ,perefed: perefed, department: department, gender: gender, languageknown: languageknown, technologies: technologies })
    // form();

})

router.get('/search', async (req, res) => {
    res.render('job_application/component/search')
})


module.exports = router;
