const router = require('express').Router();
var NoSQL = require('nosql');
var db = NoSQL.load('./local.db.nosql');

router.post('/reserveren', (req, res) => {

    var naam = req.body.naampie;
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

// router.get('/dbCheck', (req, res) => {
// });

router.post('/zoeken', (req, res) => {

    // db.find().make(function(filter) {
    //     filter.callback(function(err, response) {
    //         res.json({ response })
    //     });
    // });

    var naam = req.body.naam;
    var email = req.body.email;
    var kapper = req.body.kapper;
    var datum = req.body.datum;
    var tijd = req.body.tijd;
    
    db.find().make(function(filter) {
        if (naam !== '') {
            filter.where('name', '=', naam)
        }
        if (email !== '') {
            filter.where('email', '=', email)
        }
        if (kapper !== 'Geen kapper gekozen') {
            filter.where('chair', '=', kapper)
        }
        if (datum !== '') {
            filter.where('date', '=', datum)
        }
        if (tijd !== '') {
            filter.where('time', '=', tijd)
        }
        filter.callback(function(err, response) {
            res.json({ response })
        });
    });

})

module.exports = router;