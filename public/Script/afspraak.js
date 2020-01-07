//shit voor calender
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

//hidden shit
var date = document.getElementById("datum");
var barber = document.getElementById("barber");
var time = document.getElementById("time");
var naam = document.getElementById("naam");
var mail = document.getElementById("mail");
var submit = document.getElementById("submit");
var submitBtn = document.getElementById("submitBtn");

var datefunc = date.attributes.onchange
var number = 0;
submitBtn.setAttribute("disabled", true);

//zorgen dat de inputs pas tevoorschijn komen als de vorige is ingevult
function next(){
    number = number + 1;
    console.log(number);
    if(number == 1){
        barber.style.display="table";
        document.getElementById("vandaag").removeAttribute("onchange");
    }
    if(number == 2){
        time.style.display="table";
        document.getElementById("kappers").removeAttribute("onchange");
    }
    if(number == 3){
        naam.style.display="table";
        document.getElementById("selectorTime").removeAttribute("onchange");
    }
    if(number == 4){
        mail.style.display="table";
        document.getElementById("naampie").removeAttribute("onchange");
    }
    if(number == 5){
        submit.style.display="table";
        document.getElementById("submitBtn").removeAttribute("onchange");
        setTimeout(notDisable, 10);
    }
}

//button pas laten werken na invullen, anders ging hij al door als je op enter drukte bij laatste input
function notDisable(){
    document.getElementById("submitBtn").removeAttribute("disabled");
}

//zorg dat de data in database klopt voor fromaat dd-mm-yyyy
function setDate(){
    if(dd < 10){
        dd = "0" + dd;
    }
    if(mm < 10){
        mm = "0" + mm;
    }
    
    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("vandaag").setAttribute("value", today);
    document.getElementById("vandaag").setAttribute("min", today);
}
setDate();
