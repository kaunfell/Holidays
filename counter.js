//window.onload = function(){

const theDay = document.querySelector(".theDay");
theDay.style.color = "red";

const selectDay = document.querySelector(".form-select");
selectDay.style.color = "red";


const resultDays = document.querySelector(".resultDays");
resultDays.style.color = "green";



const theValue = selectDay.value;
theDay.innerHTML = theValue;

function changeDay(){

    const theValue = selectDay.value;
    theDay.innerHTML = theValue;

    if(theValue == "Valitse päivä ylävalikosta"){
        theDay.innerHTML = "Valitse päivä ylävalikosta"
        resultDays.innerHTML = "..."
    }else{

        counter(theValue);
    }

    
}



const theDates = {
    Itsenäisyyspäivä : {
        month: 11,
        day: 6,
        sub: "itsenäisyyspäivään"
    },
    Joulu : {
        month: 11,
        day: 24,
        sub: "jouluun"
    },
    Uusivuosi : {
        month: 11,
        day: 30,
        sub: "uuteenvuoteen"
    },
    Vappu:{
        month: 4,
        day: 1,
        sub: "vappuun"
    },
    Ystävänpäivä : {
        month: 1,
        day: 14,
        sub: "ystävänpäivään"
    }
}



/*for (const [key,  value] of Object.entries(theDates2.Jouluun1)) {
    console.log(` ${key} ${value}`);

    document.write(value);
  }
  */
  //document.write(theValue);
//document.write(theDates2.theValue.month + "-");

/*
for (const [key] of Object.entries(theDates2)) {
    window.write(`${key}: ${value}`);
   }*/

//const checkMonth = ;


//counter 


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




 if(remainingDays > 0){
        resultDays.innerHTML = remainingDays + " " + "päivää " + theDates[theValue].sub;
    }else if(remainingDays < 0){
        resultDays.textContent = (remainingDays + 365) + " " +  "päivää " + theDates[theValue].sub;
    }
//if you want to take the actual ending day, put 366

    
};




// DAY + MONTH 

//} //onload end



