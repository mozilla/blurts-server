# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Nastavitve { -product-short-name(sklon: "rodilnik") }

## Breach alert preferences

settings-alert-email-preferences-title = Nastavitve e-pošte
settings-alert-email-preferences-subtitle = Sporočite nam, katero e-pošto želite prejemati.
settings-alert-preferences-allow-breach-alerts-title = Takojšnja opozorila o krajah
settings-alert-preferences-allow-breach-alerts-subtitle = Ta opozorila se pošljejo takoj, ko se zazna kraja podatkov
settings-alert-preferences-option-one = Pošlji opozorila na ogrožen e-poštni naslov
settings-alert-preferences-option-two = Pošlji vsa opozorila o krajah podatkov na glavni e-poštni naslov
settings-alert-preferences-allow-monthly-monitor-report-title = Mesečno poročilo { -brand-monitor }a
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Mesečna posodobitev novih izpostavljenosti, kaj je bilo popravljeno in kaj zahteva vašo pozornost.

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Nadzorovani e-poštni naslovi
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Vaš račun vključuje spremljanje do { $limit } e-poštnega naslova.
        [two] Vaš račun vključuje spremljanje do { $limit } e-poštnih naslovov.
        [few] Vaš račun vključuje spremljanje do { $limit } e-poštnih naslovov.
       *[other] Vaš račun vključuje spremljanje do { $limit } e-poštnih naslovov.
    }
settings-email-verification-callout = Zahtevana je potrditev e-poštnega naslova
settings-resend-email-verification-link = Ponovno pošlji potrditveno e-pošto
settings-add-email-button = Dodaj e-poštni naslov
settings-remove-email-button-label = Odstrani
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Nehaj spremljati { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Pojavlja se v { $breachCount } znani kraji.
        [two] Pojavil se je v { $breachCount } znanih krajah.
        [few] Pojavil se je v { $breachCount } znanih krajah.
       *[other] Pojavil se je v { $breachCount } znanih krajah.
    }

## Deactivate account

settings-deactivate-account-title = Deaktiviraj račun
settings-deactivate-account-info-2 = { -product-short-name } lahko izključite tako, da izbrišete svoj { -brand-mozilla-account }.
settings-fxa-link-label-3 = Pojdite v Nastavitve { -brand-mozilla-account(sklon: "rodilnik") }

## Delete Monitor account

settings-delete-monitor-free-account-title = Izbriši { -brand-monitor } račun
settings-delete-monitor-free-account-description = S tem boste trajno izbrisali svoj račun { -brand-monitor } in izklopili vsa obvestila.
settings-delete-monitor-free-account-cta-label = Izbriši račun
settings-delete-monitor-free-account-dialog-title = Vaš račun { -brand-monitor } bo trajno izbrisan
settings-delete-monitor-free-account-dialog-lead-v2 = Vsi podatki o vašem računu za { -brand-monitor } bodo izbrisani in vaših podatkov ne bomo več iskali v krajah. S tem ne boste izbrisali svojega { -brand-mozilla-account(sklon: "rodilnik") }.
settings-delete-monitor-free-account-dialog-cta-label = Izbriši račun
settings-delete-monitor-free-account-dialog-cancel-button-label = Premislil sem si, vzemite me nazaj
settings-delete-monitor-account-confirmation-toast-label-2 = Vaš račun za { -brand-monitor } je zdaj izbrisan.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Opusti
