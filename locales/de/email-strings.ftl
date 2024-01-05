# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Bericht zu { -product-name }
report-date = Datum des Berichts:
email-address = E-Mail-Adresse:

# A link to legal information about mozilla products.
legal = Rechtliches

# Unsubscribe link in email.
email-unsub-link = Abonnement entfernen

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Du erhältst diese E-Mail, weil du Warnungen von { -product-name } abonniert hast.
    Möchtest du diese E-Mails nicht mehr erhalten? { $unsubLink }. Dies ist eine automatisierte E-Mail. Wenn du Hilfe brauchst, gehe zu { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Du erhältst diese E-Mail, weil du Warnungen von { -product-name } abonniert hast.
    Dies ist eine automatisierte E-Mail. Wenn du Hilfe brauchst, gehe zu { $faqLink }.

# Button text
verify-email-cta = E-Mail-Adresse bestätigen

# Button text
see-all-breaches = Alle Datenlecks anzeigen

# Headline of verification email
email-link-expires = Dieser Link läuft in 24 Stunden ab
email-verify-blurb = Bestätige deine E-Mail-Adresse, um sie zu { -product-name } hinzuzufügen, und Warnungen zu Datenlecks zu abonnieren.

# Email headline
email-found-breaches-hl = Hier findest du eine Übersicht über vergangene Datenlecks

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Datenleck-Zusammenfassung für { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } ist in 0 bekannten Datenlecks aufgetaucht

# Email headline
email-alert-hl = { $userEmail } ist in einem neuen Datenleck aufgetaucht

##

# Subject line of email
email-subject-found-breaches = { -product-name } hat Ihre Daten in den folgenden Datenlecks gefunden

# Subject line of email
email-subject-no-breaches = { -product-name } hat keine bekannten Datenlecks gefunden

# Subject line of email
email-subject-verify = Bestätige deine E-Mail-Adresse für { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Weitere Informationen zu { $fxmLink }

email-sensitive-disclaimer =
    Aufgrund des vertraulichen Charakters dieses Datenlecks werden die betroffenen E-Mail-Adressen nicht öffentlich angezeigt.
    Du erhältst diese Benachrichtigung, weil du der bestätigte Eigentümer dieser E-Mail-Adresse bist.

fxm-warns-you-no-breaches =
     { -product-name } warnt dich vor Datenlecks, die deine persönlichen Daten betreffen.
    Bisher wurden keine Datenlecks festgestellt. Wir senden dir eine Benachrichtigung, wenn deine E-Mail-Adresse in einem neuen Datenleck auftaucht.

fxm-warns-you-found-breaches =
    { -product-name } warnt dich vor Datenlecks, die deine persönlichen Daten betreffen.
    Du hast auch Warnungen für den Fall abonniert, dass deine E-Mail-Adresse in einem neuen Datenleck auftaucht.

email-breach-alert-blurb =
    { -product-name } warnt dich vor Datenlecks, die deine persönlichen Daten betreffen.
    Wir haben soeben Informationen über ein Datenleck bei einem anderen Unternehmen erhalten.

# Section headline
monitor-another-email = Sollen noch weitere E-Mail-Adressen überwacht werden?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Sie erhalten diese automatische E-Mail als Abonnent von { -product-name }. <br>Sie können Ihre E-Mail-Einstellungen jederzeit <a { $unsubscribe-link-attr }>hier</a> ändern.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Die Informationen zu Datenlecks wurden bereitgestellt von <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Sie haben noch nicht behobene Datenlecks
email-unresolved-subhead = Ihre E-Mail-Adresse wurde offengelegt. <br>Beheben Sie das Problem sofort mit { -product-name }.
email-is-affected = Ihre E-Mail-Adresse { $email-address } ist von mindestens einem Datenleck betroffen
email-more-detail = Melden Sie sich jetzt bei { -product-name } an, um weitere Details über Ihre Datenlecks zu erfahren (auch wann diese aufgetreten sind und welche Daten offen gelegt wurden) und zu erfahren, was Sie tun sollten, wenn Ihre E-Mail-Adresse von einem Datenleck betroffen ist.
email-breach-status = Aktueller Datenleck-Status
# table row 1 label
email-monitored = Überwachte E-Mail-Adressen insgesamt:
# table row 2 label
email-breach-total = Gesamtzahl der Datenlecks:
# table row 3 label
email-resolved = Behobene Datenlecks:
# table row 4 label
email-unresolved = Nicht behobene Datenlecks:
email-resolve-cta = Datenlecks beheben

## Verification email

email-verify-heading = Schützen Sie Ihre Daten ab sofort
email-verify-subhead = Bestätigen Sie Ihre E-Mail-Adresse, um Ihre Daten nach einem Leck zu schützen.
email-verify-simply-click = Klicken Sie einfach auf den folgenden Link, um die Verifizierung Ihres Kontos abzuschließen.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Hier ist die Zusammenfassung Ihrer Datenlecks
email-breach-detected = Suchergebnisse für Ihr Konto { $email-address } haben gezeigt, dass Ihre E-Mail-Adresse möglicherweise offengelegt wurde. Wir empfehlen Ihnen, jetzt zu handeln, um dieses Datenleck zu beheben.
email-no-breach-detected = Großartige Neuigkeiten! Wir haben keine Datenlecks gefunden, die Ihre E-Mail-Adresse { $email-address } betreffen.
email-dashboard-cta = Zur Übersicht

## Breach alert

email-may-have-been-exposed = Ihre E-Mail-Adresse wurde möglicherweise durch ein Datenleck offengelegt
email-spotted-new-breach = Wir haben ein neues Datenleck entdeckt
