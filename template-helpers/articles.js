"use strict";

const { getStrings } = require("./hbs-helpers");

const articleLinks = (args) => {
  const locales = args.data.root.req.supportedLocales;
  const articleLinks = [
    {
      title: "Understand How Hackers Work",
      stringId: "how-hackers-work",
      articleID: "",
    },
    {
      title: "What to Do After a Data Breach",
      stringId: "after-data-breach",
      articleID: "",
    },
    {
      title: "How to Create Strong Passwords",
      stringId: "create-strong-passwords",
      articleID: "",
    },
  ];

  return getStrings(articleLinks, locales);
};

module.exports = {
  articleLinks,
};
