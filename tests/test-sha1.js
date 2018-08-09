"use strict";

const test = require("tape-async");
const getSha1 = require("../sha1-utils");


function isHexString(hashDigest) {
  for (const character of hashDigest) {
    if (parseInt(character, 16).toString(16) !== character.toLowerCase()) {
      return false;
    }
  }
  return true;
}

test("getSha1 returns hex digest", t => {
  t.ok(isHexString(getSha1("test@test.com")));
  t.end();
});
