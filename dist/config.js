"use strict";
require("dotenv/config");
const config = {
    port: process.env.PORT || 3000,
    db: {
        url: process.env.DATA_BASE || ""
    }
};
module.exports = config;
