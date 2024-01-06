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
        [one] <nr>{ $nr }</nr> <label>jehechauka</label>
       *[other] <nr>{ $nr }</nr> <label>jehechaukakuéra</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Ojáva</label>
exposure-chart-legend-heading-type = Ejehechauka
exposure-chart-legend-heading-nr = Papapy
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-returning-user-upgrade-prompt-cta = Emoha’ãnga reiete
modal-cta-ok = MONEĨ
modal-open-alt = Ijurujáva
modal-close-alt = Mboty
progress-card-heres-what-we-fixed-headline-all = Kóva pe emoĩporãva
progress-card-manually-fixed-headline = Pópe ñembojáva
dashboard-tab-label-action-needed = Tekotevẽva ojejapo
dashboard-tab-label-fixed = Opytáva
dashboard-exposures-all-fixed-label = ¡Oĩporãma ko’ápe!
dashboard-exposures-area-headline = Ehecha umi tenda ne marandu oñembyaikuaaha
dashboard-fixed-area-headline-all = Ehecha umi jehechaukakue oĩporãjeýmava
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Mbogua
dashboard-exposures-filter-company = Atyguasu
dashboard-exposures-filter-date-found = Arange juhupyre
dashboard-exposures-filter-date-found-last-seven-days = 7 ára ohasaramova
dashboard-exposures-filter-date-found-last-thirty-days = 30 ára ohasaramova
dashboard-exposures-filter-date-found-last-year = Ary ohasaramóva
dashboard-exposures-filter-status = Tekotee
dashboard-exposures-filter-status-action-needed = Tekotevẽva ojejapo
dashboard-exposures-filter-status-in-progress = Ojejapóva
dashboard-exposures-filter-status-fixed = Opytáva
popover-open-filter-settings-alt = Eiporavo mboguaha
dashboard-exposures-filter-show-all = Techaukapaite
dashboard-exposures-filter-show-results = Ehechauka tembiapokue
dashboard-exposures-filter-reset = Mbojevyjey

## Top banner on the dashboard

dashboard-top-banner-section-label = Mba’erupa momichĩ
dashboard-top-banner-scan-in-progress-title = Ne ñemoha’ãnga oiko gueteri
dashboard-top-banner-your-data-is-protected-title = Ne mba’ekuaarã oñemo’ã
dashboard-top-banner-your-data-is-protected-cta = Ehecha oĩporãmava
dashboard-top-banner-lets-keep-protecting-title = Romo’ãta gueteri ne mba’ekuaarã
dashboard-top-banner-lets-keep-protecting-cta = Jaku’ejeýke
dashboard-top-banner-no-exposures-found-title = Ndojejuhúi máva jehechauka
dashboard-no-exposures-label = Ndojejuhúi máva jehechauka
dashboard-top-banner-monitor-more-cta = Roma’ẽag̃uíta hetave ñanduti vevére

# About Exposure Statuses Modal

modal-exposure-status-title = Jehechauka rekotee rehegua
