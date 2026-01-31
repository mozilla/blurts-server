# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Newydd
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Y Cyfan
# To go back to the list of announcements
announcement-dialog-back = Nôl
announcement-dialog-clear-all = Marcio'r cyfan wedi'i ddarllen
announcement-dialog-empty-state-title = Dim diweddariadau
announcement-dialog-empty-state-description = Dewch nôl yn rheolaidd am ddiweddariadau a gwybodaeth am ein nodweddion diweddaraf.
announcement-dialog-trigger-alt = Cyhoeddiadau agored
announcement-dialog-alt = Rhestr o gyhoeddiadau
announcement-small-img-alt = Eicon cyhoeddiad
announcement-big-img-alt = Delwedd cyhoeddiad

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [zero] Cael monitro tor-data am ddim ar gyfer hyd at { $emailAddressesCount } o gyfeiriadau e-bost.
        [one] Cael monitro tor-data am ddim ar gyfer hyd at { $emailAddressesCount } cyfeiriad e-bost.
        [two] Cael monitro tor-data am ddim ar gyfer hyd at { $emailAddressesCount } gyfeiriad e-bost.
        [few] Cael monitro tor-data am ddim ar gyfer hyd at { $emailAddressesCount } cyfeiriad e-bost.
        [many] Cael monitro tor-data am ddim ar gyfer hyd at { $emailAddressesCount } cyfeiriad e-bost.
       *[other] Cael monitro tor-data am ddim ar gyfer hyd at { $emailAddressesCount } cyfeiriad e-bost.
    }
announcement-free-data-breach-monitoring-description = Helpwch i gadw'ch manylion yn ddiogel gyda monitro tor-data. Bydd { -brand-monitor } yn eich rhybuddio os bydd eich manylion yn ymddangos mewn achos o dor-data.
announcement-free-data-breach-monitoring-cta-label = Dysgu rhagor
