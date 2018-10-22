"use strict";

const testBreaches = [
  {
    Title: "Test",
    Name: "Test",
    Domain: "test.com",
    BreachDate: "2012-12-21",
    AddedDate: "2013-01-01",
    DataClasses: [],
  },
  {
    Title: "Test2",
    Name: "Test2",
    Domain: "test2.com",
    BreachDate: "2016-11-08",
    AddedDate: "2017-01-01",
    DataClasses: [],
  },
  {
    Title: "Sensitive",
    Name: "Sensitive",
    Domain: "sensitive.com",
    BreachDate: "2017-11-08",
    AddedDate: "2018-11-08",
    IsSensitive: true,
    DataClasses: [],
  },
];

module.exports = {
  testBreaches,
};
