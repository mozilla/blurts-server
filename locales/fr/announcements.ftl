# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Nouveau
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Tout
# To go back to the list of announcements
announcement-dialog-back = Retour
announcement-dialog-clear-all = Tout marquer comme lu
announcement-dialog-empty-state-title = Aucune annonce
announcement-dialog-empty-state-description = N’hésitez pas à revenir souvent afin de découvrir les nouveautés et en savoir plus sur nos fonctionnalités récentes.
announcement-dialog-trigger-alt = Ouvrir les annonces
announcement-dialog-alt = Liste des annonces
announcement-small-img-alt = Icône d’annonce
announcement-big-img-alt = Image pour l’annonce

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Surveillez gratuitement les fuites de données pour un maximum de { $emailAdddressesCount } adresse e-mail.
       *[other] Surveillez gratuitement les fuites de données pour un maximum de { $emailAdddressesCount } adresses e-mail.
    }
announcement-free-data-breach-monitoring-description = Aidez-nous à protéger vos informations grâce à la surveillance des fuites de données. { -brand-monitor } vous alerte si vos informations apparaissent dans une fuite de données.
announcement-free-data-breach-monitoring-cta-label = En savoir plus
