# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
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
error-scan-page-token = Sie haben versucht, zu viele E-Mail-Adressen in kurzer Zeit zu überprüfen. Aus Sicherheitsgründen haben wir Sie vorübergehend für neue Suchanfragen gesperrt. Sie können es später erneut versuchen.
error-could-not-add-email = E-Mail-Adresse konnte nicht zur Datenbank hinzugefügt werden.
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
user-add-email-verify-subject = Bestätige dein Abonnement für { -product-name }.
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
signup-modal-blurb = Wenn du dich mit deinem Firefox-Konto anmeldest, erhältst du einen vollständigen Bericht, zukünftige Warnmeldungen bei Datenlecks und Sicherheitstipps von { -product-name-nowrap }.
signup-modal-close = Schließen
get-your-report = Holen dir sich deinen Bericht
signup-modal-verify-headline = Bestätige dein Abonnement
signup-modal-verify-blurb = Wir haben einen Bestätigungslink an <span id="submitted-email" class="medium"></span> geschickt.
signup-modal-verify-expiration = Dieser Link läuft in 24 Stunden ab.
signup-modal-verify-resend = Weder in deinem Posteingang noch im Spam-Ordner? Erneut senden.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Gesendet!
signup-with-fxa = Melde dich mit { -brand-name }-Konto an
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
confirmed-social-blurb = Wenn Sie von einem Datenleck betroffen sind, sind Ihre Freunde, Ihre Familie oder Ihre Online-Kontakte es wahrscheinlich auch. Erzählen Sie ihnen von { -product-name-nowrap }.
unsub-headline = Abonnement von { -product-name-nowrap } löschen
unsub-blurb = Dadurch wird Ihre E-Mail-Adresse aus der Liste { -product-name-nowrap } entfernt und Sie erhalten keine Benachrichtigungen mehr, wenn neue Datenlecks gemeldet werden.
unsub-button = Abonnement entfernen
fxa-unsub-headline = Warnmeldungen von { -product-name } abbestellen.
fxa-unsub-blurb =
    Sie erhalten keine Warnmeldungen von { -product-name } mehr.
    Ihr { -brand-fxa } bleibt aber aktiv und Sie können andere Informationen
    mit Bezug zu Ihrem Konto erhalten.
unsub-survey-form-label = Warum melden Sie sich von Warnungen zu { -product-name-nowrap } ab?
unsub-reason-1 = Ich glaube nicht, dass Warnungen meine Daten sicherer machen
unsub-reason-2 = Ich erhalten zu viele E-Mails von { -product-name-nowrap }
unsub-reason-3 = Ich finde diesen Dienst nicht nützlich
unsub-reason-4 = Ich habe bereits Schritte unternommen, um meine Konten zu schützen
unsub-reason-5 = Ich verwende einen anderen Dienst, um meine Konten zu überwachen
unsub-reason-6 = Nichts davon
unsub-survey-thankyou = Vielen Dank für Ihre Rückmeldung.
unsub-survey-error = Bitte wählen Sie einen Punkt aus.
unsub-survey-headline-v2 = Ihr Abonnement wurde entfernt.
unsub-survey-blurb-v2 =
    Sie erhalten  keine Warnmeldungen von { -product-name } mehr.
    Beantworten Sie uns kurz eine Frage über Ihre Erfahrung?
unsub-survey-button = Antwort absenden
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
# Breach data provided by Have I Been Pwned.
hibp-attribution = Informationen zum Datenleck stammen von { $hibp-link }
site-description = Wurden Ihre Kontodaten bei einem Datenleck öffentlich bekannt oder gestohlen? Erfahren Sie es mit { -product-name }. Durchsuchen Sie unsere Datenbank und abonnieren Sie die Warnungen.
confirmation-headline = Ihr Bericht für { -product-name } ist unterwegs.
confirmation-blurb = Datenlecks können jeden betreffen. Erzählen Sie anderen davon, sodass Ihre Freunde und Familie überprüfen können, ob ihre Online-Konten sicher sind.
share-email = E-Mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Andere
share-twitter = Die meisten Leute haben ungefähr 100 Online-Konten. Wurde eines von Ihnen bei einem Datenleck geknackt? Finden Sie es heraus.
share-facebook-headline = Erfahren Sie, ob Sie von einem Datenleck betroffen sind
share-facebook-blurb = Wurden Ihre Online-Konten bei einem Datenleck geknackt?
og-site-description = Erfahren Sie mit { -product-name }, ob Sie von einem Datenleck betroffen sind. Abonnieren Sie Warnungen zu zukünftigen Lecks und erhalten Sie Tipps zum Schutz Ihrer Konten.
mozilla-security-blog = { -brand-Mozilla } Sicherheitsblog
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Soziale Medien
show-all = Alle anzeigen
fxa-landing-blurb =
    Finden Sie heraus, was Hacker bereits über Sie wissen
    und erfahren Sie, wie Sie ihnen einen Schritt voraus sein können.
