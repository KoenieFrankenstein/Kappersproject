function password() {

    const wachtwoord = {
        password: document.getElementById('passwordInput').value
    }
    fetch('/logIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wachtwoord),
    })
        .then(v => v.json())
        .then(password => {
            password = password.password;

            if (password == 'Correct password') {
                document.getElementById('passwordDiv').style.display = 'none';
                document.getElementById('zoekDiv').style.display = 'block';
            }else if (password == "Wrong password") {
                alert("Het wachtwoord is incorrect. Probeer het opnieuw.")
            }
        })
}


function zoeken() {
    var afspraken = [];

    var naam = document.getElementById('zoekName');
    var kapper = document.getElementById('zoekBarber');
    var mail = document.getElementById('zoekMail');
    var datum = document.getElementById('zoekDate');
    var tijd = document.getElementById('zoekTime');
    //oude tabel weghalen
    var elmtTable = document.getElementById('afsprakenBody');
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for (var x = rowCount - 1; x > 0; x--) {
        elmtTable.removeChild(tableRows[x]);
    }

    const data = {
        naam: naam.value,
        email: mail.value,
        kapper: kapper.value,
        datum: datum.value,
        tijd: tijd.value
    }

    fetch('/zoeken', {
        method: 'POST', // or 'PUT'nse
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
            // let data = Object.keys(afspraken[0]);
            generateTable(table, afspraken);

        });
}