# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Filtraciones de datos para { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } de { $total } correo electrónico supervisado
        [many] { $count } de { $total } correos electrónicos supervisados
       *[other] { $count } de { $total } correos electrónicos supervisados
    }
add-email-link = Añadir dirección de correo electrónico

## Breaches resolved filter

filter-label-unresolved = Filtraciones sin resolver
filter-label-resolved = Filtraciones resueltas

## Breaches table

column-company = EMPRESA
column-breached-data = DATOS FILTRADOS
column-detected = DETECTADO
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = El { $breachDate }, { $companyName } tuvo una filtración. Una vez descubierta y verificada la filtración, la añadimos a nuestra base de datos el { $addedDate }. Esta filtración incluye: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password


## Prompts the user for changes when there is a breach detected of email


## Prompts the user for changes when there is a breach detected of social security number


## Prompts the user for changes when there is a breach detected of credit card


## Prompts the user for changes when there is a breach detected of bank account


## Prompts the user for changes when there is a breach detected of pin


## Prompts the user for changes when there is a breach detected of IP address


## Prompts the user for changes when there is a breach detected of physical address


## Prompts the user for changes when there is a breach detected of date of birth


## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions


## Prompts the user for changes when there is a breach detected of historical password


## Prompts the user for changes when there is a breach detected of other types

