# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox-Konto
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Hilfe
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Über Firefox-Warnmeldungen
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Feedback geben
terms-and-privacy = Nutzungsbedingungen und Datenschutzerklärung
error-scan-page-token = Du hast versucht, zu viele E-Mail-Adressen in kurzer Zeit zu überprüfen. Aus Sicherheitsgründen haben wir dich vorübergehend für neue Suchanfragen gesperrt. Du kannst es später erneut versuchen.
error-could-not-add-email = E-Mail-Adresse konnte nicht zur Datenbank hinzugefügt werden.
error-not-subscribed = Diese E-Mail-Adresse hat { -product-name } nicht abonniert.
error-hibp-throttled = Zu viele Verbindungen mit { -brand-HIBP }.
error-hibp-connect = Fehler beim Verbinden mit { -brand-HIBP }.
error-hibp-load-breaches = Sicherheitslecks konnten nicht geladen werden.
error-must-be-signed-in = Sie müssen bei Ihrem { -brand-fxa } angemeldet sein.
home-title = { -product-name }
home-not-found = Seite nicht gefunden.
oauth-invalid-session = Ungültige Sitzung
oauth-confirmed-title = { -product-name }: Abonniert
scan-title = { -product-name }: Scan-Ergebnisse
user-add-invalid-email = Ungültige E-Mail-Adresse
user-add-email-verify-subject = Bestätige deine Anmeldung für { -product-name }.
user-add-title = { -product-name }: E-Mail-Adresse bestätigen
error-headline = Fehler
user-verify-token-error = Verifikations-Token wird benötigt.
user-verify-email-report-subject = Dein Bericht für { -product-name }
user-verify-title = { -product-name }: Abonniert
user-unsubscribe-token-error = Das Abbestellen erfordert ein Token.
user-unsubscribe-token-email-error = Das Abbestellen erfordert ein Token und emailHash.
user-unsubscribe-title = { -product-name }: Abbestellen
user-unsubscribe-survey-title = { -product-name }: Umfrage abbestellen
user-unsubscribed-title = { -product-name }: Abbestellt

## Password Tips

pwt-section-headline = Stärkere Passwörter = besserer Schutz
pwt-section-subhead = Deine persönlichen Daten sind nur so sicher wie deine Passwörter
pwt-section-blurb =
    Deine Passwörter schützen mehr als nur deine Konten. Sie schützen alle deine persönlichen Daten, die sich darin befinden.
    Und Hacker verlassen sich auf schlechte Angewohnheiten, wie die Nutzung desselben Passworts auf allen Seiten oder häufig verwendeten Passwörtern (wie 12345),
    was bedeutet, dass sie nicht nur eines, sondern mehrere Konten auf einmal hacken können. So kannst du deine Konten besser schützen.
pwt-headline-1 = Verwende für jedes Konto ein anderes Passwort
pwt-summary-1 = Überall dasselbe Passwort zu nutzen, macht Identitätsdiebstahl zum Kinderspiel. Denn wer ein Passwort knackt, hat gleich Zugriff zu all deinen Konten.
pwt-headline-2 = Erstelle starke und schwer zu erratende Passwörter
pwt-summary-2 =
    Hacker verwenden tausende gewöhnliche Passwörter, um zu versuchen, deine zu erraten.
    Je länger und beliebiger dein Passwort ist, desto schwieriger lässt es sich erraten.
pwt-headline-3 = Behandele Sicherheitsfragen wie zusätzliche Passwörter
pwt-summary-3 = Websites überprüfen nicht den Wahrheitsgehalt deiner Antworten, sondern nur, ob sie immer gleich sind. Erstelle lange, beliebige Antworten und speichere sie an einem sicheren Ort ab.
pwt-headline-4 = Hol dir Hilfe beim Merken deiner Passwörter
pwt-summary-4 = Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden generieren starke, eindeutige Passwörter, speichern sie sicher und tragen sie für dich auf Websites ein.
pwt-headline-5 = Sorge mit Zwei-Faktor-Authentifizierung (2FA) für mehr Sicherheit
pwt-summary-5 = 2FA benötigt eine zusätzliche Information (z. B. einen einmaligen Code, der per SMS gesendet wird), um sich bei deinem Konto anzumelden. Selbst wenn also jemand dein Passwort hat, bekommt er so keinen Zugang zu deinem Konto.
pwt-headline-6 = Erhalte Warnmeldungen von { -product-name-nowrap }
pwt-summary-6 = Datenlecks kommen immer häufiger vor. Wenn deine persönlichen Daten von einem neuen Datenleak oder Hackerangriff betroffen sind, warnt dich { -product-name-nowrap } , damit du sofort Maßnahmen ergreifen und deine Konten schützen kannst.
landing-headline = Dein Schutz vor Hackern beginnt hier
landing-blurb = { -product-name-nowrap } versorgt dich mit Werkzeugen, die deine persönlichen Daten schützen können. Finde heraus, was Hacker bereits über dich wissen und erfahre, wie du ihnen in Zukunft einen Schritt voraus sein kannst.
scan-label = Überprüfe, ob du von einem Datenleck betroffen bist.
scan-placeholder = E-Mail-Adresse eingeben
scan-privacy = Deine E-Mail-Adresse wird nicht gespeichert.
scan-submit = Nach deiner E-Mail-Adresse suchen
scan-another-email = Eine andere E-Mail-Adresse scannen
scan-featuredbreach-label = Finde heraus, ob dein Konto auf <span class="bold">{ $featuredBreach }</span> kompromittiert wurde.
sensitive-breach-email-required = Datenleck enthält sensible Daten. E-Mail-Verifikation erforderlich.
scan-error = Muss eine gültige E-Mail-Adresse sein.
signup-banner-headline = { -product-name-nowrap } erkennt Bedrohungen für deine Online-Konten.
signup-banner-blurb =
    Dein detaillierter Bericht zu { -product-name-nowrap } zeigt an, ob Informationen aus deinen Online-Konten durchgesickert sind oder gestohlen wurden.
    Wir warnen dich auch, wenn deine Konten bei neuen Website-Verstößen angezeigt werden.
