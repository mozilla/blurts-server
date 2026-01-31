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
        [one] <nr>{ $nr }</nr> <label>fuite</label>
       *[other] <nr>{ $nr }</nr> <label>fuites</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed =
    { $nr ->
        [one] <nr>{ $nr }</nr> <label>résolue</label>
       *[other] <nr>{ $nr }</nr> <label>résolues</label>
    }
exposure-chart-legend-heading-type = Détections de fuites
exposure-chart-legend-heading-nr = Nombre
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Ce graphique montre combien de fois vos informations ont été activement révélées.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Ce graphique montre le nombre total de fuites résolues ({ $total_fixed_exposures_num } sur { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = L’adresse personnelle, les membres de la famille et d’autres données ne sont pas encore inclus.
exposure-chart-returning-user-upgrade-prompt-cta = Lancer une analyse gratuite
exposure-chart-scan-in-progress-prompt = <b>Scan en cours :</b> l’adresse, les membres de la famille et d’autres données ne sont pas encore inclus.
modal-active-number-of-exposures-title = À propos du nombre de fuites actives
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ce graphique comprend le nombre total de fois où nous avons détecté chaque type de données parmi toutes les fuites de données pour l’adresse e-mail que vous surveillez.
       *[other] Ce graphique comprend le nombre total de fois où nous avons détecté chaque type de données parmi toutes les fuites de données pour les { $limit } adresses e-mail que vous surveillez.
    }
modal-active-number-of-exposures-part-two = Par exemple, si votre numéro de téléphone a fuité 10 fois, cela peut signifier qu’un numéro de téléphone a fuité sur 10 sites différents, ou cela pourrait signifier que 2 numéros de téléphone différents ont fuité sur 5 sites différents.
modal-active-number-of-exposures-part-three-all = Une fois résolues, elles seront ajoutées à votre nombre total de fuites résolues sur la page Résolues.
modal-fixed-number-of-exposures-title = À propos du nombre de fuites résolues
modal-fixed-number-of-exposures-all = Ce graphique comprend le nombre total de fuites de données qui ont été corrigées pour toutes les adresses e-mail que vous surveillez actuellement. Une fois les fuites marquées comme corrigées, elles seront ajoutées au total ici.
modal-cta-ok = OK
modal-cta-got-it = J’ai compris
open-modal-alt = Ouvrir la boîte de dialogue
close-modal-alt = Fermer la boîte de dialogue
progress-card-heres-what-we-fixed-headline-all = Voici les fuites que vous avez résolues
progress-card-manually-fixed-headline = Résolue manuellement
dashboard-tab-label-action-needed = Action nécessaire
dashboard-tab-label-fixed = Fuites résolues
dashboard-exposures-all-fixed-label = Toutes les fuites ont été résolues !
dashboard-exposures-area-headline = Voir tous les sites où vos informations ont fuité
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 = Nous avons détecté vos données { $exposures_unresolved_num } fois.
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Elles apparaissent dans { $data_breach_unresolved_num } fuite de données.
       *[other] Elles apparaissent dans { $data_breach_unresolved_num } fuites de données.
    }
dashboard-fixed-area-headline-all = Afficher toutes les fuites résolues
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrer
dashboard-exposures-filter-company = Entreprise
dashboard-exposures-filter-date-found = Date d’identification
dashboard-exposures-filter-date-found-last-seven-days = Les 7 derniers jours
dashboard-exposures-filter-date-found-last-thirty-days = Les 30 derniers jours
dashboard-exposures-filter-date-found-last-year = L’année dernière
dashboard-exposures-filter-status = État
popover-open-filter-settings-alt = Sélectionner des filtres
dashboard-exposures-filter-show-all = Tout afficher
dashboard-exposures-filter-show-results = Afficher les résultats
dashboard-exposures-filter-reset = Réinitialiser

## Top banner on the dashboard

dashboard-top-banner-section-label = Résumé du tableau de bord
dashboard-top-banner-your-data-is-protected-title = Vos données sont protégées
dashboard-top-banner-your-data-is-protected-cta = Voir les fuites résolues
dashboard-top-banner-protect-your-data-title = Protégeons vos données
dashboard-top-banner-protect-your-data-cta = Résoudre
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 = Nous avons détecté vos données { $exposures_unresolved_num } fois.
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Elles apparaissent dans { $data_breach_unresolved_num } fuite de données. Nous vous guiderons pas à pas pour résoudre le problème.
       *[other] Elles apparaissent dans { $data_breach_unresolved_num } fuites de données. Nous vous guiderons pas à pas pour résoudre le problème.
    }
dashboard-top-banner-no-exposures-found-title = Aucune fuite détectée
dashboard-top-banner-non-us-no-exposures-found-description = Bonne nouvelle ! Nous avons recherché dans toutes les fuites de données connues et n’avons trouvé aucune trace de vos données. Nous continuerons à surveiller votre adresse e-mail et vous informerons si une nouvelle fuite de données se produit.
dashboard-no-exposures-label = Aucune fuite détectée
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Excellent travail, la fuite a été résolue ! Nous continuerons de surveiller vos données et vous avertirons en cas de nouvelle fuite.
       *[other] Excellent travail, vos { $exposures_resolved_num } fuites ont été résolues ! Nous continuerons de surveiller vos données et vous avertirons en cas de nouvelle fuite.
    }
dashboard-top-banner-monitor-more-cta = Surveiller davantage d’adresses e-mail

# About Exposure Indicators Modal

modal-exposure-status-description-all = Nous recherchons la présence de vos données dans toutes les fuites de données connues. Vos fuites auront l’un des états suivants :
modal-exposure-indicator-title = État des fuites
modal-exposure-indicator-action-needed = Une intervention avancée ou manuelle de votre part est nécessaire pour terminer une action.
modal-exposure-indicator-fixed = La fuite a été résolue, vous n’avez aucune action à accomplir.
