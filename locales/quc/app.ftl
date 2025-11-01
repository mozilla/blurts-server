# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##

error-not-subscribed = We kemriqonib'al man tz'ib'am ta pa { -product-name }
error-hibp-throttled = Sib'alaj k'i t'iqonem pa { -brand-HIBP }.
error-hibp-connect = K'axk'olil rech t'iq'onem pa { -brand-HIBP }.
user-add-invalid-email = Taqoqxa'n man utz taj
user-add-too-many-emails = Ktajin kawilawachij le nimalaj rajilab'alil kemriqonib'al rech taqoqxa'n.
user-add-duplicate-email = We taqoqxa'n ya'om chi pa { -product-name }.
user-verify-token-error = Kajawataj uq'atuxik token.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Taq juq'attzij k'o retztaqan chi rij:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Taq juq'attzij rech retztaqan ya'om rumal { $hibp-link }
show-all = Uk'utik ronojel
sign-out = Utz'apixik kemchak
# Link title
preferences = Taq ajawatajem
# Link title
home = Majib'al
# Link title
security-tips = Taq no'jib'al rech chajib'al
# Link title
more-about-this-breach = Nik'aj chi q'alajisanem chi rij we retztaqan
monitor-several-emails = Che'awilawachij k'ialaj taq taq'oqxa'n
website-breach = Retztaqan rech uk'olib'al web'
sensitive-breach = Na'b'alil retztaqan rech taq uk'olib'al web'
data-aggregator-breach = Retztaqan rech ya'l taq juq'attzij.
what-data = Jachike taq juq'attzij xkib'an k'amq'ab':
sensitive-sites = Jas kub'an { -product-name } chech  taq wokk'olib'al rech na'b'alil
sensitive-sites-copy = { -product-name } xew kuk'ut kemb'i'aj le uximom rib' ruk' uwach taq retztaqan are taq kq'atutaj kemriqonib'al rech taqoqxa'nib'al. Are wa' kub'ij xew at  katkowinik kawilo we xk'oji' le aq'alajisanem pa retztaqan (xew we k'o alachinaq le k'o rokem pa le akemb'i'aj rech taqoqxa'nib'al).
delayed-reporting-headline = ¿Jasche naj kuk'am uwoktzijob'exik we retztaqan?
delayed-reporting-copy = K'or kuk'am jampa' ik' on jampa junab' are chi kk'utuk uk'axk'olil rech q'alajisab'al pa jun retztaqan rech uq'eqal web'. Le taq retztaqan aninaqil ke'eya' pa le mulib'al juq'attzij are taq ke'eriqitajik chi'l ke'eq'atutajik.
fxm-warns-you = { -product-name } kuya' ub'ixik chi awech we xk'oji' le akemriqonib'al rech taqoqxa'nib'al pa uk'axk'olil pa jun retztaqan pa nimk'atz. Chawila' we xk'oji' le aq'alajisam pa jun uk'axk'olil, chaweta'maj jas kb'an chech utz uchajixik le taq akemb'i'aj pa nimk'atz, chi'l chariqa' na'tajisanem we kk'utun le akemriqonib'al rech taqoqxa'nib'al pa jun k'ak' retztaqan.
what-is-data-agg = ¿Jas uwach ri' jun ya'l juq'attzij?
what-is-data-agg-blurb = Le taq ya'l juq'attzij o taq mulinel taq juq'attzij, kkimuluj q'alajisanem kech uk'iyal taq cholajib'al chi'l kkiloq chi kech e nik'aj chi k'aywokaj, kkimulij we taq juq'attzij k'ate k'u ri' kkik'ayij chi kech e nik'aj chi k'aywokaj chech ub'anik taq k'ayinem. Le taq e riqol uk'axal rech taq we retztaqan man qas ta e k'o pa uk'eyowal chech uriqik uk'axal rech pwaqilal. Sub'unem, xa  k'ut le taq b'ank'ax wene kkikoj we juq'attzij chech kijalwachixik.
avoid-personal-info = Makoj winaqilal q'alajisanem pa taq retokib'al
send-verification = Chataqa' jun kemriqonib'al rech q'atub'al
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Nitz'arisanem rech retztaqan

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] retokib'al k'o pa uk'axk'olil pa ronojel taq retztaqan
       *[other] taq retokib'al k'o pa uk'axk'olil pa ronojel taq retztaqan
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Le retztaqan rech juq'attzij le eta'matalik uya'om le aq'alajisanem pa uk'axk'olil
       *[other] Le taq retztaqan rech juq'attzij le eta'matalik uya'om le aq'alajisanem pa uk'axk'olil
    }
what-is-a-website-breach = ¿Jas uwach ri' jun retztaqan rech uk'olib'al web'?
website-breach-blurb = Kxajtaj jun retztaqan rech juq'attzij rech uk'olib'al web' are taq le ekemelaq'omab' ke'elaq'anik, on kkelesaj uwach on kkiya' winaqilal q'alajisanem pa taq kemb'i'aj rech nimk'atz, Are wa' jun uwachinem kech taq e b'ank'ax are taq kkiriq jun uk'olib'al web' le man k'o ta uchuq'ab'. Le taq retztaqan xuquje' kxajtajik are taq kq'alajisax  le q'alajisanem le man chub'anik taj.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Nitz'arisanem
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Pa { $breachDate }. { $breachTitle } xb'an retztaqan. Are taq xriqitaj le retztaqan chi'l xq'atutajik. xya'taj pa le mulib'al juq'attzij pa { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Cholokib'al
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Chaq'atuj le kemwiqb'al taqom pa { $userEmail }chech uya'ik pa { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Retztaqan ya'talik:
# Section headline
rec-section-headline = Jas kb'an chech we retztaqan
rec-section-subhead = Kqaya' u
# Section headline
rec-section-headline-no-pw = Jan kb'an chech uchajixik le awinaqilal q'alaljisanem
rec-section-subhead-no-pw = Pine man xe'ek'oji' ta taq retokib'al pa uk'axk'olil pa we retztaqan, k'a k'o na taq ucholajil le utz kab'ano chech qas utz uchajixik le awinaqilal q'alajisanem.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = K'ak'

## Header

sign-in = Umajixik kemchak

## Breach overview page

search-breaches = Taq retztaqan rech tzukunem
