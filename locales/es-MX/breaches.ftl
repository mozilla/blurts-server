# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Datos filtrados

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Filtraciones de datos para { $email-select }

# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } correo electrónico monitoreado
        [many] { $count } de { $total } correos electrónicos monitoreados
       *[other] { $count } de { $total } correos electrónicos monitoreados
    }

# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Administrar correos electrónicos

## Breaches resolved filter

filter-label-unresolved = Filtraciones sin resolver
filter-label-resolved = Filtraciones resueltos

## Breaches table

column-company = EMPRESA
column-breached-data = DATOS FILTRADOS
column-detected = DETECTADO

# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Resuelto
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Activo

breaches-resolve-heading = Resolver esta filtración

breaches-none-headline = No se encontraron filtraciones
breaches-none-cta-blurb = ¿Te gustaría monitorear otro correo electrónico?
breaches-none-cta-button = Agregar dirección de correo electrónico

breaches-all-resolved-headline = Todas las filtraciones resueltas
breaches-all-resolved-cta-blurb = ¿Te gustaría monitorear otro correo electrónico?
breaches-all-resolved-cta-button = Agregar dirección de correo electrónico

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Administrador de contraseñas { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password


## Prompts the user for changes when there is a breach detected of email


## Prompts the user for changes when there is a breach detected of social security number


## Prompts the user for changes when there is a breach detected of credit card


## Prompts the user for changes when there is a breach detected of bank account


## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Notifica al emisor de tu tarjeta y cambia tu PIN inmediatamente.
breach-checklist-pin-body = Asegúrate de que tu nuevo PIN, o cualquier otro PIN, no incluya números fáciles de adivinar, como tu fecha de nacimiento o dirección.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-body = Tu dirección IP (dirección de Protocolo de Internet) señala tu ubicación y proveedor de servicios de Internet. Una VPN puede ocultar tu dirección IP real para que puedas usar Internet de forma privada.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Cambia cualquier contraseña o PINs que incluya cualquier parte de tu dirección.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Cambia cualquier contraseña o PIN que incluya tu fecha de cumpleaños.

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions


## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crea contraseñas seguras y únicas para cualquier cuenta en la que hayas reutilizado contraseñas.

## Prompts the user for changes when there is a breach detected of other types

