# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Novo
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Tudo
# To go back to the list of announcements
announcement-dialog-back = Retroceder
announcement-dialog-clear-all = Marcar tudo como lida
announcement-dialog-empty-state-title = Sem atualizações
announcement-dialog-empty-state-description = Volte regularmente para atualizações e informações sobre as nossas funcionalidades mais recentes.
announcement-dialog-trigger-alt = Abrir anúncios
announcement-dialog-alt = Lista de anúncios
announcement-small-img-alt = Ícone de anúncio
announcement-big-img-alt = Imagem de anúncio

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Obtenha a monitorização gratuita de violações de dados para até { $emailAddressesCount } endereços de e-mail.
       *[other] Obtenha a monitorização gratuita de violações de dados para até { $emailAddressesCount } endereços de e-mail.
    }
announcement-free-data-breach-monitoring-description = Ajude a manter as suas informações seguras com a monitorização de violações de dados. { -brand-monitor } irá alertá-lo se a sua informação aparecer numa violação de dados.
announcement-free-data-breach-monitoring-cta-label = Saber mais
