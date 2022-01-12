"use strict";

const { getStrings, getFxaUrl, getRemoveString } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");
const { REMOVAL_CONSTANTS } = require("./../removal-constants"); //DATA REMOVAL SPECIFIC

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
  //MH this changes the way that the links are constructed from prod. monitor, but only the data removal specific bits should be deleted
  const onRemovalPilotList =
    isLoggedIn && session.kanary && session.kanary.onRemovalPilotList
      ? true
      : false;

  const linkHome = {
    title: "Home",
    stringId: "home",
    href: `${serverUrl}/`,
    activeLink: onRemovalPilotList
      ? hostUrl === "/"
      : hostUrl === "/" || hostUrl === "/dashboard",
  };

  const linkBreaches = {
    title: "Breaches",
    stringId: "breaches",
    href: onRemovalPilotList
      ? `${serverUrl}/user/dashboard`
      : `${serverUrl}/breaches`,
    activeLink: onRemovalPilotList
      ? hostUrl === "/dashboard"
      : hostUrl === "/breaches",
  };

  const linkSecurityTips = {
    title: "Security Tips",
    stringId: "security-tips",
    href: `${serverUrl}/security-tips`,
    activeLink: hostUrl === "/security-tips",
  };

  let headerLinks;

  if (onRemovalPilotList) {
    let isActiveLink = false;

    REMOVAL_CONSTANTS.REMOVE_ACTIVE_LINKS.forEach((link) => {
      if (hostUrl === link) {
        isActiveLink = true;
      }
    });

    const linkExposures = {
      title: "Exposures",
      stringId: getRemoveString("remove-header-exposures"),
      href: `${serverUrl}/user/remove-data`,
      activeLink: isActiveLink,
    };

    links = [linkBreaches, linkSecurityTips];
    headerLinks = getStrings(links, locales);
    headerLinks.splice(1, 0, linkExposures);
  } else {
    links = [linkHome, linkBreaches, linkSecurityTips];
    headerLinks = getStrings(links, locales);
  }
  //END DATA REMOVAL SPECIFIC
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
