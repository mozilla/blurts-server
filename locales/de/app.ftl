# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox-Konto
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Du hast versucht, zu viele E-Mail-Adressen in kurzer Zeit zu überprüfen. Aus Sicherheitsgründen haben wir dich vorübergehend für neue Suchanfragen gesperrt. Du kannst es später erneut versuchen.
error-could-not-add-email = E-Mail-Adresse konnte nicht zur Datenbank hinzugefügt werden.
error-not-subscribed = Diese E-Mail-Adresse hat { -product-name } nicht abonniert.
error-hibp-throttled = Zu viele Verbindungen mit { -brand-HIBP }.
error-hibp-connect = Fehler beim Verbinden mit { -brand-HIBP }.
error-hibp-load-breaches = Sicherheitslecks konnten nicht geladen werden.
error-must-be-signed-in = Du musst bei deinem { -brand-fxa } angemeldet sein.
error-to-finish-verifying = Um die Verifikation dieser E-Mail-Adresse für { -product-name } abzuschließen, musst du mit deinem primären E-Mail-Konto eingeloggt sein.
home-title = { -product-name }
home-not-found = Seite nicht gefunden.
oauth-invalid-session = Ungültige Sitzung
scan-title = { -product-name }: Scan-Ergebnisse
user-add-invalid-email = Ungültige E-Mail-Adresse
user-add-too-many-emails = Du überwachst die maximale Anzahl von E-Mail-Adressen.
user-add-email-verify-subject = Bestätige deine Anmeldung für { -product-name }.
user-add-duplicate-email = Diese E-Mail-Adresse wurde schon zu { -product-name } hinzugefügt.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Öffne deine { $preferencesLink }, um den Status der { $userEmail } zu überprüfen.
user-add-verification-email-just-sent = Eine weitere Verifizierungs-E-Mail kann nicht so schnell gesendet werden. Bitte versuchen Sie es später erneut.
user-add-unknown-error = Beim Hinzufügen einer weiteren E-Mail-Adresse ist etwas schiefgegangen. Bitte versuchen Sie es später erneut.
user-delete-unknown-error = Beim Entfernen einer E-Mail-Adresse ist etwas schiefgegangen. Bitte versuchen Sie es später erneut.
error-headline = Fehler
user-verify-token-error = Verifikations-Token wird benötigt.
user-verify-email-report-subject = Dein Bericht für { -product-name }
user-unsubscribe-token-error = Das Abbestellen erfordert ein Token.
user-unsubscribe-token-email-error = Das Abbestellen erfordert ein Token und emailHash.
user-unsubscribe-title = { -product-name }: Abbestellen
pwt-section-headline = Stärkere Passwörter = besserer Schutz
landing-headline = Dein Schutz vor Hackern beginnt hier
scan-placeholder = E-Mail-Adresse eingeben
scan-submit = Nach deiner E-Mail-Adresse suchen
scan-error = Muss eine gültige E-Mail-Adresse sein.
download-firefox-banner-button = Download { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Gesendet!
sign-up = Anmelden
form-signup-error = Muss eine gültige E-Mail-Adresse sein
# breach-date = the calendar date a particular data theft occurred.
breach-date = Datum des Lecks:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Kompromittierte Konten:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromittierte Daten:
unsub-headline = Abonnement für Meldungen von { -product-name-nowrap } löschen
unsub-blurb = Dadurch wird deine E-Mail-Adresse aus der Liste { -product-name-nowrap } entfernt und du erhältst keine Benachrichtigungen mehr, wenn neue Datenlecks gemeldet werden.
unsub-button = Abmelden
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Informationen zum Datenleck stammen von { $hibp-link }
share-twitter = Die meisten Menschen haben circa 100 Online-Konten. Wurde eines deiner Konten bei einem Datenleck geknackt? Finde es heraus.
share-facebook-headline = Überprüfe, ob du von einem Datenleck betroffen bist.
share-facebook-blurb = Wurden deine Online-Konten bei einem Datenleck geknackt?
og-site-description = Überprüfe mit { -product-name }, ob du von einem Datenleck betroffen bist. Melde dich für Warnungen zu zukünftigen Datenlecks an und erhalte Tipps zum Schutz deiner Online-Konten.
show-all = Alle anzeigen
fxa-scan-another-email = Soll noch eine andere E-Mail-Adresse überprüft werden?
sign-out = Ausloggen
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } verwalten
have-an-account = Du hast schon ein Konto?
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
# Alerts is a noun
sign-up-for-alerts = Warnmeldungen erhalten
# Link title
frequently-asked-questions = Häufig gestellte Fragen
about-firefox-monitor = Über { -product-name }
# Link title
preferences = Einstellungen
# Link title
home = Startseite
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
delayed-reporting-headline = Warum hat es so lange gedauert, bis dieses Leck gemeldet wurde?
delayed-reporting-copy = Es kann manchmal Monate oder Jahre dauern, bis offengelegte Daten aus einem Datenleck im Dark Web auftauchen. Lecks werden, sobald sie entdeckt und verifiziert wurden, zu unserer Datenbank hinzugefügt.
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
change-pw-site = Passwort für diese Website ändern
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Erscheint in { $breachCount } bekannten Datenleck.
       *[other] Erscheint in { $breachCount } bekannten Datenlecks.
    }
