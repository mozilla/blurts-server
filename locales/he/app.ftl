# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = האם עקצו אותי
-brand-fxa = חשבון Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

error-could-not-add-email = לא ניתן להוסיף כתובת דוא״ל למסד הנתונים.
error-not-subscribed = כתובת הדוא״ל הזו אינה רשומה ל־{ -product-name }.
error-hibp-throttled = יותר מדי חיבורים אל { -brand-HIBP }.
error-hibp-connect = שגיאה בהתחברות אל { -brand-HIBP }.

user-add-invalid-email = דוא״ל שגוי
user-add-too-many-emails = הינך במעקב אחר המספר המירבי של כתובות דוא״ל.
user-add-duplicate-email = דוא״ל זה כבר נוסף אל { -product-name }.

user-verify-token-error = נדרש אסימון אימות.

user-unsubscribe-token-error = ביטול הרשמה דורש אסימון.
user-unsubscribe-token-email-error = ביטול הרישום דורש אסימון וגיבוב דוא״ל.

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
frequently-asked-questions = תשובות לשאלות נפוצות

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

## What to do after data breach tips

send-verification = שליחת קישור לאימות

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = קיצור הדליפה

## Variables:
##   $userName (String) - Username

##

breach-alert-subject = ‏{ -product-name } מצא את הדוא״ל שלך בדליפת נתונים חדשה

## Variables:
##   $breachName (String) - Number of the breach

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

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".


##


## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".


##

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`


## Relay and VPN educational/ad units


##

## Updated error messages

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##


##

## Search Engine Optimization


## Header

sign-in = התחברות

## Site navigation


## User menu


## Footer


## Error page


## Breach overview page

search-breaches = חיפוש בדליפות

## Public breach detail page


## Floating banner


## Firefox Monitor -> Mozilla Monitor rebrand banner

