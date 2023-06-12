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
        [one] Vaš račun vključuje spremljanje do { $limit } e-poštnega naslova.
        [two] Vaš račun vključuje spremljanje do { $limit } e-poštnih naslovov.
        [few] Vaš račun vključuje spremljanje do { $limit } e-poštnih naslovov.
       *[other] Vaš račun vključuje spremljanje do { $limit } e-poštnih naslovov.
    }
settings-email-verification-callout = Zahtevana je potrditev e-poštnega naslova
settings-resend-email-verification-link = Ponovno pošlji potrditveno e-pošto
settings-add-email-button = Dodaj e-poštni naslov
settings-delete-email-button = Izbriši e-poštni naslov
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Prekliči naročnino na { -brand-premium }
settings-cancel-premium-subscription-info = Vaša naročnina se bo po koncu trenutnega obračunskega obdobja vrnila v brezplačen račun. Rezultati pregleda zaradi zaščite zasebnosti bodo trajno izbrisani, nadzor nad krajami podatkov pa bo na voljo samo za 1 e-poštni naslov.
settings-cancel-premium-subscription-link-label = Prekliči iz svojega { -brand-fx-account }

## Deactivate account

settings-deactivate-account-title = Deaktiviraj račun
settings-deactivate-account-info = { -product-short-name } lahko deaktivirate tako, da izbrišete { -brand-fx-account }.
settings-fxa-link-label = Odpri nastavitve { -brand-firefox(sklon: "rodilnik") }

## Add email dialog

settings-email-dialog-title = Dodajte drug e-poštni naslov
settings-add-email-text = Dodajte nov e-poštni naslov in preverite, ali je bil vpleten v krajo podatkov.
settings-email-input-label = E-poštni naslov
settings-send-email-verification-button = Pošlji potrditveno povezavo

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Žal nam je, da odhajate. <br /> Nam poveste, zakaj odhajate?
settings-unsubscribe-dialog-info = Vaše izkušnje so za nas pomembne. Vsak odziv preberemo in ga tudi upoštevamo.
settings-unsubscribe-dialog-message-placeholder = Kaj bi lahko bilo bolje?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Upoštevajte, da bodo vse vaše storitve { -brand-monitor-premium }a <a { $faq_href }>trajno izbrisane</a> po koncu vašega trenutnega obračunskega obdobja.
settings-unsubscribe-dialog-continue = Nadaljuj na preklic
settings-unsubscribe-dialog-cancel = Ni važno, vzemite me nazaj
