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
-brand-solo-ai = Solo AI

##

error-not-subscribed = Den här e-postadressen prenumererar inte på { -product-name }.
user-add-invalid-email = Ogiltig e-postadress
user-add-too-many-emails = Du övervakar det maximala antalet e-postadresser.
user-add-duplicate-email = Det här e-postadressen har redan lagts till i { -product-name }.
user-add-verification-email-just-sent = Ett annat verifieringsmeddelande kan inte skickas så här snabbt. Försök igen senare.
user-add-unknown-error = Något gick fel när ytterligare en e-postadress skulle läggas till. Försök igen senare.
user-delete-unknown-error = Något gick fel när en e-postadress skulle tas bort. Försök igen senare.
user-verify-token-error = Verifieringstecken är obligatoriskt.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Berörd data:
# Link title
more-about-this-breach = Mer om detta intrång
what-data = Vilka data har äventyrats:
delayed-reporting-headline = Varför tog det så lång tid att anmäla detta intrång?
delayed-reporting-copy =
    Det kan ibland ta några månader eller år för uppgifter
    i ett dataintrång att synas på dark web. Intrång läggs till i vår databas så
    snart som de har upptäckts och verifierats.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Översikt
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Den { $breachDate }, hade { $breachTitle } ett intrång. När intrånget upptäcktes och verifierades lades det till vår databas den { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Intrång tillagt:
# Section headline
rec-section-headline = Vad du ska göra för detta intrång
rec-section-subhead = Vi rekommenderar att du vidtar dessa steg för att skydda din personliga information och skydda din digitala identitet.
# Section headline
rec-section-headline-no-pw = Vad du ska göra för att skydda din personliga information
rec-section-subhead-no-pw = Även om lösenord inte avslöjades i detta intrång, finns det fortfarande åtgärder du kan vidta för att bättre skydda din personliga information.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-konto
open-in-new-tab-alt = Öppna länk i ny flik

## Search Engine Optimization

meta-desc-2 = Ta reda på om du har varit en del av ett dataintrång med { -brand-fx-monitor }. Vi hjälper dig att förstå vad du ska göra härnäst och övervakar kontinuerligt efter eventuella nya intrång.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Logga in
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Huvudmeny
main-nav-button-collapse-label = Fäll ihop meny
main-nav-button-collapse-tooltip = Fäll ihop meny
main-nav-button-expand-label = Expandera meny
main-nav-button-expand-tooltip = Expandera meny
main-nav-label = Navigering
main-nav-link-home-label = Hem
main-nav-link-dashboard-label = Översikt
main-nav-link-settings-label = Inställningar
main-nav-link-faq-label = Vanliga frågor
main-nav-link-faq-tooltip = Vanliga frågor

## User menu

user-menu-trigger-label = Öppna användarmeny
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Hantera ditt { -brand-mozilla-account }
user-menu-settings-label = Inställningar
user-menu-settings-tooltip = Konfigurera { -brand-mozilla-monitor }
user-menu-help-label = Hjälp och support
user-menu-help-tooltip = Få hjälp med att använda { -brand-mozilla-monitor }
user-menu-signout-label = Logga ut
user-menu-signout-tooltip = Logga ut från { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Användarvillkor
privacy-notice = Sekretessmeddelande
github = { -brand-github }
footer-nav-recent-breaches = Senaste dataintrång
footer-external-link-faq-label = Vanliga frågor
footer-external-link-faq-tooltip = Vanliga frågor

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } sidan hittades inte
error-page-error-404-copy = Vi är ledsna, sidan du letar efter finns inte längre.
error-page-error-404-cta-button = Gå tillbaka

## Breach overview page

all-breaches-headline-3 = Databas för dataintrång
all-breaches-lead = Vi övervakar alla kända dataintrång för att ta reda på om din personliga information har äventyrats. Här är en komplett lista över alla överträdelser som har rapporterats sedan 2007.
search-breaches = Sök intrång
# the kind of user data exposed to hackers in data breach.
exposed-data = Exponerad data:

## Public breach detail page

find-out-if-2 = Ta reda på om du var inblandad i detta intrång
find-out-if-description = Vi hjälper dig att snabbt kontrollera om din e-postadress har varit inblandad i detta intrång och hur du ska gå vidare.
breach-detail-cta-signup = Sök efter intrång
loading-accessibility = Laddar
