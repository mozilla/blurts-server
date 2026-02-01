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

##

error-not-subscribed = Esta dirección de correo electrónico no está suscrita a { -product-name }.
user-add-invalid-email = Correo electrónico no válido
user-add-too-many-emails = Estás monitorizando el número máximo de direcciones de correo.
user-add-duplicate-email = Esta dirección de correo ya se ha agregado a { -product-name }.
user-add-verification-email-just-sent = No se puede enviar otro correo electrónico de verificación tan rápido. Inténtalo más tarde.
user-add-unknown-error = Se ha producido un error al añadir otra dirección de correo electrónico. Inténtalo más tarde.
user-delete-unknown-error = Se ha producido un error al eliminar una dirección de correo electrónico. Inténtalo más tarde.
user-verify-token-error = Se requiere un token de verificación.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
# Link title
more-about-this-breach = Más sobre esta filtración
what-data = Qué información se filtró:
delayed-reporting-headline = ¿Por qué se tardó tanto en informar de esta filtración?
delayed-reporting-copy =
    A veces pueden pasar meses o años antes de que las credenciales que se expusieron
    en una filtración de datos aparezcan en la web oscura. Las filtraciones se añaden a nuestra base de datos en cuanto se descubren y verifican.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Visión general
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = El { $breachDate }, tuvo lugar la filtración { $breachTitle }. Una vez descubierta y verificada la filtración, la agregamos a nuestra base de datos el { $addedDate }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Filtración añadida:
# Section headline
rec-section-headline = Qué hacer con esta filtración
rec-section-subhead = Te recomendamos que sigas estos pasos para mantener tu información privada segura y proteger tu identidad digital
# Section headline
rec-section-headline-no-pw = Qué hacer para proteger tu información personal
rec-section-subhead-no-pw = Aunque las contraseñas no estuvieron expuestas en esta filtración, todavía hay pasos que puedes seguir para proteger mejor tu información personal.

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Cuenta de Mozilla
open-in-new-tab-alt = Abrir enlace en una nueva pestaña

## Search Engine Optimization

meta-desc-2 = Descubre con { -brand-fx-monitor } si has sido afectado por una filtración de datos. Te ayudaremos a comprender qué hacer a continuación y vigilaremos continuamente cualquier nueva filtración.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Iniciar sesión
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

user-menu-trigger-label = Abrir menú de usuario
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Administra tu { -brand-mozilla-account }
user-menu-settings-label = Ajustes
user-menu-settings-tooltip = Configurar { -brand-mozilla-monitor }
user-menu-help-label = Ayuda y asistencia
user-menu-help-tooltip = Obtener ayuda para usar { -brand-mozilla-monitor }
user-menu-signout-label = Cerrar sesión
user-menu-signout-tooltip = Cerrar la sesión en { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Términos del servicio
privacy-notice = Aviso de privacidad
github = { -brand-github }
footer-nav-recent-breaches = Filtraciones recientes de datos
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
all-breaches-lead = Supervisamos todas las filtraciones de datos conocidas para averiguar si tu información personal se vio comprometida. Aquí hay una lista completa de todas las filtraciones que se han notificado desde 2007.
search-breaches = Buscar filtraciones
# the kind of user data exposed to hackers in data breach.
exposed-data = Datos expuestos:

## Public breach detail page

find-out-if-2 = Averigua si has estado involucrado en esta filtración
find-out-if-description = Te vamos a ayudar a ver rápidamente si tu dirección de correo electrónico estuvo expuesta en esta filtración para entender qué hacer a continuación.
breach-detail-cta-signup = Busca filtraciones
loading-accessibility = Cargando
