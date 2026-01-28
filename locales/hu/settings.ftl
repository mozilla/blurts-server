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

settings-email-verification-callout = E-mail ellenőrzés szükséges
settings-email-addresses-header = E-mail-címek
settings-email-addresses-description = A { -brand-monitor } értesíteni fogja, ha ezek az e-mail-címek egy ismert adatvédelmi incidensben jelennek meg.
settings-email-addresses-add-email-button = E-mail-cím hozzáadása
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Akár { $limit } címet is hozzáadhat
settings-email-addresses-add-email-resend-button-label = Ellenőrző hivatkozás újraküldése
input-error-alt = Hiba

## Email address dialog

settings-email-addresses-initial-dialog-header = E-mail-cím hozzáadása
settings-email-addresses-initial-dialog-description = Küldünk egy ellenőrző hivatkozást, hogy megerősítse, hogy a jövőben is szeretné-e használni a { -brand-monitor } vizsgálatát.
settings-email-addresses-initial-dialog-add-email-input-label = Adja meg az e-mail-címet
settings-email-addresses-initial-dialog-add-email-button-label = Ellenőrző hivatkozás küldése
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Ellenőrző hivatkozás elküldve ide: <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Nyissa meg a hivatkozást, hogy hozzáadja ezt a fiókhoz a jövőbeli { -brand-monitor } vizsgálatokhoz.
settings-email-addresses-confirmation-dialog-close-button = Bezárás

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Keresési információk frissítése
settings-tab-label-edit-info = Szerkessze az adatait
settings-tab-label-notifications = Értesítések beállítása
settings-tab-label-manage-account = Fiók kezelése
settings-tab-subtitle-manage-account = A { -product-name }-fiókja kezelése.
settings-tab-notifications-marketing-title = Marketingkommunikáció
settings-tab-notifications-marketing-text = Rendszeres frissítések a { -brand-monitor }ról, a { -brand-mozilla(ending: "accented") }ról és más biztonsági termékeinkről.
settings-tab-notifications-marketing-link-label = Ugrás a { -brand-mozilla } e-mail beállításaihoz
