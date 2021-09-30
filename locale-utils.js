"use strict";

const fs = require("fs");
const path = require("path");

// node.js needs Intl.PluralRules polyfill
require("intl-pluralrules");

const { FluentBundle } = require("fluent");

const mozlog = require("./log");
const { supportedLocales } = require("./package.json");

const log = mozlog("locale-utils");

const localesDir = "locales";

const availableLanguages = [];
const fluentBundles = {};

class FluentError extends Error {
  constructor(fluentID = null, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FluentError);
    }

    this.fluentID = fluentID;
    this.message = fluentID;
  }
}

const LocaleUtils = {
  init() {
    let languageDirectories = supportedLocales.split(",");
    if (supportedLocales === "*") {
      languageDirectories = fs.readdirSync(localesDir).filter((item) => {
        return (
          !item.startsWith(".") &&
          fs.lstatSync(path.join(localesDir, item)).isDirectory()
        );
      });
    }
    for (const lang of languageDirectories) {
      try {
        const langBundle = new FluentBundle(lang, { useIsolating: false });
        const ftlFiles = fs
          .readdirSync(path.join(localesDir, lang))
          .filter((item) => {
            return item.endsWith(".ftl");
          });
        for (const file of ftlFiles) {
          const langFTLSource = fs.readFileSync(
            path.join(localesDir, lang, file),
            "utf8"
          );
          langBundle.addMessages(langFTLSource);
        }
        fluentBundles[lang] = langBundle;
        availableLanguages.push(lang);
      } catch (e) {
        log.error("loadFluentBundle", { stack: e.stack });
      }
    }
    log.info("LocaleUtils.init", { availableLanguages });
    log.info("LocaleUtils.init", { fluentBundles });
    return { availableLanguages, fluentBundles };
  },

  loadLanguagesIntoApp(app) {
    app.locals.AVAILABLE_LANGUAGES = availableLanguages;
    app.locals.FLUENT_BUNDLES = fluentBundles;
    console.log();
  },

  fluentFormat(supportedLocales, id, args = null, errors = null) {
    for (const locale of supportedLocales) {
      const bundle = fluentBundles[locale];
      if (bundle.hasMessage(id)) {
        const message = bundle.getMessage(id);
        return bundle.format(message, args);
      }
    }
    return id;
  },

  fluentFormatWithFallback(
    supportedLocales,
    id,
    fallbackId,
    args = null,
    errors = null
  ) {
    if (!fallbackId) {
      log.error("fluentFormatWithFallback: No fallbackId");
      return false;
    }

    for (const locale of supportedLocales) {
      const bundle = fluentBundles[locale];
      if (bundle.hasMessage(id)) {
        const message = bundle.getMessage(id);
        return bundle.format(message, args);
      }

      // If first message id doesn't have translation, use fallback id
      if (fallbackId && bundle.hasMessage(fallbackId)) {
        const message = bundle.getMessage(fallbackId);
        return bundle.format(message, args);
      }
    }
    return id;
  },
};

module.exports = {
  FluentError,
  LocaleUtils,
};
