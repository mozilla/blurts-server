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
-brand-fxa = Amiḍan Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Tasbeddit Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Tansa-a imayl ur tettwajerred ara ar yilɣa { -product-name }.
error-hibp-throttled = Ddeqs n tuqqniwin ar { -brand-HIBP }.
error-hibp-connect = Tuccḍa deg tuqqna ar { -brand-HIBP }.
user-add-invalid-email = Yir imayl
user-add-too-many-emails = Aql-ak tessefrakeḍ amḍan afellay n tansiwin n yimayl.
user-add-duplicate-email = Imayl-a yettwarna yakan ɣer { -product-name }.
user-verify-token-error = Ajiṭun n usentem ilaq.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Isefka yettwakren:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Isefka seg trewliwin yemgaraden i d-yefka { $hibp-link }
show-all = Sken akk
sign-out = Ffeɣ
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Sefrek { -brand-fxa }
# Link title
preferences = Ismenyifen
# Link title
home = Asebter agejdan
# Link title
security-tips = Iwellihen ɣef tɣellist
# Link title
more-about-this-breach = Ugar ɣef trewla-a
monitor-several-emails = Ɛass ddeqs n tansiwin imayl
website-breach = Tarewla n yismal web
sensitive-breach = Tarewla n yismal web iweɛren
data-aggregator-breach = Tarewla n yinegmaren n yisefka
what-data = Acu-ten yisefka ittuḥazen:
sensitive-sites = Amek isesfer { -product-name } ismal iweɛren?
sensitive-sites-copy = { -product-name } yemmal-d imiḍanen icudden ɣer wanaw-a n trewla n yisefka ma yella yiwet kan n tansa tettwasenqed. Ayagi yemmal-d d akken d kečč kan i yeẓran ma yella isefka-ik ttuḥuzan neɣ ala deg trewla-a (ala ma kan ɣur-s anekcum-nniḍen ɣer umiḍan-ik n yimayl).
delayed-reporting-headline = Acuɣer yewwi aṭas n wakud akken ad tettwammel tarewela-a n yisefka?
delayed-reporting-copy = Ayagi daɣen yezmer ad yawi ddeqs n wagguren neɣ iseggasen akken isulayen ittuḥazen deg trewla n yisefka ad banen deg darkweb. Tirewliwin ad ttwarnunt ɣer taffa-nneɣ n yisefka akken kan ad ttwafent daɣen ad ttwasneqdent.
fxm-warns-you = { -product-name } ad k-id-yelɣu ma yella tansa-ik imayl teddad-d deg trewla n yisefka. Wali ma yella tḥuza-k trewla, issin amek ara tḥerzeḍ imiḍanen-ik daɣen rmes alɣu ma yella tansa-ik tban-d deg trewla-nniden n yisefka.
what-is-data-agg = D acu-t ugemmar n yisefka?
what-is-data-agg-blurb = Inegmaren n yisefka, neɣ ileqqaḍen n yisefka, leqqḍen isefka izuyaz neɣ ttaɛen-d isefka ɣer tkebbaniyin. Jemɛen isefka akken ad ten-nzenzen i tkebbaniyin akken ad ten-sqedcent deg udellel. Wid ḥuzant trewliwin-a n yisefka, ur ten-teɛna ara akka s umata tkerḍa n yisefka icudden ɣer tedrimt, maca imakaren imsenselkamen n yisefka zemren ad sqedcen timagit-nsen neɣ ad nadin fell-asen.
avoid-personal-info = Ur seqdac ara talɣut tudmawant deg waalen uffiren
send-verification = Ales tuzna n useɣwen n usentem
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Agzul ɣef trewla n yisefka

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Awal uffir i ḥuzant trewliwin n yisefka
       *[other] Awalen uffiren i ḥuzant trewliwin n yisefka
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Tarewla n yisefka yettwassnen tḥuza talɣut-ik
       *[other] tirewliwin n yisefka yettwassnen ḥuzant talɣut-ik
    }
