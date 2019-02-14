"use strict";

const getSha1 = require("../../sha1-utils");


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("subscribers").del()
    .then(async function () {
      // Inserts seed entries
      return await knex("subscribers").insert([
        {
          sha1: getSha1("firefoxaccount@test.com"),
          email: "firefoxaccount@test.com",
          verification_token: "0e2cb147-2041-4e5b-8ca9-494e773b2cf1",
          verified: true,
          fxa_refresh_token: "4a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
        },
        {
          sha1: getSha1("unverifiedemail@test.com"),
          email: "unverifiedemail@test.com",
          verification_token: "0e2cb147-2041-4e5b-8ca9-494e773b2cf0",
          verified: false,
        },
        {
          sha1: getSha1("verifiedemail@test.com"),
          email: "verifiedemail@test.com",
          verification_token: "54010800-6c3c-4186-971a-76dc92874941",
          verified: true,
          signup_language: "en-US;q=0.7,en;q=0.3",
        },
      ]);
    });
};
