# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Cenime të dhënash me rrezik të madh
fix-flow-nav-leaked-passwords = Fjalëkalime të rrjedhur
fix-flow-nav-security-recommendations = Rekomandime sigurie
guided-resolution-flow-exit = Kthehuni te pulti
guided-resolution-flow-next-arrow = Kaloni te hapi pasues
guided-resolution-flow-next-arrow-sub-step = Kaloni te përfundimi pasues
guided-resolution-flow-step-navigation-label = Hapa me drejtim

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Le të vazhdojmë
fix-flow-celebration-next-recommendations-label = Shihni rekomandime
fix-flow-celebration-next-dashboard-label = Kaloni te Pulti juaj

## High-risk flow

fix-flow-celebration-high-risk-title = I ndreqët ekspozimet tuaja me rrezik të madh!
fix-flow-celebration-high-risk-description-in-progress = Kryerja e kësaj pune mund të duket si shumë, por është e rëndësishme të bëhet, për ta mbajtur veten të parrezik. Vazhdoni kështu.
fix-flow-celebration-high-risk-description-done = Kryerja e kësaj pune mund të duket si shumë, por është e rëndësishme të bëhet, për ta mbajtur veten të parrezik.
fix-flow-celebration-high-risk-description-next-passwords = Tani le të ndreqim fjalëkalimet tuaj të ekspozuar.
fix-flow-celebration-high-risk-description-next-security-questions = Tani le të ndreqim pyetje sigurie tuajat të ekspozuara.
fix-flow-celebration-high-risk-description-next-security-recommendations = Më pas, do t’ju japim rekomandime të personalizuara sigurie, bazuar te çfarë lloj të dhënash tuajat qenë ekspozuar.
fix-flow-celebration-high-risk-description-next-dashboard = Keni mbërritur në fund të hapave për ju. Te pulti juaj mund të shihni çfarëdo zërash që lypin veprim dhe të ndiqni ecurinë tuaj.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Fjalëkalimet tuaj tani janë të mbrojtur!
fix-flow-celebration-security-questions-title = Pyetjet tuaja të sigurisë janë të mbrojtura!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Tani le të shqyrtojmë dhe përditësojmë pyetje sigurie tuajat të ekspozuara.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Më pas, do t’ju japim rekomandime të personalizuara sigurie, bazuar te çfarë lloj të dhënash tuajat qenë ekspozuar.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bukur! Keni mbërritur në fund të hapave për ju. Te pulti juaj mund të shihni çfarëdo zërash që lypin veprim dhe të ndiqni ecurinë tuaj.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Keni plotësuar krejt rekomandimet!
fix-flow-celebration-security-recommendations-description-next-dashboard = Bukur! Keni mbërritur në fund të hapave për ju. Te pulti juaj mund të shihni çfarëdo zërash që lypin veprim dhe të ndiqni ecurinë tuaj.

# High Risk Data Breaches

