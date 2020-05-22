"use strict";

const DB = require("../db/DB");

(async () => {
    await DB.deleteUnverifiedSubscribers();
    process.exit();
})();
