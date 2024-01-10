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
        [one] <nr>{ $nr }</nr> <label>exposición</label>
       *[other] <nr>{ $nr }</nr> <label>exposiciones</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>corregidas</label>
exposure-chart-legend-heading-type = Exposición
exposure-chart-legend-heading-nr = Número
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Este gráfico muestra cuántas veces tu información está activamente expuesta.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Este gráfico muestra el total de exposiciones corregidas ({ $total_fixed_exposures_num } de { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = El domicilio, los miembros de la familia y otros datos aún no están incluidos.
exposure-chart-returning-user-upgrade-prompt-cta = Iniciar un escaneo gratuito
exposure-chart-scan-in-progress-prompt = <b> Escaneo en proceso: </b> direcciones, miembros de la familia y otros aún no están incluidos.
modal-active-number-of-exposures-title = Acerca del número de exposiciones activas
modal-active-number-of-exposures-part-three-all = Una vez que se resuelvan, se agregarán a tu número total de exposiciones corregidas en la página de Corregidas.
modal-cta-ok = Aceptar
modal-open-alt = Abrir
modal-close-alt = Cerrar
progress-card-heres-what-we-fixed-headline-all = Esto es lo que corregiste
progress-card-manually-fixed-headline = Corregida de forma manual
dashboard-tab-label-action-needed = Acción necesaria
dashboard-tab-label-fixed = Corregida
dashboard-exposures-all-fixed-label = ¡Todo lo corregido está aquí!
dashboard-exposures-area-headline = Ver todos los sitios donde se expone tu información
dashboard-fixed-area-headline-all = Ver todas las exposiciones que están corregidas
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtro
dashboard-exposures-filter-company = Compañía
dashboard-exposures-filter-date-found = Fecha encontrada
dashboard-exposures-filter-date-found-last-seven-days = Últimos 7 días
dashboard-exposures-filter-date-found-last-thirty-days = Últimos 30 días
dashboard-exposures-filter-date-found-last-year = Último año
dashboard-exposures-filter-status = Estado
dashboard-exposures-filter-status-action-needed = Acción necesaria
dashboard-exposures-filter-status-in-progress = En proceso
dashboard-exposures-filter-status-fixed = Corregida
popover-open-filter-settings-alt = Seleccionar filtros
dashboard-exposures-filter-show-all = Mostrar todo
dashboard-exposures-filter-show-results = Mostrar resultados
dashboard-exposures-filter-reset = Restablecer

## Top banner on the dashboard

dashboard-top-banner-section-label = Resumen del panel
dashboard-top-banner-scan-in-progress-title = Tu escaneo aún está en proceso
dashboard-top-banner-your-data-is-protected-title = Tus datos están protegidos
dashboard-top-banner-your-data-is-protected-cta = Revisa lo que está corregido
dashboard-top-banner-lets-keep-protecting-title = Sigamos protegiendo tus datos

# About Exposure Statuses Modal

