# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } beállítások

## Breach alert preferences

settings-alert-preferences-title = Adatvédelmi incidensek figyelmeztetéseinek beállításai
settings-alert-preferences-option-one = Adatvédelmi incidensek figyelmeztetéseinek elküldése az érintett e-mail-címre
settings-alert-preferences-option-two = Az összes adatvédelmi incidens figyelmeztetésének elküldése az elsődleges e-mail-címre

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (elsődleges)
settings-email-list-title = Figyelt e-mail-címek
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] A fiókja legfeljebb { $limit } e-mail-cím figyelését tartalmazza.
       *[other] A fiókja legfeljebb { $limit } e-mail-cím figyelését tartalmazza.
    }
settings-email-verification-callout = E-mail ellenőrzés szükséges
settings-resend-email-verification-link = Ellenőrző e-mail újraküldése
settings-add-email-button = E-mail-cím hozzáadása
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] { $breachCount } ismert adatvédelmi incidensben szerepel.
       *[other] { $breachCount } ismert adatvédelmi incidensben szerepel.
    }

## Deactivate account

settings-deactivate-account-title = Fiók deaktiválása
settings-deactivate-account-info = A { -brand-fx-account }ja törlésével deaktiválhatja a { -product-short-name }t.
settings-fxa-link-label = Ugorjon a { -brand-firefox } beállításaihoz

## Add email dialog

settings-email-dialog-title = Másik e-mail-cím hozzáadása
settings-add-email-text = Adjon hozzá új e-mail-címet, hogy megtudja, érintett volt-e adatvédelmi incidensben.
settings-email-input-label = E-mail-cím
settings-send-email-verification-button = Ellenőrző hivatkozás küldése
