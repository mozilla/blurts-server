## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox-tili
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send



terms-and-privacy = Ehdot ja yksityisyys
GitHub-link-title = GitHub
error-scan-page-token = Yrität tarkistaa liian monta sähköpostiosoitetta todella lyhyessä ajassa. Turvallisuussyistä olemme väliaikaisesti estäneet sinut uusilta hauilta. Voit yrittää myöhemmin uudelleen.
error-could-not-add-email = Sähköpostiosoitetta ei voitu lisätä tietokantaan.
error-hibp-throttled = Liian monta yhteyttä tuotteeseen { -brand-HIBP }.
error-hibp-connect = Virhe muodostettaessa yhteyttä tuotteeseen { -brand-HIBP }.
error-hibp-load-breaches = Tietovuotoja ei voitu ladata.
home-title = { -product-name }
home-not-found = Sivua ei löydy.
oauth-invalid-session = Virheellinen istunto
user-add-invalid-email = Virheellinen sähköpostiosoite
error-headline = Virhe
pwt-section-headline = Vahvemmat salasanat = parempi suojaus
scan-submit = Hae sähköpostiosoittettasi
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Lähetetty!
sign-up = Rekisteröidy
form-signup-error = On oltava kelvollinen sähköposti
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Vuotopäivä:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Paljastuneet tilit:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Paljastuneet tiedot:
unsub-button = Lopeta tilaus
show-all = Näytä kaikki
fxa-scan-another-email = Haluatko tarkistaa toisenkin sähköpostin?
sign-in = Kirjaudu sisään
sign-out = Kirjaudu ulos
have-an-account = Onko sinulla jo tili?
# Alerts is a noun
sign-up-for-alerts = Tilaa ilmoitukset
# Link title
frequently-asked-questions = Usein kysytyt kysymykset
# Link title
preferences = Asetukset
# Link title
home = Etusivu
# Link title
breaches = Tietovuodot
# Link title
security-tips = Turvallisuusvinkit
fxa-account = { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = VIIMEISIN LISÄTTY TIETOVUOTO
# Link title
more-about-this-breach = Lisätietoja tietovuodosta

## What to do after data breach tips

# Button title
manage-email-addresses = Hallitse sähköpostiosoitteita
# Link title
latest-breach-link = Katso jouduitko osalliseksi tässä vuodossa
welcome-back = Tervetuloa takaisin, { $userName }!
welcome-user = Tervetuloa, { $userName }!
search-breaches = Etsi vuotoja
# "Appears in-page as: Showing: All Breaches"
currently-showing = Näytetään:

## Updated error messages

error-bot-headline = Haut estetty väliaikaisesti
error-csrf-headline = Istunto aikakatkaistiin
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] seurattava sähköpostiosoite
       *[other] seurattavaa sähköpostiosoitetta
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] salasana paljastunut kaikissa vuodoissa
       *[other] salasanaa paljastunut kaikissa vuodoissa
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] tunnettu tietovuoto paljasti tietojasi
       *[other] tunnettua tietovuotoa paljasti tietojasi
    }
# Button
see-additional-breaches = Tutustu muihin vuotoihin
scan-results-known-breaches =
    { $breachCount ->
        [one] Tämä sähköpostiosoite löytyi 1 tunnetusta tietovuodosta.
       *[other] Tämä sähköpostiosoite löytyi { $breachCount } tunnetusta tietovuodosta.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Tulokset haulla: { $userEmail }
other-monitored-emails = Muut seurattavat sähköpostiosoitteet
email-verification-required = Sähköpostiosoitteen vahvistus vaaditaan
alert-about-new-breaches = Varoita minua uusista vuodoista
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Selvitä
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Lisätietoja, mukaan lukien:
# Title
email-addresses-title = Sähköpostiosoitteet
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Kirjautuneena käyttäjänä: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Suodata:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Valikko
# Link title
learn-more-link = Lue lisää.
email-sent = Sähköposti lähetetty!
# Form title
want-to-add = Haluatko lisätä toisen sähköpostiosoitteen?

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Sähköposti vahvistettu onnistuneesti!
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Kirjaudu sisään



# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Vuoto lisätty:
