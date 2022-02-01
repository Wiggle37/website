const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

const client = new MongoClient("no uri", {
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