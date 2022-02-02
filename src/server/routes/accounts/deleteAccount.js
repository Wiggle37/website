const express = require("express");
const router = express.Router();

router.delete("/", (req, res) => {
    res.send("es")
});

module.exports = {
    name: "deleteAccount",
    router: router
}