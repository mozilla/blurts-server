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

GitHub-link-title = GitHub
error-scan-page-token = ניסית לסרוק יותר מדי כתובות דוא"ל בפרק זמן קצר. משיקולי אבטחה, חסמנו את חיפושיך באופן זמני. יהיה ניתן לחפש שוב מאוחר יותר.
error-could-not-add-email = לא ניתן להוסיף כתובת דוא״ל למסד הנתונים.
error-not-subscribed = כתובת הדוא״ל הזו אינה רשומה ל־{ -product-name }.
error-hibp-throttled = יותר מדי חיבורים אל { -brand-HIBP }.
error-hibp-connect = שגיאה בהתחברות אל { -brand-HIBP }.
error-hibp-load-breaches = לא ניתן לטעון פריצות.
error-must-be-signed-in = עליך להיכנס לחשבון ה־{ -brand-fxa } שלך.
error-to-finish-verifying = כדי להשלים את אימות הדוא״ל הזה עבור { -product-name }, עליך להתחבר באמצעות הדוא״ל הראשי שלך.
home-title = { -product-name }
home-not-found = הדף לא נמצא.
scan-title = { -product-name } : תוצאות סריקה
user-add-invalid-email = דוא״ל שגוי
user-add-too-many-emails = הינך במעקב אחר המספר המירבי של כתובות דוא״ל.
user-add-email-verify-subject = אימות המינוי שלך אל { -product-name }.
user-add-duplicate-email = דוא״ל זה כבר נוסף אל { -product-name }.
error-headline = שגיאה
user-verify-token-error = נדרש אסימון אימות.
user-verify-email-report-subject = דוח { -product-name } שלך
user-unsubscribe-token-error = ביטול הרשמה דורש אסימון.
user-unsubscribe-token-email-error = ביטול הרישום דורש אסימון וגיבוב דוא״ל.
user-unsubscribe-title = { -product-name } : ביטול הרשמה
pwt-section-headline = ססמאות חזקות יותר = הגנה טובה יותר
landing-headline = זכותך להגנה מפני פצחנים מתחילה כאן.
scan-placeholder = נא להכניס כתובת דוא״ל
scan-submit = חיפוש כתובת הדוא״ל שלך
scan-error = יש להכניס כתובת דוא״ל תקנית.
download-firefox-banner-button = הורדת { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = נשלח!
sign-up = הרשמה
form-signup-error = יש להכניס כתובת דוא״ל תקנית
# breach-date = the calendar date a particular data theft occurred.
breach-date = מועד דליפה:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = חשבונות שנחשפו:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = מידע שנחשף:
unsub-headline = ביטול הרשמה ל־{ -product-name-nowrap }
unsub-blurb = פעולה זו תסיר את הדוא"ל שלך מרשימת { -product-name-nowrap }, ולא יישלחו אליך התראות על פרצות חדשות שפורסמו.
unsub-button = ביטול הרשמה
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = נתוני הדליפה מסופקים על־ידי { $hibp-link }
share-twitter = לרוב האנשים יש כ־100 חשבונות מקוונים. האם החשבונות שלך נחשפו בדליפת נתונים?
share-facebook-headline = האם היית חלק מדליפת נתונים
share-facebook-blurb = האם החשבונות המקוונים שלך נחשפו בדליפת נתונים?
show-all = הצגת הכל
fxa-scan-another-email = רוצה לבדוק כתובת דוא״ל נוספת?
sign-out = התנתקות
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = ניהול { -brand-fxa }
have-an-account = כבר יש לך חשבון?
fxa-pwt-summary-2 =
    ססמאות קצרות וססמאות בנות מילה אחת קלות לניחוש על־ידי פצחנים.
    יש להשתמש לפחות בשתי מילים ובשילוב של אותיות, ספרות ותווים מיוחדים.
fxa-pwt-summary-4 = מנהלי ססמאות כגון 1Password, LastPass, Dashlaneו־Bitwarden שומרים את הססמאות שלך וממלאים אותן באתרים עבורך. הם אפילו יעזרו לך לייצר ססמאות חזקות.
# Alerts is a noun
sign-up-for-alerts = הרשמה להתראות
# Link title
frequently-asked-questions = תשובות לשאלות נפוצות
about-firefox-monitor = על אודות { -product-name }
# Link title
preferences = העדפות
# Link title
home = בית
# Link title
security-tips = עצות אבטחה
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = פתיחת הניווט ב־{ -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = הדליפה העדכנית ביותר שנוספה
# Link title
more-about-this-breach = עוד על הדליפה הזו
take-control = קבלת השליטה על הנתונים האישיים שלך בחזרה.
cant-stop-hackers = אי אפשר למנוע מהאקרים לפרוץ. אבל אפשר להימנע מהרגלים רעים שמקלים על עבודתם.
read-more-tips = הצגת עצות נוספות בנושא אבטחה
if-your-info = אם המידע שלך נחשף בדליפת נתונים חדשה, נשלח לך התרעה.
monitor-several-emails = ניטור אחר מספר כתובות דוא״ל
sensitive-sites = כיצד { -product-name } מתייחס לאתרים רגישים?
about-fxm-headline = על אודות { -product-name }
# How Firefox Monitor works
how-fxm-works = איך { -product-name } עובד
protect-your-privacy = הגנה על הפרטיות המקוונת שלך
avoid-personal-info = כדאי להימנע משימוש בפרטים אישיים בססמאות

## What to do after data breach tips

even-for-old = חשוב לעדכן את הססמה שלך גם עבור חשבונות ישנים.
strength-of-your-pw = חוזק הססמאות שלך משפיע ישירות על האבטחה המקוונת שלך.
create-strong-passwords = כיצד ליצור ססמאות חזקות
five-myths = 5 מיתוסים על מנהלי ססמאות
feat-security-tips = עצות אבטחה להגנה על החשבונות שלך
feat-sensitive = חיפוש מתקדם בדליפות רגישות
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] מופיע בדליפה מוכרת אחת.
       *[other] מופיע ב־{ $breachCount } דליפות מוכרות.
    }
