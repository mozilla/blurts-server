# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Dodajte drug e-poštni naslov
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Vaš račun vključuje spremljanje { $total } e-poštnega naslova. Dodajte nov e-poštni naslov in preverite, ali je bil vpleten v krajo podatkov.
        [two] Vaš račun vključuje spremljanje največ { $total } e-poštnih naslovov. Dodajte nov e-poštni naslov in preverite, ali je bil vpleten v krajo podatkov.
        [few] Vaš račun vključuje spremljanje največ { $total } e-poštnih naslovov. Dodajte nov e-poštni naslov in preverite, ali je bil vpleten v krajo podatkov.
       *[other] Vaš račun vključuje spremljanje največ { $total } e-poštnih naslovov. Dodajte nov e-poštni naslov in preverite, ali je bil vpleten v krajo podatkov.
    }
add-email-address-input-label = E-poštni naslov
add-email-send-verification-button = Pošlji potrditveno povezavo
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Potrdite povezavo, poslano na { $email }, da ga dodate v { -brand-fx-monitor }. Upravljajte vse e-poštne naslove v <a { $settings-href }>Nastavitvah</a>.