download-firefox-bar-blurb = { -product-name-nowrap } wird präsentiert vom <span class="nowrap">brandneuen { -brand-name }</span>.
download-firefox-bar-link = Download { -brand-name }
download-firefox-banner-blurb = Übernimm die Kontrolle über deinen Browser
download-firefox-banner-button = Download { -brand-name }
signup-modal-headline = Melde dich für { -product-name-nowrap } an
signup-modal-blurb = Melde dich mit einem Firefox-Konto an, um einen vollständigen Bericht, zukünftige Warnmeldungen bei Datenlecks und Sicherheitstipps von { -product-name-nowrap } zu erhalten.
signup-modal-close = Schließen
get-your-report = Hole dir deinen Bericht
signup-modal-verify-headline = Bestätige deine Anmeldung
signup-modal-verify-blurb = Wir haben einen Bestätigungslink an <span id="submitted-email" class="medium"></span> geschickt.
signup-modal-verify-expiration = Dieser Link läuft in 24 Stunden ab.
signup-modal-verify-resend = Weder in deinem Posteingang noch im Spam-Ordner? Erneut senden.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Gesendet!
signup-with-fxa = Melde dich mit einem { -brand-name }-Konto an
form-signup-placeholder = E-Mail-Adresse eingeben
form-signup-checkbox = Hol dir das Neueste von { -brand-Mozilla } und { -brand-name }.
sign-up = Anmelden
form-signup-error = Muss eine gültige E-Mail-Adresse sein
no-breaches-headline = So weit, so gut.
found-breaches-headline = Deine Daten sind von einem Datenleck betroffen.
no-breaches =
    Deine E-Mail-Adresse wurde in unserem Basis-Scan nicht angezeigt.
    Das sind gute Nachrichten, aber Datenlecks können jederzeit passieren und es gibt noch mehr, was du tun kannst. Melde dich für { -product-name-nowrap } an und erhalte einen vollständigen Bericht, zukünftige Warnungen bei neuen Sicherheitsverletzungen und Tipps zum Schutz deiner Passwörter.
featured-breach-results =
    { $breachCount ->
        [0] Dein Konto ist vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, nicht aber von anderen bekannten Datenlecks.
        [one] Dein Konto ist vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, sowie von einem anderen Datenleck.
       *[other] Dein Konto ist vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, sowie von { $breachCount } anderen Datenlecks.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Dein Konto ist nicht vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, aber von einem anderen Datenleck.
       *[other] Dein Konto ist nicht vom Datenleck bei <span class="bold">{ $featuredBreach }</span> betroffen, aber von { $breachCount } anderen Datenlecks.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Dein Konto ist von { $breachCount } Datenleck betroffen.
       *[other] Von den folgenden { $breachCount } Datenlecks sind Konten mit deinen E-Mail-Adressen betroffen.
    }
show-more-breaches = Mehr anzeigen
what-to-do-headline = Was zu tun ist, wenn deine Informationen von einem Datenleck betroffen sind:
what-to-do-subhead-1 = Ändere deine Passwörter, auch für alte Konten.
what-to-do-blurb-1 = Wenn du dich nicht anmelden kannst, wende dich an die Website, um zu erfahren, wie du das Konto wiederherstellen oder schließen kannst. Das Konto kommt dir nicht bekannt vor? Die Website hat möglicherweise Namen geändert oder jemand hat ein Konto für dich erstellt.
what-to-do-subhead-2 = Wenn du ein kompromittiertes Passwort mehrfach nutzt, ändere es.
what-to-do-blurb-2 =
    Hacker versuchen möglicherweise, dein verfügbares Passwort für andere Konten wiederzuverwenden.
    Erstelle für jede Website ein anderes Passwort, insbesondere für dein Bankkonto, deine E-Mail-Adresse und andere Websites, auf denen du persönliche Daten speicherst.
