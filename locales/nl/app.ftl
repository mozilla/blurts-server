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
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Over Firefox-waarschuwingen
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
pwt-summary-4 =
    Wachtwoordbeheerders zoals 1Password, LastPass, Dashlane en Bitwarden genereren sterke, unieke wachtwoorden. 
    Ook slaan ze wachtwoorden beveiligd op en vullen ze voor u in op websites.
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
download-firefox-banner-blurb = Neem de controle over uw browser
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
found-breaches-headline = Uw gegevens zijn in een datalek te vinden.
no-breaches =
    Uw e-mailadres kwam niet voor in onze basisscan.
    Dat is goed nieuws, maar datalekken kunnen op elk moment gebeuren en er is nog meer dat u kunt doen. 
    Abonneer u op { -product-name-nowrap } voor een volledig rapport, waarschuwingen bij nieuwe datalekken en tips over het beschermen van uw wachtwoorden.
featured-breach-results =
    { $breachCount ->
        [0] Uw account komt voor in het <span class="bold">{ $featuredBreach }</span>-datalek, maar niet in andere bekende datalekken.
        [one] Uw account komt voor in het <span class="bold">{ $featuredBreach }</span>-datalek en in één ander lek.
       *[other] Uw account komt voor in het <span class="bold">{ $featuredBreach }</span>-datalek en in { $breachCount } andere lekken.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] { no-breaches }Uw account komt niet voor in het <span class="bold">{ $featuredBreach }</span>-datalek, maar wel in één ander lek.
       *[other] Uw account komt niet voor in het <span class="bold">{ $featuredBreach }</span>-datalek, maar wel in { $breachCount } andere lekken.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Uw account komt voor in { $breachCount } datalek.
       *[other] Accounts die met uw e-mailadres zijn gekoppeld, komen voor in de volgende { $breachCount } datalekken.
    }
show-more-breaches = Meer weergeven
what-to-do-headline = Wat te doen als uw gegevens betrokken zijn bij een datalek
what-to-do-subhead-1 = Wijzig uw wachtwoorden, zelfs voor oude accounts
what-to-do-blurb-1 =
    Als u zich niet kunt aanmelden, neem dan contact op met de website om te vragen hoe u uw account kunt herstellen of beëindigen. 
    Ziet u een onbekende account? De website kan van naam zijn veranderd of iemand kan een account voor u hebben aangemaakt.
what-to-do-subhead-2 = Als u een gelekt wachtwoord hergebruikt, wijzig dit dan
what-to-do-blurb-2 =
    Hackers kunnen proberen uw gelekte wachtwoord opnieuw te gebruiken om toegang te krijgen tot andere accounts. 
    Maak voor elke website een ander wachtwoord aan, vooral voor uw bankrekening, 
    e-mailaccount en andere websites waar u persoonlijke gegevens opslaat.
what-to-do-subhead-3 = Neem extra stappen om uw financiële accounts te beveiligen
what-to-do-blurb-3 =
    De meeste lekken omvatten alleen e-mailadressen en wachtwoorden, maar sommige bevatten ook gevoelige financiële informatie. 
    Als uw bankrekening of creditcardnummers zijn gelekt, waarschuw dan uw bank voor mogelijke fraude, 
    en let op afschrijvingen die u niet herkent.
what-to-do-subhead-4 = Gebruik hulp bij het maken van goede wachtwoorden die veilig worden bewaard.
what-to-do-blurb-4 =
    Wachtwoordbeheerders zoals 1Password, LastPass, Dashlane en Bitwarden genereren sterke wachtwoorden, 
    slaan ze beveiligd op, en vullen ze voor u in op websites.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datum van datalek:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Getroffen accounts:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Getroffen gegevens:
confirmed = Bevestigd!<br />U bent ingeschreven!
confirmed-blurb = { -product-name-nowrap } stuurt u binnenkort een volledig rapport, en zal per e-mail een waarschuwing sturen als uw account in een nieuw gemeld lek voorkomt.
confirmed-social-blurb = Als uw account is gelekt, bestaat de kans dat uw vrienden, familie of online relaties dat ook zijn. Vertel ze over { -product-name-nowrap }.
unsub-headline = Uitschrijven van { -product-name-nowrap }
unsub-blurb = Dit verwijdert uw e-mailadres uit de lijst van { -product-name-nowrap } en u ontvangt geen waarschuwingen meer wanneer nieuwe lekken worden bekendgemaakt.
unsub-button = Uitschrijven
unsub-survey-headline = U bent niet langer ingeschreven.
unsub-survey-blurb =
    Uw e-mailadres is uitgeschreven van { -product-name-nowrap }. Bedankt voor het gebruik van deze service. 
    Hebt u een momentje voor een vraag over uw ervaring?
unsub-survey-form-label = Waarom schrijft u zich uit voor waarschuwingen van { -product-name-nowrap }?
unsub-reason-1 = Ik denk niet dat waarschuwingen mijn gegevens veiliger maken
unsub-reason-2 = Ik krijg te veel e-mailberichten van { -product-name-nowrap }
unsub-reason-3 = Ik vind de service niet waardevol
unsub-reason-4 = Ik heb al stappen genomen om mijn accounts te beschermen
unsub-reason-5 = Ik gebruik een andere service om mijn accounts te bewaken
unsub-reason-6 = Geen van bovenstaande
unsub-survey-thankyou = Bedankt voor uw feedback.
unsub-survey-error = Selecteer er één.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Delen
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweeten
download-firefox-quantum = { -brand-Quantum } downloaden
download-firefox-mobile = { -brand-name } Mobiel downloaden
# Features here refers to Firefox browser features. 
features = Functies
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Onderdelen van deze inhoud zijn &#x24B8; 1998-2018 door individuele medewerkers van mozilla.org. <br />
    Inhoud is beschikbaar onder een <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons-licentie</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Gegevens van datalekken verstrekt door { $hibp-link }
site-description = Zijn uw accounts gelekt of gestolen bij een datalek? Ontdek het bij { -product-name }. Doorzoek onze database en schrijf u in voor waarschuwingen.
