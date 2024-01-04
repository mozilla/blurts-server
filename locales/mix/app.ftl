# Strings for the main app

## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub

error-scan-page-token = Ni kunu ndatavu kua tutu nu inka kue korreo xoo kii. takua koo ña ku, ntsasikue ña nudukuku. ku kunaku tsini.
error-could-not-add-email = Ma ku chikai korreo nu inka kue tutu.
error-not-subscribed = Koó korreo nu tutu { -product-name }.
error-hibp-throttled = kua conexion nu { -brand-HIBP }.
error-hibp-connect = Ma ku ndachitain tsi { -brand-HIBP }.
error-hibp-load-breaches = Ma ku snai tutu.
error-must-be-signed-in = tsini ñu'u kitsau tsi { -brand-fxa }
error-to-finish-verifying = Takua na ku luncheu dirección yo { -product-name }, tsini ñu'u kivu tsi korreo meu.

home-title = { -product-name }
home-not-found = Koo Página ndani'i

oauth-invalid-session = Ma ku kitsau

scan-title = { -product-name } : Tutu nduki

user-add-invalid-email = Vaà korreo
user-add-too-many-emails = Nduki kue tutu ña korreo.
user-add-email-verify-subject = Kunchee suscripción nu { -product-name }.
user-add-duplicate-email = Tsa inka korreo ku nu { -product-name }.
user-add-duplicate-email-part-2 = Kunche'e { $preferencesLink } takua kunu nixi ka { $userEmail }.

error-headline = Vaá
user-verify-token-error = tsiniñu'un token.
user-verify-email-report-subject = Tutu ña { -product-name }

user-unsubscribe-token-error = Eliminar suscripción quiere un token.
user-unsubscribe-token-email-error = Eliminar suscripción requiere un token y con correo electrónico.
user-unsubscribe-title = { -product-name }: Stoo sivi

pwt-section-headline = Tu'un see kanu = Ña va'a kui

landing-headline = Tu derecho a estar segura/o de los hackers inicia aquí.

scan-placeholder = Chaa sivi korreo
scan-submit = Nduku korreo ku
scan-error = Vaa sivi Korreo nchau.

download-firefox-banner-button = Snuu { -brand-name }

# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = ¡Tachuin¡

sign-up = Chaa sivu
form-signup-error = Va'a sivi korreo yo

# breach-date = the calendar date a particular data theft occurred. 
breach-date = Fecha de violación:

# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:

unsub-headline = Stoo sivu ña { -product-name-nowrap }
unsub-blurb = Ku  stoi korreo nu { -product-name-nowrap } cha koo tutu ku snai nukú.
unsub-button = Stoó sivu

# Breach data provided by Have I Been Pwned.
hibp-attribution = Filtración de datos proporcionada por { $hibp-link }

share-twitter = La mayoría de las personas tienen alrededor de 100 cuentas en línea. ¿Alguno de los tuyos fue expuesta a una violación de datos? Averigua.
share-facebook-headline = Nduku ntyi ña va'a
share-facebook-blurb = ¿Kuenta ku yee ña va'a?

show-all = Snaa ntia

sign-out = Kee

# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Sama { -brand-fxa }

have-an-account = ¿A tsa kumu kuenta?

# Alerts is a noun
sign-up-for-alerts = Chaa sivu takua na chihcuin tu'un

# Link title
frequently-asked-questions = Preguntas frecuentes

about-firefox-monitor = Tsa ña'a { -product-name }

# Link title
preferences = Preferencias

# Link title
home = Kitsa

fxa-account = { -brand-fxa }

# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Kuna nu nduku { -brand-fxa }

# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMA FILTRACIÓN AÑADIDA

monitor-several-emails = Kunche'e kua korreo
take-action = Actúa para proteger tus cuentas

website-breach = Va'a sitio web
sensitive-breach = Filtración de datos sensible del sitio web
data-aggregator-breach = Filtración de recopilador de datos
unverified-breach = Filtración va'á
spam-list-breach = Lista va'á

website-breach-plural = Filtraciones de sitios web
sensitive-breach-plural = Filtraciones sensibles
data-aggregator-breach-plural = Filtraciones de recopiladores de datos
unverified-breach-plural = Filtraciones sin verificar
spam-list-breach-plural = Listas de filtraciones no deseadas

what-data = Qué datos fueron comprometidos:

about-fxm-headline = Tsa ña { -product-name }

# How Firefox Monitor works
how-fxm-works = Nixi sachuin { -product-name }

how-fxm-1-headline = A kunu ndukuku ña'a

how-fxm-2-headline = Ntachaa takua kuncheu ana nche'e korreoku