what-to-do-subhead-3 = Ergreife zusätzliche Schritte zum Schutz deiner Bankkonten.
what-to-do-blurb-3 =
    Bei den meisten Verstößen werden nur E-Mails und Passwörter erbeutet, bei einigen jedoch auch vertrauliche Bankdaten.
    Wenn deine Bankkonto- oder Kreditkartennummern von einem Datenleck betroffen sind, warne deine Bank vor möglichen Betrugsfällen und überwache deine Kontoauszüge auf Transaktionen, die du nicht kennst.
what-to-do-subhead-4 = Hol dir Hilfe beim Erstellen guter Passwörter und ihrer sicheren Aufbewahrung.
what-to-do-blurb-4 = Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden generieren starke, eindeutige Passwörter, speichern sie sicher und tragen sie für dich auf Websites ein.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datum des Lecks:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Kompromittierte Konten:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromittierte Daten:
confirmed = Es hat geklappt!<br />Abonnement erfolgreich!
confirmed-blurb = { -product-name-nowrap } sendet dir in Kürze eine E-Mail mit einem vollständigen Bericht und eine E-Mail-Benachrichtigung, wenn dein Konto von einem neuen gemeldeten Datenleck betroffen ist.
confirmed-social-blurb = Wenn du von einem Datenleck betroffen bist, sind deine Freunde, deine Familie oder deine Online-Kontakte es wahrscheinlich auch. Lass auch sie von { -product-name-nowrap } wissen.
unsub-headline = Abonnement für Meldungen von { -product-name-nowrap } löschen
unsub-blurb = Dadurch wird deine E-Mail-Adresse aus der Liste { -product-name-nowrap } entfernt und du erhältst keine Benachrichtigungen mehr, wenn neue Datenlecks gemeldet werden.
unsub-button = Abmelden
fxa-unsub-headline = Warnmeldungen von { -product-name } abbestellen.
fxa-unsub-blurb =
    Du erhältst keine Warnmeldungen von { -product-name } mehr.
    Dein { -brand-fxa } bleibt aber aktiv und du kannst weiterhin andere Informationen
    bezüglich deines Kontos erhalten.
unsub-survey-form-label = Warum willst du keine Warnungen von { -product-name-nowrap } mehr erhalten?
unsub-reason-1 = Ich glaube nicht, dass Warnungen meine Daten sicherer machen
unsub-reason-2 = Ich erhalten zu viele E-Mails von { -product-name-nowrap }
unsub-reason-3 = Ich finde diesen Dienst nicht nützlich
unsub-reason-4 = Ich habe bereits Schritte unternommen, um meine Konten zu schützen
unsub-reason-5 = Ich verwende einen anderen Dienst, um meine Konten zu überwachen
unsub-reason-6 = Nichts davon
unsub-survey-thankyou = Vielen Dank für dein Feedback.
unsub-survey-error = Bitte wähle einen Punkt aus.
unsub-survey-headline-v2 = Dein Abonnement für Meldungen wurde entfernt.
unsub-survey-blurb-v2 =
    Du erhältst keine Warnmeldungen von { -product-name } mehr.
    Beantworte uns eine kurze Frage zu deiner Erfahrung?
unsub-survey-button = Antwort absenden
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Teilen
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Twittern
download-firefox-quantum = Download { -brand-Quantum }
download-firefox-mobile = Download { -brand-name } Mobile
# Features here refers to Firefox browser features. 
features = Funktionen
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Informationen zum Datenleck stammen von { $hibp-link }
site-description = Wurden deine Kontodaten bei einem Datenleck öffentlich bekannt oder gestohlen? Finde es heraus mit { -product-name }. Durchsuche unsere Datenbank und melde dich für zukünftige Warnungen an.
confirmation-headline = Dein Bericht für { -product-name } ist unterwegs.
confirmation-blurb = Datenlecks können jeden betreffen. Erzähle auch anderen davon und hilf Freunden und Familie dabei herauszufinden, ob ihre Online-Konten sicher sind.
share-email = E-Mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Andere
share-twitter = Die meisten Menschen haben circa 100 Online-Konten. Wurde eines deiner Konten bei einem Datenleck geknackt? Finde es heraus.
share-facebook-headline = Überprüfe, ob du von einem Datenleck betroffen bist.
share-facebook-blurb = Wurden deine Online-Konten bei einem Datenleck geknackt?
og-site-description = Überprüfe mit { -product-name }, ob du von einem Datenleck betroffen bist. Melde dich für Warnungen zu zukünftigen Datenlecks an und erhalte Tipps zum Schutz deiner Online-Konten.
mozilla-security-blog = { -brand-Mozilla } Sicherheitsblog
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Soziale Medien
show-all = Alle anzeigen
fxa-landing-blurb = Finde heraus, was Hacker bereits über dich wissen und wie du ihnen in Zukunft einen Schritt voraus sein kannst.
fxa-scan-label = Überprüfe, ob du von einem Datenleck betroffen bist.
fxa-welcome-headline = Willkommen bei { -product-name }.
fxa-welcome-blurb = Ab jetzt wirst du benachrichtigt, wenn { $userEmail } von einem bekannten Datenleck betroffen bist.
fxa-scan-another-email = Soll noch eine andere E-Mail-Adresse überprüft werden?
# Search Firefox Monitor
fxa-scan-submit = { -product-name } durchsuchen
sign-up-to-check = Registriere dich, um die Überprüfung durchzuführen
sign-in = Einloggen
sign-out = Ausloggen
full-report-headline = Dein Bericht von { -product-name }
see-full-report = Vollständigen Bericht anzeigen
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } verwalten
fxa-download-firefox-bar-blurb = Entwickelt von { -brand-name }. Doppelt so schnell. Nutzt 30 % weniger Speicher als { -brand-Chrome }.
fxa-download-firefox-bar-link = Jetzt herunterladen
fxa-download-firefox-banner-blurb = Besserer, schnellerer Seitenaufbau bei weniger Speicherbedarf.
user-fb-compromised-headline = { $userEmail } ist vom Datenleck { $breachName } betroffen.
guest-fb-compromised-headline = Diese E-Mail-Adresse ist vom Datenleck { $breachName } betroffen.
user-zero-breaches-headline = { $userEmail } ist nicht von Datenlecks betroffen.
guest-zero-breaches-headline = Diese E-Mail-Adresse ist nicht von Datenlecks betroffen.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } ist von einem Datenleck betroffen.
       *[other] { $userEmail } ist von { $breachCount } Datenlecks betroffen.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist von einem Datenleck betroffen.
       *[other] Diese E-Mail-Adresse ist von { $breachCount } Datenlecks betroffen.
    }
