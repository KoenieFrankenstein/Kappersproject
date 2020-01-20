var afspraken = [{naam: "koen frankena", email: "koen.frankena@gmail.com", kapper: "Samson", datum: "02-02-2020", tijd: "9:30"}]
dbCheck();
function dbCheck() {
    fetch('/dbCheck')
        .then(v => v.json())
        .then(response => {

            //delete old table
            var elmtTable = document.getElementById('afsprakenBody');
            var tableRows = elmtTable.getElementsByTagName('tr');
            var rowCount = tableRows.length;
            for (var x=rowCount-1; x>0; x--) {
                elmtTable.removeChild(tableRows[x]);
            }


            response = response.response;
            let afspraken = response;

            function generateTable(table, data) {
                for (let element of data) {
                    let row = table.insertRow();
                    for (key in element) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(element[key]);
                        cell.appendChild(text);
                    }
                }
            }
            let table = document.querySelector("table");
            let data = Object.keys(afspraken[0]);
            generateTable(table, afspraken);
            
        });
}