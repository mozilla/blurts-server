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
-brand-fxa = Firefox-account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = U hebt te veel e-mailadressen in een korte tijdsperiode geprobeerd te scannen. Om beveiligingsredenen hebben we uw zoekmogelijkheid tijdelijk geblokkeerd. U kunt het later weer proberen.
error-could-not-add-email = Kon e-mailadres niet aan database toevoegen.
error-not-subscribed = Dit e-mailadres is niet geabonneerd op { -product-name }.
error-hibp-throttled = Te veel verbindingen met { -brand-HIBP }.
error-hibp-connect = Fout bij verbinden met { -brand-HIBP }.
error-hibp-load-breaches = Kon datalekken niet laden.
error-must-be-signed-in = U moet bij uw { -brand-fxa } zijn aangemeld.
error-to-finish-verifying = Om de verificatie van dit e-mailadres voor { -product-name } te voltooien, dient u onder uw primaire e-mailadres aangemeld te zijn.
home-title = { -product-name }
home-not-found = Pagina niet gevonden.
oauth-invalid-session = Ongeldige sessie
scan-title = { -product-name } : Scanresultaten
user-add-invalid-email = Ongeldig e-mailadres
user-add-too-many-emails = U bewaakt het maximale aantal e-mailadressen.
user-add-email-verify-subject = Controleer uw abonnement op { -product-name }.
user-add-duplicate-email = Dit e-mailadres is al aan { -product-name } toegevoegd.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Bezoek uw { $preferencesLink } om de status van { $userEmail } te controleren.
user-add-verification-email-just-sent = Zo snel kan een ander verificatie-e-mailbericht niet worden verzonden. Probeer het later opnieuw.
user-add-unknown-error = Er is iets misgegaan bij het toevoegen van een ander e-mailadres. Probeer het later opnieuw.
user-delete-unknown-error = Er is iets misgegaan bij het verwijderen van een e-mailadres. Probeer het later opnieuw.
error-headline = Fout
user-verify-token-error = Verificatietoken is vereist.
user-verify-email-report-subject = Uw { -product-name }-rapport
user-unsubscribe-token-error = U hebt een token nodig om u uit te schrijven.
user-unsubscribe-token-email-error = U hebt een token en een emailHash nodig om u uit te schrijven.
user-unsubscribe-title = { -product-name } : Uitschrijven
pwt-section-headline = Sterkere wachtwoorden = Betere bescherming
landing-headline = Uw recht om veilig voor hackers te zijn begint hier.
scan-placeholder = Voer e-mailadres in
scan-submit = Uw e-mailadres zoeken
scan-error = Moet een geldig e-mailadres zijn.
download-firefox-banner-button = { -brand-name } downloaden
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Verzonden!
sign-up = Inschrijven
form-signup-error = Moet een geldig e-mailadres zijn
# breach-date = the calendar date a particular data theft occurred.
breach-date = Datum van datalek:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Getroffen accounts:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Getroffen gegevens:
unsub-headline = Uitschrijven van { -product-name-nowrap }
unsub-blurb = Dit verwijdert uw e-mailadres uit de lijst van { -product-name-nowrap } en u ontvangt geen waarschuwingen meer wanneer nieuwe lekken worden bekendgemaakt.
unsub-button = Uitschrijven
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Gegevens van datalekken verstrekt door { $hibp-link }
share-twitter = De meeste mensen hebben ongeveer 100 online accounts. Is een van de uwe betrokken bij een datalek? Ontdek het.
share-facebook-headline = Ontdek of u bent getroffen door een datalek
share-facebook-blurb = Zijn uw online accounts getroffen door een datalek?
og-site-description = Ontdek met { -product-name } of u bent getroffen door een datalek. Schrijf u in voor waarschuwingen over toekomstige lekken en ontvang tips over hoe u uw accounts veilig houdt.
show-all = Alles tonen
fxa-scan-another-email = Wilt u een ander e-mailadres controleren?
sign-out = Afmelden
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } beheren
have-an-account = Hebt u al een account?
fxa-pwt-summary-2 =
    Korte uit één woord bestaande wachtwoorden zijn voor hackers eenvoudig te raden. 
    Gebruik ten minste twee woorden en een combinatie van letters, cijfers en speciale tekens.
fxa-pwt-summary-4 =
    Wachtwoordbeheerders als 1Password, LastPass, Dashlane en Bitwarden slaan uw wachtwoorden 
    op en vullen ze voor u in op websites. Ze helpen u zelfs bij het aanmaken van sterke wachtwoorden.
fxa-pwt-summary-6 =
    Datalekken komen steeds vaker voor. Als uw persoonlijke gegevens in een nieuw datalek verschijnen,
    stuurt { -product-name } u een waarschuwing - zodat u in actie kunt komen en uw accounts kunt beschermen.
