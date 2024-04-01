# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

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

error-could-not-add-email = Ma ku chikai korreo nu inka kue tutu.
error-not-subscribed = Koó korreo nu tutu { -product-name }.
error-hibp-throttled = kua conexion nu { -brand-HIBP }.
error-hibp-connect = Ma ku ndachitain tsi { -brand-HIBP }.

user-add-invalid-email = Vaà korreo
user-add-too-many-emails = Nduki kue tutu ña korreo.
user-add-duplicate-email = Tsa inka korreo ku nu { -product-name }.

user-verify-token-error = tsiniñu'un token.

user-unsubscribe-token-error = Eliminar suscripción quiere un token.
user-unsubscribe-token-email-error = Eliminar suscripción requiere un token y con correo electrónico.

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:

# Breach data provided by Have I Been Pwned.
hibp-attribution = Filtración de datos proporcionada por { $hibp-link }

show-all = Snaa ntia

sign-out = Kee

# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Sama { -brand-fxa }

# Link title
frequently-asked-questions = Preguntas frecuentes

# Link title
preferences = Preferencias

# Link title
home = Kitsa

monitor-several-emails = Kunche'e kua korreo

website-breach = Va'a sitio web
sensitive-breach = Filtración de datos sensible del sitio web
data-aggregator-breach = Filtración de recopilador de datos

what-data = Qué datos fueron comprometidos:

what-is-data-agg = ¿Ntyi ku agregador de datos?

avoid-personal-info = Nchau sivu tsi tu'un seé

## What to do after data breach tips

send-verification = Tachu'un tu'un

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Tutu filtración

## Variables:
##   $userName (String) - Username

##


## Variables:
##   $breachName (String) - Number of the breach

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


# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Kunche'e ntia

# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Katsi

# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Kunche'e enlace tachu'un nu { $userEmail } takua chau ña nu { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Filtración añadida:

# Section headline
rec-section-headline = Ntyi sau tsi filtración

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".


##


## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".


##

##

## Updated error messages


# A status indicator that appears in the top right corner of new breach cards
new-breach = Tsa'a

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

## Relay and VPN educational/ad units

# Monitor V2

## The following messages are brands and should be kept entirely in English

-brand-mozilla-vpn = Mozilla VPN

##

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

## Firefox Monitor -> Mozilla Monitor rebrand banner

