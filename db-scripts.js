"use strict";

const pg = require("pg");

const AppConstants = require("./app-constants").init();
const db = require("./db");

async function setup() {
  const client = new pg.Client({
    database: AppConstants.DATABASE_NAME,
    host: AppConstants.DATABASE_HOST,
    port: AppConstants.DATABASE_PORT,
  });

  try {
    await client.connect();
    await client.query("DROP TABLE users;");
    await client.query("CREATE TABLE users ( id serial PRIMARY KEY, email varchar(320) );");
    await client.end();
  } catch (e) {
    console.log(e);
  }
}

async function smokeTest() {
  await setup();
  const email = "test@test.com";
  await db.addUser(email);
  await db.addUser(email);
  await db.deleteUser(email);
  await db.getUser(email);
}

smokeTest();
