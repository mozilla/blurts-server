# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name =
    { $breachCount ->
        [one] Ihr Konto ist von { $breachCount } Datenleck betroffen.
       *[other] Ihr Konto ist von { $breachCount } Datenlecks betroffen.
    }
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Hilfe
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Feedback geben
terms-and-privacy = Nutzungsbedingungen und Datenschutzerklärung
error-not-subscribed = Diese E-Mail-Adresse hat { -product-name } nicht abonniert.
error-hibp-throttled = Zu viele Verbindungen mit { -brand-HIBP }.
error-hibp-connect = Fehler beim Verbinden mit { -brand-HIBP }.
error-hibp-load-breaches = Sicherheitslecks konnten nicht geladen werden.
hibp-notify-email-subject = { -product-name }: Warnung: Ihr Konto war von einem Sicherheitsleck betroffen.
home-title = { -product-name }
home-not-found = Seite nicht gefunden.
oauth-invalid-session = Ungültige Sitzung
oauth-confirmed-title = { -product-name }: Abonniert
scan-title = { -product-name }: Scan-Ergebnisse
user-add-invalid-email = Ungültige E-Mail-Adresse
user-add-email-verify-subject = Bestätigen Sie Ihr Abonnement für { -product-name }.
user-add-title = { -product-name }: E-Mail-Adresse bestätigen
user-verify-token-error = Verifikations-Token wird benötigt.
user-verify-email-report-subject = Ihr Bericht für { -product-name }
user-verify-title = { -product-name }: Abonniert
user-unsubscribe-token-error = Das Abbestellen erfordert ein Token.
user-unsubscribe-token-email-error = Das Abbestellen erfordert ein Token und emailHash.
user-unsubscribe-title = { -product-name }: Abbestellen
user-unsubscribe-survey-title = { -product-name }: Umfrage abbestellen
user-unsubscribed-title = { -product-name }: Abbestellt

## Password Tips

pwt-section-headline = Stärkere Passwörter = besserer Schutz
pwt-section-subhead = Ihre persönlichen Daten sind nur so sicher wie Ihre Passwörter.
pwt-section-blurb =
    Ihre Passwörter schützen mehr als nur Ihre Konten. Sie schützen alle Ihre persönlichen Daten, die sich darin befinden.
    Und Hacker verlassen sich auf schlechte Angewohnheiten, wie die Nutzung des selben Passworts auf allen Seiten oder häufigen Passwörtern (wie 12345),
    was bedeutet, dass sie nicht nur eines, sondern mehrere Konten auf einmal hacken können. Sie können Sie Ihre Konten besser schützen.
pwt-headline-1 = Verwenden Sie für jedes Konto ein anderes Passwort
pwt-summary-1 =
    Wird überall dasselbe Passwort verwendet, ist die Tür für Identitätsdiebstahl weit geöffnet.
    Jeder mit diesem Passwort kann sich bei allen Ihren Konten anmelden.
pwt-headline-2 = Erstellen Sie starke, schwer zu erratende Passwörter
pwt-summary-2 =
    Hacker verwenden tausende gewöhnliche Passwörter, um zu versuchen, Ihre zu erraten.
    Je länger und zufälliger Ihr Passwort ist, desto schwieriger ist es zu erraten.
pwt-headline-3 = Behandeln Sie Sicherheitsfragen wie zusätzliche Passwörter
pwt-summary-3 =
    Websites überprüfen nicht die Richtigkeit Ihrer Antworten, sondern nur, ob sie gleich sind.
    Erstellen Sie lange, zufällige Antworten und speichern Sie diese an einem sicheren Ort.
pwt-headline-4 = Holen Sie sich Hilfe beim Merken Ihrer Passwörter
pwt-summary-4 =
    Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden generieren starke, eindeutige Passwörter.
    Sie speichern Passwörter auch sicher und tragen sie für Sie auf Websites ein.
pwt-headline-5 = Mit Zwei-Faktor-Authentifizierung haben Sie zusätzliche Sicherheit
pwt-summary-5 =
    2FA benötigt eine zusätzliche Information (wie einen einmaligen Code, der per SMS gesendet wird), um sich bei Ihrem Konto anzumelden.
    Selbst wenn jemand Ihr Passwort hat, bekommt er keinen Zugang.
