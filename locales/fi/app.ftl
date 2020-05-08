## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
        [adessive] Firefox-tilillä
        [allative] Firefox-tilille
        [genitive] Firefox-tilin
        [illative] Firefox-tiliin
        [partitive] Firefox-tiliä
       *[nominative] Firefox-tili
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

# “account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-brand-fx-account = Firefox-tili
terms-and-privacy = Ehdot ja yksityisyys
GitHub-link-title = GitHub
error-scan-page-token = Yrität tarkistaa liian montaa sähköpostiosoitetta todella lyhyessä ajassa. Turvallisuussyistä olemme väliaikaisesti estäneet sinut uusilta hauilta. Voit yrittää myöhemmin uudelleen.
error-could-not-add-email = Sähköpostiosoitetta ei voitu lisätä tietokantaan.
error-not-subscribed = Tätä sähköpostiosoitetta ei ole tilattu { -product-name }iin.
error-hibp-throttled = Liian monta yhteyttä tuotteeseen { -brand-HIBP }.
error-hibp-connect = Virhe muodostettaessa yhteyttä tuotteeseen { -brand-HIBP }.
error-hibp-load-breaches = Tietovuotoja ei voitu ladata.
error-must-be-signed-in = Sinun on oltava kirjautuneena { -brand-fxa }llesi.
error-to-finish-verifying = Sinun on oltava kirjautuneena sisään ensisijaiseen sähköpostiosoitteeseesi, jotta voit vahvistaa tämän sähköpostin { -product-name }iin.
home-title = { -product-name }
home-not-found = Sivua ei löydy.
oauth-invalid-session = Virheellinen istunto
scan-title = { -product-name } : Skannaustulokset
user-add-invalid-email = Virheellinen sähköpostiosoite
user-add-too-many-emails = Seuraat enimmäismäärää sähköpostiosoitteita.
user-add-email-verify-subject = Varmista tilauksesi tuotteelle { -product-name }.
user-add-duplicate-email = Tämä sähköposti on jo lisätty tuotteeseen { -product-name }.
user-add-duplicate-email-part-2 = Tarkista sähköpostiosoitteen { $userEmail } tila { $preferencesLink }-sivulta.
error-headline = Virhe
user-verify-token-error = Vahvistuspoletti vaaditaan.
user-verify-email-report-subject = { -product-name } -raporttisi
user-unsubscribe-token-error = Tilauksen lopettaminen vaatii poletin.
user-unsubscribe-token-email-error = Tilauksen lopettaminen vaatii poletin ja emailHash.
user-unsubscribe-title = { -product-name } : Tilauksen lopettaminen
pwt-section-headline = Vahvemmat salasanat = parempi suojaus
landing-headline = Oikeutesi olla turvassa hakkereilta alkaa täältä.
scan-placeholder = Kirjoita sähköpostiosoite
scan-submit = Hae sähköpostiosoittettasi
scan-error = On oltava kelvollinen sähköposti.
download-firefox-banner-button = Lataa { -brand-name }
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
unsub-headline = Lopeta tilaus tuotteelle { -product-name-nowrap }
unsub-blurb = Tämä poistaa sähköpostisi { -product-name-nowrap } -listalta, jolloin et enää saa hälytyksiä, kun uusista vuodoista ilmoitetaan.
unsub-button = Lopeta tilaus
# Breach data provided by Have I Been Pwned.
hibp-attribution = Vuototiedot tarjoaa { $hibp-link }
share-twitter = Useimmilla ihmisillä on noin 100 tiliä verkossa. Onko jokin tileistäsi paljastunut tietovuodoissa? Selvitä asia.
share-facebook-headline = Selvitä nyt, oletko ollut osa tietovuotoa
share-facebook-blurb = Ovatko tilisi tiedot paljastuneet tietovuodon yhteydessä?
og-site-description = Selvitä nyt { -product-name }illa, oletko ollut osa tietovuotoa. Tilaa hälytyksiä tulevista tietovuodoista ja saa vinkkejä tilien suojaamiseksi.
show-all = Näytä kaikki
fxa-scan-another-email = Haluatko tarkistaa toisenkin sähköpostin?
sign-in = Kirjaudu sisään
sign-out = Kirjaudu ulos
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Hallinnoi { -brand-fxa(case: "partitive") }
have-an-account = Onko sinulla jo tili?
fxa-pwt-summary-2 =
    Hakkereiden on helppo arvata lyhyet, yhden sanan salasanat.
    Käytä vähintään kahta sanaa sekä kirjainten, numeroiden ja erikoismerkkien yhdistelmää.
