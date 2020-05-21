"use strict";

const HBSHelpers = require("../template-helpers/hbs-helpers");
const { LocaleUtils } = require("../locale-utils");


test("localizedBreachDataClasses joins array by ',' and renders fluent translation or fluent ID", () => {
    LocaleUtils.init();
    LocaleUtils.loadLanguagesIntoApp({locals: {}});
    const supportedLocales = ["en"];

    const singleDataClassArray = new Array();
    singleDataClassArray.push("usernames");
    const singleDisplay = HBSHelpers.localizedBreachDataClasses(singleDataClassArray, supportedLocales);
    expect(singleDisplay).toEqual("Usernames");

    const realDataClassesArray = new Array();
    realDataClassesArray.push("usernames");
    realDataClassesArray.push("passwords");
    const realDisplay = HBSHelpers.localizedBreachDataClasses(realDataClassesArray, supportedLocales);
    expect(realDisplay).toEqual("Usernames, Passwords");

    const notFoundDataClassesArray = new Array();
    notFoundDataClassesArray.push("fdhsaigp12");
    notFoundDataClassesArray.push("jfdiosapgys8");
    const notFoundDisplay = HBSHelpers.localizedBreachDataClasses(notFoundDataClassesArray, supportedLocales);
    expect(notFoundDisplay).toEqual("fdhsaigp12, jfdiosapgys8");
});


test("localeString adds commas to numbers", () => {
    const supportedLocales = ["en"];
    const display = HBSHelpers.localeString(1000000, supportedLocales);
    expect(display).toEqual("1,000,000");
});


test("breachMath accepts operators", () => {
    expect(HBSHelpers.breachMath(1, "+", 2)).toBe(3);
});
