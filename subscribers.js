"use strict";

const pg = require("pg");

const dbConfig = {
  max: 10,
};

const dbPool = new pg.Pool(dbConfig);

function dbq(aQuery) {
  return dbPool.query(aQuery);
}

function _ret(aSuccess, aError, aOther) {
  return Object.assign({
    success: aSuccess,
    error: aError || null,
  }, aOther);
}

const Subscribers = {
  async addUser(aEmail) {
    // Error code for attempting to add a duplicate entry on a UNIQUE key.
    const DUPLICATE_ERROR = 23505;
    try {
      await dbq({
        text: "INSERT INTO users ( email ) VALUES ( $1 );",
        values: [ aEmail ],
      });

      return _ret(true);
    } catch (e) {
      if (e.code == DUPLICATE_ERROR) {
        // Duplicate entry, count it as success.
        return _ret(true, null, { duplicate: true });
      }

      return _ret(false, e);
    }
  },

  async deleteUser(aEmail) {
    try {
      await dbq({
        text: "DELETE FROM users WHERE email = $1;",
        values: [ aEmail ],
      });
      return _ret(true);
    } catch(e) {
      return _ret(false, e);
    }
  },

  async getUser(aEmail) {
    try {
      const rows = (await dbq({
        text: "SELECT * FROM users WHERE email = $1;",
        values: [ aEmail ],
      })).rows;

      if (!rows.length) {
        return _ret(false);
      }

      const { email } = rows[0];
      if (!email) {
        // This shouldn't happen, but... better safe than sorry.
        return _ret(false, "Entry was found but with no value");
      }

      return _ret(true, null, { email });
    } catch(e) {
      return _ret(false, e);
    }
  },

  async clearAllUsers() {
    try {
      await dbq({
        text: "TRUNCATE users;",
      });
      return _ret(true);
    } catch (e) {
      return _ret(false, e);
    }
  },
};

module.exports = Subscribers;