check-for-breaches = Auf Datenlecks überprüfen
find-out-what-hackers-know = Finde heraus, was Hacker bereits über dich wissen und erfahre, wie du ihnen in Zukunft einen Schritt voraus sein kannst.
get-email-alerts = Auf Nummer sicher gehen: Erhalten Sie E-Mail-Benachrichtigungen, wenn Sie von einem Datenleck betroffen sind
search-for-your-email = Suche in bekannt gewordenen Datenlecks seit 2007 nach deiner E-Mail-Adresse.
back-to-top = Zurück zum Anfang
comm-opt-0 = Sende mir eine E-Mail, sobald eine der folgenden E-Mail-Adressen in einem Datenleck auftaucht.
# Variables:
#   $primaryEmail (String) - User primary email address
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
# Button title
manage-email-addresses = E-Mail-Adressen verwalten
# Link title
latest-breach-link = Überprüfe, ob du von diesem Datenleck betroffen warst

## Variables:
##   $userName (String) - Username

welcome-back = Willkommen zurück, { $userName }
welcome-user = Willkommen, { $userName }

##

breach-alert-subject = { -product-name } hat deine E-Mail-Adresse in einem neuen Datenleck entdeckt.
your-info-was-discovered-headline = Deine Daten wurden in einem neuen Datenleck entdeckt.
your-info-was-discovered-blurb = Du hast dich für Warnmeldungen von { -product-name } angemeldet, sollte deine E-Mail-Adresse in einem Datenleck auftauchen. Folgendes wissen wir über dieses Leck.
what-to-do-after-breach = Was ist nach einem Datenleck zu tun?
ba-next-step-1 = Ändere dein Passwort. Das neue Passwort sollte stark und einzigartig sein.
ba-next-step-blurb-1 = Ein starkes Passwort besteht aus einer Kombination aus Groß- und Kleinbuchstaben, Sonderzeichen und Zahlen. Es enthält keine persönlichen Informationen wie Adressen, Geburtstage oder Familiennamen.
ba-next-step-2 = Das offengelegte Passwort solltest du gar nicht mehr benutzen.
ba-next-step-blurb-2 = Cyber-Kriminelle könnten dein Passwort im Dark Web finden und sich damit bei deinen anderen Konten anmelden. Der beste Weg, deine Konten zu schützen, ist die Verwendung unterschiedlicher Passwörter für jedes einzelne Konto.
ba-next-step-3 = Hol dir Unterstützung beim Erstellen und Sichern deiner Passwörter.
ba-next-step-blurb-3 = Ein Passwort-Manager hilft dir, einzigartige Passwörter zu erstellen. Er speichert alle deine Zugangsdaten sicher ab, sodass du von allen deinen Geräte aus darauf zugreifen kannst.
faq1 = Ich kenne dieses Unternehmen oder die Website nicht. Warum bin ich von dem Datenleck betroffen?
faq2 = Warum hat es so lange gedauert, mich über dieses Datenleck zu informieren?
faq3 = Woher weiß ich, dass diese E-Mail auch wirklich von { -product-name } stammt?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NEUES DATENLECK GEFUNDEN
       *[other] { $breachCount } NEUE DATENLECKS GEFUNDEN
    }
