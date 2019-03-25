# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Klicken Sie innerhalb von 24 Stunden auf die Schaltfläche „Meine E-Mail-Adresse bestätigen“, um Ihr Firefox-Monitor-Konto zu bestätigen. Ihr Bericht wird dann an Sie gesendet.
verify-my-email = Meine E-Mail-Adresse bestätigen
report-scan-another-email = Eine weitere E-Mail-Adresse in { -product-name } scannen
automated-message = Dies ist eine automatisierte E-Mail; wenn Sie diese fälschlicherweise erhalten haben, müssen Sie nichts tun.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Wir haben diese Nachricht an { $userEmail } gesendet, weil die E-Mail-Adresse Warnungen von { -product-name } aktiviert hat.
unsubscribe-email-link = Wenn Sie keine Warnungen von { -product-name } mehr erhalten möchten, melden Sie sich ab.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Bericht zu { -product-name }
report-date = Datum des Berichts:
email-address = E-Mail-Adresse:
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Hier ist Ihr vollständiger Bericht von { -product-name }, der alle bekannten Datenlecks enthält, die diese E-Mail-Adresse enthalten.
report-no-breaches =
    Ihre E-Mail-Adresse ist in unserer Datenbank bekannter Datenlecks nicht enthalten.
    Aber Datenlecks können jederzeit passieren. Führen Sie diese Schritte aus, um Ihre persönlichen Daten im Internet zu schützen.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Nächste Schritte
report-headline =
    { $breachCount ->
        [0] So weit, so gut.
        [one] Ihr Konto ist von { $breachCount } Datenleck betroffen.
       *[other] Ihr Konto ist von { $breachCount } Datenlecks betroffen.
    }
report-subhead-no-breaches =
    Ihr Konto erscheint nicht in unserem vollständigen Bericht über Datenlecks.
    Das sind gute Nachrichten, aber Sie können noch mehr tun.
    Datenschutzverletzungen passieren jederzeit. Lesen Sie weiter, um zu erfahren, wie Sie Ihre Passwörter schützen können.
report-subhead-found-breaches = Hier ist Ihr vollständiger Bericht von Firefox Monitor, der alle bekannten Datenlecks enthält, die diese E-Mail-Adresse betreffen.
breach-alert-headline = Ihr Konto ist von einem Datenleck betroffen.
breach-alert-subhead = Ein kürzlich gemeldetes Datenleck enthält Ihre E-Mail-Adresse und folgende Daten
report-pwt-blurb =
    Passwörter sind so wertvoll, dass Tausende von ihnen jeden Tag gestohlen und auf dem Schwarzmarkt gehandelt oder verkauft werden.
    Stärkere Passwörter schützen Ihre Konten und alle persönlichen Informationen, die sich darin befinden.
report-pwt-headline-1 = Verwenden Sie für jedes Konto ein anderes Passwort
report-pwt-summary-1 =
    Das gleiche Passwort überall zu verwenden, öffnet Hackern Tür und Tor.
    Hacker können dieses Passwort verwenden, um sich bei Ihren anderen Konten anzumelden.
report-pwt-headline-2 = Erstellen Sie starke, einzigartige Passwörter
report-pwt-summary-2 =
    Hacker verwenden Listen gewöhnlicher Passwörter, um zu versuchen, Ihre zu erraten.
    Je länger und zufälliger Ihr Passwort ist, desto schwieriger ist es zu stehlen.
report-pwt-headline-3 = Behandeln Sie Sicherheitsfragen wie zusätzliche Passwörter
report-pwt-summary-3 =
    Websites überprüfen nicht die Richtigkeit Ihrer Antworten, sondern nur, ob sie gleich sind.
    Erstellen Sie lange, zufällige Antworten und speichern Sie diese an einem sicheren Ort.
report-pwt-headline-4 = Verwenden Sie einen Passwort-Manager
report-pwt-summary-4 =
    Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden generieren starke, eindeutige Passwörter, speichern Sie Passwörter sicher
    und tragen sie für Sie auf Websites ein, damit Sie sich nicht alle Passwörter merken müssen.
# A link to legal information about mozilla products.
legal = Rechtliches
# Share Firefox Monitor by email subject line
share-by-email-subject = Sehen Sie, ob Sie von einem Datenleck betroffen sind.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hallo
    { -brand-name } bietet einen kostenlosen Dienst, um zu testen, ob Sie voneinem Datenleck betroffen sind. So funktioniert es:
    1. Besuchen Sie { "https://monitor.firefox.com" } und suchen Sie nach Ihrer E-Mail-Adresse.
    2. Sehen Sie, ob Ihre Online-Konten bei einem Datenleck geknackt wurden.
    3. Holen Sie sich Tipps von { -product-name } für die nächsten Schritte.
