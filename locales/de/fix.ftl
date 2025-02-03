# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Datenlecks mit hohem Risiko
fix-flow-nav-leaked-passwords = Offengelegte Passwörter
fix-flow-nav-security-recommendations = Sicherheitsempfehlungen
guided-resolution-flow-exit = Zurück zur Übersicht
guided-resolution-flow-next-arrow = Zum nächsten Schritt gehen
guided-resolution-flow-next-arrow-sub-step = Zum nächsten Ergebnis springen
guided-resolution-flow-step-navigation-label = Schritt-für-Schritt-Anleitung

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Machen wir weiter
fix-flow-celebration-next-recommendations-label = Empfehlungen ansehen
fix-flow-celebration-next-dashboard-label = Besuchen Sie Ihre Übersicht

## High-risk flow

fix-flow-celebration-high-risk-title = Sie haben Ihre Hochrisiko-Datenlecks behoben!
fix-flow-celebration-high-risk-description-in-progress = Das hier fühlt sich vielleicht nach viel Arbeit an, aber es ist wichtig, um Sie selbst zu schützen. Weiter so.
fix-flow-celebration-high-risk-description-done = Das hier fühlt sich vielleicht nach viel Arbeit an, aber es ist wichtig, um Sie selbst zu schützen.
fix-flow-celebration-high-risk-description-next-passwords = Beheben wir jetzt Ihre offengelegten Passwörter.
fix-flow-celebration-high-risk-description-next-security-questions = Beheben wir jetzt Ihre offengelegten Sicherheitsfragen.
fix-flow-celebration-high-risk-description-next-security-recommendations = Als Nächstes geben wir Ihnen personalisierte Sicherheitsempfehlungen, basierend darauf, welche Daten von Ihnen offengelegt wurden.
fix-flow-celebration-high-risk-description-next-dashboard = Sie sind am Ende Ihrer Schritte angelangt. Sie können alle Aktionspunkte anzeigen und Ihren Fortschritt in Ihrer Übersicht verfolgen.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Ihre Passwörter sind jetzt geschützt!
fix-flow-celebration-security-questions-title = Ihre Sicherheitsfragen sind geschützt!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Lassen Sie uns jetzt Ihre offengelegten Sicherheitsfragen überprüfen und aktualisieren.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Als Nächstes geben wir Ihnen personalisierte Sicherheitsempfehlungen, basierend darauf, welche Daten von Ihnen offengelegt wurden.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Gut gemacht! Sie sind am Ende Ihrer Schritte angelangt. Sie können alle Aktionspunkte anzeigen und Ihren Fortschritt in Ihrer Übersicht verfolgen.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Sie haben alle Ihre Empfehlungen abgeschlossen!
fix-flow-celebration-security-recommendations-description-next-dashboard = Gut gemacht! Sie sind am Ende Ihrer Schritte angelangt. Sie können alle Aktionspunkte anzeigen und Ihren Fortschritt in Ihrer Übersicht verfolgen.

# High Risk Data Breaches