sign-up-headline-1 = Erhalte zukünftige Warnmeldungen mit einem { -brand-fxa }.
account-not-required = Der { -brand-name } Browser ist für ein { -brand-fxa } nicht erforderlich. Du erhältst eventuell Informationen zu { -brand-Mozilla } Diensten.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Wurden Informationen von dir im { $breachName } Datenleck offengelegt?
fb-not-comp = Diese E-Mail-Adresse erschien nicht im { $breachName } Datenleck.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Sie erschien jedoch in { $breachCount } anderen Datenleck.
       *[other] Sie erschien jedoch in { $breachCount } anderen Datenlecks.
    }
fb-comp-only = Diese E-Mail-Adresse wurde im { $breachName } Datenleck gefunden.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Diese E-Mail-Adresse wurde in { $breachCount } bekannt gewordenen Datenlecks gefunden, einschließlich { $breachName }.
       *[other] Diese E-Mail-Adresse wurde in { $breachCount } bekannt gewordenen Datenlecks gefunden, einschließlich { $breachName }.
    }

##

no-other-breaches-found = Es wurden keine weiteren Datenlecks in der einfachen Suche gefunden.
no-results-blurb = Sorry, dieses Datenleck ist nicht in unserer Datenbank.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Ihre E-Mail-Adresse ist von diesem Leck nicht betroffen,
    Ihre Telefonnummer kann aber trotzdem angreifbar sein.</span> Einige der Konten,
    die vom Facebook-Leck betroffen sind, enthalten Telefonnummern und andere
    persönliche Daten, jedoch keine E-Mail-Adressen. Wenn Sie sich jemals für ein
    Facebook-Konto registriert haben – auch wenn Sie es jetzt nicht nutzen –, sollten Sie
    sich folgendermaßen schützen
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Setzen Sie Ihre Informationen in <a>Ihrem Facebook-Profil</a> auf „Nur ich“ oder eine andere nicht öffentliche Einstellung.</span>
facebook-breach-what-to-do-1-copy =
    Bei diesem Leck haben Hacker Profildaten
    erbeutet, die „öffentlich sichtbar“ oder „mit Freunden geteilt“ wurden.
    Diese Daten können mit anderen Daten kombiniert werden, um auf 
    weitere persönliche Daten oder Konten zuzugreifen.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Ändern Sie das Passwort, die PIN oder andere Sicherheitsanmeldeinformationen auf den
    <a>Konten Ihres Mobilfunkanbieters</a>, um das Austauschen von SIM-Karten</span> zu verhindern.
facebook-breach-what-to-do-2-copy =
    SIM-Swapping, auch SIM-Jacking genannt,
    bedeutet, dass ein Hacker Telefonnummern, Geburtsdatum und andere Daten verwendet,
    um die Handynummer einer Person zu übernehmen und dann ihre E-Mail-, Social-Media- und sogar Bankkonten zu hacken.
facebook-breach-what-to-do-3 = Alle Empfehlungen finden Sie auf unserer Informationsseite zum Facebook-Leck.
# "Appears in-page as: Showing: All Breaches"
currently-showing = Angezeigt:

## Updated error messages

error-bot-headline = Suchen vorübergehend eingestellt
error-bot-blurb = Wir befürchten, dass du ein Bot bist, weil du in sehr kurzer Zeit mehrere E-Mail-Adressen durchsucht hast. Im Moment bist du für neue Suchanfragen gesperrt. Du kannst es später noch einmal versuchen.
error-csrf-headline = Zeitüberschreitung der Sitzung
error-csrf-blurb = Klicke in deinem Browser auf "Zurück", lade die Seite neu und versuche es noch einmal.
error-invalid-unsub = So meldest du dich für Warnmeldungen von { -product-name } ab
error-invalid-unsub-blurb = Melde dich über eine der E-Mails, die du von { -product-name } erhalten hast ab. Suche in deinem Posteingang nach Mails von { -brand-team-email } und klicke anschließend auf den Link zum Abmelden am Ende der E-Mail.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] E-Mail-Adresse wird überprüft
       *[other] E-Mail-Adressen werden überprüft
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
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Diese E-Mail-Adresse ist in 1 bekannt gewordenen Datenleck aufgetaucht.
       *[other] Diese E-Mail-Adresse ist in { $breachCount } bekannt gewordenen Datenlecks aufgetaucht.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Ergebnisse für: { $userEmail }
