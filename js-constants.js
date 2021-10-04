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
  REMOVE_ROUTES: ["/user/remove-data", "/user/remove-enroll"],
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
  REMOVAL_PILOT_START_TIME: 1634108460, //10/13/2021 - 7:00am GMT - timestamp when the pilot started (can generate a timestamp from a calendar date at https://www.epochconverter.com/)
  REMOVAL_PILOT_MAX_USERS: 500, //max number of users allowed in this pilot group
  REMOVAL_PILOT_ENROLLMENT_END_DAY: 30, //days from pilot start to when a user can no longer enroll in their pilot group
  REMOVAL_PILOT_PMT_DAY: 45, //days from pilot start to showing the willingness to pay option
  REMOVAL_PILOT_PMT_DECISION_DAY: 65, //days from pilot start to no longer displaying the pmt choice screen
  REMOVAL_PILOT_END_DAY: 90, //days from pilot start to when the pilot ends
  REMOVAL_PILOT_GROUP: "round_01", //name of the current pilot group
  REMOVAL_STEP: {
    AWAITING_SCAN: {
      locale_var: "remove-step-awaiting-scan",
      code: "AWAITING_SCAN",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    FOUND: {
      locale_var: "remove-step-found",
      code: "FOUND",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    AWAITING_REMOVAL: {
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
      locale_var: "remove-step-awaiting-review",
      code: "AWAITING_REVIEW",
      filter: REMOVAL_STATUS["ACTIVE"],
    },
    REMOVED: {
      locale_var: "remove-step-removed",
      code: "REMOVED",
      filter: REMOVAL_STATUS["COMPLETE"],
    },
    BLOCKED: {
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
