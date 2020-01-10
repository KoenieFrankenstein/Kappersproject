const router = require('express').Router();
var NoSQL = require('nosql');
var db = NoSQL.load('./local.db.nosql');

router.post('/reserveren', (req, res) => {

    var vandaag = req.body.vandaag;
    var kapper = req.body.kappers;
    var tijd = req.body.selectorTime
    var naam = req.body.naampie;
    var email = req.body.email;

    db.insert({
        datum: vandaag,
        kapper: kapper,
        tijd: tijd,
        naam: naam,
        email: email,
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