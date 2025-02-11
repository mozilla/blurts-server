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
-brand-fxa = Firefox Taqoya'l
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##

error-not-subscribed = Man rutz'ib'an ta rub'i' re rochochib'al taqoya'l re' { -product-name }.
error-hibp-throttled = K'ïy taq rokem ri { -brand-HIBP }.
error-hibp-connect = Xsach toq nok pa { -brand-HIBP }.
user-add-invalid-email = Man okel ta ri Taqoya'l
user-add-too-many-emails = Nanik'oj ronojel ri taq taqoya'l ya'on q'ij.
user-add-duplicate-email = Xtz'aqatisäx yan re taqoya'l re' { -product-name }.
user-verify-token-error = K'atzinel ri rutoken jikib'anïk.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Tz'ilan taq tzij:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Kitz'ilanik tzij ya'on ruma { $hibp-link }
show-all = Tik'ut ronojel
sign-out = Katel pa Molojri'ïl
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Tinuk'samajïx { -brand-fxa }
# Link title
preferences = Taq ajowab'äl
# Link title
home = Tikirib'äl
# Link title
security-tips = Jikom taq Na'oj
# Link title
more-about-this-breach = Ch'aqa' chik chi rij re tz'ilanem re'
monitor-several-emails = Ke'anik'oj k'ïy taq taqoya'l
website-breach = Rutz'ilanem Ajk'amaya'l Ruxaq
sensitive-breach = K'ayewl Rutz'ilanem Ajk'amaya'l Ruxaq
data-aggregator-breach = Rutz'ilanem Kitz'aqatisaxik Tzij
what-data = Achike taq tzij xetz'iläx:
sensitive-sites = ¿Achike rub'anikil nub'än { -product-name } chi ke ri k'ayew taq ruxaq?
sensitive-sites-copy =
    { -product-name } xa xe yeruk'üt pe ri kib'i' taq taqoya'l kiximon ki' kik'in re
    ruwäch taq tz'ilanem chi rij nijikib'äx jun rochochib'al taqoya'l. Re re' nub'ij chi ja chi xa xe
    rat yatz'eto' we ri awetamab'al xtz'iläx (man ke ta ri' we k'o jun chik ri nitikïr noka pa ri rub'i' ataqoya'l).
delayed-reporting-headline = ¿Achike ruma yalan xyoke' richin xuya' rutzijol re tz'ilanem re'?
delayed-reporting-copy =
    K'o re' nik'o k'ïy ik' o juna' chuwäch ri wujil xek'ut
    pa jun kitz'ilanem tzij niwachin pa jun q'equ'm ajk'amaya'l. Yetz'aqatisäx ri taq tz'ilanem pan rucholxe'el qatzij
    toq ye'ilitäj chuqa' yenik'öx.
fxm-warns-you =
    { -product-name } nuya' rutzijol chawe we ri rub'i' ataqoya'l pa k'amab'ey xetz'iläx pa jun
    kichayuxik tzij.  Tawila' we xtz'iläx ri taq atzij, Tawetamaj 
    ye'achajij ri kib'i' ataqoya'l pa k'amab'ey, chuqa' tak'ulu' rutzijol we ri rochochib'al ataqoya'l
    niwachin pa jun k'ak'a' tz'ilanem.
what-is-data-agg = ¿Achike ri jun tz'aqatisanel tzij?
what-is-data-agg-blurb =
    Ri tz'aqatisanel taq tzij o ri yesamajin taq tzij, yekikanoj taq na'oj aj winäq
    kitz'ib'anik chuqa' yekilöq' chi ke ri ajk'ayij moloj. Yekimöl ri taq tzij ri' richin yekik'ayij chi ke taq moloj
    nikib'än ch'akoj chi kij. Ri yetz'iläx jub'a' xtikina' xkeq'ol rik'in ri kipwaq,
    xa xe chi ri ajjak pa ruwi' kematz'ib' yetikïr yekokisaj ri taq tzij ri' richin nikipo' ki' rik'in ri' o chuqa' yewachin rik'in ri b'i'aj ri'.
avoid-personal-info = Man tawokisaj awetamab'al pa ewan taq tzij
send-verification = Titaq Ruximonel Jikib'anïk
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Ruch'utitzijol Tz'ilanem

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Ewan tzij k'utun pa ronojel taq  tz'ilanem
       *[other] Ewan taq tzij ek'utun pa ronojel taq tz'ilanem
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Tz'ilanem tzij etaman ruwäch, xkik'üt ri awetamab'al.
       *[other] Taq tz'ilanem tzij etaman kiwäch, xkik'üt ri awetamab'al.
    }
what-is-a-website-breach = ¿Achike ri jun rutz'ilanem ajk'amaya'l ruxaq?
website-breach-blurb =
    Jun ajk'amaya'l ruxaq xtz'iläx toq ri ajk'amaya'l eleq'oma' ye'eleq', yewachib'en o yek'ut
    ketamab'al kib'i' taqoya'l pa k'amab'ey. Re re' nuk'üt chi ri ajk'amaya'l eleq'oma' nikïl jun lawalïk rujikomal
    ri ajk'amaya'l. Ri taq tz'ilanem chuqa' yek'ulwachitäj toq ri retamab'al rub'i' taqoya'l yetz'iläx ruma jun sachoj.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Chijun rutzijoxkil
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Ri { $breachDate }, { $breachTitle } xuk'ulwachij jun tz'ilanem. Toq xilitäj chuqa' toq xjikib'äx ri tz'ilanem, xtz'aqatisäx pa qacholxe'el richin { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = K'utsamaj
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Tanik'oj ri ximonel xtaq pa { $userEmail } richin nitz'aqatisäx pa { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Xtz'aqatisäx tz'ilanem:
# Section headline
rec-section-headline = Achike nib'an rik'in re tz'ilanem re'
rec-section-subhead = Niqachilab'ej chawe chi tab'ana' ke re' richin ütz kek'oje' ri awetamab'al chuqa' richin nachajij ri kematz'ib'il ab'anikil.
# Section headline
rec-section-headline-no-pw = Achike nab'än richin nachajij ri awetamab'al
rec-section-subhead-no-pw = Estape' man xetz'iläx ta re ta ewan tzij re', k'o ri k'o chi nab'än richin nachajij ri awetamab'al.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = K'ak'a'

##


## Search Engine Optimization


## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Tatikirisaj molojri'ïl

## Site navigation


## User menu


## Footer

mozilla = { -brand-mozilla }
github = { -brand-github }

## Error page

error-page-error-404-cta-button = Titzolin

## Breach overview page

search-breaches = Kekanöx taq Tz'ilanem

## Public breach detail page


## Firefox Monitor -> Mozilla Monitor rebrand banner