fxa-what-to-do-blurb-1 = Als u zich niet kunt aanmelden, neem dan contact op met de website en vraag hoe u het kunt bijwerken. Ziet u een account die u niet herkent? Mogelijk zijn uw gegevens dan verkocht of herverdeeld. Dit kan ook een vergeten account zijn, of een bedrijf dat van naam is veranderd.
fxa-what-to-do-subhead-2 = Stop met het gebruik van het gelekte wachtwoord, en wijzig het op de plaatsen waar u het hebt gebruikt.
fxa-wtd-blurb-2 =
    Hackers kunnen proberen hetzelfde wachtwoord en uw e-mailadres te gebruiken voor toegang tot andere accounts.  
    Maak voor elke account een ander en uniek wachtwoord aan, vooral voor uw bankrekening, 
    e-mailaccount en andere websites waar u persoonlijke gegevens opslaat.
fxa-what-to-do-blurb-3 =
    De meeste lekken omvatten alleen e-mailadressen en wachtwoorden, maar sommige bevatten ook gevoelige financiële informatie. 
    Als uw bankrekening of creditcardnummers zijn gelekt, waarschuw dan uw bank voor mogelijke fraude. 
    Let op afschrijvingen die u niet herkent.
fxa-what-to-do-subhead-4 = Gebruik hulp bij het onthouden van al uw wachtwoorden en het veilig houden ervan.
fxa-what-to-do-blurb-4 =
    Wachtwoordbeheerders als 1Password, LastPass, Dashlane en Bitwarden slaan uw 
    wachtwoorden veilig op en vullen ze voor u op websites in. Gebruik een wachtwoordbeheerder 
    op uw telefoon en uw computer, zodat u ze niet allemaal hoeft te onthouden.
# Alerts is a noun
sign-up-for-alerts = Inschrijven voor waarschuwingen
# Link title
frequently-asked-questions = Veelgestelde vragen
about-firefox-monitor = Over { -product-name }
# Link title
preferences = Voorkeuren
# Link title
home = Start
# Link title
security-tips = Beveiligingstips
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa }-navigatie openen
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = LAATST TOEGEVOEGDE DATALEK
# Link title
more-about-this-breach = Meer over dit datalek
take-control = Neem uw persoonlijke gegevens weer onder controle.
cant-stop-hackers = U kunt hackers niet stoppen om te hacken. Maar u kunt slechte gewoonten die hun werk gemakkelijk maken vermijden.
read-more-tips = Meer beveiligingstips
how-hackers-work = Begrijp hoe hackers te werk gaan
monitor-your-online-accounts = Meld u aan voor bewaken van datalekken met een { -brand-fxa }
stay-alert = Blijf alert op nieuwe datalekken
if-your-info = Als uw gegevens voorkomen in een nieuw datalek, sturen we u een melding.
search-all-emails = Controleer al uw e-mailadressen op datalekken en ontvang meldingen over nieuwe bedreigingen.
monitor-several-emails = Bewaak verschillende e-mailadressen
take-action = Onderneem actie om uw accounts te beschermen
keep-your-data-safe = Ontdek wat u moet doen om uw gegevens te beschermen tegen cybercriminelen.
website-breach = Websitedatalek
sensitive-breach = Gevoelig websitedatalek
data-aggregator-breach = Datalek gegevensverzameling
unverified-breach = Niet-geverifieerd datalek
spam-list-breach = Spamlijstdatalek
website-breach-plural = Websitedatalek
sensitive-breach-plural = Gevoelige datalekken
data-aggregator-breach-plural = Datalekken gegevensverzameling
unverified-breach-plural = Niet-geverifieerde datalekken
spam-list-breach-plural = Spamlijstdatalekken
what-data = Welke gegevens zijn gecompromitteerd:
sensitive-sites = Hoe behandelt { -product-name } gevoelige websites?
sensitive-sites-copy =
    { -product-name } onthult alleen accounts die zijn getroffen door dit
    soort lekken na verificatie van een e-mailadres. Dit betekent dat u de
    enige persoon bent die kan zien of uw informatie in dit lek voor komt
    (tenzij iemand anders toegang tot uw e-mailaccount heeft).
delayed-reporting-headline = Waarom duurde het zo lang voordat dit datalek werd gemeld?
delayed-reporting-copy =
    Het kan soms maanden of jaren duren voordat de aanmeldgegevens die in een datalek
    voor komen op het dark web verschijnen. Datalekken worden, zodra ze zijn ontdekt en
    geverifieerd, aan onze database toegevoegd.
