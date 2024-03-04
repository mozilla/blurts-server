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
        [one] <nr>{ $nr }</nr> <label>eksponering</label>
       *[other] <nr>{ $nr }</nr> <label>eksponeringar</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>løyste</label>
exposure-chart-legend-heading-type = Eksponering
exposure-chart-legend-heading-nr = Antal
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-returning-user-upgrade-prompt-cta = Start ei gratis skanning
modal-cta-ok = OK
modal-open-alt = Opne
modal-close-alt = Lat att
progress-card-manually-fixed-headline = Manuelt løyst
dashboard-tab-label-action-needed = Handling påkravd
dashboard-tab-label-fixed = Løyst
dashboard-exposures-all-fixed-label = Alt løyst her!
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Firma
dashboard-exposures-filter-date-found = Dato for oppdaginga
dashboard-exposures-filter-date-found-last-seven-days = Siste 7 dagar
dashboard-exposures-filter-date-found-last-thirty-days = Siste 30 dagar
dashboard-exposures-filter-date-found-last-year = Førre år
dashboard-exposures-filter-status = Status
dashboard-exposures-filter-status-action-needed = Handling påkravd
dashboard-exposures-filter-status-in-progress = I framdrift
dashboard-exposures-filter-status-fixed = Løyst
popover-open-filter-settings-alt = Vel filter
dashboard-exposures-filter-show-all = Vis alle
dashboard-exposures-filter-show-results = Vis resultat
dashboard-exposures-filter-reset = Tilbakestill

## Top banner on the dashboard

dashboard-top-banner-section-label = Oversynsoppsummering
dashboard-top-banner-scan-in-progress-title = Skanninga held framleis på
dashboard-top-banner-your-data-is-protected-title = DIne data er verna
dashboard-top-banner-your-data-is-protected-cta = Sjå kva som er løyst
dashboard-top-banner-lets-keep-protecting-title = La oss halde fram med å verne dataa dine
dashboard-top-banner-monitor-more-cta = Overvak fleire e-postadresser

# About Exposure Statuses Modal

modal-exposure-status-title = Om eksponeringsstatusar
