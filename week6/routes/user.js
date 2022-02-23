const express = require('express');
const router = express.Router();
//Activity 3-add more routes 
router.get('/', function (req, res) {
    res.send('<h1>Here are the users:</h1>');
});

//Activity 4 – Route Parameters
// router.get('/:name', function (req, res) {
//     res.send(`Hi ${req.params.name}!`);
//     console.log(req.params);
// });

router.get('/:name', function (req, res) {
    res.render("../views/user.pug", { name: req.params.name });
});


module.exports = router;