other-monitored-emails = Weitere überprüfte E-Mail-Adressen
email-verification-required = E-Mail-Verifizierung erforderlich
fxa-primary-email = { -brand-fxa } E-Mail-Adresse - Primär
what-is-a-website-breach = Was ist ein Website-Datenleck?
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
# Variables:
#   $breachCount (Integer) - Number of breaches
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
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Übersicht
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Am { $breachDate } gab es bei { $breachTitle } ein Datenleck. Nachdem das Datenleck entdeckt und bestätigt wurde, wurde es am { $addedDate } unserer Datenbank hinzugefügt.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } Einstellungen
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
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
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Bestätigen Sie den Link der an { $userEmail } gesendet wurde, um sie zu { -product-name } hinzuzufügen.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-Mail-Adresse erfolgreich bestätigt!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Wir benachrichtigen Sie, wenn { $email } von einem Datenleck betroffen ist.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Um alle E-Mail-Adressen anzuzeigen und zu verwalten, die Sie für die Überwachung von Datenlecks angemeldet haben, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = melden Sie sich an

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
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
how-hackers-work-desc = Schütze deine Passwörter vor Cyberkriminellen – darauf haben sie es besonders abgesehen.
what-to-do-after-breach-desc = Sichere deine Konten, um zu verhindern, dass deine Daten in die falschen Hände gelangen.
create-strong-passwords-desc = Verwende starke, sichere und schwer zu erratene Passwörter.
steps-to-protect-desc = Verstehe die häufigsten Bedrohungen und erfahre, worauf du achten musst.
five-myths-desc = Erfahre, wie du schlechte Passwort-Gewohnheiten vermeidest, die die Arbeit eines Hackers erleichtern.
take-further-steps-desc = Erfahre, wie du das Risiko eines Identitätsdiebstahls verringern kannst, um finanzielle Verluste zu vermeiden.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Änderungen gespeichert!
# Section headline
rec-section-headline = Was müssen Sie bei diesem Datenleck tun?
rec-section-subhead = Wir empfehlen Ihnen, diese Schritte zu unternehmen, um Ihre persönlichen Daten und Ihre digitale Identität zu schützen.
# Section headline
rec-section-headline-no-pw = Was tun, um Ihre persönlichen Daten zu schützen?
rec-section-subhead-no-pw = Obwohl bei diesem Datenleck keine Passwörter offengelegt wurden, können Sie dennoch Maßnahmen ergreifen, um Ihre persönlichen Daten besser zu schützen.
# Button
see-additional-recs = Siehe zusätzliche Empfehlungen

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } erscheint in diesem Datenleck. <a>Was sind die nächsten Schritte?</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } Ihrer E-Mail-Adressen erscheint in diesem Datenleck. <a>Was sind die nächsten Schritte?</a>
       *[other] { $numAffectedEmails } Ihrer E-Mail-Adressen erscheint in diesem Datenleck. <a>Was sind die nächsten Schritte?</a>
    }

##

marking-this-subhead = Dieses Datenleck als erledigt markieren
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Sobald Sie die bei diesem Datenleck erforderlichen Schritte umgesetzt haben</span>,
    können Sie es als erledigt markieren. Sie können jederzeit aus der Übersicht
    auf die Details dieses Datenlecks zugreifen.
mark-as-resolve-button = Als erledigt markieren
marked-as-resolved-label = Als erledigt markiert
undo-button = Rückgängig
confirmation-1-subhead = Sehr gut! Sie haben gerade Ihr erstes Datenleck erledigt.
confirmation-1-body = Weiter so. Sehen Sie in der Übersicht nach, ob noch mehr zu tun ist.
confirmation-2-subhead = Nehmt das, Hacker!
confirmation-2-body = Sie unternehmen wichtige Schritte zum Schutz Ihrer Online-Konten.
confirmation-3-subhead = Wieder eins weniger. Gut gemacht!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Ist Ihr neues Passwort eindeutig, sicher und schwer zu erraten? <a>Finden Sie es heraus.</a>
generic-confirmation-subhead = Dieses Datenleck wurde als erledigt markiert
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Rufen Sie Ihre Übersicht auf, um das verbleibende Datenleck zu sehen.
       *[other] Rufen Sie Ihre Übersicht auf, um die verbleibenden Datenlecks zu sehen.
    }
