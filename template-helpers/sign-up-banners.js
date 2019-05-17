"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { getStrings } = require("./hbs-helpers");


const monitorFeatures = [
  {
    "title": "Enroll multiple emails in breach monitoring",
    "stringId": "feat-enroll-multiple",
  },
  {
    "title": "Advanced search in sensitive breaches",
    "stringId": "feat-sensitive",
  },
  {
    "string": "Security tips to protect your accounts",
    "stringId": "feat-security-tips",
  },
];

function bulletedList(list, args) {
  const locales = args.data.root.req.supportedLocales;

  let ret= "";
  list = monitorFeatures;
  list = getStrings(list, locales);

  for(let i=0, j=list.length; i<j; i++) {
    ret = ret + args.fn(list[i]);
  }
  return ret;
}

function monitorFeaturesList(args) {
  const locales = args.data.root.req.supportedLocales;
  const features = [
    {
      title: "Stay alert to new breaches",
      titleId: "stay-alert",
      subtitle: "If your information surfaces in a  new data breach, we'll send you an alert.",
      subtitleId: "if-your-info",
      pictogramPath: "alert",
    },
    {
      title: "Monitor several emails",
      titleId: "monitor-several-emails",
      subtitle: "Search all your email addresses for breaches and get alerts about new threats.",
      subtitleId: "search-all-emails",
      pictogramPath: "email",
    },
    {
      title: "Protect your privacy",
      titleId: "protect-your-privacy",
      subtitle: "Find out what you need to do to keep your data safe from cyber criminals.",
      subtitleId: "keep-your-data-safe",
      pictogramPath: "advice",
    },
  ];

  features.forEach(feature => {
    feature.title = LocaleUtils.fluentFormat(locales, feature.titleId);
    feature.subtitle = LocaleUtils.fluentFormat(locales, feature.subtitleId);
  });
  return features;
}

module.exports = {
  monitorFeaturesList,
  bulletedList,
};
