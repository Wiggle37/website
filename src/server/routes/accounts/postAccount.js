const express = require("express");
const router = express.Router();

const { initAccount } = require("../../database/functions/accounts")

router.post("/", async (req, res) => {
    res.send(await initAccount())
});

module.exports = router;