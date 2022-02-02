const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
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