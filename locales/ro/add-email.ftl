# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Adaugă o altă adresă de e-mail
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Contul tău include monitorizarea unei singure { $total } adrese de e-mail. Adaugă o nouă adresă de e-mail pentru a vedea dacă a fost implicată într-o încălcare a securității datelor.
        [few] Contul tău include monitorizarea a { $total } adrese de e-mail. Adaugă o nouă adresă de e-mail pentru a vedea dacă a fost implicată într-o încălcare a securității datelor.
       *[other] Contul tău include monitorizarea a { $total } de adrese de e-mail. Adaugă o nouă adresă de e-mail pentru a vedea dacă a fost implicată într-o încălcare a securității datelor.
    }
add-email-address-input-label = Adresă de e-mail
add-email-send-verification-button = Trimite linkul de verificare
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifică linkul trimis către { $email } pentru a-l adăuga în { -brand-fx-monitor }. Gestionează toate adresele de e-mail din <a { $settings-href }>Setări</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifică linkul trimis către <b>{ $email }</b> ca să îl adaugi în { -brand-mozilla-monitor }.
