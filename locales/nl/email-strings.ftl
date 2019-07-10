# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Selecteer binnen 24 uur de knop ‘Mijn e-mailadres verifiëren’ om uw Firefox Monitor-account te bevestigen. 
    Uw rapport is dan onderweg.
verify-my-email = Mijn e-mailadres verifiëren
report-scan-another-email = Nog een e-mailadres scannen in { -product-name }
automated-message = Dit is een geautomatiseerd e-mailbericht; als u het per abuis hebt ontvangen, hoeft u niets te doen.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = We hebben dit bericht naar { $userEmail } gestuurd omdat het e-mailadres is ingeschreven voor waarschuwingen van { -product-name }.
unsubscribe-email-link = Als u geen waarschuwingen van { -product-name } meer wilt ontvangen, schrijf u dan uit.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name }-rapport
report-date = Rapportdatum:
email-address = E-mailadres:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Volgende stappen
report-headline =
    { $breachCount ->
        [0] So far, so good.
        [one] Uw account komt voor in { $breachCount } lek.
       *[other] Uw account komt voor in { $breachCount } lekken.
    }
report-subhead-no-breaches =
    Uw account komt niet voor in ons volledige rapport van datalekken. 
    Dat is goed nieuws, maar u kunt meer doen. 
    Datalekken kunnen altijd voorkomen, dus lees verder om te zien hoe u uw wachtwoorden kunt beschermen.
report-subhead-found-breaches = Hier is uw volledige Firefox Monitor-rapport, waarin alle bekende datalekken staan waarin dit e-mailadres voorkomt.
report-pwt-blurb =
    Wachtwoorden zijn zo waardevol, dat er dagelijks duizenden van worden gestolen en verhandeld of verkocht op de zwarte markt. 
    Sterkere wachtwoorden beschermen uw accounts en alle persoonlijke gegevens die erin worden bewaard.
report-pwt-headline-1 = Gebruik voor iedere account een ander wachtwoord
report-pwt-summary-1 =
    Het overal hergebruiken van wachtwoorden opent de deur voor hackers. 
    Ze kunnen dat wachtwoord gebruiken om zich bij uw andere accounts aan te melden.
report-pwt-headline-2 = Maak sterke, unieke wachtwoorden
report-pwt-summary-2 =
    Hackers gebruiken lijsten met veelgebruikte wachtwoorden om het uwe te proberen te raden. 
    Hoe langer en willekeuriger uw wachtwoord is, hoe moeilijker het is om het te stelen.
report-pwt-headline-3 = Behandel beveiligingsvragen als extra wachtwoorden
report-pwt-summary-3 =
    Websites controleren niet of uw antwoorden juist zijn, alleen of ze elke keer overeenkomen. 
    Maak lange, willekeurige antwoorden en sla ze op een veilige plek op.
report-pwt-headline-4 = Gebruik een wachtwoordbeheerder
report-pwt-summary-4 = Services zoals 1Password, LastPass, Dashlane en Bitwarden genereren sterke wachtwoorden, slaan ze beveiligd op en vullen ze op websites in, zodat u ze niet allemaal hoeft te onthouden.
# A link to legal information about mozilla products.
legal = Juridisch
# Share Firefox Monitor by email subject line
share-by-email-subject = Ontdek of u bent getroffen door een datalek.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hallo,
    { -brand-name } heeft een gratis service waarmee u kunt controleren of u bent getroffen door een datalek. Zo werkt het:
    1. Ga naar { "https://monitor.firefox.com" } en zoek naar uw e-mailadres.
    2. Zie of uw online accounts zijn getroffen door een datalek.
    3. Ontvang tips van { -product-name } over wat u verder kunt doen.
# Unsubscribe link in email.
email-unsub-link = Abonnement opzeggen
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    U ontvangt dit e-mailbericht omdat u zich hebt aangemeld voor { -product-name }-waarschuwingen.
    Wilt u deze e-mailberichten niet meer ontvangen? { $unsubLink }. Dit is een geautomatiseerd e-mailbericht. Ga voor ondersteuning naar { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    U ontvangt dit e-mailbericht omdat u zich hebt aangemeld voor { -product-name }-waarschuwingen.
    Dit is een geautomatiseerd e-mailbericht. Ga voor ondersteuning naar { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Mijn dashboard bekijken
# Button text
verify-email-cta = E-mailadres verifiëren
# Headline of verification email
email-link-expires = Deze koppeling verloopt over 24 uur
email-verify-blurb = Verifieer uw e-mailadres om deze toe te voegen aan { -product-name } en meld u aan voor datalekmeldingen.
# Email headline
email-found-breaches-hl = Hierbij een overzicht van eerdere datalekken
# Email headline
email-breach-summary-for-email = Datalekoverzicht voor { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } is in 0 bekende datalekken verschenen
# Email headline
email-alert-hl = { $userEmail } is in een bekend datalek verschenen
# Subject line of email
email-subject-found-breaches = { -product-name } heeft uw gegevens gevonden in deze datalekken
# Subject line of email
email-subject-no-breaches = { -product-name } heeft geen bekende datalekken gevonden
# Subject line of email
email-subject-verify = Verifieer uw e-mailadres voor { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Meer info over { $fxmLink }
# List headline
faq-list-headline = Veelgestelde vragen
