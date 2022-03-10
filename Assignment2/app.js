const express = require('express');
const users = require('./routes/user.js');
const resorts = require('./routes/skiResorts.js');
const reviews = require('./routes/reviews.js');
const db = require('./db.js');
const bodyParser = require('body-parser');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
const port = 3000;

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use('/users', users); //this is a middleware 
app.use('/skiresorts', resorts);
app.use('/reviews', reviews);


app.get('/', function (req, res) {
    res.render('home');
    //res.send('SNOWY good morning!');
});

app.get('/addresort', function (req, res) {
    res.render('resorts/new');
    //res.send('SNOWY good morning!');
});

app.listen(port, () => {
    console.log("SNOWY running on 8000");
    db.dbConnect();
});

//app.delete()
