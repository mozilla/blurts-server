# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = האם עקצו אותי
-brand-fxa = חשבון Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = כתובת הדוא״ל הזו אינה רשומה ל־{ -product-name }.
error-hibp-throttled = יותר מדי חיבורים אל { -brand-HIBP }.
error-hibp-connect = שגיאה בהתחברות אל { -brand-HIBP }.
user-add-invalid-email = דוא״ל שגוי
user-add-too-many-emails = הינך במעקב אחר המספר המירבי של כתובות דוא״ל.
user-add-duplicate-email = דוא״ל זה כבר נוסף אל { -product-name }.
user-add-verification-email-just-sent = לא ניתן לשלוח הודעת דוא״ל לאימות נוספת במהירות כזו. נא לנסות שוב מאוחר יותר.
user-add-unknown-error = משהו השתבש בעת הוספת כתובת דוא״ל נוספת. נא לנסות שוב מאוחר יותר.
user-delete-unknown-error = משהו השתבש בעת הסרת כתובת דוא״ל. נא לנסות שוב מאוחר יותר.
user-verify-token-error = נדרש אסימון אימות.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = מידע שנחשף:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = נתוני הדליפה מסופקים על־ידי { $hibp-link }
show-all = הצגת הכל
sign-out = התנתקות
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = ניהול { -brand-fxa }
# Link title
preferences = העדפות
# Link title
home = בית
# Link title
security-tips = עצות אבטחה
# Link title
more-about-this-breach = עוד על הדליפה הזו
monitor-several-emails = ניטור אחר מספר כתובות דוא״ל
sensitive-sites = כיצד { -product-name } מתייחס לאתרים רגישים?
avoid-personal-info = כדאי להימנע משימוש בפרטים אישיים בססמאות
send-verification = שליחת קישור לאימות
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = קיצור הדליפה

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] ססמה אחת נחשפה בכל הדליפות
       *[other] ססמאות נחשפו בכל הדליפות
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] דליפת נתונים מוכרת אחת חשפה מידע עליך
       *[other] דליפות נתונים מוכרות חשפו מידע עליך
    }
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = תפריט

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = דליפה נוספה:

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = חדש

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $case ->
        [the] חשבון ה־Mozilla
       *[a] חשבון Mozilla
    }
open-in-new-tab-alt = פתיחת קישור בלשונית חדשה

## Search Engine Optimization


## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = התחברות
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = תפריט ראשי
main-nav-button-collapse-label = צמצום התפריט
main-nav-button-collapse-tooltip = צמצום התפריט
main-nav-button-expand-label = הרחבת התפריט
main-nav-button-expand-tooltip = הרחבת התפריט
main-nav-label = ניווט
main-nav-link-home-label = בית
main-nav-link-dashboard-label = לוח בקרה
main-nav-link-settings-label = הגדרות
main-nav-link-faq-label = תשובות לשאלות נפוצות
main-nav-link-faq-tooltip = תשובות לשאלות נפוצות

## User menu

user-menu-trigger-label = פתיחת תפריט משתמש
user-menu-trigger-tooltip = פרופיל
user-menu-manage-fxa-label = ניהול { -brand-mozilla-account(case: "the") } שלך
user-menu-settings-label = הגדרות
user-menu-settings-tooltip = הגדרת תצורה של { -brand-mozilla-monitor }
user-menu-help-label = עזרה ותמיכה
user-menu-help-tooltip = קבלת עזרה בשימוש ב־{ -brand-mozilla-monitor }
user-menu-signout-label = התנתקות
user-menu-signout-tooltip = התנתקות מ־{ -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = תנאי השירות
privacy-notice = הצהרת פרטיות
github = { -brand-github }
footer-nav-recent-breaches = דליפות נתונים אחרונות
footer-external-link-faq-label = תשובות לשאלות נפוצות
footer-external-link-faq-tooltip = תשובות לשאלות נפוצות

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } הדף לא נמצא
error-page-error-404-copy = הדף שחיפשת כבר לא קיים, עמך הסליחה.
error-page-error-404-cta-button = חזרה אחורה
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } משהו השתבש

## Breach overview page

search-breaches = חיפוש בדליפות

## Public breach detail page


## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-dismiss-button-label = אישור
banner-monitor-rebrand-dismiss-button-tooltip = סגירה
loading-accessibility = בטעינה