fxa-pwt-summary-4 =
    Salasanan hallintasovellukset, kuten 1Password, LastPass, Dashlane ja Bitwarden, tallentavat
    salasanasi ja täyttävät ne verkkosivustoille automaattisesti. Ne auttavat jopa luomaan vahvat salasanat.
fxa-pwt-summary-6 =
    Tietovuodot ovat kovassa nousussa. Jos henkilökohtaiset tietosi löytyvät uudessa tietovuodossa, 
    { -product-name } lähettää sinulle hälytyksen jotta voit toimia heti ja suojata tilisi.
fxa-what-to-do-blurb-1 =
    Jos et pysty kirjautumaan sisään, ota yhteyttä sivustoon 
    kysyäksesi kuinka päivittää se. Näetkö tilin, jota et tunnista?
    Tietosi ollaan voitu myydä tai jakaa eteenpäin. Saattaa myös olla,
    että unohdit luoneesi tämän tilin tai yrityksen nimi on muuttunut.
fxa-what-to-do-subhead-2 = Lopeta paljastuneen salasanan käyttö ja vaihda se kaikkialla, missä olet sitä käyttänyt.
fxa-wtd-blurb-2 =
    Hakkerit voivat yrittää käyttää samaa salasanaa ja sähköpostiosoitetta päästäkseen muille tileillesi.
    Käytä erilaista ja yksilöllistä salasanaa jokaisella tilillä, erityisesti pankkitilillä,
    sähköpostissa ja muissa verkkosivustoissa, joihin tallennat henkilökohtaisia tietoja.
fxa-what-to-do-blurb-3 =
    Useimmat tietovuodot paljastavat vain sähköpostisi ja salasanasi, mutta jotkut sisältävät myös finanssitietojasi.
    Jos pankkitilisi tai luottokorttisi numero paljastuu, ilmoita pankillesi mahdollisimman pian.
    Seuraa tiliotteita tuntemattomien maksujen varalta.
fxa-what-to-do-subhead-4 = Apua kaikkien salasanojen muistamiseen ja suojaamiseen.
fxa-what-to-do-blurb-4 =
    Salasanan hallintasovellukset, kuten 1Password, LastPass, Dashlane ja Bitwarden, tallentavat
    salasanasi turvallisesti ja täyttävät ne verkkosivustoille automaattisesti. Käytä salasanahallintasovellusta
    puhelimellasi ja tietokoneellasi, jottei sinun täydy muistaa niitä kaikkia.
