"use strict";

const DB = require("../db/DB");


async function deleteUnverifiedSubscribers() {
  await DB.deleteUnverifiedSubscribers();
}


(async () => {
  await deleteUnverifiedSubscribers();
  process.exit();
})();
