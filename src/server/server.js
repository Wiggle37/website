const fs = require("fs");
const express = require("express");
const cors = require("cors");
const { connect, close } = require("./database/connection");
require("dotenv").config({ path: "./.env" });

const Logger = require("./lib/Logger.js");
const logger = new Logger("server")

const app = express();
app.use(cors());
app.use(express.json());

for (const file of fs.readdirSync("./routes")) {
    for (const endpoint of fs.readdirSync(`./routes/${file}`)) {
        if (!endpoint.endsWith(".js")) continue;
        const _endpoint = require(`./routes/${file}/${endpoint}`);
        if (_endpoint.name == undefined || _endpoint.router == undefined) {
            logger.warn(`Route file "${endpoint}" skipped loading due to a missing name/router export`);
            continue;
        }

        app.use(`/${file}/${_endpoint.name}/`, _endpoint.router);
        logger.debug(`Loaded route "/${file}/${_endpoint.name}/"`)
    }
}

app.listen(8080, async () => {
    try {
        await connect();
        logger.debug("Mongo Server Running on http://127.0.0.1:8080");

    } catch (err) {
        logger.fatal(`There was an error while running the server:\n${err.stack}`)
        logger.debug("Closing Mongo Server...");
        await close();
        logger.debug("Mongo Server Closed.");
        process.exit(1);
    }
});