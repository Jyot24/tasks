function validateForm() {
    let istrue = true

    try {
        
    
    

    const validate_email = (email) => {
        let emailRegx = /^[^\s@]+@[^\s@]+.[^\s@]+$/

        // //console.log(email);
        if (!emailRegx.test(email)) {
            document.getElementById('error-Email').innerHTML = "email is invalid"
            document.getElementById('error-Email').style.color = "red"
        }
    }

    const validate_phoneNumber = (phoneNumber) => {
        let phoneNumberRegx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

        if (!phoneNumberRegx.test(phoneNumber)) {
            document.getElementById('error-Phone').innerHTML = "phone number is invalid"
        }
    }


    let checked_date = document.querySelectorAll('.checked-date')



    const validate_date = (date, name) => {
        let dateRegx = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/

        if (!dateRegx.test(date)) {
            document.getElementById('error-' + name).innerHTML = "Date is invalid"
        }
    }

    
    // let field_required=document.forms["job_form"]
    // //console.log("validateForm:" + JSON.stringify(field_required));

    let errors = document.querySelectorAll(".error");
    for (let error of errors) {
        error.innerHTML = ""
        // error.style.display = "none";
    }

    

    [...document.querySelectorAll('.check_is_number')].map((element)=>{
        if(isNaN(element.value)){
            document.getElementById('error-' + element.id).innerHTML = element.id + " IS NOT A NUMBER"
            document.getElementById('error-' + element.id).style.color = "red"
            istrue = false
        }
        
    });

    [...document.querySelectorAll('.checked-date')].map((element)=>{
        let dateRegx = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
//console.log("!dateRegx.test(element.value):"+!dateRegx.test(element.value));
        if (!dateRegx.test(element.value)) {
            document.getElementById('error-' + "checked-date").innerHTML = element.id + " IS NOT A DATE"
            document.getElementById('error-' + "checked-date").style.color = "red"
            istrue = false
        }
    });

    [...document.querySelectorAll('.check_is_percentage')].map((element)=>{

        // let Percentage1Regex = /^((100)|(\d{1,2}(.\d*)?))%?$/
        let PercentageRegex = /\d*\.\d+%?/;


       
        if (!PercentageRegex.test(element.value) || isNaN(element.value) ) {
            document.getElementById('error-' + element.id).innerHTML = "percentage is enter in this format 00.00 "
            document.getElementById('error-' + element.id).style.color="red"
            istrue = false
        }
    })
    let field_required = document.querySelectorAll(".field-required");
    // //console.log(field_required);

    for (let i = 0; i < field_required.length; i++) {

        if (field_required[i].value.trim() == "") {
            // //console.log("hi");
            // field_required[i].innerHTML = field_required[i]+ "can't be none"
            document.getElementById('error-' + field_required[i].id).innerHTML = field_required[i].id + " can't be none"
            document.getElementById('error-' + field_required[i].id).style.color = "red"
            istrue = false
        }

        if (field_required[i].id == "Email") {
            validate_email(field_required[i].value)
        }

        if (field_required[i].id == "Phone") {
            validate_phoneNumber(field_required[i].value)
        }

        let datefields = ['dob', 'cfrom1', 'cto1', 'cfrom2', 'cto2', 'cfrom3', 'cto3']
        if (field_required[i].value != '' && datefields.includes(field_required[i].name)) {
            validate_date(field_required[i].value, field_required[i].id)
        }

    }

    let check_fill_is_empty=['check-all-fill-or-not','check-all-fill-or-not-Referance','check-all-fill-or-not-work']

    check_fill_is_empty.map((element_class)=>{
        

    let check_all_fill_or_not = document.querySelectorAll(`.${element_class}`)
    let check_all_fill = 0

    for (let i = 0; i < check_all_fill_or_not.length; i++) {
        // //console.log("field_required[i].value:" + check_all_fill_or_not[i].value + ":" + i);
        if (check_all_fill_or_not[i].value == "") {
            if (check_all_fill == 1) {
                check_all_fill = 2
                break;
            }
            check_all_fill = 3
        } else if (!check_all_fill_or_not[i].value == "") {
            if (check_all_fill == 3) {
                check_all_fill = 2
                break;
            }
            check_all_fill = 1
        }

    }

    if (check_all_fill == 2) {
        document.getElementById(`${element_class}`).innerHTML = "either you fill all field or empty all field"
        document.getElementById(`${element_class}`).style.color = "red"
        istrue = false

    }
})


    //check-all-fill-or-not-work
    // let check_all_fill_or_not_work = document.querySelectorAll('.check-all-fill-or-not-work');
    // let check_all_fill_work = 0;


    // for (let i = 0; i < check_all_fill_or_not_work.length; i++) {
    //     if (check_all_fill_or_not_work[i].value == "") {
    //         if (check_all_fill_work == 1) {
    //             check_all_fill_work = 2
    //             break;
    //         }
    //         check_all_fill_work = 3
    //     } else if (!check_all_fill_or_not_work[i].value == "") {
    //         if (check_all_fill_work == 3) {
    //             check_all_fill_work = 2
    //             break;
    //         }
    //         check_all_fill_work = 1
    //     }


    // }
    // if (check_all_fill_work == 2) {
    //     // //console.log("work exper:");
    //     document.getElementById('check-all-fill-or-not-work').innerHTML = "either you fill all field or empty all field"
    //     document.getElementById('check-all-fill-or-not-work').style.color = "red"
    //     istrue = false

    // }

    // //check-all-fill-or-not-Referance
    // let check_all_fill_or_not_Referance = document.querySelectorAll('.check-all-fill-or-not-Referance')
    // let check_all_fill_Referance = 0

    // for (let i = 0; i < check_all_fill_or_not_Referance.length; i++) {
    //     if (check_all_fill_or_not_Referance[i].value == "") {
    //         if (check_all_fill_Referance == 1) {
    //             check_all_fill_Referance = 2
    //             break;
    //         }
    //         check_all_fill_Referance = 3
    //     } else if (!check_all_fill_or_not_Referance[i].value == "") {
    //         if (check_all_fill_Referance == 3) {
    //             check_all_fill_Referance = 2
    //             break;
    //         }
    //         check_all_fill_Referance = 1
    //     }


    // }
    // if (check_all_fill_Referance == 2) {
    //     document.getElementById('check-all-fill-or-not-Referance').innerHTML = "either you fill all field or empty all field"
    //     document.getElementById('check-all-fill-or-not-Referance').style.color = "red"
    //     istrue = false

    // }


    //combo box validation

    // let array = ['hindi', 'english', 'gujarat']

    // for (let arr in array) {


    //     var combo_box = document.querySelectorAll('.' + array[arr]);
    //     let check_combo_value_is_filled = ""


    //     for (let i = 1; i < combo_box.length; i++) {
    //         let Langcheckbox = document.getElementById(combo_box[0].id);

    //         if (Langcheckbox.checked) {
    //             let checkbox = document.getElementById(combo_box[i].id);
    //             if (!checkbox.checked) {
    //                 check_combo_value_is_filled = "error"

    //             } else {
    //                 check_combo_value_is_filled = 1
    //                 break
    //             }
    //         }
    //         if (!Langcheckbox.checked) {
    //             let checkbox = document.getElementById(combo_box[i].id);
    //             if (checkbox.checked) {
    //                 check_combo_value_is_filled = "error"
    //                 break

    //             } else {
    //                 check_combo_value_is_filled = 0
    //             }
    //         }
    //     }

    //     if (check_combo_value_is_filled == "error") {
    //         document.getElementById('check-all-fill-or-not-' + array[arr]).innerHTML = "you are not proper selected any check box"
    //         document.getElementById('check-all-fill-or-not-' + array[arr]).style.color = "red"

    //     }
    // }


    // let array_tech = ['php', 'mysql', 'laravel', 'oracle']

    // // [...document.querySelectorAll(`.${lang}`)].map(value => {})
   

    // // for (let arr in array_tech) {

    // array_tech.map(tech=>{
    //     var combo_box = document.querySelectorAll('.' + tech);
    //     let check_combo_value_is_filled = ""


    //     for (let i = 1; i < combo_box.length; i++) {
    //         let techcheckbox = document.getElementById(combo_box[0].id);
    //         if (techcheckbox.checked) {
    //             let radio = document.getElementById(combo_box[i].id);
    //             if (!radio.checked) {
    //                 check_combo_value_is_filled = "error"

    //             } else {
    //                 check_combo_value_is_filled = 1
    //                 break
    //             }
    //         }
    //         if (!techcheckbox.checked) {
    //             let radio = document.getElementById(combo_box[i].id);
    //             if (radio.checked) {
    //                 check_combo_value_is_filled = "error"

    //                 break

    //             } else {
    //                 check_combo_value_is_filled = 0
    //             }
    //         }

    //     }

    //     if (check_combo_value_is_filled == "error") {
    //         document.getElementById('check-all-fill-or-not-' +tech).innerHTML = "you are not proper selected any check box"
    //         document.getElementById('check-all-fill-or-not-' +tech).style.color = "red"
    //         istrue = false

    //     }
    // })

    // }

console.log("istrue:"+istrue);
return istrue;
} catch (error) {
    return false;
}
   
}













