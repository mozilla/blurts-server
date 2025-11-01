# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Fundación Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = VPN de Mozilla
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Esta dirección de correo electrónico no está suscrita a { -product-name }.
error-hibp-throttled = Demasiadas conexiones a { -brand-HIBP }.
error-hibp-connect = Error al conectar con { -brand-HIBP }.
user-add-invalid-email = Dirección de correo electrónico inválida
user-add-too-many-emails = Estás monitoreando el número máximo de correos electrónicos posible.
user-add-duplicate-email = Este correo electrónico ya se agregó a { -product-name }.
user-add-verification-email-just-sent = No se puede enviar otro correo electrónico de verificación tan rápido. Intentalo más tarde.
user-add-unknown-error = Algo salió mal al agregar otra dirección de correo electrónico. Intentalo más tarde.
user-delete-unknown-error = Algo salió mal al eliminar una dirección de correo electrónico. Intentalo de nuevo más tarde.
user-verify-token-error = Se requiere identificador de verificación.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Datos de filtración proporcionados por { $hibp-link }
show-all = Mostrar todo
sign-out = Cerrar la sesión
# Link title
preferences = Preferencias
# Link title
home = Inicio
# Link title
security-tips = Consejos de seguridad
# Link title
more-about-this-breach = Más acerca de esta filtración
monitor-several-emails = Controlá varias direcciones de correo
website-breach = Filtración de sitio web
sensitive-breach = Filtración delicada de sitio web
data-aggregator-breach = Filtración del agregador de datos
what-data = Qué datos fueron comprometidos:
sensitive-sites = ¿Cómo trata { -product-name } a los sitios sensibles?
sensitive-sites-copy =
    { -product-name } solo revela las cuentas asociadas con estos
    tipos de violaciones después de que se verificó una dirección de correo electrónico. Esto significa que sos el único que puede ver si tu información estaba en esta violación (a menos que alguien más tenga acceso a tu cuenta de correo electrónico).
delayed-reporting-headline = ¿Por qué se tardó tanto en informar esta filtración?
delayed-reporting-copy =
    A veces pueden pasar meses o años antes de que las credenciales que se expusieron
    en una violación de datos aparezcan en la web oscura. Las violaciones se añaden a nuestra base de datos en cuanto se descubren y verifican.
fxm-warns-you = { -product-name } te advierte si tu dirección de correo electrónico ha estado expuesta a una filtración de datos en línea. Mirá si tu información ha estado expuesta, conocé como proteger mejor tus cuentas en línea y recibí alertas si tu correo electrónico aparece en una nueva filtración.
what-is-data-agg = ¿Qué es un agregador de datos?
what-is-data-agg-blurb = Los agregadores de datos, o los intermediarios de datos, recopilan información de registros públicos  y los compran de otras empresas. Compilan estos datos para venderlos a las empresas con fines de comercialización. Las víctimas de estas violaciones tienen menos probabilidades de experimentar fraudes financieros,  pero los piratas informáticos podrían usar estos datos para hacerse pasar por ellos o perfilarlos.
avoid-personal-info = Evitar el uso de información personal en las contraseñas
send-verification = Enviar enlace de verificación
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Resumen de filtraciones

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Contraseña expuesta a través de todas las filtraciones
       *[other] Contraseñas expuestas a través de todas las filtraciones
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] La violación de datos conocida expuso su información
       *[other] Las violaciones de datos conocidas expusieron su información
    }
what-is-a-website-breach = ¿Qué es una filtración de un sitio web?
website-breach-blurb = Una filtración de datos de un sitio web sucede cuando los cibercriminales roban, copian o exponen información personal de cuentas en línea. Es usualmente el resultado de hackers buscando puntos débiles en la seguridad de los sitios. Las filtraciones también suceden cuando la información de las cuentas se filtra por accidente.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Visión general
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = El { $breachDate }, { $breachTitle } sufrió una filtración. Una vez que se descubrió y verificó la filtración, se agregó a nuestra base de datos el { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menú
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verificar el enlace enviado a { $userEmail } para agregarlo a { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Filtración agregada:
# Section headline
rec-section-headline = ¿Qué hacer con esta violación?
rec-section-subhead = Te recomendamos que sigas estos pasos para mantener segura tu información personal y proteger tu identidad digital.
# Section headline
rec-section-headline-no-pw = Qué hacer para proteger tu información personal
rec-section-subhead-no-pw = Aunque las contraseñas no estuvieron expuestas en esta violación, hay pasos que podés seguir para proteger mejor tu información personal.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nueva

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Cuenta de Mozilla
open-in-new-tab-alt = Abrir enlace en una nueva pestaña

## Search Engine Optimization

meta-desc-2 = Averiguá si fuiste parte de una filtración de datos con { -brand-fx-monitor }. Te ayudaremos a entender qué hacer a continuación y monitorearemos continuamente si hay nuevas filtraciones.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Iniciar la sesión
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menú principal
main-nav-button-collapse-label = Colapsar el menú
main-nav-button-collapse-tooltip = Colapsar el menú
main-nav-button-expand-label = Expandir el menú
main-nav-button-expand-tooltip = Expandir el menú
main-nav-label = Navegación
main-nav-link-home-label = Inicio
main-nav-link-dashboard-label = Tablero
main-nav-link-settings-label = Configuración
main-nav-link-faq-label = Preguntas frecuentes
main-nav-link-faq-tooltip = Preguntas frecuentes

## User menu

user-menu-trigger-label = Abrir el menú de usuario
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Administrar tu { -brand-mozilla-account }
user-menu-settings-label = Configuración
user-menu-settings-tooltip = Configurar { -brand-mozilla-monitor }
user-menu-help-label = Ayuda
user-menu-help-tooltip = Obtener ayuda para usar { -brand-mozilla-monitor }
user-menu-signout-label = Cerrar la sesión
user-menu-signout-tooltip = Cerrar la sesión en { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Términos del servicio
privacy-notice = Nota de privacidad
github = { -brand-github }
footer-nav-recent-breaches = Filtraciones de datos recientes
footer-external-link-faq-label = Preguntas frecuentes
footer-external-link-faq-tooltip = Preguntas frecuentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Página no encontrada
error-page-error-404-copy = Lo sentimos, la página que estás buscando no existe más.
error-page-error-404-cta-button = Atrás
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Algo salió mal

## Breach overview page

all-breaches-headline-3 = Base de datos de filtraciones
all-breaches-lead = Monitoreamos todas las filtraciones de datos para encontrar si tu información personal se vio comprometida. Acá hay una lista completa de todas las filtraciones que se informaron desde 2007.
search-breaches = Buscar filtraciones
# the kind of user data exposed to hackers in data breach.
exposed-data = Datos expuestos:

## Public breach detail page

find-out-if-2 = Fijate si estuviste involucrado en esta filtración
find-out-if-description = Te vamos a ayudar a ver rápidamente si tu dirección de correo electrónico estuvo expuesta en esta filtración para entender qué hacer a continuación.
breach-detail-cta-signup = Verificá si hay filtraciones

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nuevo nombre, apariencia e incluso más formas de <b>recuperar tu privacidad</b>.
banner-monitor-rebrand-dismiss-button-label = Aceptar
banner-monitor-rebrand-dismiss-button-tooltip = Descartar
loading-accessibility = Cargando
