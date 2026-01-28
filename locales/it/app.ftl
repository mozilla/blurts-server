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

error-not-subscribed = Questo indirizzo email non è iscritto a { -product-name }
user-add-invalid-email = Email non valida
user-add-too-many-emails = Stai controllando il numero massimo di indirizzi email.
user-add-duplicate-email = Questo indirizzo email è già stato aggiunto a { -product-name }.
user-add-verification-email-just-sent = Non è possibile inviare un’altra email di verifica così rapidamente. Riprova più tardi.
user-add-unknown-error = Si è verificato un errore durante l’aggiunta di un altro indirizzo email. Riprova più tardi.
user-delete-unknown-error = Si è verificato un errore durante la rimozione di un indirizzo email. Riprova più tardi.
user-verify-token-error = È richiesto un token di verifica.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dati compromessi:
# Link title
more-about-this-breach = Ulteriori informazioni su questa violazione
what-data = Quali dati sono stati compromessi:
delayed-reporting-headline = Perché ci è voluto così tanto tempo per segnalare questa violazione?
delayed-reporting-copy = A volte possono volerci mesi o anni prima che le credenziali compromesse in una violazione di dati compaiano nel “dark web”. Le violazioni sono aggiunte al nostro database appena vengono scoperte e verificate.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Panoramica
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Il giorno { $breachDate }, { $breachTitle } è stato violato. La violazione è stata aggiunta al nostro database il giorno { $addedDate }, dopo essere stata scoperta e verificata.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Violazione aggiunta:
# Section headline
rec-section-headline = Che cosa fare per questa violazione
rec-section-subhead = Ti consigliamo di adottare queste misure per mantenere le tue informazioni personali al sicuro e proteggere la tua identità digitale.
# Section headline
rec-section-headline-no-pw = Come proteggere le tue informazioni personali
rec-section-subhead-no-pw = Anche se nessuna password è stata compromessa in questa violazione, puoi sempre adottare nuove misure per proteggere meglio le tue informazioni personali.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $capitalization ->
        [uppercase] Account Mozilla
       *[lowercase] account Mozilla
    }
open-in-new-tab-alt = Apri in una nuova scheda

## Search Engine Optimization

meta-desc-2 = Scopri se sei stato coinvolto in una violazione di dati con { -brand-fx-monitor }. Ti aiuteremo a capire i passi successivi da fare e a monitorare costantemente eventuali nuove violazioni.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Accedi
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menu principale
main-nav-button-collapse-label = Comprimi il menu
main-nav-button-collapse-tooltip = Comprimi il menu
main-nav-button-expand-label = Espandi il menu
main-nav-button-expand-tooltip = Espandi il menu
main-nav-label = Navigazione
main-nav-link-home-label = Pagina iniziale
main-nav-link-dashboard-label = Dashboard
main-nav-link-settings-label = Impostazioni
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = Domande più frequenti

## User menu

user-menu-trigger-label = Apri il menu utente
user-menu-trigger-tooltip = Profilo
user-menu-manage-fxa-label = Gestisci il tuo { -brand-mozilla-account }
user-menu-settings-label = Impostazioni
user-menu-settings-tooltip = Configura { -brand-mozilla-monitor }
user-menu-help-label = Guida e supporto
user-menu-help-tooltip = Ricevi assistenza per { -brand-mozilla-monitor }
user-menu-signout-label = Disconnetti
user-menu-signout-tooltip = Esci da { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Condizioni di utilizzo del servizio
privacy-notice = Informativa sulla privacy
github = { -brand-github }
footer-nav-recent-breaches = Violazioni di dati recenti
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = Domande più frequenti

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Pagina non trovata
error-page-error-404-copy = Siamo spiacenti, la pagina che stai cercando non è più disponibile.
error-page-error-404-cta-button = Torna indietro

## Breach overview page

all-breaches-headline-3 = Database delle violazioni di dati
all-breaches-lead = Monitoriamo tutte le violazioni di dati conosciute per scoprire se le tue informazioni personali sono state compromesse. Ecco un elenco completo di tutte le violazioni segnalate dal 2007.
search-breaches = Cerca nelle violazioni
# the kind of user data exposed to hackers in data breach.
exposed-data = Dati esposti:

## Public breach detail page

find-out-if-2 = Scopri se sei stato coinvolto in questa violazione
find-out-if-description = Ti aiuteremo a verificare rapidamente se il tuo indirizzo email è stato coinvolto in questa violazione e a capire come procedere.
breach-detail-cta-signup = Cerca nelle violazioni
loading-accessibility = Caricamento…
