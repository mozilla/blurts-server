# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Ny
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Alle
# To go back to the list of announcements
announcement-dialog-back = Tilbake
announcement-dialog-clear-all = Marker alle som lesne
announcement-dialog-empty-state-title = Ingen oppdateringar
announcement-dialog-empty-state-description = Kom gjerne tilbake jamleg for oppdateringar og informasjon om dei nyaste funksjonane våre.
announcement-dialog-trigger-alt = Opne kunngjeringar
announcement-dialog-alt = Liste over kunngjeringar
announcement-small-img-alt = Kunngjeringsikon
announcement-big-img-alt = Kunngjeringsbilde

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
       *[other] Få gratis overvaking av datalekkasjer for opptil { $emailAddressesCount } e-postadresser.
    }
announcement-free-data-breach-monitoring-description = Hjelp med å halde informasjonen din trygg med overvaking av datainnbrot. { -brand-monitor } varslar deg viss informasjonen din dukkar opp i eit datainnbrot.
announcement-free-data-breach-monitoring-cta-label = Les meir
