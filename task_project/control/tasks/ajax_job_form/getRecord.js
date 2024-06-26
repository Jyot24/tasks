const connectMySql =  require("../../../db");

const basic_details=async (req, res) => {
    let query_basic_details = `SELECT * FROM basic_details where job_id=${req.body.job_id};`;

    try {
        connectMySql.query(query_basic_details, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,result: result, });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong query_basic_details" })
    }

}


const course_details= async (req, res) => {
    let course_details = `SELECT * FROM course_d where job_id=${req.body.job_id};`;
    try {
        connectMySql.query(course_details, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,result: result, });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong course_details" })
    }
    
}

const language= async (req, res) => {
   
    let query_language = `SELECT * FROM language where job_id=${req.body.job_id};`;

    try {
        connectMySql.query(query_language, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,result: result, });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong query_language" })
    }



}

const preferances= async (req, res) => {
    let query_preferances = `SELECT * FROM preferances where job_id=${req.body.job_id};`;

    try {
        connectMySql.query(query_preferances, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,result: result, });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong query_preferances" })
    }
    
}

const work_experience= async (req, res) => {
    
    let query_work_experience = `SELECT * FROM work_e where job_id=${req.body.job_id};`;
    try {
        connectMySql.query(query_work_experience, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,result: result, });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong query_work_experience" })
    }
}

const referance_contact= async (req, res) => {
    
    let query_referance_contact = `SELECT * FROM referance_c where job_id=${req.body.job_id};`;
    try {
        connectMySql.query(query_referance_contact, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,result: result, });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong query_referance_contact" })
    }
}

const technologies= async (req, res) => {
    
    let query_technologies = `SELECT * FROM technologies where job_id=${req.body.job_id};`;
    try {
        connectMySql.query(query_technologies, (err, result) => {
            if(err){
                var success=false;
                return res.status(400).json({ success,err: err });
            }else{
                return res.status(200).json({ success:true,result: result, });
            }
        })
    }
    catch (err) {
        res.json({ error: "something wrong query_technologies" })
    }

}


module.exports = {basic_details,course_details,language,preferances,work_experience,referance_contact,technologies};