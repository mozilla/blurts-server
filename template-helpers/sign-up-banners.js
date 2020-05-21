"use strict";

const { LocaleUtils } = require("./../locale-utils");


function signUpBannerBulletPoints(args) {
    const locales = args.data.root.req.supportedLocales;
    const bulletPoints = [
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
    bulletPoints.forEach(bulletPoint => {
        bulletPoint["translatedString"] = LocaleUtils.fluentFormat(locales, bulletPoint["stringId"]);
    });
    return bulletPoints;
}

function monitorFeaturesList(args) {
    const locales = args.data.root.req.supportedLocales;
    const features = [
        {
            title: "Stay alert to new breaches",
            titleStringId: "stay-alert",
            subtitle: "If your information surfaces in a  new data breach, we'll send you an alert.",
            subtitleStringId: "if-your-info",
            pictogramPath: "alert",
        },
        {
            title: "Monitor several emails",
            titleStringId: "monitor-several-emails",
            subtitle: "Get ongoing breach monitoring for multiple email addresses.",
            subtitleStringId: "get-ongoing-breach-monitoring",
            pictogramPath: "email",
        },
        {
            title: "Protect your privacy",
            titleStringId: "protect-your-privacy",
            subtitle: "Find out what you need to do to keep your data safe from cyber criminals.",
            subtitleStringId: "keep-your-data-safe",
            pictogramPath: "advice",
        },
    ];

    features.forEach(feature => {
        feature.title = LocaleUtils.fluentFormat(locales, feature.titleStringId);
        feature.subtitle = LocaleUtils.fluentFormat(locales, feature.subtitleStringId);
    });
    return features;
}

module.exports = {
    monitorFeaturesList,
    signUpBannerBulletPoints,
};
