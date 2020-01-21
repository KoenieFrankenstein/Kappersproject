const router = require('express').Router();
var NoSQL = require('nosql');
var db = NoSQL.load('./local.db.nosql');

router.get('/dbCheck', (req, res) => {
    
    db.find().make(function(filter) {
        filter.callback(function(err, response) {
            res.json({ response })
        });
     });
 });
 
router.post('/reserveren', (req, res) => {

    var upperCaseName = req.body.naampie;
    upperCaseName = upperCaseName.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    var naam = upperCaseName;
    var email = req.body.email;
    var kapper = req.body.kappers;
    var vandaag = req.body.vandaag;
    var tijd = req.body.selectorTime;

    db.insert({
        naam: naam,
        email: email,
        kapper: kapper,
        datum: vandaag,
        tijd: tijd,
    }); 
    res.redirect("/confirm.html?date=" + vandaag + "&barber=" + kapper + "&time=" + tijd + "&name=" + naam + "&email=" + email);
})

router.post('/zoeken', (req, res) => {

    var naam = req.body.naam;
    var email = req.body.email;
    var kapper = req.body.kapper;
    var datum = req.body.datum;
    var tijd = req.body.tijd;
    db.find().make(function(filter) {
        if (naam !== '') {
            filter.where('naam', '=', naam)
        }
        if (email !== '') {
            filter.where('email', '=', email)
        }
        if (kapper !== 'Geen kapper gekozen') {
            filter.where('kapper', '=', kapper)
        }
        if (datum !== '') {
            filter.where('datum', '=', datum)
        }
        if (tijd !== '') {
            filter.where('tijd', '=', tijd)
        }
        filter.callback(function(err, response) {
            res.json({ response })
        });
    });
})
router.post('/logIn', (req, res) => {
    var password = req.body.password;
    if(password === 'Kapper!'){
        password = "Correct password"
        res.json({ password })
       
    }else{
        console.log('wrong password');
    }
})

module.exports = router;