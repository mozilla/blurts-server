"use strict";

const { getStrings, getFxaUrl } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");
const { JS_CONSTANTS } = require("./../js-constants"); //DATA REMOVAL SPECIFIC

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
  const session = args.data.root.req.session;
  const user = session.user;
  const isLoggedIn = session && user;

  let links = [];
  //DATA REMOVAL SPECIFIC

  const onRemovalPilotList =
    isLoggedIn && session.kanary.onRemovalPilotList ? true : false;

  const linkHome = {
    title: "Home",
    stringId: "home",
    href: `${serverUrl}/`,
    activeLink: hostUrl === "/",
  };

  const linkBreaches = {
    title: "Breaches",
    stringId: "breaches",
    href: `${serverUrl}/user/dashboard`,
    activeLink: hostUrl === "/dashboard",
  };

  const linkSecurityTips = {
    title: "Security Tips",
    stringId: "security-tips",
    href: `${serverUrl}/security-tips`,
    activeLink: hostUrl === "/security-tips",
  };

  if (onRemovalPilotList) {
    let isActiveLink = false;

    JS_CONSTANTS.REMOVE_ACTIVE_LINKS.forEach((link) => {
      console.log(link, hostUrl);
      if (hostUrl === link) {
        isActiveLink = true;
      }
    });

    const linkExposures = {
      title: "Exposures",
      stringId: "remove-header-exposures",
      href: `${serverUrl}/user/remove-data`,
      activeLink: isActiveLink,
    };

    links = [linkBreaches, linkExposures, linkSecurityTips];
  } else {
    links = [linkHome, linkBreaches, linkSecurityTips];
  }
  //END DATA REMOVAL SPECIFIC

  const headerLinks = getStrings(links, locales);
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
