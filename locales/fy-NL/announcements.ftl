# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Nij
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Alle
# To go back to the list of announcements
announcement-dialog-back = Tebek
announcement-dialog-clear-all = Markearje alle as lêzen
announcement-dialog-empty-state-title = Gjin fernijingen
announcement-dialog-empty-state-description = Kom regelmjittich werom foar updates en ynformaasje oer ús nijste funksjes.
announcement-dialog-trigger-alt = Oankundigingen iepenje
announcement-dialog-alt = List mei oankundigingen
announcement-small-img-alt = Oankundigingspiktogram
announcement-big-img-alt = Oankundigingsôfbylding

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Untfang fergese monitoaring fan datalekken foar maksimaal { $emailAddressesCount } e-mailadres.
       *[other] Untfang fergese monitoaring fan datalekken foar maksimaal { $emailAddressesCount } e-mailadressen.
    }
announcement-free-data-breach-monitoring-description = Help jo gegevens feilich te hâlden mei monitoaring fan datalekken. { -brand-monitor } sil jo warskôgje as jo ynformaasje yn in datalek foarkomt.
announcement-free-data-breach-monitoring-cta-label = Mear ynfo
