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

 //const geenVoorkeur = document.getElementById("geenVoorkeur");
const ken = document.getElementById("ken");
const barbie = document.getElementById("barbie");
const samson = document.getElementById("samson");
const gert = document.getElementById("gert");

//id's van opions tijden
const nine = document.getElementById("9u");
const nine30 = document.getElementById("9u30");
const ten = document.getElementById("10u");
const ten30 = document.getElementById("10u30");
const eleven = document.getElementById("11u");
const eleven30 = document.getElementById("11u30");
const twelve = document.getElementById("12u");
const twelve30 = document.getElementById("12u30");
const two = document.getElementById("14u");
const two30 = document.getElementById("14u30");
const three = document.getElementById("15u");
const three30 = document.getElementById("15u30");
const four = document.getElementById("16u");
const four30 = document.getElementById("16u30");
const five = document.getElementById("17u");
const five30 = document.getElementById("17u30");

//id's van inputs
const dateID = document.getElementById("vandaag");
const barberID = document.getElementById("kappers");
const timeID = document.getElementById("selecterTime");
const nameID = document.getElementById("naampie");
const emailID = document.getElementById("email");
const btnID = document.getElementById("submitBtn");

const database = firebase.database();
const rootRef = database.ref("/afspraken/");

// click button afspraak maken
btnID.addEventListener("click", (e) => {
    e.preventDefault();
    //check of er al een afspraak staat
    rootRef.child(dateID.value).child(barberID.value).child(timeID.value).once('value', function(snapshot) {
        if (snapshot.exists()) {
            //er staat al een afspraak dus doe niks
            console.log('exists');
            alert("Er staat al een afspraak op dit moment")
        }else{
            //er staat nog geen afspraak dus maak er een
            console.log("doesnt exist");
            if(timeID.value == "Kies een tijd"){
                alert("Kies en tijd!");
            }else{
                rootRef.child(dateID.value).child(barberID.value).child(timeID.value).set({
                    naam: nameID.value,
                    email: emailID.value
                });
                alert("afspraak gemaakt");
            };
        };
    });
});

rootRef.child(dateID.value).child(barberID.value).child(timeID.value).once('value', function(snapshot) {
    if (snapshot.exists()) {
        console.log("nope");
    }else{
        console.log("jup")
    };
});
