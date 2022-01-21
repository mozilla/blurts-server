"use strict";

const express = require("express");
const bearerToken = require("express-bearer-token");
const bodyParser = require("body-parser");
const csrf = require("csurf");

const {
  asyncMiddleware,
  requireSessionUser,
  requireRemovalUser,
  requireNoOptOut,
  requireMozAdmin,
} = require("../middleware");
const {
  add,
  verify,
  logout,
  getDashboard,
  getPreferences,
  getBreachStats,
  removeEmail,
  resendEmail,
  updateCommunicationOptions,
  getUnsubscribe,
  postUnsubscribe,
  getRemoveFxm,
  postRemoveFxm,
  postResolveBreach,
  //DATA REMOVAL SPECIFIC
  getRemovalPage,
  getRemovalUpdateConfirmationPage,
  getRemovalDeleteConfirmationPage,
  getRemovalEnrollPage,
  handleRemovalOptout,
  getRemovalEnrolledPage,
  getRemovalEnrollFullPage,
  getRemovalEnrollEndedPage,
  getRemovalPilotEndedPage,
  handleRemovalFormSignup,
  handleRemovalEnrollFormSignup,
  handleRemovalAcctUpdate,
  getRemovalKan,
  postRemovalKan,
  getRemovalStatsUser,
  createRemovalHashWaitlist,
  handleRemovalPilotMgmt,
  //END DATA REMOVAL SPECIFIC
} = require("../controllers/user");

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf();

router.get(
  "/dashboard",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(getDashboard)
);

router.get(
  "/preferences",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(getPreferences)
);
router.use("/breach-stats", bearerToken());
router.get("/breach-stats", urlEncodedParser, asyncMiddleware(getBreachStats));
router.get("/logout", logout);
router.post(
  "/email",
  urlEncodedParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(add)
);

router.post(
  "/remove-email",
  urlEncodedParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(removeEmail)
);
router.post(
  "/resend-email",
  jsonParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(resendEmail)
);
router.post(
  "/update-comm-option",
  jsonParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(updateCommunicationOptions)
);
router.get("/verify", jsonParser, asyncMiddleware(verify));
router.use("/unsubscribe", urlEncodedParser);
router.get("/unsubscribe", urlEncodedParser, asyncMiddleware(getUnsubscribe));
router.post("/unsubscribe", csrfProtection, asyncMiddleware(postUnsubscribe));
router.get(
  "/remove-fxm",
  urlEncodedParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(getRemoveFxm)
);
router.post(
  "/remove-fxm",
  jsonParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(postRemoveFxm)
);

router.post(
  "/resolve-breach",
  jsonParser,
  urlEncodedParser,
  requireSessionUser,
  asyncMiddleware(postResolveBreach)
);

//DATA REMOVAL SPECIFIC

router.get(
  "/remove-enroll",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(getRemovalEnrollPage)
);

router.get(
  "/remove-enrolled",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(getRemovalEnrolledPage)
);

router.post(
  "/remove-enroll-submit",
  csrfProtection,
  urlEncodedParser,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(handleRemovalEnrollFormSignup)
);

router.get(
  "/remove-optout-confirm",
  csrfProtection,
  urlEncodedParser,
  requireSessionUser,
  asyncMiddleware(handleRemovalOptout)
);

router.get(
  "/remove-enroll-full",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(getRemovalEnrollFullPage)
);

router.get(
  "/remove-enroll-ended",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(getRemovalEnrollEndedPage)
);

router.get(
  "/remove-data",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireNoOptOut),
  asyncMiddleware(getRemovalPage)
);

router.get(
  "/remove-update-confirmation",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(getRemovalUpdateConfirmationPage)
);

router.get(
  "/remove-delete-confirmation",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireNoOptOut),
  asyncMiddleware(getRemovalDeleteConfirmationPage)
);

router.get(
  "/remove-pilot-ended",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(getRemovalPilotEndedPage)
);

router.post(
  "/remove-data-submit",
  csrfProtection,
  urlEncodedParser,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(handleRemovalFormSignup)
);

router.post(
  "/remove-acct-update",
  csrfProtection,
  urlEncodedParser,
  requireSessionUser,
  asyncMiddleware(handleRemovalAcctUpdate)
);

router.get(
  "/remove-kan",
  urlEncodedParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(getRemovalKan)
);
router.post(
  "/remove-kan",
  jsonParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(postRemovalKan)
);

router.get(
  "/remove-user-stats",
  urlEncodedParser,
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(requireRemovalUser),
  asyncMiddleware(getRemovalStatsUser)
);
router.get(
  "/remove-hash-waitlist",
  urlEncodedParser,
  requireSessionUser,
  requireMozAdmin,
  asyncMiddleware(createRemovalHashWaitlist)
);
router.get(
  "/remove-pilot-mgmt",
  urlEncodedParser,
  requireSessionUser,
  requireMozAdmin,
  asyncMiddleware(handleRemovalPilotMgmt)
);

//END DATA REMOVAL SPECIFIC

module.exports = router;