# Alerts is a noun
sign-up-for-alerts = Tilaa ilmoitukset
# Link title
frequently-asked-questions = Usein kysytyt kysymykset
about-firefox-monitor = Tietoja { -product-name }ista
# Link title
preferences = Asetukset
# Link title
home = Etusivu
# Link title
breaches = Tietovuodot
# Link title
security-tips = Turvallisuusvinkit
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Avaa { -brand-fxa }-navigointi
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = VIIMEISIN LISÄTTY TIETOVUOTO
# Link title
more-about-this-breach = Lisätietoja tietovuodosta
take-control = Ota henkilökohtaiset tietosi takaisin hallintaasi.
cant-stop-hackers = Et voi estää pahoja tyyppejä hakkeroimasta. Voit kuitenkin välttää huonoja tapoja, jotka helpottavat heidän työtään.
read-more-tips = Lue lisää tietoturvavinkkejä
how-hackers-work = Ymmärrä hakkerien toimintatavat
monitor-your-online-accounts = Tilaa tietovuotoseuranta { -brand-fxa(case: "adessive") }.
stay-alert = Ole perillä uusista tietovuodoista
if-your-info = Jos tietosi ilmenevät uudessa tietovuodossa, lähetämme sinulle hälytyksen.
search-all-emails = Etsi kaikki sähköpostisi tietovuotojen varalta ja vastaanota hälytyksiä uusista vuodoista.
monitor-several-emails = Tarkkaile useita sähköposteja
take-action = Toimi suojataksesi kaikki tilisi
keep-your-data-safe = Selvitä, mitä sinun pitää tehdä pitääksesi tietosi turvassa kyberrikollisilta.
website-breach = Tietovuoto verkkosivustolta
sensitive-breach = Tietovuoto arkaluonteiselta verkkosivulta
data-aggregator-breach = Tietovuoto datakokoajalta
unverified-breach = Vahvistamaton tietovuoto
spam-list-breach = Tietovuoto roskapostilistasta
website-breach-plural = Tietovuodot verkkosivuilta
sensitive-breach-plural = Tietovuodot arkaluonteisilta sivuilta
data-aggregator-breach-plural = Tietovuodot datakokoajilta
unverified-breach-plural = Vahvistamattomat tietovuodot
spam-list-breach-plural = Tietovuodot roskapostilistoilta
what-data = Paljastuneet tiedot:
sensitive-sites = Kuinka { -product-name } käsittelee arkaluonteisia sivustoja?
sensitive-sites-copy =
    { -product-name } paljastaa tämänkaltaisten vuotojen tilit vasta, 
    kun sähköpostiosoite ovat vahvistettu. Tämä tarkoittaa, että olet
    ainoa henkilö, joka voi nähdä, ovatko tietosi vuotaneet (ellei jollain
    muulla ole pääsyä sähköpostiisi).
delayed-reporting-headline = Miksi vuodosta ilmoittaminen kesti niin kauan?
delayed-reporting-copy =
    Vuotaneiden käyttäjätunnusten esiintulo voi kestää vuosia tai kuukausia
    tietovuodosta pimeässä verkossa. Vuodot lisätään tietokantaamme heti, kun ne ovat löydetty ja vahvistettu.
about-fxm-headline = Tietoja: { -product-name }
about-fxm-blurb =
    { -product-name } varoittaa, jos tunnuksesi löytyy tietovuodosta.
    Selvitä, ovat tunnuksesi vaarantuneet, saa ilmoituksia uusista sinua koskevista tietovuodoista
    ja suojaa elämäsi verkossa. Tuotteen { -product-name } tarjoaa { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } varoittaa, jos sähköpostiosoitteesi löytyy tietovuodosta.
    Selvitä, onko tietojasi paljastunut, tutustu miten voit suojata verkkotilejäsi,
    ja saa ilmoituksia tietovuodoista, joista sähköpostiosoitteesi löytyy.
# How Firefox Monitor works
how-fxm-works = Miten { -product-name } toimii
how-fxm-1-headline = Suorita perushaku
how-fxm-1-blurb =
    Etsi sähköpostiosoitettasi vuoteen 2007 ulottuvista
    julkisista tietovuodoista. Tämä perushaku kattaa useimmat tietovuodot
    lukuun ottamatta arkaluonteisia tietoja sisältäviä vuotoja.
how-fxm-2-headline = Tilaa vuotoseurannan ilmoitukset
how-fxm-2-blurb =
    Luo { -brand-fxa } seurataksesi sähköpostiosoitettasi ilmenevissä tietovuodoissa. 
    Kun olet vahvistanut sähköpostiosoitteesi, saat kattavan raportin menneistä vuodoista, 
    mukaan lukien arkaluonteisista vuodoista.
