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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Ist von { $breachCount } bekannten Datenleck betroffen.
       *[other] Ist von { $breachCount } bekannten Datenlecks betroffen.
    }

## Deactivate account

settings-deactivate-account-title = Konto deaktivieren
settings-deactivate-account-info = Sie können { -product-short-name } deaktivieren, indem Sie Ihr { -brand-fx-account } löschen.
settings-fxa-link-label = { -brand-firefox }-Einstellungen aufrufen

## Add email dialog

settings-email-dialog-title = Eine weitere E-Mail-Adresse hinzufügen
settings-add-email-text = Fügen Sie eine neue E-Mail-Adresse hinzu, um zu sehen, ob sie von einem Datenleck betroffen ist.
settings-email-input-label = E-Mail-Adresse
settings-send-email-verification-button = Bestätigungslink senden
