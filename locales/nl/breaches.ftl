# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } – Dashboard

breach-all-meta-title = { -brand-fx-monitor } – Alle datalekken
breach-all-meta-social-title = Alle door { -brand-fx-monitor } gedetecteerde datalekken
breach-all-meta-social-description = Blader door de volledige lijst met bekende datalekken die zijn gedetecteerd door { -brand-fx-monitor } en zoek vervolgens uit of uw informatie is gelekt.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } – { $company } Datalek
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Bent u getroffen door het datalek van { $company }?
breach-detail-meta-social-description = Gebruik { -brand-fx-monitor } om erachter te komen of uw persoonlijke gegevens bij dit datalek zijn gelekt en om te begrijpen wat u vervolgens moet doen.

breach-scan-meta-title = { -brand-fx-monitor } – Resultaten datalek
breach-scan-meta-social-title = { -brand-fx-monitor }-datalekresultaten
breach-scan-meta-social-description = Meld u aan bij { -brand-fx-monitor } om datalekken op te lossen en continu inzicht te krijgen over nieuwe bekende datalekken.

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

breaches-resolve-heading = Dit datalek oplossen:

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
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Op { $breachDate } is een lek opgetreden bij { $companyName }. Na ontdekking en verificatie van het lek, is het op { $addedDate } toegevoegd aan onze database. Dit lek omvatte: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox }-wachtwoordenbeheerder
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Werk uw wachtwoorden bij en schakel tweefactorauthenticatie (2FA) in.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = In de meeste gevallen raden we u aan uw wachtwoord te wijzigen op de website van het bedrijf. Maar <b>hun website kan offline zijn of schadelijke inhoud bevatten</b>, dus wees voorzichtig als u <breached-company-link>de website bezoekt</breached-company-link>. Zorg voor extra bescherming door unieke wachtwoorden voor al uw accounts te gebruiken, zodat gelekte wachtwoorden niet kunnen worden gebruikt om toegang te krijgen tot andere accounts. { $passwordManagerLink } kan u helpen al uw wachtwoorden veilig bij te houden.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Bescherm uw e-mail met een service voor het maskeren van e-mail, zoals { $firefoxRelayLink }.
breach-checklist-email-body = Dit kan uw echte e-mailadres verbergen, terwijl e-mailberichten naar uw echte Postvak IN worden doorgestuurd.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Controleer uw bankafschrift op rekeningen, leningen of creditcards die u niet herkent.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = U kunt ook overwegen uw tegoed op { $equifaxLink }, { $experianLink } en { $transUnionLink } te bevriezen, om te voorkomen dat oplichters nieuwe accounts op uw naam openen. Het is gratis en heeft geen invloed op uw kredietscore.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Gebruik het internet privé met een VPN, zoals { $mozillaVpnLink }.
breach-checklist-ip-body = Uw IP-adres (Internet Protocol-adres) geeft uw locatie en internetprovider aan. Een VPN kan uw echte IP-adres verbergen, zodat u privé internet kunt gebruiken.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Wijzig wachtwoorden of pincodes die een deel van uw adres bevatten.
breach-checklist-address-body = Adressen zijn gemakkelijk te vinden in openbare dossiers en kunnen ervoor zorgen dat die wachtwoorden en pincodes gemakkelijk te raden zijn.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Wijzig wachtwoorden of pincodes die uw geboortedatum bevatten.
breach-checklist-dob-body = Geboortedata zijn gemakkelijk te vinden in openbare dossiers en mensen die uw geboortedatum vinden, kunnen uw pincode gemakkelijk raden.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Bescherm uw telefoonnummer met een maskeerservice zoals { $firefoxRelayLink }, die uw echte telefoonnummer verbergt.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Werk uw beveiligingsvragen bij.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = In de meeste gevallen raden we u aan uw beveiligingsvragen bij te werken op de website van het bedrijf. Maar <b>hun website kan offline zijn of schadelijke inhoud bevatten</b>, dus wees voorzichtig als u <breached-company-link>de website bezoekt</breached-company-link>. Werk voor extra bescherming deze beveiligingsvragen bij voor alle belangrijke accounts waarop u ze hebt gebruikt en maak unieke wachtwoorden aan voor al uw accounts.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Creëer unieke, sterke wachtwoorden voor elke account waarvoor u wachtwoorden opnieuw hebt gebruikt.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Een wachtwoordenbeheerder zoals de { $passwordManagerLink } (die gratis is en is ingebouwd in de { -brand-firefox }-browser) kan u helpen al uw wachtwoorden bij te houden en er veilig toegang toe te krijgen vanaf al uw apparaten.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Neem contact op met { $companyName } om hen op de hoogte te stellen van deze inbreuk en vraag welke specifieke stappen u kunt ondernemen.
