"use strict";

const express = require("express");
const bearerToken = require("express-bearer-token");
const bodyParser = require("body-parser");
const csrf = require("csurf");

const { asyncMiddleware, requireSessionUser } = require("../middleware");
const {
  add,
  verify,
  logout,
  getDashboard,
  getRemoveFormPage,
  getRemoveConfirmationPage,
  getRemoveDashPage,
  getPreferences,
  getBreachStats,
  handleRemoveFormSignup,
  handleRemoveFormGet,
  removeEmail,
  resendEmail,
  updateCommunicationOptions,
  getUnsubscribe,
  postUnsubscribe,
  getRemoveFxm,
  postRemoveFxm,
  postResolveBreach,
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
  "/remove-form",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(getRemoveFormPage)
);

router.get(
  "/remove-signup-confirmation",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(getRemoveConfirmationPage)
);

router.get(
  "/remove-dashboard",
  csrfProtection,
  requireSessionUser,
  asyncMiddleware(getRemoveDashPage)
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
  "/remove-data-submit",
  urlEncodedParser,
  //csrfProtection,
  requireSessionUser,
  asyncMiddleware(handleRemoveFormSignup)
  //asyncMiddleware(handleRemoveFormGet)
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
module.exports = router;
