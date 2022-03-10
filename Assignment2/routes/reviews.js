const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/', function (req, res) {
    res.send('<h1>Here are the SNOWY reviews:</h1>');
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
        res.send("review data saved");
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;