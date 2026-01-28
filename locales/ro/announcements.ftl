# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Nou
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Toate
# To go back to the list of announcements
announcement-dialog-back = Înapoi
announcement-dialog-clear-all = Marchează tot ca citit
announcement-dialog-empty-state-title = Fără actualizări
announcement-dialog-empty-state-description = Revino periodic pentru actualizări și informații despre cele mai recente funcționalități.
announcement-dialog-trigger-alt = Deschide anunțurile
announcement-dialog-alt = Listă de anunțuri
announcement-small-img-alt = Pictogramă anunț
announcement-big-img-alt = Imagine anunț

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Obține monitorizarea gratuită a încălcărilor de securitate a datelor pentru până la { $emailAddressesCount } adresă de e-mail.
        [few] Obține monitorizarea gratuită a încălcărilor de securitate a datelor pentru până la { $emailAddressesCount } adrese de e-mail.
       *[other] Obține monitorizarea gratuită a încălcărilor de securitate a datelor pentru până la { $emailAddressesCount } de adrese de e-mail.
    }
announcement-free-data-breach-monitoring-description = Ajută la menținerea datelor tale în siguranță cu monitorizarea încălcărilor de securitate a datelor. { -brand-monitor } te va alerta dacă datele tale apar într-o încălcare a securității datelor.
announcement-free-data-breach-monitoring-cta-label = Află mai multe
