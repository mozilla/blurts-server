# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Databáze úniků dat - { -brand-fx-monitor }
breach-all-meta-social-title = Všechny úniky dat detekované { -brand-fx-monitor(case: "ins") }
breach-all-meta-social-description = Podívejte se na úplný seznam známých úniků údajů zjištěných službou { -brand-fx-monitor }. Následně zjistěte, zda nebyly vaše údaje odhaleny.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = Únik dat z { $company } – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Dotýká se vás únik údajů společnosti { $company }?
breach-detail-meta-social-description = Pomocí služby { -brand-fx-monitor } zjistíte, zda byly při tomto úniku odhaleny vaše osobní údaje a dozvíte se, co máte dělat dále.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Správce hesel { -brand-firefox(case: "gen") }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Aktualizujte svá hesla a povolte dvoufázové ověření (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Ve většině případů doporučujeme změnit heslo na webových stránkách společnosti. Ale <b>jejich webové stránky mohou být nefunkční nebo mohou obsahovat škodlivý obsah</b>, takže pokud <breached-company-link>navštívíte stránky</breached-company-link>, buďte opatrní. Pro větší ochranu se ujistěte, že používáte jedinečná hesla pro všechny účty, aby žádná uniklá hesla nemohla být použita k přístupu k jiným účtům. { $passwordManagerLink } vám může pomoci bezpečně sledovat všechna vaše hesla.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Chraňte svůj e-mail pomocí služby maskování e-mailu jako je { $firefoxRelayLink }.
breach-checklist-email-body = Tímto můžete skrýt svou skutečnou e-mailovou adresu a zároveň stále dostávat e-maily do své reálné e-mailové schránky.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Sledujte podezřelé položky a pohyby na svých účtech v bance nebo na platební kartách.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Můžete také zvážit zmrazení svého kreditu u společností { $equifaxLink }, { $experianLink } a { $transUnionLink }, abyste zabránili podvodníkům v otevírání nových účtů na vaše jméno. Je to zdarma a neovlivní to vaše kreditní skóre.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Nahlaste tento únik vydavateli své platební karty a požádejte o novou kartu s novým číslem.
breach-checklist-cc-body = Měli byste též zkontrolovat výpisy ze své platební karty, zda neobsahují neznámé platby.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Okamžitě informujte svou banku, že číslo vašeho účtu bylo prozrazeno.
breach-checklist-bank-body = Pokud tak učiníte rychleji, můžete získat více právní ochrany, která vám pomůže získat zpět jakékoli ztráty. Zkontrolujte také, zda vaše účty neobsahují nerozpoznané platby.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Upozorněte vydavatele své karty a okamžitě si změňte PIN.
breach-checklist-pin-body = Ujistěte se, že váš nový PIN nebo jakýkoli jiný PIN neobsahuje snadno uhodnutelná čísla, jako je vaše datum narození nebo adresa.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Používejte internet soukromě pomocí sítě VPN, jako je třeba { $mozillaVpnLink }.
breach-checklist-ip-body = Vaše IP adresa (adresa internetového protokolu) přesně určuje vaši polohu a poskytovatele internetových služeb. VPN může skrýt vaši skutečnou IP adresu, abyste mohli používat internet soukromě.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Změňte všechna hesla nebo kódy PIN, které obsahují jakoukoli část vaší adresy.
breach-checklist-address-body = Adresy lze snadno najít ve veřejných záznamech a díky nim lze tato hesla a PINy snadno uhodnout.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Změňte všechna hesla nebo kódy PIN, které obsahují vaše datum narození.
breach-checklist-dob-body = Data narození lze snadno najít ve veřejných záznamech a lidé, kteří je najdou, mohou snadno uhodnout váš PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Chraňte své telefonní číslo pomocí maskovací služby jako { $firefoxRelayLink }, která skryje vaše skutečné telefonní číslo.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Aktualizujte své bezpečnostní otázky.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Ve většině případů doporučujeme aktualizovat bezpečnostní otázky na webu společnosti. Ale <b>jejich webové stránky mohou být nefunkční nebo mohou obsahovat škodlivý obsah</b>, takže pokud <breached-company-link>navštívíte stránky</breached-company-link>, buďte opatrní. Pro větší ochranu aktualizujte tyto bezpečnostní otázky u všech důležitých účtů, kde jste je používali, a pro všechny účty vytvořte jedinečná hesla.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Vytvořte jedinečná, silná hesla pro jakýkoli účet, kde jste hesla znovu použili.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Správce hesel jako { $passwordManagerLink } (který je zdarma a vestavěný do prohlížeče { -brand-firefox }) vám může pomoci sledovat všechna vaše hesla a mít k nim bezpečný přístup ze všech vašich zařízení.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Obraťte se na společnost { $companyName }, informujte je o tomto úniku a požádejte je o konkrétní kroky, které můžete podniknout.
