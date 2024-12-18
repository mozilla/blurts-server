# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Tor-data risg uchel
fix-flow-nav-leaked-passwords = Cyfrineiriau wedi'u gollwng
fix-flow-nav-security-recommendations = Argymhellion diogelwch
guided-resolution-flow-exit = Nôl i'r bwrdd gwaith
guided-resolution-flow-next-arrow = Ymlaen i'r cam nesaf
guided-resolution-flow-next-arrow-sub-step = Ymlaen i'r canlyniad nesaf
guided-resolution-flow-step-navigation-label = Camau tywys

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Gadewch i ni ddal ati
fix-flow-celebration-next-recommendations-label = Gweld yr argymhellion
fix-flow-celebration-next-dashboard-label = Ewch i'ch Bwrdd Gwaith

## High-risk flow

fix-flow-celebration-high-risk-title = Rydych wedi trwsio'ch datgeliadau risg uchel!
fix-flow-celebration-high-risk-description-in-progress = Gall hyn deimlo fel gwaith caled, ond mae'n bwysig ei wneud i gadw'ch hun yn ddiogel. Daliwch ati gyda'r gwaith da.
fix-flow-celebration-high-risk-description-done = Gall hyn deimlo fel gwaith caled, ond mae'n bwysig ei wneud i gadw'ch hun yn ddiogel.
fix-flow-celebration-high-risk-description-next-passwords = Nawr gadewch i ni drwsio'ch cyfrineiriau sydd wedi'u datgelu.
fix-flow-celebration-high-risk-description-next-security-questions = Nawr gadewch i ni drwsio'ch cwestiynau diogelwch sydd wedi'u datgelu.
fix-flow-celebration-high-risk-description-next-security-recommendations = Nesaf, byddwn yn rhoi argymhellion diogelwch personol i chi yn seiliedig ar ba ddata sydd gennych chi sydd wedi'i ddatgelu.
fix-flow-celebration-high-risk-description-next-dashboard = Rydych wedi cyrraedd diwedd eich taith. Gallwch weld unrhyw eitemau gweithredu ac dilyn eich cynnydd ar eich bwrdd gwaith.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Mae eich cyfrineiriau bellach wedi'u diogelu!
fix-flow-celebration-security-questions-title = Mae eich cwestiynau diogelwch wedi'u diogelu!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Nawr, gadewch i ni adolygu a diweddaru'ch cwestiynau diogelwch oedd wedi'u datgelu.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Nesaf, byddwn yn rhoi argymhellion diogelwch personol i chi yn seiliedig ar ba ddata sydd gennych chi sydd wedi'u datgelu.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Rydych wedi cyrraedd diwedd eich taith. Gallwch weld unrhyw eitemau gweithredu a dilyn eich cynnydd ar eich bwrdd gwaith.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Rydych chi wedi cyflawni eich holl argymhellion!
fix-flow-celebration-security-recommendations-description-next-dashboard = Da iawn! Rydych wedi cyrraedd diwedd eich taith. Gallwch weld unrhyw eitemau gweithredu a dilyn eich cynnydd ar eich bwrdd gwaith.

# High Risk Data Breaches

