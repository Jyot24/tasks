const total_language=document.querySelectorAll('.language')

total_language.forEach((language)=>{
    for(let i=2;i<5;i++){
        document.getElementById(i).style.display="none"
    }

    language.addEventListener('focus',()=>{
        const cuurent_id=language.getAttribute("data-id")

        for(let i=1;i<5;i++){
            if(cuurent_id==i){
                document.getElementById(cuurent_id).style.display=""
            }else{
                document.getElementById(i).style.display="none"
            }
            
        }
        
    })

})


const init=()=>{
    const ImageList=document.querySelector('.slider-wrapper .image-list')
    const sliderbutton=document.querySelectorAll('.slider-wrapper .slider-buttton')

    //console.log(ImageList+sliderbutton);

    sliderbutton.forEach((button)=>{
        button.addEventListener('click',()=>{
            const direction=button.id === "prev-slide" ? -1:1;
            const scrollAmount=ImageList.clientWidth *direction

            //console.log("ImageList.clientWidth:"+ImageList.clientWidth +"scrollAmount:"+scrollAmount);

            ImageList.scrollBy({left:scrollAmount,behavior:"smooth"})
        })
    })
}



window.addEventListener("load",init)

