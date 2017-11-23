# Breach Alerts Prototype

## Summary

This is an extension that I'm going to be using as a vehicle for prototyping basic UI and interaction flow for an upcoming feature in Firefox that notifies users when their credentials have possibly been leaked or stolen in a data breach.

### This is only meant as a vehicle for quick testing as we iterate on the design, and to help visualize different ideas. In its current state it is in no way meant to represent actual production code, or how the feature will work or look like when it ships. Pull requests are welcome but please keep in mind the highly experimental/volatile nature of this repository.

## Context

Data breaches ("hacks") are a real problem on the modern Web, with sensitive data like email addresses, passwords, credit card details, and other personal information being stolen and/or leaked by parties with malicious intent. As they grow more frequent, it's desirable to keep track of them and communicate about them to Web users when their credentials may have been compromised, and educate them on the repercussions, what they can do when such a breach occurs, and protect themselves in the future.

This project aims to explore how we, as the user agent, can attempt to do this. We're teaming up with https://haveibeenpwned.com/ [1][2] as our data source.

[1] https://haveibeenpwned.com/About
[2] https://en.wikipedia.org/wiki/Have_I_Been_Pwned%3F

## Basic Goals

1. Inform users about data breaches through the Firefox UI - for example, a notification when they visit a site (or maybe when they focus a form on a login page) known to have recently been breached.
2. Expose documentation/educational information about data breaches in the Firefox UI - for example, a "Learn more" link in the notification mentioned above leading to a support page.
3. Offer a way for interested users to learn about and opt into a service that notifies them (e.g. via email) when they may be affected by breaches in the future.

## Privacy Concerns

The third goal brings up some privacy concerns, since users would need to supply an email address to receive notifications. Who is the custodian of this data? Can we avoid sending user data to haveibeenpwned.com? Can we still offer useful functionality to users who opt out of subscribing their email address? While the project is still in infancy, the idea is to offer as much utility as possible while respecting the user's privacy.

## Try it (basic testing instructions for Unix OSes as of Nov 23 2017)

### Clone

```
$ git clone https://github.com/nhnt11/BreachAlerts.git
```

### Server (to test subscribing an email address and sending a "Breach Alert" email)

Prerequisites: Node.js and npm (example commands assume you have `node` and `npm` in your path)

You'll need to supply SMTP credentials for sending the email. To do so, create a file `smtp-credentials.json` in the `BreachAlerts/server` folder:

```
{
  "username": "<username>",
  "password": "<password>"
}

```

NOTE: Currently the Gmail SMTP server is hardcoded, so you'll need to modify that in server.js if you're using something else.

```
$ cd BreachAlerts/server
$ npm install
$ node server.js
```

### Client:

Prerequisites: currently Firefox 58.0 or 59.0.

```
$ cd BreachAlerts/client-addon
$ ./package.sh # This creates a client-addon.xpi file in the dist/ folder
```

Then, in Firefox:
1. Navigate to `about:config`
2. Search for the `extensions.legacy.enabled` pref and change the value to true
3. Navigate to `about:debugging`
4. Click the "Load Temporary Add-on" button, and select client-addon.xpi created by package.sh (`/path/to/clone/BreachAlerts/client-addon/dist/client-addon.xpi`)

Current functionality:

1. A doorhanger notification is shown when you visit a site known to have been breached (like linkedin.com or adobe.com)
2. The doorhanger has a textbox you can use to subscribe an email address for future email alerts - type the address and press enter.
3. If you visit haveibeenpwned.com (an arbitrary, hard-coded choice), you'll get a doorhanger with a textbox - you can use this one to simulate a breach. Type a list of comma-separated email addresses and press enter; the server will send an email to any email addresses in the list that were previously subscribed.

## Notes

I chose to make it a legacy addon to make it easy to port into mozilla-central in the future - it will likely involve window manipulation code.
