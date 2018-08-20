"use strict";

const TIPS = {
    getPasswordTips() {
       const allTips = [
      {
        "image" : "Password_Tip_1@2x.png",
        "headline": "Use a Different Password<br>for Every Account",
        "summary": "You can't prevent a data breach, but you can limit your exposure by always using different passwords for different websites.",
      },
      {
        "image" : "Password_Tip_2@2x.png",
        "headline": "Create Strong<br>Passwords",
        "summary": "Hackers try to steal passwords by using lists of common passwords and by guessing. The longer and more random your password is, the harder it will be to steal.",
      },
      {
        "image" : "Password_Tip_3@2x.png",
        "headline": "Make Strong<br>Security Questions",
        "summary": "Websites don't care if your security questions are accurate - they only care that your answers match every time. So give answers to the security questions that are long and random, like your passwords.",
      },
      {
        "image" : "Password_Tip_4@2x.png",
        "headline": "Use a Password<br>Manager",
        "summary": "Password managers like 1Password, LastPass, or Dashlane can generate strong passwords for you, remember them for you, and fill them into websites so you don't have to type them in.",
      },
      {
        "image" : "Password_Tip_5@2x.png",
        "headline": "Use Two-Factor<br>Authentication",
        "summary": "Websites that offer two-factor authentication (also known as 2FA) will commonly register your mobile number or provide you with an access code to install an app. When you log in to the site, you will be prompted to enter a code sent to your phone or respond to a message on the app before gaining access.",
      },
      {
        "image" : "Password_Tip_6@2x.png",
        "headline": "Sign Up for Alerts From<br>Firefox Monitor",
        "summary": "We'll let you know if your account information is compromised in a data breach or exposed to hackers in some other way.",
      },
    ];
    return allTips;
  },
    };
  
  
  module.exports = TIPS;
  