high-risk-breach-heading = Folgendes ist zu tun
high-risk-breach-subheading = Dies erfordert Zugriff auf Ihre sensiblen Daten, daher müssen Sie dies manuell korrigieren.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Es ist von { $num_breaches } Datenleck betroffen:
       *[other] Es ist von { $num_breaches } Datenlecks betroffen:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>am { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Als behoben markieren
high-risk-breach-skip = Vorerst überspringen
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Geschätzte Zeit: { $estimated_time }+ Minuten
       *[other] Geschätzte Zeit: { $estimated_time }+ Minuten
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Ihre Kreditkartennummer wurde offengelegt
high-risk-breach-credit-card-description = Jeder, der sie erhält, kann nicht autorisierte Einkäufe tätigen, für die Sie haftbar sind. Handeln Sie jetzt, um finanziellen Schaden abzuwenden.
high-risk-breach-credit-card-step-one = Wenn Sie diese Karte noch haben, kontaktieren Sie den Aussteller, um sie als gestohlen zu melden.
high-risk-breach-credit-card-step-two = Eine neue Karte mit einer neuen Nummer anfordern.
high-risk-breach-credit-card-step-three = Überprüfen Sie Ihre Konten auf nicht autorisierte Belastungen.

# Bank Account Breaches

high-risk-breach-bank-account-title = Ihr Bankkonto wurde offengelegt
high-risk-breach-bank-account-description = Wenn Sie so schnell wie möglich Maßnahmen ergreifen, erhalten Sie möglicherweise mehr rechtlichen Schutz, um Ihnen zu helfen, Verluste auszugleichen.
high-risk-breach-bank-account-step-one = Benachrichtigen Sie sofort Ihre Bank, dass Ihre Kontonummer kompromittiert wurde.
high-risk-breach-bank-account-step-two = Ändern Sie Ihre Kontonummer.
high-risk-breach-bank-account-step-three = Überprüfen Sie Ihre Konten auf nicht autorisierte Belastungen.

# Social Security Number Breaches

high-risk-breach-social-security-title = Ihre Sozialversicherungsnummer wurde offengelegt
high-risk-breach-social-security-description = Betrüger können mit Ihrer Sozialversicherungsnummer neue Kredite oder Kreditkarten eröffnen. Handeln Sie schnell, um finanziellen Schaden abzuwenden.
high-risk-breach-social-security-step-one = Schützen Sie sich, indem Sie <link_to_info>einen Betrugsalarm einrichten oder Ihr Guthaben einfrieren</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Überprüfen Sie Ihre Kreditkartenabrechnung</link_to_info> auf unbekannte Konten.

# Social Security Number Modal

ssn-modal-title = Über Betrugsalarme und das Einfrieren des Guthabens
ssn-modal-description-fraud-part-one = <b>Ein Betrugsalarm</b> erfordert, dass Unternehmen Ihre Identität überprüfen, bevor Ihnen ein neuer Kredit bewilligt wird. Es ist kostenlos, dauert ein Jahr und wird sich nicht negativ auf Ihre Kreditwürdigkeit auswirken.
ssn-modal-description-fraud-part-two = Wenden Sie sich an eine der drei Kreditauskunfteien, um einen solchen einzurichten. Sie müssen nicht alle drei kontaktieren.
ssn-modal-description-freeze-credit-part-one = <b>Wenn Sie Ihr Guthaben einfrieren</b>, kann niemand ein neues Konto in Ihrem Namen eröffnen. Es ist kostenlos und wird sich nicht negativ auf Ihre Kreditwürdigkeit auswirken, aber Sie müssen es entsperren, bevor Sie neue Konten öffnen.
ssn-modal-description-freeze-credit-part-two = Um Ihr Guthaben einzufrieren, wenden Sie sich an jede der drei Kreditauskunfteien – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> und <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Erfahren Sie mehr über Betrugsalarme und das Einfrieren von Guthaben
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Ihre PIN wurde offengelegt
high-risk-breach-pin-description = Wenn Sie so schnell wie möglich Maßnahmen ergreifen, erhalten Sie möglicherweise mehr rechtlichen Schutz, um Ihnen zu helfen, Verluste auszugleichen.
high-risk-breach-pin-step-one = Benachrichtigen Sie sofort Ihre Bank, dass Ihre PIN kompromittiert wurde.
high-risk-breach-pin-step-two = Ändern Sie Ihre PIN überall dort, wo Sie die gleiche PIN verwendet haben.
high-risk-breach-pin-step-three = Überprüfen Sie Ihre Konten auf nicht autorisierte Belastungen.

# No high risk breaches found

high-risk-breach-none-title = Großartige Neuigkeiten, wir haben keine hochriskanten Datenlecks gefunden
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Wir erkennen Datenlecks basierend auf Ihrer E-Mail-Adresse und wir haben keine Datenlecks mit hohem Risiko für { $email_list } gefunden.
high-risk-breach-none-sub-description-part-one = Zu Datenlecks mit hohem Risiko gehören:
high-risk-breach-none-sub-description-ssn = Sozialversicherungsnummer
high-risk-breach-none-sub-description-bank-account = Bankkontoinformationen
high-risk-breach-none-sub-description-cc-number = Kreditkartennummern
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Weiter

# Security recommendations

security-recommendation-steps-label = Sicherheitsempfehlungen
security-recommendation-steps-title = Hier ist unser Rat:
security-recommendation-steps-cta-label = OK

# Phone security recommendation

security-recommendation-phone-title = Schützen Sie Ihre Telefonnummer
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Ihre Telefonnummer wurde durch { $num_breaches } Datenleck offengelegt:
       *[other] Ihre Telefonnummer war von { $num_breaches } Datenlecks betroffen:
    }
