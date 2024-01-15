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
        [one] <nr>{ $nr }</nr> <label>exposition</label>
       *[other] <nr>{ $nr }</nr> <label>expositiones</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Remediate</label>
exposure-chart-legend-heading-type = Exposition
exposure-chart-legend-heading-nr = Numero
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Iste diagramma monstra quante vices tu info es activemente exponite.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Iste diagramma monstra le total del expositiones que es corrigite ({ $total_fixed_exposures_num } de { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Adresse de casa, familiares e plus non es ancora includite.
exposure-chart-returning-user-upgrade-prompt-cta = Lancea un scansion gratuite
exposure-chart-scan-in-progress-prompt = <b>Scansion in curso:</b> adresse, familiares, e altero non es ancora includite.
modal-active-number-of-exposures-title = Circa tu numero de expositiones active
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Iste diagramma include le quante vices nos trovava cata typo de datos exponite inter tote le violationes de datos pro le { $limit } adresse email que tu actualmente survelia.
       *[other] Iste diagramma include le quante vices nos trovava cata typo de datos exponite inter tote le violationes de datos pro le { $limit } adresses email que tu actualmente survelia.
    }
modal-active-number-of-exposures-part-two = Per exemplo, si tu ha 10 expositiones de tu numero de telephono, que poterea significar que un numero de telephono es exponite inter 10 differente sitos, o illo poterea significar 2 differente numeros de telephono era exponite inter 5 differente sitos.
modal-active-number-of-exposures-part-three-all = Un vice que illos es resolvite, illes sera addite a tu numero total de expositiones corrigite sur le pagina Corrigite.
modal-fixed-number-of-exposures-title = Circa tu numero de expositiones corrigite
modal-fixed-number-of-exposures-all = Iste diagramma include le numero total de violationes de datos que ha essite corrigite pro tote le adresses email que tu actualmente survelia. Un vice que le expositiones es marcate como corrigite, illes sera addite al total ci.
modal-cta-ok = OK
modal-open-alt = Aperir
modal-close-alt = Clauder
progress-card-heres-what-we-fixed-headline-all = Ecce lo que tu remediava
progress-card-manually-fixed-headline = Remediate manualmente
dashboard-tab-label-action-needed = Action necessari
dashboard-tab-label-fixed = Remediate
dashboard-exposures-all-fixed-label = Toto remediate ci!
dashboard-exposures-area-headline = Vide tote le sitos ubi tu info es exponite
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Illo appareva in { $data_breach_unresolved_num } violation de datos:
       *[other] Illo appareva in { $data_breach_unresolved_num } violationes de datos:
    }
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtro
dashboard-exposures-filter-company = Interprisa
dashboard-exposures-filter-date-found = Data de relevamento
dashboard-exposures-filter-date-found-last-seven-days = Ultime 7 dies
dashboard-exposures-filter-date-found-last-thirty-days = Ultime 30 dies
dashboard-exposures-filter-date-found-last-year = Le ultime anno
dashboard-exposures-filter-status = Stato
dashboard-exposures-filter-status-action-needed = Action necessari
dashboard-exposures-filter-status-in-progress = In curso
dashboard-exposures-filter-status-fixed = Remediate
popover-open-filter-settings-alt = Seliger filtros
dashboard-exposures-filter-show-all = Monstrar toto
dashboard-exposures-filter-show-results = Monstrar resultatos
dashboard-exposures-filter-reset = Reinitialisar

## Top banner on the dashboard

dashboard-top-banner-section-label = Summario pannello de controlo
dashboard-top-banner-your-data-is-protected-title = Tu datos es protegite
dashboard-top-banner-your-data-is-protected-cta = Vide cosa ha essite remediate.
dashboard-top-banner-lets-keep-protecting-cta = Que nos persevera
dashboard-top-banner-no-exposures-found-title = Nulle expositiones trovate.
dashboard-no-exposures-label = Nulle expositiones trovate.
dashboard-top-banner-monitor-more-cta = Surveliar plus emails

# About Exposure Statuses Modal

modal-exposure-status-title = Re le statos de exposition
