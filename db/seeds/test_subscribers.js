"use strict";

const getSha1 = require("../../sha1-utils");


exports.TEST_DATA = {
  firefoxaccount: {
    primary_sha1: getSha1("firefoxaccount@test.com"),
    primary_email: "firefoxaccount@test.com",
    primary_verification_token: "0e2cb147-2041-4e5b-8ca9-494e773b2cf1",
    primary_verified: true,
    fxa_refresh_token: "4a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
    breaches_last_shown: "2019-04-24 13:27:08.421-05",
  },
  unverified_email: {
    primary_sha1: getSha1("unverifiedemail@test.com"),
    primary_email: "unverifiedemail@test.com",
    primary_verification_token: "0e2cb147-2041-4e5b-8ca9-494e773b2cf0",
    primary_verified: false,
  },
  primary_verifiedemail: {
    primary_sha1: getSha1("verifiedemail@test.com"),
    primary_email: "verifiedemail@test.com",
    primary_verification_token: "54010800-6c3c-4186-971a-76dc92874941",
    primary_verified: true,
    signup_language: "en-US;q=0.7,en;q=0.3",
  },
};
