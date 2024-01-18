# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Lägg till ytterligare en e-postadress
close-dialog-alt = Stäng dialogrutan
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Ditt konto inkluderar övervakning av { $total } e-postadress. Lägg till en ny e-postadress för att se om den har varit inblandad i ett intrång.
       *[other] Ditt konto inkluderar övervakning av upp till { $total } e-postadresser. Lägg till en ny e-postadress för att se om den har varit inblandad i ett intrång.
    }
add-email-address-input-label = E-postadress
add-email-send-verification-button = Skicka verifieringslänk
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifiera länken som skickades till { $email } för att lägga till den i { -brand-fx-monitor }. Hantera alla e-postadresser i <a { $settings-href }>Inställningar</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifiera länken som skickades till <b>{ $email }</b> för att lägga till den i { -brand-mozilla-monitor }.