about-fxm-headline = Over { -product-name }
about-fxm-blurb =
    { -product-name } waarschuwt als uw online accounts betrokken zijn bij een
    datalek. Ontdek of u getroffen bent door een datalek, ontvang meldingen over nieuwe datalekken,
    en onderneem stappen om uw online accounts te beschermen. { -product-name } wordt aangeboden
    door { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } waarschuwt u als uw e-mailadres voor komt
    in een online datalek. Kijk of uw informatie is gelekt, lees hoe
    u uw online accounts beter kunt beschermen en ontvang een waarschuwing
    als uw e-mailadres voor komt in een nieuw datalek.
# How Firefox Monitor works
how-fxm-works = Hoe { -product-name } werkt
how-fxm-1-headline = Een eenvoudige zoekopdracht uitvoeren
how-fxm-1-blurb =
    Zoek naar uw e-mailadres in bekende datalekken teruggaand
    tot 2007. Deze eenvoudige zoekopdracht zal de meeste datalekken weergeven, maar niet
    de datalekken die gevoelige persoonlijke informatie bevatten.
how-fxm-2-headline = Schrijf u in voor het bewaken van datalekken
how-fxm-2-blurb =
    Maak een { -brand-fxa } om uw e-mailadres doorlopend te controleren op datalekken.
    Na verificatie van uw e-mailadres, ontvangt u ook een volledig rapport over eerdere datalekken,
    inclusief gevoelige datalekken.
how-fxm-3-headline = Ontvang meldingen in uw browser
how-fxm-3-blurb =
    Als u { -brand-name } gebruikt, ontvangt u een melding als u een bezoek brengt aan een
    website waar een lek is opgetreden. Ontdek het meteen als u in het datalek voor komt en
    wat u er aan kunt doen.
wtd-after-website = Wat te doen na een datalek van de website
wtd-after-data-agg = Wat te doen na een datalek van een gegevensverzamelaar
what-is-data-agg = Wat is een gegevensverzamelaar?
what-is-data-agg-blurb =
    Data-verzamelaars of gegevenshandelaars verzamelen informatie uit openbare
    bronnen en kopen deze van andere bedrijven. Ze vatten deze gegevens samen om ze voor marketingdoeleinden
    aan bedrijven te verkopen. Slachtoffers van deze lekken hebben minder kans om door financiële fraude te
    worden getroffen, maar hackers zouden deze gegevens kunnen gebruiken om zich als hen voor te doen of hen te profileren.
protect-your-privacy = Uw online privacy beschermen
no-pw-to-change = In tegenstelling tot een websitedatalek, is er geen wachtwoord dat moet worden gewijzigd.
avoid-personal-info = Vermijd het gebruik van persoonlijke gegevens in wachtwoorden
avoid-personal-info-blurb = Het is gemakkelijk om verjaardagen, adressen en namen van familieleden online te vinden. Vermijd gebruik van deze woorden in uw wachtwoorden.

## What to do after data breach tips

change-pw = Wijzig uw wachtwoord
change-pw-site = Wachtwoord voor deze website wijzigen
even-for-old = Zelfs voor oude accounts is het belangrijk om uw wachtwoord bij te werken.
make-new-pw-unique = Maak het nieuwe wachtwoord anders en uniek
strength-of-your-pw = De kracht van uw wachtwoorden heeft direct invloed op uw online veiligheid.
create-strong-passwords = Hoe maakt u sterke wachtwoorden
stop-reusing-pw = Stop met het opnieuw gebruiken van dezelfde wachtwoorden
create-unique-pw = Maak unieke wachtwoorden en bewaar ze op een veilige plek, zoals een wachtwoordbeheerder.
five-myths = 5 mythes over wachtwoordbeheerders
create-a-fxa = Maak een { -brand-fxa } voor uw volledige rapport van datalekken en om meldingen te ontvangen.
feat-security-tips = Beveiligingstips om uw accounts te beschermen
feat-sensitive = Geavanceerd zoeken in gevoelige datalekken
feat-enroll-multiple = Registreer meerdere e-mailadressen voor bewaking van datalekken
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Komt voor in { $breachCount } bekend datalek.
       *[other] Komt voor in { $breachCount } bekende datalekken.
    }
check-for-breaches = Controleer op datalekken
find-out-what-hackers-know = Ontdek wat hackers al over u weten. Leer hoe u hen een stap voor kunt blijven.
get-email-alerts = Blijf veilig: ontvang e-mailwaarschuwingen wanneer uw gegevens voorkomen in een bekend datalek
search-for-your-email = Zoek terug tot 2007 naar uw e-mailadres in openbare datalekken.
back-to-top = Terug naar boven
comm-opt-0 = Stuur mij een e-mailbericht als een van mijn e-mailadressen hieronder in een datalek verschijnt.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Alle waarschuwingen over datalekken naar { $primaryEmail } sturen.
stop-monitoring-this = Stop met het controleren van dit e-mailadres.
resend-verification = Verificatie-e-mailbericht opnieuw versturen
add-new-email = Een nieuw e-mailadres toevoegen
send-verification = Verificatiekoppeling versturen
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Samenvatting datalek
show-breaches-for-this-email = Alle datalekken voor dit e-mailadres tonen.
link-change-primary = Primaire e-mailadres wijzigen
remove-fxm = { -product-name } verwijderen
remove-fxm-blurb =
    Schakel waarschuwingen van { -product-name } uit. Uw { -brand-fxa } blijft actief en u ontvangt
    mogelijk andere accountgerelateerde communicatie.
