function dbCheck() {
    fetch('/dbCheck')
        .then(v => v.json())
        .then(response => {
            response = response.response;

            var date = document.getElementById("vandaag").value;
            var barber = document.getElementById("kappers").value;
            var time = document.getElementById("selectorTime");
            var selector = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17];
            var timesArray = [];
            var tijdenArray = [];
            var pickTime = document.getElementById("pickTime");

            pickTime.selected = "Selected";

            selector.forEach(tijdenEnable);
            function tijdenEnable(value, index, array) {
                timesArray.push(time.options[value].value);
            }
            timesArray.forEach(mijnfunctie);
            function mijnfunctie(value, index, array) {
                var eenTijd = document.getElementById(value);
                eenTijd.disabled = false;
            }
            response.forEach(myFunction);

            function myFunction(value, index, array) {
                console.log(value.datum + " " + value.kapper + " " + value.tijd);
                console.log(value.datum, date);
                if (value.datum == date) {
                    if (value.kapper == barber) {
                        tijdenArray.push(value.tijd);
                        tijdenArray.sort();
                        tijdenArray.forEach(tijdenDisable);
                    }
                }
            }
            function tijdenDisable(value, index, array) {
                var Occupied = document.getElementById(value);
                Occupied.setAttribute("disabled", true);
            }
        });
}