# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } – Nadzorna plošča

breach-all-meta-title = { -brand-fx-monitor } – Vse kraje podatkov
breach-all-meta-social-title = Vse kraje podatkov, ki jih je odkril { -brand-fx-monitor }
breach-all-meta-social-description = Prebrskajte po celotnem seznamu znanih kraj, ki jih je zaznal { -brand-fx-monitor }, in ugotovite, ali so bili vaši podatki izpostavljeni.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } – Kraja podatkov { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = So bili vaši podatki udeleženi v kraji podatkov podjetja { $company }?
breach-detail-meta-social-description = Z uporabo { -brand-fx-monitor(sklon: "rodilnik") } ugotovite, ali so bili vaši osebni podatki izpostavljeni v tej kraji, in se poučite o nadaljnjih korakih.

breach-scan-meta-title = { -brand-fx-monitor } – Rezultati kršitev
breach-scan-meta-social-title = { -brand-fx-monitor } – Rezultati kršitev
breach-scan-meta-social-description = Prijavite se v { -brand-fx-monitor }, odpravljajte kraje podatkov in si zagotovite stalno spremljanje morebitnih novih znanih kraj.

## Breaches header

# Data classes pie chart title
breach-chart-title = Kršitev podatkov

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Kraje podatkov za { $email-select }

# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } od { $total } nadzorovanih e-poštnih naslovov
        [two] { $count } od { $total } nadzorovanih e-poštnih naslovov
        [few] { $count } od { $total } nadzorovanih e-poštnih naslovov
       *[other] { $count } od { $total } nadzorovanih e-poštnih naslovov
    }

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Urejanje e-poštnih naslovov

## Breaches resolved filter

filter-label-unresolved = Nerazrešene kraje podatkov
filter-label-resolved = Razrešene kraje

## Breaches table

column-company = PODJETJE
column-breached-data = UKRADENI PODATKI
column-detected = ZAZNANO

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Razrešeno
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktivno

breaches-resolve-heading = Razrešite to krajo:

breaches-none-headline = Ni najdenih kraj
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Dobra novica! Za { $email } niso bile prijavljene znane kraje. Ta e-poštni naslov bomo še naprej spremljali in vas obvestili, če bo prišlo do novih kraj.
breaches-none-cta-blurb = Ali želite spremljati drug e-poštni naslov?
breaches-none-cta-button = Dodaj e-poštni naslov

breaches-all-resolved-headline = Vse kraje razrešene
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Bravo! Razrešili ste vse kraje podatkov za { $email }. Še naprej bomo spremljali ta e-poštni naslov in vas obvestili, če bo prišlo do novih kraj.
breaches-all-resolved-cta-blurb = Ali želite spremljati drug e-poštni naslov?
breaches-all-resolved-cta-button = Dodaj e-poštni naslov

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Dne { $breachDate } je prišlo do kraje podatkov podjetja { $companyName }. Potem ko je bila kraja odkrita in potrjena, je bila dne { $addedDate } dodana v našo zbirko podatkov. Kraja je obsegala naslednje vrste podatkov: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox }ov upravitelj gesel
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Posodobite gesla in omogočite dvostopenjsko overjanje (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = V večini primerov vam priporočamo, da spremenite geslo na spletni strani podjetja. Toda <b>njihova spletna stran morda ne deluje ali pa vsebuje zlonamerno vsebino</b>, zato bodite previdni, če <breached-company-link>jo obiščete</breached-company-link>. Za dodatno zaščito poskrbite, da za vsak račun uporabljate edinstveno geslo, da razkritih gesel ne bo mogoče uporabiti za dostop do drugih računov. { $passwordManagerLink } vam lahko pomaga pri varnem spremljanju vseh vaših gesel.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Zaščitite svoj e-poštni naslov s storitvijo za prikrivanje e-poštnih naslovov { $firefoxRelayLink }.
breach-checklist-email-body = To lahko skrije vaš pravi e-poštni naslov in posreduje e-pošto v pravi nabiralnik.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Poiščite svoje poročilo o dobroimetju za račune, posojila ali kreditne kartice, ki jih ne prepoznate.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Razmislite lahko tudi o zamrznitvi svojega dobroimetja na { $equifaxLink }, { $experianLink } in { $transUnionLink } ter preprečite, da bi prevaranti odpirali nove račune v vašem imenu. Je brezplačno in ne bo vplivalo na vaše dobroimetje.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Prijavite to kršitev izdajatelju svoje kreditne kartice in zahtevajte novo kartico z novo številko.
breach-checklist-cc-body = Preverite tudi, ali so na izpiskih vaših kreditnih kartic morebitne neprepoznane bremenitve.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Takoj obvestite svojo banko, da je bila številka vašega računa ogrožena.
breach-checklist-bank-body = Če to storite hitreje, si lahko zagotovite večjo pravno zaščito, ki vam bo pomagala povrniti morebitne izgube. Preverite tudi, ali so na vaših računih morebitne neprepoznane bremenitve.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Obvestite izdajatelja kartice in takoj spremenite PIN.
breach-checklist-pin-body = Naj vaša nova ali katerakoli druga koda PIN ne vsebuje uganljivih številk, kot sta vaš rojstni datum ali naslov.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Uporabljajte omrežje VPN, kot je { $mozillaVpnLink }.
breach-checklist-ip-body = Iz vašega naslova IP (naslova internetnega protokola) je mogoče razbrati vašo lokacijo in ponudnika internetnih storitev. VPN lahko skrije vaš pravi naslov IP in vam omogoči zasebno uporabo interneta.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Spremenite morebitna gesla ali kode PIN, ki vsebujejo katerikoli del vašega naslova.
breach-checklist-address-body = Naslove je enostavno najti v javnih evidencah, zato so takšna gesla in kode PIN lahko uganljive.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Zamenjajte morebitna gesla ali kode PIN, ki vsebujejo vaš rojstni datum.
breach-checklist-dob-body = Rojstne datume je enostavno poiskati v javnih evidencah in ljudje, ki to znajo, bi zlahka uganili vašo kodo.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Zaščitite svojo telefonsko številko s storitvijo za prikrivanje, kot je { $firefoxRelayLink }, ki skrije vašo pravo telefonsko številko.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Posodobite varnostna vprašanja.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = V večini primerov vam priporočamo, da posodobite varnostna vprašanja na spletni strani podjetja. Toda <b>njihova spletna stran morda ne deluje ali pa vsebuje zlonamerno vsebino</b>, zato bodite previdni, če <breached-company-link>jo obiščete</breached-company-link>. Za dodatno zaščito posodobite naslednja varnostna vprašanja na vseh pomembnih računih, kjer ste jih uporabljali, in ustvarite edinstvena gesla za vse račune.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Ustvarite edinstveno, močno geslo za vsak račun. v katerem ste uporabljali enako geslo.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Upravitelj gesel, kot je { $passwordManagerLink } (ki je brezplačen in vgrajen v brskalnik { -brand-firefox }), vam lahko pomaga spremljati vsa vaša gesla in jih varno uporabljati na vseh vaših napravah.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Obrnite se na podjetje { $companyName }, ga obvestite o tej kraji in ga prosite za navodila, kako ukrepati.
