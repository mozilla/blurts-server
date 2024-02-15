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
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Este gráfico incluye la cantidad total de veces que encontramos cada tipo de datos expuestos en todas las filtraciones de datos para hasta { $limit } dirección de correo electrónico que estás monitoreando.
       *[other] Este gráfico incluye la cantidad total de veces que encontramos cada tipo de datos expuestos en todas las filtraciones de datos para hasta { $limit } direcciones de correo electrónico que estás monitoreando.
    }
modal-active-number-of-exposures-part-two = Por ejemplo, si tienes 10 exposiciones de tu número de teléfono, eso podría significar que 1 número de teléfono está expuesto en 10 sitios diferentes o podría significar que 2 números de teléfono diferentes se expusieron en 5 sitios diferentes.
modal-active-number-of-exposures-part-three-all = Una vez que se resuelvan, se agregarán a tu número total de exposiciones corregidas en la página de Corregidas.
modal-fixed-number-of-exposures-title = Acerca del número de exposiciones arregladas
modal-fixed-number-of-exposures-all = Este gráfico incluye el número total de filtraciones de datos que se han solucionado para todas las direcciones de correo electrónico que estás monitoreando actualmente. Una vez que las exposiciones se marquen como corregidas, se agregarán al total aquí.
modal-cta-ok = Aceptar
modal-open-alt = Abrir
modal-close-alt = Cerrar
progress-card-heres-what-we-fixed-headline-all = Esto es lo que corregiste
progress-card-manually-fixed-headline = Corregida de forma manual
dashboard-tab-label-action-needed = Acción necesaria
dashboard-tab-label-fixed = Corregida
dashboard-exposures-all-fixed-label = ¡Todo lo corregido está aquí!
dashboard-exposures-area-headline = Ver todos los sitios donde se expone tu información
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Encontramos { $exposures_unresolved_num } exposición de tus datos.
       *[other] Encontramos { $exposures_unresolved_num } exposiciones de tus datos.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Apareció en { $data_breach_unresolved_num } filtración de datos.
       *[other] Apareció en { $data_breach_unresolved_num } filtraciones de datos.
    }
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
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Todavía te queda { $exposures_unresolved_num } exposición por arreglar. Sigue adelante y protégete. Te guiaremos paso a paso.
       *[other] Todavía te quedan { $exposures_unresolved_num } exposiciones por arreglar. Sigue adelante y protégete. Te guiaremos paso a paso.
    }
dashboard-top-banner-lets-keep-protecting-cta = Sigamos adelante
dashboard-top-banner-protect-your-data-title = Protejamos tus datos
dashboard-top-banner-protect-your-data-cta = Arreglémoslo
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Encontramos { $exposures_unresolved_num } exposición de tus datos.
       *[other] Encontramos { $exposures_unresolved_num } exposiciones de tus datos.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Apareció en { $data_breach_unresolved_num } filtración de datos. Te guiaremos paso a paso sobre cómo solucionarlo.
       *[other] Apareció en { $data_breach_unresolved_num } filtraciones de datos. Te guiaremos paso a paso sobre cómo solucionarlo.
    }
dashboard-top-banner-no-exposures-found-title = No se encontraron exposiciones
dashboard-top-banner-non-us-no-exposures-found-description = ¡Buenas noticias! Buscamos todas las filtraciones de datos conocidas y no encontramos exposiciones. Seguiremos monitoreando tu dirección de correo electrónico y te avisaremos si ocurre una nueva filtración.
dashboard-no-exposures-label = No se encontraron exposiciones
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] ¡Buen trabajo, la exposición de tus datos está corregida! Seguiremos monitoreando y te avisaremos de cualquier nueva exposición.
       *[other] ¡Buen trabajo, todas las { $exposures_resolved_num } exposiciones de tus datos están corregidas! Seguiremos monitoreando y te avisaremos de cualquier nueva exposición.
    }
dashboard-top-banner-monitor-more-cta = Monitorear más correos

# About Exposure Statuses Modal

modal-exposure-status-title = Acerca de los estados de exposición
modal-exposure-status-description-all = Buscamos exposiciones en todas las filtraciones de datos conocidas. Tus exposiciones tendrán uno de los siguientes estados:
modal-exposure-status-action-needed = <b>Acción necesaria</b> significa que está activa en este momento y necesitás tomar medidas para solucionarlo.
modal-exposure-status-fixed = <b>Corregida</b> significa que la exposición se ha resuelto y no hay que hacer nada.
