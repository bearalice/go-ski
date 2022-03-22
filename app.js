if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const ExpressError = require('./utilities/ExpressError');
const resorts = require('./routes/skiResorts.js');
const methodOverride = require('method-override');
//const db = require('./db.js');
const bodyParser = require('body-parser');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
const port = 3000;

const uri = process.env.URI;
const mongoose = require('mongoose');
//const MongoDBStore = require("connect-mongo")(session);

mongoose.connect(uri, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "SNOWY connection error:"));
db.once("open", () => {
    console.log("SNOWY Database connected");
});

//setting template engine 
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'));

app.use('/resorts', resorts);



app.get('/', function (req, res) {
    res.render('home');
    console.log("home success!");
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Sorry! Page Not Found', 404))
})

// app.use((err, req, res, next) => {
//     const { statusCode = 500 } = err;
//     if (!err.message) err.message = 'something is wrong here >_<'
//     res.status(statusCode).render('error', { err })
// })

app.listen(port, () => {
    console.log("SNOWY running on 8000");
});
