"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const csrf = require("csurf");

const {
  home,
  getAboutPage,
  getAllBreaches,
  getBentoStrings,
  getSecurityTips,
  getRemovalFAQPage,
  notFound,
  removeMyData,
  addEmailToWaitlist,
} = require("../controllers/home");
const { getIpLocation } = require("../controllers/ip-location");

const { getShareUTMs, requireSessionUser } = require("../middleware");

const csrfProtection = csrf();
const jsonParser = bodyParser.json();
const router = express.Router();

router.get("/", csrfProtection, home);
router.get("/share/orange", csrfProtection, getShareUTMs, home);
router.get("/share/purple", csrfProtection, getShareUTMs, home);
router.get("/share/blue", csrfProtection, getShareUTMs, home);
router.get("/share/:breach", csrfProtection, getShareUTMs, home);
router.get("/share/", csrfProtection, getShareUTMs, home);
router.get("/about", getAboutPage);
router.get("/breaches", getAllBreaches);
router.get("/security-tips", getSecurityTips);
router.get("/getBentoStrings", getBentoStrings);
router.get("/iplocation", getIpLocation);
//DATA REMOVAL SPECIFIC
router.get("/remove-my-data", requireSessionUser, removeMyData); //MH TODO: think this can be deleted and its associated files
router.get("/remove-faq", getRemovalFAQPage);
//MH TODO: this can be deleted and its associated files(?)
router.post(
  "/join-waitlist",
  jsonParser,
  requireSessionUser,
  addEmailToWaitlist
);
//END DATA REMOVAL SPECIFIC

router.use(notFound);




module.exports = router;
