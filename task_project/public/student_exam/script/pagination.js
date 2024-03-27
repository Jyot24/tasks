// var anchor=document.getElementsByClassName('sort')
function handleChange(get){
    var anchor = document.getElementById("order")
    if(get.value=="DESC"){
        anchor.options[1].setAttribute("selected", "selected");
    }
    if(get.value=="ASC"){
        anchor.options[0].setAttribute("selected", "selected");
    }
    console.log(":"+get.value);
    // anchor.addEventListener("change", (e)=>{
    //     console.log(e.target.value);
    // });
    window.location.href = '/student_exam/listuser/1?order="'+get.value+'"';
    // anchor.setAttribute('href', 'https://www.example.com');
    // anchor.href = 'http://localhost:9040/listuser/1?order="'+get.value+'"';
    // anchor.setAttribute("selected", "selected");
}

