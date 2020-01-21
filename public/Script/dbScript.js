function dbCheck() {
    fetch('/dbCheck')
        .then(v => v.json())
        .then(response => {
            response = response.response;

            var date = document.getElementById("vandaag").value;
            var barber = document.getElementById("kappers").value;
            var time = document.getElementById("selectorTime");
            var selector = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17]; //nr 9 is de pauze
            var timesArray = [];
            var tijdenArray = [];
            var pickTime = document.getElementById("pickTime");
            pickTime.selected = "Selected";

            selector.forEach(tijdenEnable);
            timesArray.forEach(mijnfunctie);
            response.forEach(myFunction);

            function tijdenEnable(value) {
                timesArray.push(time.options[value].value);
            }
            function mijnfunctie(value) {
                var eenTijd = document.getElementById(value);
                eenTijd.disabled = false;
            }
            
            function myFunction(value) {
                if (value.datum == date) {
                    if (value.kapper == barber) {
                        tijdenArray.push(value.tijd);
                        tijdenArray.sort();
                        tijdenArray.forEach(tijdenDisable);
                    }
                }
            }
            //disable de tijden die bezet zijn
            function tijdenDisable(value, index, array) {
                var Occupied = document.getElementById(value);
                Occupied.setAttribute("disabled", true);
            }
        });
}