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
exposure-chart-caption = Ce graphique montre combien de fois vos informations sont activement révélées.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Ce graphique affiche le nombre total d’expositions qui sont corrigées ({ $total_fixed_exposures_num } sur { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = L’adresse personnelle, les membres de la famille, etc. ne sont pas encore inclus.
exposure-chart-returning-user-upgrade-prompt-cta = Lancer une analyse gratuite
exposure-chart-scan-in-progress-prompt = <b>Scan en cours :</b> l’adresse, les membres de la famille, etc. ne sont pas encore inclus.
modal-active-number-of-exposures-title = À propos de votre nombre d’expositions actives
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ce graphique comprend le nombre total de fois où nous avons détecté chaque type de données parmi toutes les fuites de données pour l’adresse e-mail { $limit } que vous surveillez.
       *[other] Ce graphique inclut le nombre de fois où nous avons détecté chaque type de données exposé parmi toutes les fuites de données pour un maximum de { $limit } adresses e-mail que vous surveillez.
    }
modal-active-number-of-exposures-part-two = Par exemple, si vous avez 10 expositions de votre numéro de téléphone, cela peut signifier qu’un numéro de téléphone est exposé sur 10 sites différents, ou cela pourrait signifier que 2 numéros de téléphone différents ont été exposés sur 5 sites différents.
modal-active-number-of-exposures-part-three-all = Une fois résolus, ils seront ajoutés à votre nombre total de risques corrigés sur la page Corrigés.
modal-fixed-number-of-exposures-title = À propos du nombre d’expositions fixées
modal-fixed-number-of-exposures-all = Ce graphique comprend le nombre total de fuites de données qui ont été corrigées pour toutes les adresses e-mail que vous surveillez actuellement. Une fois les fuites marquées comme corrigées, elles seront ajoutées au total ici.
modal-cta-ok = OK
modal-open-alt = Ouvrir
modal-close-alt = Fermer
progress-card-heres-what-we-fixed-headline-all = Voici les fuites que vous avez résolues
progress-card-manually-fixed-headline = Résolue manuellement
dashboard-tab-label-action-needed = Action nécessaire
dashboard-tab-label-fixed = Résolue
dashboard-exposures-all-fixed-label = Toutes les fuites ont été résolues !
dashboard-exposures-area-headline = Voir tous les sites où vos informations ont fuité
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Nous avons détecté { $exposures_unresolved_num } fuite de vos données.
       *[other] Nous avons détecté { $exposures_unresolved_num } fuites de vos données.
    }
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
dashboard-exposures-filter-status-action-needed = Action nécessaire
dashboard-exposures-filter-status-in-progress = En cours
dashboard-exposures-filter-status-fixed = Résolue
popover-open-filter-settings-alt = Sélectionner des filtres
dashboard-exposures-filter-show-all = Tout afficher
dashboard-exposures-filter-show-results = Afficher les résultats
dashboard-exposures-filter-reset = Réinitialiser

## Top banner on the dashboard

dashboard-top-banner-section-label = Résumé du tableau de bord
dashboard-top-banner-scan-in-progress-title = L’analyse est toujours en cours
dashboard-top-banner-your-data-is-protected-title = Vos données sont protégées
dashboard-top-banner-your-data-is-protected-cta = Voir les fuites résolues
dashboard-top-banner-lets-keep-protecting-title = Continuons à protéger vos données
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Vous avez encore { $exposures_unresolved_num } exposition à corriger. Continuez et protégez-vous. Nous vous guiderons pas à pas.
       *[other] Il vous reste encore { $exposures_unresolved_num } à corriger. Continuez et protégez-vous. Nous vous guiderons pas à pas.
    }
dashboard-top-banner-lets-keep-protecting-cta = Continuons
dashboard-top-banner-protect-your-data-title = Protégeons vos données
dashboard-top-banner-protect-your-data-cta = Correction d’un problème
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Nous avons détecté { $exposures_unresolved_num } pour vos données.
       *[other] Nous avons trouvé { $exposures_unresolved_num } risques de vos données.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Elle apparaît dans { $data_breach_unresolved_num } fuite de données. Nous vous guiderons pas à pas pour résoudre le problème.
       *[other] Elle apparaît à travers { $data_breach_unresolved_num } fuites de données. Nous vous guiderons pas à pas pour résoudre le problème.
    }
dashboard-top-banner-no-exposures-found-title = Aucun QR code trouvé
dashboard-top-banner-non-us-no-exposures-found-description = Bonne nouvelle ! Nous avons cherché toutes les fuites de données connues et n’avons trouvé aucune exposition. Nous continuerons à surveiller votre adresse électronique et vous informerons si une nouvelle fuite de données se produit.
dashboard-no-exposures-label = Aucun QR code trouvé
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Excellent travail, l’exposition de vos données est corrigée ! Nous continuerons de vous surveiller et vous avertirons en cas de nouveau risque.
       *[other] Excellent travail, tous les risques de { $exposures_resolved_num } de vos données sont corrigés ! Nous continuerons de vous surveiller et vous avertirons en cas de nouveau risque.
    }
dashboard-top-banner-monitor-more-cta = Surveiller davantage d’adresses e-mail

# About Exposure Statuses Modal

modal-exposure-status-title = À propos des statuts de visibilité
modal-exposure-status-description-all = Nous recherchons les expositions dans toutes les fuites de données connues. Vos engagements auront l’un des statuts suivants :
modal-exposure-status-action-needed = <b>Action nécessaire</b> signifie qu’il est actuellement actif et que vous devez prendre des mesures pour le corriger.
modal-exposure-status-fixed = <b>Résolu</b> signifie que le problème a été résolu et que vous n’avez aucune action à accomplir.