user-no-breaches-blurb = Wir benachrichtigen dich, wenn diese E-Mail-Adresse von einem neuen Datenleck betroffen ist.
guest-no-breaches-blurb =
    Erstelle ein { -brand-fxa }, um zu sehen, ob diese E-Mail-Adresse von sensiblen Datenlecks betroffen ist.
    Wir benachrichtigen dich auch, wenn diese Adresse von neuen Datenlecks betroffen ist.
user-one-breach-blurb = Dieses Datenleck enthielt die folgenden persönlichen Daten.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Deine E-Mail-Adresse ist auch von { $breachCount } anderem Datenleck betroffen.
       *[other] Deine E-Mail-Adresse ist auch von { $breachCount } anderen Datenlecks betroffen.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist auch von { $breachCount } anderem Datenleck betroffen.
       *[other] Diese E-Mail-Adresse ist auch von { $breachCount } anderen Datenlecks betroffen.
    }
user-fb-compromised-single =
    Dieses Datenleck enthielt die folgenden persönlichen Daten. Ändere deine Passwörter,
    solltest du es nicht bereits getan haben.
user-generic-fb-compromised-single = Dieses Datenleck enthielt die folgenden persönlichen Daten.
guest-fb-compromised-single-v2 =
    Dieses Datenleck enthielt die folgenden persönlichen Daten.
    Erstelle ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über neue Datenlecks
    und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist auch von { $breachCount } anderem Datenleck betroffen. Erstelle ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über zukünftige Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
       *[other] Diese E-Mail-Adresse ist auch von { $breachCount } anderen Datenlecks betroffen. Erstelle ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über zukünftige Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Du bist nicht vom Datenleck { $breachName } betroffen, die E-Mail-Adresse taucht aber in einem anderen auf.
       *[other] Du bist nicht vom Datenleck { $breachName } betroffen, die E-Mail-Adresse taucht aber in mehreren anderen auf.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist nicht vom Datenleck { $breachName } betroffen, aber von einem anderen.
       *[other] Diese E-Mail-Adresse ist nicht vom Datenleck { $breachName } betroffen, aber von mehreren anderen.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Diese E-Mail-Adresse ist nicht vom Datenleck { $breachName } betroffen, aber von einem anderen.
            Erstelle ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über zukünftige Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
       *[other]
            Diese E-Mail-Adresse ist nicht vom Datenleck { $breachName } betroffen, aber von mehreren anderen.
            Erstelle ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über zukünftige Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Dieses Datenleck enthielt die folgenden persönlichen Daten. Ändere dein Passwort, falls du es noch nicht getan hast.
       *[other] Diese Datenlecks enthielten die folgenden persönlichen Daten. Ändere deine Passwörter, falls du es noch nicht getan hast.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Dieses Datenleck enthielt die folgenden persönlichen Daten.
       *[other] Diese Datenlecks enthielten die folgenden persönlichen Daten.
    }