high-risk-breach-heading = Dyma beth i'w wneud
high-risk-breach-subheading = Mae hyn yn gofyn am fynediad i'ch manylion sensitif, felly bydd angen i chi eu trwsio â llaw.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [zero] Heb ymddangos mewn unrhyw dor-data.
        [one] Mae wedi ymddangos mewn { $num_breaches } tor-data:
        [two] Mae wedi ymddangos mewn { $num_breaches } dor-data:
        [few] Mae wedi ymddangos mewn { $num_breaches } tor-data:
        [many] Mae wedi ymddangos mewn { $num_breaches } thor-data:
       *[other] Mae wedi ymddangos mewn { $num_breaches } tor-data:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>ar { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marciwch fel wedi'i drwsio
high-risk-breach-skip = Hepgor am nawr
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [zero] Eich amcangyfrif o amser: { $estimated_time }+ munud
        [one] Eich amcangyfrif o amser: { $estimated_time }+ munud
        [two] Eich amcangyfrif o amser: { $estimated_time }+ munud
        [few] Eich amcangyfrif o amser: { $estimated_time }+ munud
        [many] Eich amcangyfrif o amser: { $estimated_time }+ munud
       *[other] Eich amcangyfrif o amser: { $estimated_time }+ munud
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Datgelwyd rhif eich cerdyn credyd
high-risk-breach-credit-card-description = Gall unrhyw un sy'n ei gael prynu nwyddau heb eich caniatâd y gallech chi fod yn gyfrifol amdano. Gweithredwch nawr i atal baich ariannol.
high-risk-breach-credit-card-step-one = Os yw'r cerdyn hwn gennych o hyd, cysylltwch â'r cyhoeddwr i roi gwybod ei fod wedi cael ei ddwyn.
high-risk-breach-credit-card-step-two = Gofynnwch am gerdyn newydd gyda rhif newydd.
high-risk-breach-credit-card-step-three = Gwiriwch eich cyfrifon am daliadau heb ganiatâd.

# Bank Account Breaches

high-risk-breach-bank-account-title = Roedd eich cyfrif banc wedi'i ddatgelu
high-risk-breach-bank-account-description = Gallai cymryd camau cyn gynted â phosibl roi mwy o amddiffyniadau cyfreithiol i chi i'ch helpu i adennill unrhyw golledion.
high-risk-breach-bank-account-step-one = Rhowch wybod i'ch banc ar unwaith bod rhif eich cyfrif wedi'i danseilio.
high-risk-breach-bank-account-step-two = Newid rhif eich cyfrif.
high-risk-breach-bank-account-step-three = Gwiriwch eich cyfrifon am daliadau heb eich caniatâd.

# Social Security Number Breaches

high-risk-breach-social-security-title = Datgelwyd eich rhif nawdd cymdeithasol
high-risk-breach-social-security-description = Gall sgamwyr agor benthyciadau neu gardiau credyd newydd gyda'ch rhif nawdd cymdeithasol. Gweithredwch yn gyflym i atal niwed ariannol.
high-risk-breach-social-security-step-one = Diogelwch eich hun trwy <link_to_info>osod rhybudd twyll neu rewi eich credyd.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Gwiriwch eich adroddiad credyd</link_to_info> am gyfrifon nad ydych yn eu hadnabod.

# Social Security Number Modal

ssn-modal-title = Ynghylch rhybuddion twyll a rhewi credyd
ssn-modal-description-fraud-part-one = <b>Rhybudd Twyll</b>, sef ei gwneud yn ofynnol i fusnesau wirio pwy ydych chi cyn iddyn nhw roi credyd newydd yn eich enw chi. Mae'n rhad ac am ddim, yn para blwyddyn, ac ni fydd yn effeithio'n negyddol ar eich sgôr credyd.
ssn-modal-description-fraud-part-two = I greu un, cysylltwch ag unrhyw un o'r tair canolfan credyd. Does dim rhaid i chi gysylltu â'r tri.
ssn-modal-description-freeze-credit-part-one = <b>Rhewi eich credyd</b>, sef atal unrhyw un rhag agor cyfrif newydd yn eich enw chi. Mae’n rhad ac am ddim ac ni fydd yn effeithio’n negyddol ar eich sgôr credyd, ond bydd angen i chi ei ddadrewi cyn agor unrhyw gyfrifon newydd.
ssn-modal-description-freeze-credit-part-two = I rewi'ch credyd, cysylltwch â phob un o'r tair canolfan gredyd — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link>, a <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Darllenwch ragor am rybuddion twyll a rhewi credyd
ssn-modal-ok = Iawn

# PIN Breaches

high-risk-breach-pin-title = Cafodd eich PIN ei ddatgelu
high-risk-breach-pin-description = Gall cymryd camau cyn gynted â phosibl rhoi mwy o amddiffyniadau cyfreithiol i chi i'ch helpu i adennill unrhyw golledion.
high-risk-breach-pin-step-one = Rhowch wybod i'ch banc ar unwaith bod eich PIN wedi'i ddatgelu.
high-risk-breach-pin-step-two = Newidiwch eich PIN lle bynnag rydych wedi defnyddio'r un un.
high-risk-breach-pin-step-three = Gwiriwch eich cyfrifon am daliadau heb eich caniatâd.

# No high risk breaches found

high-risk-breach-none-title = Newyddion gwych, does dim golwg  o unrhyw doriadau data risg uchel
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Rydym yn canfod toriadau data yn seiliedig ar eich cyfeiriad e-bost, ac nid ydym wedi gweld unrhyw dor-data risg uchel ar gyfer { $email_list }.
high-risk-breach-none-sub-description-part-one = Mae achosion o dor-data risg uchel yn cynnwys:
high-risk-breach-none-sub-description-ssn = Rhif nawdd cymdeithasol
high-risk-breach-none-sub-description-bank-account = Manylion cyfrif banc
high-risk-breach-none-sub-description-cc-number = Rhifau cardiau credyd
high-risk-breach-none-sub-description-pin = PINau
high-risk-breach-none-continue = Parhau

# Security recommendations

security-recommendation-steps-label = Argymhellion diogelwch
security-recommendation-steps-title = Dyma ein cyngor:
security-recommendation-steps-cta-label = Iawn!

# Phone security recommendation

security-recommendation-phone-title = Diogelwch eich rhif ffôn
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [zero] Amlygwyd eich rhif ffôn mewn { $num_breaches } toriad data:
        [one] Amlygwyd eich rhif ffôn mewn { $num_breaches } toriad data:
        [two] Amlygwyd eich rhif ffôn mewn { $num_breaches } doriad data:
        [few] Amlygwyd eich rhif ffôn mewn { $num_breaches } thoriad data:
        [many] Amlygwyd eich rhif ffôn mewn { $num_breaches } thoriad data:
       *[other] Amlygwyd eich rhif ffôn mewn { $num_breaches } toriad data:
    }
