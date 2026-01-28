# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Novo
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Vse
# To go back to the list of announcements
announcement-dialog-back = Nazaj
announcement-dialog-clear-all = Označi vse kot prebrano
announcement-dialog-empty-state-title = Brez novosti
announcement-dialog-empty-state-description = Redno preverjajte posodobitve in informacije o najnovejših možnostih.
announcement-dialog-trigger-alt = Odprite obvestila
announcement-dialog-alt = Seznam objav
announcement-small-img-alt = Ikona za napoved
announcement-big-img-alt = Slika napovedi

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Prejmite brezplačno spremljanje kraje podatkov za do { $emailAddressesCount } e-poštnih naslovov.
        [two] Prejmite brezplačno spremljanje kraje podatkov za do { $emailAddressesCount } e-poštnih naslovov.
        [few] Prejmite brezplačno spremljanje kraje podatkov za do { $emailAddressesCount } e-poštnih naslovov.
       *[other] Prejmite brezplačno spremljanje kraje podatkov za do { $emailAddressesCount } e-poštnih naslovov.
    }
announcement-free-data-breach-monitoring-description = Pomagajte ohraniti svoje podatke varne s spremljanjem kraj podatkov. { -brand-monitor } vas bo opozoril, če se vaši podatki pojavijo v kraji podatkov.
announcement-free-data-breach-monitoring-cta-label = Več o tem
