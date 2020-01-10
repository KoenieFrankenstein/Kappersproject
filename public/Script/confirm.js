var url = new URL(window.location.href);
var date = url.searchParams.get("date");
var barber = url.searchParams.get("barber");
var time = url.searchParams.get("time");
var name = url.searchParams.get("name");
var email = url.searchParams.get("email");

var day = date.split("-")[2];
var month = date.split("-")[1];
var year = date.split("-")[0];