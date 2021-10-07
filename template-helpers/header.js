"use strict";

const { getStrings, getFxaUrl } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");

function getSignedInAs(args) {
  const locales = args.data.root.req.supportedLocales;
  const userEmail = args.data.root.req.session.user.primary_email;
  const signedInAs = LocaleUtils.fluentFormat(locales, "signed-in-as", {
    userEmail: `<span class="nav-user-email">${userEmail}</span>`,
  });
  return signedInAs;
}

function navLinks(args) {
  const hostUrl = args.data.root.req.url;
  const serverUrl = args.data.root.constants.SERVER_URL;
  const locales = args.data.root.req.supportedLocales;

  const isLoggedIn =
    args.data.root.req.session && args.data.root.req.session.user;

  let links = [];

  const linkSecurityTips = {
    title: "Security Tips",
    stringId: "security-tips",
    href: `${serverUrl}/security-tips`,
    activeLink: hostUrl === "/security-tips",
  };

  if (!isLoggedIn) {
    links = [
      {
        title: "Home",
        stringId: "home",
        href: `${serverUrl}/`,
        activeLink: hostUrl === "/",
      },
      linkSecurityTips,
    ];
  } else {
    links = [
      {
        title: "Breaches",
        stringId: "remove-header-breaches",
        href: `${serverUrl}/user/dashboard`,
        activeLink: hostUrl === "/dashboard",
      },
      {
        title: "Exposures",
        stringId: "remove-header-exposures",
        href: `${serverUrl}/user/remove-data`,
        activeLink: hostUrl === "/remove-data",
      },
      linkSecurityTips,
    ];
  }

  const headerLinks = getStrings(links, locales);
  console.log(headerLinks);
  return headerLinks;
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
  getSignedInAs,
};
