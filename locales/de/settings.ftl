# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Einstellungen
settings-page-title = Einstellungen für { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Einstellungen für Datenlecks
settings-alert-preferences-option-one = Benachrichtigungen über Datenlecks an die betroffene E-Mail-Adresse schicken
settings-alert-preferences-option-two = Alle Warnungen zu Datenlecks an die primäre E-Mail-Adresse senden

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primär)
settings-email-list-title = Überwachte E-Mail-Adressen
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ihr Konto überwacht bis zu { $limit } E-Mail-Adresse.
       *[other] Ihr Konto überwacht bis zu { $limit } E-Mail-Adressen.
    }
settings-email-verification-callout = E-Mail-Bestätigung erforderlich
settings-resend-email-verification-link = Bestätigungs-Mail erneut versenden
settings-add-email-button = E-Mail-Adresse hinzufügen
settings-delete-email-button = E-Mail-Adresse löschen
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Ist von { $breachCount } bekannten Datenleck betroffen.
       *[other] Ist von { $breachCount } bekannten Datenlecks betroffen.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = { -brand-premium }-Abonnement kündigen
settings-cancel-premium-subscription-info = Ihr Abonnement wird nach Ende des aktuellen Abrechnungszeitraums auf ein kostenloses Konto zurückgesetzt. Die Ergebnisse Ihrer Datenschutz-Scans werden dauerhaft gelöscht und es wird nur eine E-Mail-Adresse auf Datenlecks überwacht.
settings-cancel-premium-subscription-link-label = Kündigung über Ihr { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Konto deaktivieren
settings-deactivate-account-info = Sie können { -product-short-name } deaktivieren, indem Sie Ihr { -brand-fx-account } löschen.
settings-fxa-link-label = { -brand-firefox }-Einstellungen aufrufen

## Add email dialog

settings-email-dialog-title = Eine weitere E-Mail-Adresse hinzufügen
settings-add-email-text = Fügen Sie eine neue E-Mail-Adresse hinzu, um zu sehen, ob sie von einem Datenleck betroffen ist.
settings-email-input-label = E-Mail-Adresse
settings-send-email-verification-button = Bestätigungslink senden

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Es tut uns leid, Sie gehen zu sehen. <br /> Erzählen Sie uns, warum Sie gehen?
settings-unsubscribe-dialog-info = Ihre Erfahrung ist uns wichtig. Wir lesen jede Antwort und berücksichtigen sie.
settings-unsubscribe-dialog-message-placeholder = Was hätte besser laufen können?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Bitte beachten Sie, dass alle Ihre { -brand-monitor-premium }-Dienste nach Ende Ihres aktuellen Abrechnungszeitraums <a { $faq_href }>dauerhaft gelöscht werden</a>.
settings-unsubscribe-dialog-continue = Weiter zur Kündigung
settings-unsubscribe-dialog-cancel = Egal, zurücknehmen
