"use strict";

module.exports = {
  client: "postgresql",
  connection: {
    database: "blurts",
  },
  pool: {
    min: 2,
    max: 10,
  },
};
