# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Jogi információk
# Unsubscribe link in email.
email-unsub-link = Leiratkozás
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Azért kapja ezt az e-mailt, mert feliratkozott a { -product-name } figyelmeztetéseire.
    Már nem szeretné ezeket a leveleket? { $unsubLink }. Ez egy automatikus levél. Támogatásért keresse fel a { $faqLink } oldalt.
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
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Az Ön <b>{ $email-address }</b> fiókjához tartozó keresési találatok azt észlelték, hogy e-mail-címe nyilvánosságra került. Javasoljuk, hogy azonnal intézkedjen az adatvédelmi incidens megszüntetése érdekében.
email-dashboard-cta = Ugrás a vezérlőpulthoz

## Breach alert

email-spotted-new-breach = Új adatvédelmi incidenst észleltünk
