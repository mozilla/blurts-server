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
        [one] <nr>{ $nr }</nr> <label>esposizione</label>
       *[other] <nr>{ $nr }</nr> <label>esposizioni</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Risolte</label>
exposure-chart-legend-heading-type = Esposizione
exposure-chart-legend-heading-nr = Numero
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Questo grafico mostra quante volte le tue informazioni sono state attivamente esposte.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Questo grafico mostra le esposizioni totali risolte ({ $total_fixed_exposures_num } su { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = L’indirizzo di casa, i familiari e altri dati non sono ancora inclusi.
exposure-chart-returning-user-upgrade-prompt-cta = Avvia una scansione gratuita
exposure-chart-scan-in-progress-prompt = <b>Scansione in corso:</b> indirizzo, familiari e altri dati non sono ancora inclusi.
modal-active-number-of-exposures-title = Informazioni sul numero di esposizioni attive
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Questo grafico mostra quante volte abbiamo trovato esposto ogni tipo di dato in tutte le violazioni relative all’indirizzo email che stai attualmente monitorando.
       *[other] Questo grafico mostra quante volte abbiamo trovato esposto ogni tipo di dato in tutte le violazioni relative ai { $limit } indirizzi email che stai attualmente monitorando.
    }
modal-active-number-of-exposures-part-two = Ad esempio, se si hanno 10 esposizioni del numero di telefono, ciò potrebbe significare che un numero di telefono è esposto su 10 siti diversi, oppure potrebbe significare che 2 numeri di telefono diversi sono stati esposti in 5 siti diversi.
modal-active-number-of-exposures-part-three-all = Una volta risolte, verranno aggiunti al numero totale di esposizioni risolte nella pagina Risolte.
modal-fixed-number-of-exposures-title = Informazioni sul numero di esposizioni risolte
modal-fixed-number-of-exposures-all = Questo grafico include il numero totale di violazioni di dati che sono state risolte per tutti gli indirizzi email che stai attualmente monitorando. Una volta che le esposizioni sono contrassegnate come risolte, verranno aggiunte al totale qui.
modal-cta-ok = OK
modal-cta-got-it = OK
open-modal-alt = Apri finestra di dialogo
close-modal-alt = Chiudi finestra di dialogo
progress-card-heres-what-we-fixed-headline-all = Ecco che cosa hai risolto
progress-card-manually-fixed-headline = Risolte manualmente
dashboard-tab-label-action-needed = Richiede attenzione
dashboard-tab-label-fixed = Risolte
dashboard-exposures-all-fixed-label = Tutto risolto!
dashboard-exposures-area-headline = Visualizza tutti i siti in cui le tue informazioni sono esposte
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] È stata trovata { $exposures_unresolved_num } esposizione dei tuoi dati.
       *[other] Sono state trovate { $exposures_unresolved_num } esposizioni dei tuoi dati.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Sei stato coinvolto in { $data_breach_unresolved_num } violazione di dati.
       *[other] Sei stato coinvolto in { $data_breach_unresolved_num } violazioni di dati.
    }
dashboard-fixed-area-headline-all = Visualizza tutte le esposizioni risolte
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtra
dashboard-exposures-filter-company = Azienda
dashboard-exposures-filter-date-found = Data rilevazione
dashboard-exposures-filter-date-found-last-seven-days = Ultimi 7 giorni
dashboard-exposures-filter-date-found-last-thirty-days = Ultimi 30 giorni
dashboard-exposures-filter-date-found-last-year = L’anno scorso
dashboard-exposures-filter-status = Stato
popover-open-filter-settings-alt = Seleziona filtri
dashboard-exposures-filter-show-all = Mostra tutto
dashboard-exposures-filter-show-results = Mostra risultati
dashboard-exposures-filter-reset = Ripristina

## Top banner on the dashboard

dashboard-top-banner-section-label = Riepilogo dashboard
dashboard-top-banner-your-data-is-protected-title = I tuoi dati sono protetti
dashboard-top-banner-your-data-is-protected-cta = Scopri che cosa è stato risolto
dashboard-top-banner-protect-your-data-title = Proteggiamo i tuoi dati
dashboard-top-banner-protect-your-data-cta = Risolviamo il problema
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] È stata trovata { $exposures_unresolved_num } esposizione dei tuoi dati.
       *[other] Sono state trovate { $exposures_unresolved_num } esposizioni dei tuoi dati.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Sei stato coinvolto in { $data_breach_unresolved_num } violazione di dati. Ti guideremo passo dopo passo su come risolvere.
       *[other] Sei stato coinvolto in { $data_breach_unresolved_num } violazioni di dati. Ti guideremo passo dopo passo su come risolvere.
    }
dashboard-top-banner-no-exposures-found-title = Nessuna esposizione trovata
dashboard-top-banner-non-us-no-exposures-found-description = Buone notizie: abbiamo cercato in tutte le violazioni di dati conosciute e non abbiamo trovato alcuna esposizione. Continueremo a monitorare il tuo indirizzo email e ti avviseremo se si verifica una nuova violazione.
dashboard-no-exposures-label = Nessuna esposizione trovata
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Ottimo lavoro, l’esposizione dei tuoi dati è stata risolta. Continueremo a monitorare e ti avviseremo di eventuali nuove esposizioni.
       *[other] Ottimo lavoro, tutte le { $exposures_resolved_num } esposizioni dei tuoi dati sono state risolte. Continueremo a monitorare e ti avviseremo di eventuali nuove esposizioni.
    }
dashboard-top-banner-monitor-more-cta = Tieni sotto controllo altre email

# About Exposure Indicators Modal

modal-exposure-status-description-all = Cerchiamo esposizioni di dati in tutte le violazioni conosciute. Le tue esposizioni avranno uno dei seguenti stati:
modal-exposure-indicator-title = Stati di esposizione
modal-exposure-indicator-action-needed = Per completare è necessaria un’operazione avanzata o manuale.
modal-exposure-indicator-fixed = L’esposizione è stata risolta e non è necessario intraprendere alcuna azione.
