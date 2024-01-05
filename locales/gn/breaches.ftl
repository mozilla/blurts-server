# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Mba’erupa

breach-all-meta-title = { -brand-fx-monitor } - Opaite mba’ekuaarã ñembogua
breach-all-meta-social-title = Opaite ñembogua ohecháva { -brand-fx-monitor }
breach-all-meta-social-description = Ehapykueho { -brand-fx-monitor } ñemboguakuaa rysýi ojehechakuaáva, upéi ehecha ne marandúpa oñemboguakuaápara’e.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - { $company } Mba’ekuaarã Ñembogua
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = ¿Ne myangekói { $company } mba’ekuaarã ñembogua?
breach-detail-meta-social-description = Eiporu { -brand-fx-monitor } eikuaa hag̃ua ne maranduetépa oñemboguakuaára’e ha péicha rupi eikuaa mba’etépa ejapóta.

breach-scan-meta-title = { -brand-fx-monitor } - Ñembogua Rehegua
breach-scan-meta-social-title = { -brand-fx-monitor } - Ñembogua Rehegua
breach-scan-meta-social-description = Eñepyrũ tembiapo { -brand-fx-monitor } ndive emoĩporã hag̃ua ñembogua ha ereko jehechameme ñembogua pyahu rovake.

## Breaches header

# Data classes pie chart title
breach-chart-title = Mba’ekuaarã mboguapyre

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Mba’ekuaarã ñembogua { $email-select } peg̃uarã

# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } { $total } ñanduti veve jehechapyre
        [many] { $count } { $total } ñanduti veve jehechapyre
       *[other] { $count } { $total } ñanduti veve jehechapyre
    }

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Eñangareko ñanduti vevére

## Breaches resolved filter

filter-label-unresolved = Ñembogua oĩporã’ỹva
filter-label-resolved = Ñembogua moĩporãmbyre

## Breaches table

column-company = MBA’APOHAGUASU
column-breached-data = MBA’EKUAARÃ MBOGUAPYRE
column-detected = HECHAPYRE

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Japopáma
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Hendýva

breaches-resolve-heading = Emoĩporã ko ñembogua:

breaches-none-headline = Ndojejuhúi ñembogua
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = ¡Marandu iporãva! Ndaipóri ñembogua ojehecháva oñemomarandúva { $email }-pe. Rohecháta ko ñanduti veve ha roikuaaukáta osẽramo ñembogua pyahu.
breaches-none-cta-blurb = ¿Ehechamemese ambue ñanduti veve?
breaches-none-cta-button = Embojuaju ñanduti veve kundaharape

