# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } – Nastavitve
settings-page-title = Nastavitve { -product-short-name(sklon: "rodilnik") }

## Breach alert preferences

settings-alert-preferences-title = Nastavitve opozoril o krajah
settings-alert-preferences-option-one = Pošlji opozorila na ogrožen e-poštni naslov
settings-alert-preferences-option-two = Pošlji vsa opozorila o krajah podatkov na glavni e-poštni naslov

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
# Deprecated
settings-delete-email-button = Izbriši e-poštni naslov
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Prekliči naročnino na { -brand-premium }
settings-cancel-premium-subscription-info = Vaša naročnina se bo po koncu trenutnega obračunskega obdobja vrnila v brezplačen račun. Vaši rezultati pregleda zaščite zasebnosti bodo trajno izbrisani, nadzor nad krajami podatkov pa bo na voljo samo za en e-poštni naslov.

## Deactivate account

settings-deactivate-account-title = Deaktiviraj račun
settings-deactivate-account-info-2 = { -product-short-name } lahko izključite tako, da izbrišete svoj { -brand-mozilla-account }.
settings-fxa-link-label-3 = Pojdite v Nastavitve { -brand-mozilla-account(sklon: "rodilnik") }

## Delete Monitor account

settings-delete-monitor-free-account-title = Izbriši { -brand-monitor } račun
settings-delete-monitor-free-account-description = S tem boste trajno izbrisali svoj račun { -brand-monitor } in izklopili vsa obvestila.
settings-delete-monitor-free-account-cta-label = Izbriši račun
settings-delete-monitor-free-account-dialog-title = Vaš račun { -brand-monitor } bo trajno izbrisan
settings-delete-monitor-free-account-dialog-lead = Vsi podatki o vašem { -brand-monitor } računu bodo izbrisani in ne bomo več spremljali novih kraj podatkov. S tem ne boste izbrisali računa { -brand-mozilla(sklon: "rodilnik") }.
settings-delete-monitor-free-account-dialog-cta-label = Izbriši račun
settings-delete-monitor-free-account-dialog-cancel-button-label = Premislil sem si, vzemite me nazaj
settings-delete-monitor-plus-account-title = Izbriši { -brand-monitor } račun
settings-delete-monitor-plus-account-description = S tem boste trajno izbrisali vaš { -brand-monitor } račun in takoj prekinili plačljivo naročnino na { -brand-monitor-plus }.
settings-delete-monitor-plus-account-cta-label = Izbriši račun
settings-delete-monitor-plus-account-dialog-title = Vaš račun { -brand-monitor } bo trajno izbrisan
settings-delete-monitor-plus-account-dialog-lead-p1 = Vsi podatki o vašem { -brand-monitor } računu bodo izbrisani in ne bomo več spremljali novih kraj podatkov ali izpostavljenosti posrednika podatkov. S tem ne boste izbrisali računa { -brand-mozilla(sklon: "rodilnik") }.
settings-delete-monitor-plus-account-dialog-lead-p2 = Vaša plačana naročnina se bo danes iztekla in ne boste sorazmerno razdeljeni v preostanek naročnine.
settings-delete-monitor-plus-account-dialog-cta-label = Izbriši račun
settings-delete-monitor-plus-account-dialog-cancel-button-label = Premislil sem si, vzemite me nazaj
settings-delete-monitor-account-confirmation-toast-label = Vaš račun { -brand-monitor } je zdaj trajno izbrisan.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Opusti

## Add email dialog

settings-email-dialog-title = Dodajte drug e-poštni naslov
settings-add-email-text = Dodajte nov e-poštni naslov in preverite, ali je bil vpleten v krajo podatkov.
settings-email-input-label = E-poštni naslov
settings-send-email-verification-button = Pošlji potrditveno povezavo

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Žal nam je, da odhajate. <br /> Nam poveste, zakaj?
settings-unsubscribe-dialog-info = Vaše izkušnje so za nas pomembne. Vsak odziv preberemo in ga tudi upoštevamo.
settings-unsubscribe-dialog-message-placeholder = Kaj bi lahko bilo bolje?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Upoštevajte, da bodo vse vaše storitve { -brand-monitor-premium } <a { $faq_href }>trajno izbrisane</a> po koncu vašega trenutnega obračunskega obdobja.
settings-unsubscribe-dialog-continue = Nadaljuj na preklic
settings-unsubscribe-dialog-cancel = Premislil sem si, vzemite me nazaj
