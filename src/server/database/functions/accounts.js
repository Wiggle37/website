const { getDatabase } = require("../connection");

async function checkForUser(email) {
    const database = await getDatabase();

    return await database.findOne({ email: email });
}

async function initUser(data) {
    const database = await getDatabase();

    return await database.insertOne(data)
}

async function getUserData(email) {
    const database = await getDatabase();

    return await database.findOne({ email: email })
}

async function dropUser(email) {

}

module.exports = {
    checkForUser,
    initUser,
    getUserData,
    dropUser
}