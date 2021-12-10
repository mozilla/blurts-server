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

//DATA REMOVAL SPECIFIC
const removeLocalesDir = "remove_locales";
const removeBundles = {};

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

    //return { availableLanguages, fluentBundles };  //MH TODO: reinstate for prod. monitor

    //DATA REMOVAL SPECIFIC
    const removeLang = "en";
    const removeFile = "remove.ftl";
    const removeBundleEn = new FluentBundle(removeLang, {
      useIsolating: false,
    });
    const removeFTLSource = fs.readFileSync(
      path.join(removeLocalesDir, removeLang, removeFile),
      "utf8"
    );
    removeBundleEn.addMessages(removeFTLSource);
    removeBundles[removeLang] = removeBundleEn;
    log.info("LocaleUtils.init", { removeBundles });
    return { availableLanguages, fluentBundles, removeBundles }; //DATA REMOVAL SPECIFIC
    //END DATA REMOVAL SPECIFIC
  },

  loadLanguagesIntoApp(app) {
    app.locals.AVAILABLE_LANGUAGES = availableLanguages;
    app.locals.FLUENT_BUNDLES = fluentBundles;
    app.locals.REMOVE_BUNDLE = removeBundles; //DATA REMOVAL SPECIFIC
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

  //DATA REMOVAL SPECIFIC
  removeFormat(id) {
    const removeLang = "en";
    const bundle = removeBundles[removeLang];
    if (bundle.hasMessage(id)) {
      const message = bundle.getMessage(id);
      return bundle.format(message);
    }
    return id;
  },
};

module.exports = {
  FluentError,
  LocaleUtils,
};
