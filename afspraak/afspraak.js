var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

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
function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("active");

}