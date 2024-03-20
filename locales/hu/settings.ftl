# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } – Beállítások
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
# Deprecated
settings-delete-email-button = E-mail-cím törlése
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

settings-cancel-premium-subscription-title = A { -brand-premium } előfizetés megszüntetése
settings-cancel-premium-subscription-info = Az előfizetése ingyenes fiókká változik a jelenlegi számlázási ciklus végén. Az adatvédelmi vizsgálati eredményei véglegesen törlésre kerülnek, és csak 1 e-mail-címhez lesz bekapcsolva az adatvédelmi incidensek figyelése.

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
settings-delete-monitor-plus-account-title = A { -brand-monitor }-fiók törlése
settings-delete-monitor-plus-account-description = Ez véglegesen törli a { -brand-monitor }-fiókját, és azonnal megszünteti a fizetős { -brand-monitor-plus }-előfizetését.
settings-delete-monitor-plus-account-cta-label = Fiók törlése
settings-delete-monitor-plus-account-dialog-title = A { -brand-monitor }-fiókja véglegesen törölve lesz
settings-delete-monitor-plus-account-dialog-lead-p1 = Az összes { -brand-monitor }-fiókinformációja törölve lesz, és a továbbiakban nem fogjuk figyelni az új adatvédelmi incidenseket és az adatbrókerekhez kerülő adatokhoz. Ez nem törli a { -brand-mozilla }-fiókját.
settings-delete-monitor-plus-account-dialog-lead-p2 = A fizetős előfizetése ma lejár, és az előfizetés hátralévő részében nem lesz részarányos.
settings-delete-monitor-plus-account-dialog-cta-label = Fiók törlése
settings-delete-monitor-plus-account-dialog-cancel-button-label = Mégse, visszalépés
settings-delete-monitor-account-confirmation-toast-label = A { -brand-monitor }-fiókja véglegesen törölve lett.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Eltüntetés

## Add email dialog

settings-email-dialog-title = Másik e-mail-cím hozzáadása
settings-add-email-text = Adjon hozzá új e-mail-címet, hogy megtudja, érintett volt-e adatvédelmi incidensben.
settings-email-input-label = E-mail-cím
settings-send-email-verification-button = Ellenőrző hivatkozás küldése

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Sajnáljuk, hogy távozik. <br /> Elmondja, hogy miért távozik?
settings-unsubscribe-dialog-info = Az Ön tapasztalata fontos a számunkra. Minden választ elolvasunk, és figyelembe vesszük.
settings-unsubscribe-dialog-message-placeholder = Mi alakulhatott volna jobban?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Felhívjuk figyelmét, hogy az összes { -brand-monitor-premium } szolgáltatás <a { $faq_href }>véglegesen törölve lesz</a> a jelenlegi számlázási ciklusa végén.
settings-unsubscribe-dialog-continue = Tovább a lemondáshoz
settings-unsubscribe-dialog-cancel = Mégse, visszalépés
