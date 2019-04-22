"use strict";

const getSha1 = require("../../sha1-utils");


exports.TEST_DATA = {
  firefoxaccount: {
    primary_sha1: getSha1("firefoxaccount@test.com"),
    primary_email: "firefoxaccount@test.com",
    primary_verification_token: "0e2cb147-2041-4e5b-8ca9-494e773b2cf1",
    primary_verified: true,
    fxa_refresh_token: "4a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
  },
  unprimary_verifiedprimary_email: {
    primary_sha1: getSha1("unprimary_verifiedprimary_email@test.com"),
    primary_email: "unprimary_verifiedprimary_email@test.com",
    primary_verification_token: "0e2cb147-2041-4e5b-8ca9-494e773b2cf0",
    primary_verified: false,
  },
  primary_verifiedprimary_email: {
    primary_sha1: getSha1("primary_verifiedprimary_email@test.com"),
    primary_email: "primary_verifiedprimary_email@test.com",
    primary_verification_token: "54010800-6c3c-4186-971a-76dc92874941",
    primary_verified: true,
    signup_language: "en-US;q=0.7,en;q=0.3",
  },
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("subscribers").del()
    .then(async function () {
      // Inserts seed entries
      return await knex("subscribers").insert(Object.values(exports.TEST_DATA));
    });
};
