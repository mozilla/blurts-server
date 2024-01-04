# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Oversigt

breach-all-meta-title = { -brand-fx-monitor } - Alle datalæk
breach-all-meta-social-title = Alle datalæk opdaget af { -brand-fx-monitor }
breach-all-meta-social-description = Gennemse den komplette liste over kendte datalæk opdaget af { -brand-fx-monitor }, og find derefter ud af, om dine oplysninger blev eksponeret.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - Datalæk hos { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Blev du berørt af datalækken fra { $company }?
breach-detail-meta-social-description = Brug { -brand-fx-monitor } til at finde ud af, om dine personlige oplysninger blev eksponeret i denne datalæk - og hvad du skal gøre nu.

breach-scan-meta-title = { -brand-fx-monitor } - Læk-resultater
breach-scan-meta-social-title = { -brand-fx-monitor } - Læk-resultater
breach-scan-meta-social-description = Log ind på { -brand-fx-monitor } for at løse datalæk og få løbende overvågning for nye kendte datalæk.

## Breaches header

# Data classes pie chart title
breach-chart-title = Lækket data

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Datalæk for { $email-select }

# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } af { $total } mailadresse overvåget
       *[other] { $count } af { $total } mailadresser overvåget
    }

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Håndter mailadresser

## Breaches resolved filter

filter-label-unresolved = Uløste datalæk
filter-label-resolved = Løste datalæk

## Breaches table

column-company = VIRKSOMHED
column-breached-data = KOMPROMITTEREDE DATA
column-detected = OPDAGET

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Løst
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktiv

breaches-resolve-heading = Løs denne datalæk:

breaches-none-headline = Ingen datalæk fundet
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Gode nyheder! { $email } har ikke været ramt af nogen kendte datalæk. Vi fortsætter med at overvåge mailadressen og giver dig besked, hvis der opstår nye datalæk.
breaches-none-cta-blurb = Vil du overvåge endnu en mailadresse?
breaches-none-cta-button = Tilføj mailadresse

breaches-all-resolved-headline = Alle datalæk løst
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Godt gået! Du har løst alle datalæk for { $email }. Vi fortsætter med at overvåge mailadressen og giver dig besked, hvis der opstår nye datalæk.
breaches-all-resolved-cta-blurb = Vil du overvåge en mailadresse til?
breaches-all-resolved-cta-button = Tilføj mailadresse

# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Den { $breachDate } blev { $companyName } udsat for en datalæk. Da datalækken blev opdaget og bekræftet, blev den føjet til vores database den { $addedDate }. Denne datalæk omfattede: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } Adgangskodehåndtering
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Opdater dine adgangskoder og aktiver tofaktor-godkendelse (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = I de fleste tilfælde vil vi anbefale, at du ændrer din adgangskode på virksomhedens websted. Men <b>deres websted kan være nede eller indeholde skadeligt indhold</b>, så vær forsigtig, hvis du <breached-company-link>besøger webstedet</breached-company-link>. For ekstra beskyttelse skal du sørge for, at du bruger unikke adgangskoder til alle konti, så eventuelle lækkede adgangskoder ikke kan bruges til at få adgang til andre konti. { $passwordManagerLink } kan hjælpe dig med sikkert at holde styr på alle dine adgangskoder.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Beskyt din mailadresse med en tjeneste til maskering af mails som fx { $firefoxRelayLink }.
breach-checklist-email-body = På denne måde bliver din rigtige mailadresse holdt skjult, mens mails sendes videre til din indbakke.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Hold øje med, om dine kreditrapporter indeholder konti, lån eller kreditkort, du ikke genkender.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Du kan også overveje, at indefryse din kredit på { $equifaxLink }, { $experianLink } og { $transUnionLink } for at forhindre svindlere i at åbne nye konti i dit navn. Det er gratis og påvirker ikke dine kreditværdighed.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Beskyt din identitet på internettet ved at bruge en VPN som fx { $mozillaVpnLink }.
breach-checklist-ip-body = Din IP-adresse (internetprotokol-adresse) identificerer din placering og din internetudbyder. En VPN kan skjule din rigtige IP-adresse, så du kan bruge internettet uden at afsløre din identitet.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Skift alle adgangskoder eller PIN-koder, der indeholder en del af din adresse.
breach-checklist-address-body = Det er nemt at finde adresser i offentlige registre - og dét gør det nemt at gætte adgangskoder og PIN-koder, der indeholder din adresse.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Skift alle adgangskoder eller PIN-koder, der indeholder din fødselsdato.
breach-checklist-dob-body = Det er nemt at finde fødselsdatoer i offentlige registre - og det er nemt for folk at gætte din PIN-kode, hvis de finder din fødselsdato.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Beskyt dit telefonnummer med en maskerings-tjeneste som{ $firefoxRelayLink }, der skjuler dit rigtige telefonnummer.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Opdater dine sikkerhedsspørgsmål.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = I de fleste tilfælde vil vi anbefale, at du opdaterer dine sikkerhedsspørgsmål på virksomhedens websted. Men <b>deres websted kan være nede eller indeholde skadeligt indhold</b>, så vær forsigtig, hvis du <breached-company-link>besøger webstedet</breached-company-link>. For ekstra beskyttelse skal du sørge for, at du opdaterer disse sikkerhedsspørgsmål på alle vigtige konti, hvor du har brugt dem, og oprette unikke adgangskoder til alle konti.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Opret unikke og stærke adgangskoder for alle konti, hvor du har genbrugt adgangskoder.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Programmer til at håndtere adgangskoder som fx { $passwordManagerLink } (der er gratis og indbygget i browseren { -brand-firefox }) kan hjælpe dig med at holde styr på alle dine adgangskoder, så du har sikker adgang til dem på alle dine enheder.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Kontakt { $companyName } for at informere dem om denne datalæk og bede om specifikke skridt, du kan tage.
