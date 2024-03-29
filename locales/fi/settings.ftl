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
settings-remove-email-button-label = Poista
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Lopeta osoitteen { $emailAddress } tarkkailu
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Esiintyy { $breachCount } tunnetussa tietovuodossa.
       *[other] Esiintyy { $breachCount } tunnetussa tietovuodossa.
    }

## Deactivate account

settings-deactivate-account-title = Poista tili käytöstä
settings-deactivate-account-info-2 = Voit poistaa { -product-short-name }in käytöstä poistamalla { -brand-mozilla-account }n.
settings-fxa-link-label-3 = Siirry { -brand-mozilla-account }n asetuksiin

## Delete Monitor account

settings-delete-monitor-free-account-title = Poista { -brand-monitor } -tili
settings-delete-monitor-free-account-description = Tämä poistaa pysyvästi { -brand-monitor } -tilisi ja poistaa kaikki ilmoitukset käytöstä.
settings-delete-monitor-free-account-cta-label = Poista tili
settings-delete-monitor-free-account-dialog-title = { -brand-monitor } -tilisi poistetaan pysyvästi
settings-delete-monitor-free-account-dialog-lead = Kaikki { -brand-monitor } -tilisi tiedot poistetaan, emmekä enää tarkkaile uusien tietovuotojen varalta. Tämä ei poista { -brand-mozilla }-tiliäsi.
settings-delete-monitor-free-account-dialog-cta-label = Poista tili
settings-delete-monitor-free-account-dialog-cancel-button-label = Unohdetaan tämä, palataan takaisin
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor } -tilisi on nyt poistettu.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Hylkää