have-an-account = Du hast schon ein Konto?
signup-banner-sensitive-blurb = Finde heraus, was Hacker bereits über dich wissen und erfahre, wie du ihnen in Zukunft einen Schritt voraus sein kannst. Lass dich benachrichtigen, wenn dein Konto von neuen Datenlecks betroffen ist.
fxa-pwt-section-blurb = Passwörter schützen alle persönlichen Daten in deinen Online-Konten. Hacker verlassen sich auf schlechte Angewohnheiten, wie die Wiederverwendung von Passwörtern oder häufig genutzte Begriffe (man denke nur an @p@ssw0rt). So können sie nicht nur eines, sondern gleich mehrere Konten knacken.
fxa-pwt-summary-2 = Verwende mindestens zwei Wörter und eine Kombination aus Buchstaben, Ziffern und Sonderzeichen. Kurze Passwörter, die nur aus einem einzigen Wort bestehen, sind für Hacker leicht zu erraten.
fxa-pwt-summary-4 = Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden speichern deine Passwörter und tragen sie auf Websites für dich ein. Sie helfen dir sogar dabei, sichere Passwörter zu erstellen.
fxa-pwt-summary-6 = Datenlecks kommen immer häufiger vor. Wenn deine persönlichen Daten von einem neuen Datenleak oder Hackerangriff betroffen sind, warnt dich { -product-name }, damit du sofort Maßnahmen ergreifen und deine Konten schützen kannst.
fxa-what-to-do-blurb-1 =
    Wenn du dich nicht anmelden kannst, wende dich an die Website und finde heraus, wie du deine Zugangsdaten erneuern kannst.
    Fällt dir ein unbekanntes Konto auf? Vielleicht wurden deine Daten verkauft oder weitergegeben.
    Vielleicht hast du das Konto aber auch nur vergessen oder das Unternehmen hat seinen Namen geändert.
fxa-what-to-do-subhead-2 = Benutze das offengelegte Passwort nicht mehr und ändere es überall dort, wo du es verwendet hast.
fxa-wtd-blurb-2 =
    Hacker versuchen möglicherweise, dasselbe Passwort und deine E-Mail-Adresse zum Zugriff auf andere Konten zu verwenden.
    Erstelle für jedes Konto ein anderes und einzigartiges Passwort, insbesondere für dein Bankkonto, deine E-Mail-Adresse und andere Websites, auf denen du persönliche Daten speicherst.
fxa-what-to-do-blurb-3 =
    Bei den meisten Verstößen werden nur E-Mails und Passwörter erbeutet, bei einigen jedoch auch vertrauliche Bankdaten.
    Wenn deine Bankkonto- oder Kreditkartennummern bei einem Datenleck offengelegt wurden, warne deine Bank vor möglichen Betrugsfällen und überwache deine Kontoauszüge auf Transaktionen, die du nicht kennst.
fxa-what-to-do-subhead-4 = Hol dir Hilfe beim Merken und sicheren Speichern deiner Passwörter.
fxa-what-to-do-blurb-4 =
    Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden speichern deine
    Passwörter sicher und tragen sie für dich auf Websites ein. Nutze einen Passwort-Manager
    auf deinem Handy und deinem Computer, damit du dir nicht alle merken musst.
fb-landing-headline = Waren deine Daten vom Datenleck { $breachName } betroffen?
copyright = Teile dieses Inhalts stehen unter einem ©1999–%(current_year)s von einzelnen Mitwirkenden an mozilla.org.
content-available = Der Inhalt steht unter einer Creative-Commons-Lizenz.
# Alerts is a noun
sign-up-for-alerts = Warnmeldungen erhalten
sign-up-for-fxa-alerts = Melde dich für Warnmeldungen von { -product-name } an.
create-free-account =
    Erstelle ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen bei neuen Datenlecks
    und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
