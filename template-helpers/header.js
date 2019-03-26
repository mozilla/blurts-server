"use strict";

const { getStrings } = require("./hbs-helpers");

const navLinks = (args) => {
  const locales = args.data.root.req.supportedLocales;
  const links = [
    {
      title: "Home",
      stringId: "home",
      href: "/",
    },
    {
      title: "Breaches",
      stringId: "breaches",
      href: "/breaches",
    },
    {
      title: "Security Tips",
      stringId: "security-tips",
      href: "/security-tips",
    },
  ];

  return getStrings(links, locales);
};

const fxaMenuLinks = (args) => {
  const locales = args.data.root.req.supportedLocales;
  const fxaLinks = [
    {
      title: "Preferences",
      stringId: "preferences",
      href: "/user/preferences",
    },
    {
      title: "Firefox Account",
      stringId: "fxa-account",
      href: "/", //get app locals and just import the link from here.
    },
    {
      title: "Sign Out",
      stringId: "sign-out",
      href: "/user/logout",
    },
  ];

  return getStrings(fxaLinks, locales);
};

module.exports = {
  navLinks,
  fxaMenuLinks,
};
