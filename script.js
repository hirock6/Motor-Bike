let cataGory = document.getElementById("CatagoryClick");
let hamBergerMenu = document.getElementById("hamb");
let menuFlag = true;

function menuChange(){
    cataGory.addEventListener("click",function(){
        if(menuFlag == true){
            hamBergerMenu.style.transform = `translateX(${0}vmin)`
            menuFlag = false;
        }else{
            hamBergerMenu.style.transform = `translateX(${-30}vmin)`
            menuFlag = true;
        }
        window.addEventListener("click",function(e){
            if(e.target.id !== "hamb" && e.target.id !== "CatagoryClick"){
                hamBergerMenu.style.transform = `translateX(${-30}vmin)`
                menuFlag = true;
            }
        })
        
        
    })
}
menuChange()


let topImage1 = document.querySelector(".topImage");
let flag = true
 let flag2 = true
function imgChange(){
    if(flag == true){
        topImage1.classList.add("topImage2");
        flag = false;
    }
    else{
        topImage1.classList.remove("topImage2");
        flag = true;
    }
    setTimeout(imgChange,5000)
}
imgChange()

function imgChange2(){
    if(flag2 == true){
        topImage1.classList.add("topImage3");
        flag2 = false;
    }else{
        topImage1.classList.remove("topImage3");
        flag2 = true;
    }
    setTimeout(imgChange2,6000);
   
}
imgChange2();

let allPage = document.querySelectorAll(".page");
let heaDingText = document.querySelectorAll(".heading-text");

function reavel(){
    window.addEventListener("scroll",function(){
        let windoWInnerHight = window.innerHeight;
        let pgeFlag = 90;
        allPage.forEach(function(e,i){
            let Reacted = allPage[i].getBoundingClientRect().top;
            if(Reacted < windoWInnerHight - pgeFlag){
                allPage[i].style.transform = `translateY(${0}px)`
                allPage[i].style.opacity = `1`
            }
            else{
                allPage[i].style.transform = `translateY(${250}px)`
                allPage[i].style.opacity = `0`
            }
        })
        heaDingText.forEach(function(elm,j){
            let Reacted = heaDingText[j].getBoundingClientRect().top;
            if(Reacted < windoWInnerHight - pgeFlag){
                heaDingText[j].style.opacity = `1`
            }
            else{
                heaDingText[j].style.opacity = `0`
            }
        })
    })
    
}
reavel()


let stKyHeader = document.getElementById("stkyHamb");
let hamBMenu = document.getElementById("hambList");
let manuFlag = true;

function meNuList(){
    stKyHeader.addEventListener("click",function(){
        if(manuFlag == true){
            hamBMenu.style.transform = `translateX(${0}px)`;
            manuFlag = false;
        }else{
            hamBMenu.style.transform = `translateX(${-200}px)`;
            manuFlag = true;
        }
        window.addEventListener("click",function(elm){
            if(elm.target.id !== "hambList" && elm.target.id !== "stkyHamb"){
                if(elm.target.id !== "proFileId"){
                hamBMenu.style.transform = `translateX(${-200}px)`
                manuFlag = true;
                }

            }
        })
        
    })
    
}
meNuList()




let stKYmenu = document.getElementById("stkyMenu");
let stcClass = document.querySelector(".header-menu-bar");
let profIle = document.querySelector(".profile-side-bar");
let proSvgAnimation = document.querySelector(".proSvg");


let ProfiLeDiv = document.querySelector(".pro");
let biOdata = document.getElementById("bioId");
let proFileId = document.getElementById("proFileId");


let proDivFlag = true;
function stkMenu(){
    window.addEventListener("scroll",function(){
        if(this.scrollY > 400){
            stKYmenu.style.visibility = "visible"
            stKYmenu.style.position = "fixed"
            stKYmenu.style.top = `0`
            hamBergerMenu.style.transform = `translateX(${-30}vmin)`
            
        }

        else{
            stKYmenu.style.visibility = "hidden"
            stKYmenu.style.position = "absolute"
            stKYmenu.style.top = `87%`
            profIle.style.transform = `translateX(${280}px)`;
            

            
           
        }

    })



    ProfiLeDiv.addEventListener("click",function(){
        if(proDivFlag == true){
            profIle.style.transform = `translateX(${0}px)`;
            proSvgAnimation.style.transform = `rotate(${180}deg)`
            proDivFlag = false;
        }else{
            profIle.style.transform = `translateX(${280}px)`;
            proSvgAnimation.style.transform = `rotate(${0}deg)`
            proDivFlag = true;
        }
        window.addEventListener("click",function(el){
            if(el.target.id !== "bioId" && el.target.id !== "proFileId"){
                if(el.target.id !== "stkyHamb"){
                    profIle.style.transform = `translateX(${280}px)`;
                    proDivFlag = true;
                }

            }
        })
        
    })


}
stkMenu();



let dUke = document.querySelector(".duke");
let pulSar = document.querySelector(".pulsar");
let yeHAma = document.querySelector(".yahama");
let suZuki = document.querySelector(".suzuki");
let allBikesHeader = document.querySelectorAll(".bikesHeader");

function mouseoverEffect(){
    allBikesHeader.forEach(function(element,index){
        allBikesHeader[index].addEventListener("mouseenter",function(){
            if(index == 0){
                dUke.style.display = "block"
                dUke.addEventListener("mouseout",function(){
                    dUke.style.display = "none"
                })
            }
            if(index == 1){
                pulSar.style.display = "block"
                pulSar.addEventListener("mouseout",function(){
                    pulSar.style.display = "none"
                })
            }
            if(index == 2){
                yeHAma.style.display = "block"
                yeHAma.addEventListener("mouseout",function(){
                    yeHAma.style.display = "none"
                })
            }
            if(index == 3){
                suZuki.style.display = "block"
                suZuki.addEventListener("mouseout",function(){
                    suZuki.style.display = "none"
                })
            }
        })
    })

window.addEventListener("mouseover",function(m){
    if(m.target.id !== "dUKe"){
        dUke.style.display = "none"
    }else{
        dUke.style.display = "block"
    }
    if(m.target.id !== "pULsar"){
        pulSar.style.display = "none"
    }
    else{
        pulSar.style.display = "block"
    }
    if(m.target.id !== "yAHama"){
        yeHAma.style.display = "none"
    }
    else{
        yeHAma.style.display = "block"
    }
    if(m.target.id !== "sUZuki"){
        suZuki.style.display = "none"
    }
    else{
        suZuki.style.display = "block"
    }
})
}
mouseoverEffect()



