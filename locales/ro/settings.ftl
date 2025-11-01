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

# Variables:
#   $email (string) - Email address
settings-email-list-title = Adrese de e-mail monitorizate
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Contul tău include monitorizarea a până la { $limit } adresă de e-mail.
        [few] Contul tău include monitorizarea a până la { $limit } adrese de e-mail.
       *[other] Contul tău include monitorizarea a până la { $limit } de adrese de e-mail.
    }
settings-email-verification-callout = Necesită verificarea adresei de e-mail
settings-resend-email-verification-link = Retrimite  mesajul de verificare pe e-mail
settings-add-email-button = Adaugă adresa de e-mail
settings-remove-email-button-label = Elimină
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Oprește monitorizarea { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Apare în { $breachCount } încălcare cunoscută a securității datelor.
        [few] Apare în { $breachCount } încălcări cunoscute ale securității datelor.
       *[other] Apare în { $breachCount } de încălcări cunoscute ale securității datelor.
    }

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

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Raport lunar { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = O actualizare lunară cu expuneri noi, ce s-a rezolvat și ce necesită atenția ta.

## Settings page redesign

settings-tab-label-edit-info = Editează-ți informațiile
settings-tab-label-notifications = Setează notificările
settings-tab-label-manage-account = Gestionează contul
settings-tab-subtitle-manage-account = Gestionează-ți contul { -product-name }.
settings-tab-notifications-marketing-title = Comunicări de marketing
settings-tab-notifications-marketing-text = Actualizări periodice legate de { -brand-monitor }, { -brand-mozilla } și celelalte produse de securitate ale noastre.
settings-tab-notifications-marketing-link-label = Mergi la setările de e-mail { -brand-mozilla }
