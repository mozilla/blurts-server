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
        [one] <nr>{ $nr }</nr> <label>altistuminen</label>
       *[other] <nr>{ $nr }</nr> <label>altistumista</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>korjattu</label>
exposure-chart-legend-heading-type = Altistuminen
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
modal-cta-ok = OK
modal-open-alt = Avaa
modal-close-alt = Sulje
progress-card-heres-what-we-fixed-headline-all = Tämän korjasit
progress-card-manually-fixed-headline = Käsin korjattu
dashboard-tab-label-action-needed = Toimenpiteitä tarvitaan
dashboard-tab-label-fixed = Korjattu
dashboard-exposures-area-headline = Näytä kaikki sivustot, joissa tietosi ovat altistuneet
dashboard-fixed-area-headline-all = Näytä kaikki altistumiset, jotka on korjattu
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Suodatin
dashboard-exposures-filter-company = Yritys
dashboard-exposures-filter-date-found = Löytymispäivä
dashboard-exposures-filter-date-found-last-seven-days = Viimeiset 7 päivää
dashboard-exposures-filter-date-found-last-thirty-days = Viimeiset 30 päivää
dashboard-exposures-filter-date-found-last-year = Viime vuosi
dashboard-exposures-filter-status = Tila
dashboard-exposures-filter-status-action-needed = Toimenpiteitä tarvitaan
dashboard-exposures-filter-status-in-progress = Meneillään
dashboard-exposures-filter-status-fixed = Korjattu
popover-open-filter-settings-alt = Valitse suodattimet
dashboard-exposures-filter-show-all = Näytä kaikki
dashboard-exposures-filter-show-results = Näytä tulokset

## Top banner on the dashboard

dashboard-top-banner-no-exposures-found-title = Vuotoja ei löytynyt
dashboard-no-exposures-label = Vuotoja ei löytynyt
dashboard-top-banner-monitor-more-cta = Tarkkaile useampia sähköpostiosoitteita

# About Exposure Statuses Modal

modal-exposure-status-title = Tietoja altistumistiloista
