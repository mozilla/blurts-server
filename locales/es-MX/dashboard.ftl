# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

exposure-chart-legend-heading-nr = Número
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
modal-cta-ok = Aceptar
modal-cta-got-it = Entendido
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtro
dashboard-exposures-filter-company = Compañía
dashboard-exposures-filter-date-found-last-seven-days = Últimos 7 días
dashboard-exposures-filter-date-found-last-thirty-days = Últimos 30 días
dashboard-exposures-filter-date-found-last-year = El año pasado
dashboard-exposures-filter-status = Estado
popover-open-filter-settings-alt = Seleccionar filtros
dashboard-exposures-filter-show-all = Mostrar todo
dashboard-exposures-filter-show-results = Mostrar resultados

## Top banner on the dashboard

dashboard-top-banner-your-data-is-protected-title = Tus datos están protegidos
dashboard-top-banner-lets-keep-protecting-title = Sigamos protegiendo tus datos
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Todavía te queda { $exposures_unresolved_num } exposición por corregir. Sigue adelante y protégete. Te guiaremos paso a paso.
       *[other] Todavía te quedan { $exposures_unresolved_num } exposiciones por corregir. Sigue adelante y protégete. Te guiaremos paso a paso.
    }
dashboard-top-banner-lets-keep-protecting-cta = Sigamos adelante
dashboard-top-banner-protect-your-data-title = Protejamos tus datos
dashboard-top-banner-protect-your-data-cta = Vamos a corregirlo
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Encontramos { $exposures_unresolved_num } exposición de sus datos.
       *[other] Encontramos { $exposures_unresolved_num } exposiciones de sus datos.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Apareció en la filtración de datos { $data_breach_unresolved_num }. Le guiaremos paso a paso sobre cómo solucionarlo.
       *[other] Apareció en { $data_breach_unresolved_num } filtraciones de datos. Le guiaremos paso a paso sobre cómo solucionarlo.
    }
dashboard-top-banner-no-exposures-found-title = No se han encontrado exposiciones
dashboard-top-banner-non-us-no-exposures-found-description = ¡Buenas noticias! Buscamos todas las filtraciones de datos conocidas y no encontramos exposiciones. Seguiremos monitorizando tu dirección de correo electrónico y te avisaremos si ocurre una nueva filtración.
dashboard-no-exposures-label = No se han encontrado exposiciones
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] ¡Excelente trabajo, la exposición de tus datos está arreglada! Seguiremos monitoreando y te alertaremos sobre cualquier nueva exposición.
       *[other] ¡Excelente trabajo, todas las exposiciones de { $exposures_resolved_num } de tus datos están arregladas! Seguiremos monitoreando y te alertaremos sobre cualquier nueva exposición.
    }
dashboard-top-banner-monitor-more-cta = Monitorear más correos electrónicos

# About Exposure Indicators Modal

modal-exposure-status-description-all = Buscamos exposiciones en todas las filtraciones de datos conocidas. Tus exposiciones tendrán uno de los siguientes estados:
modal-exposure-indicator-title = Estados de exposición
modal-exposure-indicator-action-needed = Se necesita una acción avanzada o manual para completar una acción.
modal-exposure-indicator-fixed = La exposición ha sido resuelta y no tienes que tomar ninguna medida.