high-risk-breach-heading = Ja ç’të bëni
high-risk-breach-subheading = Kjo lyp hyrje te hollësi tuajat rezervat, ndaj do të duhet ta ndreqni dorazi ju vetë këtë.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] U shfaq në { $num_breaches } cenim të dhënash:
       *[other] U shfaq në { $num_breaches } cenime të dhënash:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>më { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Vëri shenjë si të ndrequr
high-risk-breach-skip = Hëpërhë anashkaloje
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
       *[other] Kohë afërsisht për ju: { $estimated_time }+ minuta
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Qe ekspozuar numri i kartës tuaj të kreditit
high-risk-breach-credit-card-description = Cilido që e shtie në dorë, mund të bëjë blerje të paautorizuara, për të cilat përgjegjësinë e mbani ju. Veproni që tani, për të parandaluar dëmtim financiar.
high-risk-breach-credit-card-step-one = Nëse e keni ende këtë kartë, lidhuni me emetuesin për ta njoftuar se është vjedhur.
high-risk-breach-credit-card-step-two = Kërkoni një kartë të re, me një numër të ri.
high-risk-breach-credit-card-step-three = Kontrolloni llogaritë tuaja për veprime të paautorizuara.

# Bank Account Breaches

high-risk-breach-bank-account-title = Qe ekspozuar llogaria juaj bankare
high-risk-breach-bank-account-description = Ndërmarrja e një veprimi sa më shpejt që të jetë e mundur, mund t’ju jepte më tepër mbrojtje ligjore, për të ndihmuar të rimarrë çfarëdo humbjesh
high-risk-breach-bank-account-step-one = Njoftojeni menjëherë bankën tuaj se numri i llogarisë tuaj është komprometuar.
high-risk-breach-bank-account-step-two = Ndryshoni numrin e llogarisë tuaj.
high-risk-breach-bank-account-step-three = Kontrolloni llogaritë tuaja për veprime të paautorizuara.

# Social Security Number Breaches

high-risk-breach-social-security-title = Numri juaj i sigurimeve shoqërore qe ekspozuar
high-risk-breach-social-security-description = Me numrin tuaj të sigurimeve shoqërore, mashtruesit mund të marrin kredi të reja, ose të hapin karta krediti. Veproni shpejt, për të parandaluar dëm financiar.
high-risk-breach-social-security-step-one = Mbroni veten duke <link_to_info>ujdisur një sinjalizim mashtrimi, ose duke ngrirë kartën tuaj të kreditit.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Kontrolloni raportin e kartës tuaj të kreditit</link_to_info> për llogari të panjohura.

# Social Security Number Modal

ssn-modal-title = Mbi sinjalizime mashtrimesh dhe ngrirje karte krediti
ssn-modal-description-fraud-part-one = <b>Një sinjalizim mashtrimi</b> lyp që biznese të verifikojnë identitetin tuaj, para se të emetojë kredit të ri në emrin tuaj. Është falas, zgjat një vi dhe s’do të ndikojë negativisht në vlerësimin e kreditit tuaj.
ssn-modal-description-fraud-part-two = Që të ujdisni një të tillë, lidhuni me një nga tre zyrat e kreditit. Nuk ju duhet të kontaktoni që të treja.
ssn-modal-description-freeze-credit-part-one = <b>Bllokimi i kreditit tuaj</b> i pengon cilitdo të hapë një llogari të re në emrin tuaj. Është falas dhe s’do të ndikojë negativisht në vlerësimin tuaj lidhur me kreditin, por do t’ju duhet ta zhbllokoni, para se të hapni çfarëdo llogarie të re.
ssn-modal-description-freeze-credit-part-two = Që të bllokoni kreditin tuaj, lidhuni me cilëndo nga tre zyrat e kreditit — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> dhe <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Mësoni më tepër mbi sinjalizime mashtrimesh dhe ngrirje karte krediti
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = PIN-i juaj qe ekspozuar
high-risk-breach-pin-description = Ndërmarrja e një veprimi sa më shpejt që të jetë e mundur, mund t’ju jepte më tepër mbrojtje ligjore, për të ndihmuar të rimarrë çfarëdo humbjesh
high-risk-breach-pin-step-one = Njoftojeni menjëherë bankën tuaj se PIN-i juaj tuaj është komprometuar.
high-risk-breach-pin-step-two = Ndryshojeni PIN-in tuaj kudo që keni përdorur po atë.
high-risk-breach-pin-step-three = Kontrolloni llogaritë tuaja për veprime të paautorizuara.

# No high risk breaches found

high-risk-breach-none-title = Lajme të mbara, s’gjetëm ndonjë cenim të dhënash me rrezik të madh
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Pikasim cenime të dhënash bazuar në adresën tuaj email dhe s’gjetëm ndonjë cenim të dhënash me rrezik të madh për { $email_list }.
high-risk-breach-none-sub-description-part-one = Në cenime të dhënash me rrezik të madh përfshihen
high-risk-breach-none-sub-description-ssn = Numër sigurimesh shoqërore
high-risk-breach-none-sub-description-bank-account = Hollësi llogarie bankare
high-risk-breach-none-sub-description-cc-number = Numra kartash krediti
high-risk-breach-none-sub-description-pin = PIN-e
high-risk-breach-none-continue = Vazhdoni

# Security recommendations

security-recommendation-steps-label = Rekomandime sigurie
security-recommendation-steps-title = Ja këshilla jonë:
security-recommendation-steps-cta-label = E mora vesh!

# Phone security recommendation

security-recommendation-phone-title = Mbroni numrin tuaj të telefonit
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Numri juaj i telefonit u shfaq në { $num_breaches } cenim të dhënash:
       *[other] Numri juaj i telefonit u shfaq në { $num_breaches } cenime të dhënash:
    }