pwt-headline-6 = Abonnieren Sie Warnmeldungen für { -product-name-nowrap }
pwt-summary-6 = Datenlecks auf Websites werden immer häufiger. Sobald eine neue Sicherheitsverletzung in unsere Datenbank aufgenommen wird, sendet Ihnen { -product-name-nowrap } eine Warnung – damit Sie Maßnahmen ergreifen und Ihr Konto schützen können.
landing-headline = Ihr Recht auf Schutz vor Hackern beginnt hier.
landing-blurb = { -product-name-nowrap } versorgt Sie mit Werkzeugen, mit denen Sie Ihre persönlichen Daten schützen können. Finden Sie heraus, was Hacker bereits über Sie wissen, und lernen Sie, ihnen einen Schritt voraus zu sein.
scan-label = Überprüfen Sie, ob ein Datenleck Sie betrifft.
scan-placeholder = E-Mail-Adresse eingeben
scan-privacy = Ihre E-Mail-Adresse wird nicht gespeichert.
scan-submit = Nach Ihrer E-Mail-Adresse suchen
scan-another-email = Eine andere E-Mail-Adresse scannen
scan-featuredbreach-label = Finden Sie heraus, ob Ihr Konto auf <span class="bold">{ $featuredBreach }</span> kompromittiert wurde.
scan-error = Muss eine gültige E-Mail-Adresse sein.
signup-banner-headline = { -product-name-nowrap } erkennt Bedrohungen für Ihre Online-Konten.
signup-banner-blurb =
    Ihr detaillierter Bericht zu { -product-name-nowrap } zeigt an, ob Informationen aus Ihren Online-Konten durchgesickert oder gestohlen wurden.
    Wir warnen Sie auch, wenn Ihre Konten bei neuen Website-Verstößen angezeigt werden.
download-firefox-bar-blurb = { -product-name-nowrap } wird präsentiert vom <span class="nowrap">brandneuen { -brand-name }</span>.
download-firefox-bar-link = Laden Sie jetzt { -brand-name } herunter
download-firefox-banner-blurb = Übernehmen Sie die Kontrolle über Ihren Browser
download-firefox-banner-button = Laden Sie { -brand-name } herunter
signup-modal-headline = Abonnieren Sie { -product-name-nowrap }
signup-modal-blurb = Mit dem Abonnement erhalten Sie Ihren vollständigen Bericht, Warnmeldungen bei Datenlecks und Sicherheitstipps von { -product-name-nowrap }.
signup-modal-close = Schließen
get-your-report = Holen Sie sich Ihren Bericht
signup-modal-verify-headline = Bestätigen Sie Ihr Abonnement
signup-modal-verify-blurb = Wir haben einen Bestätigungslink an <span id="submitted-email" class="medium"></span> geschickt.
signup-modal-verify-expiration = Dieser Link läuft in 24 Stunden ab.
signup-modal-verify-resend = Weder in Ihrem Posteingang noch im Spam-Ordner? Erneut senden.
signup-with-fxa = Abonnieren mit { -brand-name }-Konto
form-signup-placeholder = E-Mail-Adresse eingeben
form-signup-checkbox = Holen Sie sich das Neueste von { -brand-Mozilla } und { -brand-name }.
sign-up = Abonnieren
form-signup-error = Muss eine gültige E-Mail-Adresse sein
no-breaches-headline = So weit, so gut.
found-breaches-headline = Ihre Daten sind von einem Datenleck betroffen.
no-breaches =
    Ihre E-Mail-Adresse wurde in unserem Basis-Scan nicht angezeigt.
    Das sind gute Nachrichten, aber Datenlecks können jederzeit passieren und es gibt noch mehr, was Sie tun können. Abonnieren Sie { -product-name-nowrap } und erhalten Sie einen vollständigen Bericht, Warnungen bei neuen Sicherheitsverletzungen und Tipps zum Schutz Ihrer Passwörter.
featured-breach-results =
    { $breachCount ->
        [one] Ihr Konto ist vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, nicht aber von anderen bekannten Datenlecks.
       *[other] Ihr Konto ist vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, sowie von einem anderen Datenleck.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [one] Ihr Konto ist nicht vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, aber von einem anderen Datenleck.
       *[other] Ihr Konto ist nicht vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, aber von { $breachCount } anderen Datenlecks.
    }
scan-results =
    { $breachCount ->
        [one] Ihr Konto ist von { $breachCount } Datenleck betroffen.
       *[other] Von den folgenden { $breachCount } Datenlecks sind Konten mit Ihren E-Mail-Adressen betroffen.
    }
