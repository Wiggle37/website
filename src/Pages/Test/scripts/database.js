import { MongoClient } from "mongodb";

const Client = new MongoClient("no uri for u");
let database;

async function connect(mongoClient) {
    await mongoClient.connect();
    db = mongoClient.db("website");
    database = db.collection("account");

}

async function close(mongoClient) {
    await mongoClient.close();
}

export async function checkForUser(email) {
    await connect(Client);
    result = await database.findOne({
        email: email
    });

    await close(Client);
    return result !== null;

}

export async function getUserData(email) {
    if (!await checkForUser(email)) return "User not found";
    await connect(Client);

    result = await database.findOne({
        email: email
    });
    await close(Client);

}

export async function initUser(data) {
    if (await checkForUser(data.email)) return "User already exists";
    await connect(Client);

    await database.insertOne(data);
    await close(Client);

}

export async function updateUser(data) {
    if (!await checkForUser(data.email)) return "User not found";
    await connect(Client);

    await database.updateOne(data);
    await close(Client);

}

export async function deleteUser(data) {
    if (!await checkForUser(data.email)) return "User not found";
    await connect(Client);

    await database.deleteOne({
        email: data.email
    });
    await close(Client);

}