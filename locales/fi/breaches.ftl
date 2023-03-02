# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Vuodetut tiedot
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Osoitetta { $email-select } koskevat tietovuodot
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count }/{ $total } sähköpostiosoite valvonnassa
       *[other] { $count }/{ $total } sähköpostiosoitetta valvonnassa
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Hallitse sähköpostiosoitteita

## Breaches resolved filter

filter-label-unresolved = Selvittämättömät vuodot
filter-label-resolved = Selvitetyt vuodot

## Breaches table

column-company = YHTIÖ
column-breached-data = VUODETUT TIEDOT
column-detected = HAVAITTU
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Selvitetty
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktiivinen
breaches-none-headline = Tietovuotoja ei löytynyt
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Hyviä uutisia! Sähköpostiosoitetta { $email } ei löytynyt tunnettuista tietovuodoista. Seuraamme tätä sähköpostiosoitetta ja ilmoitamme sinulle, jos tietovuotoja havaitaan.
breaches-none-cta-blurb = Haluatko seurata myös muita sähköpostiosoitteita?
breaches-none-cta-button = Lisää sähköpostiosoite
breaches-all-resolved-headline = Kaikki tietovuodot selvitetty
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Hyvin toimittu! Olet selvittänyt kaikki sähköpostiosoitetta { $email } koskevat tietovuodot. Seuraamme tätä sähköpostia ja ilmoitamme sinulle, jos tietovuotoja havaitaan.
breaches-all-resolved-cta-blurb = Haluatko seurata myös muita sähköpostiosoitteita?
breaches-all-resolved-cta-button = Lisää sähköpostiosoite
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Yhtiön { $companyName } tiedot vuodettiin { $breachDate }. Kun tietovuoto havaittiin ja vahvistettiin, se lisättiin tietokantaamme { $addedDate }. Tämä vuoto sisältää: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Siirry osoitteeseen <a>{ $breachedCompanyUrl }</a> ja vaihda salasanasi ja ota kaksivaiheinen todennus (2FA) käyttöön.
breach-checklist-pw-body = Varmista, että salasanasi on ainutlaatuinen ja vaikea arvata. Jos sama salasana on käytössä muilla tileillä, vaihda salasana myös siellä. <a>{ -brand-firefox }in salasanahallinta</a> auttaa sinua pitämään kirjaa kaikista salasanoistasi turvallisesti.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Suojaa sähköpostisi sähköpostiosoitteen peittopalvelulla, kuten <a>{ -brand-relay }</a>.
breach-checklist-email-body = Tämä voi piilottaa todellisen sähköpostiosoitteesi samalla, kun sähköpostit lähetetään edelleen oikeaan postilaatikkoosi.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Tarkkaile luottotietojasi sellaisten tilien, lainojen tai luottokorttien varalta, joita et tunnista.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Riippuen kansalaisuudestasi ja asuinpaikastasi, voit mahdollisesti jäädyttää luototuskelpoisuutesi <a>Equifaxissa</a>, <a>Experianissa</a> tai <a>TransUnionissa</a> estääksesi huijareita avaamasta uusia tilejä nimissäsi. Se on ilmaista eikä vaikuta luottotietoihisi.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Ilmoita tästä tietovuodosta luottokorttisi myöntäjälle ja pyydä uutta korttia uudella numerolla.
breach-checklist-cc-body = Tarkista luottokorttisi tiliotteet tunnistamattomien veloitusten varalta.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Ilmoita pankillesi välittömästi, että tilinumerosi on vaarantunut.
breach-checklist-bank-body = Mitä nopeammin sen teet, sitä enemmän voit saada oikeudellista suojaa, joka auttaa sinua korvaamaan tappiot. Tarkista myös, onko tililläsi tuntemattomia veloituksia.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Ilmoita kortin myöntäjälle ja vaihda PIN-koodi välittömästi.
breach-checklist-pin-body = Varmista, että uusi PIN-koodisi tai mikään muu PIN-koodi ei sisällä helposti arvattavia numeroita, kuten syntymäaikaasi tai osoitettasi.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Käytä Internetiä yksityisesti VPN:llä, palvelulla kuten <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = IP-osoitteesi (Internet Protocol -osoite) voi kertoa tietoa sijannistasi ja Internet-palveluntarjoajastasi. VPN voi piilottaa todellisen IP-osoitteesi, jotta voit käyttää Internetiä aiempaa yksityisemmin.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Vaihda salasanat tai PIN-koodit, jotka sisältävät minkä tahansa osan osoitteestasi.
breach-checklist-address-body = Osoitetiedot on verrattain helppo löytää julkisista tiedoista, ja niiden avulla näitä tietoja sisältävät salasanat ja PIN-koodit on helppo arvata.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Vaihda kaikki salasanat tai PIN-koodit, jotka sisältävät syntymäaikasi.
breach-checklist-dob-body = Syntymäaika on verrattain helppo löytää julkisista tiedoista, ja sen löytäneet voivat helposti arvata PIN-koodisi.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Suojaa puhelinnumerosi peittopalvelulla, kuten <a>{ -brand-relay }</a>, joka piilottaa oikean puhelinnumerosi.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Päivitä turvakysymyksesi osoitteessa <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Käytä pitkiä, satunnaisia vastauksia ja säilytä ne turvallisessa paikassa. Tee tämä myös muualla, missä olet käyttänyt samoja turvakysymyksiä.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Luo ainutlaatuisia, vahvoja salasanoja kaikille tileille, joilla olet käyttänyt samaa salasanaa kuin jossain muussa palvelussa.
breach-checklist-hp-body = Salasanojen hallintapalvelu, kuten <a>{ -brand-firefox }in salasanojen hallinta</a> (joka on ilmainen ja on sisäänrakennettu { -brand-firefox }-selaimeen), auttaa sinua pitämään kirjaa kaikista salasanoistasi ja käyttämään niitä turvallisesti kaikilla laitteillasi.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Ota yhteys yritykseen { $companyName } kertoaksesi heille tästä tietovuodosta ja kysyäksesi, mitä voit tehdä.