# Button title
manage-email-addresses = E-mailadressen beheren
# Link title
latest-breach-link = Kijk of u in dit datalek voor komt

## Variables:
##   $userName (String) - Username

welcome-back = Welkom terug, { $userName }!
welcome-user = Welkom, { $userName }!

##

breach-alert-subject = { -product-name } heeft uw e-mailadres gevonden in een nieuw datalek.
your-info-was-discovered-headline = Uw gegevens zijn ontdekt in een nieuw datalek.
your-info-was-discovered-blurb =
    U bent aangemeld om { -product-name }-meldingen te ontvangen
    wanneer uw e-mailadres verschijnt in een datalek. Dit is wat we weten over dit datalek.
what-to-do-after-breach = Wat te doen na een datalek
ba-next-step-1 = Wijzig uw wachtwoord in een sterk, uniek wachtwoord.
ba-next-step-blurb-1 =
    Een sterk wachtwoord gebruikt een combinatie van hoofdletters en kleine letters,
    speciale tekens en cijfers. Het bevat geen persoonlijke informatie zoals
    uw adres, geboortedatum of familienamen.
ba-next-step-2 = Stop het gebruik van dat gelekte wachtwoord volledig.
ba-next-step-blurb-2 =
    Cybercriminelen kunnen uw wachtwoord op het dark web vinden en het gebruiken
    om zich aan te melden bij uw andere accounts. De beste manier om uw accounts te beschermen
    is het gebruik van unieke wachtwoorden voor elk ervan.
ba-next-step-3 = Laat u helpen bij het maken van betere wachtwoorden en ze veilig te houden.
ba-next-step-blurb-3 =
    Gebruik een wachtwoordbeheerder om sterke, unieke wachtwoorden te maken. Wachtwoordbeheerders slaan al
    uw aanmeldgegevens veilig op, zodat u ze op al uw apparaten kunt openen.
faq1 = Ik herken dit bedrijf of deze website niet. Waarom kom ik voor in dit lek?
faq2 = Waarom duurde het zo lang om me van dit lek op de hoogte te stellen?
faq3 = Hoe weet ik dat dit een legitiem e-mailbericht van { -product-name } is?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NIEUW DATALEK GEVONDEN
       *[other] { $breachCount } NIEUWE DATALEKKEN GEVONDEN
    }
sign-up-headline-1 = Ontvang doorlopende waarschuwingen met een { -brand-fxa }.
account-not-required = De { -brand-name }-browser is niet vereist voor een { -brand-fxa }. U ontvangt mogelijk informatie over services van { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Zijn uw gegevens gelekt in het datalek { $breachName }?
fb-not-comp = Dit e-mailadres komt niet voor in het datalek { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Het komt echter wel voor in { $breachCount } ander datalek.
       *[other] Het komt echter wel voor in { $breachCount } andere datalekken.
    }
fb-comp-only = Dit e-mailadres komt voor in het datalek { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Dit e-mailadres komt voor in { $breachCount } bekend datalek, inclusief { $breachName }.
       *[other] Dit e-mailadres komt voor in { $breachCount } bekende datalekken, inclusief { $breachName }.
    }

##

no-other-breaches-found = Geen andere datalekken gevonden in een basiszoekopdracht.
no-results-blurb = Sorry, dat datalek staat niet in onze database.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Uw e-mailadres komt niet voor in dit lek,
    maar uw telefoonnummer kan nog steeds kwetsbaar zijn.</span> Sommige van de accounts
    die bij het Facebook-lek zijn blootgesteld bevatten telefoonnummers en andere
    persoonlijke gegevens, maar geen e-mailadressen. Als u ooit een Facebook-account hebt aangemaakt – zelfs als u deze nu niet gebruikt – bevelen we u aan
    deze stappen te nemen om uzelf te beschermen
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Stel uw gegevens in op ‘Alleen ik’ of een andere niet-openbare instelling in <a>uw Facebook-profiel</a>.</span>
facebook-breach-what-to-do-1-copy =
    Bij dit lek hebben hackers profielgegevens
    die waren ingesteld op ‘openbaar’ of ‘gedeeld met vrienden’ buitgemaakt.
    Deze gegevens kunnen worden gecombineerd met andere gegevens om nog meer
    van uw persoonlijke gegevens en account te benaderen.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Wijzig het wachtwoord, de pincode of andere beveiligingsgegevens van uw <a>accounts van
    telefoonaanbieders</a> om sim-swapping te voorkomen</span>.
facebook-breach-what-to-do-2-copy =
    Sim-swapping, ook wel sim-jacking genoemd,
    gebeurt als een hacker telefoonnummer, geboortedatum en andere gegevens gebruikt om
    iemands mobiele telefoonnummer over te nemen en vervolgens op hun e-mail-, sociale media- en zelfs financiële accounts in te breken.
facebook-breach-what-to-do-3 = Lees alle aanbevelingen op onze pagina over het Facebook-lek
# "Appears in-page as: Showing: All Breaches"
currently-showing = Resultaat:

## Updated error messages

error-bot-headline = Zoekopdrachten tijdelijk opgeschort
error-bot-blurb =
    We zijn bang dat u misschien een bot bent, omdat u in een korte tijdsperiode
    hebt gezocht naar verschillende e-mailadressen. Nieuwe zoekopdrachten zijn
    voorlopig geblokkeerd. U kunt het later opnieuw proberen.
error-csrf-headline = Sessie verlopen
error-csrf-blurb = Selecteer de knop Terug van uw browser, laad de pagina opnieuw en probeer het nog eens.
error-invalid-unsub = Hoe af te melden van waarschuwingen van { -product-name }
error-invalid-unsub-blurb =
    U moet zich afmelden vanuit een van de
    e-mailberichten die { -product-name } u heeft gestuurd. Kijk in uw Postvak IN voor berichten
    van { -brand-team-email }. Selecteer onderaan het e-mailbericht de koppeling voor afmelden.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] E-mailadres wordt bewaakt
       *[other] E-mailadressen worden bewaakt
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Wachtwoord gelekt in alle datalekken
       *[other] Wachtwoorden gelekt in alle datalekken
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Een bekend datalek heeft uw gegevens gelekt
       *[other] Bekende datalekken hebben uw gegevens gelekt
    }
