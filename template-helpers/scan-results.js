"use strict";

const { LocaleUtils } = require("./../locale-utils");
const { fluentNestedBold } = require("./hbs-helpers");

function getScanResultsHeadline(args) {
    const locales = args.data.root.req.supportedLocales;
    const featuredBreach = args.data.root.specificBreach;
    const userCompromised = args.data.root.userCompromised;
    const foundBreaches = args.data.root.foundBreaches;

    const headlineStrings = {
        "headline": "",
        "subhead": "",
    };

    args.hash = {
        breachName: `<span class="bold">${featuredBreach.Title}</span>`,
        breachCount: foundBreaches.length,
    };

    if (userCompromised) {
        if (foundBreaches.length === 1) {
            headlineStrings.headline = fluentNestedBold("fb-comp-only", args);
            headlineStrings.subhead = LocaleUtils.fluentFormat(locales, "no-other-breaches-found");
            return args.fn(headlineStrings);
        }
        headlineStrings.headline = fluentNestedBold("fb-comp-and-others", args);
        return args.fn(headlineStrings);
    }

    if (foundBreaches.length === 0) {
        headlineStrings.headline = fluentNestedBold("fb-not-comp", args);
        headlineStrings.subhead = LocaleUtils.fluentFormat(locales, "no-other-breaches-found");
        return args.fn(headlineStrings);
    }

    headlineStrings.headline = fluentNestedBold("fb-not-comp", args);
    headlineStrings.subhead = fluentNestedBold("other-known-breaches-found", args);
    return args.fn(headlineStrings);
}

module.exports = {
    getScanResultsHeadline,
};
