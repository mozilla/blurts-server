# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Novidade
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Tudo
# To go back to the list of announcements
announcement-dialog-back = Voltar
announcement-dialog-clear-all = Marcar tudo como lido
announcement-dialog-empty-state-title = Nenhuma atualização
announcement-dialog-empty-state-description = Verifique regularmente se há atualizações e informações sobre nossos recursos mais recentes.
announcement-dialog-trigger-alt = Abrir comunicados
announcement-dialog-alt = Lista de comunicados
announcement-small-img-alt = Ícone de comunicado
announcement-big-img-alt = Imagem de comunicado

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
       *[other] Tenha monitoramento gratuito de vazamentos de dados de até { $emailAddressesCount } endereços de email.
    }
announcement-free-data-breach-monitoring-description = Ajude a manter suas informações seguras com o monitoramento de vazamentos de dados. O { -brand-monitor } irá alertar você caso suas informações apareçam em um vazamento de dados.
announcement-free-data-breach-monitoring-cta-label = Saiba mais