# Button
see-additional-breaches = Meer datalekken bekijken
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Dit e-mailadres komt voor in een bekend datalek
       *[other] Dit e-mailadres komt voor in { $breachCount } bekende datalekken
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Resultaten voor: { $userEmail }
other-monitored-emails = Andere bewaakte e-mailadressen
email-verification-required = E-mailverificatie vereist
fxa-primary-email = { -brand-fxa } E-mailadres – Primair
what-is-a-website-breach = Wat is een websitedatalek?
website-breach-blurb = Een datalek van een website treedt op, wanneer cybercriminelen persoonlijke gegevens uit online-accounts stelen, kopiëren of blootleggen. Dat gebeurt het meest, wanneer hackers een zwakke plek in de beveiliging van de website vinden. Het kan echter ook optreden als accountinformatie per ongeluk wordt gelekt.
security-tips-headline = Beveiligingstips om uzelf tegen hackers te beschermen
steps-to-protect = Te nemen stappen om uw online identiteit te beschermen
take-further-steps = Onderneem verdere stappen om uw identiteit te beschermen
alert-about-new-breaches = Waarschuw mij over nieuwe datalekken
see-if-youve-been-part = Kijk of u onderdeel bent van een online datalek.
get-ongoing-breach-monitoring = Krijg continue monitoring voor meerdere e-mailadressen.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Nu uitproberen
new-unsub-error = U moet u afmelden vanuit een van de door { -product-name } verzonden e-mailberichten.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Het is echter wel verschenen in { $breachCount } ander bekend lek.
       *[other] Het is echter wel verschenen in { $breachCount } andere bekende lekken.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Aanvullende informatie, waaronder:
