"use strict";

const AppConstants = require("./../app-constants");
const { LocaleUtils } = require("./../locale-utils");
const mozlog = require("./../log");


const log = mozlog("template-helpers/hbs-helpers");

function getSupportedLocales(args) {
  if (args.data) {
    if (args.data.root.supportedLocales) {
      return args.data.root.supportedLocales;
    }
    return args.data.root.req.supportedLocales;
  }
  if (args.this) {
    return args.this.req.supportedLocales;
  }
  return null;
}


function englishInAcceptLanguages(args) {
  const acceptedLanguages = args.data.root.req.acceptsLanguages();
  return acceptedLanguages.some(locale => locale.startsWith("en"));
}


function escapeHtmlAttributeChars(text) {
  return text.replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}


function recruitmentBanner(args) {
  if (!AppConstants.RECRUITMENT_BANNER_LINK || !AppConstants.RECRUITMENT_BANNER_TEXT) {
    return;
  }

  if (!englishInAcceptLanguages(args)) {
    return;
  }

  return `<div class="recruitment-banner"><a id="recruitment-banner" href="${AppConstants.RECRUITMENT_BANNER_LINK}"  target="_blank" rel="noopener noreferrer" data-ga-link="" data-event-category="Recruitment" data-event-label="${escapeHtmlAttributeChars(AppConstants.RECRUITMENT_BANNER_TEXT)}">${AppConstants.RECRUITMENT_BANNER_TEXT}</a></div>`;
}

function microsurveyBanner(args) {
  // don't show micro survey if we're already showing a recruitment banner
  if (AppConstants.RECRUITMENT_BANNER_LINK && AppConstants.RECRUITMENT_BANNER_TEXT) {
    return;
  }

  // don't show micro survey if language isn't English
  // TODO: localize micro survey questions
  if (!englishInAcceptLanguages(args)) {
    return;
  }

  // don't show micro survey if user is not signed in
  if (!args.data.root.req.session.user){
    return;
  }

  const bannerOpeningDiv = "<div id=\"micro-survey-banner\" class=\"micro-survey-banner hidden\">";
  const nowSecond = new Date().getTime() / 1000;
  let surveyElements;
  switch (nowSecond) {
    case 1:
    case 6: {
      surveyElements = `
        <span id="micro-survey-prompt" data-survey-type="nps">On a scale from 1-10, how likely are you to recommend Relay to a friend or colleague?</span>
        <ul id="micro-survey-options" class="micro-survey-options micro-survey-options-numeric"></ul>
      `;
      break;
    }
    case 2:
    case 7: {
      surveyElements = `
        <span id="micro-survey-prompt" data-survey-type="usability">Is Relay easy to use?</span>
        <ul id="micro-survey-options" class="micro-survey-options micro-survey-options-likert"></ul>
      `;
      break;
    }
    case 3:
    case 8: {
      surveyElements = `
        <span id="micro-survey-prompt" data-survey-type="credibility">Do you feel Relay is trustworthy?</span>
        <ul id="micro-survey-options" class="micro-survey-options micro-survey-options-likert"></ul>
      `;
      break;
    }
    case 4:
    case 9: {
      surveyElements = `
        <span id="micro-survey-prompt" data-survey-type="appearance">Does Relay have a clean and simple presentation?</span>
        <ul id="micro-survey-options" class="micro-survey-options micro-survey-options-likert"></ul>
      `;
      break;
    }
    default: {
      surveyElements = `
        <span id="micro-survey-prompt" data-survey-type="pmf">How would you feel if you could no longer use Relay?</span>
        <ul id="micro-survey-options" class="micro-survey-options micro-survey-options-likert"></ul>
      `;
      break;
    }
  }
  const bannerClosingDev = "</div>";

  return [bannerOpeningDiv, surveyElements, bannerClosingDev].join("");
}

