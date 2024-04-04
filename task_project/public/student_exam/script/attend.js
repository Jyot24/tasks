
let month_v
function handle_attend_Change(month){
    
    month_v=month
    if(! month.value){
        ////console.log(hi);
    }
    
   
    ////console.log(":"+month.value);
    
    // window.location = 'http://localhost:9040/userAttendence/1?order="'+month.value+'"';
    window.location.href="/student_exam/userAttendence/1?order="+ month.value
    
}

function hearderClick(key){
    const MONTH=key.getAttribute("data-id")
    const order_by=key.getAttribute("data-order_by")
    const current_page=key.getAttribute("data-current-page")

    if(order_by=="ASC"){
        window.location.href="/student_exam/userAttendence/"+current_page+"?order="+ MONTH+"&field="+key.innerText+"&order_by=DESC"
    }else{
        window.location.href="/student_exam/userAttendence/"+current_page+"?order="+ MONTH+"&field="+key.innerText+"&order_by=ASC"
    }
    }


// const que=document.querySelector('#order')
// que.value=<%=order%>