how-fxm-3-headline = Vastaanota ilmoitukset selaimessasi
how-fxm-3-blurb =
    Jos käytät { -brand-name }ia, ilmoitamme sinulle kun vierailet
    sivustolla, jolla on tapahtunut tietovuoto. Saa heti selville, 
    jos tunnuksesi vaarantui ja mitä voit tehdä asialle.
wtd-after-website = Mitä tehdä sivustovuodon jälkeen:
wtd-after-data-agg = Mitä tehdä datakokoajaan kohdistuvan vuodon jälkeen:
what-is-data-agg = Mikä on datakokoaja?
what-is-data-agg-blurb =
    Datakokoajat keräävät tietoja julkisista rekistereistä ja ostavat niitä 
    muilta yrityksiltä. Ne kokoavat nämä tiedot myydäkseen ne yrityksille
    markkinointitarkoituksiin. Näiden tietovuotojen uhreille tästä aiheutuu 
    harvemmin taloudellista vahinkoa, mutta hakkerit voivat käyttää tietoja 
    esiintyäkseen heinä tai profiloidakseen heitä.
protect-your-privacy = Suojaa yksityisyyttäsi verkossa
no-pw-to-change = Toisin kuin verkkosivustoihin kohdistuvissa vuodoissa, tässä tapauksessa ei ole salasanaa vaihdettavaksi.
avoid-personal-info = Vältä henkilökohtaisten tietojen käyttöä salasanoissa
avoid-personal-info-blurb = Verkosta on helppo löytää syntymäpäiviä, osoitteita ja perheenjäsenten nimiä. Älä käytä näitä salasanoissasi.

## What to do after data breach tips

change-pw = Vaihda salasanasi
change-pw-site = Vaihda salasana tälle sivustolle
even-for-old = Myös vanhojen käyttäjätunnusten salasanoja on tärkeä päivittää.
make-new-pw-unique = Tee uudesta salasanasta erilainen ja yksilöllinen
strength-of-your-pw = Salasanan vahvuus vaikuttaa suoraan turvallisuutesi verkossa.
create-strong-passwords = Miten luoda vahvoja salasanoja
stop-reusing-pw = Lopeta samojen salasanojen käyttäminen uudelleen
create-unique-pw = Luo yksilöllisiä salasanoja ja tallenna ne jonnekin turvalliseen sijaintiin, kuten salasanojen hallintasovellukseen.
five-myths = Viisi myyttiä salasanojen hallintasovelluksista
create-a-fxa = Luo { -brand-fxa } saadaksesi kattavia raportteja vuodoista ja vastaanottaaksesi hälytyksiä.
feat-security-tips = Turvallisuuteen liittyvät vinkit tilisi suojaamiseksi
feat-sensitive = Edistynyt haku arkaluonteisissa vuodoissa
feat-enroll-multiple = Saata useita sähköpostiosoitteita vuotoseurantaan
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] ilmenee { $breachCount } tunnetussa vuodossa.
       *[other] ilmenee { $breachCount } tunnetussa vuodossa.
    }