function getString (id, args) {
  const supportedLocales = getSupportedLocales(args);
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function getStrings(stringArr, locales) {
  stringArr.forEach(string => {
    const stringId = string.stringId;
    string.stringId = LocaleUtils.fluentFormat(locales, stringId);
  });
  return stringArr;
}


function fluentFxa (id, args) {
  const supportedLocales = args.data.root.req.supportedLocales;
  if (AppConstants.FXA_ENABLED) {
    id = `fxa-${id}`;
  }
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function getStringID (id, number, args) {
  // const supportedLocales = args.data.root.req.supportedLocales;
  // id = `${id}${number}`;
  // if (modifiedStringMap[id]) {
  //   id = modifiedStringMap[id];
  // }
  // return LocaleUtils.fluentFormat(supportedLocales, id);
}


function localizedBreachDataClasses(dataClasses, locales) {
  const localizedDataClasses = [];
  for (const dataClass of dataClasses) {
    localizedDataClasses.push(LocaleUtils.fluentFormat(locales, dataClass));
  }
  return localizedDataClasses.join(", ");
}


function fluentNestedBold(id, args) {
  const supportedLocales = args.data.root.req.supportedLocales;

  const addMarkup = (word) => {
    return ` <span class="bold">${word}</span> `;
  };

  let localizedStrings = LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
  if (args.hash.breachCount || args.hash.breachCount === 0) {
    localizedStrings = localizedStrings.replace(/(\s[\d]+\s)/, addMarkup(args.hash.breachCount));
  }
  return localizedStrings;
}


function prettyDate(date, locales) {
  const jsDate = new Date(date);
  const options = {year: "numeric", month: "long", day: "numeric"};
  const intlDateTimeFormatter = new Intl.DateTimeFormat(locales, options);
  return intlDateTimeFormatter.format(jsDate);
}


function localeString(numericInput, locales) {
  const intlNumberFormatter = new Intl.NumberFormat(locales);
  return intlNumberFormatter.format(numericInput);
}

function getFxaUrl() {
  return AppConstants.FXA_SETTINGS_URL;
}


function eachFromTo(ary, min, max, options) {
  if(!ary || ary.length === 0)
      return options.inverse(this);

  let result = "";

  for (let i = min; i < max && i < ary.length; i++) {
    result = result + options.fn(ary[i]);
  }
  return result;
}


function localize(locales, stringId, args) {
  return LocaleUtils.fluentFormat(locales, stringId, args);
}


function loop(from, to, inc, block) {
  block = block || {fn: function () { return arguments[0]; }};
  const data = block.data || {index: null};
  let output = "";
  for (let i = from; i <= to; i += inc) {
      data["index"] = i;
      output += block.fn(i, {data: data});
  }
  return output;
}


function ifCompare(v1, operator, v2, options) {
  //https://stackoverflow.com/questions/28978759/length-check-in-a-handlebars-js-if-conditional
  const operators = {
    ">": v1 > v2 ? true : false,
    ">=": v1 >= v2 ? true : false,
    "<": v1 < v2 ? true : false,
    "<=": v1 <= v2 ? true : false,
    "===": v1 === v2 ? true : false,
    "&&" : v1 && v2 ? true : false,
    "||" : v1 || v2 ? true : false,
    "!|" : !v1 || !v2 ? true : false,
    "!!" : !v1 && !v2  ? true : false,
  };
  if (operators.hasOwnProperty(operator)) {
    if (operators[operator]) {
      return options.fn(this);
    }
    return options.inverse(this);
  }
  log.error("ifCompare", {message: `${operator} not found`});
  return;
}


function breachMath(lValue, operator = null, rValue = null) {
  lValue = parseFloat(lValue);
  let returnValue = lValue;
  if (operator) {
      rValue = parseFloat(rValue);
    returnValue = {
      "+": lValue + rValue,
      "-": lValue - rValue,
      "*": lValue * rValue,
      "/": lValue / rValue,
      "%": lValue % rValue,
    }[operator];
  }
  return returnValue;
}


module.exports = {
  recruitmentBanner,
  microsurveyBanner,
  englishInAcceptLanguages,
  getString,
  getStrings,
  fluentFxa,
  getStringID,
  getSupportedLocales,
  fluentNestedBold,
  localizedBreachDataClasses,
  localize,
  prettyDate,
  localeString,
  getFxaUrl,
  eachFromTo,
  ifCompare,
  breachMath,
  loop,
};
