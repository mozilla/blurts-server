# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } – Nastavitve
settings-page-title = Nastavitve { -product-short-name(sklon: "rodilnik") }

## Breach alert preferences

settings-alert-preferences-title = Nastavitve opozoril o kršitvah
settings-alert-preferences-option-one = Pošlji opozorila na ogrožen e-poštni naslov
settings-alert-preferences-option-two = Pošlji vsa opozorila o vdorih podatkov na primarni e-poštni naslov

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (glavni)
settings-email-list-title = Nadzorovani e-poštni naslovi
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Vaš račun vključuje spremljanje do { $limit } e-pošte.
        [two] Vaš račun vključuje spremljanje do { $limit } e-poštnih sporočil.
        [few] Vaš račun vključuje spremljanje do { $limit } e-poštnih sporočil.
       *[other] Vaš račun vključuje spremljanje do { $limit } e-poštnih sporočil.
    }
settings-email-verification-callout = Zahtevana je potrditev e-poštnega naslova
settings-resend-email-verification-link = Ponovno pošlji potrditveno e-pošto
settings-add-email-button = Dodaj e-poštni naslov
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Pojavlja se v { $breachCount } znani kraji.
        [two] Pojavil se je v { $breachCount } znanih krajah.
        [few] Pojavil se je v { $breachCount } znanih krajah.
       *[other] Pojavil se je v { $breachCount } znanih krajah.
    }

## Deactivate account

settings-deactivate-account-title = Deaktiviraj račun
settings-deactivate-account-info = { -product-short-name } lahko deaktivirate tako, da izbrišete svoj { -brand-fx-account }.
settings-fxa-link-label = Odpri nastavitve { -brand-firefox(sklon: "rodilnik") }

## Add email dialog

settings-email-dialog-title = Dodajte drug e-poštni naslov
settings-add-email-text = Dodajte nov e-poštni naslov in preverite, ali je bil vpleten v krajo podatkov.
settings-email-input-label = E-poštni naslov
settings-send-email-verification-button = Pošlji potrditveno povezavo
