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

const REMOVAL_CONSTANTS = {
  REMOVAL_PARTICIPANTS_HASHED: null, //this is the pilot participant list and gets assigned in server.js from the removal-waitlist.js functionality on server startup
  REMOVE_CHECK_WAITLIST_ENABLED: true, //enable the waitlist check
  REMOVE_CHECK_EMAIL_DOMAIN_ENABLED: true, //enable a check of the user's email domain to be within the REMOVE_EMAIL_DOMAIN_LIST array
  REMOVE_WILLINGNESS_TO_PAY_ENABLED: false, //show the willingness to pay screen
  REMOVE_CHECK_ENROLLMENT_ENDED_ENABLED: false, //allows us to enforce a fixed amount of time from the pilot start (set with REMOVAL_PILOT_ENROLLMENT_END_DAY) for users to enroll when true
  REMOVE_EMAIL_DOMAIN_LIST: [
    "mozilla.com",
    "getpocket.com",
    "mozillafoundation.org",
  ], //users must sign up with an email from one of these domains if REMOVE_CHECK_EMAIL_DOMAIN_ENABLED is true
  KANARY_PRIVACY_LINK: "https://www.thekanary.com/privacy_and_security",
  REMOVE_CANCELATION_SURVEY_LINK: "", //MH TODO: Get survey link
  REMOVE_LOGGED_IN_DEFAULT_ROUTE: "/user/remove-data",
  REMOVE_ACTIVE_LINKS: [
    "/remove-data",
    "/remove-data?show_form=true",
    "/remove-enrolled",
    "/remove-enroll",
    "/remove-enroll-full",
    "/remove-enroll-ended",
    "/remove-signup-confirmation",
    "/remove-update-confirmation",
    "/remove-delete-confirmation",
    "/remove-pilot-ended",
  ], //used to highlight the exposures tab on any route in array
  REMOVE_ROUTES: ["/user/remove-data", "/user/remove-enroll"],
  REMOVAL_PILOTS: [
    //https://www.epochconverter.com/
    {
      id: 1,
      name: "group_01",
      start_time: 1636459200, //tue, nov 9
      max_users: 50, //total max users in pilot across all groups at this point in time
    },
  ],
  REMOVAL_PILOT_ENROLLMENT_END_DAY: 14, //days from pilot start to when a user can no longer enroll in their pilot group
  REMOVAL_PILOT_PMT_DAY: 25, //days from pilot start to showing the willingness to pay option
  REMOVAL_PILOT_PMT_DECISION_DAY: 32, //days from pilot start to no longer displaying the pmt choice screen
  REMOVAL_PILOT_END_DAY: 51, //days from pilot start to when the pilot ends
  REMOVAL_PILOT_GROUP: "round_01", //the `name` used to retrieve the proper record from the `removal_pilot` database tablename of the current pilot group in the removal_pilot_database
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
  REMOVAL_CONSTANTS,
  REMOVAL_STATUS,
};
