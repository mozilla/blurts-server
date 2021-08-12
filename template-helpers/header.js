"use strict";

const { getStrings, getFxaUrl } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");
const fs = require('fs');
const Reader = require('@maxmind/geoip2-node').Reader

function getSignedInAs(args) {
  const locales = args.data.root.req.supportedLocales;
  const userEmail = args.data.root.req.session.user.primary_email;
  const signedInAs = LocaleUtils.fluentFormat(locales, "signed-in-as", {
    userEmail: `<span class="nav-user-email">${userEmail}</span>`});
  return signedInAs;
}

function navLinks(args) {
  const hostUrl = args.data.root.req.url;
  const serverUrl = args.data.root.constants.SERVER_URL;
  const locales = args.data.root.req.supportedLocales;
  const links = [
    {
      title: "Home",
      stringId: "home",
      href: `${serverUrl}/`,
      activeLink: (hostUrl === "/" || hostUrl === "/dashboard"),
    },
    {
      title: "Breaches",
      stringId: "breaches",
      href: `${serverUrl}/breaches`,
      activeLink: (hostUrl === "/breaches"),
    },
    {
      title: "Security Tips",
      stringId: "security-tips",
      href: `${serverUrl}/security-tips`,
      activeLink: (hostUrl === "/security-tips"),
    },
  ];
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

function getIpInfo(args) {
  const dbBuffer = fs.readFileSync('./tests/mmdb/GeoLite2-City-Test.mmdb');
  const reader = Reader.openBuffer(dbBuffer);
  const clientIp = args.data.root.constants.NODE_ENV === 'dev' ? '2.125.160.216' : args.data.root.req.ip; // TODO: normalize IP for different ip4/ip6 formats
  const info = {ip: clientIp}
  let geoData, city, stateOrCountry

  try{
    geoData = reader.city(clientIp);
    city = geoData.city.names.en || ''; // TODO: add optional chaining after Node version upgrade
    stateOrCountry = geoData.subdivisions[0].isoCode || geoData.country.isoCode || ''; // TODO: add optional chaining after Node version upgrade
  }catch(e){
    console.warn(e)
  }

  info.location = `${city}${stateOrCountry ? `, ${stateOrCountry}` : ''}`

  return info
}

module.exports = {
  navLinks,
  fxaMenuLinks,
  getSignedInAs,
  getIpInfo,
};
