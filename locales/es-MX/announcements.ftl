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
announcement-dialog-empty-state-description = Consulta este espacio con frecuencia para recibir novedades e información sobre las funciones más recientes.
announcement-dialog-trigger-alt = Ver anuncios
announcement-dialog-alt = Lista de anuncios
announcement-small-img-alt = Ícono de anuncios
announcement-big-img-alt = Imagen del anuncio

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Obtén monitoreo gratuito de filtración de datos para hasta { $emailAddressesCount } direcciones de correo electrónico.
       *[other] Obtén monitoreo gratuito de filtración de datos para hasta { $emailAddressesCount } direcciones de correo electrónico.
    }
announcement-free-data-breach-monitoring-description = Mantén la información a salvo con el monitoreo de filtraciones de datos. { -brand-monitor } enviará una alerta si tu información aparece en una filtración.
announcement-free-data-breach-monitoring-cta-label = Saber más
