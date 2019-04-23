"use strict";

const { getStrings, getFxaUrl } = require("./hbs-helpers");


function navLinks(args) {
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
}

function fxaMenuLinks(args) {
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
      href: getFxaUrl(),
    },
    {
      title: "Sign Out",
      stringId: "sign-out",
      href: "/user/logout",
    },
  ];

  return getStrings(fxaLinks, locales);
}

module.exports = {
  navLinks,
  fxaMenuLinks,
};