security-recommendation-phone-description = Leider können Sie dies nicht rückgängig machen. Aber es gibt Schritte, die Sie unternehmen können, um sich zu schützen.
security-recommendation-phone-step-one = Blockieren Sie Spam-Nummern, um mehr Werbeanrufe zu verhindern
security-recommendation-phone-step-two = Klicken Sie keine Links in Texten von unbekannten Absendern an; wenn sie von einer vertrauenswürdigen Quelle zu stammen scheint, rufen Sie zur Bestätigung direkt an

# Email security recommendation

security-recommendation-email-title = Schützen Sie Ihre E-Mail-Adresse
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Ihre E-Mail-Adresse wurde in { $num_breaches } Datenleck offengelegt:
       *[other] Ihre E-Mail-Adresse wurde in { $num_breaches } Datenlecks offengelegt:
    }
security-recommendation-email-description = Leider können Sie dies nicht beheben. Aber es gibt Schritte, die Sie unternehmen können, um sich zu schützen.
security-recommendation-email-step-one = Klicken Sie keine Links in E-Mails von unbekannten Absendern an. wenn sie von vertrauenswürdiger Quelle zu sein scheint, rufen Sie zur Bestätigung direkt an
security-recommendation-email-step-two = Vorsicht vor <link_to_info>Phishing-Versuchen</link_to_info>
security-recommendation-email-step-three = Markieren Sie verdächtige E-Mails als Spam markieren und blockieren Sie den Absender
security-recommendation-email-step-four = Verwenden Sie <link_to_info>{ -brand-relay } E-Mail-Masken</link_to_info>, um Ihre E-Mail-Adressen in Zukunft zu schützen

# IP security recommendation

security-recommendation-ip-title = Verwenden Sie ein VPN für mehr Privatsphäre
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Ihre IP-Adresse wurde in { $num_breaches } Datenleck offengelegt:
       *[other] Ihre IP-Adresse wurde in { $num_breaches } Datenlecks offengelegt:
    }
security-recommendation-ip-description = Ihre IP-Adresse identifiziert Ihren Standort und Ihren Internetdienstanbieter. Hacker könnten diese Informationen verwenden, um Ihren Standort zu finden oder zu versuchen, eine Verbindung mit Ihren Geräten herzustellen.
security-recommendation-ip-step-one = Verwenden Sie ein VPN (wie <link_to_info>{ -brand-mozilla-vpn }</link_to_info>), um Ihre echte IP-Adresse zu verbergen und das Internet privat zu nutzen.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Ihr Passwort für { $breach_name } wurde offengelegt
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Sie ist am { $breach_date } von einem Datenleck betroffen.
leaked-passwords-description = Betrüger können auf Ihr Konto zugreifen und werden wahrscheinlich versuchen, es in anderen Konten zu verwenden, um zu sehen, ob Sie das gleiche Passwort verwendet haben. Ändern Sie sie überall dort, wo Sie sie zu Ihrem Schutz verwendet haben.
leaked-passwords-steps-title = Folgendes ist zu tun
leaked-passwords-steps-subtitle = Dies erfordert Zugriff auf Ihr Konto, daher müssen Sie das Problem manuell beheben.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Ändern Sie Ihr Passwort für <b>{ $emails_affected }</b> auf <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Ändern Sie es überall dort, wo Sie es verwendet haben.
leaked-passwords-mark-as-fixed = Als behoben markieren
leaked-passwords-skip = Vorerst überspringen
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Geschätzt Zeit bis zum Ausfüllen: { $estimated_time } Minute pro Website
       *[other] Geschätzt Zeit bis zum Ausfüllen: { $estimated_time } Minuten pro Website
    }

# Leaked Security Questions

leaked-security-questions-title = Ihre Sicherheitsfragen wurden offengelegt
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Sie ist am { $breach_date } auf { $breach_name } von einem Datenleck betroffen.
leaked-security-questions-description = Betrüger können diese verwenden, um auf Ihre Konten und auf jede andere Website zuzugreifen, auf der Sie die gleichen Sicherheitsfragen verwendet haben. Aktualisieren Sie sie jetzt, um Ihre Konten zu schützen.
leaked-security-questions-steps-title = Folgendes ist zu tun
leaked-security-questions-steps-subtitle = Dies erfordert Zugriff auf Ihr Konto, daher müssen Sie das Problem manuell beheben.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Aktualisieren Sie Ihre Sicherheitsfragen für <b>{ $email_affected }</b> auf <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Aktualisieren Sie diese auf jeder anderen Website, auf der Sie dieselben Sicherheitsfragen verwendet haben. Stellen Sie sicher, dass Sie für jedes Konto unterschiedliche Sicherheitsfragen verwenden.
