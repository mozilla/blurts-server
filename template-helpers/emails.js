"use strict";

const { URL } = require("url");

const { LocaleUtils } = require("./../locale-utils");

const { makeBreachCards } = require("./breaches");
const { prettyDate } = require("./hbs-helpers");



const modifiedStrings = {
  "pwt-summary-2" : "fxa-pwt-summary-2",
  "pwt-summary-4" : "fxa-pwt-summary-4",
  "pwt-summary-6" : "fxa-pwt-summary-6",
  "what-to-do-subhead-2" : "fxa-what-to-do-subhead-2",
  "what-to-do-subhead-4" : "fxa-what-to-do-subhead-4",
  "what-to-do-blurb-1" : "fxa-what-to-do-blurb-1",
  "what-to-do-blurb-2" : "fxa-wtd-blurb-2",
  "what-to-do-blurb-3" : "fxa-what-to-do-blurb-3",
  "what-to-do-blurb-4" : "fxa-what-to-do-blurb-4",
};


function getUnsafeBreachesForEmailReport(args) {
  const locales = args.data.root.supportedLocales;
  const foundBreaches = args.data.root.unsafeBreachesForEmail;
  return makeBreachCards(foundBreaches, locales);
}


function makeFaqLink(target, campaign) {
  const url = new URL(`https://support.mozilla.org/kb/firefox-monitor-faq${target}`);
  const utmParameters = {
    utm_source: "fx-monitor-email",
    utm_medium: "email",
    utm_campaign: campaign,
  };

  for (const param in utmParameters) {
    url.searchParams.append(param, utmParameters[param]);
  }
  return url;
}


function getBreachAlertFaqs(args) {
  const supportedLocales = args.data.root.supportedLocales;
  const faqs = [
    {
      "linkTitle" : LocaleUtils.fluentFormat(supportedLocales, "faq1", args),
      "stringDescription": "I don't recognize this website. Why am I in this breach?",
      "href": makeFaqLink("#w_i-donaot-recognize-this-company-or-website-why-am-i-receiving-notifications-about-this-breach", "faq1"),
    },
    {
      "linkTitle" : LocaleUtils.fluentFormat(supportedLocales, "faq2", args),
      "stringDescription": "Why did it take so long to notify me of this breach?",
      "href": makeFaqLink("#w_why-did-it-take-so-long-to-notify-me-of-this-breach", "faq2"),
    },
    {
      "linkTitle" : LocaleUtils.fluentFormat(supportedLocales, "faq3", args),
      "stringDescription": "How do I know this is a legitimate email from Firefox Monitor?",
      "href": makeFaqLink("#w_how-do-i-know-these-emails-are-really-from-firefox-and-not-from-a-hacker", "faq3"),
    },
  ];

  const functionedFaqs = faqs.map(faq => args.fn(faq));
  return "".concat(...functionedFaqs);
}

function getReportHeader(args) {
  const locales = args.data.root.supportedLocales;
  const reportHeader = {
    date: prettyDate(new Date(), locales),
    strings: {
      "email": "email-address",
      "reportDate": "report-date",
      "fxmReport" : "firefox-monitor-report",
    },
  };
  for (const stringId in reportHeader.strings) {
    const newString = LocaleUtils.fluentFormat(locales, reportHeader.strings[stringId]);
    reportHeader.strings[stringId] = newString;
  }
  return args.fn(reportHeader);
}


function getWhatToDos(args) {
  const locales = args.data.root.supportedLocales;

  let headlineId = "what-to-do-next";
  let subheadId = "what-to-do-subhead";
  let blurbId = "what-to-do-blurb";
  let numTips = 4;

  // grab different strings for breach alert emails
  if (args.data.root.breachAlert) {
    headlineId = "what-to-do-after";
    subheadId = "ba-next-step";
    blurbId = "ba-next-step-blurb";
    numTips = 3;
  }

  const whatToDoNext = {
    headline: LocaleUtils.fluentFormat(locales, headlineId),
    steps: createTips(numTips, subheadId, blurbId, locales),
  };
  return args.fn(whatToDoNext);
}


function getPasswordTips(args) {
  const locales = args.data.root.supportedLocales;
  const passwordTips = createTips(4, "report-pwt-headline", "report-pwt-summary", locales);
  return passwordTips;
}


function checkForNewStringId(locales, stringId) {
  if (modifiedStrings[stringId]) {
    stringId = modifiedStrings[stringId];
  }
 return LocaleUtils.fluentFormat(locales, stringId);
}


function createTips(numTips, subheadIdPrefix, blurbIdPrefix, locales) {
  const tips = [];
  let x = 0;
  while (x < numTips) {
    tips.push({
      idx: x + 1,
      subhead: checkForNewStringId(locales, `${subheadIdPrefix}-${x+1}`),
      blurb: checkForNewStringId(locales, `${blurbIdPrefix}-${x+1}`),
    });
    x++;
  }
  return tips;
}

function getBreachAlert(args) {
  const locales = args.data.root.supportedLocales;
  const breachAlert = [args.data.root.breachAlert];
  const breachAlertCard = makeBreachCards(breachAlert, locales);
  return args.fn(breachAlertCard[0]);
}


module.exports = {
  getBreachAlert,
  getBreachAlertFaqs,
  getPasswordTips,
  getReportHeader,
  getUnsafeBreachesForEmailReport,
  getWhatToDos,
};
