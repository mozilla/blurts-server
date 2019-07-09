# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Klicke innerhalb von 24 Stunden auf die Schaltfläche „Meine E-Mail-Adresse bestätigen“, um dein Firefox-Monitor-Konto zu bestätigen. Dein Bericht wird dann an dich gesendet.
verify-my-email = Meine E-Mail-Adresse bestätigen
report-scan-another-email = Eine weitere E-Mail-Adresse in { -product-name } scannen
automated-message = Dies ist eine automatisierte E-Mail; solltest du diese fälschlicherweise erhalten haben, musst du nichts tun.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Wir haben diese Nachricht an { $userEmail } gesendet, weil die E-Mail-Adresse Warnungen von { -product-name } aktiviert hat.
unsubscribe-email-link = Wenn du keine Warnungen von { -product-name } mehr erhalten möchtest, melde dich einfach ab.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Bericht zu { -product-name }
report-date = Datum des Berichts:
email-address = E-Mail-Adresse:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Nächste Schritte
report-headline =
    { $breachCount ->
        [0] So weit, so gut.
        [one] Dein Konto ist von { $breachCount } Datenleck betroffen.
       *[other] Dein Konto ist von { $breachCount } Datenlecks betroffen.
    }
report-subhead-no-breaches =
    Dein Konto erscheint nicht in unserem vollständigen Bericht über Datenlecks.
    Das sind gute Nachrichten, aber du kannst noch mehr tun.
    Datenschutzverletzungen passieren jederzeit. Lies weiter, um zu erfahren, wie du deine Passwörter schützen kannst.
report-subhead-found-breaches = Hier ist dein vollständiger Bericht von Firefox Monitor, der alle bekannten Datenlecks enthält, in dem diese E-Mail-Adresse vorkommt.
report-pwt-blurb =
    Passwörter sind so wertvoll, dass Tausende von ihnen jeden Tag gestohlen und auf dem Schwarzmarkt gehandelt oder verkauft werden.
    Stärkere Passwörter schützen deine Konten und alle persönlichen Informationen, die sich darin befinden.
report-pwt-headline-1 = Verwende für jedes Konto ein anderes Passwort
report-pwt-summary-1 =
    Dasselbe Passwort überall zu verwenden, öffnet Hackern Tür und Tor.
    Hacker können dieses Passwort verwenden, um sich auch bei deinen anderen Konten anzumelden.
report-pwt-headline-2 = Erstelle starke, einzigartige Passwörter
report-pwt-summary-2 =
    Hacker verwenden Listen gewöhnlicher Passwörter, um zu versuchen, auch deine zu erraten.
    Je länger und zufälliger dein Passwort ist, desto schwieriger lässt es sich stehlen.
report-pwt-headline-3 = Behandele Sicherheitsfragen wie zusätzliche Passwörter
report-pwt-summary-3 = Websites überprüfen nicht den Wahrheitsgehalt deiner Antworten, sondern nur, ob sie immer gleich sind. Erstelle lange, beliebige Antworten und speichere sie an einem sicheren Ort ab.
report-pwt-headline-4 = Verwende einen Passwort-Manager
report-pwt-summary-4 =
    Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden speichern deine Passwörter und tragen sie auf Websites für dich ein.
    Sie helfen dir sogar dabei, sichere Passwörter zu erstellen.
# A link to legal information about mozilla products.
legal = Rechtliches
# Share Firefox Monitor by email subject line
share-by-email-subject = Überprüfe, ob du von einem Datenleck betroffen bist.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hallo,
    { -brand-name } bietet einen kostenlosen Dienst, um zu testen, ob du von einem Datenleck betroffen bist. So funktioniert es:
    1. Geh auf { "https://monitor.firefox.com" } und suche nach deiner E-Mail-Adresse.
    2. Überprüfe, ob deine Online-Konten bei einem Datenleck geknackt wurden.
    3. Hol dir Tipps von { -product-name } für die nächsten Schritte.
# Unsubscribe link in email.
email-unsub-link = Abonnement entfernen
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Sie erhalten diese E-Mail, weil Sie Warnungen zu { -product-name } abonniert haben.
    Möchten Sie diese E-Mails nicht mehr erhalten? { $unsubLink }. Dies ist eine automatisierte E-Mail. Besuchen Sie { $faqLink }, um Hilfe zu erhalten.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Sie erhalten diese E-Mail, weil Sie Warnungen zu { -product-name } abonniert haben.
    Dies ist eine automatisierte E-Mail. Besuchen Sie { $faqLink }, um Hilfe zu erhalten.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Meine Übersicht anzeigen
# Button text
verify-email-cta = E-Mail-Adresse bestätigen
# Headline of verification email
email-link-expires = Dieser Link läuft in 24 Stunden ab
email-verify-blurb = Bestätigen Sie Ihre E-Mail-Adresse, um sie zu { -product-name } hinzuzufügen, und Warnungen über Datenlecks zu abonnieren.
# Email headline
email-found-breaches-hl = Hier finden Sie eine Übersicht über vergangene Datenlecks
# Email headline
email-breach-summary-for-email = Datenleck-Zusammenfassung für { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } ist in 0 bekannten Datenlecks aufgetaucht
# Email headline
email-alert-hl = { $userEmail } ist in einem neuen Datenleck aufgetaucht
# Subject line of email
email-subject-found-breaches = { -product-name } hat Ihre Daten in den folgenden Datenlecks gefunden
# Subject line of email
email-subject-no-breaches = { -product-name } hat keine bekannten Datenlecks gefunden
# Subject line of email
email-subject-verify = Bestätigen Sie Ihre E-Mail-Adresse für { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Weitere Informationen zu { $fxmLink }
email-sensitive-disclaimer =
    Aufgrund des vertraulichen Charakters dieses Datenlecks werden die E-Mail-Adressen nicht öffentlich angezeigt.
    Sie erhalten diese Benachrichtigung, weil Sie der bestätigte Eigentümer dieser E-Mail-Adresse sind.
fxm-warns-you-no-breaches =
     { -product-name } warnt Sie vor Datenlecks, die Ihre persönlichen Daten betreffen.
    Bisher wurden keine Datenlecks festgestellt. Wir senden Ihnen eine Benachrichtigung, wenn Ihre E-Mail-Adresse in einem neuen Datenleck auftaucht.
fxm-warns-you-found-breaches =
     { -product-name } warnt Sie vor Datenlecks, die Ihre persönlichen Daten betreffen.
    Sie haben auch Warnungen für den Fall abonniert, dass Ihre E-Mail-Adresse in einem neuen Datenleck auftaucht.
email-breach-alert-blurb =
     { -product-name } warnt Sie vor Datenlecks, die Ihre persönlichen Daten betreffen.
    Wir haben soeben Informationen über ein Datenleck bei einem anderen Unternehmen erhalten.
# List headline
faq-list-headline = Häufig gestellte Fragen
# Link Title
faq-v2-1 = Ich kenne dieses Unternehmen oder die Website nicht. Warum bin ich von dem Datenleck betroffen?
# Link Title
faq-v2-2 = Muss ich irgendetwas tun, wenn ein Datenleck schon Jahre alt ist oder es sich um ein altes Konto handelt?
# Link Title
faq-v2-3 = Ich habe gerade erfahren, dass ich von einem Datenleck betroffen bin. Was muss ich jetzt tun?
# Link Title
faq-v2-4 = Wie behandelt { -product-name } vertrauliche Websites?
