# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } -asetukset

## Breach alert preferences

settings-alert-preferences-title = Tietovuotoilmoitusten asetukset
settings-alert-preferences-option-one = Lähetä tietovuotoilmoitukset vuodettuun sähköpostiosoitteeseen
settings-alert-preferences-option-two = Lähetä kaikki tietovuotoilmoitukset ensisijaiseen sähköpostiosoitteeseen

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (ensisijainen)
settings-email-list-title = Valvottavat sähköpostiosoitteet
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Tilisi sisältää enintään { $limit } sähköpostiosoitteen valvonnan.
       *[other] Tilisi sisältää enintään { $limit } sähköpostiosoitteen valvonnan.
    }
settings-email-verification-callout = Sähköpostiosoitteen vahvistus vaaditaan
settings-resend-email-verification-link = Lähetä uudelleen vahvistussähköposti
settings-add-email-button = Lisää sähköpostiosoite
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Esiintyy { $breachCount } tunnetussa tietovuodossa.
       *[other] Esiintyy { $breachCount } tunnetussa tietovuodossa.
    }

## Deactivate account

settings-deactivate-account-title = Poista tili käytöstä
settings-deactivate-account-info = Voit poistaa { -product-short-name }in käytöstä poistamalla { -brand-fx-account }n.
settings-fxa-link-label = Siirry { -brand-firefox }-asetuksiin

## Add email dialog

settings-email-dialog-title = Lisää toinen sähköpostiosoite
settings-add-email-text = Lisää uusi sähköpostiosoite nähdäksesi, onko se ollut osallisena tietovuodossa.
settings-email-input-label = Sähköpostiosoite
settings-send-email-verification-button = Lähetä vahvistuslinkki
