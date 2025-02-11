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
-brand-fxa = Firefox-konto
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

error-not-subscribed = Denne mailadresse er ikke tilmeldt { -product-name }.
error-hibp-throttled = For mange forbindelser til { -brand-HIBP }.
error-hibp-connect = Kan ikke forbinde til { -brand-HIBP }.
user-add-invalid-email = Ugyldig mailadresse
user-add-too-many-emails = Du overvåger det maksimale antal mailadresser.
user-add-duplicate-email = Denne mailadresse er allerede føjet til { -product-name }.
user-add-verification-email-just-sent = En bekræftelsesmail til kan ikke sendes igen så kort tid efter. Prøv igen senere.
user-add-unknown-error = Der opstod et problem med at tilføje en mailadresse til. Prøv igen senere.
user-delete-unknown-error = Der opstod et problem med at fjerne en mailadresse. Prøv igen senere.
user-verify-token-error = Der kræves et bekræftelses-token.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitterede data:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Information om datalæk stammer fra { $hibp-link }
show-all = Vis alle
sign-out = Log ud
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Håndter { -brand-fxa }
# Link title
preferences = Indstillinger
# Link title
home = Hjem
# Link title
security-tips = Sikkerhedstips
# Link title
more-about-this-breach = Mere om denne datalæk
monitor-several-emails = Overvåg flere mailadresser
website-breach = Websteds-datalæk
sensitive-breach = Datalæk på websted med følsomme data
data-aggregator-breach = Datalæk for data-aggregator
what-data = Hvilke data blev kompromitteret:
sensitive-sites = Hvordan behandler { -product-name } websteder, der har følsomme data om sine brugere?
sensitive-sites-copy =
    { -product-name } viser kun konti associeret med denne type af læk, 
    når en mailadresse er bekræftet. Det betyder, at du er den eneste, der kan se, 
    om dine informationer er en del af denne læk (medmindre andre har adgang 
    til din mailkonto).
delayed-reporting-headline = Hvorfor tog det så lang tid at rapportere denne datalæk?
delayed-reporting-copy =
    Det kan nogle gange tage måneder eller år, før data involveret 
    i datalæk dukker op på websteder, der bruges af kriminelle. Datalæk bliver føjet til
    vores database, så snart de opdages og er blevet verificeret.
fxm-warns-you =
    { -product-name } advarer dig, hvis din mailadresse har været involveret 
    i en datalæk. Find ud af, om dine informationer er blevet lækket, lær at tage
    forholdsregler for at beskytte dine konti og få en advarsel, hvis din 
    mailadresse optræder i en ny datalæk.
what-is-data-agg = Hvad er en data-aggregator?
what-is-data-agg-blurb =
    Data-aggregatorer (også kaldet datamæglere) indsamler information fra  
    registre og køber information fra andre virksomheder. De sammenstiller disse data for 
    at sælge dem til virksomheder, der bruger dem i forbindelse med markedsføring. 
    Ofre for disse datalæk er mindre udsatte for økonomisk bedrageri, men 
    hackere kan anvende informationerne til at udgive sig for at være dig, eller de kan profilere dig.
avoid-personal-info = Undgå at bruge personlige informationer i adgangskoder
send-verification = Send bekræftelseslink
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Opsummering af datalæk

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] adgangskode kompromitteret i alle datalæk
       *[other] adgangskoder kompromitteret i alle datalæk
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] kendt datalæk har kompromitteret dine oplysninger
       *[other] kendte datalæk har kompromitteret dine oplysninger
    }
what-is-a-website-breach = Hvad er et websteds-læk?
website-breach-blurb = En datalæk på et websted kan skyldes cyber-kriminelle, der stjæler, kopier eller eksponerer personlig information fra online-konti. Det er som regel resultatet af, at hackere har fundet et svagt punkt i webstedets sikkerhedsforanstaltninger. Datalæk kan også finde sted, når konto-information lækkes ved et uheld.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Oversigt
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Den { $breachDate } blev { $breachTitle } udsat for en datalæk. Da datalækken blev opdaget og bekræftet, blev den føjet til vores database den { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Bekræft linket sendt til { $userEmail } for at føje mailadressen til { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datalæk tilføjet:
# Section headline
rec-section-headline = Hvad skal jeg gøre ved denne datalæk?
rec-section-subhead = Vi anbefaler, at du følger disse forholdsregler til at sikre dine personlige data og beskytte din digitale identitet.
# Section headline
rec-section-headline-no-pw = Hvad skal jeg gøre for at beskytte mine personlige data?
rec-section-subhead-no-pw = Selvom adgangskoder ikke blev kompromitteret i dette datalæk, er der stadig forholdsregler, du kan tage for bedre at beskytte dine personlige data.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Ny

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-konto
open-in-new-tab-alt = Åbn link i et nyt faneblad

## Search Engine Optimization

meta-desc-2 = Brug { -brand-fx-monitor } til at finde ud af, om du er blevet udsat for datalæk. Vi vejleder dig i, hvad du skal gøre - og holder løbende øje med nye datalæk.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Log ind
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Hovedmenu
main-nav-button-collapse-label = Luk menu
main-nav-button-collapse-tooltip = Luk menu
main-nav-button-expand-label = Åbn menu
main-nav-button-expand-tooltip = Åbn menu
main-nav-label = Navigation
main-nav-link-home-label = Hjem
main-nav-link-dashboard-label = Oversigt
main-nav-link-settings-label = Indstillinger
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = Ofte stillede spørgsmål

## User menu

user-menu-trigger-label = Åbn brugermenuen
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Håndter din { -brand-mozilla-account }
user-menu-settings-label = Indstillinger
user-menu-settings-tooltip = Opsæt { -brand-mozilla-monitor }
user-menu-help-label = Hjælp og support
user-menu-help-tooltip = Få hjælp til { -brand-mozilla-monitor }
user-menu-signout-label = Log ud
user-menu-signout-tooltip = Log ud af { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Tjenestevilkår
privacy-notice = Privatlivserklæring
github = { -brand-github }
footer-nav-recent-breaches = Seneste datalæk
footer-external-link-faq-label = Ofte stillede spørgsmål
footer-external-link-faq-tooltip = Ofte stillede spørgsmål

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Siden blev ikke fundet
error-page-error-404-copy = Vi beklager, men siden du leder efter eksisterer ikke længere.
error-page-error-404-cta-button = Gå tilbage
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Noget gik galt

## Breach overview page

all-breaches-headline-3 = Database med datalæk
all-breaches-lead = Vi holder øje med alle kendte datalæk for at finde ud af, om dine personlige oplysninger er blevet kompromitteret. Her er en komplet liste over alle rapporterede datalæk siden 2007.
search-breaches = Søg efter datalæk
# the kind of user data exposed to hackers in data breach.
exposed-data = Berørte data:

## Public breach detail page

find-out-if-2 = Find ud af, om du var involveret i denne datalæk
find-out-if-description = Vi hjælper dig med hurtigt at finde ud af, om din mailadresse blev eksponeret i denne datalæk - og hvad du skal gøre nu.
breach-detail-cta-signup = Undersøg for datalæk

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nyt navn, nyt udseende, og endnu flere måder at <b>beskytte dit privatliv</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Afvis
loading-accessibility = Indlæser
