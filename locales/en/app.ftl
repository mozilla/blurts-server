# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Strings for the main app

## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = This email address is not subscribed to { -product-name }.

user-add-invalid-email = Invalid Email
user-add-too-many-emails = You are monitoring the maximum number of email addresses.
user-add-duplicate-email = This email has already been added to { -product-name }.
user-add-verification-email-just-sent = Another verification email can’t be sent this quickly. Please try again later.
user-add-unknown-error = Something went wrong adding another email address. Please try again later.
user-delete-unknown-error = Something went wrong removing an email address. Please try again later.

user-verify-token-error = Verification token is required.

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Compromised data:

# Link title
more-about-this-breach = More about this breach
sensitive-sites = How does { -product-name } treat sensitive sites?
sensitive-sites-copy = { -product-name } only reveals accounts associated with these
  types of breaches after an email address has been verified. This means you’re the
  only person who can see if your information was in this breach (unless someone
  else has access to your email account).

what-data = What data was compromised:

delayed-reporting-headline = Why did it take so long to report this breach?
delayed-reporting-copy = It can sometimes take months or years for credentials exposed
  in a data breach to appear on the dark web. Breaches get added to our database as
  soon as they have been discovered and verified.

##
what-is-a-website-breach = What is a website breach?
website-breach-blurb = A website data breach happens when cyber criminals steal, copy, or expose personal information from online accounts. It’s usually a result of hackers finding a weak spot in the website’s security. Breaches can also happen when account information gets leaked by accident.

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Overview

# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = On { $breachDate }, { $breachTitle } was breached. Once the breach was discovered and verified, it was added to our database on { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Breach added:

# Section headline
rec-section-headline = What to do for this breach
rec-section-subhead = We recommend you take these steps to keep your personal info safe and protect your digital identity.

# Section headline
rec-section-headline-no-pw = What to do to protect your personal info
rec-section-subhead-no-pw = Though passwords weren’t exposed in this breach, there are still steps you can take to better protect your personal info.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla account

open-in-new-tab-alt = Open link in a new tab

## Search Engine Optimization

meta-desc-2 = Find out if you’ve been part of a data breach with { -brand-fx-monitor }. We’ll help you understand what to do next and continuously monitor for any new breaches.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Sign In
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Main menu

main-nav-button-collapse-label = Collapse menu
main-nav-button-collapse-tooltip = Collapse menu
main-nav-button-expand-label = Expand menu
main-nav-button-expand-tooltip = Expand menu
main-nav-label = Navigation
main-nav-link-home-label = Home
main-nav-link-dashboard-label = Dashboard
main-nav-link-settings-label = Settings
main-nav-link-faq-label = FAQs
main-nav-link-faq-tooltip = Frequently asked questions

## User menu

user-menu-trigger-label = Open user menu
user-menu-trigger-tooltip = Profile
user-menu-manage-fxa-label = Manage your { -brand-mozilla-account }
user-menu-settings-label = Settings
user-menu-settings-tooltip = Configure { -brand-mozilla-monitor }
user-menu-help-label = Help and support
user-menu-help-tooltip = Get help using { -brand-mozilla-monitor }
user-menu-signout-label = Sign out
user-menu-signout-tooltip = Sign out of { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Terms of Service
privacy-notice = Privacy Notice
github = { -brand-github }
footer-nav-recent-breaches = Recent Data Breaches
footer-external-link-faq-label = FAQs
footer-external-link-faq-tooltip = Frequently asked questions

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Page not found
error-page-error-404-copy = We’re sorry, the page you’re looking for no longer exists.
error-page-error-404-cta-button = Go back

## Breach overview page

all-breaches-headline-3 = Data Breach Database
all-breaches-lead = We monitor all known data breaches to find out if your personal information was compromised. Here’s a complete list of all of the breaches that have been reported since 2007.
search-breaches = Search Breaches

# the kind of user data exposed to hackers in data breach.
exposed-data = Exposed data:

## Public breach detail page

find-out-if-2 = Find out if you were involved in this breach
find-out-if-description = We’ll help you quickly see if your email address was exposed in this breach, and understand what to do next.

breach-detail-cta-signup = Check for breaches

loading-accessibility = Loading
