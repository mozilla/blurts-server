# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
       *[indefinite-article]
            { $capitalization ->
               *[lower] cont Firefox
                [upper] Cont Firefox
            }
        [definite-article]
            { $capitalization ->
               *[lower] contul Firefox
                [upper] Contul Firefox
                [upper-and-you] Contul tău Firefox
            }
        [genitive-or-dative]
            { $capitalization ->
               *[lower] contului Firefox
            }
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

error-could-not-add-email = Adresa de e-mail nu a putut fi adăugată în baza de date.
error-not-subscribed = Această adresă de e-mail nu este abonată la { -product-name }.
error-hibp-throttled = Prea multe conexiuni la { -brand-HIBP }.
error-hibp-connect = Eroare de conectare la { -brand-HIBP }.

user-add-invalid-email = E-mail nevalid
user-add-too-many-emails = Monitorizezi numărul maxim de adrese de e-mail.
user-add-duplicate-email = Acest e-mail a fost deja adăugat în { -product-name }.

user-verify-token-error = Este necesar un jeton de verificare.

user-unsubscribe-token-error = Este necesar un jeton pentru dezabonare.
user-unsubscribe-token-email-error = Este necesar un jeton și emailHash pentru dezabonare.

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Date compromise:

# Breach data provided by Have I Been Pwned.
hibp-attribution = Datele privind încălcările securității datelor sunt furnizate de { $hibp-link }

show-all = Afișează toate

sign-out = Deconectare

# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionează { -brand-fxa(case: "definite-article") }.

# Link title
frequently-asked-questions = Întrebări adresate frecvent

# Link title
preferences = Preferințe

# Link title
home = Acasă

# Link title
security-tips = Ponturi de securitate

# Link title
more-about-this-breach = Mai multe despre această încălcare

monitor-several-emails = Monitorizează mai multe adrese de e-mail

website-breach = Încălcare în cazul unui site web
sensitive-breach = Încălcare în cazul unui site web sensibil
data-aggregator-breach = Încălcare în cazul unui agregator de date

what-data = Ce date au fost compromise:

sensitive-sites = Cum tratează { -product-name } site-urile cu date sensibile?
sensitive-sites-copy =
    { -product-name } divulgă conturile asociate cu aceste 
    tipuri de încălcări ale securității datelor numai după ce a fost verificată o adresă de e-mail. Acest lucru înseamnă că ești 
    singura persoană care poate vedea dacă informațiile tale au fost implicate în această încălcare a securității datelor 
    (dacă nu cumva și altcineva are acces la contul tău de e-mail).

delayed-reporting-headline = De ce a durat atât de mult să se raporteze această încălcare a securității datelor?
delayed-reporting-copy = Uneori, poate dura luni sau ani ca datele de autentificare expuse într-o încălcare a securității datelor să apară pe webul întunecat. Încălcările sunt adăugate în baza noastră de date imediat ce sunt descoperite și verificate.

fxm-warns-you = { -product-name } te avertizează dacă adresa ta de e-mail a fost expusă într-o încălcare online a securității datelor. Vezi dacă ți-au fost expuse informațiile, află cum să îți protejezi mai bine conturile online și primește alerte în cazul în care adresa ta de e-mail apare într-o încălcare nouă.

what-is-data-agg = Ce sunt agregatoarele de date?
what-is-data-agg-blurb = Agregatoarele de date, denumite și brokeri de date, colectează informații din înregistrări publice și cumpără date de la alte companii. Ele compilează aceste date și le vând altor companii în scopuri de marketing. Probabilitatea ca victimele acestor încălcări a securității datelor să devină victime ale fraudelor financiare este mică, dar hackerii pot folosi datele pentru a le uzurpa identitatea sau pentru profilare.

avoid-personal-info = Evită folosirea de informații personale în parole

## What to do after data breach tips

send-verification = Trimite linkul de verificare

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Rezumatul încălcării securității datelor

## Variables:
##   $userName (String) - Username

##

breach-alert-subject = { -product-name } ți-a găsit adresa de e-mail într-o nouă încălcare a securității datelor


## Variables:
##   $breachName (String) - Number of the breach

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] parolă expusă în toate încălcările securității datelor
        [few] parole expuse în toate încălcările securității datelor
       *[other] de parole expuse în toate încălcările securității datelor
    }

# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] încălcare cunoscută a securității datelor ți-a expus informațiile
        [few] încălcări cunoscute ale securității datelor ți-au expus informațiile
       *[other] de încălcări cunoscute ale securității datelor ți-au expus informațiile
    }

what-is-a-website-breach = Ce este o încălcare a securității datelor în cazul unui site web?
website-breach-blurb = O încălcare a securității datelor în cazul unui site web apare atunci când infractorii cibernetici fură, copiază sau expun informații cu caracter personal din conturi online. Adesea sunt rezultatul identificării de către hackeri a unui punct slab în securitatea unui site web. Încălcările pot însemna și divulgarea accidentală a datelor aferente conturilor.


# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Prezentare generală

# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Pe { $breachDate }, { $breachTitle } a suferit o încălcare a securității datelor. Odată ce încălcarea a fost descoperită și verificată, aceasta a fost adăugată în baza noastră de date la data de { $addedDate }.

# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Meniu

# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Verifică linkul trimis către { $userEmail } ca să îl adaugi în { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Încălcare adăugată:

# Section headline
rec-section-headline = Ce să faci pentru această încălcare a securității datelor
rec-section-subhead = Îți recomandăm să efectuezi următorii pași pentru a-ți păstra informațiile personale în siguranță și pentru a-ți proteja identitatea digitală.

# Section headline
rec-section-headline-no-pw = Ce să faci pentru a-ți proteja informațiile personale
rec-section-subhead-no-pw = Deși nu au fost expuse parole în această încălcare a securității datelor, mai sunt câteva măsuri pe care le poți lua pentru a-ți proteja mai bine informațiile personale.

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

##


## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nou

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

## Relay and VPN educational/ad units

# Monitor V2


## The following messages are brands and should be kept entirely in English


-brand-mozilla-vpn = Mozilla VPN

##

##

##

##

## Updated error messages


## Search Engine Optimization


## Header

sign-in = Autentificare

## Site navigation

## User menu

## Footer

## Error page

## Breach overview page

search-breaches = Caută încălcări ale securității datelor

## Public breach detail page

## Floating banner

## Firefox Monitor -> Mozilla Monitor rebrand banner

