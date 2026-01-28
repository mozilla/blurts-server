# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Ny
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Alle
# To go back to the list of announcements
announcement-dialog-back = Tilbake
announcement-dialog-clear-all = Merk alle som lest
announcement-dialog-empty-state-title = Ingen oppdateringer
announcement-dialog-empty-state-description = Kom gjerne tilbake jevnlig for oppdateringer og informasjon om de nyeste funksjonene våre.
announcement-dialog-trigger-alt = Åpne kunngjøringer
announcement-dialog-alt = Liste over kunngjøringer
announcement-small-img-alt = Kunngjøringsikon
announcement-big-img-alt = Kunngjøringsbilde

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
       *[other] Få gratis overvåking av datalekkasjer for opptil { $emailAddressesCount } e-postadresser.
    }
announcement-free-data-breach-monitoring-description = Hjelp til å holde informasjonen din trygg med overvåking av datalekkasjer. { -brand-monitor } varsler deg hvis informasjonen din dukker opp i en datalekkasje.
announcement-free-data-breach-monitoring-cta-label = Les mer