# Title
email-addresses-title = E-mailadressen
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Overzicht
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Op { $breachDate } is een lek opgetreden op { $breachTitle }. Na ontdekking en verificatie van het lek, is het op { $addedDate } toegevoegd aan onze database.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name }-voorkeuren
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Aangemeld als: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filteren op categorie:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Waarschuwingen over datalekken naar het getroffen e-mailadres sturen
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Er is een manier om uw privacy te beschermen. Doe mee met { -brand-name }.
# Link title
learn-more-link = Meer info.
email-sent = E-mailbericht verzonden!
# Form title
want-to-add = Wilt u nog een e-mailadres toevoegen?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifieer de koppeling die naar { $userEmail } is verstuurd om dit aan { -product-name } toe te voegen.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-mailadres met succes geverifieerd!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = We sturen u een waarschuwing als { $email } door een datalek is getroffen.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = { $nestedSignInLink } om alle e-mailadressen die u hebt aangemeld voor bewaken op lekken te bekijken en te beheren.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Meld u aan

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Beheer alle e-mailadressen op { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Datalekmeldingen
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datalek toegevoegd:
how-hackers-work-desc = Bescherm uw wachtwoorden tegen cybercriminelen, want daar geven ze het meeste om.
what-to-do-after-breach-desc = Vergrendel uw accounts om uw gegevens uit de verkeerde handen te houden.
create-strong-passwords-desc = Maak uw wachtwoorden sterk, veilig en moeilijk te raden.
steps-to-protect-desc = Maak uzelf wegwijs in de meest voorkomende bedreigingen en leer waar u op moet letten.
five-myths-desc = Leer hoe u slechte wachtwoordgewoonten, die het werk van een hacker makkelijk maken, kunt vermijden.
take-further-steps-desc = Ontdek hoe u de risico’s van identiteitsdiefstal kunt beperken om financieel verlies te vermijden.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Wijzigingen opgeslagen!
# Section headline
rec-section-headline = Wat kunt u doen voor dit datalek
rec-section-subhead = We raden u aan de volgende stappen te nemen om uw persoonlijke gegevens veilig te houden en uw digitale identiteit te beschermen.
# Section headline
rec-section-headline-no-pw = Wat kunt u doen om uw persoonlijke gegevens te beschermen
rec-section-subhead-no-pw = Hoewel bij dit datalek geen wachtwoorden zijn gelekt, zijn er nog steeds stappen die u kunt nemen om uw persoonlijke gegevens beter te beschermen.
# Button
see-additional-recs = Aanvullende aanbevelingen

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } komt voor in dit lek. <a>Wat u nu moet doen</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } van uw e-mailadressen komt voor in dit lek. <a>Wat u nu moet doen</a>
       *[other] { $numAffectedEmails } van uw e-mailadressen komen voor in dit lek. <a>Wat u nu moet doen</a>
    }

##

marking-this-subhead = Dit datalek als opgelost markeren
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Nadat u de stappen hebt genomen om dit datalek aan te pakken</span>.
    kunt u het als opgelost markeren. U kunt nog steeds op elk gewenst moment 
    vanaf uw dashboard de details van het lek bekijken.
mark-as-resolve-button = Als opgelost markeren
marked-as-resolved-label = Als opgelost gemarkeerd
undo-button = Ongedaan maken
confirmation-1-subhead = Mooi! U hebt zojuist uw eerste datalek opgelost.
confirmation-1-body = Ga zo door. Kijk op uw dashboard om te zien of er nog meer te doen is.
confirmation-2-subhead = Pak aan, hackers!
confirmation-2-body = U neemt belangrijke stappen om uw online accounts te beschermen.
confirmation-3-subhead = Nog eentje gedaan. Goed werk!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Is uw nieuwe wachtwoord uniek, sterk en moeilijk te raden? <a>Ontdek het hier</a>
generic-confirmation-subhead = Dit lek is als opgelost gemarkeerd
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Ga naar uw dashboard om het resterende lek te bekijken.
       *[other] Ga naar uw dashboard om de resterende lekken te bekijken.
    }
return-to-breach-details-link = Terug naar details van het datalek
go-to-dashboard-link = Naar het dashboard
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% voltooid
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } opgelost
       *[other] { $numResolvedBreaches } opgelost
    }
progress-intro-subhead = Nieuw in { -product-name }: Datalekken als opgelost markeren
progress-intro-message =
    Nadat u de details over een datalek hebt bekeken en stappen om uw persoonlijke 
    gegevens te beschermen hebt genomen, kunt u lekken als opgelost markeren.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } van { $numTotalBreaches } lek als opgelost gemarkeerd
       *[other] { $numResolvedBreaches } van { $numTotalBreaches } lekken als opgelost gemarkeerd
    }
progress-complete = Alle bekende lekken zijn als opgelost gemarkeerd

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>U begint goed!</span> Bekijk de resterende lekken om te lezen welke 
    stappen u kunt nemen.
progress-message-2 =
    <span>Ga zo door!</span> Kleine wijzigingen, zoals het bijwerken van wachtwoorden, hebben grote invloed op
    het veilig houden van uw persoonlijke gegevens.
progress-message-3 = <span>Goed werk om die lekken op te lossen!</span> Ga zo door. U hebt er nog een paar te gaan.
progress-message-4 = <span>Bijna klaar!</span> U bent bijna bij de eindstreep.
progress-complete-message =
    <span>Voelt goed, hè?</span> Als u door wilt gaan, is dit een goed moment om
    andere aanmeldingen met sterkere wachtwoorden bij te werken.

##