return-to-breach-details-link = Zurück zu den Details des Datenlecks
go-to-dashboard-link = Zur Übersicht
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% abgeschlossen
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } erledigt
       *[other] { $numResolvedBreaches } erledigt
    }
progress-intro-subhead = Neu in { -product-name }: Datenlecks als behoben markieren
progress-intro-message =
    Nachdem Sie die Details zu einem Datenleck überprüft und die notwendigen Schritte zum Schutz
    Ihrer persönlichen Daten ergriffen haben, können Sie Datenlecks als erledigt markieren.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } von { $numTotalBreaches } Datenlecks als erledigt markiert
       *[other] { $numResolvedBreaches } von { $numTotalBreaches } Datenlecks als erledigt markiert
    }
progress-complete = Alle bekannten Datenlecks wurden als erledigt markiert

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Das war schon sehr gut!</span> Sehen Sie nach den verbleibenden Datenlecks
    und erfahren Sie, was zu tun ist.
progress-message-2 =
    <span>Weiter so!</span> Kleine Schritte wie die Änderung Ihrer Passwörter sind
    sehr wichtig für den Schutz Ihrer persönlichen Daten.
progress-message-3 = <span>Sehr gut – diese Datenlecks sind erledigt!</span> Weiter so, ein paar sind noch übrig.
progress-message-4 = <span>Fast geschafft!</span> Sie sind gleich am Ziel.
progress-complete-message =
    <span>Fühlt sich gut an, oder?</span> Wenn Sie weiter machen wollen, sollten Sie jetzt
    andere Zugangsdaten mit stärkeren Passwörtern versehen.

##

resolve-this-breach-link = Dieses Datenleck als erledigt markieren
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Als erledigt markieren:
hide-resolved-button = Erledigte ausblenden
show-resolved-button = Erledigte anzeigen
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Passwort in nicht erledigten Datenlecks offengelegt
       *[other] Passwörter in nicht erledigten Datenlecks offengelegt
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Bekanntes Datenleck als erledigt markiert
       *[other] Bekannte Datenlecks als erledigt markiert
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Neu
mobile-promo-headline = { -brand-name } gibt es auch für Ihr Handy und Tablet
mobile-promo-body = Schnelles, privates und sicheres Surfen überall. Suchen Sie { -brand-name } im Google Play und App Store.
mobile-promo-cta = Holen Sie sich { -brand-name } für Android und iOS
promo-lockwise-headline = Nehmen Sie Ihre Passwörter überall mit.
lockwise-promo-body = Organisieren Sie Ihre Zugangsdaten auf allen Geräten. Greifen Sie von Ihrem Computer, Handy oder Tablet sicher darauf zu.
promo-lockwise-cta = Holen Sie sich { -brand-lockwise }
fpn-promo-headline = Verbergen Sie Ihren Standort vor Websites und Trackern
promo-fpn-body =
    { -brand-fpn } verbirgt Ihren Standort, um den Websites und Datensammlern,
    die Werbung auf Sie anpassen, die Arbeit zu erschweren.
