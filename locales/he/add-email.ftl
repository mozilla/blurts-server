# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = הוספת כתובת דוא״ל נוספת
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] החשבון שלך כולל ניטור של כתובת דוא״ל אחת. כדאי להוסיף כתובת דוא״ל חדשה כדי לבדוק אם היא הייתה מעורבת בדליפה.
       *[other] החשבון שלך כולל ניטור של עד { $total } כתובות דוא״ל. כדאי להוסיף כתובת דוא״ל חדשה כדי לבדוק אם היא הייתה מעורבת בדליפה.
    }
add-email-address-input-label = כתובת דוא״ל
add-email-send-verification-button = שליחת קישור לאימות
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = נא לאמת את הקישור שנשלח אל הכתובת { $email } כדי להוסיף אותה אל { -brand-fx-monitor }. ניתן לנהל את כל כתובות הדוא״ל ב<a { $settings-href }>הגדרות</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = נא לאמת את הקישור שנשלח לכתובת <b>{ $email }</b> כדי להוסיף אותה אל { -brand-mozilla-monitor }.
