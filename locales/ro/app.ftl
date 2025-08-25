# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
        [definite-article]
            { $capitalization ->
                [upper] Contul Firefox
                [upper-and-you] Contul tău Firefox
               *[lower] contul Firefox
            }
        [genitive-or-dative]
            { $capitalization ->
               *[lower] contului Firefox
            }
       *[indefinite-article]
            { $capitalization ->
                [upper] Cont Firefox
               *[lower] cont Firefox
            }
    }
-brand-pocket = Pocket
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

##

error-not-subscribed = Această adresă de e-mail nu este abonată la { -product-name }.
error-hibp-throttled = Prea multe conexiuni la { -brand-HIBP }.
error-hibp-connect = Eroare de conectare la { -brand-HIBP }.
user-add-invalid-email = E-mail nevalid
user-add-too-many-emails = Monitorizezi numărul maxim de adrese de e-mail.
user-add-duplicate-email = Acest e-mail a fost deja adăugat în { -product-name }.
user-add-verification-email-just-sent = Un alt mesaj de verificare pe e-mail nu poate fi trimis atât repede. Te rugăm să încerci din nou mai târziu.
user-add-unknown-error = A apărut o eroare la adăugarea unei alte adrese de e-mail. Te rugăm să încerci din nou mai târziu.
user-delete-unknown-error = A apărut o eroare la eliminarea unei adrese de e-mail. Te rugăm să încerci din nou mai târziu.
user-verify-token-error = Este necesar un jeton de verificare.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Date compromise:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Datele privind încălcările securității datelor sunt furnizate de { $hibp-link }
show-all = Afișează toate
sign-out = Deconectare
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionează { -brand-fxa(case: "definite-article") }.
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
delayed-reporting-copy = Uneori, poate dura luni sau ani ca credențialele expuse într-o încălcare a securității datelor să apară pe dark web. Încălcările sunt adăugate în baza noastră de date imediat ce sunt descoperite și verificate.
fxm-warns-you = { -product-name } te avertizează dacă adresa ta de e-mail a fost expusă într-o încălcare online a securității datelor. Vezi dacă ți-au fost expuse informațiile, află cum să îți protejezi mai bine conturile online și primește alerte în cazul în care adresa ta de e-mail apare într-o încălcare nouă.
what-is-data-agg = Ce sunt agregatoarele de date?
what-is-data-agg-blurb = Agregatoarele de date, denumite și brokeri de date, colectează informații din înregistrări publice și cumpără date de la alte companii. Compilează aceste date și le vând altor companii în scopuri de marketing. Probabilitatea ca victimele acestor încălcări ale securității datelor să devină victime ale fraudelor financiare este mică, dar hackerii pot folosi datele ca să le uzurpe identitatea sau pentru profilare.
avoid-personal-info = Evită folosirea de informații personale în parole
send-verification = Trimite linkul de verificare
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Rezumatul încălcării securității datelor

##

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
# Variables:
#   $userEmail (String) - User email address
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

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nou

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Cont Mozilla
open-in-new-tab-alt = Deschide linkul într-o filă nouă

## Search Engine Optimization

meta-desc-2 = Află dacă ai fost implicat(ă) într-o încălcare a securității datelor cu { -brand-fx-monitor }. Te vom ajuta să înțelegi ce să faci în continuare și să monitorizăm continuu orice încălcări noi ale securității datelor.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Autentificare
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Meniu principal
main-nav-button-collapse-label = Restrânge meniul
main-nav-button-collapse-tooltip = Restrânge meniul
main-nav-button-expand-label = Extinde meniul
main-nav-button-expand-tooltip = Extinde meniul
main-nav-label = Navigare
main-nav-link-home-label = Acasă
main-nav-link-dashboard-label = Tablou de bord
main-nav-link-settings-label = Setări
main-nav-link-faq-label = Întrebări frecvente
main-nav-link-faq-tooltip = Întrebări adresate frecvent

## User menu

user-menu-trigger-label = Deschide meniul utilizatorului
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Gestionează { -brand-mozilla-account }
user-menu-settings-label = Setări
user-menu-settings-tooltip = Configurează { -brand-mozilla-monitor }
user-menu-help-label = Ajutor și asistență
user-menu-help-tooltip = Obține ajutor folosind { -brand-mozilla-monitor }
user-menu-signout-label = Ieși din cont
user-menu-signout-tooltip = Ieși din contul { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Condiții de utilizare a serviciilor
privacy-notice = Notificare privind confidențialitatea
github = { -brand-github }
footer-nav-recent-breaches = Încălcări recente de securitate a datelor
footer-external-link-faq-label = Întrebări frecvente
footer-external-link-faq-tooltip = Întrebări adresate frecvent

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Pagina nu a fost găsită
error-page-error-404-copy = Ne pare rău, pagina pe care o cauți nu mai există.
error-page-error-404-cta-button = Înapoi
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } A apărut o eroare

## Breach overview page

all-breaches-lead = Monitorizăm toate încălcările cunoscute ale securității datelor pentru a afla dacă au fost compromise datele tale cu caracter personal. Iată o listă completă a tuturor încălcărilor securității informațiilor care au fost raportate din 2007.
search-breaches = Caută încălcări ale securității datelor
# the kind of user data exposed to hackers in data breach.
exposed-data = Date expuse:

## Public breach detail page

find-out-if-2 = Află dacă ai fost implicat în această încălcare a securității datelor
find-out-if-description = Te vom ajuta să vezi rapid dacă adresa ta de e-mail a fost expusă în această încălcare a securității datelor și să înțelegi ce trebuie să faci în continuare.
breach-detail-cta-signup = Caută încălcări ale securității datelor

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nume nou, aspect și chiar mai multe modalități de a <b> relua controlul asupra vieții tale private</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Respinge
