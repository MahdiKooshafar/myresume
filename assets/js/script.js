function resume() {
    document.querySelector(".resume").style = "opacity: 0 ;transform: scale(0);";
    document.querySelector(".worktable").style = "opacity: 0 ;transform: scale(0);";
    document.querySelector(".github").style = "opacity: 0 ;transform: scale(0);";
    document.querySelector(".firstopenner").style = "opacity: 0 ;transform: scale(2);";
    setTimeout(() => {
        document.querySelector(".firstopenner").style = "opacity: 0 ;transform: scale(2);display:none;"
    }, 500);

    console.log(1)
}
function worktable() {
    document.querySelector(".resume").style = "opacity: 0 ;transform: scale(0); display: none !important;";
    document.querySelector(".worktable").style = "opacity: 0 ;transform: scale(0); display: none !important;";
    document.querySelector(".github").style = "opacity: 0 ;transform: scale(0); display: none !important;";
    let heightcalc = document.querySelector(".firstopenner").offsetHeight;
    document.querySelector(".firstopenner").style = "bottom: calc(50% - " + heightcalc + "px);";
    document.querySelector(".backto").style = "display: flex !important;";
    let widthcalc = document.querySelector(".firstopenner").offsetWidth;

    setTimeout(() => {
        document.querySelector(".firstopenner").style = "bottom: 2vh;left: calc(50% - " + (widthcalc / 2) + "px);";
        document.querySelector(".backworks").style = "display: flex !important;"
    }, 500);
    console.log(heightcalc)
}
function backtoleft() {
    document.querySelector(".firstopenner").style = "bottom: 2vh ;padding: 0 !important;";
    document.querySelector(".backworks").style = "display: flex !important;transform: scale(0);opacity: 0 ;";
    document.querySelector(".backto").style = " ";
    document.querySelector(".workcarusel").style = " ";
    let refreshcar = document.querySelector(".activ-flex");
    if (refreshcar != null) {
        document.querySelector(".activ-flex").classList.remove("activ-flex");
    }
    setTimeout(() => {
        document.querySelector(".firstopenner").style = " ";
        document.querySelector(".resume").style = " ";
        document.querySelector(".worktable").style = " ";
        document.querySelector(".github").style = " ";
        document.querySelector(".backworks").style = " ";


    }, 500);
}
function github() {
    document.querySelector(".resume").style = "opacity: 0 ;transform: scale(0); display: none !important;";
    document.querySelector(".worktable").style = "opacity: 0 ;transform: scale(0); display: none !important;";
    document.querySelector(".github").style = "opacity: 0 ;transform: scale(0); display: none !important;";
    let withcalc = document.querySelector(".firstopenner").offsetWidth;
    document.querySelector(".backtor").style = "display: flex !important;";
    document.querySelector(".firstopenner").style = "right: calc(50% - " + withcalc + "px);";
    setTimeout(() => {
        document.querySelector(".firstopenner").style = "right: 0; padding: 2% ;"
    }, 500);
}
function backtoright() {
    document.querySelector(".firstopenner").style = "right: 0 ;padding: 0 !important;";
    document.querySelector(".backtor").style = " ";
    setTimeout(() => {
        document.querySelector(".firstopenner").style = " ";
        document.querySelector(".resume").style = " ";
        document.querySelector(".worktable").style = " ";
        document.querySelector(".github").style = " ";
    }, 500);
}
function addcar() {
    let buttonsfinder = document.querySelector(".carusel-buttons").querySelectorAll(".carts");
    for (var x = 0; x < buttonsfinder.length; x++) {
        buttonsfinder[x].addEventListener("click", workcaruselopenner);
        buttonsfinder[x].dataset.work = x;
        buttonsfinder[x].querySelector("span").dataset.work = x;
    }
    console.log(buttonsfinder)
}
function workcaruselopenner() {
    document.querySelector(".workcarusel").style = "display: flex !important;";
    let boxfinder = document.querySelector(".innerworkcarusel").querySelectorAll(".works");
    let divfinder = event.target.dataset.work;
    divfinder = Number(divfinder)
    boxfinder[divfinder].classList.add("activ-flex");
    document.querySelector(".firstopenner").style = "bottom: 2vh;left: 2vw;"

}
function backworktable() {
    document.querySelector(".workcarusel").style = " ";
    document.querySelector(".activ-flex").classList.remove("activ-flex");
    let boxfinder = document.querySelector(".innerworkcarusel").querySelectorAll(".works");
    for (let flexdivs = 0; flexdivs < boxfinder.length; flexdivs++) {
        boxfinder[flexdivs].style = " ";
    }
    document.querySelector(".innerworkcarusel").style = "top: 0;";
    let widthcalc = document.querySelector(".firstopenner").offsetWidth;
    document.querySelector(".firstopenner").style = "bottom: 2vh;left: calc(50% - " + (widthcalc / 2) + "px);";
    
}
function nextcarwork() {
    let boxfinder = document.querySelector(".innerworkcarusel").querySelectorAll(".works");
    for (var y = 0; y < boxfinder.length; y++) {
        let findactive = boxfinder[y].classList.contains("activ-flex");
        if (findactive) { break; }
    }
    if (y + 1 > boxfinder.length - 1) {
        document.querySelector(".innerworkcarusel").style = "top: 0;";
        document.querySelector(".activ-flex").classList.remove("activ-flex");
        boxfinder[0].classList.add("activ-flex");
        for (let flexdivs = 0; flexdivs < boxfinder.length; flexdivs++) {
            boxfinder[flexdivs].style = "display: flex !important;";
        }
    } else {
        document.querySelector(".innerworkcarusel").style = "top: " + ((y + 1) * -84) + "vh;";
        document.querySelector(".activ-flex").classList.remove("activ-flex");
        boxfinder[y + 1].classList.add("activ-flex");
        for (let flexdivs = 0; flexdivs < boxfinder.length; flexdivs++) {
            boxfinder[flexdivs].style = "display: flex !important;";
        }
    }
    console.log(y)
}
function previouscarwork() {
    let boxfinder = document.querySelector(".innerworkcarusel").querySelectorAll(".works");
    for (var i = 0; i < boxfinder.length; i++) {
        let findactive = boxfinder[i].classList.contains("activ-flex");
        if (findactive) { break; }
    }
    if (i - 1 < 0) {
        document.querySelector(".innerworkcarusel").style = "top:" + ((boxfinder.length - 1) * -84) + "vh;";
        document.querySelector(".activ-flex").classList.remove("activ-flex");
        boxfinder[boxfinder.length - 1].classList.add("activ-flex");
        for (let flexdivs = 0; flexdivs < boxfinder.length; flexdivs++) {
            boxfinder[flexdivs].style = "display: flex !important;";
        }
    } else {
        document.querySelector(".innerworkcarusel").style = "top: " + ((i - 1) * -84) + "vh;";
        document.querySelector(".activ-flex").classList.remove("activ-flex");
        boxfinder[i - 1].classList.add("activ-flex");
        for (let flexdivs = 0; flexdivs < boxfinder.length; flexdivs++) {
            boxfinder[flexdivs].style = "display: flex !important;";
        }
    }
    console.log()
}
function addindicators(){
    let liselect = document.querySelectorAll(".indicators-work>li");
    for(let item = 0 ; item < liselect.length ; item++){
        liselect[item].addEventListener("click", selectindicators);
        liselect[item].dataset.work = item;
        liselect[item].querySelector("span").dataset.work = item;
        liselect[item].querySelector(".title").dataset.work = item;

    }
}
function selectindicators(){
    let boxfinder = document.querySelector(".innerworkcarusel").querySelectorAll(".works");
    let numberindicator = event.target.dataset.work;
    numberindicator = Number(numberindicator)
    document.querySelector(".innerworkcarusel").style = "top: " + ((numberindicator ) * -84) + "vh;";
    document.querySelector(".activ-flex").classList.remove("activ-flex");
    boxfinder[numberindicator ].classList.add("activ-flex");
    for (let flexdivs = 0; flexdivs < boxfinder.length; flexdivs++) {
        boxfinder[flexdivs].style = "display: flex !important;";
    }
}
addindicators()
addcar()