check-for-breaches = Tarkista vuotojen varalta
find-out-what-hackers-know = Selvitä mitä hakkerit tietävät sinusta jo nyt. Opi kuinka pysyä yksi askel edellä hakkereita.
get-email-alerts = Pysy turvassa: Vastaanota sähköpostitse tieto, kun tietojasi ilmenee tunnetussa tietovuodossa
search-for-your-email = Etsi sähköpostiosoitettasi vuoteen 2007 ulottuvista julkisista tietovuodoista.
back-to-top = Takaisin ylös
comm-opt-0 = Lähetä minulle sähköpostia, jos jokin alla olevista sähköpostiosoitteistani on osallisena tietovuodossa.
comm-opt-1 = Lähetä kaikki vuotoilmoitukset osoitteeseen { $primaryEmail }.
stop-monitoring-this = Lopeta tämän sähköpostiosoitteen seuraaminen.
resend-verification = Lähetä uudelleen vahvistussähköposti
add-new-email = Lisää uusi sähköpostiosoite
send-verification = Lähetä vahvistuslinkki
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Vuotojen yhteenveto
show-breaches-for-this-email = Näytä kaikki tätä sähköpostiosoitetta koskevat vuodot.
link-change-primary = Vaihda ensisijainen sähköpostiosoite
remove-fxm = Poista { -product-name }
remove-fxm-blurb =
    Lopeta { -product-name } -hälytykset. { -brand-fxa }si säilyy aktiivisena, ja saatat saada
    muuta tiliin liittyvää viestintää.
# Button title
manage-email-addresses = Hallitse sähköpostiosoitteita
# Link title
latest-breach-link = Katso jouduitko osalliseksi tässä vuodossa
welcome-back = Tervetuloa takaisin, { $userName }!
welcome-user = Tervetuloa, { $userName }!
breach-alert-subject = { -product-name } löysi sähköpostiosoitteesi uudesta tietovuodosta
your-info-was-discovered-headline = Tietojasi paljastettiin uudessa tietovuodossa.
your-info-was-discovered-blurb =
    Olet tilannut { -product-name } -hälytykset, kun sähköpostiosoitteesi
    ilmenee tietovuodossa. Tiedämme tästä vuodosta tällä hetkellä tämän.
what-to-do-after-breach = Mitä tehdä tietovuodon jälkeen
ba-next-step-1 = Vaihda salasanasi vahvaksi ja yksilölliseksi.
ba-next-step-blurb-1 =
    Vahva salasana sisältää pieniä ja isoja kirjaimia, erikoismerkkejä ja
    numeroita. Vahva salasana ei sisällä henkilökohtaisia tietoja kuten
    osoitteita, syntymäpäiviä tai perheenjäsenten nimiä.
ba-next-step-2 = Lopeta paljastuneen salasanan käyttö.
ba-next-step-blurb-2 =
    Hakkerit voivat löytää salasanasi anonyymistä verkosta ja käyttää sitä
    kirjautuakseen tileillesi. Paras tapa suojata tiliäsi
    on käyttää yksilöllisiä salasanoja jokaiselle tilille.
ba-next-step-3 = Apua aiempaa parempien salasanojen luomiseen ja niiden suojaamiseen.
ba-next-step-blurb-3 =
    Luo vahvoja, yksilöllisiä salasanoja salasananhallintasovelluksella. Nämä sovellukset tallentavat turvallisesti 
    kaikki kirjautumistietosi, ja voit käyttää niitä kaikilla laitteillasi.
faq1 = En tunnista tätä yritystä tai verkkosivustoa. Miksi olen osallisena vuodossa?
faq2 = Miksi minua huomautettiin vuodosta näin pitkän ajan jälkeen?
faq3 = Kuinka tiedän, että tämä on aito sähköposti { -product-name }lta?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } UUSI VUOTO LÖYTYNYT
       *[other] { $breachCount } UUTTA VUOTOA LÖYTYNYT
    }
sign-up-headline-1 = Vastaanota hälytyksiä { -brand-fxa(case: "adessive") }.
account-not-required = { -brand-name }-selain ei ole pakollinen { -brand-fxa }n käyttämiseksi. Saatat saada tietoja { -brand-Mozilla }-palveluista.
was-your-info-exposed = Paljastuiko sinun tietojasi ”{ $breachName }”-tietovuodossa?
find-out-if = Ota selvää, paljastuiko tietojasi tässä vuodossa.
fb-not-comp = Tämä sähköpostiosoite ei esiintynyt { $breachName }-vuodossa.
other-breaches-found =
    { $breachCount ->
        [one] Kuitenkin se löytyy { $breachCount } tunnetusta vuodosta.
       *[other] Kuitenkin se löytyy { $breachCount } tunnetusta vuodosta.
    }
