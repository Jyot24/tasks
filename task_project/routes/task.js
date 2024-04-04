const express = require("express");
const router = express.Router()


//*************************** ajax_job_form **************************************************************

const ajax_job_form=require('../control/tasks/ajax_job_form/form')

router.get('/ajax_job_form/:name?', async (req, res) => {
    ajax_job_form.form(req, res)
})

// ------- getrecord ---------------------------------------------------------------

const ajax_job_read=require('../control/tasks/ajax_job_form/getRecord')
router.post('/ajax_job_form/read/basic_details', async (req, res) => {
    ajax_job_read.basic_details(req, res)
})

router.post('/ajax_job_form/read/course_details', async (req, res) => {
    ajax_job_read.course_details(req, res)
})

router.post('/ajax_job_form/read/language', async (req, res) => {
    ajax_job_read.language(req, res)
})

router.post('/ajax_job_form/read/preferances', async (req, res) => {
    ajax_job_read.preferances(req, res)
})

router.post('/ajax_job_form/read/work_experience', async (req, res) => {
    ajax_job_read.work_experience(req, res)
})

router.post('/ajax_job_form/read/referance_contact', async (req, res) => {
    ajax_job_read.referance_contact(req, res)
})

router.post('/ajax_job_form/read/technologies', async (req, res) => {
    ajax_job_read.technologies(req, res)
})

// ------- saverecord -----------------------------------------------------------
const ajax_job_save=require('../control/tasks/ajax_job_form/save')

router.post('/ajax_job_form/save/basic_details', async (req, res) => {
    ajax_job_save.basic_details(req, res)
})

router.post('/ajax_job_form/save/course_details', async (req, res) => {
    ajax_job_save.course_details(req, res)
})

router.post('/ajax_job_form/save/language', async (req, res) => {
    ajax_job_save.language(req, res)
})

router.post('/ajax_job_form/save/preferances', async (req, res) => {
    ajax_job_save.preferances(req, res)
})

router.post('/ajax_job_form/save/work_experience', async (req, res) => {
    ajax_job_save.work_experience(req, res)
})

router.post('/ajax_job_form/save/referance_contact', async (req, res) => {
    ajax_job_save.referance_contact(req, res)
})

router.post('/ajax_job_form/save/technologies', async (req, res) => {
    ajax_job_save.technologies(req, res)
})


// ------- updaterecord --------------------------------------------
const ajax_job_update=require('../control/tasks/ajax_job_form/updateRecord')

router.post('/ajax_job_form/update/basic_details', async (req, res) => {
    ajax_job_update.basic_details
})

router.post('/ajax_job_form/update/course_details', async (req, res) => {
    ajax_job_update.course_details
})

router.post('/ajax_job_form/update/language', async (req, res) => {
    ajax_job_update.language
})

router.post('/ajax_job_form/update/preferances', async (req, res) => {
    ajax_job_update.preferances
})

router.post('/ajax_job_form/update/work_experience', async (req, res) => {
    ajax_job_update.work_experience
})

router.post('/ajax_job_form/update/referance_contact', async (req, res) => {
    ajax_job_update.referance_contact
})

router.post('/ajax_job_form/update/technologies', async (req, res) => {
    ajax_job_update.technologies
})


//*************************** delimiter *************************************************************************
const delimiter_search=require('../control/tasks/delimiter_search/auth')

router.get('/delimiter_search/', (req, res) => {
    delimiter_search.index(req, res)
})

router.post('/delimiter_search/', (req, res) => {
    delimiter_search.delimter(req, res)
})

//*************************** dynamic_table **************************************************************************
const dynamic_table=require('../control/tasks/dynamic_table/dynamic_table')

router.get('/dynamic_table',(req,res)=>{
    dynamic_table.dynamic_table(req,res)
})


//*************************** event_table ***********************************************************************
router.get('/event_table/',(req,res)=>{
    res.render('event_table/js_1')
})


//*************************** html ***************************************************************************
const html=require('../control/tasks/html/html')

router.get('/html/html1',(req,res)=>{
    html.html1(req,res)
})

router.get('/html/html2',(req,res)=>{
    html.html2(req,res)
})

router.get('/html/html3',(req,res)=>{
    html.html3(req,res)
})


//*************************** job form *************************************************************

const job_application=require('../control/tasks/job_application/auth')

router.post('/job_application/auth',(req,res)=>{
    job_application.job_form(req,res)
})

router.get('/job_application/getRecord/:id', async (req, res) => {
    job_application.getRecord(req,res)
})

router.post('/job_application/update/', async (req, res) => {
    job_application.job_form_update(req,res)
})

