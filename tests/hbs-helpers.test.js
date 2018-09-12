"use strict";

const HBSHelpers = require("../hbs-helpers");


test("breachDataClasses joins array by , or returns input", () => {
  const display = HBSHelpers.breachDataClasses(["user", "pw"]);
  expect(display).toEqual("user, pw");
  expect(HBSHelpers.breachDataClasses("string, string")).toBe("string, string");
});


test("localeString adds commas to numbers", () => {
  const display = HBSHelpers.localeString(1000000);
  expect(display).toEqual("1,000,000");
});


test("breachMath shows text up to nine", () => {
  for (let i = 0; i++; i <= 9) {
    expect(typeof(HBSHelpers.breachMath(i))).toBe("string");
  }
  expect(typeof(HBSHelpers.breachMath(10))).toBe("number");
});


test("breachMath accepts operators", () => {
  expect(HBSHelpers.breachMath(1, "+", 2)).toBe("three");
});
