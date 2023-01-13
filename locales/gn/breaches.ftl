# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Mba’ekuaarã ñembogua { $email-select } peg̃uarã
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } { $total } ñanduti veve jehechapyre
        [many] { $count } { $total } ñanduti veve jehechapyre
       *[other] { $count } { $total } ñanduti veve jehechapyre
    }
add-email-link = Embojuaju ñanduti veve kundaharape

## Breaches resolved filter

filter-label-unresolved = Ñembogua oĩporã’ỹva
filter-label-resolved = Ñembogua moĩporãmbyre

## Breaches table

column-company = MBA’APOHAGUASU
column-breached-data = MBA’EKUAARÃ MBOGUAPYRE
column-detected = HECHAPYRE

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Eike <a>{ $breachedCompanyUrl }</a> emoambue hag̃ua ne ñe’ẽñemi ha embojuruja mokõi factor ñemoneĩ (2FA).
breach-checklist-pw-body = Embohasýke ne ñe’ẽñemi ani hag̃ua avave oikuaa. Ko ñe’ẽñemi eipurúramo ambue mba’etépe, eñeha’ã emoambue avei. <a>Pe ñe’ẽñemi ñangarekohára { -brand-firefox }</a> ne pytyvõkuaa ehapykuehokuaa hag̃ua tekorosãme opaite ne ñe’ẽñemi.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Emo’ã ne ñanduti veve mba’epuru rovamo’ãha <a>{ -brand-relay }</a> rehegua ndive.
breach-checklist-email-body = Kóva oñomikuaa ne ñanduti veve kundaharape omondojeývo ñanduti veve ig̃uahẽhaitépe.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Ehechameme ne mba’ete reko banco pegua, virujepuru térã kuatia’atã ñemurã emoneĩ’ỹva.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Ikatu avei ejoko nde deveha <a>Equifax</a> ndive, <a>Experian</a> ha <a>TransUnion</a> emboyke hag̃ua umi mba’evaiapoha ombojurujávo mba’ete pyahu nde rérape. Reiete ha nombyaimo’ãi nde jedeve raperã.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Emomarandu ñembogua nde kuatia’atã ñemurã me’ẽhápe ha ejerure kuatia’atã papapy pyahu reheve.
breach-checklist-cc-body = Avei ehechajey nde kuatia’atã ñemurã reko eikuaasérõ mba’etépa ehepyme’ẽva.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Emomarandu pya’e banco-pe ne mba’ete papapy ojepurukuaátaramo.
breach-checklist-bank-body = Ejapo pya’evéramo ikatu ne mo’ãve nepytyvõkuaáva oimeraẽva mba’evaígui. Avei ehechajeykuaa ne mba’ete ehekahápe oimeraẽva mba’e nemba’e’ỹva.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Emomarandu ne Kuatia’atã me’ẽhápe ha emoambue ne PIN pya’e.
breach-checklist-pin-body = Aníke ne PIN pyahu, térã oimeraẽva ambue PIN, ndogueroikéi hasy’ỹva ijekuaa, ikatúva ne reñoihague térã kundaharape.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Eipuru Ñanduti teko ñemíme VPN ndive,<a>{ -brand-mozilla-vpn }</a> ramo.
breach-checklist-ip-body = Nde IP kundaharape (Ñanduti rapereko kundaharape) ohechauka ne rendaite ha Ñanduti mba’epuru me’ẽhára. VPN omokañykuaa nde IP kundaharape eipurukuaa hag̃ua Ñanduti teko ñemíme.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Emoambue oimeraẽva ñe’ẽñemi térã PIN orekóva nde kundaharape vore.
breach-checklist-address-body = Kundaharape ndahasýi ijuhu teraguapy opavaveguápe ha ikatu ajapo ko’ã ñe’ẽñemi ha PINS hasy’ỹ hag̃ua ijepuru.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Emoambue oimeraẽva ñe’ẽñemi térã PIN orekóva ne reñoihague arange.
breach-checklist-dob-body = Umi teñoihague ára ndahasýi ijejuhu teraguapyhápe ha tapichakuéra ojuhúva ikatu oikuaa ne PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Emo’ã ne pumbyry papapy mba’epuru rovamo’ãha <a>{ -brand-relay }</a> reheguáva, oñomíva añetehápe ne pumbyry papapy.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Embopyahu porandu tekorosãgua <a>{ $breachedCompanyUrl }</a>-pe.
breach-checklist-sq-body = Eipuru mbohovái puku ha jereguáva ha eñongatu tenda hekorosãvape. Ejapo kóva tenda eipuruhápe ko’ã porandu tekorosãgua.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Emoheñói mba’ete hekorosã ha ha’eñóva oimeraẽva mbaétépe g̃uarã eipurujeyhague ñe’ẽñemi.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Eñe’ẽ { $companyName } ndive emombe’u hag̃ua ko ñembogua rehegua ha ejerure mba’e tapére eguatase.