show-more-breaches = Mehr anzeigen
what-to-do-headline = Was zu tun ist, wenn Ihre Informationen von einem Datenleck betroffen sind
what-to-do-subhead-1 = Ändern Sie Ihre Passwörter, auch für alte Konten
what-to-do-blurb-1 = Wenn Sie sich nicht anmelden können, wenden Sie sich an die Website, um zu erfahren, wie Sie das Konto wiederherstellen oder schließen können. Das Konto kommt Ihnen nicht bekannt vor? Die Website hat möglicherweise Namen geändert oder jemand hat ein Konto für Sie erstellt.
what-to-do-subhead-2 = Wenn Sie ein kompromittiertes Passwort mehrfach nutzen, ändern Sie es
what-to-do-blurb-2 =
    Hacker versuchen möglicherweise, Ihr verfügbares Passwort für andere Konten wiederzuverwenden.
    Erstellen Sie für jede Website ein anderes Passwort, insbesondere für Ihr Bankkonto, Ihre E-Mail-Adresse und andere Websites, auf denen Sie persönliche Daten speichern.
what-to-do-subhead-3 = Ergreifen Sie zusätzliche Schritte zum Schutz Ihrer Bankkonten
what-to-do-blurb-3 =
    Bei den meisten Verstößen werden nur E-Mails und Passwörter erbeutet, bei einigen jedoch auch vertrauliche Bankdaten.
    Wenn Ihre Bankkonto- oder Kreditkartennummern von einem Datenleck betroffen sind, warnen Sie Ihre Bank vor möglichen Betrugsfällen und überwachen Sie die Kontoauszüge auf Transaktionen, die Sie nicht kennen.
what-to-do-subhead-4 = Erfahren Sie, wie man gute Passwörter erstellt und sie sicher aufbewahrt.
what-to-do-blurb-4 = Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden generieren starke, eindeutige Passwörter, speichern Sie Passwörter sicher und tragen sie für Sie auf Websites ein.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datum des Lecks
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Kompromittierte Konten
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromittierte Daten
confirmed = Es hat geklappt!<br />Abonnement erfolgreich!
confirmed-blurb = { -product-name-nowrap } sendet Ihnen in Kürze eine E-Mail mit einem vollständigen Bericht und sendet eine E-Mail-Benachrichtigung, wenn Ihr Konto von einem neuen gemeldeten Datenleck betroffen ist.
confirmed-social-blurb = Wenn Sie von einem Datenleck betroffen sind, sind Ihre Freunde, Ihre Familie oder Ihre Online-Kontakte es wahrscheinlich auch. Erzählen Sie ihnen von { -product-name-nowrap }.
unsub-headline = Abonnement von { -product-name-nowrap } löschen
unsub-blurb = Dadurch wird Ihre E-Mail-Adresse aus der Liste { -product-name-nowrap } entfernt und Sie erhalten keine Benachrichtigungen mehr, wenn neue Datenlecks gemeldet werden.
unsub-button = Abonnement entfernen
unsub-survey-headline = Ihr Abonnement wurde gelöscht.
unsub-survey-blurb = Ihre E-Mail-Adresse wurde aus dem Abonnement von { -product-name-nowrap } entfernt. Danke, dass Sie diesen Dienst verwendet haben. Nehmen Sie sich einen Moment Zeit, um uns eine Frage zu Ihrem Erlebnis zu beantworten?
unsub-survey-form-label = Warum melden Sie sich von Warnungen zu { -product-name-nowrap } ab?
unsub-reason-1 = Ich glaube nicht, dass Warnungen meine Daten sicherer machen
unsub-reason-2 = Ich erhalten zu viele E-Mails von { -product-name-nowrap }
unsub-reason-3 = Ich finde diesen Dienst nicht nützlich
unsub-reason-4 = Ich habe bereits Schritte unternommen, um meine Konten zu schützen
unsub-reason-5 = Ich verwende einen anderen Dienst, um meine Konten zu überwachen
unsub-reason-6 = Nichts davon
unsub-survey-thankyou = Vielen Dank für Ihre Rückmeldung.
unsub-survey-error = Bitte wählen Sie einen Punkt aus.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Teilen
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Twittern
download-firefox-quantum = { -brand-Quantum } herunterladen
download-firefox-mobile = { -brand-name } Mobile herunterladen
# Features here refers to Firefox browser features. 
features = Funktionen
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info = Teile dieses Inhalts stehen unter einem &#x24B8; 1998-2018 von einzelnen Mitwirkenden an mozilla.org. Der Inhalt steht unter einer <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative-Commons-Lizenz</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Informationen zum Datenleck stammen von { $hibp-link }
