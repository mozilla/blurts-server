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
user-add-invalid-email = Ugyldig mailadresse
user-add-too-many-emails = Du overvåger det maksimale antal mailadresser.
user-add-duplicate-email = Denne mailadresse er allerede føjet til { -product-name }.
user-add-verification-email-just-sent = En bekræftelsesmail til kan ikke sendes igen så kort tid efter. Prøv igen senere.
user-add-unknown-error = Der opstod et problem med at tilføje en mailadresse til. Prøv igen senere.
user-delete-unknown-error = Der opstod et problem med at fjerne en mailadresse. Prøv igen senere.
user-verify-token-error = Der kræves et bekræftelses-token.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitterede data:
# Link title
more-about-this-breach = Mere om denne datalæk
what-data = Hvilke data blev kompromitteret:
delayed-reporting-headline = Hvorfor tog det så lang tid at rapportere denne datalæk?
delayed-reporting-copy =
    Det kan nogle gange tage måneder eller år, før data involveret 
    i datalæk dukker op på websteder, der bruges af kriminelle. Datalæk bliver føjet til
    vores database, så snart de opdages og er blevet verificeret.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Oversigt
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Den { $breachDate } blev { $breachTitle } udsat for en datalæk. Da datalækken blev opdaget og bekræftet, blev den føjet til vores database den { $addedDate }.

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
loading-accessibility = Indlæser
