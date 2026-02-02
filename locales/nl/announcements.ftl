# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Nieuw
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Alle
# To go back to the list of announcements
announcement-dialog-back = Terug
announcement-dialog-clear-all = Alles markeren als gelezen
announcement-dialog-empty-state-title = Geen updates
announcement-dialog-empty-state-description = Kom regelmatig terug voor updates en informatie over onze nieuwste functies.
announcement-dialog-trigger-alt = Mededelingen openen
announcement-dialog-alt = Lijst van mededelingen
announcement-small-img-alt = Mededelingspictogram
announcement-big-img-alt = Mededelingsafbeelding

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Ontvang gratis monitoring van datalekken voor maximaal { $emailAddressesCount } e-mailadres.
       *[other] Ontvang gratis monitoring van datalekken voor maximaal { $emailAddressesCount } e-mailadressen.
    }
announcement-free-data-breach-monitoring-description = Help uw gegevens veilig te houden met monitoring van datalekken. { -brand-monitor } waarschuwt u als uw gegevens in een datalek voorkomen.
announcement-free-data-breach-monitoring-cta-label = Meer info
