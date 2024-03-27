const con = require('../db')

let object = {
    select: function select(id,name,class_name) {
        return new Promise(function (resolve, reject) {

            // let query = ``
            // let mainString

            // let stringStart;
            // let stringEnd;
            // let stringMid;
            con.query(`SELECT * FROM option_master where s_id=${id}`, async function (err, result) {

                if (err) {
                    reject("not valid")
                }


                let stringStart = `<label for="${name}"> ${name}:</label><select name="${name}" id="${name}" class="${class_name}">`
                let stringEnd = "</select>"
                let mainString=""
                let stringMid=""
                // stringMid="<option>"

                for (let key in result) {
                    stringMid += `<option value="${result[key]["option_key"]}">`
                    // ////console.log("key:" + result[key]["option_key"]);
                    stringMid = stringMid + result[key]["option_key"] + "</option>"
                    // ////console.log(JSON.stringify(result));
                }

                
                mainString = stringStart + stringMid + stringEnd

                // <option>${JSON.stringify(result)}</option>
                // <option></option>
                // <option></option>
                // </select>`

                // ////console.log("string:" + mainString);
                // ////console.log("result:"+result);
                resolve(stringStart + stringMid + stringEnd);
                // resolve(stringStart + stringMid + stringEnd)
                // return stringStart + stringMid + stringEnd
            })
        })
    },
    radio: function radio(id,name) {
        return new Promise(function (resolve, reject) {


            con.query(`SELECT * FROM option_master where s_id=${id}`, function (err, result) {
                let stringMid = `<label for="${name}"> ${name}:</label>`;

                if (err) {
                    reject("not valid")
                }




                for (let key in result) {
                    stringMid += `<input type="radio" name="${name}" id="${result[key]["option_key"]}" value="${result[key]["option_key"]}" checked>${result[key]["option_key"]}`
                    // ////console.log("key:" + result[key]["option_key"]);
                    // ////console.log(JSON.stringify(result));
                }


                // <option>${JSON.stringify(result)}</option>
                // <option></option>
                // <option></option>
                // </select>`

                // ////console.log("result:"+result);
                resolve(stringMid);
                // return stringStart + stringMid + stringEnd
            })
        })

    },
    selectMaster: function select_master(select_key) {
        return new Promise(function (resolve, reject) {

            let object = {

            }

            con.query(`SELECT id,select_name FROM select_master where select_key='${select_key}';`, function (err, result) {
                if (err) reject(err)
                object["id"] = result[0].id
                object["select_name"] = result[0].select_name

                resolve(object)
            })

        })
    },
    combo: function combo(id, array, comboMultipleallow,class_name) {
        return new Promise(function (resolve, reject) {

            let query = ``
            let mainString

            let stringStart;
            let stringEnd;
            let stringMid = "";
            con.query(`SELECT * FROM option_master where s_id=${id}`, function (err, result) {

                if (err) {
                    reject("not valid")
                }

                for (let key in result) {
                    stringMid += `<span id="check-all-fill-or-not-${result[key]["option_key"]}" class="error"></span><input type="checkbox" id='${result[key]["option_key"]}' name="${result[key]["option_key"]}" value="${result[key]["option_key"]}" class="${result[key]["option_key"]} ${class_name}" onclick="enDisFields('${result[key]["option_key"]}')">${result[key]["option_key"]} `

                    if (comboMultipleallow) {

                        for (let index in array) {
                            stringMid += `<input type="checkbox" id="${result[key]["option_key"]}${array[index]}" name="${result[key]["option_key"]}${array[index]}" value="${array[index]}" class="${result[key]["option_key"]} ${class_name}" disabled> ${array[index]}`
                        }
                        stringMid += "<br>"
                    }
                    else{
                        for (let index in array) {
                            stringMid += `<input type="radio"  id="${result[key]["option_key"]}${array[index]}" name="${result[key]["option_key"]+'level'}" value="${array[index]}" class="${result[key]["option_key"]}" disabled> ${array[index]}`
                        }
                        stringMid += "<br>" 
                    }

                }
                resolve(stringMid)
                // ////console.log("combo :"+stringMid);
            })

        })

    }
}

//SELECT * FROM job_app_db_29.select_master; select_key



// function select(){
//     return new Promise(function(resolve, reject) {

//     let query=``
//     let mainString

//     let stringStart;
//     let stringEnd;
//     let stringMid;
//     con.query('SELECT * FROM job_app_db_29.option_master where s_id=5',function(err,result){

//         if(err){
//             reject("not valid")
//         }


//         stringStart="<select>"
//         stringEnd="</select>"
//         // stringMid="<option>"

//          for(let key in result){
//             stringMid +="<option>"
//             ////console.log("key:"+result[key]["option_key"]);
//             stringMid = stringMid + result[key]["option_key"] +"</option>"
//             // ////console.log(JSON.stringify(result));
//          }

//          mainString = stringStart + stringMid + stringEnd

//         // <option>${JSON.stringify(result)}</option>
//         // <option></option>
//         // <option></option>
//         // </select>`

//         ////console.log("string:"+mainString);
//         // ////console.log("result:"+result);
//         resolve(mainString);
//         // return stringStart + stringMid + stringEnd
//     })
// })


module.exports = object