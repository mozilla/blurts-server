# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = דוח { -product-name }
report-date = תאריך הפקת הדוח:
email-address = כתובת דוא״ל:
# A link to legal information about mozilla products.
legal = מידע משפטי
# Unsubscribe link in email.
email-unsub-link = ביטול מינוי
# Button text
verify-email-cta = אימות דוא״ל
# Button text
see-all-breaches = הצגת כל הדליפות
# Headline of verification email
email-link-expires = קישור זה יפוג תוך 24 שעות
# Email headline
email-found-breaches-hl = להלן סיכום דליפות העבר שלך

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = סיכום דליפות אבטחה עבור { $userEmail }
# Email headline
email-no-breaches-hl = הכתובת { $userEmail } לא נחשפה בדליפות נתונים מוכרות
# Email headline
email-alert-hl = הכתובת { $userEmail } נחשפה בדליפת נתונים חדשה

##

# Subject line of email
email-subject-no-breaches = { -product-name } לא מצא דליפות נתונים מוכרות
# Subject line of email
email-subject-verify = אימות הדוא״ל שלך עבור { -product-name }
# Variables:
#   $fxmLink (string) - Link to Firefox Monitor that uses the text from { -product-name }.
learn-more-about-fxm = מידע נוסף על { $fxmLink }

## 2022 email template. HTML tags should not be translated, e.g. `<a>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address


## Verification email


## Breach report
## Variables:
##   $email-address (string) - Email address


## Breach alert