wtd-after-website = Ntyi sau tatu skuinana página web

what-is-data-agg = ¿Ntyi ku agregador de datos?

protect-your-privacy = Proteger tu privacidad en línea
no-pw-to-change = Kue tsiniñu samu tu'un seé.

avoid-personal-info = Nchau sivu tsi tu'un seé

## What to do after data breach tips

change-pw = Sama tu'un see
change-pw-site = Sama tu'un see ña sitio

check-for-breaches = Nduku filtracion

back-to-top = Nchiko sata

add-new-email = Chaa sivi tsa'a korreoku
send-verification = Tachu'un tu'un

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Tutu filtración

remove-fxm = Xita { -product-name }

## Variables:
##   $userName (String) - Username

##


new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } FILTRACIÓN TSAA
       *[other] { $breachCount }  FILTRACIÓN TSAA
    }

sign-up-headline-1 = Kunchee tsi { -brand-fxa }.

## Variables:
##   $breachName (String) - Number of the breach

##

# "Appears in-page as: Showing: All Breaches"
currently-showing = Sna'a:

## Updated error messages

error-csrf-headline = Ntsinu
error-csrf-blurb = Katavi  botón sata ña navegador ku, nta sa tsa'a página cha kitsa tuku.

error-invalid-unsub = Nixi stoo sivú nu { -product-name }

# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Dirección de correo monitoreada
       *[other] Direcciones de correo monitoreadas
    }


# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Contraseña expuesta en todas las filtraciones
       *[other] Contraseñas expuestas en todas las filtraciones
    }

# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Filtración de datos conocida ha expuesto tu información
       *[other] Filtraciones de datos conocidas han expuesto tu información
    }

# Button
see-additional-breaches = Ver filtraciones adicionales

# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Tutu : { $userEmail }

other-monitored-emails = Otros correos monitoreados
fxa-primary-email = { -brand-fxa } korreo - principal


# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Nduku

# Title
email-addresses-title = Lista korreo

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Kunche'e ntia

# Title appearing on the Preferences dashboard. 
monitor-preferences = Preferencias de { -product-short-name }

# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Kitsa tana { $userEmail }

# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Katsi categoría:

# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Katsi
to-affected-email = Tachu'un lista filtracion ña korreo va'a

# Link title
learn-more-link = Skua'a kuakaa.

email-sent = Ndachuin korreo!

# Form title
want-to-add = ¿A kunu chau inka korreo?

# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Kunche'e enlace tachu'un nu { $userEmail } takua chau ña nu { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = ¡Korreo va'a!

# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Kitsaa

##

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Notificaciones sobre filtraciones

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Filtración añadida:

# This message appears after a user has successfully updated their communication settings.
changes-saved = ¡Inka vai!

# Section headline
rec-section-headline = Ntyi sau tsi filtración

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".


##


mark-as-resolve-button = Katavi ña va'a ye
marked-as-resolved-label = Tsa ye vai


undo-button = Stoò

confirmation-1-subhead = ¡Perfecto! Acabas de resolver tu primera filtración.
confirmation-2-subhead = ¡kunche, hackers!
confirmation-3-subhead = Ntsi ian. ¡Va'a chu'un!

go-to-dashboard-link = Kunche'e panel de control

# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = { $percentComplete }% ntsinu

# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } ntsinu
       *[other] { $numResolvedBreaches } ntsinu
    }

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".


##

resolve-this-breach-link = Ndasa vaa filtración

# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Tsa ye vai:

hide-resolved-button = Chika see ña ye va'a

# A status indicator that appears in the top right corner of new breach cards
new-breach = Tsa'a

mobile-promo-headline = Kuná { -brand-name } nu celular tsi tablet
mobile-promo-body = Kunche'e vityi, se'e nchi inkau. Nduku { -brand-name } nu Google Play tsi App Store.
mobile-promo-cta = Nduku { -brand-name } nu Android tsi iOS

promo-lockwise-headline = Kuná tu'un see nchi tsiku
promo-lockwise-cta = Kunche'e { -brand-lockwise }

promo-fpn-cta = Kunche'e { -brand-fpn }

promo-ecosystem-cta = Kunche'e nti'i producto

steps-to-resolve-headline = Nixi ndu va'a filtración

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

## Relay and VPN educational/ad units

# Monitor V2

## The following messages are brands and should be kept entirely in English

-brand-mozilla-vpn = Mozilla VPN

##

## Search Engine Optimization

## Header

sign-in = Kitsa

## Site navigation

## User menu

## Footer

## Error page

## Breach overview page

search-breaches = Nduku filtración

## Public breach detail page

## Floating banner

