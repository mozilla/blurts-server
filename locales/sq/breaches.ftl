# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Të dhëna cenimesh
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Cenime të dhënash për { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } nga { $total } email i mbikëqyrur
       *[other] { $count } nga { $total } email-e të mbikëqyrur
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Administroni email

## Breaches resolved filter

filter-label-unresolved = Cenime të pazgjidhura
filter-label-resolved = Cenime të zgjidhura

## Breaches table

column-company = SHOQËRI
column-breached-data = TË DHËNA TË CENUARA
column-detected = TË PIKASURA
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = I zgjidhur
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktiv
breaches-resolve-heading = Zgjidheni këtë cenim:
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Më { $breachDate } u cenua { $companyName }. Pasi u zbulua dhe u verifikua cenimi, u shtua te baza jonë e të dhënave më { $addedDate }. Ky cenim përfshinte: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach


## Prompts the user for changes when there is a breach detected of password


## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-body = Ky mund të fshehë adresën tuaj të vërtetë email, teksa ju sjell email-et te posta juaj e njëmendtë.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Mbikëqyrni raportin tuaj të kreditit për llogari, hua apo karta krediti që nuk i njihni.

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

breach-checklist-ip-body = Adresa juaj IP (adresë Protokolli Internet) tregon me përpikëri vendndodhjen tuaj dhe shërbimin internet. Një VPN mund ta fshehë adresën tuaj të njëmendtë IP, që kështu të mund ta përdorni internetin privatisht.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Ndryshoni çfarëdo fjalëkalimi apo PIN-i që përfshin çfarëdo pjese të adresës suaj.
breach-checklist-address-body = Adresat është e lehtë të gjenden në regjistra publikë dhe mund ta bëjnë të kollajtë hamendësimin e këtyre fjalëkalimeve dhe PIN-eve.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Ndryshoni çfarëdo fjalëkalimi apo PIN-i që përfshin datëlindjen tuaj.
breach-checklist-dob-body = Datëlindjen është e lehtë të gjenden në regjistra publikë dhe njerëzit që i gjejnë mund të hamendësojnë kollaj PIN-in tuaj.

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-body = Përdorni përgjigje të gjata, të zgjedhura kuturu dhe depozitojini diku në një vend të parrezik. Bëjeni këtë kudo tjetër ku keni përdorur të njëjtat pyetje sigurie.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Krijoni fjalëkalime unikë, të fortë, për çdo llogari ku keni ripërdorur fjalëkalime.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Lidhuni me { $companyName } për t’u bërë të ditur këtë cenim dhe kërkojuni për hapa specifikë që mund të ndërmerrni.
