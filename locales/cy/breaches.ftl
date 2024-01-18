# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Dangosfwrdd
breach-all-meta-title = { -brand-fx-monitor } - Pob Tor-data
breach-all-meta-social-title = Pob Tor-data Wedi ei Ganfod gan { -brand-fx-monitor }
breach-all-meta-social-description = Porwch y rhestr lawn o dor-data hysbys a ganfuwyd gan { -brand-fx-monitor }, yna gweld a ddatgelwyd eich manylion chi.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - Tor-data { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = A oedd y Tor-data { $company } wedi effeithio arnoch chi?
breach-detail-meta-social-description = Defnyddiwch { -brand-fx-monitor } i ddarganfod a gafodd eich manylion personol chi eu datgelu yn y tor-data hwn, a chael gwybod beth i'w wneud nesaf.
breach-scan-meta-title = { -brand-fx-monitor } - Canlyniadau Tor-data
breach-scan-meta-social-title = { -brand-fx-monitor } Canlyniadau Tor-data
breach-scan-meta-social-description = Mewngofnodwch i { -brand-fx-monitor } i ddatrys unrhyw dor-data a chael monitro parhaus am unrhyw dor-data hysbys newydd.

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
column-status-badge-active = Gweithredu
breaches-resolve-heading = Datrys y tor-data hwn:
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
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Ar { $breachDate }, profodd { $companyName } dor-data. Unwaith y cafodd y tor-data ei ganfod a'i ddilysu, cafodd ei ychwanegu at ein cronfa ddata ar { $addedDate }. Mae'r tor-data hwn yn cynnwys: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Rheolwr Cyfrineiriau { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Diweddarwch eich cyfrineiriau a galluogi dilysu dau ffactor (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Yn y rhan fwyaf o achosion, rydym yn argymell eich bod yn newid eich cyfrinair ar wefan y cwmni. Ond <b>efallai bod eu gwefan wedi torri neu'n cynnwys cynnwys maleisus</b>, felly byddwch yn ofalus os byddwch <breached-company-link>yn ymweld â'r wefan</breached-company-link>. I gael diogelwch ychwanegol, gwnewch yn siŵr eich bod chi'n defnyddio cyfrineiriau unigryw ar gyfer pob cyfrif, fel nad oes modd defnyddio unrhyw gyfrineiriau sydd wedi'u ryddhau ar gam i gael mynediad at gyfrifon eraill. Gall { $passwordManagerLink } eich helpu i gadw golwg diogel ar eich holl gyfrineiriau.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Diogelwch eich e-bost gyda gwasanaeth cuddio e-byst fel { $firefoxRelayLink }.
breach-checklist-email-body = Gall hyn guddio'ch gwir gyfeiriad e-bost wrth anfon e-byst ymlaen i'ch blwch derbyn go iawn.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Adolygwch eich adroddiad cyfrifon credyd am gyfrifon, benthyciadau, neu gardiau credyd nad ydych yn eu hadnabod.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Gallwch hefyd ystyried rhewi eich credyd ar { $equifaxLink } , { $experianLink } a { $transUnionLink } i atal sgamwyr rhag agor cyfrifon newydd yn eich enw chi. Mae am ddim ac ni fydd yn effeithio ar eich sgôr credyd.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Defnyddiwch y rhyngrwyd yn breifat gyda VPN, fel un { $mozillaVpnLink }.
breach-checklist-ip-body = Mae eich cyfeiriad IP (cyfeiriad Protocol Rhyngrwyd) yn nodi'ch lleoliad a'ch darparwr gwasanaeth rhyngrwyd. Gall VPN guddio'ch cyfeiriad IP go iawn fel y gallwch ddefnyddio'r rhyngrwyd yn breifat.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Newidiwch unrhyw gyfrineiriau neu PIN sy'n cynnwys unrhyw ran o'ch cyfeiriad.
breach-checklist-address-body = Mae'n hawdd dod o hyd i gyfeiriadau mewn cofnodion cyhoeddus a gallan nhw wneud y cyfrineiriau a'r PINau hynny'n hawdd eu dyfalu.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Newidiwch unrhyw gyfrineiriau neu PIN sy'n cynnwys eich dyddiad geni.
breach-checklist-dob-body = Mae'n hawdd dod o hyd i ddyddiadau geni mewn cofnodion cyhoeddus, a gall pobl sy'n dod o hyd iddo ddyfalu eich PIN yn hawdd.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Diogelwch eich rhif ffôn gyda gwasanaeth cuddio fel un { $firefoxRelayLink }, sy'n cuddio'ch gwir rif ffôn.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Diweddarwch eich cwestiynau diogelwch.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Yn y rhan fwyaf o achosion, byddem yn argymell eich bod yn diweddaru eich cwestiynau diogelwch ar wefan y cwmni. Ond <b>efallai bod eu gwefan wedi torri neu'n cynnwys cynnwys maleisus</b>, felly byddwch yn ofalus os byddwch <breached-company-link>yn ymweld â'r wefan</breached-company-link>. I gael diogelwch ychwanegol, diweddarwch y cwestiynau diogelwch hyn ar unrhyw gyfrifon pwysig lle rydych chi wedi'u defnyddio, a chreu cyfrineiriau unigryw ar gyfer pob cyfrif.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crëwch gyfrineiriau unigryw, cryf ar gyfer unrhyw gyfrif lle rydych chi wedi ailddefnyddio cyfrinair.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Gall rheolwr cyfrineiriau fel { $passwordManagerLink } (sy'n rhad ac am ddim ac yn rhan annatod o borwr { -brand-firefox }) eich helpu i gadw golwg ar eich holl gyfrineiriau a'u darparu'n ddiogel o'ch holl ddyfeisiau.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Cysylltwch â { $companyName } i roi gwybod iddyn nhw am y tor-data hwn a gofyn am gamau penodol y gallwch eu cymryd.
