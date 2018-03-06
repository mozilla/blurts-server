"use strict";

const pg = require("pg");
const crypto = require("crypto");

const dbConfig = {
  max: 10,
};

const dbPool = new pg.Pool(dbConfig);

function dbq(aQuery) {
  return dbPool.query(aQuery);
}

function _ret(aError=null, aOther={}) {
  return Object.assign({
    error: aError,
  }, aOther);
}

const Subscribers = {
  async addUser(aEmail) {
    // Error code for attempting to add a duplicate entry on a UNIQUE key.
    const DUPLICATE_ERROR = "23505";
    try {
      await dbq({
        text: "INSERT INTO users ( email ) VALUES ( $1 );",
        values: [ aEmail ],
      });

      return _ret();
    } catch (e) {
      if (e.code === DUPLICATE_ERROR) {
        // Duplicate entry, count it as success.
        return _ret(null, { duplicate: true });
      }

      return _ret(e);
    }
  },

  async deleteUser(aEmail) {
    try {
      await dbq({
        text: "DELETE FROM users WHERE email = $1;",
        values: [ aEmail ],
      });
      return _ret();
    } catch(e) {
      return _ret(e);
    }
  },

  async getUser(aEmail) {
    try {
      const rows = (await dbq({
        text: "SELECT * FROM users WHERE email = $1;",
        values: [ aEmail ],
      })).rows;

      if (!rows.length) {
        return _ret(new Error("Email not found"));
      }

      const { email } = rows[0];
      if (!email) {
        // This shouldn't happen, but... better safe than sorry.
        return _ret(new Error("Entry was found but with no email value"));
      }

      return _ret(null, { email });
    } catch(e) {
      return _ret(e);
    }
  },

  async addTempUser(aEmail, aToken) {
    if (!this.validateToken(aToken)) {
      throw new Error("Invalid token, are you using Subscribers.generateToken?");
    }

    // Error code for attempting to add a duplicate entry on a UNIQUE key.
    const DUPLICATE_ERROR = "23505";
    try {
      await dbq({
        text: "INSERT INTO users_temp ( email, token ) VALUES ( $1, $2 );",
        values: [ aEmail, aToken ],
      });

      return _ret();
    } catch (e) {
      if (e.code === DUPLICATE_ERROR) {
        // Duplicate entry, count it as success.
        return _ret(null, { duplicate: true });
      }

      return _ret(e);
    }
  },

  async deleteTempUser(aEmail) {
    try {
      await dbq({
        text: "DELETE FROM users_temp WHERE email = $1;",
        values: [ aEmail ],
      });
      return _ret();
    } catch(e) {
      return _ret(e);
    }
  },

  async getTempUser(aEmail) {
    try {
      const rows = (await dbq({
        text: "SELECT * FROM users_temp WHERE email = $1;",
        values: [ aEmail ],
      })).rows;

      if (!rows.length) {
        return _ret(new Error("Email not found."));
      }

      const { email, token } = rows[0];
      if (!email || !token) {
        // This shouldn't happen, but... better safe than sorry.
        return _ret(new Error(`Entry was found but with values missing. \
                              { email: ${email}, token: ${token} }`));
      }

      return _ret(null, { email, token });
    } catch(e) {
      return _ret(e);
    }
  },

  generateToken() {
    return crypto.randomBytes(40).toString("hex");
  },

  validateToken(aToken) {
    return (typeof aToken === "string" && aToken.length === 80);
  },
};

module.exports = Subscribers;
