# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Datalekken mei heech risiko
fix-flow-nav-leaked-passwords = Lekte wachtwurden
fix-flow-nav-security-recommendations = Befeiligingsoanrekommandaasjes
guided-resolution-flow-exit = Werom nei dashboerd
guided-resolution-flow-next-arrow = Nei de folgjende stap
guided-resolution-flow-next-arrow-sub-step = Nei it folgjende resultaat
guided-resolution-flow-step-navigation-label = Stappen mei ynstruksjes

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Lit ús trochgean
fix-flow-celebration-next-recommendations-label = Oanrekommandaasjes besjen
fix-flow-celebration-next-dashboard-label = Nei jo dashboerd

## High-risk flow

fix-flow-celebration-high-risk-title = Jo hawwe jo lekken mei in heech risiko ferholpen!
fix-flow-celebration-high-risk-description-in-progress = Dit wurk dwaan kin in protte fiele, mar it is wichtich om josels feilich te hâlden. Gean foaral sa troch.
fix-flow-celebration-high-risk-description-done = Dit wurk dwaan kin in protte fiele, mar it is wichtich om josels feilich te hâlden.
fix-flow-celebration-high-risk-description-next-passwords = Litte wy no jo lekte wachtwurden oplosse.
fix-flow-celebration-high-risk-description-next-security-questions = Litte wy no jo lekte befeiligingsfragen oplosse.
fix-flow-celebration-high-risk-description-next-security-recommendations = Hjirnei jouwe wy jo personalisearre befeiligingsoanrekommandaasjes op basis fan hokker fan jo gegevens lekt binne.
fix-flow-celebration-high-risk-description-next-dashboard = Jo hawwe it ein fan jo stappen berikt. Jo kinne op jo dashboard alle aksje-items besjen en jo foarútgong folgje.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Jo wachtwurden binne no beskerme!
fix-flow-celebration-security-questions-title = Jo befeiligensfragen binne beskerme!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Litte wy no jo lekte befeiligingsfragen besjen en bywurkje.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Hjirnei jouwe wy jo personalisearre befeiligingsoanrekommandaasjes op basis fan hokker fan jo gegevens lekt binne.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Goed dien! Jo hawwe it ein fan jo stappen berikt. Jo kinne op jo dashboard alle aksje-items besjen en jo foarútgong folgje.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Jo hawwe al jo oanrekommandaasjes foltôge!
fix-flow-celebration-security-recommendations-description-next-dashboard = Goed dien! Jo hawwe it ein fan jo stappen berikt. Jo kinne op jo dashboard alle aksje-items besjen en jo foarútgong folgje.

# High Risk Data Breaches

