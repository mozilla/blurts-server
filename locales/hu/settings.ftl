# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } beállítások

## Breach alert preferences

settings-alert-email-preferences-title = E-mail-beállítások
settings-alert-email-preferences-subtitle = Mondja el, mely e-maileket szeretné megkapni.
settings-alert-preferences-allow-breach-alerts-title = Azonnali figyelmeztetések az adatvédelmi incidensekről
settings-alert-preferences-allow-breach-alerts-subtitle = Ezek a figyelmeztetések azonnal elküldésre kerülnek az adatvédelmi incidensek észlelése után
settings-alert-preferences-option-one = Adatvédelmi incidensek figyelmeztetéseinek elküldése az érintett e-mail-címre
settings-alert-preferences-option-two = Az összes adatvédelmi incidens figyelmeztetésének elküldése az elsődleges e-mail-címre

## Monitored email addresses

# Variables:
#   $email (string) - Email address
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

## Delete Monitor account

settings-delete-monitor-free-account-title = A { -brand-monitor }-fiók törlése
settings-delete-monitor-free-account-description = Ez véglegesen törli a { -brand-monitor }-fiókját, és kikapcsolja az összes értesítést.
settings-delete-monitor-free-account-cta-label = Fiók törlése
settings-delete-monitor-free-account-dialog-title = A { -brand-monitor }-fiókja véglegesen törölve lesz
settings-delete-monitor-free-account-dialog-lead-v2 = Az összes { -brand-monitor }-fiókinformációja törölve lesz, és a továbbiakban nem fogjuk figyelni az új adatvédelmi incidenseket. Ez nem törli a { -brand-mozilla-account }ját.
settings-delete-monitor-free-account-dialog-cta-label = Fiók törlése
settings-delete-monitor-free-account-dialog-cancel-button-label = Mégse, visszalépés
settings-delete-monitor-account-confirmation-toast-label-2 = A { -brand-monitor }-fiókja törölve lett.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Eltüntetés

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Havi { -brand-monitor } jelentés
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Havi hírlevél az új megjelenésekről, arról, hogy mi lett kijavítva, és mire kell figyelnie.

## Settings page redesign

settings-tab-label-edit-info = Szerkessze az adatait
settings-tab-label-notifications = Értesítések beállítása
settings-tab-label-manage-account = Fiók kezelése
settings-tab-subtitle-manage-account = A { -product-name }-fiókja kezelése.
settings-tab-notifications-marketing-title = Marketingkommunikáció
settings-tab-notifications-marketing-text = Rendszeres frissítések a { -brand-monitor }ról, a { -brand-mozilla(ending: "accented") }ról és más biztonsági termékeinkről.
settings-tab-notifications-marketing-link-label = Ugrás a { -brand-mozilla } e-mail beállításaihoz
