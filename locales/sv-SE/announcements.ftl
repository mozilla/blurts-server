# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Ny
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Alla
# To go back to the list of announcements
announcement-dialog-back = Tillbaka
announcement-dialog-clear-all = Markera alla som lästa
announcement-dialog-empty-state-title = Inga uppdateringar
announcement-dialog-empty-state-description = Kom tillbaka regelbundet efter uppdateringar och information om våra senaste funktioner.
announcement-dialog-trigger-alt = Öppna meddelanden
announcement-dialog-alt = Lista på meddelanden
announcement-small-img-alt = Meddelandeikon
announcement-big-img-alt = Bild för meddelande

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Få gratis övervakning av dataintrång för upp till { $emailAddressesCount } e-postadress.
       *[other] Få gratis övervakning av dataintrång för upp till { $emailAddressesCount } e-postadresser.
    }
announcement-free-data-breach-monitoring-description = Hjälp till att hålla din information säker med övervakning av dataintrång. { -brand-monitor } varnar dig om din information visas i ett dataintrång.
announcement-free-data-breach-monitoring-cta-label = Läs mer
