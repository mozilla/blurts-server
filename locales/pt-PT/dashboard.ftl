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
        [one] <nr>{ $nr }</nr> <label>exposição</label>
       *[other] <nr>{ $nr }</nr> <label>exposições</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label> Corrigidas</label>
exposure-chart-legend-heading-type = exposição
exposure-chart-legend-heading-nr = Número
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Este gráfico mostra quantas vezes a sua informação é exposta ativamente.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Este gráfico mostra o total de exposições que estão corrigidas ({ $total_fixed_exposures_num } de { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Endereço pessoal, membros da família e outros ainda não estão incluídos.
exposure-chart-returning-user-upgrade-prompt-cta = Iniciar uma verificação gratuita
exposure-chart-scan-in-progress-prompt = <b>Verificação em curso:</b> endereço, membros da família e outros ainda não foram incluídos.
modal-active-number-of-exposures-title = Sobre o seu número de exposições ativas
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Este gráfico inclui o número total de vezes que encontrámos cada tipo de dados exposto em todas as violações de dados para { $limit } endereço de e-mail que está atualmente a monitorizar.
       *[other] Este gráfico inclui o número total de vezes que encontrámos cada tipo de dados exposto em todas as violações de dados para até { $limit } endereços de e-mail que está atualmente a monitorizar.
    }
modal-active-number-of-exposures-part-two = Por exemplo, se tiver 10 exposições do seu número de telefone, isto pode significar que um número de telefone está exposto em 10 sites diferentes, ou pode significar que 2 números de telefone diferentes foram expostos em 5 sites diferentes.
modal-active-number-of-exposures-part-three-all = Após a sua resolução, serão adicionadas ao seu número total de exposições corrigidas na página Corrigidas.
modal-fixed-number-of-exposures-title = Sobre o seu número de exposições corrigidas
modal-fixed-number-of-exposures-all = Este gráfico inclui o número total de violações de dados que foram corrigidas para todos os endereços de e-mail que está atualmente a monitorizar. Assim que as exposições forem marcadas como corrigidas, as mesmas serão adicionadas ao total.
modal-cta-ok = Ok
modal-cta-got-it = Percebi
open-modal-alt = Abrir modal
close-modal-alt = Fechar modal
progress-card-heres-what-we-fixed-headline-all = Eis o que corrigiu
progress-card-manually-fixed-headline = Corrigido manualmente
dashboard-tab-label-action-needed = Ação necessária
dashboard-tab-label-fixed = Corrigido
dashboard-exposures-all-fixed-label = Tudo corrigido aqui!
dashboard-exposures-area-headline = Ver todos os sites onde a sua informação está exposta
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Encontrámos { $exposures_unresolved_num } exposição dos seus dados.
       *[other] Encontrámos { $exposures_unresolved_num } exposições dos seus dados.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Este apareceu em { $data_breach_unresolved_num } violação de dados.
       *[other] Este apareceu em { $data_breach_unresolved_num } violações de dados.
    }
dashboard-fixed-area-headline-all = Ver todas as exposição(ões) corrigidas
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtro
dashboard-exposures-filter-company = Empresa
dashboard-exposures-filter-date-found = Data da descoberta
dashboard-exposures-filter-date-found-last-seven-days = Últimos 7 dias
dashboard-exposures-filter-date-found-last-thirty-days = Últimos 30 dias
dashboard-exposures-filter-date-found-last-year = Ano passado
dashboard-exposures-filter-status = Estado
popover-open-filter-settings-alt = Selecionar filtros
dashboard-exposures-filter-show-all = Mostrar tudo
dashboard-exposures-filter-show-results = Mostrar resultados
dashboard-exposures-filter-reset = Repor

## Top banner on the dashboard

dashboard-top-banner-section-label = Painel de resumo
dashboard-top-banner-your-data-is-protected-title = Os seus dados estão protegidos
dashboard-top-banner-your-data-is-protected-cta = Veja o que foi corrigido
dashboard-top-banner-protect-your-data-title = Vamos proteger os seus dados
dashboard-top-banner-protect-your-data-cta = Vamos corrigir isto
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Encontrámos { $exposures_unresolved_num } exposição dos seus dados.
       *[other] Encontrámos { $exposures_unresolved_num } exposições dos seus dados.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Este apareceu em { $data_breach_unresolved_num } violação de dados. Iremos apoiar na respetiva correção, passo a passo.
       *[other] Este apareceu em { $data_breach_unresolved_num } violações de dados. Iremos apoiar na respetiva correção, passo a passo.
    }
dashboard-top-banner-no-exposures-found-title = Não foram encontradas exposições
dashboard-top-banner-non-us-no-exposures-found-description = Boas notícias! Procurámos em todas as violações de dados conhecidas e não encontrámos nenhuma exposição. Iremos continuar a pesquisar pelo seu endereço de e-mail e iremos alertar se ocorrer uma nova violação de dados.
dashboard-no-exposures-label = Não foram encontradas exposições
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Ótimo trabalho, a exposição dos seus dados está corrigida! Iremos continuar a monitorizar e iremos alertar sobre quaisquer novas exposições.
       *[other] Ótimo trabalho. Todas as { $exposures_resolved_num } exposições dos seus dados foram corrigidas! Iremos continuar a monitorizar e iremos alertar sobre quaisquer novas exposições.
    }
dashboard-top-banner-monitor-more-cta = Monitorizar mais e-mails

# About Exposure Indicators Modal

modal-exposure-status-description-all = Procurámos por exposições em todas as violações de dados conhecidas. As suas exposições terão um dos seguintes estados:
modal-exposure-indicator-title = Estados de exposição
modal-exposure-indicator-action-needed = É necessária uma ação avançada ou manual para concluir uma ação.
modal-exposure-indicator-fixed = A exposição foi resolvida e não existe qualquer ação a tomar.
