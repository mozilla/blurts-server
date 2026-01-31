# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Nový
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Vše
# To go back to the list of announcements
announcement-dialog-back = Zpět
announcement-dialog-clear-all = Označit vše jako přečtené
announcement-dialog-empty-state-title = Žádné aktualizace
announcement-dialog-empty-state-description = Pravidelně kontrolujte oznámení a informace o našich nejnovějších funkcích.
announcement-dialog-trigger-alt = Otevřená oznámení
announcement-dialog-alt = Seznam oznámení
announcement-small-img-alt = Ikona oznámení
announcement-big-img-alt = Obrázek oznámení

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Získejte bezplatné sledování narušení dat až pro { $emailAddressesCount } e-mailových adres.
        [few] Získejte bezplatné sledování narušení dat až pro { $emailAddressesCount } e-mailových adres.
       *[other] Získejte bezplatné sledování narušení dat až pro { $emailAddressesCount } e-mailových adres.
    }
announcement-free-data-breach-monitoring-description = Pomozte udržet své informace v bezpečí díky sledování úniků dat. { -brand-monitor } vás upozorní, jestliže se vaše údaje objeví v úniku dat.
announcement-free-data-breach-monitoring-cta-label = Zjistit více
