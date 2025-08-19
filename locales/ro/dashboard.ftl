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
        [one] <nr>{ $nr }</nr> <label>expunere</label>
        [few] <nr>{ $nr }</nr> <label>expuneri</label>
       *[other] <nr>{ $nr }</nr> <label>de expuneri</label>
    }
exposure-chart-legend-heading-type = Expunere
exposure-chart-legend-heading-nr = Număr
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Acest grafic arată de câte ori informațiile tale sunt expuse în mod activ.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Acest grafic arată expunerile totale care sunt fixe ({ $total_fixed_exposures_num } din { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Adresa de domiciliu, membrii familiei și altele nu sunt încă incluse.
exposure-chart-returning-user-upgrade-prompt-cta = Începe o scanare gratuită
exposure-chart-scan-in-progress-prompt = <b>Scanare în curs:</b> adresa, membrii familiei și altele nu sunt încă incluse.
modal-active-number-of-exposures-title = Despre numărul tău de expuneri active
progress-card-heres-what-we-fixed-headline-all = Iată ce ai remediat
progress-card-manually-fixed-headline = Remediat manual
dashboard-tab-label-action-needed = Necesită atenție
dashboard-tab-label-fixed = Rezolvat
dashboard-exposures-all-fixed-label = Totul s-a rezolvat aici!
dashboard-exposures-area-headline = Vezi toate site-urile unde sunt expuse informațiile tale
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Am găsit o { $exposures_unresolved_num } expunere ale datelor tale.
        [few] Am găsit { $exposures_unresolved_num } expuneri ale datelor tale.
       *[other] Am găsit { $exposures_unresolved_num } de expuneri ale datelor tale.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] A apărut în { $data_breach_unresolved_num } încălcare a securității datelor.
        [few] A apărut în { $data_breach_unresolved_num } încălcări ale securității datelor.
       *[other] A apărut în { $data_breach_unresolved_num } de încălcări ale securității datelor.
    }
dashboard-fixed-area-headline-all = Vezi toate expunerile care sunt remediate
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrează
dashboard-exposures-filter-company = Companie
dashboard-exposures-filter-date-found = Data găsirii
dashboard-exposures-filter-date-found-last-seven-days = Ultimele 7 zile
dashboard-exposures-filter-date-found-last-thirty-days = Ultimele 30 de zile
dashboard-exposures-filter-date-found-last-year = Anul trecut
dashboard-exposures-filter-status = Stare
popover-open-filter-settings-alt = Selectează filtrele
dashboard-exposures-filter-show-all = Afișează tot
dashboard-exposures-filter-show-results = Afișează rezultatele
dashboard-exposures-filter-reset = Resetează

## Top banner on the dashboard

dashboard-top-banner-section-label = Rezumatul tabloului de bord
dashboard-top-banner-scan-in-progress-title = Scanarea este încă în curs
dashboard-top-banner-your-data-is-protected-title = Datele tale sunt protejate
dashboard-top-banner-your-data-is-protected-cta = Vezi ce s-a remediat
dashboard-top-banner-lets-keep-protecting-title = Hai să îți protejăm în continuare datele
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Mai ai încă { $exposures_unresolved_num } expunere de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
        [few] Mai ai încă { $exposures_unresolved_num } expuneri de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
       *[other] Mai ai încă { $exposures_unresolved_num } de expuneri de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
    }
dashboard-top-banner-lets-keep-protecting-cta = Să continuăm
dashboard-top-banner-protect-your-data-title = Să îți protejăm datele
dashboard-top-banner-protect-your-data-cta = Să o remediem
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Am găsit { $exposures_unresolved_num } expunere ale datelor tale.
        [few] Am găsit { $exposures_unresolved_num } expuneri ale datelor tale.
       *[other] Am găsit { $exposures_unresolved_num } de expuneri ale datelor tale.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] A apărut în { $data_breach_unresolved_num } încălcare a securității datelor. Te vom ghida pas cu pas despre cum să o remediezi.
        [few] A apărut în { $data_breach_unresolved_num } încălcări ale securității datelor. Te vom ghida pas cu pas despre cum să le remediezi.
       *[other] A apărut în { $data_breach_unresolved_num } de încălcări ale securității datelor. Te vom ghida pas cu pas despre cum să le remediezi.
    }

# About Exposure Indicators Modal

