# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Datalæk for { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } af { $total } mailadresse overvåget
       *[other] { $count } af { $total } mailadresser overvåget
    }
add-email-link = Tilføj mailadresse

## Breaches resolved filter

filter-label-unresolved = Uløste datalæk
filter-label-resolved = Løste datalæk

## Breaches table

column-company = VIRKSOMHED
column-breached-data = KOMPROMITTEREDE DATA
column-detected = OPDAGET
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Den { $breachDate } blev { $companyName } udsat for en datalæk. Da datalækken blev opdaget og bekræftet, blev den føjet til vores database den { $addedDate }. Denne datalæk omfattede: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Besøg <a>{ $breachedCompanyUrl }</a> for at ændre din adgangskode og slå tofaktor-godkendelse til.
breach-checklist-pw-body = Sørg for, at din adgangskode er unik og svær at gætte. Hvis adgangskoden bruges til andre konti, så skal du sørge for at ændre den dér også. <a>Adgangskode-håndtering i { -brand-firefox }</a> kan hjælpe dig med at holde styr på alle dine adgangskoder på en sikker måde.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Beskyt din mailadresse med en tjeneste til maskering af mails som fx <a>{ -brand-relay }</a>.
breach-checklist-email-body = På denne måde bliver din rigtige mailadresse holdt skjult, mens mails sendes videre til din indbakke.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Hold øje med, om dine kreditrapporter indeholder konti, lån eller kreditkort, du ikke genkender.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Du kan også overveje, at indefryse din kredit på <a>Equifax</a>, <a>Experian</a> og <a>TransUnion</a> for at forhindre svindlere i at åbne nye konti i dit navn. Det er gratis og påvirker ikke dine kreditværdighed.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Anmeld denne datalæk til udstederen af dit betalingskort og bed om et nyt kort med et nyt nummer.
breach-checklist-cc-body = Du bør også gennemgå dine kontoudtog for debiteringer, du ikke genkender.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Giv straks din bank besked om, at dit kontonummer er blevet kompromitteret.
breach-checklist-bank-body = Jo hurtigere du gør det, jo bedre kan du være beskyttet i forhold til at få dækket eventuelle tab. Du bør også undersøge din konto for transaktioner, du ikke kan genkende.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Giv udstederen af dit betalingskort besked, og skift din PIN-kode med det samme.
breach-checklist-pin-body = Sørg for, at din nye pin-kode (og dine pin-koder i det hele taget) ikke indeholder tal, der er nemme at gætte - som fx din fødselsdato eller dit postnummer.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Beskyt din identitet på internettet ved at bruge en VPN som fx <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Din IP-adresse (internetprotokol-adresse) identificerer din placering og din internetudbyder. En VPN kan skjule din rigtige IP-adresse, så du kan bruge internettet uden at afsløre din identitet.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Skift alle adgangskoder eller PIN-koder, der indeholder en del af din adresse.
breach-checklist-address-body = Det er nemt at finde adresser i offentlige registre - og dét gør det nemt at gætte adgangskoder og PIN-koder, der indeholder din adresse.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Skift alle adgangskoder eller PIN-koder, der indeholder din fødselsdato.
breach-checklist-dob-body = Det er nemt at finde fødselsdatoer i offentlige registre - og det er nemt for folk at gætte din PIN-kode, hvis de finder din fødselsdato.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Beskyt dit telefonnummer med en maskerings-tjeneste som <a>{ -brand-relay }</a>, der skjuler dit rigtige telefonnummer.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Opdater dine sikkerheds-spørgsmål på <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Brug lange, vilkårlige svar - og gem dem et sikkert sted. Gør dette overalt, hvor du har brugt de samme sikkerhedsspørgsmål.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Opret unikke og stærke adgangskoder for alle konti, hvor du har genbrugt adgangskoder.
breach-checklist-hp-body = Programmer til at håndtere adgangskoder, som fx <a>adgangskodehåndteringen i { -brand-firefox }</a> (som er gratis og indbygget i browseren { -brand-firefox }), kan hjælpe dig med at holde styr på alle dine adgangskoder, så du har sikker adgang til dem på alle dine enheder.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Kontakt { $companyName } for at informere dem om denne datalæk og bede om specifikke skridt, du kan tage.
