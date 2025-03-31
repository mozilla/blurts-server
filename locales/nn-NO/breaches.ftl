# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Database for datalekkasjar — { -brand-fx-monitor }
breach-all-meta-social-title = Alle datalekkasjar oppdaga av { -brand-fx-monitor }
breach-all-meta-social-description = Bl gjenom heile lista over kjende datalekkasjar oppdaga av { -brand-fx-monitor } og finn ut om informasjonen har vore eksponert tidlegare.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = { $company }-datalekkasje – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Vart du påverka av datalekkasjen hos { $company } ?
breach-detail-meta-social-description = Bruk { -brand-fx-monitor } for å finne ut om den personlege informasjonen din er eksponert i denne datalekkasjen, og kva du skal gjere no.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } passordhandsamar
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Oppdater passorda dine og slå på tofaktor-autentisering (2FA).

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Vern e-posten din med ei e-postmaskeringsteneste som { $firefoxRelayLink }.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Overvak kredittrapporten din for kontoar, lån eller kredittkort du ikkje kjenner igjen.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Rapporter dette brotet til kredittkortutskrivaren din og be om eit nytt kort med eit nytt nummer.
breach-checklist-cc-body = Du bør òg sjå gjennom kredittkortutskriftene dine for ukjende belastningar.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Informer banken din omgåande om at kontonummeret ditt er kompromittert.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Informér kortutskrivaren din og endre PIN-koden din med ein gong.
breach-checklist-pin-body = Sørg for at den nye PIN-koden din, eller ein annan PIN-kode, ikkje inkluderer tal som er lett å gjette, til dømes fødselsdato eller adresse.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Bruk internett privat med eit VPN, til dømes { $mozillaVpnLink }.
breach-checklist-ip-body = IP-adressa di (Internet Protocol address) viser plasseringa di og internettleverandøren din. Eit VPN kan skjule den verkelege IP-adressa di, slik at du kan bruke internett privat.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Endre alle passord eller PIN-kodar som inneheld ein del av adressa di.
breach-checklist-address-body = Det er lett å finne adresser i offentlege register - og dét gjer det lett å gjette passord og PIN-kodar, som inneheld adressa di.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Endre alle passord eller PIN-kodar som inneheld fødselsdagen din.
breach-checklist-dob-body = Fødselsdatoar er lette å finne i offentlege register, og folk som finn dei kan enkelt gjette PIN-koden din.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Vern telefonnummeret ditt med ei maskeringsteneste som { $firefoxRelayLink }, som skjuler det verkelege telefonnummeret ditt.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Oppdater sikkerheitsspørsmåla dine.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Lag unike, sterke passord for alle kontoar der du har gjenbrukt passord.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Ein passordhandsamar som { $passwordManagerLink } (som er gratis og innebygd i nettlesaren { -brand-firefox }) kan hjelpe deg med å halde styr på alle passorda dine og få sikker tilgang til dei frå alle einingane dine.

## Prompts the user for changes when there is a breach detected of other types

