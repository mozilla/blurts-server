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
exposure-chart-caption = Dette diagrammet viser kor mange gongar informasjonen din er aktivt eksponert.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Dette diagrammet viser antalet eksponeringar som er løyste ({ $total_fixed_exposures_num } av { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Heimeadresse, familiemedlemmar, med meir, er ikkje inkludert enno.
exposure-chart-returning-user-upgrade-prompt-cta = Start ei gratis skanning
exposure-chart-scan-in-progress-prompt = <b>Skanning i gang:</b> adresse, familiemedlemmar, og meir, er ikkje inkludert enno.
modal-active-number-of-exposures-title = Om antal aktive eksponeringar
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Dette diagrammet viser det totale antalet gongar vi fann kvar type av data eksponert i datalekkasjar for { $limit } e-postadresse som du no overvakar.
       *[other] Dette diagrammet viser det totale antalet gongar vi fann kvar type av data eksponert i datalekkasjar for opp til { $limit } e-postadresser som du no overvakar.
    }
modal-active-number-of-exposures-part-two = Viss du til dømes har 10 eksponeringar av telefonnummeret ditt, kan det bety at eitt telefonnummer er eksponert på 10 ulike nettstadar, eller det kan bety at 2 ulike telefonnummer vart eksponerte på 5 ulike nettstadar.
modal-active-number-of-exposures-part-three-all = Når dei er løyste, vil dei bli lagt til det samla talet faste eksponeringar på Løyst-sida.
modal-fixed-number-of-exposures-title = Om talet på dine løyste eksponeringar
modal-fixed-number-of-exposures-all = Dette diagrammet inkluderer det samla talet datalekkasjar som er løyst for alle e-postadresser du overvaker akkurat no. Når eksponeringar er merkte som løyste, blir dei lagt til i totalen her.
modal-cta-ok = OK
modal-cta-got-it = Eg forstår
open-modal-alt = Opne modal
close-modal-alt = Lat att modal
open-tooltip-alt = Opne verktøytips
progress-card-heres-what-we-fixed-headline-all = Du har løyst følgjande
progress-card-manually-fixed-headline = Manuelt løyst
dashboard-tab-label-action-needed = Handling påkravd
dashboard-tab-label-fixed = Løyst
dashboard-exposures-all-fixed-label = Alt er løyst!
dashboard-exposures-area-headline = Sjå alle nettstadar der informasjonen din er eksponert
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Vi fann { $exposures_unresolved_num } eksponering av dataa dine.
       *[other] Vi fann { $exposures_unresolved_num } eksponeringar av dataa dine.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Han førekom i { $data_breach_unresolved_num } datalekkasje.
       *[other] Han førekom i { $data_breach_unresolved_num } datalekkasjar.
    }
dashboard-fixed-area-headline-all = Vis alle eksponeringar som er løyste
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Firma
dashboard-exposures-filter-date-found = Dato for oppdaginga
dashboard-exposures-filter-date-found-last-seven-days = Siste 7 dagar
dashboard-exposures-filter-date-found-last-thirty-days = Siste 30 dagar
dashboard-exposures-filter-date-found-last-year = Førre år
dashboard-exposures-filter-status = Status
popover-open-filter-settings-alt = Vel filter
dashboard-exposures-filter-show-all = Vis alle
dashboard-exposures-filter-show-results = Vis resultat
dashboard-exposures-filter-reset = Tilbakestill

## Top banner on the dashboard

dashboard-top-banner-section-label = Oversynsoppsummering
dashboard-top-banner-scan-in-progress-title = Skanninga held framleis på
dashboard-top-banner-your-data-is-protected-title = Dine data er verna
dashboard-top-banner-your-data-is-protected-cta = Sjå kva som er løyst
dashboard-top-banner-lets-keep-protecting-title = La oss halde fram med å verne dataa dine
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Du har framleis { $exposures_unresolved_num } eksponering att å løyse. Fortset med å verne deg sjølv. Vi gaidar deg steg-for-steg.
       *[other] Du har framleis { $exposures_unresolved_num } eksponeringar att å løyse. Fortset med å verne deg sjølv. Vi gaidar deg steg-for-steg.
    }
dashboard-top-banner-lets-keep-protecting-cta = La oss halde fram
dashboard-top-banner-protect-your-data-title = La oss verne dataa dine
dashboard-top-banner-protect-your-data-cta = La oss løyse det
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Vi fann { $exposures_unresolved_num } eksponering av dataa dine.
       *[other] Vi fann { $exposures_unresolved_num } eksponeringar av dataa dine.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Han førekom i { $data_breach_unresolved_num } datalekkasje. Vi gaidar deg steg-for-steg om korleis du løyser det.
       *[other] Han førekom i { $data_breach_unresolved_num } datalekkasjar. Vi gaidar deg steg-for-steg om korleis du løyser det.
    }
dashboard-top-banner-no-exposures-found-title = Fann ingen eksponeringar
dashboard-top-banner-non-us-no-exposures-found-description = Gode ​​nyheiter! Vi søkte i alle kjende datalekkasjar og fann ingen eksponeringar. Vi vil halde fram med å overvake e-postadressa di og varsle deg viss ein ny datalekkasje førekjem.
dashboard-no-exposures-label = Fann ingen eksponeringar
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Bra jobba, eksponeringa av dine data er løyst! Vi vil halde fram med overvakinga, og vi vil varsle deg om eventuelle nye eksponeringar.
       *[other] Bra jobba, alle { $exposures_resolved_num } eksponeringar av dine data er fiksa! Vi vil halde fram med overvakinga, og vi vil varsle deg om eventuelle nye eksponeringar.
    }
dashboard-top-banner-monitor-more-cta = Overvak fleire e-postadresser

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Vi søkjer etter eksponeringar i alle kjende datalekkasjar.
    Eksponeringane dine vil ha ein av følgjande statusar:
modal-exposure-indicator-title = Status for eksponeringar
modal-exposure-indicator-action-needed = Avansert eller manuell handling er nødvendig for å fullføre ei handling.
modal-exposure-indicator-fixed = Eksponeringa er løyst, og du treng ikkje å gjere noko.
