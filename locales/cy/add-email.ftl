# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Ychwanegu cyfeiriad e-bost newydd
close-dialog-alt = Cau deialog
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [zero] Mae eich cyfrif yn cynnwys monitro hyd at { $total } o gyfeiriadau e-bost. Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
        [one] Mae eich cyfrif yn cynnwys monitro hyd at { $total } cyfeiriad e-bost. Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
        [two] Mae eich cyfrif yn cynnwys monitro hyd at { $total } gyfeiriad e-bost. Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
        [few] Mae eich cyfrif yn cynnwys monitro hyd at { $total } cyfeiriad e-bost. Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
        [many] Mae eich cyfrif yn cynnwys monitro hyd at { $total } chyfeiriad e-bost. Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
       *[other] Mae eich cyfrif yn cynnwys monitro hyd at { $total } cyfeiriad e-bost. Ychwanegwch gyfeiriad e-bost newydd i weld a yw wedi bod yn rhan o dor-data.
    }
add-email-address-input-label = Cyfeiriad e-bost
add-email-send-verification-button = Anfon dolen dilysu
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Gwiriwch y ddolen a anfonwyd at { $email } i'w hychwanegu at { -brand-fx-monitor }. Rheolwch bob cyfeiriad e-bost yn y <a { $settings-href }>Gosodiadau</a>.
