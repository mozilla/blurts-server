# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name }-instillinger

## Breach alert preferences

settings-alert-preferences-title = Indstillinger for advarsler om datalæk
settings-alert-preferences-option-one = Send alle advarsler om datalæk til den berørte mailadresse
settings-alert-preferences-option-two = Send alle advarsler om datalæk til den primære mailadresse

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primær)
settings-email-list-title = Overvågede mailadresser
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Din konto inkluderer overvågning af { $limit } mailadresse.
       *[other] Din konto inkluderer overvågning af op til { $limit } mailadresser.
    }
settings-email-verification-callout = Bekræftelse af mailadresse påkrævet
settings-resend-email-verification-link = Send bekræftelsesmail igen
settings-add-email-button = Tilføj mailadresse
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Optræder i { $breachCount } kendt datalæk
       *[other] Optræder i { $breachCount } kendte datalæk
    }

## Deactivate account

settings-deactivate-account-title = Deaktiver konto
settings-deactivate-account-info = Du kan deaktivere { -product-short-name } ved at slette din { -brand-fx-account }.
settings-fxa-link-label = Gå til { -brand-firefox }-indstillinger

## Add email dialog

settings-email-dialog-title = Tilføj en mailadresse til
settings-add-email-text = Tilføj en ny mailadresse for at se, om den har været involveret i en datalæk.
settings-email-input-label = Mailadresse
settings-send-email-verification-button = Send bekræftelseslink