breaches-all-resolved-headline = Opaite umi ñembogua oĩporãma
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = ¡Ejapoporã! Emoĩporãma opaite ñembogua { $email }-pe g̃uarã. Rohecháta ko ñanduti veve ha roikuaaukáta ndéve osẽramo ñembogua ipyahúva.
breaches-all-resolved-cta-blurb = ¿Ehechamemesépa ambue ñanduti veve?
breaches-all-resolved-cta-button = Embojuaju ñanduti veve kundaharape

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Ko { $breachDate }, { $companyName } oñembogua. Ojejuhu rire ha ojehechajey pe ñembogua, rombojuajúma ore mba’ekuaarã rendápe { $addedDate }. Ko ñembogua ogueroike: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } Ñe’ẽñemi Ñangartekoha
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Embohekopyahu ñe’ẽñemi ha embojuruja mokõi papapyñemi (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Hetavejey, ro’e ndéve emoambue hag̃ua ne ñe’ẽñemi mba’apohaguasu ñanduti rendápe. Hákatu <b>ne ñanduti renda hekopytakuaa térã oreko tetepy ivaikuaáva</b>, upévare ema’ẽke <breached-company-link>rendápe jeike</breached-company-link>. Eñemo’ãve hag̃ua, eiporúke ñe’ẽñemi ha’etéva iñambue peteĩteĩva mba’etévape, upévare umi ñe’ẽñemi mboguapyre ndojeporukuaái ojeike hag̃ua ambue mba’etépe. { $passwordManagerLink } nepytyvõkuaa ehapykueho hag̃ua tekorosãme opaite ne ñe’ẽñemíme.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Emo’ã ñanduti veve mba’eporu rovamo’ãha ndive { $firefoxRelayLink } ichagua.
breach-checklist-email-body = Kóva oñomikuaa ne ñanduti veve kundaharape omondojeývo ñanduti veve ig̃uahẽhaitépe.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Ehechameme ne mba’ete reko banco pegua, virujeporu térã kuatia’atã ñemurã emoneĩ’ỹva.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Ikatu avei ejoko nde deveha { $equifaxLink }, { $experianLink } ha { $transUnionLink } emboykekuaa hag̃ua umi mba’evaiapoha ombojurujávo mba’ete pyahu nde rérape. Reiete ha nombyaimo’ãi nde jedeve raperã.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Emomarandu ñembogua nde kuatia’atã ñemurã me’ẽhápe ha ejerure kuatia’atã papapy pyahu reheve.
breach-checklist-cc-body = Avei ehechajey nde kuatia’atã ñemurã reko eikuaasérõ mba’etépa ehepyme’ẽva.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Emomarandu pya’e banco-pe ne mba’ete papapy ojeporukuaátaramo.
breach-checklist-bank-body = Ejapo pya’evéramo ikatu ne mo’ãve nepytyvõkuaáva oimeraẽva mba’evaígui. Avei ehechajeykuaa ne mba’ete ehekahápe oimeraẽva mba’e nemba’e’ỹva.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Emomarandu ne Kuatia’atã me’ẽhápe ha emoambue ne PIN pya’e.
breach-checklist-pin-body = Aníke ne PIN pyahu, térã oimeraẽva ambue PIN, ndogueroikéi hasy’ỹva ijekuaa, ikatúva ne reñoihague térã kundaharape.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Eiporu ñanduti tekoñemíme VPN ndive, { $mozillaVpnLink } ojapoháicha.
breach-checklist-ip-body = Nde IP kundaharape (Ñanduti rapereko kundaharape) ohechauka ne rendaite ha Ñanduti mba’eporu me’ẽhára. VPN omokañykuaa nde IP kundaharape eiporukuaa hag̃ua Ñanduti teko ñemíme.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Emoambue oimeraẽva ñe’ẽñemi térã PIN orekóva nde kundaharape vore.
breach-checklist-address-body = Kundaharape ndahasýi ijuhu teraguapy opavaveguápe ha ikatu ajapo ko’ã ñe’ẽñemi ha PINS hasy’ỹ hag̃ua ijeporu.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Emoambue oimeraẽva ñe’ẽñemi térã PIN orekóva ne reñoihague arange.
breach-checklist-dob-body = Umi teñoihague ára ndahasýi ijejuhu teraguapyhápe ha tapichakuéra ojuhúva ikatu oikuaa ne PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Emo’ã ne pumbyry papapy mba’eporu rovamo’ãha { $firefoxRelayLink } ndive, oñomíva añetehápe ne pumbyry papapyete.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Embopyahu porandu tekorosãgua.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Hetavejey, ro’e ndéve embohekopyahu hag̃ua porandu tekorosãgua mba’apohaguasu ñanduti rendápe. Hákatu <b>iñanduti renda hekopytakuaa térã oreko tetepy ivaikuaáva</b>, upévare ema’ẽke <breached-company-link>rendápe jeike</breached-company-link>. Eñemo’ãve hag̃ua, embohekopyahu ko’ã porandu tekorosãgua oimeraẽva mba’ete eiporuvéva peteĩva hendápe, ha emoheñói ñe’ẽñemi oiko ha iñambuéva peteĩteĩva ñe’ẽñemíme.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Emoheñói mba’ete hekorosã ha ha’eñóva oimeraẽva mbaétépe g̃uarã eiporujeyhague ñe’ẽñemi.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Peteĩ ñe’ẽñemi ñangarekoha ikatúva { $passwordManagerLink } (reigua ha oĩvavoi { -brand-firefox } kundahára ndive) nepytyvõkuaa ehapykueho hag̃ua opaite ñe’ẽñemi ha eike tekorosãme opaite mba’e’oka guive.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Eñe’ẽ { $companyName } ndive emombe’u hag̃ua ko ñembogua rehegua ha ejerure mba’e tapére eguatase.
