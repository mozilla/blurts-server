"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { getStrings } = require("./hbs-helpers");


const monitorFeatures = [
  {
    "title": "Full reports of past breaches",
    "stringId": "feat-full-report",
  },
  {
    "title": "Security tips to protect your accounts",
    "stringId": "feat-security-tips",
  },
  {
    "string": "Email alerts for new breaches",
    "stringId": "feat-email-alerts",
  },
  {
    "string": "Info about other {-brand-Mozilla} services",
    "stringId": "feat-info-about",
  },
];

const bulletedList = (list, args) => {
  const locales = args.data.root.req.supportedLocales;

  let ret= "";
  list = monitorFeatures;
  list = getStrings(list, locales);

  for(let i=0, j=list.length; i<j; i++) {
    ret = ret + args.fn(list[i]);
  }
  return ret;
};

const monitorFeaturesList = (args) => {
  const locales = args.data.root.req.supportedLocales;
  const features = [
    {
      title: "Stay alert to new breaches",
      titleId: "stay-alert",
      subtitle: "If your information surfaces in a  new data breach, we'll send you an alert.",
      subtitleId: "if-your-info",
    },
    {
      title: "Monitor several emails",
      titleId: "monitor-several-emails",
      subtitle: "Search all your email addresses for breaches and get alerts about new threats.",
      subtitleId: "search-all-emails",
    },
    {
      title: "Get ongoing expert advice",
      titleId: "get-expert-advice",
      subtitle: "Find out what you need to do to keep your data safe from cyber criminals.",
      subtitleId: "keep-your-data-safe",
    },
  ];

  features.forEach(feature => {
    feature.title = LocaleUtils.fluentFormat(locales, feature.titleId);
    feature.subtitle = LocaleUtils.fluentFormat(locales, feature.subtitleId);
  });
  return features;
};

module.exports = {
  monitorFeaturesList,
  bulletedList,
};
