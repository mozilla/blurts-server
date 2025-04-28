# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = הגדרות של { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = העדפות דוא״ל
settings-alert-email-preferences-subtitle = אילו הודעות דוא״ל ברצונך לקבל?
settings-alert-preferences-allow-breach-alerts-title = התרעות מיידיות על דליפות נתונים
settings-alert-preferences-allow-breach-alerts-subtitle = התרעות אלו נשלחות מיד בעת זיהוי דליפת נתונים חדשה
settings-alert-preferences-option-one = שליחת התראות על דליפות לכתובת הדוא״ל המושפעת
settings-alert-preferences-option-two = שליחת כל ההתרעות לדליפות לכתובת הדוא״ל הראשית

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = כתובות דוא״ל מנוטרות
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] החשבון שלך כולל ניטור של כתובת דוא״ל אחת.
       *[other] החשבון שלך כולל ניטור של עד { $limit } כתובות דוא״ל.
    }
settings-email-verification-callout = דרוש אימות דוא״ל
settings-resend-email-verification-link = שליחת דוא״ל לאימות מחדש
settings-add-email-button = הוספת כתובת דוא״ל
settings-remove-email-button-label = הסרה
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = להפסיק לנטר אחר { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] מופיע בדליפת נתונים מוכרת אחת.
       *[other] מופיע ב־{ $breachCount } דליפות מוכרות.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = מחיקת חשבון { -brand-monitor }
settings-delete-monitor-free-account-description = פעולה זו תמחק לצמיתות את חשבון ה־{ -brand-monitor } שלך ותכבה את כל ההתרעות.
settings-delete-monitor-free-account-cta-label = מחיקת חשבון
settings-delete-monitor-free-account-dialog-title = חשבון ה־{ -brand-monitor } שלך יימחק לצמיתות
settings-delete-monitor-free-account-dialog-lead-v2 = כל פרטי חשבון ה־{ -brand-monitor } שלך יימחקו ולא נעקוב עוד אחר דליפות נתונים חדשות. פעולה זו לא תמחק את { -brand-mozilla-account(case: "the") } שלך.
settings-delete-monitor-free-account-dialog-cta-label = מחיקת חשבון
settings-delete-monitor-free-account-dialog-cancel-button-label = לא משנה, קחו אותי בחזרה
settings-delete-monitor-account-confirmation-toast-label-2 = חשבון ה־{ -brand-monitor } שלך נמחק כעת.
settings-delete-monitor-account-confirmation-toast-dismiss-label = סגירה

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = הדו״ח החודשי של { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = עדכון חודשי על חשיפות חדשות, מה תוקן ומה צריך את תשומת לבך.

## Settings page redesign

settings-tab-label-edit-info = עריכת המידע שלך
settings-tab-label-notifications = הגדרת התראות
settings-tab-label-manage-account = ניהול חשבון
settings-tab-subtitle-manage-account = ניהול חשבון ה־{ -product-name } שלך.
settings-tab-notifications-marketing-title = תוכן שיווקי
settings-tab-notifications-marketing-text = עדכונים תקופתיים על אודות { -brand-monitor }, ‏{ -brand-mozilla } ומוצרי האבטחה האחרים שלנו.
settings-tab-notifications-marketing-link-label = מעבר אל הגדרות הדוא״ל של { -brand-mozilla }