get-your-report-and-sign-up = Hol dir deinen Bericht und melde dich für Warnmeldungen an.
# Link title
frequently-asked-questions = Häufig gestellte Fragen
about-firefox-monitor = Über { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Einstellungen
# Link title.
home = Startseite
# Link title
breaches = Datenlecks
# Link title
security-tips = Sicherheitstipps
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa } Navigation öffnen
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = Zuletzt hinzugefügtes Datenleck
# Link title
more-about-this-breach = Mehr zu diesem Datenleck
take-control = Hol dir die Kontrolle über deine persönlichen Daten zurück.
cant-stop-hackers = Du kannst Hacker nicht davon abhalten zu hacken. Aber du kannst einiges tun, um ihnen die Arbeit zu erschweren.
read-more-tips = Mehr Sicherheitstipps lesen
how-hackers-work = Verstehe, wie Hacker vorgehen
monitor-your-online-accounts = Melde dich mit einem { -brand-fxa } an, um Datenschutzverletzungen überprüfen zu lassen
stay-alert = Lass dich bei neuen Datenlecks warnen
if-your-info = Sollten deine Daten in einem neuen Datenleck auftauchen, senden wir dir eine Warnmeldung.
search-all-emails = Überprüfe alle deine E-Mail-Adressen auf Datenschutzverletzungen und lass dich bei neuen Bedrohungen warnen.
monitor-several-emails = Überprüfe mehrere E-Mail-Adressen
take-action = Schütze aktiv deine Accounts
keep-your-data-safe = Finde heraus, was du tun solltest, um deine Daten vor Cyber-Kriminellen zu sichern.
website-breach = Datenleck einer Website
sensitive-breach = Sensibles Datenleck einer Website
data-aggregator-breach = Leck eines Daten-Aggregators
unverified-breach = Unbestätigtes Datenleck
spam-list-breach = Datenleck einer Spam-Liste
website-breach-plural = Datenlecks von Websites
sensitive-breach-plural = Sensible Datenlecks
data-aggregator-breach-plural = Lecks von Daten-Aggregatoren
unverified-breach-plural = Unbestätigte Datenlecks
spam-list-breach-plural = Datenlecks von Spam-Listen
what-data = Welche Daten wurden kompromittiert:
sensitive-sites = Wie geht { -product-name } mit sensiblen Websites um?
sensitive-sites-copy = { -product-name } zeigt die von dem Datenleck betroffenen Konten nur an, nachdem eine E-Mail-Adresse verifiziert wurde. Das bedeutet, dass auch nur du sehen kannst, ob deine Daten Teil eines Leaks wurden. (Es sei denn, jemand anderes hat Zugang zu deinem E-Mail-Konto.)
delayed-reporting-headline = Warum hat es so lange gedauert, bis dieses Leck gemeldet wurde.
delayed-reporting-copy = Es kann manchmal Monate oder Jahre dauern bis offengelegte Daten aus einem Datenleck im Dark Web auftauchen. Lecks werden, sobald sie entdeckt und verifiziert wurden, zu unserer Datenbank hinzugefügt.
about-fxm-headline = Über { -product-name }
about-fxm-blurb = { -product-name } warnt dich, wenn deine Online-Konten von einem Datenleck betroffen sind. Finde heraus, ob du Teil eines Datenleaks geworden bist, lass dich bei neuen Leaks warnen und unternimm die wichtigsten Schritte, um deine Online-Konten zu schützen. { -product-name } wird von { -brand-Mozilla } zur Verfügung gestellt.
fxm-warns-you = { -product-name } warnt dich, wenn deine E-Mail-Adresse bei einem Datenleck offengelegt wurde. Finde heraus, ob Informationen von dir geleakt wurden, lerne, wie du deine Online-Konten besser schützen kannst und lass dich warnen, sobald deine E-Mail-Adresse in einem neuen Datenleck auftaucht.
# How Firefox Monitor works
how-fxm-works = So funktioniert { -product-name }
how-fxm-1-headline = Führe eine einfache Suche durch
how-fxm-1-blurb = Suche in öffentlich gewordenen Datenlecks bis 2007 nach deiner E-Mail-Adresse. Hierbei werden die meisten Datenlecks angezeigt, allerdings nicht solche, die sensible persönliche Informationen enthalten.
how-fxm-2-headline = Melde dich für die Überprüfung von Datenlecks an
how-fxm-2-blurb = Erstelle ein { -brand-fxa }, um deine E-Mail-Adresse auf weitere Leaks überprüfen zu lassen.
how-fxm-3-headline = Erhalte Benachrichtigungen direkt im Browser
how-fxm-3-blurb = Wenn du { -brand-name } nutzt, erhältst du eine Mitteilung, sobald du dich auf einer Website befindest, die von einem Datenleck betroffen war. Finde sofort heraus, ob du von einem Leak betroffen bist und was du tun kannst.
wtd-after-website = Was nach einem Datenleck einer Website zu tun ist
wtd-after-data-agg = Was nach einem Leck eines Daten-Aggregators zu tun ist
what-is-data-agg = Was ist ein Daten-Aggregator?
what-is-data-agg-blurb = Daten-Aggregatoren oder auch Daten-Broker sammeln Informationen aus öffentlichen Unterlagen und kaufen sie von anderen Unternehmen. Sie erheben diese Daten, um sie zu Marketingzwecken an Unternehmen zu verkaufen. Opfer solcher Datenlecks sind zwar weniger anfällig für Finanzbetrug, aber Hacker könnten diese Daten verwenden, um sich als jemand anderes auszugeben oder Profile zu erstellen.
protect-your-privacy = Schütze deine Online-Privatsphäre
no-pw-to-change = Im Gegensatz zu einem Website-Leak gibt es hier kein Password, das geändert werden kann.
avoid-personal-info = Nutze keine persönlichen Infos in Passwörtern
avoid-personal-info-blurb = Geburtstage, Adressen und Namen von Familienmitgliedern lassen sich online schnell finden. Nutze solche Infos nicht als Teil deiner Passwörter.

## What to do after data breach tips

change-pw = Ändere dein Passwort
even-for-old = Auch für ältere Accounts sollten Passwörter erneuert werden.
make-new-pw-unique = Das neue Passwort sollte anders und einzigartig sein.
strength-of-your-pw = Die Stärke deines Passworts hat direkte Auswirkungen auf deine Online-Sicherheit.
create-strong-passwords = So erstellst du starke Passwörter
stop-reusing-pw = Benutze nie dieselben Passwörter für unterschiedliche Accounts
create-unique-pw = Erstelle einzigartige Passwörter und speichere sie an einem sicheren Ort. Zum Beispiel in einem Passwort-Manager.
five-myths = 5 Mythen über Passwort-Manager
create-a-fxa = Erstelle ein { -brand-fxa }, um deinen kompletten Bericht zu Datenlecks und zukünftige Warnmeldungen zu erhalten.
feat-security-tips = Sicherheitstipps, die deine Konten schützen
feat-sensitive = Erweiterte Suche in sensiblen Datenlecks
feat-enroll-multiple = Lass mehrere E-Mail-Adressen überprüfen
sign-up-for-fxa = Erstelle ein { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Erscheint in { $breachCount } bekannten Datenleck.
       *[other] Erscheint in { $breachCount } bekannten Datenlecks.
    }
