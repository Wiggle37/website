const express = require("express");
const router = express.Router();

const { initUser } = require("../../database/functions/accounts")

router.post("/", async (req, res) => {
    await initUser(req.query);
    res.send({ response: req.query });
});

module.exports = {
    name: "createAccount",
    router: router
};