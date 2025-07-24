# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Contul tău include monitorizarea unei singure { $total } adrese de e-mail. Adaugă o nouă adresă de e-mail pentru a vedea dacă a fost implicată într-o încălcare a securității datelor.
        [few] Contul tău include monitorizarea a { $total } adrese de e-mail. Adaugă o nouă adresă de e-mail pentru a vedea dacă a fost implicată într-o încălcare a securității datelor.
       *[other] Contul tău include monitorizarea a { $total } de adrese de e-mail. Adaugă o nouă adresă de e-mail pentru a vedea dacă a fost implicată într-o încălcare a securității datelor.
    }
