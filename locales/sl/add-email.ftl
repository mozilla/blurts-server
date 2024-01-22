# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Dodajte drug e-poštni naslov
close-dialog-alt = Zapri pogovorno okno
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
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Potrdite povezavo, poslano na { $email }, da ga dodate v { -brand-fx-monitor }. Vse e-poštne naslove lahko upravljajte v <a { $settings-href }>nastavitvah</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Potrdite povezavo, poslano na <b>{ $email }</b>, da ga dodate na { -brand-mozilla-monitor }.
