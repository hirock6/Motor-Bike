let doWnArrow = document.getElementById("dowmArrow");
let naliTy = document.getElementById("nality");
let natioNality = document.querySelector(".natiLIty");

let smMenu = true;
doWnArrow.addEventListener("click",function(){
    if(smMenu == true){
        natioNality.style.display = "block"
        smMenu = false
    }else{
        natioNality.style.display = "none"
        smMenu = true
    }

    window.addEventListener("click",function(e){
        if(e.target.id !== "nality" && e.target.id !== "dowmArrow"){
            natioNality.style.display = "none"
            smMenu = true
        }
    })
    

})

let natINput = document.querySelector(".natInput");
let counTries = document.querySelectorAll("#countries");
counTries.forEach(function(elm,idx){
    counTries[idx].addEventListener("click",function(){
        if(idx == 0){
            natINput.value = "";
        }else{
            natINput.value = counTries[idx].innerHTML;
        }
    })
    
    
})

let cloSeEye = document.getElementById("eyeClose");
let opeNeEye = document.getElementById("eyeOpen");
let eye = document.querySelector(".svgDiv");
let passWoRds = document.querySelector(".passw");
let eyeFlag = true;
eye.addEventListener("click",function(){
    if(eyeFlag == true){
        cloSeEye.style.display = "block"
        passWoRds.type = "text"
        eyeFlag = false;
    }else{
        cloSeEye.style.display = "none"
        eyeFlag = true;
        passWoRds.type = "password"
    }
})


