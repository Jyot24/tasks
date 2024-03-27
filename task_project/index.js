const express=require('express');
const app= express();
const path = require('path');
const bodyParser = require('body-parser');

const port=8020;



app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname , 'public')))

// app.use(cors())//because this need if we use call api in react app then 'cors' is needed

//all tasks 
app.use('/student_exam',require('./routes/tasks/student_exam/auth'))
app.use('/student_exam',require('./routes/tasks/student_exam/page'))
app.use('/student_exam',require('./routes/tasks/student_exam/filter'))

app.use('/job_application',require('./routes/tasks/job_application/auth'))
app.use('/job_application',require('./routes/tasks/job_application/form'))

app.use('/json_place_holder',require('./routes/tasks/json_place_holder/auth'))


app.use('/dynamic_table',require('./routes/tasks/dynamic_table/dynamic_table'))
app.use('/kuku_cube',require('./routes/tasks/kuku cube/kuku cube'))
app.use('/tic_tak_toc',require('./routes/tasks/tic tak toc/tic_tak_toc'))
app.use('/delimiter_search',require('./routes/tasks/delimiter_search/auth'))
app.use('/ajax_job_form',require('./routes/tasks/ajax_job_form/form'))
app.use('/ajax_job_form/save',require('./routes/tasks/ajax_job_form/save'))
app.use('/ajax_job_form/read',require('./routes/tasks/ajax_job_form/getRecord'))
app.use('/ajax_job_form/update',require('./routes/tasks/ajax_job_form/updateRecord'))

app.use('/html',require('./routes/tasks/html/html'))

app.use('/timezone',require('./routes/tasks/timezone/index'))

app.use('/viewGrid',require('./routes/tasks/viewGrid/auth'))
app.use('/viewGrid',require('./routes/tasks/viewGrid/page'))
//-----------------------------------------------------------------------------------------------
app.use('/register' ,require('./routes/register/register'))
app.use('/login' ,require('./routes/login/login'))

app.use('/expire',require('./routes/expire/expire'))
app.use('/logout',require('./routes/login/logout'))
app.use('/forgot',require('./routes/forgot/update_password'))
app.use('/user' ,require('./routes/users/user'))



app.use('/' ,require('./routes/navigate'))
app.use('/auth',require('./routes/navigate_after_login'))




//ejs engine set

//Routes



app.listen(port,()=>{
    console.log(`app listeing at http://localhost:${port}`);
})