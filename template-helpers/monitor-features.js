"use strict";

const { LocaleUtils } = require("./../locale-utils");

const monitorFeaturesList = (args) => {
  const locales = args.data.root.req.supportedLocales;
  const features = [
    {
      title: "Stay alert to new breaches",
      titleId: "stay-alert",
      subhead: "If your information surfaces in a  new data breach, we'll send you an alert.",
      subheadId: "if-your-info",
    },
    {
      title: "Monitor several emails",
      titleId: "monitor-several-emails",
      subhead: "Search all your email addresses for breaches and get alerts about new threats.",
      subheadId: "search-all-emails",
    },
    {
      title: "Get ongoing expert advice",
      titleId: "get-expert-advice",
      subhead: "Find out what you need to do to keep your data safe from cyber criminals.",
      subheadId: "keep-your-data-safe",
    },
  ];

  features.forEach(feature => {
    feature.titleId = LocaleUtils.fluentFormat(locales, feature.titleId);
    feature.subheadId = LocaleUtils.fluentFormat(locales, feature.subheadId);
  });
  return features;
};

module.exports = {
  monitorFeaturesList,
};