security-recommendation-phone-description = Mjerisht, s’mund ta rimerrni. Por ka hapa që mund t’i ndërmerrni për të garantuar të jeni i parrezik.
security-recommendation-phone-step-one = Bllokoni numra të padëshiruar, për të parandaluar marrjen e më tepër thirrjesh të padëshiruara
security-recommendation-phone-step-two = Mos klikoni mbi lidhje në tekste nga dërgues të panjohur; nëse duket të jetë prej një burimi të besuar, telefonojini drejtpërdrejt, për ta ripohuar

# Email security recommendation

security-recommendation-email-title = Mbroni adresën tuaj email
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Adresa juaj email u shfaq në { $num_breaches } cenim të dhënash:
       *[other] Adresa juaj email u shfaq në { $num_breaches } cenime të dhënash:
    }
security-recommendation-email-description = Mjerisht, këtë s’mund ta ndreqni. Por ka hapa që mund t’i ndërmerrni për të mbrojtur veten.
security-recommendation-email-step-one = Mos klikoni mbi lidhje në email-e nga dërgues të panjohur; nëse duket të jetë prej një burimi të besuar, telefonojini drejtpërdrejt, për ta ripohuar
security-recommendation-email-step-two = Hapni sytë nga <link_to_info>mashtrime karremëzimi</link_to_info>
security-recommendation-email-step-three = Vëruni shenjë si të padëshiruar email-eve të dyshimtë dhe bllokoni dërguesin
security-recommendation-email-step-four = Përdorni <link_to_info>{ -brand-relay } maska email-i</link_to_info> që të mbroni email-in tuaj në të ardhmen

# IP security recommendation

security-recommendation-ip-title = Përdorni një VPN, për më tepër privatësi
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Adresa juaj IP u shfaq në { $num_breaches } cenim të dhënash:
       *[other] Adresa juaj IP u shfaq në { $num_breaches } cenime të dhënash:
    }
security-recommendation-ip-description = Adresa juaj IP është një piketë e vendndodhjes tuaj dhe e operatorit të shërbimeve tuaja internet. Hacker-a mund ta përdorim këtë informacion për të zbuluar vendndodhjen tuaj, ose të provojnë të lidhen me pajisjet tuaja.
security-recommendation-ip-step-one = Përdorni një VPN (b.f., <link_to_info>{ -brand-mozilla-vpn }</link_to_info>), për të fshehur adresën tuaj të njëmendtë IP dhe përdorur internetin privatisht.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Fjalëkalimi juaj { $breach_name } qe ekspozuar
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = U shfaq në një cenim të dhënash më { $breach_date }.
leaked-passwords-description = Mashtruesit mund të hyjnë në llogarinë tuaj dhe, me gjasa, do të rreken ta përdorin në llogari të tjera, për të parë nëse keni përdorur të njëjtin fjalëkalim. Që të mbroni veten, ndryshojeni, kudo që e keni përdorur.
leaked-passwords-steps-title = Ja ç’të bëni
leaked-passwords-steps-subtitle = Kjo lyp hyrje te llogaria juaj, ndaj do të duhet ta ndreqni dorazi ju vetë këtë.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Ndryshoni fjalëkalimin tuaj për <b>{ $emails_affected }</b> te <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Ndryshojeni kudo ku e keni përdorur.
leaked-passwords-mark-as-fixed = Vëri shenjë si të ndrequr
leaked-passwords-skip = Hëpërhë anashkaloje
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
       *[other] Kohë kryerje afërsisht: { $estimated_time } minuta për sajt
    }

# Leaked Security Questions

leaked-security-questions-title = Pyetjet tuaja të sigurisë qenë ekspozuar
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = U shfaqën në një cenim të dhënash te { $breach_name } më { $breach_date }.
leaked-security-questions-description = Mashtruesit mund t’i përdorin për të hyrë në llogaritë tuaja dhe çfarëdo sajtesh të tjerë ku keni përdorur të njëjtat pyetje sigurie. Që të mbroni llogaritë tuaja, përditësojini pa humbur kohë.
leaked-security-questions-steps-title = Ja ç’të bëni
leaked-security-questions-steps-subtitle = Kjo lyp hyrje te llogaria juaj, ndaj do të duhet ta ndreqni dorazi ju vetë këtë.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Përditësoni pyetjet tuaja të sigurisë për <b>{ $email_affected }</b> te <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Përditësojini në çfarëdo sajti tjetër ku keni përdorur të njëjtat pyetje sigurie. Mos harroni të përdorni pyetje të ndryshme sigurie për çdo llogari.
