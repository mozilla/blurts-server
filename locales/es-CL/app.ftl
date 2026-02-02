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
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus
-brand-solo-ai = Solo AI

##

error-not-subscribed = Este correo no está suscrito a { -product-name }.
user-add-invalid-email = Correo inválido
user-add-too-many-emails = Estás monitorizando el número máximo de correos posible.
user-add-duplicate-email = Este correo ya ha sido añadido a { -product-name }.
user-add-verification-email-just-sent = No se puede enviar otro correo electrónico de verificación tan pronto. Por favor, vuelve a intentarlo más tarde.
user-add-unknown-error = Algo falló al agregar otra dirección de correo electrónico. Por favor, vuelve a intentarlo más tarde.
user-delete-unknown-error = Algo falló al remover una dirección de correo electrónico. Por favor, vuelve a intentarlo más tarde.
user-verify-token-error = Toquen de verificación requerido.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
# Link title
more-about-this-breach = Más acerca de esta filtración
sensitive-sites = ¿Cómo trata { -product-name } los datos sensibles?
sensitive-sites-copy =
    { -product-name } solo revela las cuentas asociadas con estos
    tipos de filtraciones una vez que se ha verificado la dirección de correo electrónico. Esto significa que eres la
    única persona que puede ver si tu información estuvo expuesta (a menos que alguien
    más también tenga acceso a tu cuenta de correo electrónico).
what-data = Qué datos fueron comprometidos:
delayed-reporting-headline = ¿Por qué tardó tanto reportar esta filtración?
delayed-reporting-copy =
    A veces pueden pasar meses o años antes de que las credenciales que se expusieron
    en una filtración de datos aparezcan en la web oscura. Las filtraciones se añaden a nuestra base de datos en cuanto se descubren y verifican.

##

what-is-a-website-breach = ¿Qué es una filtración de sitio?
website-breach-blurb = Una filtración de datos de un sitio web sucede cuando los cibercriminales roban, copian o exponen información personal de cuentas en línea. Es usualmente el resultado de hackers buscando puntos débiles en la seguridad de los sitios. Las filtraciones también suceden cuando la información de las cuentas se filtra por accidente.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = General
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = El { $breachDate }, { $breachTitle } fue vulnerado. Una vez que la filtración fue descubierta y verificada, ésta fue añadida a nuestra base de datos el { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Filtración añadida:
# Section headline
rec-section-headline = Qué hacer con esta filtración
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

meta-desc-2 = Descubre si has sido parte de una filtración de datos con { -brand-fx-monitor }. Te ayudaremos a comprender qué hacer a continuación y monitorearemos continuamente cualquier nueva filtración.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Conectarse
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menú principal
main-nav-button-collapse-label = Contraer menú
main-nav-button-collapse-tooltip = Contraer menú
main-nav-button-expand-label = Expandir menú
main-nav-button-expand-tooltip = Expandir menú
main-nav-label = Navegación
main-nav-link-home-label = Inicio
main-nav-link-dashboard-label = Panel
main-nav-link-settings-label = Ajustes
main-nav-link-faq-label = Preguntas frecuentes
main-nav-link-faq-tooltip = Preguntas frecuentes

## User menu

user-menu-trigger-label = Abrir menú del usuario
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Gestiona tu { -brand-mozilla-account }
user-menu-settings-label = Ajustes
user-menu-settings-tooltip = Configurar { -brand-mozilla-monitor }
user-menu-help-label = Ayuda y soporte
user-menu-help-tooltip = Obtén ayuda para usar { -brand-mozilla-monitor }
user-menu-signout-label = Salir
user-menu-signout-tooltip = Salir de { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Términos del servicio
privacy-notice = Política de privacidad
github = { -brand-github }
footer-nav-recent-breaches = Filtraciones de datos recientes
footer-external-link-faq-label = Preguntas frecuentes
footer-external-link-faq-tooltip = Preguntas frecuentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Página no encontrada
error-page-error-404-copy = Lo sentimos, la página que buscas ya no existe.
error-page-error-404-cta-button = Retroceder

## Breach overview page

all-breaches-headline-3 = Base de datos de filtraciones de datos
all-breaches-lead = Supervisamos todas las filtraciones de datos conocidas para averiguar si tu información personal se vio comprometida. Aquí hay una lista completa de todas las filtraciones que se han informado desde 2007.
search-breaches = Buscar filtraciones
# the kind of user data exposed to hackers in data breach.
exposed-data = Datos expuestos:

## Public breach detail page

find-out-if-2 = Averigua si te viste involucrado en esta filtración
find-out-if-description = Te ayudaremos a comprobar rápidamente si tu dirección de correo electrónico se vio expuesta en esta filtración y saber qué hacer a continuación.
breach-detail-cta-signup = Busca filtraciones
loading-accessibility = Cargando
