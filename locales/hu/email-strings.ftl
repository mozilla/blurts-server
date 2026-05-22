# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Bejelentkezés

## Email footers

email-footer-support-heading = Kérdése van a { -brand-mozilla-monitor }ral kapcsolatban?
email-footer-support-content = Segítségért keresse fel a <support-link>Támogatói központunkat</support-link>
email-footer-trigger-transactional = Ezt az e-mailt a { -brand-mozilla-monitor } feliratkozójaként kapja.
email-footer-reason-subscriber = Ezt az automatikus levelet mint a { -brand-mozilla-monitor } feliratkozója kapja. Ha tévedésből kapta, nincs teendője. További információkért keresse fel a <support-link>{ -brand-mozilla } támogatást</support-link>.
email-footer-reason-subscriber-one-time = Azért kapta ezt az egyszeri automatikus levelet, mert előfizetett a következőre: { -brand-monitor-plus }. Nem fog több ehhez hasonló e-mailt kapni. További információkért keresse fel a <support-link>{ -brand-mozilla } támogatást</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Segítségért keresse fel Támogatási központunkat:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Az adatvédelmi incidensek adatait a { -brand-HIBP } szolgáltatta: { $hibp_link }
email-footer-source-hibp = Az adatvédelmi incidensek adatait a <hibp-link>{ -brand-HIBP }</hibp-link> szolgáltatta
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Adatvédelem
email-unsubscribe-link = <link_to_unsub>Leiratkozás</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Leiratkozás: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
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

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Az adatvédelmi incidensek adatait a <a { $hibp-link-attr }>{ -brand-HIBP }</a> szolgáltatta

## Verification email

email-verify-heading = Védje meg az adatait, már most
email-verify-simply-click = Egyszerűen kattintson az alábbi hivatkozásra a fiókja ellenőrzésének befejezéséhez.

## Breach report

email-breach-summary = Íme az adatvédelmi incidens összefoglalója
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Az Ön { $email-address } fiókjához tartozó keresési találatok azt észlelték, hogy e-mail-címe nyilvánosságra került. Javasoljuk, hogy azonnal intézkedjen az adatvédelmi incidens megszüntetése érdekében.
email-dashboard-cta = Ugrás a vezérlőpulthoz

## Breach alert email

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

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = A(z) { $company-name } adatvédelmi incidensének részletei
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = A { -brand-mozilla-monitor } megtalálta az adatait a(z) { $company-name } adatvédelmi incidensében ekkor: { $breach-date }. Azért kapja ezt a figyelmeztetést, mert feliratkozott az <link_to_settings>adatvédelmi incidensek értesítéseire</link_to_settings>.
email-breach-alert-all-source-title-1 = Adatvédelmi incidens részletei
email-breach-alert-company = Cég:
email-breach-alert-date-of-breach = Az adatvédelmi incidens dátuma:
email-breach-alert-info-exposed = Érintett információk:
email-breach-alert-next-steps = Következő lépések
email-breach-alert-next-steps-description = <sign_in_link>Jelentkezzen be</sign_in_link> a { -brand-mozilla-monitor } vezérlőpultjára. Végigvezetjük a megoldásához szükséges lépéseken.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Adatvédelmi incidens megoldása a vezérlőpulton
email-breach-alert-faqs-title = GYIK
email-breach-alert-faq-qn-1 = Miért kapom ezt?
email-breach-alert-faq-ans-1 = Feliratkozott az adatvédelmi incidensek figyelmeztetéseire. <link_to_settings>Beállításait bármikor frissítheti</link_to_settings>.
email-breach-alert-faq-qn-2 = Miért nem ismerem ezt a céget vagy webhelyet?
email-breach-alert-faq-ans-2 = Előfordulhat, hogy a tulajdonosa vagy a neve megváltozott, régi vagy az Ön számára létrehozott fiókra vonatkozik, vagy kikerült személyes adatok vásárolt listájáról származik.
email-breach-alert-faq-qn-3 = Mi az az adatvédelmiincidens-riasztás?
email-breach-alert-faq-ans-3 = Egy értesítést küld a { -brand-mozilla-monitor }, ha az Ön által figyelt személyes adatai kikerülnek, ellopják vagy engedély nélkül másolják azokat.
email-breach-alert-faq-qn-4 = Mi az a { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Egy ingyenes értesítési szolgáltatás, amely figyelmezteti, ha az online fiókjai adatvédelmi incidensben voltak érintettek.
