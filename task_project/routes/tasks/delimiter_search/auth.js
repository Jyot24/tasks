const express = require('express');
const router = express.Router();
const con = require('../../../db')

router.get('/', (req, res) => {
    res.render('delimiter_search/index')
})

router.post('/', (req, res) => {

    try {



        let sqlName = {
            "_": "first_name",
            "^": "last_name",
            "$": "email",
            "}": "country"
        }

        let object = {

        }

        const str = req.body.filter
        //////console.log("str:" + str);
        // var check=str.split('$')
        var delimiter = /[_,^,{,},$,:]/;
        // var check=str.split(/$|_|}|{|:/) 
        var check = str.split(delimiter)
        // var check=str.split(['$', '_', ':','_','{','}'])
        // varsplitMulti(str, ['$', '_', ':','_','{','}'])

        var array = []
        var key = []

        let stringKeys = str

        var confirm = str.split(delimiter).map(s => array.push(s))
        //////console.log("array:" + array);

        var raa = array.map((a) => {
            // //////console.log("a:"+a);
            // //////console.log("a.replaceAll:"+str.replaceAll(a,""));
            // key.push(str.replaceAll(a,""))
            stringKeys = stringKeys.replace(a, "")
            // return str.replaceAll(a,"")

        })
        // //////console.log("key:"+key+"raa:"+raa);
        //////console.log("raa:" + raa);
        //////console.log("ssssss:" + stringKeys.length + "array:" + array.length);

        var ss = str.split('_').join('__').split(':').join('::').split('{').join('{{').split('}').join('}}').split('$').join('$$');
        // //////console.log("check:"+check);
        // //////console.log('\n');
        // //////console.log(str.split(delimiter).map(s => s.split(delimiter)));
        // //////console.log(ss.split(delimiter).map(s =>//////console.log("s:"+s)));


        for (let i = 0; i < stringKeys.length; i++) {
            if (object.hasOwnProperty(stringKeys[i])) {
                if (array[i + 1] == "") {

                } else {

                    object[stringKeys[i]].push(array[i + 1])
                }
            } else {
                if (array[i + 1] == "") {

                } else {

                    object[stringKeys[i]] = [array[i + 1]]
                }
            }
            //////console.log(stringKeys[i]);
        }


        //////console.log("object:" + JSON.stringify(object));

        var string = "country: Kenya, city: Nairobi, population: 3.375M, democracy-desciption: Work in progress/ Not fully met, obstacles exist, foo: bar, bar, bar";

        // //////console.log("demo:"+string.split(/, (?=[^,]+:)/).map(s => //////console.log("s:"+s)));

        // const result = str.split(delimiter).reduce((acc, x) => {
        //     //////console.log("acc:"+acc+" x:"+x.trim());
        // })

        // //////console.log("result:"+result);

        //////console.log("gjknghi:" + object["_"].length);


        // query=`SELECT * FROM student_27_2.student_master where first_name like '%${object["_"]}%' AND last_name like '%${object["^"]}%';`
        // con.query(query,function(err,result){
        //     res.render('read',{temp:result})
        // })

        let query = "SELECT * FROM student_master where "

        // const retivekeys = object.slice(1, object.length-1); 
        // //////console.log("retivekeys:"+retivekeys);
        let check_is_one = 1
        let two_consective_length_2 = 1
        let previous_temp_key = ""


        for (let key in object) {

            if (sqlName.hasOwnProperty(key)) {


                //////console.log("sqlName:" + sqlName[key]);
                if (object[key].length > 1) {
                    check_is_one = 2

                    //////console.log("object[previous_temp_key]:" + object[previous_temp_key]);

                    // if (previous_temp_key == "") {
                    //     query = query + "( "

                    // } else {
                    //     if (object[previous_temp_key].length > 1) {
                    //         query = query + "AND ( "
                    //     }
                    //     else {
                    //         query = query + "( "

                    //     }
                    // }
                    // query=query + "first_name like"+"( "
                    // if(two_consective_length_2==2){
                    //     query = query + "AND ( "
                    // }else{
                    query = query + "( "

                    // }
                    // temp = query + "( "
                    temp_2 = query + "AND ( "

                    for (let i = 0; i < object[key].length; i++) {

                        





                        if (i == object[key].length - 1) {
                            //////console.log("key:" + key);
                            previous_temp_key = key
                            // if(two_consective_length_2==2){
                            //     query = query + "AND ( " + sqlName[key] + " like " + `'%${object[key][i]}%'` + ")" + ") "
                            // }else{
                            //     query = query + "( " + sqlName[key] + " like " + `'%${object[key][i]}%'` + ")" + ")"
                            // }
                            // query=query +`%${object["$"][i]}%` +")"
                            query = query + "( " + sqlName[key] + " like " + `'%${object[key][i]}%'` + ")" + ")"

                        } else {

                            // query=query +`%${object["$"][i]}%`+" OR "
                            // "+ sqlName[key] + "
                            query = query + "(" + sqlName[key] + " like " + `'%${object[key][i]}%'` + ")" + " OR "
                        }

                    }


                }
                else {
                    if (check_is_one == 1) {
                        check_is_one = 2
                        query = query + sqlName[key] + " like" + `'%${object[key][0]}%'`
                    } else {
                        query = query + " AND " + sqlName[key] + " like " + `'%${object[key][0]}%'`
                    }
                    // query=query +" AND last_name like " +`'%${object[key][0]}%'`
                }
            }

            //////console.log("key:" + query);
        }

        // if(object["_"].length>1){
        //     // query=query + "first_name like"+"( "
        //     query=query +"( "
        //     for(let i=0;i<object["_"].length;i++){
        //         if(i==object["_"].length-1){
        //             // query=query +`%${object["$"][i]}%` +")"
        //             query=query +"( first_name like " +`'%${object["_"][i]}%'` +")" +")"

        //         }else{
        //             // query=query +`%${object["$"][i]}%`+" OR "
        //             query=query +"(first_name like " +`'%${object["_"][i]}%'` +")" +" OR "
        //         }
        //     }


        // }
        //////console.log("query:" + query);

        con.query(query, function (err, result) {
            if (err) {
                res.end("query is not valid" + err)
            }
            res.render('delimiter_search/index', { temp: result, string: req.body.filter })
        })
    } catch (error) {
        res.end("internal error")
    }

})


module.exports = router;