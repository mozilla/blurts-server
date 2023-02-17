# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Cenime të dhënash për { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } nga { $total } email i mbikëqyrur
       *[other] { $count } nga { $total } email-e të mbikëqyrur
    }
add-email-link = Shtoni adresë email

## Breaches resolved filter

filter-label-unresolved = Cenime të pazgjidhura
filter-label-resolved = Cenime të zgjidhura

## Breaches table

column-company = SHOQËRI
column-breached-data = TË DHËNA TË CENUARA
column-detected = TË PIKASURA
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Më { $breachDate } u cenua { $companyName }. Pasi u zbulua dhe u verifikua cenimi, u shtua te baza jonë e të dhënave më { $addedDate }. Ky cenim përfshinte: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Që të ndryshoni fjalëkalimin tuaj dhe të aktivizoni mirëfilltësimin dyfaktorësh, kaloni te <a>{ $breachedCompanyUrl }</a>.
breach-checklist-pw-body = Sigurohuni që fjalëkalimi juaj të jetë unik dhe i zorshëm të hamendësohet. Nëse ky fjalëkalim është përdorur në çfarëdo llogarie tjetër, sigurohuni se e ndryshoni edhe atje. <a>{ -brand-firefox } Përgjegjësi i Fjalëkalimeve</a> mund t’ju ndihmojë të ndiqni në mënyrë të sigurt krejt fjalëkalimet tuaja.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Mbrojeni email-in tuaj me një shërbim maskimi email-sh, bie fjala <a>{ -brand-relay }</a>.
breach-checklist-email-body = Ky mund të fshehë adresën tuaj të vërtetë email, teksa ju sjell email-et te posta juaj e njëmendtë.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Mbikëqyrni raportin tuaj të kreditit për llogari, hua apo karta krediti që nuk i njihni.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Mund të shihni edhe mundësinë e ngrirjes së kreditit tuaj në <a>Equifax</a>, <a>Experian</a> dhe <a>TransUnion</a>, për t’u ndaluar mashtruesve të hapin llogari të reja në emrin tuaj. Është falas dhe s’do të prekë vlerësimin e kreditit tuaj.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Raportojeni këtë cenim te emetuesi i kartës tuaj të kreditit dhe kërkoni një kartë të re me një numër të ri.
breach-checklist-cc-body = Duhet të shihni gjithashtu faturën mujore të kartës suaj të kreditit, për faturime që nuk i njihni.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Njoftojeni menjëherë bankën tuaj se numri i llogarisë tuaj është komprometuar.
breach-checklist-bank-body = Bërja e kësaj më shpejt mundet t’ju japë më tepër mbrojtje ligjore, për t’ju ndihmuar të rimerrni çfarëdo humbjesh. Do t’ju duhet gjithashtu të kontrolloni llogaritë tuaj për çfarëdo faturimesh të panjohura.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Njoftoni emetuesin e kartës tuaj të kreditit dhe ndryshoni menjëherë PIN-in tuaj.
breach-checklist-pin-body = Sigurohuni se PIN-i juaj i ri, ose çfarëdo PIN-i tjetër, nuk përfshin numra të hamendësueshëm kollaj, bie fjala, datëlindjen, apo adresën tuaj.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Përdoreni internetin privatisht, me një VPN, bie fjala, <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Adresa juaj IP (adresë Protokolli Internet) tregon me përpikëri vendndodhjen tuaj dhe shërbimin internet. Një VPN mund ta fshehë adresën tuaj të njëmendtë IP, që kështu të mund ta përdorni internetin privatisht.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Ndryshoni çfarëdo fjalëkalimi apo PIN-i që përfshin çfarëdo pjese të adresës suaj.
breach-checklist-address-body = Adresat është e lehtë të gjenden në regjistra publikë dhe mund ta bëjnë të kollajtë hamendësimin e këtyre fjalëkalimeve dhe PIN-eve.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Ndryshoni çfarëdo fjalëkalimi apo PIN-i që përfshin datëlindjen tuaj.
breach-checklist-dob-body = Datëlindjen është e lehtë të gjenden në regjistra publikë dhe njerëzit që i gjejnë mund të hamendësojnë kollaj PIN-in tuaj.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Mbrojeni numrin tuaj të telefonit me një shërbim maskimi, të tillë si <a>{ -brand-relay }</a>, i cili fsheh numrin tuaj të vërtetë të telefonit.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Përditësoni pyetjen tuaj të sigurisë te <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Përdorni përgjigje të gjata, të zgjedhura kuturu dhe depozitojini diku në një vend të parrezik. Bëjeni këtë kudo tjetër ku keni përdorur të njëjtat pyetje sigurie.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Krijoni fjalëkalime unikë, të fortë, për çdo llogari ku keni ripërdorur fjalëkalime.
breach-checklist-hp-body = Një përgjegjës fjalëkalimesh, bie fjala, <a>Përgjegjës Fjalëkalimesh { -brand-firefox }</a> (i cili është i lirë dhe i brendshëm në shfletuesin { -brand-firefox }) mund t’ju ndihmojë të ndiqni krejt fjalëkalimet tuaj t’i përdorni pa rrezik që nga krejt pajisjet tuaja.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Lidhuni me { $companyName } për t’u bërë të ditur këtë cenim dhe kërkojuni për hapa specifikë që mund të ndërmerrni.