fb-comp-only = Sähköposti löytyi { $breachName }-vuodosta.
fb-comp-and-others =
    { $breachCount ->
        [one] Sähköposti löytyi { $breachCount } tunnetusta tietovuodosta, mukaan lukien { $breachName }.
       *[other] Sähköposti löytyi { $breachCount } tunnetusta tietovuodosta, mukaan lukien { $breachName }.
    }
no-other-breaches-found = Muita vuotoja ei löytynyt perushaulla.
no-results-blurb = Valitettavasti tästä vuodosta ei ole merkintää tietokannassamme.
all-breaches-headline = Kaikki { -product-name }in tuntemat tietovuodot
search-breaches = Etsi vuotoja
# "Appears in-page as: Showing: All Breaches"
currently-showing = Näytetään:

## Updated error messages

error-bot-headline = Haut estetty väliaikaisesti
error-bot-blurb =
    Tekemäsi haut useilla sähköpostiosoitteilla lyhyessä ajassa aiheutti huolen,
    että saatat olla botti. Sinut on toistaiseksi estetty tekemästä uusia hakuja.
    Yritä myöhemmin uudelleen.
error-csrf-headline = Istunto aikakatkaistiin
error-csrf-blurb = Napsauta selaimen Takaisin-painiketta, päivitä sivu ja yritä uudelleen.
error-invalid-unsub = Kuinka lopetan { -product-name } -hälytysten tilauksen
error-invalid-unsub-blurb =
    Voit lopettaa tilauksen { -product-name }in lähettämistä viesteistä.
    Tarkista saapuneet viestisi ja etsi viestejä lähettäjältä { -brand-team-email }.
    Napsauta tilauksen lopetuslinkkiä sähköpostiviestin lopusta.
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
fxa-primary-email = { -brand-fxa(case: "genitive") } ensisijainen sähköpostiosoite
what-is-a-website-breach = Mitä verkkosivuston vuodolla tarkoitetaan?
website-breach-blurb = Tietovuoto verkkosivustolta tapahtuu, kun kyberrikolliset varastavat, kopioivat tai paljastavat verkkotilien henkilökohtaisia tietoja. Tämä on usein seurausta hakkereiden löytämästä heikkoudesta verkkosivuston tietoturvassa. Tiedot voivat vuotaa myös vahingossa.
security-tips-headline = Tietoturvavinkkejä itsensä suojaamiseen hakkereilta
steps-to-protect = Verkkoidentiteettisi suojaamiseksi tarvittavat toimenpiteet
take-further-steps = Lisätoimia suojellaksesi henkilöllisyyttäsi
alert-about-new-breaches = Varoita minua uusista vuodoista
see-if-youve-been-part = Ota selvää, oletko ollut osallisena verkossa tapahtuneessa tietovuodossa.
get-ongoing-breach-monitoring = Aseta jatkuva vuotoseuranta useille sähköpostiosoitteille.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Selvitä
new-unsub-error = Sinun on peruutettava tilauksesi yhdestä sähköpostiosoitteesta, johon { -product-name } lähetti viestiä.
other-known-breaches-found =
    { $breachCount ->
        [one] Se esiintyi kuitenkin { $breachCount } muussa tunnetussa vuodossa.
       *[other] Se esiintyi kuitenkin { $breachCount } muussa tunnetussa vuodossa.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Lisätietoja, mukaan lukien:
# Title
email-addresses-title = Sähköpostiosoitteet
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Yhteenveto
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachTitle } vuodettiin { $breachDate }. Kun tietovuoto oli löydetty  ja vahvistettu, se lisättiin tietokantaamme { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name }-asetukset
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Kirjautuneena käyttäjänä: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Suodata:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Valikko
to-affected-email = Lähetä vuotoilmoitukset vuodettuun sähköpostiosoitteeseen
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = On tapa suojata yksityisyyttään. Liity { -brand-name }iin.
# Link title
learn-more-link = Lue lisää.
email-sent = Sähköposti lähetetty!
# Form title
want-to-add = Haluatko lisätä toisen sähköpostiosoitteen?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Vahvista linkki, joka lähetettiin osoitteeseen { $userEmail }, lisätäksesi sen { -product-name }iin.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Sähköposti vahvistettu onnistuneesti!
email-added-to-subscription = Ilmoitamme sinulle, jos { $email } löytyy tietovuodoista.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = { $nestedSignInLink }, jotta voit nähdä ja hallita sähköpostisoitteita, joille olet asettanut tietovuotojen seurannan.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Kirjaudu sisään

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Hallitse kaikkia sähköpostiosoitteita { $preferencesLink }-kohdassa.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Tietovuotoilmoitukset
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Vuoto lisätty:
how-hackers-work-desc = Suojaa salasanasi verkkorikollisilta, koska niistä he välittävät eniten.
what-to-do-after-breach-desc = Lukitse tilisi ja pidä tietosi pois vääristä käsistä.
create-strong-passwords-desc = Tee salasanoistasi vahvoja, turvallisia ja vaikeasti arvattavia.
steps-to-protect-desc = Ymmärrä useimmat yleisimmät uhat ja tiedä mihin varautua.
five-myths-desc = Opi, kuinka välttää huonot salasanakäytännöt.
take-further-steps-desc = Ota selvää, kuinka voit pienentää identiteettivarkauden riskejä estääksesi taloudellisia menetyksiä.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Muutokset tallennettu!
# Section headline
rec-section-headline = Mitä tehdä tälle vuodolle
rec-section-subhead = Suosittelemme sinua tekemään seuraavat asiat suojataksesi henkilökohtaisia tietojasi ja digitaalista henkilöyttäsi.
# Section headline
rec-section-headline-no-pw = Mitä tehdä henkilökohtaisten tietojen suojaamiseksi
rec-section-subhead-no-pw = Vaikka salasanoja ei paljastunutkaan tässä vuodossa, voit tehdä asioita suojataksesi henkilökohtaisia tietojasi aiempaa paremmin.
# Button
see-additional-recs = Katso lisäsuositukset

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

