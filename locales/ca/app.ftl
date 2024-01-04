# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Compte del Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub

error-scan-page-token = Heu cercat massa adreces electròniques en un període de temps curt. Per motius de seguretat, us hem blocat temporalment i no podreu fer cerques noves. Torneu a provar-ho més tard.
error-could-not-add-email = No s'ha pogut afegir l'adreça electrònica a la base de dades.
error-not-subscribed = Aquesta adreça electrònica no està subscrita al { -product-name }.
error-hibp-throttled = Hi ha massa connexions a { -brand-HIBP }.
error-hibp-connect = S'ha produït un error en connectar-se a { -brand-HIBP }.
error-hibp-load-breaches = No s'han pogut carregar les filtracions.
error-must-be-signed-in = Heu d'iniciar la sessió al vostre { -brand-fxa }.
error-to-finish-verifying = Per acabar de verificar aquesta adreça electrònica del { -product-name }, heu d'haver iniciat la sessió en el vostre compte de correu principal.

home-title = { -product-name }
home-not-found = No s'ha trobat la pàgina.

oauth-invalid-session = La sessió no és vàlida

scan-title = { -product-name }: Resultats de l'anàlisi

user-add-invalid-email = L'adreça electrònica no és vàlida
user-add-too-many-emails = Esteu supervisant el nombre màxim d'adreces electròniques.
user-add-email-verify-subject = Verifiqueu la vostra subscripció al { -product-name }.
user-add-duplicate-email = Aquesta adreça electrònica ja s'ha afegit al { -product-name }.
user-add-duplicate-email-part-2 = Aneu a { $preferencesLink } per comprovar l'estat de { $userEmail }.

error-headline = Error
user-verify-token-error = Cal el testimoni de verificació.
user-verify-email-report-subject = El vostre informe del { -product-name }

user-unsubscribe-token-error = Cal un testimoni per cancel·lar la subscripció.
user-unsubscribe-title = { -product-name } : Cancel·la la subscripció

pwt-section-headline = Contrasenyes més segures = Millor protecció

scan-placeholder = Escriviu una adreça electrònica
scan-submit = Cerqueu la vostra adreça electrònica
scan-error = Ha de ser un correu electrònic vàlid.

download-firefox-banner-button = Baixa el { -brand-name }

# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = S'ha enviat

sign-up = Registre
form-signup-error = Ha de ser un correu electrònic vàlid

# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data de la filtració:

# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Comptes afectats:

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dades afectades:

unsub-headline = Cancel·leu la subscripció al { -product-name-nowrap }
unsub-button = Cancel·la la subscripció

# Breach data provided by Have I Been Pwned.
hibp-attribution = Informació de les filtracions proporcionada per { $hibp-link }

show-all = Mostra-ho tot

fxa-scan-another-email = Voleu comprovar una altra adreça?

sign-out = Tanca la sessió

# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestiona el { -brand-fxa }

have-an-account = Ja teniu un compte?

# Link title
frequently-asked-questions = Preguntes més freqüents

about-firefox-monitor = Quant al { -product-name }

# Link title
preferences = Preferències

# Link title
home = Inici

# Link title
security-tips = Consells de seguretat

fxa-account = { -brand-fxa }

# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Obre la navegació del { -brand-fxa }

# Link title
more-about-this-breach = Més informació sobre aquesta filtració

take-control = Recupereu el control de les vostres dades personals.

website-breach = Filtració de lloc web

about-fxm-headline = Quant al { -product-name }

# How Firefox Monitor works
how-fxm-works = Com funciona el { -product-name }

what-is-data-agg = Què és un agregador de dades?
what-is-data-agg-blurb = Els agregadors de dades, o intermediaris de dades, recopilen informació de registres públics i la compren a altres empreses. Recopilen aquestes dades per vendre-les a empreses amb finalitats de màrqueting. Les víctimes d'aquestes filtracions són menys propenses a sofrir frau financer, però els pirates informàtics podrien fer servir aquestes dades per suplantar-les o crear perfils seus.

protect-your-privacy = Protegiu la vostra privadesa a la xarxa

## What to do after data breach tips

change-pw = Canvieu la contrasenya
change-pw-site = Canvieu la contrasenya d'aquest lloc

create-strong-passwords = Com crear contrasenyes segures

stop-reusing-pw = Deixeu de reutilitzar les mateixes contrasenyes
create-unique-pw = Creeu contrasenyes úniques i deseu-les en algun lloc segur, com ara un gestor de contrasenyes.
five-myths = 5 mites sobre els gestors de contrasenyes

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Apareix en { $breachCount } filtració coneguda.
       *[other] Apareix en { $breachCount } filtracions conegudes.
    }

check-for-breaches = Comprova les filtracions

back-to-top = Torna a dalt

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Resum de filtracions

## Variables:
##   $userName (String) - Username

welcome-user = Us donem la benvinguda, { $userName }.

##


## Variables:
##   $breachName (String) - Number of the breach

##

# "Appears in-page as: Showing: All Breaches"
currently-showing = S'està mostrant:

## Updated error messages

error-csrf-headline = S’ha esgotat el temps de la sessió
error-csrf-blurb = Feu clic al botó «Enrere» del navegador, actualitzeu la pàgina i torneu-ho a provar.


# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informació addicional, com ara:

# Title
email-addresses-title = Adreces electròniques

# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtra per categoria:

# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menú

# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Hi ha una manera de protegir la vostra privadesa. Uniu-vos al { -brand-name }.

# Link title
learn-more-link = Més informació.

email-sent = S’ha enviat el missatge.

# Form title
want-to-add = Voleu afegir una altra adreça?

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.


##

# This message appears after a user has successfully updated their communication settings.
changes-saved = S'han desat els canvis.

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".


##


undo-button = Desfés

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".


##

promo-lockwise-headline = Accediu a les vostres contrasenyes des de qualsevol lloc

ecosystem-promo-body = Tots els productes { -brand-name } respecten el nostre «Compromís sobre les dades personals»: recollir menys dades, mantenir-les segures i sense secrets.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`


## Relay and VPN educational/ad units


# Monitor V2


## The following messages are brands and should be kept entirely in English


-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##

## Search Engine Optimization


## Header

sign-in = Inicia la sessió

## Site navigation


## User menu


## Footer

## Error page

## Breach overview page

## Public breach detail page

## Floating banner

