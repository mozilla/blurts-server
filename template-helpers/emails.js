"use strict";

const { URL } = require("url");

const { LocaleUtils } = require("./../locale-utils");

const { makeBreachCards } = require("./breaches");
const { prettyDate } = require("./hbs-helpers");


function emailBreachStats(args) {
  const locales = args.data.root.supportedLocales;
  const userBreaches = args.data.root.unsafeBreachesForEmail;
  let numPasswordsExposed = 0;

  userBreaches.forEach(breach => {
    if (breach.DataClasses.includes("passwords")) {
      numPasswordsExposed ++;
    }
  });

  const emailBreachStats = {
    numBreaches: {
      statNumber: userBreaches.length,
      statTitle: LocaleUtils.fluentFormat(locales, "known-data-breaches-exposed", {breaches: userBreaches.length}),
    },
    numPasswords: {
      statNumber: numPasswordsExposed,
      statTitle: LocaleUtils.fluentFormat(locales, "passwords-exposed", {passwords: numPasswordsExposed}),
    },
  };
  return emailBreachStats;
}


function getUnsafeBreachesForEmailReport(args) {
  const locales = args.data.root.supportedLocales;
  const foundBreaches = JSON.parse(JSON.stringify(args.data.root.unsafeBreachesForEmail));

  if (foundBreaches.length > 4) {
    foundBreaches.length = 4;
  }
  return makeBreachCards(foundBreaches, locales);
}


function boldVioletText(recipientEmail, addBlockDisplayToEmail=false) {
  let optionalDisplayProperty = "";

  if (addBlockDisplayToEmail) {
    optionalDisplayProperty = "display: block;";
  }

  // garble email address so that email clients won't turn it into a link
  recipientEmail = recipientEmail.replace(/([@.:])/g, "<span>$1</span>");
  return `<span class="rec-email text-bold" style=" ${optionalDisplayProperty} font-weight: 700; color: #9059ff; font-family: sans-serif; text-decoration: none;"> ${recipientEmail}</span>`;
}


