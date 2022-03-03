if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const uri = process.env.URI;
const { MongoClient } = require('mongodb');
//const uri = 'URI';
const client = new MongoClient(uri);

module.exports =
{
    dbConnect: async function dbConnect() {
        try {
            await client.connect();
            console.log("DB connected!");
        } catch (err) {
            console.log(err);
        }
    },
    saveUser: async function saveUser(user) {
        try {
            await client.db('cs5610').collection('users').insertOne(user);
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
    }
}
