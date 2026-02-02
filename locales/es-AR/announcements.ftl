# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Nuevo
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Todo
# To go back to the list of announcements
announcement-dialog-back = Atrás
announcement-dialog-clear-all = Marcar todo como leído
announcement-dialog-empty-state-title = Sin actualizaciones
announcement-dialog-empty-state-description = Vuelva a consultar periódicamente para obtener actualizaciones e información sobre nuestras últimas funciones.
announcement-dialog-trigger-alt = Abrir anuncios
announcement-dialog-alt = Lista de anuncios
announcement-small-img-alt = Icono de anuncio
announcement-big-img-alt = Imagen de anuncio

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Conseguí monitoreo gratuito de filtraciones de datos para hasta { $emailAddressesCount } dirección de correo electrónico.
       *[other] Conseguí monitoreo gratuito de filtraciones de datos para hasta { $emailAddressesCount } direcciones de correo electrónico.
    }
announcement-free-data-breach-monitoring-description = Ayudá a mantener tu información segura con el monitoreo de filtraciones de datos. { -brand-monitor } te avisará si tu información aparece en una filtración de datos.
announcement-free-data-breach-monitoring-cta-label = Conocer más
