# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A link to legal information about mozilla products.
legal = Pravno obvestilo

# Unsubscribe link in email.
email-unsub-link = Odjavite se

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    To e-poštno sporočilo ste prejeli, ker ste se prijavili na { -product-name }. 
    Ne želite več prejemati teh e-poštnih sporočil? { $unsubLink }. To je samodejno e-poštno sporočilo. Za dodatno pomoč obiščite { $faqLink }.

# Button text
verify-email-cta = Potrdi e-poštni naslov

# Headline of verification email
email-link-expires = Ta povezava poteče v naslednjih 24 urah

## Variables:
##   $userEmail (string) - User email address

##

# Subject line of email
email-subject-found-breaches = { -product-name } je našel vaše podatke v teh krajah

# Subject line of email
email-subject-no-breaches = { -product-name } ni našel nobenih znanih kraj

# Subject line of email
email-subject-verify = Potrdite e-pošto za { -product-name }

fxm-warns-you-no-breaches =
    { -product-name } vas opozori na kraje podatkov, ki vključujejo vaše osebne podatke.
    Do zdaj ni bilo ugotovljenih nobenih kraj. Če se bo vaš e-poštni naslov pojavil v novi kraji, vas bomo opozorili.

email-breach-alert-blurb =
    { -product-name } vas opozarja o krajah podatkov, ki vključujejo vaše osebne podatke.
    Pravkar smo prejeli podrobnosti o novi kraji podatkov.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Podatke o krajah zagotavlja <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Imate nerazrešene kraje podatkov
email-unresolved-subhead = Vaš e-poštni naslov je bil razkrit. <br>Odpravite težavo takoj s { -product-name }.
email-is-affected = Vaš e-poštni naslov { $email-address } je odkrit v vsaj eni kraji podatkov
email-more-detail = Prijavite se v { -product-name }, če si želite ogledati več podrobnosti o krajah vaših podatkov (vključno s tem, kdaj je do njih prišlo in kateri podatki so bili izpostavljeni), ter izvedeti, kaj morate storiti, če je vaša e-pošta izpostavljena v kraji podatkov.
email-breach-status = Trenutno stanje kraje
# table row 1 label
email-monitored = Skupaj nadzorovanih e-poštnih naslovov:
# table row 2 label
email-breach-total = Skupno število kraj:
# table row 3 label
email-resolved = Razrešene kraje:
# table row 4 label
email-unresolved = Nerazrešene kraje:
email-resolve-cta = Razreši kraje

## Verification email

email-verify-heading = Začnite varovati svoje podatke
email-verify-subhead = Potrdite svoj e-poštni naslov in začnite varovati svoje podatke po kraji.
email-verify-simply-click = Preprosto kliknite spodnjo povezavo, da dokončate preverjanje računa.

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Tukaj je povzetek kraje podatkov
email-breach-detected = Rezultati iskanja za vaš račun { $email-address } kažejo, da je bil vaš e-poštni naslov morda izpostavljen. Priporočamo, da takoj ukrepate in razrešite to krajo.
email-dashboard-cta = Pojdi na nadzorno ploščo

## Breach alert

email-spotted-new-breach = Zaznali smo novo krajo podatkov