see-if-breached = Überprüfe, ob du von einem Datenleck betroffen bist.
check-for-breaches = Auf Datenlecks überprüfen
find-out-what-hackers-know = Finde heraus, was Hacker bereits über dich wissen und erfahre, wie du ihnen in Zukunft einen Schritt voraus sein kannst.
search-for-your-email = Suche in bekannt gewordenen Datenlecks seit 2007 nach deiner E-Mail-Adresse.
back-to-top = Zurück zum Anfang
comm-opt-0 = Sende mir eine E-Mail, sobald eine der folgenden E-Mail-Adressen in einem Datenleck auftaucht.
comm-opt-1 = Sende alle Warnmeldungen an { $primaryEmail }.
stop-monitoring-this = Diese E-Mail-Adresse nicht mehr überprüfen.
resend-verification = Bestätigungs-Mail erneut versenden
add-new-email = Neue E-Mail-Adresse hinzufügen
send-verification = Link zum Bestätigen senden
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Zusammenfassung der Datenlecks
show-breaches-for-this-email = Zeige alle Datenlecks für diese E-Mail-Adresse.
link-change-primary = Primäre E-Mail-Adresse ändern
remove-fxm = { -product-name } entfernen
remove-fxm-blurb = Warnmeldungen für { -product-name } abbestellen. Dein { -brand-fxa } bleibt aktiv und du erhältst diesbezüglich weiterhin Benachrichtigungen.
manage-email-addresses = E-Mail-Adressen verwalten
latest-breach-link = Überprüfe, ob du von diesem Datenleck betroffen warst
welcome-back = Willkommen zurück, { $userName }
welcome-user = Willkommen, { $userName }
breach-alert-subject = { -product-name } hat deine E-Mail-Adresse in einem neuen Datenleck entdeckt.
your-info-was-discovered-headline = Deine Daten wurden in einem neuen Datenleck entdeckt.
your-info-was-discovered-blurb = Du hast dich für Warnmeldungen von { -product-name } angemeldet, sollte deine E-Mail-Adresse in einem Datenleck auftauchen. Folgendes wissen wir über dieses Leck.
what-to-do-after-breach = Was ist nach einem Datenleck zu tun?
ba-next-step-1 = Ändere deine Passwort. Das neue Passwort sollte stark und einzigartig sein.
ba-next-step-blurb-1 = Ein starkes Passwort besteht aus einer Kombination aus Groß- und Kleinbuchstaben, Sonderzeichen und Zahlen. Es enthält keine persönlichen Informationen wie Adressen, Geburtstage oder Familiennamen.
ba-next-step-2 = Das offengelegte Passwort solltest du gar nicht mehr benutzen.
ba-next-step-blurb-2 = Cyber-Kriminelle könnten dein Passwort im Dark Web finden und sich damit bei deinen anderen Konten anmelden. Der beste Weg, deine Konten zu schützen, ist die Verwendung unterschiedlicher Passwörter für jedes einzelne Konto.
ba-next-step-3 = Hol dir Unterstützung beim Erstellen und Sichern deiner Passwörter.
ba-next-step-blurb-3 = Ein Passwort-Manager hilft dir, einzigartige Passwörter zu erstellen. Er speichert alle deine Zugangsdaten sicher ab, sodass du von allen deinen Geräte aus darauf zugreifen kannst.
faq1 = Ich kenne dieses Unternehmen oder die Website nicht. Warum bin ich von dem Datenleck betroffen?
faq2 = Warum hat es so lange gedauert, mich über dieses Datenleck zu informieren?
faq3 = Woher weiß ich, dass diese E-Mail auch wirklich von { -product-name } stammt?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NEUES DATENLECK GEFUNDEN
       *[other] { $breachCount } NEUE DATENLECKS GEFUNDEN
    }
sign-up-headline-1 = Erhalte zukünftige Warnmeldungen mit einem { -brand-fxa }.
account-not-required = Der { -brand-name } Browser ist für ein { -brand-fxa } nicht erforderlich. Du erhältst eventuell Informationen zu { -brand-Mozilla } Diensten.
get-alerted = Erhalte Warnmeldungen zu neuen Datenlecks.
was-your-info-exposed = Wurden Informationen von dir im { $breachName } Datenleck offengelegt?
find-out-if = Finder heraus, ob deine Daten in diesem Datenleck gefährdet wurden.
fb-not-comp = Diese E-Mail-Adresse erschien nicht im { $breachName } Datenleck.
other-breaches-found =
    { $breachCount ->
        [one] Sie erschien jedoch in { $breachCount } anderen Datenleck.
       *[other] Sie erschien jedoch in { $breachCount } anderen Datenlecks.
    }
fb-comp-only = Diese E-Mail-Adresse wurde im { $breachName } Datenleck gefunden.
fb-comp-and-others =
    { $breachCount ->
        [one] Diese E-Mail-Adresse wurde in { $breachCount } bekannt gewordenen Datenlecks gefunden, einschließlich { $breachName }.
       *[other] Diese E-Mail-Adresse wurde in { $breachCount } bekannt gewordenen Datenlecks gefunden, einschließlich { $breachName }.
    }
