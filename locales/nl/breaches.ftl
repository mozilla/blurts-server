# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Strings for the breach details checklists


## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Ga naar <a>{ $breachedCompanyUrl }</a> om uw wachtwoord te wijzigen en tweefactorauthenticatie (2FA) in te schakelen.
breach-checklist-pw-body = Zorg ervoor dat uw wachtwoord uniek en moeilijk te raden is. Als dit wachtwoord voor andere accounts wordt gebruikt, moet u het daar ook wijzigen. <a>{ -brand-firefox }-wachtwoordenbeheerder</a> kan u helpen al uw wachtwoorden veilig bij te houden.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Bescherm uw e-mail met een service voor het maskeren van e-mail, zoals <a>{ -brand-relay }</a>.
breach-checklist-email-body = Dit kan uw echte e-mailadres verbergen, terwijl e-mailberichten naar uw echte Postvak IN worden doorgestuurd.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Controleer uw bankafschrift op rekeningen, leningen of creditcards die u niet herkent.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = U kunt ook overwegen uw tegoed op <a>Equifax</a>, <a>Experian</a> en <a>TransUnion</a> te bevriezen, om te voorkomen dat oplichters nieuwe accounts op uw naam openen. Het is gratis en heeft geen invloed op uw kredietscore.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Meld dit lek bij uw creditcardmaatschappij en vraag een nieuwe kaart aan met een nieuw nummer.
breach-checklist-cc-body = Controleer ook uw creditcardafschriften op onbekende afschrijvingen.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Breng uw bank onmiddellijk op de hoogte dat uw rekeningnummer is gehackt.
breach-checklist-bank-body = Als u dit sneller doet, kunt u meer juridische bescherming krijgen om eventuele verliezen te verhalen. Controleer ook uw rekeningen op niet-herkende afschrijvingen.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Breng uw kaartverstrekker op de hoogte en wijzig uw pincode onmiddellijk.
breach-checklist-pin-body = Zorg ervoor dat uw nieuwe pincode, of een andere pincode, geen gemakkelijk te raden cijfers bevat, zoals uw geboortedatum of adres.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Gebruik het internet privé met een VPN, zoals <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Uw IP-adres (Internet Protocol-adres) geeft uw locatie en internetprovider aan. Een VPN kan uw echte IP-adres verbergen, zodat u privé internet kunt gebruiken.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Wijzig wachtwoorden of pincodes die een deel van uw adres bevatten.
breach-checklist-address-body = Adressen zijn gemakkelijk te vinden in openbare dossiers en kunnen ervoor zorgen dat die wachtwoorden en pincodes gemakkelijk te raden zijn.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Wijzig wachtwoorden of pincodes die uw geboortedatum bevatten.
breach-checklist-dob-body = Geboortedata zijn gemakkelijk te vinden in openbare dossiers en mensen die uw geboortedatum vinden, kunnen uw pincode gemakkelijk raden.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Bescherm uw telefoonnummer met een maskeerservice zoals <a>{ -brand-relay }</a>, die uw echte telefoonnummer verbergt.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Werk uw beveiligingsvragen bij op <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Gebruik lange, willekeurige antwoorden en bewaar ze op een veilige plaats. Doe dit overal waar u dezelfde beveiligingsvragen hebt gebruikt.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Creëer unieke, sterke wachtwoorden voor elke account waarvoor u wachtwoorden opnieuw hebt gebruikt.
breach-checklist-hp-body = Een wachtwoordenbeheerder zoals de <a>{ -brand-firefox }-wachtwoordenbeheerder</a> (die gratis is en is ingebouwd in de { -brand-firefox }-browser) kan u helpen al uw wachtwoorden bij te houden en er veilig toegang toe te krijgen vanaf al uw apparaten.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Neem contact op met { $companyName } om hen op de hoogte te stellen van deze inbreuk en vraag welke specifieke stappen u kunt ondernemen.
