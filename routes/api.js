const router = require('express').Router();
var NoSQL = require('nosql');
var db = NoSQL.load('./local.db.nosql');

router.post('/reserveren', (req, res) => {

    var naam = req.body.naampie;
    var email = req.body.email;
    var kapper = req.body.kappers;
    var vandaag = req.body.vandaag;
    var tijd = req.body.selectorTim;

    db.insert({
        naam: naam,
        email: email,
        kapper: kapper,
        datum: vandaag,
        tijd: tijd,
    }); 

    res.redirect("/confirm.html?date=" + vandaag + "&barber=" + kapper + "&time=" + tijd + "&name=" + naam + "&email=" + email);

})

router.get('/dbCheck', (req, res) => {
    
    db.find().make(function(filter) {
        filter.callback(function(err, response) {
            res.json({ response })
        });
    });
});

module.exports = router;