what-is-a-website-breach = D acu-tt trewla n yisefka n usmel web?
website-breach-blurb = Tarewla n yisefka n usmel web tḍerru-d ticki imakaren imsenselkamen ttakren, neɣɣlen neɣ seqdacen talɣut tudmawant n yimiḍanen srid. Aya iḍerru-d s umata ticki imakaren ufan-d abrid akken ad ṛzen taɣellist n usmel web. Tirewliwin zemrent daɣen ad d-ḍrunt ticki talɣut n umiḍan teffeɣ-d s wudem azayez.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Agzul
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Deg { $breachDate }, { $breachTitle } yerwel. Ticki tarewla tettwaf daɣen tettwasenqed, tettwasna ɣer taffa-nneɣ n yisefka deg { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Umuɣ
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Senqed aseɣwen yettwaznen ɣer { $userEmail } akken ad ternuḍ-t ɣef { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Tarewla n yisefka tettwarna:
# Section headline
rec-section-headline = Acu arar xedmeɣ i trewla-a n yisefka
rec-section-subhead = Ad k-nwelleh ad txedmeḍ kra i ummesten n telɣut-ik tudmawant akked timagit-ik timḍint.
# Section headline
rec-section-headline-no-pw = Acu ara txedmeḍ i ummesten n yisefka-ik udmawanen
rec-section-subhead-no-pw = Xas akken awalen uffiren ur llin ara deg trewla-a n yisefka, tzemreḍ ad tgeḍ kra akken ad tmesneḍ ugar talqut-ik tudmawant.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Amaynut

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Amiḍan n Mozilla
open-in-new-tab-alt = Ldi aseɣwen deg yiccer amaynut

## Search Engine Optimization


## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Kcem
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Umuɣ agejdan
main-nav-button-collapse-label = Fneẓ umuɣ
main-nav-button-collapse-tooltip = Fneẓ umuɣ
main-nav-button-expand-label = Snefli umuɣ
main-nav-button-expand-tooltip = Snefli umuɣ
main-nav-label = Tunigin
main-nav-link-home-label = Asebter agejdan
main-nav-link-dashboard-label = Tafelwit n usenqed
main-nav-link-settings-label = Iɣewwaren
main-nav-link-faq-label = Isteqsiyen FAQ
main-nav-link-faq-tooltip = Isteqsiyen i d-yettuɣalen s waṭas.

## User menu

user-menu-trigger-label = Ldi umuɣ n useqdac
user-menu-trigger-tooltip = Amaɣnu
user-menu-manage-fxa-label = Sefrek { -brand-mozilla-account }
user-menu-settings-label = Iɣewwaṛen
user-menu-settings-tooltip = Sbadu { -brand-mozilla-monitor }
user-menu-help-label = Tallalt
user-menu-help-tooltip = Awi tallalt i useqdec n { -brand-mozilla-monitor }
user-menu-signout-label = Ffeɣ
user-menu-signout-tooltip = Ffeɣ deg { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Tiwtilin n useqdec
privacy-notice = Tasertit n tbaḍnit
github = { -brand-github }
footer-nav-recent-breaches = Tarewla tamaynut n yisefka
footer-external-link-faq-label = Isteqsiyen FAQ
footer-external-link-faq-tooltip = Isteqsiyen i d-yettuɣalen s waṭas.

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } - asebter ur yettwaf ara
error-page-error-404-cta-button = Uɣal
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } yella wayen ur nteddu ara

## Breach overview page

all-breaches-headline-3 = Taffa n yisefka n trewla n yisefka
search-breaches = Nadi tirewliwin n yisefka

## Public breach detail page

breach-detail-cta-signup = Senqed tarewla n yisefka

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-dismiss-button-label = IH
banner-monitor-rebrand-dismiss-button-tooltip = Zgel
loading-accessibility = Asali
