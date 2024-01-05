# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Pult

breach-all-meta-title = { -brand-fx-monitor } - Krejt Cenimet e të Dhënave
breach-all-meta-social-title = Krejt Cenimet e Pikasura nga { -brand-fx-monitor }
breach-all-meta-social-description = Shfletoni listën e plotë të cenimeve të ditura të pikasura nga { -brand-fx-monitor }, mandej shihni nëse është ekspozuar informacion i juaji.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - Cenim të Dhënash { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Qetë prekur nga Cenim të Dhënash { $company }?
breach-detail-meta-social-description = Përdorni { -brand-fx-monitor } që të shihni nëse në këtë cenim qe ekspozuar informacion personal i juaji dhe kuptoni ç’të bëhet më pas.

breach-scan-meta-title = { -brand-fx-monitor } - Përfundime Cenimesh
breach-scan-meta-social-title = Përfundime Cenimesh { -brand-fx-monitor }
breach-scan-meta-social-description = Që të zgjidhni cenime dhe të merrni mbikëqyrje të vazhdueshme për çfarëdo cenimi të ri të ditur, bëni hyrjen te { -brand-fx-monitor }.

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

breaches-none-headline = S’u gjetën cenime
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Lajme të mbara! Për { $email } s’u raportuan cenime. Do të vazhdojmë ta mbikëqyrim këtë email dhe t’ju bëjmë të ditur, nëse ndodhin cenime të reja.
breaches-none-cta-blurb = Do të donit të mbikëqyret tjetër email?
breaches-none-cta-button = Shtoni adresë email

breaches-all-resolved-headline = Krejt cenimet janë zgjidhur
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Punë e paqme! Keni zgjidhur krejt cenimet për { $email }. Do të vazhdojmë ta mbikëqyrim këtë email dhe t’ju bëjmë të ditur, nëse ndodhin cenime të reja.
breaches-all-resolved-cta-blurb = Do të donit të mbikëqyret tjetër email?
breaches-all-resolved-cta-button = Shtoni adresë email

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Më { $breachDate } u cenua { $companyName }. Pasi u zbulua dhe u verifikua cenimi, u shtua te baza jonë e të dhënave më { $addedDate }. Ky cenim përfshinte: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Përgjegjës Fjalëkalimesh { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Përditësoni fjalëkalimet tuaja dhe aktivizoni mirëfilltësim dyfaktorësh (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Në shumicën e rasteve rekomandojmë të ndryshoni fjalëkalimin tuaj në sajtin e shoqërisë. Por <b>sajti në fjalë mund të jetë jashtë funksionimi, ose të përmbajë lëndë dashakeqe</b>, ndaj bëni kujdes, nëse <breached-company-link>vizitoni sajtin</breached-company-link>. Për më tepër mbrojtje, sigurohuni se po përdorni fjalëkalime unikë për krejt llogaritë, që kështu, çfarëdo rrjedhje fjalëkalimi të mos mund të përdoret për të hyrë në llogari të tjera. { $passwordManagerLink } mund t’ju ndihmojë të keni nën kontroll në mënyrë të parrezik krejt fjalëkalimet tuaj.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Mbrojeni email-in tuaj me një shërbim maskimi email-sh, bie fjala, { $firefoxRelayLink }.
breach-checklist-email-body = Ky mund të fshehë adresën tuaj të vërtetë email, teksa ju sjell email-et te posta juaj e njëmendtë.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Mbikëqyrni raportin tuaj të kreditit për llogari, hua apo karta krediti që nuk i njihni.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Mund të shihni edhe mundësinë e ngrirjes së kreditit tuaj në { $equifaxLink }, { $experianLink } dhe { $transUnionLink }, për t’u ndaluar mashtruesve të hapin llogari të reja në emrin tuaj. Është falas dhe s’do të prekë vlerësimin e kreditit tuaj.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Përdoreni internetin privatisht, me një VPN, bie fjala, { $mozillaVpnLink }.
breach-checklist-ip-body = Adresa juaj IP (adresë Protokolli Internet) tregon me përpikëri vendndodhjen tuaj dhe shërbimin internet. Një VPN mund ta fshehë adresën tuaj të njëmendtë IP, që kështu të mund ta përdorni internetin privatisht.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Ndryshoni çfarëdo fjalëkalimi apo PIN-i që përfshin çfarëdo pjese të adresës suaj.
breach-checklist-address-body = Adresat është e lehtë të gjenden në regjistra publikë dhe mund ta bëjnë të kollajtë hamendësimin e këtyre fjalëkalimeve dhe PIN-eve.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Ndryshoni çfarëdo fjalëkalimi apo PIN-i që përfshin datëlindjen tuaj.
breach-checklist-dob-body = Datëlindjen është e lehtë të gjenden në regjistra publikë dhe njerëzit që i gjejnë mund të hamendësojnë kollaj PIN-in tuaj.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Mbrojeni numrin tuaj të telefonit me një shërbim maskimi, të tillë si { $firefoxRelayLink }, i cili fsheh numrin tuaj të vërtetë të telefonit.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Përditësoni pyetjet tuaja të sigurisë.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Në shumicën e rasteve rekomandojmë të përditësoni pyetjet tuaja të sigurisë në sajtin e shoqërisë. Por <b>sajti në fjalë mund të jetë jashtë funksionimi, ose të përmbajë lëndë dashakeqe</b>, ndaj bëni kujdes, nëse <breached-company-link>vizitoni sajtin</breached-company-link>. Për më tepër mbrojtje,përditësojini këto pyetje sigurie në çfarëdo llogarie të rëndësishme ku i keni përdorur dhe krijoni fjalëkalime unikë për krejt llogaritë.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Krijoni fjalëkalime unikë, të fortë, për çdo llogari ku keni ripërdorur fjalëkalime.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Një përgjegjës fjalëkalimesh, bie fjala, { $passwordManagerLink } (i cili është i lirë dhe i brendshëm në shfletuesin { -brand-firefox }) mund t’ju ndihmojë të ndiqni krejt fjalëkalimet tuaj dhe t’i përdorni pa rrezik që nga krejt pajisjet tuaja.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Lidhuni me { $companyName } për t’u bërë të ditur këtë cenim dhe kërkojuni për hapa specifikë që mund të ndërmerrni.
