# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } – Instellingen
settings-page-title = { -product-short-name }-instellingen

## Breach alert preferences

settings-alert-preferences-title = Voorkeuren voor datalekmeldingen
settings-alert-preferences-option-one = Waarschuwingen over datalekken naar het getroffen e-mailadres sturen
settings-alert-preferences-option-two = Alle waarschuwingen over datalekken naar het primaire e-mailadres sturen

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primair)
settings-email-list-title = Gemonitorde e-mailadressen
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Uw account omvat het monitoren van maximaal { $limit } e-mailadres.
       *[other] Uw account omvat het monitoren van maximaal { $limit } e-mailadressen.
    }
settings-email-verification-callout = E-mailverificatie vereist
settings-resend-email-verification-link = Verificatie-e-mailbericht opnieuw versturen
settings-add-email-button = E-mailadres toevoegen
settings-delete-email-button = E-mailadres verwijderen
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Komt voor in { $breachCount } bekend datalek.
       *[other] Komt voor in { $breachCount } bekende datalekken.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Abonnement op { -brand-premium } opzeggen
settings-cancel-premium-subscription-info = Uw abonnement wordt teruggezet naar een gratis account nadat de huidige factureringscyclus is afgelopen. De resultaten van uw privacybeschermingsscan worden permanent verwijderd en u heeft datalekmonitoring voor slechts één e-mailadres.
settings-cancel-premium-subscription-link-label = Annuleren vanaf uw { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Account deactiveren
settings-deactivate-account-info = U kunt { -product-short-name } deactiveren door uw { -brand-fx-account } te verwijderen.
settings-fxa-link-label = Naar { -brand-firefox }-instellingen

## Add email dialog

settings-email-dialog-title = Nog een e-mailadres toevoegen
settings-add-email-text = Voeg een nieuw e-mailadres toe om te bekijken of het getroffen is door een datalek.
settings-email-input-label = E-mailadres
settings-send-email-verification-button = Verificatiekoppeling versturen

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Het spijt ons dat u vertrekt. <br /> Kunt u ons vertellen waarom?
settings-unsubscribe-dialog-info = Uw ervaring is belangrijk voor ons. We lezen elke reactie en nemen deze in overweging.
settings-unsubscribe-dialog-message-placeholder = Wat had beter gekund?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Houd er rekening mee dat al uw { -brand-monitor-premium }-services <a { $faq_href }>permanent worden verwijderd</a> nadat uw huidige factureringscyclus is afgelopen.
settings-unsubscribe-dialog-continue = Doorgaan met opzeggen
settings-unsubscribe-dialog-cancel = Laat maar zitten, breng me terug