back-to-top = חזרה למעלה
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = שליחת כל ההתרעות לדליפות אל { $primaryEmail }.
add-new-email = הוספת כתובת דוא״ל חדשה
send-verification = שליחת קישור לאימות
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = קיצור הדליפה
show-breaches-for-this-email = הצגת כל הדליפות עבור דוא״ל זה.
link-change-primary = שינוי כתובת דוא״ל ראשית
remove-fxm = הסרת { -product-name }
remove-fxm-blurb =
    כיבוי ההתרעות של { -product-name }. ה־{ -brand-fxa } שלך ישאר פעיל, ויתכן שיתקבלו 
    הודעות אחרות הקשורות לחשבון שלך.
# Button title
manage-email-addresses = ניהול כתובות דוא״ל

## Variables:
##   $userName (String) - Username

welcome-back = ברוכים השבים, { $userName }!
welcome-user = ברוכים הבאים, { $userName }!

##

breach-alert-subject = ‏{ -product-name } מצא את הדוא״ל שלך בדליפת נתונים חדשה
your-info-was-discovered-headline = המידע שלך התגלה בדליפת נתונים חדשה.
your-info-was-discovered-blurb =
    נרשמת לקבלת התראות של { -product-name } 
    כאשר הדוא״ל שלך מופיע בדליפת נתונים. הנה מה שאנחנו יודעים על דליפה זו.
what-to-do-after-breach = מה לעשות לאחר דליפת נתונים
ba-next-step-1 = לשנות את הססמה שלך לססמה חזקה וייחודית.
ba-next-step-blurb-1 =
    סיסמה חזקה משתמשת בשילוב של אותיות גדולות וקטנות, 
    תווים מיוחדים ומספרים. הססמה אינה מכילה מידע אישי כמו 
    הכתובת, יום ההולדת או שם המשפחה שלך.
ba-next-step-2 = להפסיק לחלוטין את השימוש בססמה שנחשפה
faq2 = מדוע לקח כל כך הרבה זמן כדי ליידע אותי על דליפה זו?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] דליפה אחת נמצאה
       *[other] { $breachCount } דליפות נמצאו
    }

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = האם המידע שלך נחשף בדליפת הנתונים של { $breachName }?
fb-not-comp = דוא״ל זה לא נחשף בדליפה של { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] יחד עם זאת, הוא כן נחשף בדליפת נתונים אחת אחרת.
       *[other] יחד עם זאת, הוא כן נחשף ב־{ $breachCount } דליפות נתונים אחרות.
    }
fb-comp-only = דוא״ל זה נחשף בדליפה של { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] דוא״ל זה נחשף בדליפת נתונים מוכרת אחת, כולל { $breachName }.
       *[other] דוא״ל זה נחשף ב־{ $breachCount } דליפות נתונים מוכרות, כולל { $breachName }.
    }

##

no-results-blurb = מצטערים, דליפה זו אינה נמצאת בבסיס הנתונים שלנו.
# "Appears in-page as: Showing: All Breaches"
currently-showing = מופיעות:

## Updated error messages

error-bot-headline = החיפושים מושהים באופן זמני
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
# Button
see-additional-breaches = הצגת דליפות נוספות
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] דוא״ל זה נחשף בדליפת נתונים מוכרת אחת.
       *[other] דוא״ל זה נחשף ב־{ $breachCount } דליפות נתונים מוכרות.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = תוצאות עבור: { $userEmail }
alert-about-new-breaches = להודיע לי על דליפות חדשות
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = מידע נוסף, כולל:
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = סינון לפי קטגוריה:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = תפריט
to-affected-email = שליחת התראות על דליפות לכתובת הדוא״ל המושפעת
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = יש דרך להגן על הפרטיות שלך. להצטרף ל־{ -brand-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# Variables:
#   $email (String) - User email address
email-added-to-subscription = נודיע לך אם { $email } נחשף בדליפת נתונים.

##

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = דליפה נוספה:

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".


##


## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".


##

# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] דליפת נתונים מוכרת אחת סומנה שטופלה
       *[other] דליפות נתונים מוכרות סומנו שטופלו
    }

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`


## Relay and VPN educational/ad units


# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

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

