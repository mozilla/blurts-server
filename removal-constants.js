"use strict";

const REMOVAL_STATUS = {
  COMPLETE: {
    id: "COMPLETE",
    icon: "/img/removal/remove-status-complete.svg",
    locale_var: "remove-filter-complete",
  },
  ACTIVE: {
    id: "ACTIVE",
    icon: "/img/removal/remove-status-in-progress.svg",
    locale_var: "remove-filter-in-progress",
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
  REMOVE_CHECK_EMAIL_DOMAIN_ENABLED: false, //enable a check of the user's email domain to be within the REMOVE_EMAIL_DOMAIN_LIST array
  REMOVE_WILLINGNESS_TO_PAY_ENABLED: false, //show the willingness to pay screen
  REMOVE_CHECK_ENROLLMENT_ENDED_ENABLED: false, //allows us to enforce a fixed amount of time from the pilot start (set with REMOVAL_PILOT_ENROLLMENT_END_DAY) for users to enroll when true
  REMOVE_CLIENT_VALIDATION_ENABLED: true, //allows us to run removal form validity check client side before server side validation
  REMOVE_EDIT_INFO_ENABLED: false, //when true, users can edit their info without the need to contact support
  REMOVE_EMAIL_DOMAIN_LIST: [
    "mozilla.com",
    "getpocket.com",
    "mozillafoundation.org",
  ], //users must sign up with an email from one of these domains if REMOVE_CHECK_EMAIL_DOMAIN_ENABLED is true
  KANARY_PRIVACY_LINK: "https://www.thekanary.com/privacy_and_security",
  REMOVE_CANCELATION_SURVEY_LINK:
    "https://qsurvey.mozilla.com/s3/Firefox-Monitor-Data-Removal-Cancellation", //MH TODO: Get survey link
  REMOVE_LOGGED_IN_DEFAULT_ROUTE: "/user/remove-data",
  REMOVE_ACTIVE_LINKS: [
    "/remove-data",
    "/remove-data?show_form=true",
    "/remove-enrolled",
    "/remove-enroll",
    "/remove-enroll-full",
    "/remove-enroll-ended",
    "/remove-update-confirmation",
    "/remove-delete-confirmation",
    "/remove-pilot-ended",
  ], //used to underline the exposures menu tab on any route in this array
  REMOVE_ROUTES: ["/user/remove-data", "/user/remove-enroll"],
  REMOVAL_PILOTS: [
    //can use https://www.epochconverter.com/ for a timestamp
    {
      id: 1,
      name: "group_01",
      start_time: 1641967200, //wed, jan 12
      max_users: 50, //total max users in pilot across all groups at this point in time
    },
  ],
  REMOVAL_PILOT_ENROLLMENT_END_DAY: 14, //days from pilot start to when a user can no longer enroll in their pilot group
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
