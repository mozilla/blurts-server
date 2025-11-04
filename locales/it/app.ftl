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

error-not-subscribed = Questo indirizzo email non è iscritto a { -product-name }
error-hibp-throttled = Troppe connessioni a { -brand-HIBP }.
error-hibp-connect = Errore di connessione a { -brand-HIBP }.
user-add-invalid-email = Email non valida
user-add-too-many-emails = Stai controllando il numero massimo di indirizzi email.
user-add-duplicate-email = Questo indirizzo email è già stato aggiunto a { -product-name }.
user-add-verification-email-just-sent = Non è possibile inviare un’altra email di verifica così rapidamente. Riprova più tardi.
user-add-unknown-error = Si è verificato un errore durante l’aggiunta di un altro indirizzo email. Riprova più tardi.
user-delete-unknown-error = Si è verificato un errore durante la rimozione di un indirizzo email. Riprova più tardi.
user-verify-token-error = È richiesto un token di verifica.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dati compromessi:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Dati sulle violazioni forniti da { $hibp-link }
show-all = Mostra tutto
sign-out = Disconnetti
# Link title
preferences = Preferenze
# Link title
home = Home
# Link title
security-tips = Consigli per la sicurezza
# Link title
more-about-this-breach = Ulteriori informazioni su questa violazione
monitor-several-emails = Tieni sotto controllo più indirizzi email
website-breach = Violazione sito web
sensitive-breach = Violazione di dati sensibili
data-aggregator-breach = Violazione aggregatore dati
what-data = Quali dati sono stati compromessi:
sensitive-sites = In che modo vengono gestiti i dati sensibili in { -product-name }?
sensitive-sites-copy = { -product-name } rivela gli account associati con questo tipo di violazioni solo dopo la verifica dell’indirizzo email. Questo significa che sei l’unica persona in grado di vedere se i tuoi dati sono presenti nella violazione (a meno che qualcun altro abbia accesso alla tua email).
delayed-reporting-headline = Perché ci è voluto così tanto tempo per segnalare questa violazione?
delayed-reporting-copy = A volte possono volerci mesi o anni prima che le credenziali compromesse in una violazione di dati compaiano nel “dark web”. Le violazioni sono aggiunte al nostro database appena vengono scoperte e verificate.
fxm-warns-you = { -product-name } ti avvisa se il tuo indirizzo email è stato esposto in una violazione di dati online. Controlla se i tuoi dati sono compromessi, impara come proteggere meglio i tuoi account online e ricevi un avviso se la tua email compare in una nuova violazione.
what-is-data-agg = Che cos’è un aggregatore di dati?
what-is-data-agg-blurb = Gli aggregatori di dati, o ”data broker”, raccolgono informazioni di pubblico dominio e acquistano dati da altre società, per poi venderli alle aziende con finalità di marketing. Il rischio di truffa per le vittime di queste violazioni è limitato, ma gli hacker possono comunque utilizzare queste informazioni per impersonarle o creare un loro profilo.
avoid-personal-info = Non utilizzare informazioni personali nelle password
send-verification = Invia link di verifica
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Riepilogo delle violazioni

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Password compromessa in tutte le violazioni
       *[other] Password compromesse in tutte le violazioni
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Violazione di dati conosciuta che ha compromesso le tue informazioni
       *[other] Violazioni di dati conosciute che hanno compromesso le tue informazioni
    }
what-is-a-website-breach = Che cos’è una violazione di dati?
website-breach-blurb = La violazione di dati di un sito web si verifica quando criminali informatici rubano, copiano o espongono informazioni personali dagli account online. Di solito è il risultato del lavoro di hacker che riescono a individuare un punto debole nella sicurezza del sito web. Una violazione può verificarsi anche quando le informazioni sull’account vengono lasciate trapelare per errore.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Panoramica
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Il giorno { $breachDate }, { $breachTitle } è stato violato. La violazione è stata aggiunta al nostro database il giorno { $addedDate }, dopo essere stata scoperta e verificata.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifica il link inviato a { $userEmail } per aggiungere l’indirizzo a { -product-name }.

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

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nuova

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
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Si è verificato un errore

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

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: nuovo nome, nuovo look e ancora più modi per <b>riprendere possesso della tua privacy</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Chiudi
loading-accessibility = Caricamento…
