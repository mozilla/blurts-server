# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Datalekken foar { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } fan { $total } monitord e-mailadres
       *[other] { $count } fan { $total } monitorde e-mailadressen
    }
add-email-link = E-mailadres tafoegje

## Breaches resolved filter

filter-label-unresolved = Net oploste datalekken
filter-label-resolved = Oploste datalekken

## Breaches table

column-company = BEDRIUW
column-breached-data = LEKTE GEGEVENS
column-detected = DETEKTEARRE
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Op { $breachDate } is in lek bard op { $companyName }. Nei ûntdekking en ferifikaasje fan it lek, is it op { $addedDate } tafoege oan ús database. Dit lek omfette: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Gean nei <a>{ $breachedCompanyUrl }</a> om jo wachtwurd te wizigjen en twafaktorautentikaasje (2FA) yn te skeakeljen.
breach-checklist-pw-body = Soargje derfoar dat jo wachtwurd unyk en dreech te rieden is. As dit wachtwurd wurdt brûkt op oare accounts, wês wis dat jo it dêr ek wizigje. <a>{ -brand-firefox }-wachtwurdenbehearder</a> kin jo helpe om al jo wachtwurden feilich by te hâlden.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Beskermje jo e-mail mei in tsjinst foar it maskearjen fan e-mail, lykas <a>{ -brand-relay }</a>.
breach-checklist-email-body = Dit kin jo echte e-mailadres ferbergje, wylst e-mailberjochten nei jo echte Postfek YN trochstjoerd wurde.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Kontrolearje jo bankôfskrift op rekkeningen, lieningen of creditcards dy’t jo net werkenne.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Jo kinne ek oerweagje jo tegoed op <a>Equifax</a>, <a>Experian</a> en <a>TransUnion</a> te befriezen, om foar te kommen dat oplichters nije accounts op jo namme iepenje. It is fergees en hat gjin ynfloed op jo kredytskoare.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Meld dit lek by jo creditcardmaatskippij en freegje in nije kaart oan mei in nij nûmer.
breach-checklist-cc-body = Kontrolearje ek jo creditcardôfskriften op ûnbekende ôfskriuwingen.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Bring jo bank daliks op de hichte dat jo rekkeningnûmer hackt is.
breach-checklist-bank-body = As jo dit flugger dogge, kinne jo mear juridyske beskerming krije om eventuele ferliezen te ferheljen. Kontrolearje ek jo rekkeningen op net-herkende ôfskriuwingen.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Bring jo kaartferstrekker op de hichte en wizigje jo pinkoade daliks.
breach-checklist-pin-body = Soargje derfoar dat jo nije pinkoade, of in oare pinkoade, gjin maklik te rieden sifers befettet, lykas jo bertedatum of adres.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Brûk it ynternet privee mei in VPN, lykas <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Jo IP-adres (Internet Protocol-adres) jout jo lokaasje en ynternetprovider oan. In VPN kin jo echte IP-adres ferstopje, sadat jo privee ynternet brûke kinne.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Wizigje wachtwurden of pinkoaden dy’t in part fan jo adres befetsje.
breach-checklist-address-body = Adressen binne maklik te finen yn iepenbiere dossiers en kinne derfoar soargje dat dy wachtwurden en pinkoaden maklik te rieden binne.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Wizigje wachtwurden of pinkoaden dy’t jo bertedatum befetsje.
breach-checklist-dob-body = Bertedata binne maklik te finen yn iepenbiere dossiers en minsken dy’t jo bertedatum fine, kinne jo pinkoade maklik riede.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Beskermje jo telefoannûmer mei in maskearstsjinst lykas <a>{ -brand-relay }</a>, dy’t jo wiere telefoannûmer ferberget.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Wurkje jo befeiligingsfragen by op <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Brûk lange, willekeurige antwurden en bewarje se op in feilich plak. Doch dit oeral wêr’t jo deselde befeiligingsfragen brûkt hawwe.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Meitsje unike, sterke wachtwurden foar elk account wêr’t jo wachtwurden opnij brûkt hawwe.
breach-checklist-hp-body = In wachtwurdenbehearder lykas de <a>{ -brand-firefox }-wachtwurdenbehearder</a> (dy’t fergees is en ynboud is yn de { -brand-firefox }-browser) kin jo helpe om al jo wachtwurden by te hâlden en der feilich tagong ta te krijen fan al jo apparaten ôf.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Nim kontakt op mei { $companyName } om harren te ynformearjen oer dizze ynbrek en freegje hokker spesifike stappen jo ûndernimme kinne.
