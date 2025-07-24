# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Database over datalekkasjer — { -brand-fx-monitor }
breach-all-meta-social-title = Alle datalekkasjer oppdaget av { -brand-fx-monitor }
breach-all-meta-social-description = Se gjennom den komplette listen over kjente datalekkasjer oppdaget av { -brand-fx-monitor }, og finn deretter ut om informasjonen din ble eksponert.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = { $company }-datalekkasje – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Ble du berørt av { $company }-datalekkasjen?
breach-detail-meta-social-description = Bruk { -brand-fx-monitor } for å finne ut om personopplysningene dine ble eksponert i denne datalekkasjen, og forstå hva du skal gjøre videre.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } Passordbehandling
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Oppdater passordene dine og aktiver tofaktorautentisering (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = I de fleste tilfeller anbefaler vi at du endrer passordet ditt på selskapets nettsted. Men <b>nettstedet deres kan være nede eller inneholde skadelig innhold</b>, så vær forsiktig hvis du <breached-company-link>besøker nettstedet</breached-company-link>. For ekstra beskyttelse, sørg for at du bruker unike passord for alle kontoer, slik at eventuelle lekkede passord ikke kan brukes til å få tilgang til andre kontoer. { $passwordManagerLink } kan hjelpe deg med å holde oversikt over alle passordene dine på en sikker måte.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Beskytt e-posten din med en e-postmaskeringstjeneste som { $firefoxRelayLink }.
breach-checklist-email-body = Dette kan skjule din virkelige e-postadresse mens du videresender e-poster til din virkelige innboks.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Overvåk kredittrapporten din for kontoer, lån eller kredittkort du ikke kjenner igjen.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Du kan også vurdere å fryse kreditten din på { $equifaxLink }, { $experianLink } og { $transUnionLink } for å hindre svindlere i å åpne nye kontoer i ditt navn. Det er gratis og vil ikke påvirke kredittscoren din.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Rapporter denne datalekkasjen til kredittkortutstederen din og be om et nytt kort med et nytt nummer.
breach-checklist-cc-body = Du bør også sjekke bankkortutskriftene dine for ukjente belastninger.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Varsle banken din umiddelbart om at kontonummeret ditt er blitt kompromittert.
breach-checklist-bank-body = Å gjøre det raskere kan gi deg mer juridisk beskyttelse som hjelper deg med å dekke eventuelle tap. Du bør også sjekke kontoene dine for eventuelle ukjente belastninger.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Varsle kortutstederen din og endre PIN-koden din umiddelbart.
breach-checklist-pin-body = Sørg for at den nye PIN-koden din, eller andre PIN-koder, ikke inneholder lett gjettede tall, som fødselsdato eller adresse.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Beskytt identiteten din på internett ved å bruke et VPN som { $mozillaVpnLink }.
breach-checklist-ip-body = IP-adressen din (Internet Protocol-adresse) angir hvor du befinner deg og hvilken internettleverandør du bruker. En VPN kan skjule den virkelige IP-adressen din, slik at du kan bruke internett privat.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Endre alle passord eller PIN-koder som inneholder deler av adressen din.
breach-checklist-address-body = Adresser er enkle å finne i offentlige registre, og kan gjøre det enkelt å gjette passord og PIN-koder.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Endre eventuelle passord eller PIN-koder som inkluderer fødselsdatoen din.
breach-checklist-dob-body = Fødselsdatoer er enkle å finne i offentlige registre, og folk som finner dem kan lett gjette PIN-koden din.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Beskytt telefonnummeret ditt med en maskeringstjeneste som { $firefoxRelayLink }, som skjuler ditt virkelige telefonnummer.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Oppdater sikkerhetsspørsmålene dine.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = I de fleste tilfeller anbefaler vi at du oppdaterer sikkerhetsspørsmålene dine på selskapets nettsted. Men <b>nettstedet deres kan være nede eller inneholde skadelig innhold</b>, så vær forsiktig hvis du <breached-company-link>besøker nettstedet</breached-company-link>. For ekstra beskyttelse, oppdater disse sikkerhetsspørsmålene på alle viktige kontoer der du har brukt dem, og opprett unike passord for alle kontoer.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Lag unike, sterke passord for alle kontoer der du har gjenbrukt passord.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = En passordbehandler som { $passwordManagerLink } (som er gratis og innebygd i nettleseren { -brand-firefox }) kan hjelpe deg med å holde oversikt over alle passordene dine og få sikker tilgang til dem fra alle enhetene dine.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Kontakt { $companyName } for å informere dem om denne datalekkasjen og be om konkrete tiltak du kan iverksette.
