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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Hier ist dein vollständiger Bericht von { -product-name }, der alle bekannten Datenlecks enthält, in denen  E-Mail-Adresse vorkommt.
report-no-breaches =
    Deine E-Mail-Adresse ist in unserer Datenbank bekannter Datenlecks nicht enthalten.
    Aber Datenlecks können jederzeit passieren. Führe diese Schritte aus, um deine persönlichen Daten im Internet zu schützen.
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
breach-alert-headline = Dein Konto ist von einem Datenleck betroffen.
breach-alert-subhead = Ein kürzlich gemeldetes Datenleck enthält deine E-Mail-Adresse und folgende Daten
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
