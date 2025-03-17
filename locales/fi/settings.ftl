# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } -asetukset

## Breach alert preferences

settings-alert-email-preferences-title = Sähköpostiasetukset
settings-alert-email-preferences-subtitle = Kerro meille, mitä sähköposteja haluat vastaanottaa.
settings-alert-preferences-allow-breach-alerts-title = Välittömät vuotohälytykset
settings-alert-preferences-allow-breach-alerts-subtitle = Nämä hälytykset lähetetään välittömästi, kun tietovuoto havaitaan
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

## Delete Monitor account

settings-delete-monitor-free-account-title = Poista { -brand-monitor } -tili
settings-delete-monitor-free-account-description = Tämä poistaa pysyvästi { -brand-monitor } -tilisi ja poistaa kaikki ilmoitukset käytöstä.
settings-delete-monitor-free-account-cta-label = Poista tili
settings-delete-monitor-free-account-dialog-title = { -brand-monitor } -tilisi poistetaan pysyvästi
settings-delete-monitor-free-account-dialog-lead-v2 = Kaikki { -brand-monitor } -tilisi tiedot poistetaan, emmekä enää seuraa uusia tietovuotoja. Tämä ei poista { -brand-mozilla-account }äsi.
settings-delete-monitor-free-account-dialog-cta-label = Poista tili
settings-delete-monitor-free-account-dialog-cancel-button-label = Unohdetaan tämä, palataan takaisin
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor } -tilisi on nyt poistettu.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Hylkää

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Kuukausittainen { -brand-monitor }-raportti
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Kuukausittainen päivitys uusista vuodoista, korjauksista ja mitä sinun tarvitsee huomioida.

## Settings page redesign

settings-tab-label-edit-info = Muokkaa tietojasi
settings-tab-label-notifications = Aseta ilmoitukset
settings-tab-label-manage-account = Hallinnoi tiliä
settings-tab-subtitle-manage-account = Hallinnoi { -product-name }-tiliäsi.
settings-tab-notifications-marketing-title = Markkinointiviestintä
settings-tab-notifications-marketing-text = Säännöllisiä päivityksiä koskien { -brand-monitor }ia, { -brand-mozilla }a ja muita tietoturvatuotteitamme.
settings-tab-notifications-marketing-link-label = Siirry { -brand-mozilla }n sähköpostiasetuksiin
