"use strict";

const db = require("./db");

// Set of all registered emails.
// TODO: Implement a real persistent storage solution.
const Subscribers = {
  async addUser(aEmail) {
    if (await this.getUser(aEmail)) {
      console.log("already added");
      return;
    }

    await db.doQuery(
      `INSERT INTO users ( email ) VALUES ( '${aEmail}' );`);
    console.log("added!");
  },
  async deleteUser(aEmail) {
    let user =  await this.getUser(aEmail);
    if (!user) {
      console.log("user doesn't exist");
      return;
    }

     await db.doQuery(
      `DELETE FROM users WHERE id = '${user.id}';`);
     console.log("deleted!");
  },
  async getUser(aEmail) {
    let rows = await db.doQuery(
      `SELECT * FROM users WHERE email = '${aEmail}';`);
    return rows[0];
  },
  async clearAllUsers() {
    await db.doQuery("TRUNCATE users;");
  },
};

module.exports = Subscribers;
