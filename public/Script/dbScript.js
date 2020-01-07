function dbCheck(){
    fetch('/dbCheck')
        .then(v => v.json())
        .then(response => {
            response = response.response;

            //go go go
            var date = document.getElementById("vandaag").value;
            var barber = document.getElementById("kappers").value;
            var time = document.getElementById("selectorTime").value;

            var tijdenArray = [];

            response.forEach(myFunction);

            function myFunction(value, index, array){
                console.log(value.datum + " " + value.kapper + " " + value.tijd);
                console.log(value.datum, date);
                if (value.datum == date){
                    if(value.kapper == barber){
                        tijdenArray.push(value.tijd);
                        tijdenArray.sort();

                        console.log("WORKS");
                        console.log(tijdenArray);

                        tijdenArray.forEach(tijdenDisable);
                    }
                }
            }
            function tijdenDisable(value, index, array){
                var Occupied = document.getElementById(value);

                Occupied.setAttribute("disabled", true);
            }
        });
}