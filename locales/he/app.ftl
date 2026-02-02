# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = האם עקצו אותי
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
user-add-invalid-email = דוא״ל שגוי
user-add-too-many-emails = הינך במעקב אחר המספר המירבי של כתובות דוא״ל.
user-add-duplicate-email = דוא״ל זה כבר נוסף אל { -product-name }.
user-add-verification-email-just-sent = לא ניתן לשלוח הודעת דוא״ל לאימות נוספת במהירות כזו. נא לנסות שוב מאוחר יותר.
user-add-unknown-error = משהו השתבש בעת הוספת כתובת דוא״ל נוספת. נא לנסות שוב מאוחר יותר.
user-delete-unknown-error = משהו השתבש בעת הסרת כתובת דוא״ל. נא לנסות שוב מאוחר יותר.
user-verify-token-error = נדרש אסימון אימות.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = מידע שנחשף:
# Link title
more-about-this-breach = עוד על הדליפה הזו

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = סקירה כוללת

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = דליפה נוספה:
# Section headline
rec-section-headline = מה לעשות עבור דליפה זו
rec-section-subhead = אנו ממליצים לך לנקוט בצעדים הבאים כדי לשמור על המידע האישי שלך ולהגן על הזהות הדיגיטלית שלך.
# Section headline
rec-section-headline-no-pw = מה לעשות כדי להגן על המידע האישי שלך
rec-section-subhead-no-pw = למרות שססמאות לא נחשפו בדליפה זו, עדיין ישנם צעדים שניתן לנקוט בהן כדי להגן יותר טוב על המידע האישי שלך.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $case ->
        [the] חשבון ה־Mozilla
       *[a] חשבון Mozilla
    }
open-in-new-tab-alt = פתיחת קישור בלשונית חדשה

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

## Breach overview page

search-breaches = חיפוש בדליפות

## Public breach detail page

loading-accessibility = בטעינה
