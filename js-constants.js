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
    "peoplebyname.com",
  ],

  REMOVAL_STEP: {
    FOUND: {
      //
      locale_var: "remove-status-found",
      code: "FOUND",
      text: "Information found",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    AWAITING_REMOVAL: {
      //
      locale_var: "remove-status-awaiting-removal",
      code: "AWAITING_REMOVAL",
      text: "Awaiting removal",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    SUBMITTED: {
      locale_var: "remove-status-submitted",
      code: "SUBMITTED",
      text: "Removal Request Submitted",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    AWAITING_REVIEW: {
      //
      locale_var: "remove-status-awaiting-review",
      code: "AWAITING_REVIEW",
      text: "Awaiting Review",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    REMOVED: {
      //
      locale_var: "remove-status-removed",
      code: "REMOVED",
      text: "Removed",
      filter: REMOVAL_STATUS["COMPLETE"],
    },
    BLOCKED: {
      //
      locale_var: "remove-status-blocked",
      code: "BLOCKED",
      text: "Request blocked",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
  },
};

module.exports = {
  JS_CONSTANTS,
  REMOVAL_STATUS,
};