no-other-breaches-found = Es wurden keine weiteren Datenlecks in der einfachen Suche gefunden.
no-results-blurb = Sorry, dieses Datenleck ist nicht in unserer Datenbank.
all-breaches-headline = Alle Datenlecks in { -product-name }
search-breaches = Datenlecks suchen
# "Appears in-page as: Showing: All Breaches"
currently-showing = Angezeigt:
all-breaches = Alle Datenlecks

## Updated error messages

error-bot-headline = Suchen vorübergehend eingestellt
error-bot-blurb = Wir befürchten, dass du ein Bot bist, weil du in sehr kurzer Zeit mehrere E-Mail-Adressen durchsucht hast. Im Moment bist du für neue Suchanfragen gesperrt. Du kannst es später noch einmal versuchen.
error-csrf-headline = Zeitüberschreitung der Sitzung
error-csrf-blurb = Klicke in deinem Browser auf "Zurück", lade die Seite neu und versuche es noch einmal.
error-invalid-unsub = So meldest du dich für Warnmeldungen von { -product-name } ab
error-invalid-unsub-blurb = Melde dich über eine der E-Mails, die du von { -product-name } erhalten hast ab. Suche in deinem Posteingang nach Mails von { -brand-team-email } und klicke anschließend auf den Link zum Abmelden am Ende der E-Mail.
login-link-pre = Du hast ein Konto?
login-link = Einloggen
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] E-Mail-Adresse wird überprüft
       *[other] E-Mail-Adressen werden überprüft
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Datenleck hat Informationen von dir offengelegt
       *[other] Datenlecks haben Informationen von dir offengelegt
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Passwort wurde in allen Datenlecks offengelegt
       *[other] Passwörter wurden in allen Datenlecks offengelegt
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] bekanntes Datenleck hat Ihre Daten preisgegeben
       *[other] bekannte Datenlecks haben Ihre Daten preisgegeben
    }
# Button
see-additional-breaches = Zeige weitere Datenlecks
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Zeige alle Datenlecks
scan-results-known-breaches =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist in 1 bekannt gewordenen Datenleck aufgetaucht.
       *[other] Diese E-Mail-Adresse ist in { $breachCount } bekannt gewordenen Datenlecks aufgetaucht.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Ergebnisse für: { $userEmail }
other-monitored-emails = Weitere überprüfte E-Mail-Adressen
email-verification-required = E-Mail-Verifizierung erforderlich
fxa-primary-email = { -brand-fxa } E-Mail-Adresse - Primär
what-is-a-website-breach = Was ist eine Website-Datenleck?
website-breach-blurb = Ein Datenleak einer Website liegt vor, wenn Cyber-Kriminelle persönliche Daten aus Online-Konten stehlen, kopieren oder offenlegen. Das passiert meist dann, wenn Hacker eine Schwachstelle in der Sicherheit der Website finden. Es kann aber auch vorkommen, dass Kontoinformationen versehentlich geleakt werden.
security-tips-headline = Sicherheitstipps, die dich vor Hackern schützen
steps-to-protect = Das kannst du tun, um deine Online-Identität zu schützen
take-further-steps = Weitere Schritte, um deine Identität zu schützen
alert-about-new-breaches = Ich möchte bei neuen Datenlecks gewarnt werden
see-if-youve-been-part = Überprüfe, ob du schon einmal von einem Datenleck betroffen warst.
get-ongoing-breach-monitoring = Lass mehrere E-Mail-Adressen kontinuierlich überprüfen.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Jetzt überprüfen
new-unsub-error = Melde dich über eine der E-Mails von { -product-name } ab.
other-known-breaches-found =
    { $breachCount ->
        [one] Sie erschien jedoch in { $breachCount } anderen Datenleck.
       *[other] Sie erschien jedoch in { $breachCount } anderen Datenlecks.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Zusätzliche Information, einschließlich:
# Title
email-addresses-title = E-Mail-Adressen
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = Am { $breachDate } gab es bei { $breachTitle } ein Datenleck. Nachdem das Datenleck entdeckt und bestätigt wurde, wurde es am { $addedDate } unserer Datenbank hinzugefügt.
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name } Einstellungen
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Als { $userEmail } angemeldet
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtern nach Kategorie:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menü
to-affected-email = Benachrichtigungen über Datenlecks an die betroffene E-Mail-Adresse schicken
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Es gibt einen Weg, deine Privatsphäre zu schützen. Komm zu { -brand-name }.
# Link title
learn-more-link = Mehr erfahren.
email-sent = E-Mail gesendet!
# Form title
want-to-add = Weitere E-Mail-Adresse hinzufügen?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Bestätigen Sie den Link der an { $userEmail } gesendet wurde, um sie zu { -product-name } hinzuzufügen.
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Verwalten Sie alle E-Mail-Adressen in { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Datenleck-Warnmeldungen
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Datenleck hinzugefügt:
