# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Gelekte gegevens
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Datalekken voor { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } van { $total } gemonitord e-mailadres
       *[other] { $count } van { $total } gemonitorde e-mailadressen
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = E-mailadressen beheren

## Breaches resolved filter

filter-label-unresolved = Onopgeloste datalekken
filter-label-resolved = Opgeloste datalekken

## Breaches table

column-company = BEDRIJF
column-breached-data = GELEKTE GEGEVENS
column-detected = GEDETECTEERD
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Opgelost
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Actief
breaches-none-headline = Geen datalekken gevonden
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Goed nieuws! Er zijn geen bekende datalekken gemeld voor { $email }. We blijven dit e-mailadres monitoren en laten het u weten als er datalekken optreden.
breaches-none-cta-blurb = Wilt u een ander e-mailadres volgen?
breaches-none-cta-button = E-mailadres toevoegen
breaches-all-resolved-headline = Alle datalekken zijn opgelost
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Netjes! U hebt alle inbreuken voor { $email } opgelost. We monitoren dit e-mailadres en laten het u weten als er nieuwe datalekken optreden.
breaches-all-resolved-cta-blurb = Wilt u een ander e-mailadres volgen?
breaches-all-resolved-cta-button = E-mailadres toevoegen
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Op { $breachDate } is een lek opgetreden bij { $companyName }. Na ontdekking en verificatie van het lek, is het op { $addedDate } toegevoegd aan onze database. Dit lek omvatte: { $dataClasses }

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
