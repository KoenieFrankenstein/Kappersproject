var url = new URL(window.location.href);
var date = url.searchParams.get("date");
var barber = url.searchParams.get("barber");
var time = url.searchParams.get("time");
var name = url.searchParams.get("name");
var email = url.searchParams.get("email");

var day = date.split("-")[2];
var month = date.split("-")[1];
var year = date.split("-")[0];

if (day.charAt(0) == 0) {
    if (day == 01) {
        day = 1;
    }
    if (day == 02) {
        day = 2;
    }
    if (day == 03) {
        day = 3;
    }
    if (day == 04) {
        day = 4;
    }
    if (day == 05) {
        day = 5;
    }
    if (day == 06) {
        day = 6;
    }
    if (day == 07) {
        day = 7;
    }
    if (day == 08) {
        day = 8;
    }
    if (day == 09) {
        day = 9;
    }
}
defineMonth();

function defineMonth() {
    if (month == 01) {
        month = "januari";
    }
    if (month == 02) {
        month = "februari";
    }
    if (month == 03) {
        month = "maart";
    }
    if (month == 04) {
        month = "april";
    }
    if (month == 05) {
        month = "mei";
    }
    if (month == 06) {
        month = "juni";
    }
    if (month == 07) {
        month = "juli";
    }
    if (month == 08) {
        month = "augustus";
    }
    if (month == 09) {
        month = "september";
    }
    if (month == 10) {
        month = "oktober";
    }
    if (month == 11) {
        month = "november";
    }
    if (month == 12) {
        month = "december";
    }
}

datum = day + " " + month + " " + year;

var datum = document.getElementById("datum");
var kapper = document.getElementById("kapper");
var tijd = document.getElementById("tijd");
var naam = document.getElementById("naam");
var email = document.getElementById("email");