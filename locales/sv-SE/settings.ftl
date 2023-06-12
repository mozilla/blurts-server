# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Inställningar
settings-page-title = Inställningar { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Inställningar för intrångsvarning
settings-alert-preferences-option-one = Skicka intrångsvarningar till den drabbade e-postadressen
settings-alert-preferences-option-two = Skicka alla intrångsvarningar till den primära e-postadressen

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primär)
settings-email-list-title = Övervakade e-postadresser
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ditt konto inkluderar övervakning av { $limit } e-postadress.
       *[other] Ditt konto inkluderar övervakning av upp till { $limit } e-postadresser.
    }
settings-email-verification-callout = E-postverifiering krävs
settings-resend-email-verification-link = Skicka e-postverifiering igen
settings-add-email-button = Lägg till e-postadress
settings-delete-email-button = Ta bort e-postadress
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Förekommer i { $breachCount } känt intrång.
       *[other] Förekommer i { $breachCount } kända intrång.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Avsluta prenumerationen på { -brand-premium }
settings-cancel-premium-subscription-info = Ditt abonnemang kommer att återgå till ett gratiskonto efter att den aktuella faktureringsperioden är slut. Resultaten av din integritetsskyddsskanning kommer att raderas permanent och du kommer bara att ha övervakning av dataintrång för en e-postadress.
settings-cancel-premium-subscription-link-label = Avsluta från ditt { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Inaktivera konto
settings-deactivate-account-info = Du kan inaktivera { -product-short-name } genom att ta bort ditt { -brand-fx-account }.
settings-fxa-link-label = Gå till { -brand-firefox }-inställningar

## Add email dialog

settings-email-dialog-title = Lägg till ytterligare en e-postadress
settings-add-email-text = Lägg till en ny e-postadress för att se om den har varit inblandad i ett intrång.
settings-email-input-label = E-postadress
settings-send-email-verification-button = Skicka verifieringslänk

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Vi beklagar att du lämnar. <br /> Vill du berätta varför?
settings-unsubscribe-dialog-info = Din erfarenhet är viktig för oss. Vi läser varje svar och tar hänsyn till det.
settings-unsubscribe-dialog-message-placeholder = Vad kunde ha gått bättre?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Observera att alla dina { -brand-monitor-premium }-tjänster kommer att <a { $faq_href }>tas bort permanent</a> efter att din nuvarande faktureringsperiod är slut.
settings-unsubscribe-dialog-continue = Fortsätt till annullering
settings-unsubscribe-dialog-cancel = Glöm det, ta mig tillbaka
