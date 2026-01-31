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
        [one] <nr>{ $nr }</nr> <label>lek</label>
       *[other] <nr>{ $nr }</nr> <label>lekken</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Opgelost</label>
exposure-chart-legend-heading-type = Lek
exposure-chart-legend-heading-nr = Aantal
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Deze grafiek laat zien hoe vaak uw gegevens actief zijn gelekt.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Deze grafiek toont het totaal aantal opgeloste lekken ({ $total_fixed_exposures_num } van { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Woonadres, familieleden en meer zijn nog niet inbegrepen.
exposure-chart-returning-user-upgrade-prompt-cta = Een gratis scan starten
exposure-chart-scan-in-progress-prompt = <b>Bezig met scannen:</b> adres, gezinsleden en meer zijn nog niet opgenomen.
modal-active-number-of-exposures-title = Over uw aantal actieve lekken
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Deze grafiek toont het totale aantal keren dat we elk type van gelekte gegevens hebben gevonden in alle datalekken voor het ene e-mailadres dat u momenteel monitort.
       *[other] Deze grafiek toont het totale aantal keren dat we elk type van gelekte gegevens in alle datalekken hebben gevonden, tot { $limit } e-mailadressen die u momenteel monitort.
    }
modal-active-number-of-exposures-part-two = Als u bijvoorbeeld 10 lekken van uw telefoonnummer hebt, kan dat betekenen dat één telefoonnummer op 10 verschillende websites wordt gelekt, of het kan betekenen dat 2 verschillende telefoonnummers op 5 verschillende websites zijn gelekt.
modal-active-number-of-exposures-part-three-all = Zodra ze zijn opgelost, worden ze toegevoegd aan uw totale aantal opgeloste lekken op de pagina Opgelost.
modal-fixed-number-of-exposures-title = Over uw aantal opgeloste lekken
modal-fixed-number-of-exposures-all = Deze grafiek toont het totale aantal opgeloste datalekken voor alle e-mailadressen die u momenteel monitort. Zodra lekken als opgelost zijn gemarkeerd, worden ze hier aan het totaal toegevoegd.
modal-cta-ok = OK
modal-cta-got-it = Begrepen
open-modal-alt = Modal openen
close-modal-alt = Modal sluiten
progress-card-heres-what-we-fixed-headline-all = Dit hebt u gerepareerd
progress-card-manually-fixed-headline = Handmatig gerepareerd
dashboard-tab-label-action-needed = Actie nodig
dashboard-tab-label-fixed = Opgelost
dashboard-exposures-all-fixed-label = Alles opgelost!
dashboard-exposures-area-headline = Alle websites waarop uw gegevens zijn gelekt bekijken
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] We hebben { $exposures_unresolved_num } lek van uw gegevens gevonden.
       *[other] We hebben { $exposures_unresolved_num } lekken van uw gegevens gevonden.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Deze zijn verschenen in { $data_breach_unresolved_num } datalek.
       *[other] Deze zijn verschenen in { $data_breach_unresolved_num } datalekken.
    }
dashboard-fixed-area-headline-all = Alle opgeloste lekken tonen
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filteren
dashboard-exposures-filter-company = Bedrijf
dashboard-exposures-filter-date-found = Datum ontdekt
dashboard-exposures-filter-date-found-last-seven-days = Afgelopen 7 dagen
dashboard-exposures-filter-date-found-last-thirty-days = Afgelopen 30 dagen
dashboard-exposures-filter-date-found-last-year = Vorig jaar
dashboard-exposures-filter-status = Status
popover-open-filter-settings-alt = Filters selecteren
dashboard-exposures-filter-show-all = Alles tonen
dashboard-exposures-filter-show-results = Resultaten tonen
dashboard-exposures-filter-reset = Opnieuw instellen

## Top banner on the dashboard

dashboard-top-banner-section-label = Dashboardsamenvatting
dashboard-top-banner-your-data-is-protected-title = Uw gegevens zijn beschermd
dashboard-top-banner-your-data-is-protected-cta = Kijk wat er is opgelost
dashboard-top-banner-protect-your-data-title = Laten we uw gegevens beschermen
dashboard-top-banner-protect-your-data-cta = Laten we het oplossen
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] We hebben { $exposures_unresolved_num } lek van uw gegevens gevonden.
       *[other] We hebben { $exposures_unresolved_num } lekken van uw gegevens gevonden.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Deze zijn verschenen in { $data_breach_unresolved_num } datalek. We helpen u stap voor stap om dit te verhelpen.
       *[other] Deze zijn verschenen in { $data_breach_unresolved_num } datalekken. We helpen u stap voor stap om dit te verhelpen.
    }
dashboard-top-banner-no-exposures-found-title = Geen lekken gevonden
dashboard-top-banner-non-us-no-exposures-found-description = Geweldig nieuws! We hebben alle bekende datalekken doorzocht en geen lekken gevonden. We blijven uw e-mailadres monitoren en zullen u waarschuwen als een nieuw datalek optreedt.
dashboard-no-exposures-label = Geen lekken gevonden
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Goed werk, het lek van uw gegevens is opgelost! We blijven monitoren en zullen u op de hoogte houden van nieuwe lekken.
       *[other] Goed werk, alle { $exposures_resolved_num } lekken van uw gegevens zijn verholpen! We blijven monitoren en zullen u op de hoogte houden van nieuwe lekken.
    }
dashboard-top-banner-monitor-more-cta = Meer e-mailadressen monitoren

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    We zoeken naar lekken in alle bekende datalekken.
    Uw lekken zullen een van de volgende statussen hebben:
modal-exposure-indicator-title = Lekstatussen
modal-exposure-indicator-action-needed = U dient een geavanceerde of handmatige actie uit te voeren om een actie te voltooien.
modal-exposure-indicator-fixed = Het lek is verholpen en u hoeft geen actie te ondernemen.
