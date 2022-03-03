const express = require('express');
const router = express.Router();
const db = require('../db.js');
//Activity 3-add more routes 
router.get('/', function (req, res) {
    res.send('<h1>Here are the users:</h1>');
});

//Activity 4 – Route Parameters
// router.get('/:name', function (req, res) {
//     res.send(`Hi ${req.params.name}!`);
//     console.log(req.params);
// });

router.get('/:name', async function (req, res) {
    const user = await db.findUser(req.params);
    res.json(user);
    //res.render("../views/user.pug", { name: req.params.name });
});

router.post('/', async function (req, res) {
    try {
        const data = req.body;
        await db.saveUser(data);
        res.send("data saved");
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;