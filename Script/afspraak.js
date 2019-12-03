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

//shit laten zien op juiste moment
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
        document.getElementById("selecterTime").removeAttribute("onchange");
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
//button pas laten werken na invullen
function notDisable(){
    document.getElementById("submitBtn").removeAttribute("disabled");
}

//setDate();
today = yyyy + "-" + mm + "-" + dd;
document.getElementById("vandaag").setAttribute("min", today);

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

//Firebase stuff
var firebaseConfig = {
    apiKey: "AIzaSyBRsyzK6_3gNIs7CEev3ARrc0hPDG2pSnE",
    authDomain: "kappersproject-c1051.firebaseapp.com",
    databaseURL: "https://kappersproject-c1051.firebaseio.com",
    projectId: "kappersproject-c1051",
    storageBucket: "kappersproject-c1051.appspot.com",
    messagingSenderId: "774267815385",
    appId: "1:774267815385:web:3789d91aa09abe868e45c8",
    measurementId: "G-718BSVBQ2M"
  };
    //Initialize Firebase
firebase.initializeApp(firebaseConfig);

//id's
const dateID = document.getElementById("vandaag");
const barberID = document.getElementById("kappers");
const timeID = document.getElementById("selecterTime");
const nameID = document.getElementById("naampie");
const emailID = document.getElementById("email");
const btnID = document.getElementById("submitBtn");

const database = firebase.database();
const rootRef = database.ref("/afspraken/");
// from tutorial:

btnID.addEventListener("click", (e) => {
    e.preventDefault();
    rootRef.child(dateID.value).child(barberID.value).child(timeID.value).set({
        naam: nameID.value,
        email: emailID.value
    });
    console.log("Afspraak gemaakt");
});