fxa-scan-label = Sehen Sie, ob Sie von einem Datenleck betroffen sind.
fxa-welcome-headline = Willkommen bei { -product-name }.
fxa-welcome-blurb = Sie können jetzt benachrichtigt werden, wenn { $userEmail } von einem Datenleck betroffen ist.
fxa-scan-another-email = Soll noch eine andere E-Mail-Adresse überprüft werden?
# Search Firefox Monitor
fxa-scan-submit = { -product-name } durchsuchen
sign-up-to-check = Registrieren Sie sich, um die Überprüfung durchzuführen
sign-in = Anmelden
sign-out = Abmelden
full-report-headline = Ihr Bericht von { -product-name }
see-full-report = Vollständigen Bericht anzeigen
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } verwalten
fxa-download-firefox-bar-blurb = Entwickelt von { -brand-name }. Doppelt so schnell. Nutzt 30% weniger Speicher als { -brand-Chrome }.
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
user-no-breaches-blurb = Wir benachrichtigen Sie, wenn diese E-Mail-Adresse von einem neuen Datenleck betroffen ist.
guest-no-breaches-blurb =
    Erstellen Sie ein { -brand-fxa }, um zu sehen, ob diese E-Mail-Adresse von sensiblen Datenlecks betroffen ist.
    Wir benachrichtigen Sie auch, wenn diese Adresse von neuen Datenlecks betroffen ist.
user-one-breach-blurb = Dieses Datenleck enthielt die folgenden persönlichen Daten.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Ihre E-Mail-Adresse ist auch von { $breachCount } anderem Datenleck betroffen.
       *[other] Ihre E-Mail-Adresse ist auch von { $breachCount } anderen Datenlecks betroffen.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist auch von { $breachCount } anderem Datenleck betroffen.
       *[other] Diese E-Mail-Adresse ist auch von { $breachCount } anderen Datenlecks betroffen.
    }
user-fb-compromised-single =
    Dieses Datenleck enthielt die folgenden persönlichen Daten. Ändern Sie Ihre Passwörter,
    wenn nicht bereits geschehen.
user-generic-fb-compromised-single = Dieses Datenleck enthielt die folgenden persönlichen Daten.
guest-fb-compromised-single-v2 =
    Dieses Datenleck enthielt die folgenden persönlichen Daten.
    Erstellen Sie ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über neue Datenlecks
    und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist auch von { $breachCount } anderem Datenleck betroffen. Erstellen Sie ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über neue Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
       *[other] Diese E-Mail-Adresse ist auch von { $breachCount } anderen Datenlecks betroffen. Erstellen Sie ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über neue Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Sie sind nicht vom Datenleck { $breachName } betroffen, die E-Mail-Adresse taucht aber in einem anderen auf.
       *[other] Sie sind nicht vom Datenleck { $breachName } betroffen, die E-Mail-Adresse taucht aber in mehreren anderen auf.
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
            Erstellen Sie ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über neue Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
       *[other]
            Diese E-Mail-Adresse ist nicht vom Datenleck { $breachName } betroffen, aber von mehreren anderen.
            Erstellen Sie ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über neue Datenlecks und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Dieses Datenleck enthielt die folgenden persönlichen Daten. Ändern Sie Ihr Passwort, wenn nicht bereits geschehen.
       *[other] Dieses Datenleck enthielt die folgenden persönlichen Daten. Ändern Sie Ihre Passwörter, wenn nicht bereits geschehen.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Dieses Datenleck enthielt die folgenden persönlichen Daten.
       *[other] Diese Datenlecks enthielten die folgenden persönlichen Daten.
    }