promo-fpn-cta = Holen Sie sich { -brand-fpn }
monitor-promo-headline = Informieren Sie sich über neue Datenlecks
monitor-promo-body = Erhalten Sie Benachrichtigungen, wenn Ihre persönlichen Daten in einem neu bekanntgewordenen Datenleck enthalten sind.
ecosystem-promo-headline = Alle unsere Produkte schützen zuallererst Ihre Privatsphäre online
ecosystem-promo-body = Hinter all unseren { -brand-name }-Produkten, steht unser Versprechen für Ihre persönlichen Daten: Wenig sammeln. Sicher speichern. Ehrlich sein.
promo-ecosystem-cta = Alle Produkte ansehen
steps-to-resolve-headline = Schritte zur Behebung dieses Datenlecks
vpn-promo-headline = Jetzt ist es Zeit, Ihre Sicherheit im Internet zu erhöhen.
vpn-promo-copy = Das Virtual Private Network von { -brand-Mozilla } schützt Ihre Internetverbindung vor Hackern und Spionen.
vpn-promo-cta = Holen Sie sich { -brand-mozilla-vpn }
vpn-promo-headline-new = Sparen Sie 50% mit einem Jahresabo
vpn-promo-copy-new = Schützen Sie Ihre Daten im Internet – und wählen Sie ein VPN-Abonnement, das zu Ihnen passt.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Ihr Standort: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Schützen Sie sich</em> mit { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Geschützt</em> mit { -brand-mozilla-vpn }.
vpn-banner-title-1 = Sie sind geschützt – vielen Dank, dass Sie { -brand-mozilla-vpn } verwenden.
vpn-banner-title-2 = Ihr Standort kann verfolgt werden, wenn Sie kein VPN verwenden.
vpn-banner-subtitle-2 = Schützen Sie Ihren Standort und surfen Sie in 3 Schritten sicher
vpn-banner-status-protected = Aktueller Status: <em>Geschützt ✓</em>
vpn-banner-status-not-protected = Aktueller Status: <em>Nicht geschützt ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP-Adresse: { $ip-address }
vpn-banner-step-1 = Abonnieren Sie { -brand-mozilla-vpn }
vpn-banner-step-2 = Wählen Sie einen VPN-Standort
vpn-banner-step-3 = VPN aktivieren und sicher surfen
vpn-banner-cta = Holen Sie sich { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Ausklappen
# button to close panel
vpn-banner-cta-close = Schließen

## Relay and VPN educational/ad units

ad-unit-relay-cta = Weitere Informationen zu { -brand-relay }
ad-unit-vpn-cta = Weitere Informationen zu { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Wie halten Sie Ihre E-Mail-Adresse geheim?
# ad 2 heading
ad-unit-2-do-you-worry = Machen Sie sich Sorgen um die Sicherheit im öffentlichen WLAN?
# ad 3 heading
ad-unit-3-stay-in-the-game = Bleiben Sie im Spiel!
ad-unit-3-lets-you-keep = Mit { -brand-mozilla-vpn } können Sie sicher und geschützt eine stabile Verbindung aufrechterhalten, während Sie Spiele spielen oder Filme streamen.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Drosselung verhindern
# ad 3 list item 2
ad-unit-3-be-anywhere = Seien Sie irgendwo auf der Welt
# ad 3 list item 3
ad-unit-3-access-more = Mehr Zugriff
# ad 4 heading
ad-unit-4-shopping-with = Einkaufen mit E-Mail-Masken
ad-unit-4-want-to-buy = Möchten Sie etwas im Internet kaufen, kennen oder vertrauen dem Verkäufer aber nicht ganz?
ad-unit-4-shop-online = Verwenden Sie eine E-Mail-Maske, wenn Sie online einkaufen. Lassen Sie sich die Bestätigung an Ihre echte E-Mail-Adresse senden und schalten Sie die Maske später jederzeit einfach aus.
# ad 5 heading
ad-unit-5-on-the-go = Unterwegs mit { -brand-relay }
ad-unit-5-instantly-make = Erstellen Sie sofort und überall eine benutzerdefinierte E-Mail-Maske!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Verbinden Sie sich unterwegs
ad-unit-5-privately-sign-in = Verwenden Sie Ihre E-Mail-Maske, wenn Sie sich privat bei Ihrem Lieblingscafé oder öffentlichen WLAN anmelden möchten
# ad 5 subheading 2
ad-unit-5-email-receipts = Erhalten Sie Quittungen per E-Mail
ad-unit-5-share-custom-email = Geben Sie beim Einkaufen eine benutzerdefinierte E-Mail-Maske für Quittungen an, ohne Ihre echte E-Mail-Adresse preiszugeben
# ad 5 subheading 3
ad-unit-5-use-on-phone = Auf Ihrem Handy verwenden
ad-unit-5-no-matter-where = Egal wo Sie sind, erstellen Sie in Sekundenschnelle eine benutzerdefinierte E-Mail-Maske für alles, was Sie tun möchten
# ad 6 heading
ad-unit-6-worry-free = Sorgenfreies Registrieren
ad-unit-6-want-to-start = Möchten Sie ein neues Abonnement abschließen, auf eine Einladung antworten oder einen günstigen Rabatt-Code erhalten, ohne dass Spam Ihren Posteingang überschwemmt?
ad-unit-6-before-you-complete = Bevor Sie die nächste Registrierung abschließen, verwenden Sie eine E-Mail-Maske anstelle Ihrer echten E-Mail-Adresse, um Ihre Daten zu schützen und die Kontrolle über Ihren Posteingang zu behalten

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-Konto
open-in-new-tab-alt = Link in einem neuem Tab öffnen

## Search Engine Optimization

meta-desc-2 = Überprüfen Sie mit { -brand-fx-monitor }, ob Sie von einem Datenleck betroffen sind. Wir helfen Ihnen, zu verstehen, was als Nächstes zu tun ist und überwachen fortlaufend, ob neue Datenlecks auftreten.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Einloggen
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Datenlecks beheben
site-nav-settings-link = Einstellungen
site-nav-help-link = Hilfe und Unterstützung
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Probieren Sie unsere anderen Sicherheitswerkzeuge aus:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Hauptmenü
main-nav-button-collapse-label = Menü einklappen
main-nav-button-collapse-tooltip = Menü einklappen
main-nav-button-expand-label = Menü ausklappen
main-nav-button-expand-tooltip = Menü ausklappen
main-nav-label = Navigation
main-nav-link-home-label = Startseite
main-nav-link-dashboard-label = Übersicht
main-nav-link-settings-label = Einstellungen
main-nav-link-faq-label = Häufig gestellte Fragen
main-nav-link-faq-tooltip = Häufig gestellte Fragen

## User menu

# Obsolete
menu-button-title = Benutzermenü
# Obsolete
menu-button-alt = Benutzermenü öffnen
# Obsolete
menu-list-accessible-label = Kontomenü
# Obsolete
menu-item-fxa-2 = Verwalten Sie Ihr { -brand-mozilla-account }
# Obsolete
menu-item-settings = Einstellungen
# Obsolete
menu-item-help = Hilfe und Unterstützung
# Obsolete
menu-item-logout = Abmelden
user-menu-trigger-label = Benutzermenü öffnen
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Verwalten Sie Ihr { -brand-mozilla-account }
user-menu-settings-label = Einstellungen
user-menu-settings-tooltip = { -brand-mozilla-monitor } einstellen
user-menu-help-label = Hilfe und Unterstützung
user-menu-help-tooltip = Hilfe bei der Verwendung von { -brand-mozilla-monitor }
user-menu-signout-label = Abmelden
user-menu-signout-tooltip = Von { -brand-mozilla-monitor } abmelden

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Nutzungsbedingungen
privacy-notice = Datenschutzhinweis
github = { -brand-github }
footer-nav-all-breaches = Alle Datenlecks
footer-external-link-faq-label = Häufig gestellte Fragen
footer-external-link-faq-tooltip = Häufig gestellte Fragen

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Seite nicht gefunden
error-page-error-404-copy = Es tut uns leid, die von Ihnen gesuchte Seite existiert nicht mehr.
error-page-error-404-cta-button = Zurück
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Ein Fehler ist aufgetreten
error-page-error-other-copy = Bitte versuchen Sie es erneut oder kommen Sie später wieder

## Breach overview page

all-breaches-headline-2 = Alle von { -brand-fx-monitor } erkannten Datenlecks
all-breaches-lead = Wir überwachen alle bekannten Datenlecks, um herauszufinden, ob Ihre persönlichen Daten kompromittiert wurden. Hier ist eine vollständige Liste aller Lecks, die seit 2007 gemeldet wurden.
search-breaches = Datenlecks suchen
# the kind of user data exposed to hackers in data breach.
exposed-data = Offengelegte Daten:

## Public breach detail page

find-out-if-2 = Erfahren Sie, ob Sie von diesem Datenleck betroffen waren
find-out-if-description = Wir helfen Ihnen, schnell zu erkennen, ob Ihre E-Mail-Adresse bei diesem Datenleck offengelegt wurde, und zu verstehen, was als Nächstes zu tun ist.
breach-detail-cta-signup = Auf Datenlecks überprüfen

## Floating banner

floating-banner-text = Erhöhen Sie Ihre Online-Sicherheit mit Nachrichten, Tipps und Updates von { -brand-Mozilla }.
floating-banner-link-label = Registrieren
floating-banner-dismiss-button-label = Nein, danke

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Neuer Name, neues Aussehen und noch mehr Möglichkeiten, um <b>Ihre Privatsphäre zurückzugewinnen</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Schließen
loading-accessibility = Wird geladen…
