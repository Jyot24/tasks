function createNode(parent, chlid) {
    const node = document.getElementById(chlid);
    const clone = node.cloneNode(true);
    document.getElementById(parent).appendChild(clone);
    // document.getElementById(parent).removeChild(node);

    clone.childNodes.forEach(element => {
        if (element.nodeName == 'INPUT')
            element.value = ''
    })
}

function removeNode(parent, chlid) {
    const parent_c = document.querySelector(`#${parent}`);
    const count = parent_c.children.length;
    if (count - 1 > 0) {
        const node = document.getElementById(chlid);
        document.getElementById(parent).removeChild(node);
    }


}

const enDisFields = (lang) => {
    let subfields = document.querySelectorAll(`.${lang}`);

    for (let i = 1; i < subfields.length; i++) {

        if (subfields[i].disabled) {
            subfields[i].disabled = false;
        }
        else {
            subfields[i].checked = false;
            subfields[i].disabled = true;
        }
    }
}


// function myFunctionworkExperience() {
//     const node = document.getElementById("workExperience-child");
//     const clone = node.cloneNode(true);
//     document.getElementById("workExperience").appendChild(clone);
//     clone.childNodes.forEach(element => {
//         if (element.nodeName == 'INPUT')
//             element.value = ''
//     })
//     //////console.log("hi");
// }

// function myFunctionReferance() {
//     const node = document.getElementById("Referance-chlid");
//     const clone = node.cloneNode(true);
//     document.getElementById("Referance").appendChild(clone);

//     clone.childNodes.forEach(element => {
//         if (element.nodeName == 'INPUT')
//             element.value = ''
//     })
// }

// function myFunctionCourse() {
//     const node = document.getElementById("course-chlid");
//     const clone = node.cloneNode(true);




//     // [...document.getElementById("course-chlid")].map((element)=>{

//     // })
//     document.getElementById("course").appendChild(clone);
//     clone.childNodes.forEach(element => {
//         if (element.nodeName == 'INPUT')
//             element.value = ''
//     })
//     // document.querySelectorAll('#course-child').forEach(element=>{
//     //     ////console.log(element)
//     // })    


//     // let last_chlid=document.getElementById("course").lastChild; 
//     // ////console.log(last_chlid.childNodes);


// }

