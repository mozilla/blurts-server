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

function getPreFxaUtmParams(serverUrl, content, userEmail) {
  const url = new URL(`${serverUrl}/oauth/init`);
  const utmParams = {
    utm_source: "fx-monitor",
    utm_medium: "fx-monitor-email",
    utm_content: content,
    utm_campaign: "pre-fxa-subscribers",
    email: userEmail,
  };
  for (const param in utmParams) {
    url.searchParams.append(param, utmParams[param]);
  }
  return url;
}

function getPreFxaTouts(args) {
  const locales = args.data.root.supportedLocales;
  const serverUrl = args.data.root.SERVER_URL;
  const userEmail = args.data.root.email;

  const fxaTouts = [
    {
      imgSrc: `${serverUrl}/img/email_images/pictogram-alert.png`,
      headline: LocaleUtils.fluentFormat(locales, "pre-fxa-tout-1"),
      paragraph: LocaleUtils.fluentFormat(locales,"pre-fxa-p-1"),
    },
    {
      imgSrc: `${serverUrl}/img/email_images/pictogram-advice.png`,
      headline: LocaleUtils.fluentFormat(locales, "pre-fxa-tout-2"),
      paragraph: LocaleUtils.fluentFormat(locales,"pre-fxa-p-2"),
    },
    {
      imgSrc: `${serverUrl}/img/email_images/pictogram-email.png`,
      headline: LocaleUtils.fluentFormat(locales, "pre-fxa-tout-3"),
      paragraph: LocaleUtils.fluentFormat(locales,"pre-fxa-p-3"),
    },
  ];

  // replace placeholder anchor tag markup in first tout to make link
  // add UTM params which are passed to FxA for account creation
  const fxaTout1 = fxaTouts[0].paragraph;
  const url = getPreFxaUtmParams(serverUrl, "create-account-link", userEmail);
  if ((/<a>/).test(fxaTout1) && (/<\/a>/).test(fxaTout1)) {
    const openingAnchorTag = `<a class="pre-fxa-nested-link" href="${url}" style="color: #0060df; font-family: sans-serif; font-weight: 300; font-size: 15px; text-decoration: none;">`;
    fxaTouts[0].paragraph = fxaTout1.replace("<a>", openingAnchorTag);
  }

  return fxaTouts;
}

function getUnsafeBreachesForEmailReport(args) {
  const locales = args.data.root.supportedLocales;
  const foundBreaches = JSON.parse(JSON.stringify(args.data.root.unsafeBreachesForEmail));

  if (foundBreaches.length > 4) {
    foundBreaches.length = 4;
  }
  return makeBreachCards(foundBreaches, locales);
}


function boldVioletText(breachedEmail, addBlockDisplayToEmail=false) {
  let optionalDisplayProperty = "";

  if (addBlockDisplayToEmail) {
    optionalDisplayProperty = "display: block;";
  }

  // garble email address so that email clients won't turn it into a link
  breachedEmail = breachedEmail.replace(/([@.:])/g, "<span>$1</span>");
  return `<span class="rec-email text-bold" style=" ${optionalDisplayProperty} font-weight: 700; color: #9059ff; font-family: sans-serif; text-decoration: none;"> ${breachedEmail}</span>`;
}


function getEmailHeader(args) {
  const locales = args.data.root.supportedLocales;
  const emailType = args.data.root.whichPartial;
  const breachedEmail = args.data.root.breachedEmail;

  if (emailType === "email_partials/email_verify") {
    return LocaleUtils.fluentFormat(locales, "email-link-expires");
  }

  if (emailType ==="email_partials/pre-fxa") {
    return LocaleUtils.fluentFormat(locales, "pre-fxa-headline");
  }

  if (args.data.root.breachAlert) {
    return LocaleUtils.fluentFormat(locales, "email-alert-hl", { userEmail: boldVioletText(breachedEmail, true) });
  }

  const userBreaches = args.data.root.unsafeBreachesForEmail;

  if (userBreaches.length === 0) {
    return LocaleUtils.fluentFormat(locales, "email-no-breaches-hl", { userEmail: boldVioletText(breachedEmail, true)});
  }

  return LocaleUtils.fluentFormat(locales, "email-found-breaches-hl");
}


function makeFaqLink(target, campaign) {
  const url = new URL(`https://support.mozilla.org/kb/firefox-monitor-faq${target}`);
  const utmParameters = {
    utm_source: "fx-monitor",
    utm_medium: "email",
    utm_campaign: campaign,
  };

  for (const param in utmParameters) {
    url.searchParams.append(param, utmParameters[param]);
  }
  return url;
}

function makePreFxaSubscriberMessage(args) {
  const serverUrl = args.data.root.SERVER_URL;
  const locales = args.data.root.supportedLocales;
  const url = new URL(`${serverUrl}/#fx-account-features`);

  const utmParameters = {
    utm_source : "fx-monitor",
    utm_medium : "email",
    utm_content : "breach-alert",
    utm_campaign : "pre-fxa-subscribers",
  };
  for (const param in utmParameters) {
    url.searchParams.append(param, utmParameters[param]);
  }
  let preFxaMessage = LocaleUtils.fluentFormat(locales, "pre-fxa-message");
  if ((/<a>/).test(preFxaMessage) && (/<\/a>/).test(preFxaMessage)) {
      const openingAnchorTag = `<a class="pre-fxa-nested-link" href="${url}" style="color: #0060df; font-family: sans-serif; font-weight: 400; font-size: 16px; text-decoration: none;">`;
      preFxaMessage = preFxaMessage.replace("<a>", openingAnchorTag);
    }
  return preFxaMessage;
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

  if (emailType === "email_partials/email_verify") {
    return LocaleUtils.fluentFormat(locales, "verify-email-cta");
  }
  return LocaleUtils.fluentFormat(locales, "go-to-dashboard-link");
}


function getBreachSummaryHeadline(args) {
  const locales = args.data.root.supportedLocales;
  const breachedEmail = args.data.root.breachedEmail;
  return LocaleUtils.fluentFormat(locales, "email-breach-summary-for-email", { userEmail: boldVioletText(breachedEmail) });
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


// Do not show products for verification email.
function showProducts(args) {
  switch (args.data.root.whichPartial) {
    case "email_partials/email_verify":
      return;
    default:
      return args.fn();
  }
}

module.exports = {
  emailBreachStats,
  getBreachAlert,
  getBreachAlertFaqs,
  getBreachSummaryHeadline,
  getEmailHeader,
  getEmailFooterCopy,
  getEmailCTA,
  getPreFxaTouts,
  getPreFxaUtmParams,
  getReportHeader,
  getServerUrlForNestedEmailPartial,
  getUnsafeBreachesForEmailReport,
  ifPreFxaSubscriber,
  makePreFxaSubscriberMessage,
  showFaqs,
  showProducts,
};