security-recommendation-phone-description = Yn anffodus, does dim modd i chi ei gymryd yn ôl. Ond mae yna gamau y gallwch eu cymryd i sicrhau eich bod yn cadw'n ddiogel.
security-recommendation-phone-step-one = Rhwystro rhifau sbam i atal mwy o alwadau ofer
security-recommendation-phone-step-two = Peidiwch â chlicio ar ddolenni mewn testunau gan anfonwyr anhysbys; os yw'n ymddangos ei fod o ffynhonnell ddibynadwy, ffoniwch yn syth i gadarnhau

# Email security recommendation

security-recommendation-email-title = Diogelwch eich cyfeiriad e-bost
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [zero] Cafodd eich cyfeiriad e-bost ddim ei ddatgelu mewn unrhyw dor-data.
        [one] Cafodd eich cyfeiriad e-bost ei ddatgelu mewn { $num_breaches } tor-data:
        [two] Cafodd eich cyfeiriad e-bost ei ddatgelu mewn { $num_breaches } dor-data:
        [few] Cafodd eich cyfeiriad e-bost ei ddatgelu mewn { $num_breaches } tor-data:
        [many] Cafodd eich cyfeiriad e-bost ei ddatgelu mewn { $num_breaches } thor-data:
       *[other] Cafodd eich cyfeiriad e-bost ei ddatgelu mewn { $num_breaches } tor-data:
    }
security-recommendation-email-description = Yn anffodus, does dim moddi chi ei drwsio. Ond mae yna gamau y gallwch eu cymryd i sicrhau eich bod yn cadw'n ddiogel.
security-recommendation-email-step-one = Peidiwch â chlicio ar ddolenni mewn e-byst gan anfonwyr anhysbys; os yw'n ymddangos ei fod o ffynhonnell ddibynadwy, ffoniwch yn uniongyrchol i gadarnhau
security-recommendation-email-step-two = Byddwch yn ymwybodol o <link_to_info>sgamiau gwe-rwydo</link_to_info>
security-recommendation-email-step-three = Marciwch e-byst amheus fel sbam a rhwystrwch yr anfonwr
security-recommendation-email-step-four = Defnyddiwch <link_to_info>{ -brand-relay } arallenwau e-bost</link_to_info> i ddiogelu eich e-bost yn y dyfodol

