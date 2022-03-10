const express = require('express');
const router = express.Router();
const db = require('../db.js');
const path = require('path');

router.get('/', function (req, res) {
    res.send('<h1>Here are the SNOWY users:</h1> <h1>Here are the ANOTHER SNOWY users:</h1>');

});


// router.get('/:name', async function (req, res) {
//     const user = await db.findUser(req.params);
//     //res.json(user);
//     res.render("../views/user.pug", { name: req.params.name });
//     //res.sendFile(path.join(__dirname + '/../views/de.html'));
// });

router.get('/testnew', function (req, res) {
    //res.send('<h1>TESTING NEW</h1>');
    console.log("test new");
    res.sendFile(path.join(__dirname, '../public', 'newuser.html'));
});

router.post('/', async function (req, res) {
    try {
        const data = req.body;
        await db.saveUser(data);
        res.send("SNOWY User saved");
    } catch (err) {
        console.log(err);
    }
})

router.delete('/delete/:name', async function (req, res) {
    try {
        const data = req.body;
        await db.deleteUser(data);
        res.send("testing delete");
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;