resolve-this-breach-link = Dit datalek oplossen
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Als opgelost gemarkeerd:
hide-resolved-button = Opgelost verbergen
show-resolved-button = Opgelost tonen
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Wachtwoord gelekt in onopgeloste datalekken
       *[other] Wachtwoorden gelekt in onopgeloste datalekken
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Bekend datalek als opgelost gemarkeerd
       *[other] Bekende datalekken als opgelost gemarkeerd
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nieuw
mobile-promo-headline = Breng { -brand-name } naar uw telefoon en tablet
mobile-promo-body = Snel, privé en veilig browsen waar u ook bent. Zoek { -brand-name } in de Google Play en App Store.
mobile-promo-cta = Download { -brand-name } op Android en iOS
promo-lockwise-headline = Neem uw wachtwoorden overal mee naartoe
lockwise-promo-body = Houd uw aanmeldingen bij op alle apparaten. Benader ze veilig vanaf uw computer, telefoon of tablet.
promo-lockwise-cta = Download { -brand-lockwise }
fpn-promo-headline = Maskeer uw locatie voor websites en trackers
promo-fpn-body = { -brand-fpn } verwijdert de websites en gegevensverzamelaars die u met advertenties profileren, door uw echte IP-adres te maskeren.
promo-fpn-cta = Download { -brand-fpn }
monitor-promo-headline = Kom meer te weten over nieuwe datalekken
monitor-promo-body = Ontvang de volgende keer een melding wanneer uw persoonlijke gegevens voorkomen in een bekend datalek.
ecosystem-promo-headline = Bescherm uw onlineleven met producten die privacy voorop stellen
ecosystem-promo-body = Alles wat { -brand-name } doet, staat in het teken van onze belofte voor persoonlijke gegevens: neem minder. Houd het veilig. Geen geheimen.
promo-ecosystem-cta = Alle producten
steps-to-resolve-headline = Stappen om dit lek op te lossen
vpn-promo-headline = Dit is het moment om uw online veiligheid te verbeteren.
vpn-promo-copy = { -brand-Mozilla }’s Virtual Private Network helpt uw internetverbinding af te schermen van hackers en spionnen.
vpn-promo-cta = { -brand-mozilla-vpn } downloaden
vpn-promo-headline-new = Bespaar 50% met een jaarabonnement
vpn-promo-copy-new = Bescherm uw onlinegegevens – en kies een VPN-abonnement dat bij u past.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Uw locatie: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Bescherm uzelf</em> met { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Beschermd</em> met { -brand-mozilla-vpn }.
vpn-banner-title-1 = U bent beschermd – bedankt dat u { -brand-mozilla-vpn } gebruikt.
vpn-banner-title-2 = Uw locatie kan worden gevolgd als u geen VPN gebruikt.
vpn-banner-subtitle-2 = Bescherm uw locatie en navigeer veilig in drie stappen
vpn-banner-status-protected = Huidige status: <em>Beschermd ✓</em>
vpn-banner-status-not-protected = Huidige status: <em>Niet beschermd ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP-adres: { $ip-address }
vpn-banner-step-1 = Abonneren op { -brand-mozilla-vpn }
vpn-banner-step-2 = Selecteer een VPN-locatie
vpn-banner-step-3 = Activeer VPN en navigeer veilig
vpn-banner-cta = { -brand-mozilla-vpn } downloaden
# button to expand panel
vpn-banner-cta-expand = Uitvouwen
# button to close panel
vpn-banner-cta-close = Sluiten

## Relay and VPN educational/ad units

ad-unit-relay-cta = Meer info over { -brand-relay }
ad-unit-vpn-cta = Meer info over { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Hoe houdt u uw e-mailadres geheim?
# ad 2 heading
ad-unit-2-do-you-worry = Maakt u zich zorgen over veiligheid op openbare wifinetwerken?
# ad 3 heading
ad-unit-3-stay-in-the-game = Blijf in het spel!
ad-unit-3-lets-you-keep = Met { -brand-mozilla-vpn } kunt u een stabiele verbinding veilig houden, terwijl u games speelt of films streamt.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Voorkom beperking
# ad 3 list item 2
ad-unit-3-be-anywhere = Wees overal ter wereld
# ad 3 list item 3
ad-unit-3-access-more = Toegang tot meer
# ad 4 heading
ad-unit-4-shopping-with = Winkelen met e-mailmaskers
ad-unit-4-want-to-buy = Wilt u iets online kopen en kent u de winkel niet of vertrouwt u deze niet volledig?
ad-unit-4-shop-online = Gebruik een e-mailmasker wanneer u online winkelt. Ontvang de bevestiging op uw echte e-mailadres en schakel het masker later gemakkelijk uit.
# ad 5 heading
ad-unit-5-on-the-go = Onderweg met { -brand-relay }
ad-unit-5-instantly-make = Maak direct en overal een aangepast e-mailmasker!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Onderweg verbinding maken
ad-unit-5-privately-sign-in = Gebruik uw e-mailmasker wanneer u zich privé wilt aanmelden bij uw favoriete lunchroom of openbare wifi
# ad 5 subheading 2
ad-unit-5-email-receipts = Ontvang ontvangstbewijzen per e-mail
ad-unit-5-share-custom-email = Deel een aangepast e-mailmasker voor kassabonnen in de winkel zonder uw echte e-mailadres te delen
# ad 5 subheading 3
ad-unit-5-use-on-phone = Gebruiken op uw telefoon
ad-unit-5-no-matter-where = Waar u ook bent, maak binnen enkele seconden een aangepast e-mailmasker voor alles wat u wilt doen
# ad 6 heading
ad-unit-6-worry-free = Zorgeloos aanmelden
ad-unit-6-want-to-start = Wilt u een nieuw abonnement starten, reageren op een uitnodiging of een voordelige promocode krijgen zonder dat spam uw Postvak IN overspoelt?
ad-unit-6-before-you-complete = Gebruik, voordat u uw volgende registratie voltooit, een e-mailmasker in plaats van uw echte adres om uw gegevens te beschermen en controle te houden over uw Postvak IN

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
-brand-mozilla-account = Mozilla-account
open-in-new-tab-alt = Koppeling openen in een nieuw tabblad

## Search Engine Optimization

meta-desc-2 = Ontdek met { -brand-fx-monitor } of u deel uitmaakte van een datalek. We helpen u te begrijpen wat u vervolgens moet doen en controleren voortdurend op nieuwe datalekken.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Aanmelden
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Datalekken oplossen
site-nav-settings-link = Instellingen
site-nav-help-link = Hulp en ondersteuning
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Probeer onze andere beveiligingshulpmiddelen:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Hoofdmenu
main-nav-button-collapse-label = Menu samenvouwen
main-nav-button-collapse-tooltip = Menu samenvouwen
main-nav-button-expand-label = Menu uitvouwen
main-nav-button-expand-tooltip = Menu uitvouwen
main-nav-label = Navigatie
main-nav-link-home-label = Startpagina
main-nav-link-dashboard-label = Dashboard
main-nav-link-settings-label = Instellingen
main-nav-link-faq-label = FAQ’s
main-nav-link-faq-tooltip = Veelgestelde vragen

## User menu

# Obsolete
menu-button-title = Gebruikersmenu
# Obsolete
menu-button-alt = Gebruikersmenu openen
# Obsolete
menu-list-accessible-label = Accountmenu
# Obsolete
menu-item-fxa-2 = Uw { -brand-mozilla-account } beheren
# Obsolete
menu-item-settings = Instellingen
# Obsolete
menu-item-help = Hulp en ondersteuning
# Obsolete
menu-item-logout = Afmelden
user-menu-trigger-label = Gebruikersmenu openen
user-menu-trigger-tooltip = Profiel
user-menu-manage-fxa-label = Uw { -brand-mozilla-account } beheren
user-menu-settings-label = Instellingen
user-menu-settings-tooltip = { -brand-mozilla-monitor } configureren
user-menu-help-label = Hulp en ondersteuning
user-menu-help-tooltip = Krijg hulp bij het gebruik van { -brand-mozilla-monitor }
user-menu-signout-label = Afmelden
user-menu-signout-tooltip = Afmelden bij { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Servicevoorwaarden
privacy-notice = Privacyverklaring
github = { -brand-github }
footer-nav-all-breaches = Alle datalekken
footer-external-link-faq-label = FAQ’s
footer-external-link-faq-tooltip = Veelgestelde vragen

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Pagina niet gevonden
error-page-error-404-copy = Het spijt ons, de pagina die u zoekt bestaat niet meer.
error-page-error-404-cta-button = Terug
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Er is iets misgegaan
error-page-error-other-copy = Probeer het opnieuw of kom later terug

## Breach overview page

all-breaches-headline-2 = Alle door { -brand-fx-monitor } gedetecteerde datalekken
all-breaches-lead = We volgen alle bekende datalekken om erachter te komen of uw persoonlijke gegevens in gevaar zijn gebracht. Hier is een volledige lijst van alle datalekken die sinds 2007 zijn gemeld.
search-breaches = Datalekken zoeken
# the kind of user data exposed to hackers in data breach.
exposed-data = Gelekte gegevens:

## Public breach detail page

find-out-if-2 = Ontdek of u getroffen bent door dit lek
find-out-if-description = We helpen u snel te zien of uw e-mailadres is gelekt bij dit datalek en te begrijpen wat u vervolgens moet doen.
breach-detail-cta-signup = Controleren op datalekken

## Floating banner

floating-banner-text = Verhoog uw online veiligheid met nieuws, tips en updates van { -brand-Mozilla }.
floating-banner-link-label = Registreren
floating-banner-dismiss-button-label = Nee, bedankt

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: nieuwe naam, vormgeving en nog meer manieren om <b>uw privacy op te eisen</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Sluiten
loading-accessibility = Laden
