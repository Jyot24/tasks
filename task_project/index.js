const express=require('express');
const app= express();
const path = require('path');
const bodyParser = require('body-parser');
const {verifyAuth_is_login}=require('./middleware/is_login')


const port=8020;



app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname , 'public')))

// app.use(cors())//because this need if we use call api in react app then 'cors' is needed

//-------------------------------------------------all tasks route --------------------------------------------------------------

//*************************************************  student_exam  *********************************************************
app.use('/student_exam', verifyAuth_is_login,require('./routes/tasks/student_exam/auth'))
app.use('/student_exam',verifyAuth_is_login,require('./routes/tasks/student_exam/page'))
app.use('/student_exam',verifyAuth_is_login,require('./routes/tasks/student_exam/filter'))

//*************************************************  job_application  *********************************************************

app.use('/job_application',verifyAuth_is_login,require('./routes/tasks/job_application/auth'))
app.use('/job_application',verifyAuth_is_login,require('./routes/tasks/job_application/form'))

//*************************************************  json_place_holder  *********************************************************

app.use('/json_place_holder',verifyAuth_is_login,require('./routes/tasks/json_place_holder/auth'))

//*************************************************  dynamic_table  *********************************************************

app.use('/dynamic_table',verifyAuth_is_login, verifyAuth_is_login,require('./routes/tasks/dynamic_table/dynamic_table'))

//*************************************************  kuku_cube  *********************************************************

app.use('/kuku_cube',verifyAuth_is_login,require('./routes/tasks/kuku cube/kuku cube'))

//*************************************************  tic_tak_toc  *********************************************************

app.use('/tic_tak_toc',verifyAuth_is_login,require('./routes/tasks/tic tak toc/tic_tak_toc'))

//*************************************************  delimiter_search  *********************************************************

app.use('/delimiter_search',verifyAuth_is_login,require('./routes/tasks/delimiter_search/auth'))

//*************************************************  ajax_job_form  *********************************************************

app.use('/ajax_job_form',verifyAuth_is_login,require('./routes/tasks/ajax_job_form/form'))
app.use('/ajax_job_form/save',verifyAuth_is_login,require('./routes/tasks/ajax_job_form/save'))
app.use('/ajax_job_form/read',verifyAuth_is_login,require('./routes/tasks/ajax_job_form/getRecord'))
app.use('/ajax_job_form/update',verifyAuth_is_login,require('./routes/tasks/ajax_job_form/updateRecord'))

//*************************************************  html task  *********************************************************

app.use('/html', verifyAuth_is_login,require('./routes/tasks/html/html'))

//*************************************************  timezone  *********************************************************

app.use('/timezone',verifyAuth_is_login,require('./routes/tasks/timezone/index'))

//*************************************************  viewGrid  *********************************************************

app.use('/viewGrid',verifyAuth_is_login,require('./routes/tasks/viewGrid/auth'))
app.use('/viewGrid',verifyAuth_is_login,require('./routes/tasks/viewGrid/page'))

//*************************************************  event_table  *********************************************************

app.use('/event_table',verifyAuth_is_login,require('./routes/tasks/event_table/event_table'))

//*************************************************  listuser_fs  *********************************************************

app.use('/listuser_fs', verifyAuth_is_login,require('./routes/tasks/listuser_fs/demo'))

app.use('/student_crud', verifyAuth_is_login,require('./routes/tasks/student_crud/auth'))
app.use('/student_crud', verifyAuth_is_login,require('./routes/tasks/student_crud/page'))


//-------------------------------------------------  register and login  --------------------------------------------------------------

app.use('/register' ,require('./routes/register/register'))
app.use('/login' ,require('./routes/login/login'))

app.use('/expire',require('./routes/expire/expire'))
app.use('/logout',require('./routes/login/logout'))
app.use('/forgot',require('./routes/forgot/update_password'))
app.use('/user' ,require('./routes/users/user'))


app.use('/' ,require('./routes/navigate'))
app.use('/auth',require('./routes/navigate_after_login'))



app.listen(port,()=>{
    console.log(`app listeing at http://localhost:${port}`);
})