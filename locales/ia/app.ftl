# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-fxa = Conto Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premio
-brand-monitor-premium = Monitor Premio
-brand-mozilla-foundation = Le fundation Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = VPN Mozilla
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Iste adresse de e-mail non es inscribite a { -product-name }.
error-hibp-throttled = Troppo de connexiones a { -brand-HIBP }.
error-hibp-connect = Error durante le connexion a { -brand-HIBP }.
user-add-invalid-email = Email non valide
user-add-too-many-emails = Tu jam survelia le maxime numero de adresses email.
user-add-duplicate-email = Iste email ha jam essite addite a { -product-name }.
user-add-verification-email-just-sent = Un altere email de verification non pote esser inviate si rapidemente. Retenta plus tarde.
user-add-unknown-error = Alco errate eveniva addente le adresse email. Reproba.
user-delete-unknown-error = Alco errate eveniva removente un adresse email. Reproba.
user-verify-token-error = Un token de verification es necessari.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos compromittite:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Datos sur le violation fornite per { $hibp-link }
show-all = Monstrar toto
sign-out = Clauder session
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gerer { -brand-fxa }
# Link title
preferences = Preferentias
# Link title
home = Initio
# Link title
security-tips = Consilios de securitate
# Link title
more-about-this-breach = Plus sur iste violation
monitor-several-emails = Controla plure emails
website-breach = Violation de sitos web
sensitive-breach = Violation de sitos web sensibile
data-aggregator-breach = Violation de aggregator de datos
what-data = Que datos ha essite compromittite:
sensitive-sites = Como { -product-name } tracta le sitos sensibile?
sensitive-sites-copy = { -product-name } revela solmente le contos associate con iste typos de violationes post que un adresse de e-mail ha essite verificate. Isto significa tu es le sol persona qui pote vider si tu informationes es includite in iste violation (a minus que alcuno altere ha accesso a tu conto de e-mail).
delayed-reporting-headline = Proque ha prendite tante tempore signalar iste violation?
delayed-reporting-copy = A vices, il pote prender menses o annos ante que le credentiales exponite in un violation de datos appare sur le web obscur. Le violationes es addite a nostre base de datos promptemente post lor discoperta e verification.
fxm-warns-you = { -product-name } te adverti si tu adresse de e-mail ha essite divulgate in un violation de datos in linea. Vide si tu informationes ha essite divulgate, apprende a proteger melio tu contos in linea, e recipe alertas si tu adresse de e-mail appare in un nove violation.
what-is-data-agg = Que es un aggregator de datos?
what-is-data-agg-blurb = La aggregatores de datos o mediatores de datos, collige informationes ex registrationes public e los compra ex altere companias. Illes compila iste datos pro vender los a companias pro propositos de marketing. Le victimas de iste violationes ha minor riscos de fraudes financiari, ma le hackers poterea usar iste datos pro finger se illes o profilar se pro illes.
avoid-personal-info = Evitar de usar informationes personal in le contrasignos
send-verification = Inviar ligamine de verification
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Summario del violationes

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Contrasigno exponite inter tote le violationes
       *[other] Contrasignos exponite inter tote le violationes
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] violation cognoscite de datos ha exponite tu info
       *[other] violationes cognoscite de datos ha exponite tu info
    }
what-is-a-website-breach = Qual es un violation de sito web?
website-breach-blurb = Un violation de datos de sito web eveni quando le cybercriminales roba, copia o expone informationes personal de contos in linea. Isto es generalmente un resultato de hackers que trova un puncto debile in le securitate del sito web. Violationes pote alsi evenir quando informationes del conto es divulgate per accidente.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Vision general
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Le { $breachDate }, { $breachTitle } ha essite violate. Post le discoperta e verification de iste violation, nos lo ha addite a nostre base de datos le { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifica le ligamine inviate a { $userEmail } pro adder lo a { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Violation addite:
# Section headline
rec-section-headline = Que facer pro iste violation
rec-section-subhead = Nos consilia que tu face iste passos pro mantener tu informationes personal secur e proteger tu identitate digital.
# Section headline
rec-section-headline-no-pw = Que facer pro proteger tu informationes personal
rec-section-subhead-no-pw = Ben que in iste violation non ha essite exponite contrasignos, il ha ancora passos que tu pote facer pro proteger melio tu informationes personal.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nove

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Conto Mozilla
open-in-new-tab-alt = Aperir le ligamine in un nove scheda

## Search Engine Optimization

meta-desc-2 = Discoperi si tu ha essite parte de un violation de datos con { -brand-fx-monitor }. Nos te adjutara a comprender que facer postea e continuemente survelia pro ulle nove violationes.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Aperir session
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menu principal
main-nav-button-collapse-label = Collaber menu
main-nav-button-collapse-tooltip = Collaber menu
main-nav-button-expand-label = Expander menu
main-nav-button-expand-tooltip = Expander menu
main-nav-label = Navigation
main-nav-link-home-label = Initio
main-nav-link-dashboard-label = Pannello de controlo
main-nav-link-settings-label = Parametros
main-nav-link-faq-label = Folios a questiones
main-nav-link-faq-tooltip = Folio a questiones

## User menu

user-menu-trigger-label = Aperir le menu de usator
user-menu-trigger-tooltip = Profilo
user-menu-manage-fxa-label = Gere tu { -brand-mozilla-account }
user-menu-settings-label = Parametros
user-menu-settings-tooltip = Configurar { -brand-mozilla-monitor }
user-menu-help-label = Auxilio e supporto
user-menu-help-tooltip = Obtener adjuta per { -brand-mozilla-monitor }
user-menu-signout-label = Clauder session
user-menu-signout-tooltip = Clauder session de { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Terminos de servicio
privacy-notice = Aviso de confidentialitate
github = { -brand-github }
footer-nav-recent-breaches = Recente violationes de datos
footer-external-link-faq-label = Folios a questiones
footer-external-link-faq-tooltip = Folio a questiones

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Pagina non trovate
error-page-error-404-copy = Nos regretta. Le pagina cercate non existe plus.
error-page-error-404-cta-button = Retornar
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = Alco errate eveniva { $errorCode }

## Breach overview page

all-breaches-headline-3 = Base de datos de violation del datos
all-breaches-lead = Nos survelia tote le note violationes de datos pro discoperir si tu informationes personal era compromittite. Ecce un lista complete de tote le violationes que ha essite signalate desde 2007.
search-breaches = Cercar violationes
# the kind of user data exposed to hackers in data breach.
exposed-data = Datos exponite:

## Public breach detail page

find-out-if-2 = Discoperi si tu era implicate in iste violation
find-out-if-description = Nos te adjutara a presto vider si tu adresse email era exponite in iste violationes, e a comprender que facer postea.
breach-detail-cta-signup = Verificar si il ha violationes

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nove nomine, nove apparentia e ancora plus manieras pro <b>recuperar tu confidentialitate</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Dimitter
loading-accessibility = Cargamento
