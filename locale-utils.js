"use strict";

const fs = require("fs");
const path = require("path");

const { FluentBundle } = require("fluent");

const mozlog = require("./log");


const log = mozlog("locale-utils");

const localesDir = path.join("public", "locales");
const availableLanguages = [];
const fluentBundles = {};


class FluentError extends Error {
  constructor(fluentID = null, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FluentError);
    }

    this.fluentID = fluentID;
  }
}


const LocaleUtils = {
  init() {
    const languageDirectories = fs.readdirSync( localesDir ).filter(item => {
      return (!item.startsWith(".") && fs.lstatSync(path.join(localesDir, item)).isDirectory());
    });
    for (const lang of languageDirectories) {
      try {
        const langBundle = new FluentBundle(lang);
        const langFTLSource = fs.readFileSync(path.join(localesDir, lang, "app.ftl"), "utf8");
        langBundle.addMessages(langFTLSource);
        fluentBundles[lang] = langBundle;
        availableLanguages.push(lang);
      } catch (e) {
        log.error("loadFluentBundle", {stack: e.stack});
      }
    }
    log.info("LocaleUtils.init", {availableLanguages});
  },

  loadLanguagesIntoApp (app) {
    app.locals.AVAILABLE_LANGUAGES = availableLanguages;
    app.locals.FLUENT_BUNDLES = fluentBundles;
  },

  fluentFormat (language, fluentID, args=null, errors=null) {
    const bundle = fluentBundles[language];
    return bundle.format(bundle.getMessage(fluentID, args));
  },
};

module.exports = {
  FluentError,
  LocaleUtils,
};