# IP security recommendation

security-recommendation-ip-title = Defnyddiwch VPN i gael preifatrwydd ychwanegol
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [zero] Amlygwyd eich cyfeiriad IP mewn { $num_breaches } toriad data:
        [one] Amlygwyd eich cyfeiriad IP mewn { $num_breaches } toriad data:
        [two] Amlygwyd eich cyfeiriad IP mewn { $num_breaches } doriad data:
        [few] Amlygwyd eich cyfeiriad IP mewn { $num_breaches } thoriad data:
        [many] Amlygwyd eich cyfeiriad IP mewn { $num_breaches } thoriad data:
       *[other] Amlygwyd eich cyfeiriad IP mewn { $num_breaches } thoriad data:
    }
security-recommendation-ip-description = Mae eich cyfeiriad IP yn nodi'ch lleoliad a'ch darparwr gwasanaeth rhyngrwyd. Gall hacwyr ddefnyddio'r wybodaeth hon i ddod o hyd i'ch lleoliad neu geisio cysylltu â'ch dyfeisiau.
security-recommendation-ip-step-one = Defnyddiwch VPN (fel <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) i guddio'ch cyfeiriad IP go iawn a defnyddio'r rhyngrwyd yn breifat.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Datgelwyd eich cyfrinair gan { $breach_name }
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Ymddangosodd mewn tor-data ar { $breach_date }.
leaked-passwords-description = Gall sgamwyr gael mynediad i'ch cyfrif a byddan nhw'n debygol o geisio ei ddefnyddio ar gyfrifon eraill i weld a ydych wedi defnyddio'r un cyfrinair. Newidiwch ef unrhyw le rydych chi wedi'i ddefnyddio i ddiogelu eich hun.
leaked-passwords-steps-title = Dyma beth i'w wneud
leaked-passwords-steps-subtitle = Mae hyn yn gofyn am fynediad i'ch cyfrif, felly bydd angen i chi ei drwsio â llaw.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Newidiwch eich cyfrinair <b>{ $emails_affected }</b> ar <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Newidiwch ef unrhyw le arall rydych chi wedi'i ddefnyddio.
leaked-passwords-mark-as-fixed = Marciwch fel wedi'i drwsio
leaked-passwords-skip = Hepgor am nawr
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [zero] Popeth yn iawn - hyd yma. Gofal!
        [one] Amcan o'r amser i'w gwblhau: { $estimated_time } munud fesul gwefan
        [two] Amcan o'r amser i'w gwblhau: { $estimated_time } funud fesul gwefan
        [few] Amcan o'r amser i'w gwblhau: { $estimated_time } munud fesul gwefan
        [many] Amcan o'r amser i'w gwblhau: { $estimated_time } munud fesul gwefan
       *[other] Amcan o'r amser i'w gwblhau: { $estimated_time } munud fesul gwefan
    }

# Leaked Security Questions

leaked-security-questions-title = Datgelwyd eich cwestiynau diogelwch
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Mae nhw wedi ymddangos mewn toriad data ar { $breach_name } ar { $breach_date }.
leaked-security-questions-description = Gall sgamwyr ddefnyddio'r rhain i gael mynediad i'ch cyfrifon, ac unrhyw wefan arall lle rydych chi wedi defnyddio'r un cwestiynau diogelwch. Diweddarwch nhw nawr i ddiogelu eich cyfrifon.
leaked-security-questions-steps-title = Dyma beth i'w wneud
leaked-security-questions-steps-subtitle = Mae hyn yn gofyn am fynediad i'ch cyfrif, felly bydd angen i chi ei drwsio â llaw.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Diweddarwch eich cwestiynau diogelwch <b>{ $email_affected }</b> ar <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Diweddarwch nhw ar unrhyw wefan arall lle gwnaethoch chi ddefnyddio'r un cwestiynau diogelwch. Gwnewch yn siŵr eich bod chi'n defnyddio gwahanol gwestiynau diogelwch ar gyfer pob cyfrif.
