if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const uri = process.env.URI;
// const { MongoClient } = require('mongodb');
// const client = new MongoClient(uri);
const mongoose = require('mongoose');
//const MongoDBStore = require("connect-mongo")(session);

mongoose.connect(uri, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "SNOWY connection error:"));
db.once("open", () => {
    console.log("SNOWY Database connected");
});

module.exports =
{
    // dbConnect: async function dbConnect() {
    //     try {
    //         await client.connect();
    //         console.log("SKI REVIEW DB connected!");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
    //create
    saveUser: async function saveUser(user) {
        try {
            await client.db('cs5610').collection('snowy-users').insertOne(user);
        } catch (err) {
            console.log(err);
        }
    },
    findUser: async function findUser(user) {
        try {
            const data = await client.db('cs5610').collection;
        } catch (err) {
            console.log(err);
        }
    },

    deleteUser: async function deleteUser(user) {
        try {
            const data = await client.db('cs5610').collection('snowy-users').deleteOne({ name: user });
            console.log("to delete for snowy:");
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    },

    addResort: async function addResort() {
        const resort = new Resort(req.body.resort);
        // campground.geometry = geoData.body.features[0].geometry;
        // campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
        // campground.author = req.user._id;
        await resort.save();
        console.log(resort);
        req.flash('success', 'Successfully added a new campground!');
        res.redirect(`/resorts/${resort._id}`)
    }
}