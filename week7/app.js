const express = require('express');
const users = require('./routes/user.js');
const db = require('./db.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use('/users', users); //this is a middleware  


app.get('/', function (req, res) {
    res.send('good morning!');
});

app.listen(port, function () {
    console.log(`app listening on ${port}`);
});

app.listen(8000, () => {
    console.log("running on 8000");
    db.dbConnect();
});