high-risk-breach-heading = Dit is wat jo dwaan kinne
high-risk-breach-subheading = Dit fereasket tagong ta jo gefoelige ynformaasje, dus jo moatte dit hânmjittich oplosse.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] It komt foar yn { $num_breaches } datalek:
       *[other] It komt foar yn { $num_breaches } datalekken:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>op { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = As oplost markearje
high-risk-breach-skip = Foarearst oerslaan
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Jo skatte tiid: mear as { $estimated_time } minút
       *[other] Jo skatte tiid: mear as { $estimated_time } minuten
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Jo creditcardnûmer is lekt
high-risk-breach-credit-card-description = Elkenien dy’t it ûntfangt, kin net-autorisearre oankeapen dwaan wêrfoar jo mooglik oanspraaklik binne. Kom no yn aksje om finansjele skea foar te kommen.
high-risk-breach-credit-card-step-one = As jo dizze kaart noch hieltyd hawwe, nim dan kontakt op mei de útjouwer om dizze as stellen te melden.
high-risk-breach-credit-card-step-two = Freegje in nije kaart mei in nij nûmer oan.
high-risk-breach-credit-card-step-three = Kontrolearje jo rekkeningen op net-autorisearre ôfskriuwingen.

# Bank Account Breaches

high-risk-breach-bank-account-title = Jo bankrekken is lekt
high-risk-breach-bank-account-description = Sa gau mooglik aksje ûndernimme kin jo mear juridyske beskermingen jaan om jo te helpen eventuele ferliezen werom te heljen.
high-risk-breach-bank-account-step-one = Bring jo bank daliks op de hichte dat jo rekkeningnûmer hackt is.
high-risk-breach-bank-account-step-two = Wizigje jo rekkeningnûmer.
high-risk-breach-bank-account-step-three = Kontrolearje jo rekkeningen op net-autorisearre ôfskriuwingen.

# Social Security Number Breaches

high-risk-breach-social-security-title = Jo boargerservicenûmer is lekt
high-risk-breach-social-security-description = Oplichters kinne nije lieningen of kredytkaarten iepenje mei jo boargerservicenûmer. Reagearje rap om finansjele skea foar te kommen.
high-risk-breach-social-security-step-one = Beskermje josels troch <link_to_info>in fraudewarskôging yn te stellen of jo kredyt te befriezen.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Kontrolearje jo kredytrapport</link_to_info> op net-werkende rekkeningen.

# Social Security Number Modal

ssn-modal-title = Oer fraudewarskôgingen en kredytbefriezingen
ssn-modal-description-fraud-part-one = <b>In fraudewarskôging</b> fereasket dat bedriuwen jo identiteit ferifiearje eardat nij tegoed op jo namme útjaan wurdt. It is fergees, duorret ien jier en hat gjin negatyf ynfloed op jo kredytskoare.
ssn-modal-description-fraud-part-two = Nim hjirfoar kontakt op mei ien fan de trije kredytburo’s. Jo hoege net mei alle trije kontakt op te nimmen.
ssn-modal-description-freeze-credit-part-one = <b>Befriezing fan jo tegoed</b> foarkomt dat ien in nije rekkening op jo naam iepenet. It is fergees en hat gjin negative ynfloed op jo kredytskoare, mar jo moatte de befriezing opheffe eardat jo nije rekkeningen iepenje.
ssn-modal-description-freeze-credit-part-two = Nim kontakt op mei elk fan de trije kredytburo’s om jo tegoed te befriezen – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> en <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Mear ynfo oer fraudewarskôgingen en tegoedbefriezingen
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Jo pinkoade is lekt
high-risk-breach-pin-description = Sa gau mooglik aksje ûndernimme kin jo mear juridyske beskermingen jaan om jo te helpen eventuele ferliezen werom te heljen.
high-risk-breach-pin-step-one = Bring jo bank daliks op de hichte dat jo pinkoade lekt is.
high-risk-breach-pin-step-two = Wizigje jo pinkoade oeral wêr’t jo deselde brûkt hawwe.
high-risk-breach-pin-step-three = Kontrolearje jo rekkeningen op net-autorisearre ôfskriuwingen.

# No high risk breaches found

high-risk-breach-none-title = Geweldich nijs, wy gjin datalekken mei hege risiko fûn
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Wy detektearje datalekken op basis fan jo e-mailadres, en wy hawwe gjin datalekken mei heech risiko fûn foar { $email_list }.
high-risk-breach-none-sub-description-part-one = Datalekken mei in heech risiko binne ûnder oare:
high-risk-breach-none-sub-description-ssn = Boargerservicenûmer
high-risk-breach-none-sub-description-bank-account = Bankrekkeningsgegevens
high-risk-breach-none-sub-description-cc-number = Creditcardnûmers
high-risk-breach-none-sub-description-pin = Pinkoaden
high-risk-breach-none-continue = Trochgean

# Security recommendations

security-recommendation-steps-label = Befeiligingsoanrekommandaasjes
security-recommendation-steps-title = Dit is ús advys:
security-recommendation-steps-cta-label = Begrepen!

# Phone security recommendation

security-recommendation-phone-title = Beskermje jo telefoannûmer
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Jo telefoannûmer is lekt by { $num_breaches } datalek:
       *[other] Jo telefoannûmer is lekt by { $num_breaches } datalekken:
    }
