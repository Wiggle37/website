const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

const client = new MongoClient("mongodb+srv://admin:Admin-Login@website.aqznm.mongodb.net/website?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let database;

async function connect() {
    client.connect();
    db = await client.db("website");
    database = await db.collection("accounts");
}

async function close() {
    client.close();
}

async function getDatabase() {
    return database;
}

module.exports = {
    connect: connect,
    close: close,
    getDatabase: getDatabase
}