# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Vom Leck betroffene Daten
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Datenlecks für { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } von { $total } überwachten E-Mail-Adresse
       *[other] { $count } von { $total } überwachten E-Mail-Adressen
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = E-Mail-Adressen verwalten

## Breaches resolved filter

filter-label-unresolved = Nicht behobene Datenlecks
filter-label-resolved = Behobene Datenlecks

## Breaches table

column-company = UNTERNEHMEN
column-breached-data = VOM LECK BETROFFENE DATEN
column-detected = ENTDECKT
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Gelöst
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktiv
breaches-none-headline = Keine Datenlecks gefunden
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Gute Nachrichten! Für { $email } wurden keine bekannten Datenlecks gemeldet. Wir werden diese E-Mail-Adresse weiter überwachen und Ihnen mitteilen, ob neue Datenlecks auftreten.
breaches-none-cta-blurb = Möchten Sie eine weitere E-Mail-Adresse überwachen?
breaches-none-cta-button = E-Mail-Adresse hinzufügen
breaches-all-resolved-headline = Alle Datenlecks wurden behoben
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Gut gemacht! Sie haben alle Datenlecks für { $email } behoben. Wir werden diese E-Mail weiter überwachen und Ihnen mitteilen, ob neue Datenlecks auftreten.
breaches-all-resolved-cta-blurb = Möchten Sie eine weitere E-Mail-Adresse überwachen?
breaches-all-resolved-cta-button = E-Mail-Adresse hinzufügen
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Am { $breachDate } gab es bei { $companyName } ein Datenleck. Nachdem das Datenleck entdeckt und bestätigt wurde, wurde es am { $addedDate } unserer Datenbank hinzugefügt. Von diesem Datenleck sind betroffen: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Besuchen Sie <a>{ $breachedCompanyUrl }</a>, um Ihr Passwort zu ändern und die Zwei-Faktor-Authentifizierung (2FA) zu aktivieren.
breach-checklist-pw-body = Stellen Sie sicher, dass Ihr Passwort einzigartig und schwer zu erraten ist. Wenn dieses Passwort für andere Konten verwendet wird, müssen Sie es auch dort ändern. Der <a>{ -brand-firefox } Passwort-Manager</a> kann Ihnen dabei helfen, alle Ihre Passwörter sicher im Auge zu behalten.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Schützen Sie Ihre E-Mail-Adressen mit einem E-Mail-Maskierungsdienst wie <a>{ -brand-relay }</a>.
breach-checklist-email-body = Dadurch bleibt Ihre echte E-Mail-Adresse verborgen, während E-Mails an Ihren echten Posteingang weitergeleitet werden.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Überwachen Sie Ihre Kreditkartenabrechnungen auf Konten, Darlehen oder Kreditkarten, die Sie nicht erkennen.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Sie können auch erwägen, Ihr Guthaben auf <a>Equifax</a>, <a>Experian</a> und <a>TransUnion</a> einzufrieren, um Betrüger daran zu hindern, neue Konten in Ihrem Namen zu öffnen. Es ist kostenlos und hat keinen Einfluss auf Ihre Kreditwürdigkeit.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Melden Sie dieses Leck Ihrem Kreditkartenaussteller und fordern Sie eine neue Karte mit einer neuen Nummer an.
breach-checklist-cc-body = Sie sollten auch Ihre Kreditkartenabrechnungen auf nicht erkannte Belastungen überprüfen.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Benachrichtigen Sie sofort Ihre Bank, dass Ihre Kontonummer kompromittiert wurde.
breach-checklist-bank-body = Wenn Sie dies schneller erledigen, erhalten Sie möglicherweise mehr rechtlichen Schutz um Verluste auszugleichen. Sie sollten auch Ihre Konten auf unbekannte Belastungen überprüfen.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Benachrichtigen Sie Ihren Kartenherausgeber und ändern Sie umgehend Ihre PIN.
breach-checklist-pin-body = Stellen Sie sicher, dass Ihre neue PIN oder jede andere PIN keine leicht zu erratenden Zahlen wie Ihr Geburtsdatum oder Ihre Adresse enthält.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Verwenden Sie das Internet privat mit einem VPN wie <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Ihre IP-Adresse (Internetprotokolladresse) identifiziert Ihren Standort und Ihren Internetdienstanbieter. Ein VPN kann Ihre echte IP-Adresse verbergen, sodass Sie das Internet privat nutzen können.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Ändern Sie alle Passwörter oder PINs, die einen Teil Ihrer Adresse enthalten.
breach-checklist-address-body = Adressen sind in öffentlichen Aufzeichnungen leicht zu finden und dadurch können Passwörter und PINs leicht zu erraten sein.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Ändern Sie alle Passwörter oder PINs, die Ihr Geburtsdatum enthalten.
breach-checklist-dob-body = Geburtsdaten sind in öffentlichen Aufzeichnungen leicht zu finden, und Personen, die sie finden, könnten Ihre PIN leicht erraten.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Schützen Sie Ihre Telefonnummer mit einem Maskierungsdienst wie <a>{ -brand-relay }</a>, der Ihre echte Telefonnummer verbirgt.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Aktualisieren Sie Ihre Sicherheitsfragen auf <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Verwenden Sie lange, zufällige Antworten und bewahren Sie diese an einem sicheren Ort auf. Tun Sie dies überall dort, wo Sie dieselben Sicherheitsfragen verwendet haben.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Erstellen Sie einzigartige, starke Passwörter für alle Konten, in denen Sie Passwörter wiederverwendet haben.
breach-checklist-hp-body = Ein Passwort-Manager wie der <a>{ -brand-firefox }-Passwort-Manager</a> (der kostenlos und in den { -brand-firefox }-Browser integriert ist) kann Ihnen dabei helfen, alle Ihre Passwörter im Auge zu behalten und sicher von allen Geräten darauf zuzugreifen.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Wenden Sie sich an { $companyName }, um sie über dieses Leck zu informieren, und fragen Sie nach konkreten Maßnahmen, die Sie ergreifen können.
