"use strict";

const REMOVAL_FILTERS = {
  IN_PROGRESS: {
    id: "IN_PROGRESS",
    icon: "remove-status-in-progress.svg",
    locale_var: "remove-filter-in-progress",
  },
  COMPLETE: {
    id: "COMPLETE",
    icon: "remove-status-complete.svg",
    locale_var: "remove-filter-complete",
  },
  BLOCKED: {
    id: "BLOCKED",
    icon: "remove-status-blocked.svg",
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
  REMOVAL_STATUS_ICON_PATH: "/img/removal/",
  REMOVAL_STATUSES: {
    READY_TO_REMOVE: {
      //
      locale_var: "remove-status-ready",
      code: "READY_TO_REMOVE",
      text: "Ready to remove",
      filter: REMOVAL_FILTERS["IN_PROGRESS"],
    },
    REQUEST_SUBMITTED: {
      //
      locale_var: "remove-status-submitted",
      code: "REQUEST_SUBMITTED",
      text: "Request submitted",
      filter: REMOVAL_FILTERS["IN_PROGRESS"],
    },
    SITE_RESPONDED: {
      locale_var: "remove-status-responded",
      code: "SITE_RESPONDED",
      text: "Site responded",
      filter: REMOVAL_FILTERS["IN_PROGRESS"],
    },
    ADDITIONAL_INFORMATION_NEEDED: {
      //
      locale_var: "remove-status-info_needed",
      code: "ADDITIONAL_INFORMATION_NEEDED",
      text: "Additional info needed",
      filter: REMOVAL_FILTERS["IN_PROGRESS"],
    },
    ESCALATING_REQUEST: {
      //
      locale_var: "remove-status-escalating",
      code: "ESCALATING_REQUEST",
      text: "Escalating request",
      filter: REMOVAL_FILTERS["IN_PROGRESS"],
    },
    VERIFYING_REMOVAL: {
      locale_var: "remove-status-verifying",
      code: "VERIFYING_REMOVAL",
      text: "Verifying removal",
      filter: REMOVAL_FILTERS["IN_PROGRESS"],
    },
    REMOVAL_VERIFIED: {
      //
      locale_var: "remove-status-verified",
      code: "REMOVAL_VERIFIED",
      text: "Removal verified",
      filter: REMOVAL_FILTERS["COMPLETE"],
    },
    BLOCKED: {
      //
      locale_var: "remove-status-blocked",
      code: "BLOCKED",
      text: "Request blocked",
      filter: REMOVAL_FILTERS["BLOCKED"],
    },
  },
};

module.exports = {
  JS_CONSTANTS,
  REMOVAL_FILTERS,
};
