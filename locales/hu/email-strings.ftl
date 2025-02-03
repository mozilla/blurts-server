# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Bejelentkezés

## Email footers

email-footer-support-heading = Kérdése van a { -brand-mozilla-monitor }ral kapcsolatban?
email-footer-support-content = Segítségért keresse fel a <support-link>Támogatói központunkat</support-link>
email-footer-trigger-transactional = Ezt az e-mailt a { -brand-mozilla-monitor } feliratkozójaként kapja.
email-footer-source-hibp = Az adatvédelmi incidensek adatait a <hibp-link>{ -brand-HIBP }</hibp-link> szolgáltatta
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Adatvédelem
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Jogi információk
# Button text
verify-email-cta = E-mail-cím megerősítése
# Headline of verification email
email-link-expires = Ez a hivatkozás 24 óra múlva lejár

##

# Subject line of email
email-subject-found-breaches = A { -product-name } ezekben az adatvédelmi incidensekben találta meg az információit
# Subject line of email
email-subject-no-breaches = A { -product-name } nem talált ismert adatvédelmi incidenst
# Subject line of email
email-subject-verify = Erősítse meg a { -product-name }hoz használt e-mail-címét
fxm-warns-you-no-breaches =
    A { -product-name } figyelmezteti az Ön személyes információit érintő adatvédelmi incidensekről.
    Eddig egyetlen adatvédelmi incidens sem található. Figyelmeztetést küldünk Önnek, ha az e-mail-címe új adatvédelmi incidensben jelenik meg.
email-breach-alert-blurb =
    A { -product-name } figyelmezteti az Ön személyes információit érintő adatvédelmi incidensekről.
    Épp most kaptunk részleteket egy másik céget érintő adatvédelmi incidensről.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Az adatvédelmi incidensek adatait a <a { $hibp-link-attr }>{ -brand-HIBP }</a> szolgáltatta

## Verification email

email-verify-heading = Védje meg az adatait, már most
email-verify-subhead = Igazolja vissza az e-mail-címét, hogy megkezdhesse adatai védelmét az adatvédelmi incidens után.
email-verify-simply-click = Egyszerűen kattintson az alábbi hivatkozásra a fiókja ellenőrzésének befejezéséhez.

## Breach report

email-breach-summary = Íme az adatvédelmi incidens összefoglalója
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Az Ön { $email-address } fiókjához tartozó keresési találatok azt észlelték, hogy e-mail-címe nyilvánosságra került. Javasoljuk, hogy azonnal intézkedjen az adatvédelmi incidens megszüntetése érdekében.
# Deprecated after the redesigned breach alert email is launched
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Az Ön <b>{ $email-address }</b> fiókjához tartozó keresési találatok azt észlelték, hogy e-mail-címe nyilvánosságra került. Javasoljuk, hogy azonnal intézkedjen az adatvédelmi incidens megszüntetése érdekében.
email-dashboard-cta = Ugrás a vezérlőpulthoz

## Breach alert

# Deprecated after the redesigned breach alert email is launched
email-spotted-new-breach = Új adatvédelmi incidenst észleltünk

## Redesigned breach alert email

email-breach-alert-all-subject = Új adatvédelmi incidens észlelve
email-breach-alert-all-preview = Végigvezetjük a megoldási lépéseken.
email-breach-alert-all-hero-heading = Egy adatvédelmi incidensben volt érintett
email-breach-alert-all-hero-subheading = Ne aggódjon, segíthetünk megoldani ezt a kitettséget
email-breach-alert-all-lead = A { -brand-mozilla-monitor } felfedezte a következő adatvédelmi incidenst, amely az Ön személyes információit is tartalmazza:
email-breach-alert-all-source-title = Adatvédelmi incidens forrása:
email-breach-alert-all-data-points-title = A kikerült adatai:
email-breach-alert-all-next-steps-lead = Lépésről lépésre végigvezetjük az adatvédelmi incidens megoldásán.
email-breach-alert-all-next-steps-cta-label = Kezdjünk hozzá
email-breach-alert-all-next-steps-button-dashboard = Ugrás a vezérlőpulthoz
