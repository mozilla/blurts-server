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
        [one] <nr>{ $nr }</nr> <label>datalekkasje</label>
       *[other] <nr>{ $nr }</nr> <label>datalekkasjer</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>løst</label>
exposure-chart-legend-heading-type = Eksponering
exposure-chart-legend-heading-nr = Antall
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Dette diagrammet viser hvor mange ganger dine opplysninger har blitt aktivt eksponert.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Dette diagrammet viser det samlede antallet eksponeringer som er blitt løst ({ $total_fixed_exposures_num } av { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Hjemmeadresse, familiemedlemmer og mer er ennå ikke inkludert.
exposure-chart-returning-user-upgrade-prompt-cta = Start en gratis skanning
exposure-chart-scan-in-progress-prompt = <b>Skanning pågår:</b> adresse, familiemedlemmer og mer er ennå ikke inkludert.
modal-active-number-of-exposures-title = Om antall aktive eksponeringer
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Dette diagrammet inkluderer det samlede antallet ganger vi fant hver type data eksponert på tvers av alle datalekkasjer for den { $limit } e-postadressen du for tiden holder øye med.
       *[other] Dette diagrammet inkluderer det samlede antallet ganger vi fant hver type data eksponert på tvers av alle datalekkasjer for opp til { $limit } e-postadresser du for tiden holder øye med.
    }
modal-active-number-of-exposures-part-two = Hvis du for eksempel har 10 eksponeringer av telefonnummeret ditt, kan det bety at ett telefonnummer er eksponert på tvers av 10 forskjellige nettsteder, eller det kan bety at 2 forskjellige telefonnumre ble eksponert på tvers av 5 forskjellige nettsteder.
modal-active-number-of-exposures-part-three-all = Når de er blitt løst, vil de bli lagt til ditt samlede antall løste eksponeringer på løst-siden.
modal-fixed-number-of-exposures-title = Om ditt antall løste eksponeringer
modal-fixed-number-of-exposures-all = Dette diagrammet inkluderer det samlede antallet datalekkasjer som er blitt løst for alle e-postadressene du for tiden holder øye med. Når en eksponering er markert som løst, vil den bli lagt til det samlede antallet her.
modal-cta-ok = OK
modal-cta-got-it = Forstått
open-modal-alt = Åpne modal
close-modal-alt = Lukk modal
progress-card-heres-what-we-fixed-headline-all = Du har løst følgende
progress-card-manually-fixed-headline = Løst manuelt
dashboard-tab-label-action-needed = Krever handling
dashboard-tab-label-fixed = Løst
dashboard-exposures-all-fixed-label = Alt er løst!
dashboard-exposures-area-headline = Vis alle nettsider hvor dine opplysninger er eksponert
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Vi fant { $exposures_unresolved_num } eksponering av dine data.
       *[other] Vi fant { $exposures_unresolved_num } eksponeringer av dine data.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] De ble funnet i { $data_breach_unresolved_num } datalekkasje.
       *[other] De ble funnet på tvers av { $data_breach_unresolved_num } datalekkasjer.
    }
dashboard-fixed-area-headline-all = Vis alle eksponeringer som er løst
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Firma
dashboard-exposures-filter-date-found = Dato funnet
dashboard-exposures-filter-date-found-last-seven-days = Siste 7 dager
dashboard-exposures-filter-date-found-last-thirty-days = Siste 30 dager
dashboard-exposures-filter-date-found-last-year = I fjor
dashboard-exposures-filter-status = Status
popover-open-filter-settings-alt = Velg filtre
dashboard-exposures-filter-show-all = Vis alle
dashboard-exposures-filter-show-results = Vis resultater
dashboard-exposures-filter-reset = Tilbakestill

## Top banner on the dashboard

dashboard-top-banner-section-label = Sammendrag av dashbordet
dashboard-top-banner-your-data-is-protected-title = Dine data er beskyttet
dashboard-top-banner-your-data-is-protected-cta = Se hva som er løst
dashboard-top-banner-protect-your-data-title = La oss beskytte dine data
dashboard-top-banner-protect-your-data-cta = La oss løse det
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Vi fant { $exposures_unresolved_num } eksponering av dine data.
       *[other] Vi fant { $exposures_unresolved_num } eksponeringer av dine data.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] De ble funnet i { $data_breach_unresolved_num } datalekkasje. Vi vil guide deg gjennom hvert steg av hvordan du kan få det løst.
       *[other] De ble funnet på tvers av { $data_breach_unresolved_num } datalekkasjer. Vi vil guide deg gjennom hvert steg av hvordan du kan få det løst.
    }
dashboard-top-banner-no-exposures-found-title = Ingen eksponeringer funnet
dashboard-top-banner-non-us-no-exposures-found-description = Gode nyheter! Vi gikk gjennom alle kjente datalekkasjer og fant ingen eksponeringer. Vi vil fortsette å holde øye med e-postadressen din og varsle deg om det skulle skje en ny lekkasje.
dashboard-no-exposures-label = Ingen eksponeringer funnet
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Godt jobbet – datalekkasjen er løst! Vi fortsetter å overvåke og varsler deg om nye lekkasjer.
       *[other] Godt jobbet – alle de { $exposures_resolved_num } datalekkasje­ne er løst! Vi fortsetter å overvåke og varsler deg om nye lekkasjer.
    }
dashboard-top-banner-monitor-more-cta = Overvåk flere e-postadresser

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Vi søker etter eksponeringer i alle kjente datalekkasjer.  
    Eksponeringene dine vil ha én av følgende statuser:
modal-exposure-indicator-title = Eksponeringsstatuser
modal-exposure-indicator-action-needed = Avansert eller manuell handling er nødvendig for å fullføre en handling.
modal-exposure-indicator-fixed = Eksponeringen er løst, og du trenger ikke å gjøre noe.
