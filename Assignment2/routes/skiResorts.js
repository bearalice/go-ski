const express = require('express');
const router = express.Router();
const db = require('../db.js');
const path = require('path');

router.get('/', function (req, res) {
    res.send('<h1>Here are the SNOWY resorts:</h1>');
});

router.get('/new', function (req, res) {
    //res.send('<h1>Here are the SNOWY resorts:</h1>');
    res.render('resorts/new.ejs');
});

router.get('/:name', async function (req, res) {
    const user = await db.findUser(req.params);
    res.json(user);
    //res.render("../views/user.pug", { name: req.params.name });
});

router.post('/', async function (req, res) {
    try {
        const data = req.body;
        await db.saveUser(data);
        res.send("Resort data saved");
    } catch (err) {
        console.log(err);
    }
})



module.exports = router;