"use strict";

const { LocaleUtils } = require("./../locale-utils");

function makeLanding(args) {
  const locales = args.data.root.req.supportedLocales;
  const featuredBreach = args.data.root.featuredBreach;

  const landingCopy = {};

  if (featuredBreach) {
    landingCopy.headline = LocaleUtils.fluentFormat(locales, "was-your-info-exposed", { breachName : `<span class="bold">${featuredBreach.Title}</span>` });
    landingCopy.info = [
      {
        subhead: LocaleUtils.fluentFormat(locales, "about-fxm-headline"),
        body: LocaleUtils.fluentFormat(locales, "about-fxm-blurb"),
      },
    ];
  } else {
    landingCopy.headline = LocaleUtils.fluentFormat(locales, "see-if-youve-been-part");
    landingCopy.subhead = LocaleUtils.fluentFormat(locales, "find-out-what-hackers-know");
  }
  if (featuredBreach && featuredBreach.IsSensitive) {
    landingCopy.breachIsSensitive = true;
    landingCopy.info.unshift({
      subhead: LocaleUtils.fluentFormat(locales, "sensitive-sites"),
      body: LocaleUtils.fluentFormat(locales, "sensitive-sites-copy"),
    });
  }

  return args.fn(landingCopy);

}
module.exports = {
  makeLanding,
};
