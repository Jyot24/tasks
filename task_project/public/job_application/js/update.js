
    let combo_language = JSON.parse(combo_language_temp)
    for (const key in combo_language) {
        document.getElementById(`${combo_language[key].language_name}`).checked = true;
        let subfields = document.querySelectorAll(`.${combo_language[key].language_name}`);

        for (let i = 1; i < subfields.length; i++) {
            subfields[i].disabled = false;
        }
        document.getElementById(`${combo_language[key].language_name}${combo_language[key].l_read}`).checked = true;
        document.getElementById(`${combo_language[key].language_name}${combo_language[key].l_write}`).checked = true;
        document.getElementById(`${combo_language[key].language_name}${combo_language[key].l_speak}`).checked = true;

    }


    let combo_tech = JSON.parse(combo_tech_temp)
    // //console.log(JSON.parse(combo_tech_temp));
    for (let i in combo_tech) {
        // //console.log("combo_tech:" + combo_tech[i].name);
        document.getElementById(`${combo_tech[i].name}`).checked = true;
        let subfields = document.querySelectorAll(`.${combo_tech[i].name}`);

        for (let i = 1; i < subfields.length; i++) {


            subfields[i].disabled = false;

        }
        document.getElementById(`${combo_tech[i].name}${combo_tech[i].level}`).checked = true
    }

    // document.getElementById("hindiread").checked = true;


    let arr_select_id = [];
    let object_seleted = {}
    let arr_select_value = [];
    [...document.querySelectorAll('option')].map((element) => {
        element.selected = ""
    });

    // let index_course=0;

    let check_is_empty_couser_object = JSON.parse(check_is_empty_couse_temp)
    if (check_is_empty_couser_object == "") {
        [...document.querySelectorAll('.course')].map((element, index) => {
            const newOption = document.createElement('option');
            const optionText = document.createTextNode(`---seleted the course---`);

            newOption.setAttribute('selected', '')
            newOption.appendChild(optionText);
            newOption.setAttribute('value', ``);

            element.appendChild(newOption);
        })
        console.log("hi");
    } else {
        [...document.querySelectorAll('.course')].map((element, index) => {
            // element.selected = ""
            const newOption = document.createElement('option');
            let couser_object = JSON.parse(couse_temp)
            //console.log(typeof index);
            let current_couser_object = couser_object[`${index}`].name
            //console.log("elementbhu:" + `${current_couser_object}`);

            const optionText = document.createTextNode(`${current_couser_object}`);

            newOption.setAttribute('selected', '')
            newOption.setAttribute('hidden', '')
            newOption.appendChild(optionText);
            newOption.setAttribute('value', `${current_couser_object}`);

            element.appendChild(newOption);
        })
    }
   

    //console.log("radiobtn:" + radiobtn);


    for (let id in object_seleted) {
        const newOption = document.createElement('option');
        const optionText = document.createTextNode(`${object_seleted[id]}`);

        newOption.setAttribute('selected', '')
        newOption.setAttribute('hidden', '')
        newOption.appendChild(optionText);
        newOption.setAttribute('value', `${object_seleted[id]}`);

        const select = document.getElementById(`${id}`);
        select.appendChild(newOption);

    }