resolve-top-notification = { $affectedEmail } ilmeni tässä vuodossa. <a>Mitä tehdä seuraavaksi</a>
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } sähköpostiosoitteistasi ilmeni tässä vuodossa. <a>Mitä tehdä seuraavaksi</a>
    }

##

marking-this-subhead = Merkitään tämä vuoto selvitetyksi
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Kun olet tehnyt tarvittavat toimet vuotoon liittyen</span>,
    voit merkitä sen selvitetyksi. Näet kyseisen vuodon tiedot milloin tahansa 
    kojelaudalta.
mark-as-resolve-button = Merkitse selvitetyksi
marked-as-resolved-label = Merkitty selvitetyksi
undo-button = Kumoa
confirmation-1-subhead = Hienoa! Selvitit juuri ensimmäisen vuodon.
confirmation-1-body = Jatka samaan malliin. Tarkista kojelaudalta, onko siellä vielä lisää tehtävää.
confirmation-2-subhead = Siitä saatte, hakkerit!
confirmation-2-body = Otat tärkeitä askeleita verkkotiliesi suojaamiseksi.
confirmation-3-subhead = Taas yksi hoidettu, hienoa työtä!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Onko uusi salasanasi yksilöllinen, vahva ja vaikeasti arvattava? <a>Ota selvää</a>
generic-confirmation-subhead = Tämä vuoto on merkitty selvitetyksi
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Näet jäljellä olevan vuodon kojelaudalta.
       *[other] Näet jäljellä olevat vuodot kojelaudalta.
    }