have-an-account = Haben Sie schon ein Konto?
signup-banner-sensitive-blurb =
    Finden Sie heraus, was Hacker bereits über Sie wissen
    und erfahren Sie, wie Sie ihnen einen Schritt voraus sein können. Lassen Sie sich
    benachrichtigen, wenn Ihr Konto von neuen Datenlecks betroffen ist.
fxa-pwt-section-blurb =
    Passwörter schützen alle persönlichen Daten in Ihren Online-Konten. Und
    Hacker verlassen sich auf schlechte Angewohnheiten, wie die Wiederverwendung von Passwörtern
    oder häufige Ausdrücke (wie @p@ssw0rt), sodass nicht nur ein Konto, sondern
    mehrere geknackt werden.
fxa-pwt-summary-2 =
    Kurze, aus einem Wort bestehende Passwörter sind für Hacker leicht zu erraten.
    Verwenden Sie mindestens zwei Wörter und eine Kombination aus Buchstaben, Ziffern und Sonderzeichen.
fxa-pwt-summary-4 =
    Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden speichern Ihre
    Passwörter und tragen diese auf Websites für Sie ein. Sie helfen Ihnen sogar dabei, sichere Passwörter zu erstellen.
fxa-pwt-summary-6 =
    Datenlecks nehmen zu. Wenn Ihre persönlichen Daten von einem neuen Datenleck betroffen sind,
    benachrichtigt { -product-name } Sie – damit Sie Maßnahmen ergreifen und Ihre Konten schützen können.
fxa-what-to-do-blurb-1 =
    Wenn Sie sich nicht anmelden können, wenden Sie sich an die Website und fragen Sie nach.
    Fällt Ihnen ein unbekanntes Konto auf? Vielleicht wurden Ihre Daten verkauft oder weitergegeben.
    Vielleicht haben Sie das Konto auch nur vergessen oder das Unternehmen hat seinen Namen geändert.
fxa-what-to-do-subhead-2 = Benutzen Sie das offengelegte Passwort nicht mehr und ändern Sie es überall, wo Sie es verwendet haben.
fxa-wtd-blurb-2 =
    Hacker versuchen möglicherweise, dasselbe Passwort und Ihre E-Mail-Adresse zum Zugriff auf andere Konten zu verwenden.
    Erstellen Sie für jedes Konto ein anderes und einzigartiges Passwort, insbesondere für Ihr Bankkonto, Ihre E-Mail-Adresse und andere Websites, auf denen Sie persönliche Daten speichern.
fxa-what-to-do-blurb-3 =
    Bei den meisten Verstößen werden nur E-Mails und Passwörter erbeutet, bei einigen jedoch auch vertrauliche Bankdaten.
    Wenn Ihre Bankkonto- oder Kreditkartennummern von einem Datenleck offengelegt wurden, warnen Sie Ihre Bank vor möglichen Betrugsfällen und überwachen Sie die Kontoauszüge auf Transaktionen, die Sie nicht kennen.
fxa-what-to-do-subhead-4 = Holen Sie sich Hilfe, wenn Sie sich Ihre Passwörter merken und sie schützen müssen.
fxa-what-to-do-blurb-4 =
    Passwort-Manager wie 1Password, LastPass, Dashlane und Bitwarden speichern Ihre
    Passwörter sicher und tragen diese auf Websites für Sie ein. Nutzen Sie einen Passwort-Manager
    auf Ihrem Handy und Ihrem Computer, damit Sie sich nicht alle merken müssen.
fb-landing-headline = Waren Ihre Daten vom Datenleck { $breachName } betroffen?
copyright = Teile dieses Inhalts stehen unter einem ©1999–%(current_year)s von einzelnen Mitwirkenden an mozilla.org.
content-available = Der Inhalt steht unter einer Creative-Commons-Lizenz.
# Alerts is a noun
sign-up-for-alerts = Warnmeldungen abonnieren
sign-up-for-fxa-alerts = Abonnieren Sie Warnmeldungen von { -product-name }.
create-free-account =
    Erstellen Sie ein kostenloses { -brand-fxa }, um einen vollständigen Bericht über vergangene Datenlecks, Warnungen über neue Datenlecks
    und Informationen über andere { -brand-Mozilla }-Dienste zu erhalten.
get-your-report-and-sign-up = Holen Sie sich Ihren Bericht und abonnieren Sie Warnmeldungen.
# Link title
frequently-asked-questions = Häufig gestellte Fragen
