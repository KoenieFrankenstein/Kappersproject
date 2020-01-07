const router = require('express').Router();
var NoSQL = require('nosql');
var db = NoSQL.load('./local.db.nosql');

router.get('/api/hello', (req, res) => {
    const obj = {
        foo: 'bar'
    };

    db.insert({
        name: 'New user',
        email: 'new@example.com',
        password: 'foobar'
    });

    res.json(obj);
    
});

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

    res.redirect("/index.html");

})

module.exports = router;