const express = require("express");
const con = require("../../../db");
const router = express.Router()
const object = require('../../../control/form')

router.get('/:name?', async (req, res) => {
    var sm_relationshipstatus = await object.selectMaster("relationshipstatus")
    var relation = await object.select(sm_relationshipstatus.id,sm_relationshipstatus.select_name,"field-required basic_details");

    var sm_prefedlocation = await object.selectMaster("preferdlocation")
    var perefed = await object.select(sm_prefedlocation.id,sm_prefedlocation.select_name,"field-required preferances");


    var sm_department = await object.selectMaster("department")
    var department = await object.select(sm_department.id,sm_department.select_name,"field-required preferances");

    var sm_gender = await object.selectMaster("gender")
    var gender = await object.radio(sm_gender.id,sm_gender.select_name,'basic_details')


    var languageknown = await object.combo(2, ['read', 'write', 'speak'], true,'language')

    var technologies = await object.combo(3, ['Beginer', 'Mideator', 'Expert'], false,'technologies')

    var sm_rcourse_name = await object.selectMaster("course_combo")
    var course_name=await object.select(sm_rcourse_name.id,sm_rcourse_name.select_name,"check-all-fill-or-not course course_details");
    
    res.render(`ajax_job_form/update`, { relation: relation,course_name:course_name ,perefed: perefed, department: department, gender: gender, languageknown: languageknown, technologies: technologies,type:req.params.name })

    
    // res.render('update', { relation: relation,course_name:course_name ,perefed: perefed, department: department, gender: gender, languageknown: languageknown, technologies: technologies })
})




module.exports = router;