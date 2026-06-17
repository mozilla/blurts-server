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

settings-email-verification-callout = Sähköpostiosoitteen vahvistus vaaditaan
settings-remove-email-button-label = Poista
settings-email-addresses-header = Sähköpostiosoitteet
settings-email-addresses-description = { -brand-monitor } ilmoittaa sinulle, jos näitä sähköposteja esiintyy tunnetuissa tietovuodoissa.
settings-email-addresses-add-email-button = Lisää sähköpostiosoite
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Lisää enintään { $limit }
settings-email-addresses-add-email-resend-button-label = Lähetä vahvistuslinkki uudelleen
input-error-alt = Virhe

## Email address dialog

settings-email-addresses-initial-dialog-header = Lisää sähköpostiosoite
settings-email-addresses-initial-dialog-description = Lähetämme sinulle vahvistuslinkin, jolla voit vahvistaa, että haluat sisällyttää sähköpostiosoitteesi tuleviin { -brand-monitor } -tarkistuksiin.
settings-email-addresses-initial-dialog-add-email-input-label = Kirjoita sähköpostiosoite
settings-email-addresses-initial-dialog-add-email-button-label = Lähetä vahvistuslinkki
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Vahvistuslinkki lähetetty osoitteeseen <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Avaa linkki lisätäksesi sen tälle tilille tulevia { -brand-monitor } -tarkistuksia varten.
settings-email-addresses-confirmation-dialog-close-button = Sulje

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Päivitä tarkistustiedot
settings-tab-label-edit-info = Muokkaa tietojasi
settings-tab-label-notifications = Aseta ilmoitukset
settings-tab-label-manage-account = Hallinnoi tiliä
settings-tab-subtitle-manage-account = Hallinnoi { -product-name }-tiliäsi.
settings-tab-notifications-marketing-title = Markkinointiviestintä
settings-tab-notifications-marketing-text = Säännöllisiä päivityksiä koskien { -brand-monitor }ia, { -brand-mozilla }a ja muita tietoturvatuotteitamme.
settings-tab-notifications-marketing-link-label = Siirry { -brand-mozilla }n sähköpostiasetuksiin
