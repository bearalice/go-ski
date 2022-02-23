// import fs from 'fs';

const fs = require('fs');

// writeFile function with filename, content and callback function
// fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');

//     fs.readFile('newfile.txt', 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     });
// })

// const util = require('util')
// const writePromise = util.promisify(fs.writeFile);
// const readPromise = util.promisify(fs.readFile);

// writePromise("message.txt", "hello!")
//     .then(() => readPromise("message.txt", 'utf-8'))
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//Activity 2 - module.exports
// const logger = require('./logger.js');

// logger.log();

const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/user.js');

app.use(express.static("public")); ////Activity 5 - Express.static

app.use('/users', users); //this is a middleware  // Activity 6 - Using Router

app.get('/', function (req, res) {
    res.send('good morning!');
});

app.listen(port, function () {
    console.log(`app listening on ${port}`);
});

// //Activity 3-add more routes 
// app.get('/users', function (req, res) {
//     res.send('<h1>Here are the users:</h1>');
// });

// //Activity 4 – Route Parameters
// app.get('/users/:name', function (req, res) {
//     res.send(`Hi ${req.params.name}!`);
//     console.log(req.params);
// });
