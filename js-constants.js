"use strict";

const REMOVAL_STATUS = {
  ACTIVE: {
    id: "ACTIVE",
    icon: "/img/removal/remove-status-in-progress.svg",
    locale_var: "remove-filter-in-progress",
  },
  COMPLETE: {
    id: "COMPLETE",
    icon: "/img/removal/remove-status-complete.svg",
    locale_var: "remove-filter-complete",
  },
  BLOCKED: {
    id: "BLOCKED",
    icon: "/img/removal/remove-status-blocked.svg",
    locale_var: "remove-filter-blocked",
  },
};

const JS_CONSTANTS = {
  KANARY_PRIVACY_LINK: "https://www.thekanary.com/privacy_and_security",
  REMOVAL_SITES: [
    "anywho.com",
    "backgroundalert.com",
    "beenverified.com",
    "checkpeople.com",
    "checkthem.com",
    "clustrmaps.com",
    "cocofinder.com",
    "cyberbackgroundchecks.com",
    "dobsearch.com",
    "emailsherlock.com",
    "familytreenow.com",
    "fastpeoplesearch.com",
    "freepeopledirectory.com",
    "homemetry.com",
    "hpccusa.com",
    "infotracer.com",
    "instantcheckmate.com",
    "intelius.com",
    "kiwisearches.com",
    "locatepeople.com",
    "mylife.com",
    "neighborwho.com",
    "nuwber.com",
    "peekyou.com",
    "peoplebyname.com",
    "peoplefinders.com",
    "pplcheck.com",
    "publicdatadigger.com",
    "publicdatausa.com",
    "publicemailrecords.com",
    "publicinfoservices.com",
    "publicrecordsnow.com",
    "radaris.com",
    "searchpeoplefree.com ",
    "searchquarry.com ",
    "smartbackgroundchecks.com",
    "socialcatfish.com",
    "spokeo.com",
    "spydialer.com",
    "spyfly.com",
    "thatsthem.com",
    "truthfinder.com",
    "unmask.com",
    "usphonebook.com",
    "ussearch.com",
    "veripages.com",
    "whitepages.com",
    "xlek.com",
    "yellowbook.com",
    "zabasearch.com",
  ],

  REMOVAL_STEP: {
    FOUND: {
      //
      locale_var: "remove-step-found",
      code: "FOUND",
      text: "Information found",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    AWAITING_REMOVAL: {
      //
      locale_var: "remove-step-awaiting-removal",
      code: "AWAITING_REMOVAL",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    SUBMITTED: {
      locale_var: "remove-step-submitted",
      code: "SUBMITTED",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    AWAITING_REVIEW: {
      //
      locale_var: "remove-step-awaiting-review",
      code: "AWAITING_REVIEW",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    REMOVED: {
      //
      locale_var: "remove-step-removed",
      code: "REMOVED",
      filter: REMOVAL_STATUS["COMPLETE"],
    },
    BLOCKED: {
      //
      locale_var: "remove-step-blocked",
      code: "BLOCKED",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
  },
};

module.exports = {
  JS_CONSTANTS,
  REMOVAL_STATUS,
};
