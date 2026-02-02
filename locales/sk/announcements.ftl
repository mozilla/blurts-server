# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Nové
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Všetky
# To go back to the list of announcements
announcement-dialog-back = Naspäť
announcement-dialog-clear-all = Označiť všetky ako prečítané
announcement-dialog-empty-state-title = Žiadne oznámenia
announcement-dialog-empty-state-description = Pravidelne kontrolujte oznámenia a informácie o našich najnovších funkciách.
announcement-dialog-trigger-alt = Otvorené oznámenia
announcement-dialog-alt = Zoznam oznámení
announcement-small-img-alt = Ikona oznámenia
announcement-big-img-alt = Obrázok oznámenia

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Získajte bezplatné monitorovanie únikov údajov pre až { $emailAddressesCount } e‑mailovú adresu.
        [few] Získajte bezplatné monitorovanie únikov údajov pre až { $emailAddressesCount } e‑mailové adresy.
        [many] Získajte bezplatné monitorovanie únikov údajov pre až { $emailAddressesCount } e‑mailových adries.
       *[other] Získajte bezplatné monitorovanie únikov údajov pre až { $emailAddressesCount } e‑mailových adries.
    }
announcement-free-data-breach-monitoring-description = Pomôžte chrániť svoje informácie pomocou monitorovania únikov údajov. { -brand-monitor } vás upozorní, ak sa vaše informácie objavia v prípade úniku údajov.
announcement-free-data-breach-monitoring-cta-label = Ďalšie informácie
