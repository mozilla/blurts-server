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
-brand-solo-ai = Solo AI

##

error-not-subscribed = Esta dirección de correo electrónico no está suscrita a { -product-name }.
user-add-invalid-email = Dirección de correo electrónico inválida
user-add-too-many-emails = Estás monitoreando el número máximo de correos electrónicos posible.
user-add-duplicate-email = Este correo electrónico ya se agregó a { -product-name }.
user-add-verification-email-just-sent = No se puede enviar otro correo electrónico de verificación tan rápido. Intentalo más tarde.
user-add-unknown-error = Algo salió mal al agregar otra dirección de correo electrónico. Intentalo más tarde.
user-delete-unknown-error = Algo salió mal al eliminar una dirección de correo electrónico. Intentalo de nuevo más tarde.
user-verify-token-error = Se requiere identificador de verificación.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
# Link title
more-about-this-breach = Más acerca de esta filtración
sensitive-sites = ¿Cómo trata { -product-name } a los sitios sensibles?
sensitive-sites-copy =
    { -product-name } solo revela cuentas asociadas con este
    tipo de filtraciones después de que se haya verificado una dirección de correo electrónico. Esto significa que sos
    la única persona que puede ver si tu información estuvo en esta filtración (a menos que otra persona
    tenga acceso a tu cuenta de correo electrónico).
what-data = Qué datos fueron comprometidos:
delayed-reporting-headline = ¿Por qué se tardó tanto en informar esta filtración?
delayed-reporting-copy =
    A veces pueden pasar meses o años antes de que las credenciales que se expusieron
    en una violación de datos aparezcan en la web oscura. Las violaciones se añaden a nuestra base de datos en cuanto se descubren y verifican.

##

what-is-a-website-breach = ¿Qué es una filtración de un sitio web?
website-breach-blurb = Una filtración de datos de un sitio web sucede cuando los cibercriminales roban, copian o exponen información personal de cuentas en línea. Es usualmente el resultado de hackers buscando puntos débiles en la seguridad de los sitios. Las filtraciones también suceden cuando la información de las cuentas se filtra por accidente.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Visión general
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = El { $breachDate }, { $breachTitle } sufrió una filtración. Una vez que se descubrió y verificó la filtración, se agregó a nuestra base de datos el { $addedDate }.

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
loading-accessibility = Cargando
