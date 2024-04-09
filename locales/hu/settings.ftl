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
settings-remove-email-button-label = Eltávolítás
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = A(z) { $emailAddress } figyelésének leállítása

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] { $breachCount } ismert adatvédelmi incidensben szerepel.
       *[other] { $breachCount } ismert adatvédelmi incidensben szerepel.
    }

## Cancel Premium subscription

## Deactivate account

settings-deactivate-account-title = Fiók deaktiválása
settings-deactivate-account-info-2 = A { -brand-mozilla-account }ja törlésével kikapcsolhatja a { -product-short-name }t.
settings-fxa-link-label-3 = Ugrás a { -brand-mozilla-account } beállításaihoz

## Delete Monitor account

settings-delete-monitor-free-account-title = A { -brand-monitor }-fiók törlése
settings-delete-monitor-free-account-description = Ez véglegesen törli a { -brand-monitor }-fiókját, és kikapcsolja az összes értesítést.
settings-delete-monitor-free-account-cta-label = Fiók törlése
settings-delete-monitor-free-account-dialog-title = A { -brand-monitor }-fiókja véglegesen törölve lesz
settings-delete-monitor-free-account-dialog-lead = Az összes { -brand-monitor }-fiókinformációja törölve lesz, és a továbbiakban nem fogjuk figyelni az új adatvédelmi incidenseket. Ez nem törli a { -brand-mozilla }-fiókját.
settings-delete-monitor-free-account-dialog-cta-label = Fiók törlése
settings-delete-monitor-free-account-dialog-cancel-button-label = Mégse, visszalépés
settings-delete-monitor-account-confirmation-toast-label-2 = A { -brand-monitor }-fiókja törölve lett.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Eltüntetés

## Add email dialog

## Unsubscribe Dialog Survey

