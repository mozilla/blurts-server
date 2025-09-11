# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email footers

email-footer-meta-privacy-notice = Confidențialitate
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Mențiuni legale
# Button text
verify-email-cta = Verifică e-mailul
# Headline of verification email
email-link-expires = Acest link expiră în 24 de ore

##

# Subject line of email
email-subject-found-breaches = { -product-name } ți-a găsit informațiile în aceste încălcări ale securității datelor
# Subject line of email
email-subject-no-breaches = { -product-name } nu a găsit încălcări cunoscute ale securității datelor
# Subject line of email
email-subject-verify = Verifică-ți e-mailul pentru { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } te avertizează cu privire la încălcările securității datelor în care sunt implicate informațiile tale cu caracter personal.
    Până în prezent nu au fost găsite încălcări. Îți vom trimite o alertă dacă adresa ta de e-mail apare într-o nouă încălcare.
email-breach-alert-blurb =
    { -product-name } te avertizează cu privire la încălcările securității datelor în care sunt implicate informațiile tale cu caracter personal.
    Tocmai am primit detalii despre o încălcare a securității datelor suferită de o altă companie.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datele privind încălcările securității datelor sunt furnizate de <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Breach report

# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Rezultatele căutării pentru contul { $email-address } au detectat că este posibil ca e-mailul tău să fi fost expus. Îți recomandăm să acționezi de îndată pentru a rezolva această încălcare a securității datelor.
email-dashboard-cta = Mergi la tabloul de bord
