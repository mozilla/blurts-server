"use strict";

const HBSHelpers = require("../hbs-helpers");
const { LocaleUtils } = require("../locale-utils");


test("breachDataClasses joins array by ',' and renders fluent translation or fluent ID", () => {
  LocaleUtils.init();
  LocaleUtils.loadLanguagesIntoApp({locals: {}});
  const supportedLocales = ["en"];

  const singleDataClassArray = new Array();
  singleDataClassArray.push("usernames");
  const singleDisplay = HBSHelpers.breachDataClasses({supportedLocales}, singleDataClassArray);
  expect(singleDisplay).toEqual("Usernames");

  const realDataClassesArray = new Array();
  realDataClassesArray.push("usernames");
  realDataClassesArray.push("passwords");
  const realDisplay = HBSHelpers.breachDataClasses({supportedLocales}, realDataClassesArray);
  expect(realDisplay).toEqual("Usernames, Passwords");

  const notFoundDataClassesArray = new Array();
  notFoundDataClassesArray.push("fdhsaigp12");
  notFoundDataClassesArray.push("jfdiosapgys8");
  const notFoundDisplay = HBSHelpers.breachDataClasses({supportedLocales}, notFoundDataClassesArray);
  expect(notFoundDisplay).toEqual("fdhsaigp12, jfdiosapgys8");
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
