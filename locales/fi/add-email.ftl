# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Lisää toinen sähköpostiosoite
close-dialog-alt = Sulje valintaikkuna
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Tilisi sisältää enintään { $total } sähköpostiosoitteen valvonnan. Lisää uusi sähköpostiosoite nähdäksesi, onko se ollut osallisena tietovuodossa.
       *[other] Tilisi sisältää enintään { $total } sähköpostiosoitteen valvonnan. Lisää uusi sähköpostiosoite nähdäksesi, onko se ollut osallisena tietovuodossa.
    }
add-email-address-input-label = Sähköpostiosoite
add-email-send-verification-button = Lähetä vahvistuslinkki
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Vahvista linkki, joka lähetettiin osoitteeseen { $email }, jotta voit lisätä sähköpostiosoitteen { -brand-fx-monitor }iin. Hallinnoi kaikkia sähköpostiosoitteita <a { $settings-href }>asetuksissa</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Vahvista osoitteeseen <b>{ $email }</b> lähetetty linkki lisätäksesi sähköpostiosoitteen { -brand-mozilla-monitor } -palveluun.
