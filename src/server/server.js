const express = require("express");
const cors = require("cors");
const { connect, close, getDatabase } = require("./database/connection");
const dotenv = require("dotenv").config({ path: "./.env" });

// Account Imports
const getAccount = require("./routes/accounts/getAccount");
const postAccount = require("./routes/accounts/postAccount");
const deleteAccount = require("./routes/accounts/deleteAccount");

const app = express();
app.use(cors());
app.use(express.json());

// Accounts
app.use("/accounts/getAccount/", getAccount);
//app.use("/postAccount/", postAccount);
//app.use("/deleteAccount/", deleteAccount);

app.get('/', (req, res) => {
    res.send({
        response: "Please provide a valid endpoint"
    })
});

app.listen(8080, async () => {
    await connect();

    console.log("Mongo server running on http://localhost:8080/");
});