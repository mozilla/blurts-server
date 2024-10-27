# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Datenbank für Datenlecks – { -brand-fx-monitor }
breach-all-meta-social-title = Alle von { -brand-fx-monitor } erkannten Datenlecks
breach-all-meta-social-description = Durchsuchen Sie die vollständige Liste der bekannten und von { -brand-fx-monitor } erkannten Datenlecks und finden Sie heraus, ob Ihre Daten offengelegt wurden.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = { $company }-Datenleck – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Waren Sie vom Datenleck bei { $company } betroffen?
breach-detail-meta-social-description = Verwenden Sie { -brand-fx-monitor }, um herauszufinden, ob Ihre persönlichen Daten bei diesem Datenleck offengelegt wurden, und verstehen Sie, was als nächstes zu tun ist.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox }-Passwortverwaltung
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Aktualisieren Sie Ihre Passwörter und aktivieren Sie die Zwei-Faktor-Authentifizierung (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = In den meisten Fällen empfehlen wir Ihnen, Ihr Passwort über die Website des Unternehmens zu ändern. Aber <b>die Website könnte nicht erreichbar sein oder böswillige Inhalte enthalten</b>, also seien Sie vorsichtig, wenn Sie <breached-company-link>die Website besuchen</breached-company-link>. Schützen Sie sich außerdem, indem Sie für alle Konten eindeutige Passwörter verwenden, damit offengelegte Passwörter nicht für den Zugriff auf andere Konten verwendet werden können. Der { $passwordManagerLink } kann Ihnen dabei helfen, alle Ihre Passwörter sicher im Auge zu behalten.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Schützen Sie Ihre E-Mail-Adressen mit einem E-Mail-Maskierungsdienst wie { $firefoxRelayLink }.
breach-checklist-email-body = Dadurch bleibt Ihre echte E-Mail-Adresse verborgen, während E-Mails an Ihren echten Posteingang weitergeleitet werden.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Überwachen Sie Ihre Kreditkartenabrechnungen auf Konten, Darlehen oder Kreditkarten, die Sie nicht erkennen.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Sie können auch erwägen, Ihr Guthaben auf { $equifaxLink }, { $experianLink } und { $transUnionLink } einzufrieren, um Betrüger daran zu hindern, neue Konten in Ihrem Namen zu öffnen. Es ist kostenlos und hat keinen Einfluss auf Ihre Kreditwürdigkeit.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Verwenden Sie das Internet privat mit einem VPN wie { $mozillaVpnLink }.
breach-checklist-ip-body = Ihre IP-Adresse (Internetprotokolladresse) identifiziert Ihren Standort und Ihren Internetdienstanbieter. Ein VPN kann Ihre echte IP-Adresse verbergen, sodass Sie das Internet privat nutzen können.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Ändern Sie alle Passwörter oder PINs, die einen Teil Ihrer Adresse enthalten.
breach-checklist-address-body = Adressen sind in öffentlichen Aufzeichnungen leicht zu finden und dadurch können Passwörter und PINs leicht zu erraten sein.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Ändern Sie alle Passwörter oder PINs, die Ihr Geburtsdatum enthalten.
breach-checklist-dob-body = Geburtsdaten sind in öffentlichen Aufzeichnungen leicht zu finden, und Personen, die sie finden, könnten Ihre PIN leicht erraten.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Schützen Sie Ihre Telefonnummer mit einem Maskierungsdienst wie { $firefoxRelayLink }, der Ihre echte Telefonnummer verbirgt.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Aktualisieren Sie Ihre Sicherheitsfragen.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = In den meisten Fällen empfehlen wir Ihnen, Ihre Sicherheitsfragen über die Website des Unternehmens zu aktualisieren. Aber <b>die Website könnte nicht erreichbar sein oder böswillige Inhalte enthalten</b>, also seien Sie vorsichtig, wenn Sie <breached-company-link>die Website besuchen</breached-company-link>. Schützen Sie sich außerdem, indem Sie diese Sicherheitsfragen auf allen Konten aktualisieren, wo sie genutzt werden und erstellen Sie eindeutige Passwörter für alle Konten.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Erstellen Sie einzigartige, starke Passwörter für alle Konten, in denen Sie Passwörter wiederverwendet haben.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Eine Passwortverwaltung wie der { $passwordManagerLink } (der kostenlos und in den { -brand-firefox }-Browser integriert ist) kann Ihnen dabei helfen, alle Ihre Passwörter im Auge zu behalten und sicher von allen Geräten darauf zuzugreifen.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Wenden Sie sich an { $companyName }, um sie über dieses Leck zu informieren, und fragen Sie nach konkreten Maßnahmen, die Sie ergreifen können.
