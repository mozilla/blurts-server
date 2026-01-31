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
       *[other] <nr>{ $nr }</nr> <label>eksponeringer</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Løst</label>
exposure-chart-legend-heading-type = Eksponering
exposure-chart-legend-heading-nr = Antal
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Diagrammet viser, hvor mange gange dine oplysninger er blevet eksponeret.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Diagrammet viser det samlede antal løste eksponeringer ({ $total_fixed_exposures_num } af { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Postadresse, familiemedlemmer med mere er ikke inkluderet endnu.
exposure-chart-returning-user-upgrade-prompt-cta = Start en gratis skanning
exposure-chart-scan-in-progress-prompt = <b>Skanning undervejs:</b> Postadresse, familiemedlemmer med mere er ikke inkluderet endnu.
modal-active-number-of-exposures-title = Om antallet af dine aktive eksponeringer
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Diagrammet inkluderet det samlede antal gange, vi har fundet hver type af data eksponeret på tværs af alle datalæk for den mailadresse, du aktuelt holder øje med.
       *[other] Diagrammet inkluderet det samlede antal gange, vi har fundet hver type af data eksponeret på tværs af alle datalæk for op til { $limit } mailadresser, du aktuelt holder øje med.
    }
modal-active-number-of-exposures-part-two = Hvis du for eksempel har ti eksponeringer af dit telefonnummer, så kan det betyde, at ét telefonnummer er eksponeret på ti forskellige websteder - eller at to forskellige telefonnumre er eksponeret på fem forskellige websteder.
modal-active-number-of-exposures-part-three-all = Når de er løst, vil de blive føjet til dit samlede antal løste eksponeringer på siden Løst.
modal-fixed-number-of-exposures-title = Om dit antal løste eksponeringer
modal-fixed-number-of-exposures-all = Diagrammet inkluderer det samlede antal datalæk, der er blevet løst for alle mailadresser, du aktuelt holder øje med. Når eksponeringer er løst, bliver de føjet til det samlede antal her.
modal-cta-ok = OK
modal-cta-got-it = Forstået
open-modal-alt = Åbn dialogboks
close-modal-alt = Luk dialogboks
progress-card-heres-what-we-fixed-headline-all = Du har løst følgende
progress-card-manually-fixed-headline = Løst manuelt
dashboard-tab-label-action-needed = Handling påkrævet
dashboard-tab-label-fixed = Løst
dashboard-exposures-all-fixed-label = Alt er løst!
dashboard-exposures-area-headline = Vis alle websteder, hvor dine oplysninger er eksponeret
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Vi fandt { $exposures_unresolved_num } eksponering af dine data.
       *[other] Vi fandt { $exposures_unresolved_num } eksponeringer af dine data.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] De optrådte i { $data_breach_unresolved_num } datalæk.
       *[other] De optrådte i { $data_breach_unresolved_num } datalæk.
    }
dashboard-fixed-area-headline-all = Vis alle løste eksponeringer
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrer
dashboard-exposures-filter-company = Virksomhed
dashboard-exposures-filter-date-found = Dato fundet
dashboard-exposures-filter-date-found-last-seven-days = Seneste 7 dage
dashboard-exposures-filter-date-found-last-thirty-days = Seneste 30 dage
dashboard-exposures-filter-date-found-last-year = Seneste år
dashboard-exposures-filter-status = Status
popover-open-filter-settings-alt = Vælg filtre
dashboard-exposures-filter-show-all = Vis alle
dashboard-exposures-filter-show-results = Vis resultater
dashboard-exposures-filter-reset = Nulstil

## Top banner on the dashboard

dashboard-top-banner-section-label = Sammenfatning af oversigt
dashboard-top-banner-your-data-is-protected-title = Dine data er beskyttet
dashboard-top-banner-your-data-is-protected-cta = Se, hvad som er løst
dashboard-top-banner-protect-your-data-title = Lad os beskytte dine data
dashboard-top-banner-protect-your-data-cta = Lad os løse det
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Vi fandt { $exposures_unresolved_num } eksponering af dine data.
       *[other] Vi fandt { $exposures_unresolved_num } eksponeringer af dine data.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] De optrådte i { $data_breach_unresolved_num } datalæk. Vi viser dig trin for trin, hvordan du løser problemet.
       *[other] De optrådte i { $data_breach_unresolved_num } datalæk. Vi viser dig trin for trin, hvordan du løser problemet.
    }
dashboard-top-banner-no-exposures-found-title = Ingen eksponeringer fundet
dashboard-top-banner-non-us-no-exposures-found-description = Gode nyheder! Vi har gennemsøgt alle kendte datalæk og fandt ingen eksponeringer. Vi fortsætter med at holde øje med din mailadresse og giver dig besked, hvis et nyt datalæk finder sted.
dashboard-no-exposures-label = Ingen eksponeringer fundet
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Godt gået, eksponeringen af dine data er løst! Vi fortsætter med at holde øje og giver dig besked, hvis vi opdager nye eksponeringer.
       *[other] Godt gået, { $exposures_resolved_num } eksponeringer af dine data er løst! Vi fortsætter med at holde øje og giver dig besked, hvis vi opdager nye eksponeringer.
    }
dashboard-top-banner-monitor-more-cta = Hold øje med flere mailadresser

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Vi leder efter eksponeringer i alle kendte datalæk.
    Dine eksponeringer vil have én af følgende statusser:
modal-exposure-indicator-title = Status for eksponeringer
modal-exposure-indicator-action-needed = For at løse problemet skal du udføre en avanceret eller manuel handling.
modal-exposure-indicator-fixed = Eksponeringen er løst, og du behøver ikke at gøre noget.
