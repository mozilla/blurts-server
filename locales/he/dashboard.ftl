# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading =
    { $nr ->
        [one] <label>חשיפה</label> אחת
       *[other] <nr>{ $nr }</nr> <label>חשיפות</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>טופלו</label>
exposure-chart-legend-heading-type = חשיפה
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = תרשים זה מציג כמה פעמים המידע שלך נחשף כרגע.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = תרשים זה מציג את סך החשיפות שטופלו ({ $total_fixed_exposures_num } מתוך { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = כתובת מגורים, בני משפחה ועוד עדיין לא כלולים.
exposure-chart-returning-user-upgrade-prompt-cta = התחלת סריקה בחינם
exposure-chart-scan-in-progress-prompt = <b>סריקה מתבצעת:</b> כתובת מגורים, בני משפחה ועוד עדיין לא כלולים.
dashboard-exposures-area-headline = הצגת כל האתרים בהם המידע שלך חשוף
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] מצאנו חשיפה אחת של הנתונים שלך.
       *[other] מצאנו { $exposures_unresolved_num } חשיפות של הנתונים שלך.
    }
dashboard-fixed-area-headline-all = הצגת כל החשיפות שתוקנו
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = סינון
dashboard-exposures-filter-company = חברה
dashboard-exposures-filter-date-found-last-seven-days = 7 הימים האחרונים
dashboard-exposures-filter-date-found-last-thirty-days = 30 הימים האחרונים
dashboard-exposures-filter-date-found-last-year = השנה האחרונה
dashboard-exposures-filter-status = מצב
popover-open-filter-settings-alt = בחירת מסננים
dashboard-exposures-filter-show-all = הצגת הכול
dashboard-exposures-filter-show-results = הצגת תוצאות
dashboard-exposures-filter-reset = איפוס

## Top banner on the dashboard

# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] מצאנו חשיפה אחת של הנתונים שלך.
       *[other] מצאנו { $exposures_unresolved_num } חשיפות של הנתונים שלך.
    }
dashboard-top-banner-no-exposures-found-title = לא נמצאו חשיפות
dashboard-no-exposures-label = לא נמצאו חשיפות
dashboard-top-banner-monitor-more-cta = ניטור כתובות דוא״ל נוספות

# About Exposure Indicators Modal

modal-exposure-indicator-fixed = החשיפה נפתרה ואין לך צורך לנקוט בפעולות נוספות.
