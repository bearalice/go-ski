const express = require('express');
const router = express.Router();
const path = require('path');
const catchAsync = require('../utilities/catchAsync');

const resorts = require('../controllers/resorts');
const Resort = require('../models/resort');


router.get('/', resorts.index);

router.get('/new', resorts.renderNewForm); //from http requests, goes to controller✅



// router.get('/:name', async function (req, res) {
//     const user = await db.findUser(req.params);
//     res.json(user);
//     //res.render("../views/user.pug", { name: req.params.name });
// });

//router.post('/', resorts.createResort);

// router.post('/', async function (req, res) {
//     try {
//         const data = req.body;
//         console.log(req.body);
//         await
//             res.send("Resort data saved");
//     } catch (err) {
//         console.log(err);
//     }
// })

router.route('/')
    .get(resorts.index)
    .post(resorts.createResort)

router.get('/:id/edit', catchAsync(resorts.renderEditForm))



router.route('/:id')
    .get(catchAsync(resorts.showResort))
    .put(catchAsync(resorts.updateResort))
    .delete(catchAsync(resorts.deleteResort));



module.exports = router;