function getEmailHeader(args) {
  const locales = args.data.root.supportedLocales;
  const emailType = args.data.root.whichPartial;
  const recipientEmail = args.data.root.recipientEmail;

  if (emailType === "email_partials/email_verify") {
    return LocaleUtils.fluentFormat(locales, "email-link-expires");
  }

  if (args.data.root.breachAlert) {
    return LocaleUtils.fluentFormat(locales, "email-alert-hl", { userEmail: boldVioletText(recipientEmail, true) });
  }

  const userBreaches = args.data.root.unsafeBreachesForEmail;

  if (userBreaches.length === 0) {
    return LocaleUtils.fluentFormat(locales, "email-no-breaches-hl", { userEmail: boldVioletText(recipientEmail, true)});
  }

  return LocaleUtils.fluentFormat(locales, "email-found-breaches-hl");
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

function makePreFxaSubscriberMessage(args) {
  const locales = args.data.root.supportedLocales;
  const nestedLink = `<a class="pre-fxa-nested-link" href="https://accounts.firefox.com/?utm=whatshouldthisbe?" style="color: #0060df; font-family: sans-serif; font-weight: 400; font-size: 16px; text-decoration: none;">${LocaleUtils.fluentFormat(locales, "create-a-free-fxa")}</a>`;
  return LocaleUtils.fluentFormat(locales, "pre-fxa-message", {createFreeFxaLink: nestedLink});
}


function getBreachAlertFaqs(args) {
  const supportedLocales = args.data.root.supportedLocales;
  const faqs = [
    {
      "linkTitle" : LocaleUtils.fluentFormat(supportedLocales, "faq-v2-1", args),
      "stringDescription": "I don’t recognize one of these companies or websites. Why am I in this breach?",
      "href": makeFaqLink("#w_i-donaot-recognize-this-company-or-website-why-am-i-receiving-notifications-about-this-breach", "faq1"),
    },
    {
      "linkTitle" : LocaleUtils.fluentFormat(supportedLocales, "faq-v2-2", args),
      "stringDescription": "Do I need to do anything if a breach happened years ago or this is an old account?",
      "href": makeFaqLink("#w_do-i-need-to-do-anything-if-a-breach-happened-years-ago-or-in-an-old-account", "faq2"),
    },
    {
      "linkTitle" : LocaleUtils.fluentFormat(supportedLocales, "faq-v2-3", args),
      "stringDescription": "I just found out I’m in a data breach. What do I do next?",
      "href": makeFaqLink("#w_i-just-found-out-im-in-a-data-breach-what-do-i-do-next", "faq3"),
    },
  ];

  if (args.data.root.breachAlert && args.data.root.breachAlert.IsSensitive) {
    faqs.push({
      "linkTitle" : LocaleUtils.fluentFormat(supportedLocales, "faq-v2-4", args),
      "stringDescription": "How does Firefox Monitor treat sensitive sites?",
      "href": makeFaqLink("#w_how-does-firefox-monitor-treat-sensitive-sites", "faq4"),
    });
  }

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


function getEmailFooterCopy(args) {
  const locales = args.data.root.supportedLocales;

  let faqLink = LocaleUtils.fluentFormat(locales, "frequently-asked-questions");
  faqLink = `<a href="https://support.mozilla.org/kb/firefox-monitor-faq">${faqLink}</a>`;

  if (args.data.root.whichPartial === "email_partials/email_verify") {
    return LocaleUtils.fluentFormat(locales, "email-verify-footer-copy", { faqLink });
  }

  const unsubUrl = args.data.root.unsubscribeUrl;
  const unsubLinkText = LocaleUtils.fluentFormat(locales, "email-unsub-link");
  const unsubLink = `<a href="${unsubUrl}">${unsubLinkText}</a>`;

  const localizedFooterCopy = LocaleUtils.fluentFormat(locales, "email-footer-blurb", {
    unsubLink: unsubLink,
    faqLink: faqLink,
   });

  return localizedFooterCopy;
}


function getEmailCTA(args) {
  const locales = args.data.root.supportedLocales;
  const emailType = args.data.root.whichPartial;
  const userBreaches = args.data.root.unsafeBreachesForEmail;

  if (emailType === "email_partials/email_verify") {
    return LocaleUtils.fluentFormat(locales, "verify-email-cta");
  }

  if (userBreaches && (userBreaches.length > 4)) {
    return LocaleUtils.fluentFormat(locales, "see-additional-breaches");
  }

  if (args.data.root.breachAlert) {
    return LocaleUtils.fluentFormat(locales, "see-all-breaches");
  }

  return LocaleUtils.fluentFormat(locales, "view-my-dashboard-cta");
}


function getBreachSummaryHeadline(args) {
  const locales = args.data.root.supportedLocales;
  const recipientEmail = args.data.root.recipientEmail;
  return LocaleUtils.fluentFormat(locales, "email-breach-summary-for-email", { userEmail: boldVioletText(recipientEmail) });
}


function getBreachAlert(args) {
  const locales = args.data.root.supportedLocales;
  const breachAlert = [args.data.root.breachAlert];
  const breachAlertCard = makeBreachCards(breachAlert, locales);
  return args.fn(breachAlertCard[0]);
}


// Show FAQs if the email type is a report with breaches, or a breach alert.
function showFaqs(args) {
  if (args.data.root.whichPartial === "email_partials/email_verify") {
    return;
  }

  if ( args.data.root.breachAlert || (args.data.root.unsafeBreachesForEmail && args.data.root.unsafeBreachesForEmail.length > 0)) {
    return args.fn();
  }
}

function ifPreFxaSubscriber(args) {
  if (args.data.root.preFxaSubscriber) {
    return args.fn();
  }
  return;
}

function getServerUrlForNestedEmailPartial(args) {
  return args.data.root.SERVER_URL;
}


module.exports = {
  emailBreachStats,
  getBreachAlert,
  getBreachAlertFaqs,
  getBreachSummaryHeadline,
  getEmailHeader,
  getEmailFooterCopy,
  getEmailCTA,
  getReportHeader,
  getServerUrlForNestedEmailPartial,
  getUnsafeBreachesForEmailReport,
  ifPreFxaSubscriber,
  makePreFxaSubscriberMessage,
  showFaqs,
};