security-recommendation-phone-description = Spitigernôch kinne jo it net weromnimme. Mar der binne stappen dy’t jo nimme kinne om te soargjen dat jo feilich bliuwe.
security-recommendation-phone-step-one = Blokkearje spamnûmers om mear net winske oproppen foar te kommen
security-recommendation-phone-step-two = Klik net op keppelingen yn sms’kes fan ûnbekende ôfstjoerders; as it fan in fertroude boarne liket, belje dan streekrjocht foar befêstiging

# Email security recommendation

security-recommendation-email-title = Beskermje jo e-mailadres
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Jo e-mailadres is lekt by { $num_breaches } datalek:
       *[other] Jo e-mailadres is lekt by { $num_breaches } datalekken:
    }
security-recommendation-email-description = Spitigernôch kinne jo dit net oplosse. Mar der binne stappen dy’t jo nimme kinne om te soargjen dat jo feilich bliuwe.
security-recommendation-email-step-one = Klik net op keppelingen yn e-mailberjochten fan ûnbekende ôfstjoerders; as it fan in fertroude boarne liket, belje dan streekrjocht foar befêstiging
security-recommendation-email-step-two = Pas op foar <link_to_info>phishingscams</link_to_info>
security-recommendation-email-step-three = Markearje fertochte e-mailberjochten as spam en blokkearje de ôfstjoerder
security-recommendation-email-step-four = Brûk <link_to_info>{ -brand-relay } e-mailmaskers</link_to_info> om jo e-mailadres yn de takomst te beskermjen

# IP security recommendation

security-recommendation-ip-title = Brûk in VPN foar ekstra privacy
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Jo IP-adres is lekt by { $num_breaches } datalek:
       *[other] Jo IP-adres is lekt by { $num_breaches } datalekken:
    }
security-recommendation-ip-description = Jo IP-adres bepaalt jo lokaasje en ynternetprovider. Hackers kinne dizze ynformaasje brûke om jo lokaasje te finen of te probearjen te ferbinen mei jo apparaten.
security-recommendation-ip-step-one = Brûk in VPN (lykas <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) om jo echte IP-adres te ferbergjen en it ynternet privee te brûken.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Jo wachtwurd fan { $breach_name } is lekt
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Dit ferskynde op { $breach_date } yn in datalek.
leaked-passwords-description = Oplichters kinne tagong krije ta jo account en sille wierskynlik probearje it te brûken op oare accounts om te sjen oft jo itselde wachtwurd brûkt hawwe. Wizigje it oeral wêr't jo it brûkt hawwe om josels te beskermjen.
leaked-passwords-steps-title = Dit is wat jo dwaan kinne
leaked-passwords-steps-subtitle = Dit fereasket tagong ta jo account, dus jo moatte dit hânmjittich oplosse.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Wizigje jo wachtwurd foar <b>{ $emails_affected }</b> op <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Wizigje it oeral oars wêr’t jo it brûkt hawwe.
leaked-passwords-mark-as-fixed = As oplost markearje
leaked-passwords-skip = Foarearst oerslaan
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Skatte tiid foar foltôgjen: { $estimated_time } minút per website
       *[other] Skatte tiid foar foltôgjen: { $estimated_time } minuten per website
    }

# Leaked Security Questions

leaked-security-questions-title = Jo befeiligensfragen binne lekt
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Se ferskynden yn in datalek op { $breach_name } op { $breach_date }.
leaked-security-questions-description = Oplichters kinne dizze brûke om tagong te krijen ta jo accounts, en elke oare websites wêr’t jo deselde befeiligingsfragen brûkt hawwe. Wurkje se no by om jo accounts te beskermjen.
leaked-security-questions-steps-title = Dit is wat jo dwaan kinne
leaked-security-questions-steps-subtitle = Dit fereasket tagong ta jo account, dus jo moatte dit hânmjittich oplosse.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Wurkje jo befeiligingsfragen foar <b>{ $email_affected }</b> by op <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Wurkje se by op oare websites wêr’t jo deselde befeiligingsfragen steld hawwe. Soargje derfoar dat jo foar elke account oare befeiligingsfragen brûke.