return-to-breach-details-link = Palaa vuodon tietoihin
go-to-dashboard-link = Siirry kojelaudalle
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = { $percentComplete } % valmiina
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
       *[other] { $numResolvedBreaches } selvitetty
    }
progress-intro-subhead = Uutta { -product-name }issa: Merkitse vuodot selvitetyiksi
progress-intro-message =
    Kun olet tutustunut vuodon tietoihin ja ottanut henkilökohtaisia 
    tietojasi suojaavia askelia, voit merkitä vuodot selvitetyiksi.
progress-status =
    { $numTotalBreaches ->
       *[other] { $numResolvedBreaches }/{ $numTotalBreaches } vuotoa merkitty selvitetyiksi
    }
progress-complete = Kaikki tunnetut vuodot on merkitty selvitetyiksi

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Hieno aloitus!</span> Tutustu jäljellä oleviin vuotoihin 
    ottaaksesi selvää mitä tehdä seuraavaksi.
progress-message-2 =
    <span>Jatka samaan malliin!</span> Pienet muutokset, kuten salasanojen muuttaminen, 
    merkitsevät suuresti henkilökohtaisten tietojen suojaamisessa.
progress-message-3 = <span>Hienoa työtä vuotojen selvittämisessä!</span> Vielä on muutama jäljellä.
progress-message-4 = <span>Melkein valmista!</span> Lähestyt maalilinjaa.
progress-complete-message =
    <span>Eikö tunnukin hyvältä?</span> Jos haluat jatkaa, nyt on hyvä aika 
    päivittää muut kirjautumistiedot aiempaa vahvemmilla salasanoilla.

##

resolve-this-breach-link = Selvitä tämä vuoto
# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Merkitty selvitetyksi:
hide-resolved-button = Piilota selvitetyt
show-resolved-button = Näytä selvitetyt
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Salasana paljastunut selvittämättömissä vuodoissa
       *[other] Salasana paljastunut selvittämättömissä vuodoissa
    }
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Tunnettu tietovuoto merkitty selvitetyksi
       *[other] Tunnetut tietovuodot merkitty selvitetyksi
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Uusi
mobile-promo-headline = Tuo { -brand-name } puhelimeesi ja tablet-laitteeseesi
mobile-promo-body = Nopeaa, yksityistä ja turvallista selaamista missä tahansa liikutkin. { -brand-name } on saatavilla Google Playsta ja App Storesta.
mobile-promo-cta = Hanki { -brand-name } Androidille ja iOS:lle
promo-lockwise-headline = Ota salasanasi mukaan kaikkialle
lockwise-promo-body = Pidä kirjautumistietosi tallessa kaikilla laitteillasi. Käytä kirjautumistietojasi tietokoneelta, puhelimesta tai tablet-laitteelta.
promo-lockwise-cta = Hanki { -brand-lockwise }
fpn-promo-headline = Piilota sijaintisi verkkosivustoilta ja seuraimilta
promo-fpn-body = { -brand-fpn } peittää todellisen IP-osoitteesi ja heittää syrjään verkkosivustot sekä tiedonkerääjät, jotka profiloivat sinua mainoksin.
promo-fpn-cta = Hanki { -brand-fpn }
monitor-promo-headline = Pysy ajan tasalla uusista tietovuodoista
monitor-promo-body = Vastaanota ilmoitus, kun henkilökohtaisia tietojasi paljastuu seuraavan kerran tunnetussa tietovuodossa.
ecosystem-promo-headline = Suojaa elämääsi verkossa yksityisyyden ensisijaiseksi asettavilla tuotteilla
ecosystem-promo-body = Kaikki { -brand-name }-tuotteet kunnioittavat henkilötietolupaustamme: Kerää vähemmän. Pidä ne turvassa. Ei salaisuuksia.
promo-ecosystem-cta = Katso kaikki tuotteet