router.get('/job_application/', async (req, res) => {
    job_application.dynamic_component(req,res)
})

router.get('/job_application/search', async (req, res) => {
    job_application.search(req,res)
})


//*************************** json_place_holder ********************************************
const json_place_holder=require('../control/tasks/json_place_holder/auth')

router.get('/json_place_holder/',(req,res)=>{
    json_place_holder.json_place_holder_index(req,res)
})


router.get('/json_place_holder/posts',(req,res)=>{
    json_place_holder.json_place_holder_posts(req,res)
})

router.get('/json_place_holder/postDetails/:id?',(req,res)=>{
    json_place_holder.json_place_holder_post_details(req,res)
})


//*************************** kuku cube *****************************************************
const kuku_cube=require('../control/tasks/kuku cube/kuku cube')

router.get('/kuku_cube/',(req,res)=>{
    kuku_cube.kuku_cube(req,res)
})


//*************************** listuser_fs *****************************************************
const listuser_fs=require('../control/tasks/listuser_fs/demo')
// listuser_fs_home,addUser,listUser,userData
router.get('/listuser_fs/', (req, res) => {
    listuser_fs.listuser_fs_home(req, res)
})

router.post('/listuser_fs/addUser',(req, res) => {
    listuser_fs.addUser(req, res)
})

router.get('/listuser_fs/listUser', (req, res) => {
    listuser_fs.listUser(req, res)
})

router.get('/listuser_fs/userData/:id', (req, res) => {
    listuser_fs.userData(req, res)
})


//*************************** student_crud ***************************************************
const student_crud=require('../control/tasks/student_crud/auth')

router.post('/student_crud/addUser', (req, res) => {
    student_crud.addUser(req, res)
})

router.post('/student_crud/getUser', (req, res) => {
    student_crud.getUser(req, res)
})

router.get('/student_crud/getUser/:id', (req, res) => {
    student_crud.getUser_UpdateUser(req, res)
})

router.get('/student_crud/listuser', (req, res) => {
    student_crud.listuser(req, res)
})

router.put('/student_crud/updateUser', (req, res) => {
    student_crud.updateUser(req, res)
})

router.delete('/student_crud/deleteUser/:id', (req, res) => {
    student_crud.deleteUser(req, res)
})

router.get('/student_crud/', (req, res) => {
    res.render('student_crud/Home');
   
})

router.get('/student_crud/getuser', (req, res) => {
    res.render('student_crud/GetUser');

})


//*************************** student_exam ***********************************************************

const student_exam=require('../control/tasks/student_exam/auth')

router.get('/student_exam/listuser/:id', (req, res) => {
    student_exam.listuser(req, res)
})
router.get('/student_exam/userAttendence/:id', (req, res) => {
    student_exam.userAttendence(req, res)
})
router.get('/student_exam/userResult/:id', (req, res) => {
    student_exam.userResult(req, res)
})
router.get('/student_exam/userResultReport/:student_id', (req, res) => {
    student_exam.userResultReport(req, res)
})

router.post('/student_exam/searchById', (req, res) => {
    student_exam.searchById(req, res)
})
router.post('/filterResult', (req, res) => {
    student_exam.filterResult(req, res)
})

router.get('/student_exam/', (req, res) => {
    res.redirect('/student_exam/listuser/1')
})
router.get('/student_exam/listuser/*', (req, res) => {
    res.redirect('/student_exam/listuser/1')
})


router.get('/student_exam/userAttendence/*' ,(req, res) => {
    res.redirect('/student_exam/userAttendence/1?order=DEC2023')
})

router.get('/student_exam/userResult/*', (req, res) => {
    res.redirect('/student_exam/userResult/1')
})

router.get('/student_exam/*',(req, res) => {
    res.end("NOT VALID URL..-")
})




//=======================================================================================================NaN
//*************************** tic_tak_toc
const tic_tak_toc=require('../control/tasks/tic tak toc/tic_tak_toc')

router.get('/tic_tak_toc/',(req,res)=>{
    tic_tak_toc.tic_tak_toc(req,res)
    // res.render('tic_tak_toc/index')
})


//*************************** timezone ***************************************************************
const timezone=require('../control/tasks/timezone/index')

router.get('/timezone/',(req,res)=>{
    timezone.timezone(req,res)
    // res.render('timezone/index')
 })

//*************************** viewGrid ***********************************************************************
const viewGrid=require('../control/tasks/viewGrid/auth')

router.all('/viewGrid/viewGrid/:id?', (req, res) => {
    viewGrid.viewgrid(req,res)
})

router.get('/viewGrid/', (req, res) => {
    
    res.render('viewGrid/Home');
})

module.exports = router;