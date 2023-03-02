# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Data tor-data
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Tor-data ar gyfer { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [zero] { $count } o { $total } e-byst wedi'u monitro
        [one] { $count } o { $total } e-bost wedi'i fonitro
        [two] { $count } o { $total }  e-bostwedi'u monitro
        [few] { $count } o { $total } e-bost wedi'u monitro
        [many] { $count } o { $total } e-bost wedi'u monitro
       *[other] { $count } o { $total } e-bost wedi'u monitro
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Rheoli arallenwau

## Breaches resolved filter

filter-label-unresolved = Tor-data heb eu datrys
filter-label-resolved = Tor-data wedi'u datrys

## Breaches table

column-company = CWMNI
column-breached-data = TOR-DATA
column-detected = CANFOD
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Datryswyd
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Gweithredol
breaches-none-headline = Heb ganfod tor-data
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Newyddion da! Nid oes adroddiad am unrhyw dor-data hysbys am { $email }. Byddwn yn parhau i fonitro'r e-bost hwn a byddwn yn rhoi gwybod i chi os bydd unrhyw dor-data newydd yn digwydd.
breaches-none-cta-blurb = Hoffech chi fonitro e-bost arall?
breaches-none-cta-button = Ychwanegwch gyfeiriad e-bost
breaches-all-resolved-headline = Mae pob tor-data wedi'u datrys
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Da iawn! Rydych chi wedi datrys pob tor-data ar gyfer { $email }. Byddwn yn parhau i fonitro'r e-bost hwn a byddwn yn rhoi gwybod i chi os bydd unrhyw dor-data newydd yn digwydd.
breaches-all-resolved-cta-blurb = Hoffech chi fonitro e-bost arall?
breaches-all-resolved-cta-button = Ychwanegwch gyfeiriad e-bost
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Ar { $breachDate }, profodd { $companyName } dor-data. Unwaith y cafodd y tor-data ei ganfod a'i ddilysu, cafodd ei ychwanegu at ein cronfa ddata ar { $addedDate }. Mae'r tor-data hwn yn cynnwys: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Ewch i <a>{ $breachedCompanyUrl }</a> i newid eich cyfrinair a galluogi dilysiad dau ffactor (2FA).
breach-checklist-pw-body = Gwnewch yn siŵr fod eich cyfrinair yn unigryw ac yn anodd ei ddyfalu. Os yw'r cyfrinair hwn yn cael ei ddefnyddio ar unrhyw gyfrifon eraill, gwnewch yn siŵr ei newid yno hefyd. Gall <a>Reolwr Cyfrineiriau { -brand-firefox }</a> eich helpu i gadw golwg diogel ar eich holl gyfrineiriau.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Diogelwch eich e-bost gyda gwasanaeth cuddio e-byst fel <a>{ -brand-relay }</a>.
breach-checklist-email-body = Gall hyn guddio'ch gwir gyfeiriad e-bost wrth anfon e-byst ymlaen i'ch blwch derbyn go iawn.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Adolygwch eich adroddiad cyfrifon credyd am gyfrifon, benthyciadau, neu gardiau credyd nad ydych yn eu hadnabod.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Gallwch hefyd ystyried rhewi eich credyd ar <a>Equifax</a>, <a>Experian</a> a <a>TransUnion</a> i atal sgamwyr rhag agor cyfrifon newydd yn eich enw chi. Mae am ddim ac ni fydd yn effeithio ar eich sgôr credyd.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Rhowch wybod i'ch cyhoeddwr cerdyn credyd am y tor-data hwn a gofynnwch am gerdyn newydd gyda rhif newydd.
breach-checklist-cc-body = Dylech hefyd adolygu eich cyfriflenni cerdyn credyd am daliadau nad ydych yn eu hadnabod.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Rhowch wybod i'ch banc ar unwaith bod rhif eich cyfrif wedi'i beryglu.
breach-checklist-bank-body = Gallai gwneud hynny’n gyflym roi mwy o amddiffyniad cyfreithiol i chi i’ch helpu i adennill unrhyw golledion. Byddwch hefyd am wirio'ch cyfrifon am unrhyw daliadau nad ydych yn eu hadnabod.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Rhowch wybod i gyhoeddwr eich cerdyn a newidiwch eich PIN ar unwaith.
breach-checklist-pin-body = Gwnewch yn siŵr nad yw eich PIN newydd, nac unrhyw PIN arall, yn cynnwys rhifau y mae modd eu dyfalu’n hawdd fel eich dyddiad geni neu gyfeiriad.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Defnyddiwch y rhyngrwyd yn breifat gyda VPN, megis <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Mae eich cyfeiriad IP (cyfeiriad Protocol Rhyngrwyd) yn nodi'ch lleoliad a'ch darparwr gwasanaeth rhyngrwyd. Gall VPN guddio'ch cyfeiriad IP go iawn fel y gallwch ddefnyddio'r rhyngrwyd yn breifat.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Newidiwch unrhyw gyfrineiriau neu PIN sy'n cynnwys unrhyw ran o'ch cyfeiriad.
breach-checklist-address-body = Mae'n hawdd dod o hyd i gyfeiriadau mewn cofnodion cyhoeddus a gallan nhw wneud y cyfrineiriau a'r PINau hynny'n hawdd eu dyfalu.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Newidiwch unrhyw gyfrineiriau neu PIN sy'n cynnwys eich dyddiad geni.
breach-checklist-dob-body = Mae'n hawdd dod o hyd i ddyddiadau geni mewn cofnodion cyhoeddus, a gall pobl sy'n dod o hyd iddo ddyfalu eich PIN yn hawdd.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Diogelwch eich rhif ffôn gyda gwasanaeth cuddio fel <a>{ -brand-relay }</a>, sy'n cuddio'ch gwir rif ffôn.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Diweddarwch eich cwestiynau diogelwch ar <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Defnyddiwch atebion hir, ar hap, a storiwch nhw yn rhywle diogel. Gwnewch hyn yn unrhyw le arall rydych chi wedi defnyddio'r un cwestiynau diogelwch.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crëwch gyfrineiriau unigryw, cryf ar gyfer unrhyw gyfrif lle rydych chi wedi ailddefnyddio cyfrinair.
breach-checklist-hp-body = Gall rheolwr cyfrinair fel <a>Rheolwr Cyfrineiriau { -brand-firefox }</a> (sy'n rhad ac am ddim ac yn rhan annatod o borwr { -brand-firefox }) eich helpu i gadw golwg ar eich holl gyfrineiriau a chael mynediad diogel iddo o'ch holl ddyfeisiau.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Cysylltwch â { $companyName } i roi gwybod iddyn nhw am y tor-data hwn a gofyn am gamau penodol y gallwch eu cymryd.
