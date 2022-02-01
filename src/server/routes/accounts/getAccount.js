const express = require("express");
const router = express.Router();

const { getUserData } = require("../../database/functions/accounts");

router.get("/:email", async (req, res) => {
    const response = await getUserData(req.params.email)
    res.send(response)
});

module.exports = router;