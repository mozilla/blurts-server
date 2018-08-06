"use strict";

const test = require("tape");
const getSha1 = require("../sha1-utils");


function isHexString(hashDigest) {
  for (const character of hashDigest) {
    if (parseInt(character, 16).toString(16) != character.toLowerCase()) {
      return false;
    }
  }
  return true;
}

test("getSha1 returns hex digest", function (t) {
  t.plan(1);
  t.ok(isHexString(getSha1("test@test.com")));
});
