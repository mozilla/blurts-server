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
exposure-chart-caption = Tämä kaavio näyttää, kuinka monta kertaa tietosi ovat aktiivisesti altistuneet.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Tämä kaavio näyttää ratkaistut altistumiset ({ $total_fixed_exposures_num }/{ $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Kotiosoite, perheenjäsenet ja muut eivät vielä sisälly.
exposure-chart-returning-user-upgrade-prompt-cta = Aloita ilmainen tarkistus
exposure-chart-scan-in-progress-prompt = <b>Tarkistus käynnissä:</b> osoite, perheenjäsenet ja muut eivät vielä sisälly.
modal-active-number-of-exposures-title = Tietoja aktiivisten altistumisten määrästä
modal-cta-ok = OK
modal-cta-got-it = Selvä
progress-card-heres-what-we-fixed-headline-all = Tämän korjasit
progress-card-manually-fixed-headline = Käsin korjattu
dashboard-tab-label-action-needed = Toimenpiteitä tarvitaan
dashboard-tab-label-fixed = Korjattu
dashboard-exposures-all-fixed-label = Kaikki korjattu täällä!
dashboard-exposures-area-headline = Näytä kaikki sivustot, joissa tietosi ovat altistuneet
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Havaitsimme { $exposures_unresolved_num } tietojesi altistumisen.
       *[other] Havaitsimme { $exposures_unresolved_num } tietojesi altistumista.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Se esiintyi { $data_breach_unresolved_num } tietovuodossa.
       *[other] Se esiintyi { $data_breach_unresolved_num } tietovuodossa.
    }
dashboard-fixed-area-headline-all = Näytä kaikki altistumiset, jotka on korjattu
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Suodatin
dashboard-exposures-filter-company = Yritys
dashboard-exposures-filter-date-found = Löytymispäivä
dashboard-exposures-filter-date-found-last-seven-days = Viimeiset 7 päivää
dashboard-exposures-filter-date-found-last-thirty-days = Viimeiset 30 päivää
dashboard-exposures-filter-date-found-last-year = Viime vuosi
dashboard-exposures-filter-status = Tila
popover-open-filter-settings-alt = Valitse suodattimet
dashboard-exposures-filter-show-all = Näytä kaikki
dashboard-exposures-filter-show-results = Näytä tulokset

## Top banner on the dashboard

dashboard-top-banner-section-label = Hallintapaneelin yhteenveto
dashboard-top-banner-your-data-is-protected-title = Tietosi on suojattu
dashboard-top-banner-your-data-is-protected-cta = Näytä ratkaistut
dashboard-top-banner-protect-your-data-title = Suojataan tietosi
dashboard-top-banner-protect-your-data-cta = Korjataan se
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Havaitsimme { $exposures_unresolved_num } tietojesi altistumisen.
       *[other] Havaitsimme { $exposures_unresolved_num } tietojesi altistumista.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Se esiintyy { $data_breach_unresolved_num } tietovuodossa. Opastamme sinua vaihe vaiheelta, kuinka korjata asia.
       *[other] Se esiintyy { $data_breach_unresolved_num } tietovuodossa. Opastamme sinua vaihe vaiheelta, kuinka korjata asia.
    }
dashboard-top-banner-no-exposures-found-title = Vuotoja ei löytynyt
dashboard-top-banner-non-us-no-exposures-found-description = Hyviä uutisia! Etsimme kaikki tunnetut tietovuodot, emmekä löytäneet altistumista. Seuraamme edelleen sähköpostiosoitettasi ja ilmoitamme sinulle, jos uusi tietovuoto ilmenee.
dashboard-no-exposures-label = Vuotoja ei löytynyt
dashboard-top-banner-monitor-more-cta = Tarkkaile useampia sähköpostiosoitteita

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Etsimme altistumisia kaikista tunnetuista tietovuodoista.
    Altistumisilla on jokin seuraavista tiloista:
modal-exposure-indicator-title = Altistumistilat
modal-exposure-indicator-fixed = Altistuminen on ratkaistu, eikä sinun tarvitse tehdä mitään.
