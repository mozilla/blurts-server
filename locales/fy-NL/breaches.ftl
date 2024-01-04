# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } – Dashboerd

breach-all-meta-title = { -brand-fx-monitor } – Alle datalekken
breach-all-meta-social-title = Alle troch { -brand-fx-monitor } detektearre datalekken
breach-all-meta-social-description = Blêdzje troch de folsleine list mei bekende datalekken ûntdutsen troch { -brand-fx-monitor }, fyn dan út oft jo ynformaasje bleatsteld is.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } – { $company } Datalek
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Binne jo troffen troch it datalek fan { $company }?
breach-detail-meta-social-description = Brûk { -brand-fx-monitor } om der efter te kommen oft jo persoanlike gegevens by dit datalek lekt binne en om te begripen wat jo dernei dwaan moatte.

breach-scan-meta-title = { -brand-fx-monitor } – Resultaten datalek
breach-scan-meta-social-title = { -brand-fx-monitor }-datalekresultaten
breach-scan-meta-social-description = Meld jo oan by { -brand-fx-monitor } om datalekken op te lossen en kontinu ynsjoch te krijen oer nije bekende datalekken.

## Breaches header

# Data classes pie chart title
breach-chart-title = Lekte gegevens

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Datalekken foar { $email-select }

# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } fan { $total } monitord e-mailadres
       *[other] { $count } fan { $total } monitorde e-mailadressen
    }

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = E-mailadressen beheare

## Breaches resolved filter

filter-label-unresolved = Net oploste datalekken
filter-label-resolved = Oploste datalekken

## Breaches table

column-company = BEDRIUW
column-breached-data = LEKTE GEGEVENS
column-detected = DETEKTEARRE

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Oplost
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktyf

breaches-resolve-heading = Dit datalek oplosse:

breaches-none-headline = Gjin datalekken fûn
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Goed nijs! Der binne gjin bekende datalekken meld foar { $email }. Wy sille dizze e-mailadres monitoare en sille jo witte litte as der nije datalekken barre.
breaches-none-cta-blurb = Wolle jo in oar e-mailadres kontrolearje?
breaches-none-cta-button = E-mailadres tafoegje

breaches-all-resolved-headline = Alle datalekken binne oplost
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Kreas! Jo hawwe alle datalekken foar { $email } oplost. Wy sille dizze e-mailadres monitoare en sille jo witte litte as der nije datalekken barre.
breaches-all-resolved-cta-blurb = Wolle jo in oar e-mailadres kontrolearje?
breaches-all-resolved-cta-button = E-mailadres tafoegje

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Op { $breachDate } is in lek bard op { $companyName }. Nei ûntdekking en ferifikaasje fan it lek, is it op { $addedDate } tafoege oan ús database. Dit lek omfette: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox }-wachtwurdbehearder
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Wurkje jo wachtwurden by en skeakelje twa-staps-autentikaasje (2FA) yn.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Yn de measte gefallen riede wy jo oan jo wachtwurd te wizigjen op de website fan it bedriuw. Mar <b>harren website kin offline wêze of skeadlike ynhâld befetsje</b>, dus wês foarsichtich as jo <breached-company-link>de website besykje</breached-company-link>. Soargje foar ekstra beskerming troch unike wachtwurden foar al jo accounts te brûken, sadat lekte wachtwurden net brûkt wurde kinne om tagong te krijen ta oare accounts. { $passwordManagerLink } kin jo helpe al jo wachtwurden feilich by te hâlden.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Beskermje jo e-mail mei in tsjinst foar it maskearjen fan e-mail, lykas { $firefoxRelayLink }.
breach-checklist-email-body = Dit kin jo echte e-mailadres ferbergje, wylst e-mailberjochten nei jo wiere Postfek YN trochstjoerd wurde.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Kontrolearje jo bankôfskrift op rekkeningen, lieningen of creditcards dy’t jo net werkenne.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Jo kinne ek oerweagje jo tegoed op { $equifaxLink }, { $experianLink } en { $transUnionLink } te befriezen, om foar te kommen dat oplichters nije accounts op jo namme iepenje. It is fergees en hat gjin ynfloed op jo kredytskoare.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Brûk it ynternet privee mei in VPN, lykas { $mozillaVpnLink }.
breach-checklist-ip-body = Jo IP-adres (Internet Protocol-adres) jout jo lokaasje en ynternetprovider oan. In VPN kin jo wiere IP-adres ferstopje, sadat jo privee ynternet brûke kinne.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Wizigje wachtwurden of pinkoaden dy’t in part fan jo adres befetsje.
breach-checklist-address-body = Adressen binne maklik te finen yn iepenbiere dossiers en kinne derfoar soargje dat dy wachtwurden en pinkoaden maklik te rieden binne.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Wizigje wachtwurden of pinkoaden dy’t jo bertedatum befetsje.
breach-checklist-dob-body = Bertedata binne maklik te finen yn iepenbiere dossiers en minsken dy’t jo bertedatum fine, kinne jo pinkoade maklik riede.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Beskermje jo telefoannûmer mei in maskearstsjinst lykas { $firefoxRelayLink }, dy’t jo wiere telefoannûmer ferberget.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Wurkje jo befeiligingsfragen by.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Yn de measte gefallen riede wy jo oan jo befeiligingsfragen te wizigjen op de website fan it bedriuw. Mar <b>harren website kin offline wêze of skeadlike ynhâld befetsje</b>, dus wês foarsichtich as jo <breached-company-link>de website besykje</breached-company-link>. Wurkje foar ekstra beskerming dizze befeiligingsfragen by foar alle wichtige accounts wêrop jo se brûkt hawwe en meitsje unike wachtwurden oan foar al jo accounts.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Meitsje unike, sterke wachtwurden foar elk account wêr’t jo wachtwurden opnij brûkt hawwe.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = In wachtwurdenbehearder lykas de { $passwordManagerLink } (dy’t fergees is en ynboud is yn de { -brand-firefox }-browser) kin jo helpe om al jo wachtwurden by te hâlden en der feilich tagong ta te krijen fan al jo apparaten ôf.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Nim kontakt op mei { $companyName } om harren te ynformearjen oer dizze ynbrek en freegje hokker spesifike stappen jo ûndernimme kinne.
