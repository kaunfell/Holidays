//window.onload = function(){

const theDay = document.querySelector(".theDay");
const selectDay = document.querySelector(".form-select");
const resultDays = document.querySelector(".resultDays");


let cssPath = document.getElementById("theme");
let cssStyle = document.querySelector(":root");
//let dataThemeBasic = document.body.getAttribute("data-theme", "Valitse päivä ylävalikosta");
//dataThemeBasic = "Valitse"

let dataTheme = document.body.setAttribute("data-theme", "Valitse-päivä-ylävalikosta")


const theValue = selectDay.value;


//theDay.innerHTML = "Valitse päivä ylävalikosta"
theDay.innerHTML = theValue ;





function changeDay(){
    
    //theDay.innerHTML = theValue ;
    const theValue = selectDay.value;
    theDay.innerHTML = theValue + "\n" +theDates[theValue].day + "." + (theDates[theValue].month + 1); //+ 1 because the counter starts from 0=jan

    if(theValue == "Valitse Valitse päivä ylävalikosta"){
        theDay.innerHTML = "Valitse päivä ylävalikosta"
        resultDays.innerHTML = "..."
        document.body.setAttribute("data-theme", "Ystävänpäivä")
    }else{

        counter(theValue);
    }

    
}


//A tree for the dates. Having this many css-files would be harder to manage, even it would be intuitive,
//but easier to have data-theme attributes defined in css. This way we do not even have to define the 
//attributes in these object
const theDates = {
    "Valitse päivä ylävalikosta" :{
        month: " ",
        day: " ",
        sub: " ",
        href: "./resources/css/independent.css"
    },

    Itsenäisyyspäivä : {
        month: 11,
        day: 6,
        sub: "itsenäisyyspäivään",
        href: "./resources/css/independent.css"
    },
    Joulu : {
        month: 11,
        day: 24,
        sub: "jouluun",
        href: "./resources/css/style.css"
    },
    Uusivuosi : {
        month: 11,
        day: 31,
        sub: "uuteenvuoteen",
        href: "./resources/css/valentines.css"
    },
    Vappu:{
        month: 4,
        day: 1,
        sub: "vappuun",
        href: "./resources/css/valentines.css"
    },
    Ystävänpäivä : {
        month: 1,
        day: 14,
        sub: "ystävänpäivään",
        href: "./resources/css/valentines.css",
    }
}





function counter(theValue){

    
//moving these variables made the counter dates correct
const dayValue = theDates[theValue].day;
const monthValue = theDates[theValue].month; 


let today = new Date();
let christmasYear = today.getFullYear();


if(today.getMonth() == monthValue && today.getDate() > dayValue){
    christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, monthValue, dayValue);

let dayMilliseconds = 1000 * 60 * 60 * 24;




let remainingDays = Math.ceil((christmasDate.getTime() - today.getTime()) / (dayMilliseconds));

//document.body.setAttribute("data-theme", [theValue]);
//changes the theme








    if(remainingDays > 0){
        resultDays.innerHTML = remainingDays + "\n" + "päivää " + theDates[theValue].sub;        
        
    }else if(remainingDays < 0){
        resultDays.textContent = (remainingDays + 365) + "\n" +  "päivää " + theDates[theValue].sub;
    }//if you want to count the actual ending day as well, put 366

   
    changeThemes(theValue);
    
};




//} //onload end


function changeThemes(theValue){
    const gnomeBtn = document.querySelector(".gnomeBtn");
    
    //gnomeMeme.style.opacity = "0";
   
    if(theValue === "Joulu"){
        //const gnomeBtn = document.createElement("button");    
        //const resultContainer = document.querySelector(".resultContainer");
        //resultContainer.appendChild(gnomeBtn);
        //gnomeBtn.classList.add("gnomeBtn");
       // gnomeBtn.innerHTML = "Click me";
       
        gnomeBtn.style.opacity = "1";

        gnomeBtn.addEventListener("click", gnomeAttack);
        
        document.body.setAttribute("data-theme", "Joulu");
    }else if(theValue === "Valitse päivä ylävalikosta"){
        theDay.innerHTML = "Valitse päivä ylävalikosta"
        document.body.setAttribute("data-theme", "Valitse-päivä-ylävalikosta")
        remainingDays = 0;
        resultDays.innerHTML = "..."
    
        gnomeBtn.style.opacity = "0";
    }else{
        document.body.setAttribute("data-theme", [theValue]);
        gnomeBtn.style.opacity = "0";
        
    }
    
    }

    function gnomeAttack(){
        let gnomeNum = 0;
        resultDays.innerHTML = gnomeNum;
        const gnomeMeme = document.querySelector(".gnomeMeme");
        gnomeMeme.style.opacity = "1";
    
    }
