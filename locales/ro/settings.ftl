# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Setări { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferințe de e-mail
settings-alert-email-preferences-subtitle = Spune-ne ce mesaje pe e-mail vrei să primești.
settings-alert-preferences-allow-breach-alerts-title = Alerte instantanee privind încălcările securității datelor
settings-alert-preferences-allow-breach-alerts-subtitle = Sunt trimise imediat ce este detectată o încălcare a securității datelor
settings-alert-preferences-option-one = Trimite alerte pentru încălcări ale securității datelor la adresa de e-mail afectată
settings-alert-preferences-option-two = Trimite toate alertele pentru încălcări ale securității datelor la adresa de e-mail primară

## Monitored email addresses

settings-email-verification-callout = Necesită verificarea adresei de e-mail
settings-email-addresses-header = Adrese de e-mail
settings-email-addresses-description = { -brand-monitor } te va alerta dacă aceste adrese de e-mail apar în încălcări cunoscute ale securității datelor.
settings-email-addresses-add-email-button = Adaugă o adresă de e-mail
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Adaugă până la { $limit }
settings-email-addresses-add-email-resend-button-label = Retrimite linkul de verificare
input-error-alt = Eroare

## Email address dialog

settings-email-addresses-initial-dialog-header = Adaugă o adresă de e-mail
settings-email-addresses-initial-dialog-description = Îți vom trimite un link de verificare pentru a confirma că vrei să îl incluzi într-o scanare viitoare cu { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Introdu adresa de e-mail
settings-email-addresses-initial-dialog-add-email-button-label = Trimite linkul de verificare
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Link de verificare trimis la <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Deschide linkul pentru adăugare la acest cont pentru scanări { -brand-monitor } viitoare.
settings-email-addresses-confirmation-dialog-close-button = Închide

## Delete Monitor account

settings-delete-monitor-free-account-title = Șterge contul { -brand-monitor }
settings-delete-monitor-free-account-description = Contul tău { -brand-monitor } va fi șters definitiv și toate notificările vor fi dezactivate.
settings-delete-monitor-free-account-cta-label = Șterge contul
settings-delete-monitor-free-account-dialog-title = Contul tău { -brand-monitor } va fi șters permanent
settings-delete-monitor-free-account-dialog-lead-v2 = Toate informațiile contului tău { -brand-monitor } vor fi șterse și nu vom mai monitoriza pentru încălcări noi ale securității datelor. Contul { -brand-mozilla-account } nu va fi șters.
settings-delete-monitor-free-account-dialog-cta-label = Șterge contul
settings-delete-monitor-free-account-dialog-cancel-button-label = Nu mai contează, du-mă înapoi
settings-delete-monitor-account-confirmation-toast-label-2 = Contul tău { -brand-monitor } este șters acum.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Respinge

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Actualizează informațiile de scanare
settings-tab-label-edit-info = Editează-ți informațiile
settings-tab-label-notifications = Setează notificările
settings-tab-label-manage-account = Gestionează contul
settings-tab-subtitle-manage-account = Gestionează-ți contul { -product-name }.
settings-tab-notifications-marketing-title = Comunicări de marketing
settings-tab-notifications-marketing-text = Actualizări periodice legate de { -brand-monitor }, { -brand-mozilla } și celelalte produse de securitate ale noastre.
settings-tab-notifications-marketing-link-label = Mergi la setările de e-mail { -brand-mozilla }
