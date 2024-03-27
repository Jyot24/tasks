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
app.use('/dynamic_table',require('./routes/tasks/dynamic_table/dynamic_table'))


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