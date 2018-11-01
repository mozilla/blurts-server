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
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Ondersteuning
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Feedback geven
terms-and-privacy = Voorwaarden en Privacy
error-not-subscribed = Dit e-mailadres is niet geabonneerd op { -product-name }.
error-hibp-throttled = Te veel verbindingen met { -brand-HIBP }.
error-hibp-connect = Fout bij verbinden met { -brand-HIBP }.
error-hibp-load-breaches = Kon datalekken niet laden.
hibp-notify-email-subject = { -product-name } Waarschuwing: uw account is betrokken bij een datalek.
home-title = { -product-name }
home-not-found = Pagina niet gevonden.
oauth-invalid-session = Ongeldige sessie
oauth-confirmed-title = { -product-name } : Geabonneerd
scan-title = { -product-name } : Scanresultaten
user-add-invalid-email = Ongeldig e-mailadres
user-add-email-verify-subject = Controleer uw abonnement op { -product-name }.
user-add-title = { -product-name } : E-mailadres bevestigen
user-verify-token-error = Verificatietoken is vereist.
user-verify-email-report-subject = Uw { -product-name }-rapport
user-verify-title = { -product-name } : Geabonneerd
user-unsubscribe-token-error = U hebt een token nodig om u uit te schrijven.
user-unsubscribe-token-email-error = U hebt een token en een emailHash nodig om u uit te schrijven.
user-unsubscribe-title = { -product-name } : Uitschrijven
user-unsubscribe-survey-title = { -product-name } : Vragenlijst bij uitschrijving
user-unsubscribed-title = { -product-name } : Uitgeschreven

## Password Tips

pwt-section-headline = Sterkere wachtwoorden = Betere bescherming
pwt-section-subhead = Uw privégegevens zijn zo veilig als uw wachtwoorden.
pwt-section-blurb = Uw wachtwoorden beschermen meer dan uw accounts. Ze beschermen alle privégegevens die erin zijn opgeslagen. En hackers vertrouwen op slechte gewoonten, zoals het overal hergebruiken van hetzelfde wachtwoord of het gebruik van veelvoorkomende zinnen (wie gebruikt er allemaal p@ssw0rd?) zodat als ze één account hacken, ze er heel veel kunnen hacken. Op de volgende manier kunt u uw accounts beter beschermen.
pwt-headline-1 = Gebruik voor iedere account een ander wachtwoord
pwt-summary-1 = Hergebruik van hetzelfde wachtwoord zet de deur wagenwijd open voor identiteitsroof. Iedereen met dat wachtwoord kan zich bij al uw accounts aanmelden.
pwt-headline-2 = Maak sterke, moeilijk te raden wachtwoorden
pwt-summary-2 = Hackers gebruiken duizenden veelvoorkomende wachtwoorden om het uwe te raden. Hoe langer en willekeuriger uw wachtwoord is, hoe moeilijker het te raden is.
pwt-headline-3 = Behandel beveiligingsvragen als extra wachtwoorden
pwt-summary-3 = Websites controleren niet of uw antwoorden kloppen, alleen maar of ze telkens overeenkomen. Maak lange, willekeurige antwoorden en bewaar ze op een veilige plek.
pwt-headline-4 = Gebruik hulp bij het onthouden van uw wachtwoorden
pwt-summary-4 = Wachtwoordbeheerders als 1Password, LastPass, Dashlane en Bitwarden genereren sterke, unieke wachtwoorden. Ze slaan wachtwoorden ook beveiligd op en vullen ze voor u op websites in.
pwt-headline-5 = Voeg extra beveiliging toe met authenticatie in twee stappen
pwt-summary-5 = 2FA vereist wat extra informatie (zoals een eenmalige code die via sms wordt toegezonden) om u aan te melden bij uw account. Zelfs als iemand uw wachtwoord heeft, komt hij of zij er niet in.
pwt-headline-6 = Schrijf u in voor { -product-name-nowrap }-waarschuwingen
pwt-summary-6 = We zien een toename in datalekken van websites. Zodra een nieuw lek aan onze database wordt toegevoegd, stuurt { -product-name-nowrap } u een waarschuwing - zodat u actie kunt ondernemen en uw account kunt beschermen.
landing-headline = Uw recht om veilig voor hackers te zijn begint hier.
landing-blurb =
    { -product-name-nowrap } bewapent u met hulpmiddelen om uw privégegevens veilig te houden. 
    Ontdek wat hackers al over u weten, en leer hoe u ze een stap voor kunt blijven.
scan-label = Bekijk of u betrokken bent bij een datalek.
scan-placeholder = Voer e-mailadres in
scan-privacy = Uw e-mailadres wordt niet opgeslagen.
scan-submit = Uw e-mailadres zoeken
scan-another-email = Een ander e-mailadres scannen
scan-featuredbreach-label = Ontdek of uw <span class="bold"> { $featuredBreach } </span>-account getroffen is.
scan-error = Moet een geldig e-mailadres zijn.
signup-banner-headline = { -product-name-nowrap } detecteert bedreigingen van uw online accounts.
signup-banner-blurb = Uw gedetailleerde { -product-name-nowrap }-rapport laat zien of informatie van uw online accounts is gelekt of gestolen. We sturen u ook een waarschuwing als uw accounts in nieuwe websitelekken voorkomen.
download-firefox-bar-blurb = { -product-name-nowrap } wordt u aangeboden door het <span class="nowrap">volledig nieuwe { -brand-name }</span>.
download-firefox-bar-link = { -brand-name } nu downloaden
download-firefox-banner-button = { -brand-name } downloaden
signup-modal-headline = Inschrijven voor { -product-name-nowrap }
signup-modal-blurb = Schrijf u in voor uw volledige rapport, waarschuwingen bij nieuwe datalekken en beveiligingstips van { -product-name-nowrap }.
signup-modal-close = Sluiten
get-your-report = Uw rapport ophalen
signup-modal-verify-headline = Verifieer uw inschrijving
signup-modal-verify-blurb = We hebben een verificatiekoppeling gestuurd naar <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Deze koppeling verloopt over 24 uur.
signup-modal-verify-resend = Niet in Postvak IN of map met spam? Opnieuw verzenden.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Verzonden!
signup-with-fxa = Inschrijven met { -brand-name }-account
form-signup-placeholder = Voer e-mailadres in
form-signup-checkbox = Ontvang het laatste nieuws van { -brand-Mozilla } en { -brand-name }.
sign-up = Inschrijven
form-signup-error = Moet een geldig e-mailadres zijn
no-breaches-headline = Tot zover geen problemen.
show-more-breaches = Meer weergeven
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Delen
download-firefox-quantum = { -brand-Quantum } downloaden
download-firefox-mobile = { -brand-name } Mobiel downloaden
# Features here refers to Firefox browser features. 
features = Functies
