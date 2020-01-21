var afspraken = [{}]

var naam = document.getElementById('zoekName');
var kapper = document.getElementById('zoekBarber');
var mail = document.getElementById('zoekMail');
var datum = document.getElementById('zoekDate');
var tijd = document.getElementById('zoekTime');

var resultaat = document.getElementById('resultaat');

function zoeken() {
    
    //oude tabel weghalen
    var elmtTable = document.getElementById('afsprakenBody');
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for (var x=rowCount-1; x>0; x--) {
        elmtTable.removeChild(tableRows[x]);
    }

    var upperCaseName = naam.value;
    upperCaseName = upperCaseName.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    const data = {
        naam: upperCaseName,
        email: mail.value,
        kapper: kapper.value,
        datum: datum.value,
        tijd: tijd.value
    }

    fetch('/zoeken', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
// function dbCheck() {
    
        .then(v => v.json())
        .then(response => {
            
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