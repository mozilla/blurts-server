# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Databas över dataintrång — { -brand-fx-monitor }
breach-all-meta-social-title = Alla intrång som upptäckts av { -brand-fx-monitor }
breach-all-meta-social-description = Bläddra igenom hela listan över kända intrång som upptäckts av { -brand-fx-monitor } och ta reda på om din information har avslöjats.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = { $company } dataintrång – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Blev du påverkad av dataintrång hos { $company } ?
breach-detail-meta-social-description = Använd { -brand-fx-monitor } för att ta reda på om din personliga information avslöjades i det här intrånget och förstå vad du ska göra härnäst.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } Lösenordshanterare
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Uppdatera dina lösenord och aktivera tvåfaktorsautentisering (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = I de flesta fall rekommenderar vi att du ändrar ditt lösenord på företagets webbplats. Men <b>deras webbplats kan vara nere eller innehålla skadligt innehåll</b>, så var försiktig om du <breached-company-link>besöker webbplatsen</breached-company-link>. För extra skydd, se till att du använder unika lösenord för alla konton, så att eventuella läckta lösenord inte kan användas för att komma åt andra konton. { $passwordManagerLink } kan hjälpa dig att säkert hålla reda på alla dina lösenord.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Skydda din e-post med en e-postmaskeringstjänst som { $firefoxRelayLink }.
breach-checklist-email-body = Detta kan dölja din riktiga e-postadress medan du vidarebefordrar e-postmeddelanden till din riktiga inkorg.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Övervaka din kreditupplysning för konton, lån eller kreditkort som du inte känner igen.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Du kan också överväga att frysa din kredit på { $equifaxLink }, { $experianLink } och { $transUnionLink } för att hindra bedragare från att öppna nya konton i ditt namn. Det är gratis och påverkar inte din kreditpoäng.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Rapportera intrånget till din kreditkortsutgivare och begär ett nytt kort med ett nytt nummer.
breach-checklist-cc-body = Du bör också granska dina kreditkortsutdrag för okända debiteringar.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Meddela omedelbart din bank att ditt kontonummer har blivit utsatt för intrång.
breach-checklist-bank-body = Om du gör det snabbare kan du få mer juridiskt skydd som hjälper dig att återställa eventuella förluster. Du vill också kontrollera dina konton för okända debiteringar.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Meddela din kortutgivare och ändra din PIN-kod omedelbart.
breach-checklist-pin-body = Se till att din nya PIN-kod, eller någon annan PIN-kod, inte innehåller lättgissade siffror som ditt födelsedatum eller adress.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Använd internet privat med ett VPN, till exempel { $mozillaVpnLink }.
breach-checklist-ip-body = Din IP-adress (internetprotokoll-adress) pekar ut din plats och din internetleverantör. Ett VPN kan dölja din riktiga IP-adress så att du kan använda internet privat.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Ändra alla lösenord eller PIN-koder som innehåller någon del av din adress.
breach-checklist-address-body = Adresser är lätta att hitta i offentliga register och kan göra dessa lösenord och PIN-koder lätta att gissa.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Ändra eventuella lösenord eller PIN-koder som inkluderar ditt födelsedatum.
breach-checklist-dob-body = Födelsedatum är lätta att hitta i offentliga register, och människor som hittar det kan lätt gissa din PIN-kod.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Skydda ditt telefonnummer med en maskeringstjänst som { $firefoxRelayLink }, vilket döljer ditt riktiga telefonnummer.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Uppdatera dina säkerhetsfrågor.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = I de flesta fall rekommenderar vi att du uppdaterar dina säkerhetsfrågor på företagets webbplats. Men <b>deras webbplats kan vara nere eller innehålla skadligt innehåll</b>, så var försiktig om du <breached-company-link>besöker webbplatsen</breached-company-link>. För extra skydd, uppdatera dessa säkerhetsfrågor på alla viktiga konton där du har använt dem och skapa unika lösenord för alla konton.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Skapa unika, starka lösenord för alla konton där du har återanvänt lösenord.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = En lösenordshanterare som { $passwordManagerLink } (som är gratis och inbyggd i webbläsaren { -brand-firefox }) kan hjälpa dig att hålla reda på alla dina lösenord och komma åt dem på ett säkert sätt från alla dina enheter.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Kontakta { $companyName } för att informera dem om detta intrång och be om specifika åtgärder du kan vidta.
