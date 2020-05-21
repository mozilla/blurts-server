"use strict";

const { LocaleUtils } = require("./../locale-utils");

function makeLanding(args) {
  const locales = args.data.root.req.supportedLocales;
  const featuredBreach = args.data.root.featuredBreach;
  const experimentBranchB = args.data.root.experimentFlags.experimentBranchB;

  const landingCopy = {};

  if (featuredBreach) {
    landingCopy.headline = LocaleUtils.fluentFormat(locales, "was-your-info-exposed", { breachName : `<span class="bold">${featuredBreach.Title}</span>` });
    landingCopy.info = [
      {
        subhead: LocaleUtils.fluentFormat(locales, "about-fxm-headline"),
        body: LocaleUtils.fluentFormat(locales, "about-fxm-blurb"),
      },
    ];
  } else if (experimentBranchB) {
    landingCopy.headline = LocaleUtils.fluentFormat(locales, "see-if-youve-been-part");
    landingCopy.subhead = "Your free Firefox account alerts you if you’ve been involved in a known data breach.";
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

  // Growth Experiment
  if (featuredBreach && experimentBranchB) {
    landingCopy.subhead = "Your free Firefox account alerts you if you’ve been involved in a known data breach.";
  }

  return args.fn(landingCopy);

}
module.exports = {
  makeLanding,
};
