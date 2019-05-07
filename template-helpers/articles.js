"use strict";

const { getStrings } = require("./hbs-helpers");

function articleLinks(args) {
  const locales = args.data.root.req.supportedLocales;
  const articleLinks = [
    {
      title: "Understand how hackers work",
      stringId: "how-hackers-work",
      pathToPartial: "svg/icon-trackers",
      articleID: "",
    },
    {
      title: "What to do after a data breach",
      stringId: "what-to-do-after-breach",
      pathToPartial: "svg/icon-at",
      articleID: "",
    },
    {
      title: "How to create strong passwords",
      stringId: "create-strong-passwords",
      pathToPartial: "svg/icon-password",
      articleID: "",
    },
  ];

  return getStrings(articleLinks, locales);
}

module.exports = {
  articleLinks,
};
