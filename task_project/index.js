const express=require('express');
const app= express();
const path = require('path');
const bodyParser = require('body-parser');
const {verifyAuth_is_login} =require('./middleware/is_login')

const port=8020;


app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname , 'public')))



//*********************************************** login and register routes*********************************/
app.use('/',require('./routes/authenication'))

//*********************************************** all task routes*********************************/
app.use('/', verifyAuth_is_login,require('./routes/task'))

//*********************************************** not found route*********************************/
app.get('*',(req,res)=>{
   res.end('404 not found!')
})

app.listen(port,()=>{
    console.log(`app listeing at http://localhost:${port}`);
})

//sudo killall -node 9
