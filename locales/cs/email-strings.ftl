# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Přihlásit se

## Email footers

email-footer-support-heading = Máte otázky k { -brand-mozilla-monitor(case: "dat") }?
email-footer-support-content = Pro pomoc navštivte naše <support-link>centrum podpory</support-link>
email-footer-trigger-transactional = Tento e-mail dostáváte jako předplatitel { -brand-mozilla-monitor(case: "gen") }.
email-footer-reason-subscriber = Tento automatický e-mail jste obdrželi jako odběratel služby { -brand-mozilla-monitor }. Pokud vám byl doručen omylem, není třeba nic podnikat. Další informace najdete na stránkách podpory <support-link>{ -brand-mozilla }</support-link>.
email-footer-reason-subscriber-one-time = Tento jednorázový automatický e-mail jste obdrželi, protože jste přihlášeni k odběru služby { -brand-monitor-plus }. Žádné další e-maily tohoto typu již nebudete dostávat. Další informace najdete na stránce <support-link>podpory { -brand-mozilla }</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Pro pomoc navštivte naše centrum podpory: 
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Údaje o únicích ze zdroje { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Údaje o únicích poskytuje <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Soukromí
email-unsubscribe-link = <link_to_unsub>Odhlášení</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Zrušení odběru: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Ověřit e-mailovou adresu
# Headline of verification email
email-link-expires = Platnost tohoto odkazu vyprší za 24 hodin

##

# Subject line of email
email-subject-found-breaches = { -product-name } našel vaše údaje v těchto únicích dat
# Subject line of email
email-subject-no-breaches = { -product-name } nenašel žádné známé úniky dat
# Subject line of email
email-subject-verify = Ověření e-mailové adresy pro { -product-name(case: "acc") }
fxm-warns-you-no-breaches =
    { -product-name } vás upozorňuje na úniky dat, jejichž součástí byly vaše osobní údaje.
    Dosud jste nebyli součástí žádného úniku. Pošleme vám upozornění, jestliže se vaše e-mailová adresa vyskytne v novém úniku dat.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Údaje o únicích poskytl <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Chraňte svá data, začněte hned teď.
email-verify-simply-click = Ověření účtu dokončíte kliknutím na odkaz níže.

## Breach report

email-breach-summary = Zde jsou vaše souhrnné informace
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Z výsledků vyhledávání pro váš účet { $email-address } bylo zjištěno, že vaše e-mailová adresa mohla být vyzrazena. Doporučujeme vám, abyste okamžitě začali daný únik řešit.
email-dashboard-cta = Přejít na nástěnku

## Breach alert email

email-breach-alert-all-subject = Zjištěn nový únik údajů
email-breach-alert-all-preview = Provedeme vás kroky k jeho vyřešení.
email-breach-alert-all-hero-heading = Vaše data jsou v novém úniku dat
email-breach-alert-all-hero-subheading = Nemusíte se obávat, můžeme vám pomoci tento problém vyřešit
email-breach-alert-all-lead = { -brand-mozilla-monitor } zjistil následující únik dat, který obsahuje vaše osobní údaje:
email-breach-alert-all-source-title = Zdroj úniku:
email-breach-alert-all-data-points-title = Vaše uniklé údaje:
email-breach-alert-all-next-steps-lead = Provedeme vás krok za krokem, jak tento únik údajů vyřešit.
email-breach-alert-all-next-steps-cta-label = Začínáme!
email-breach-alert-all-next-steps-button-dashboard = Přejít na nástěnku

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Podrobnosti o únicích dat typu { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } našel vaše údaje v { $company-name } úniku dat z { $breach-date }. Toto upozornění jste obdrželi, protože jste se zaregistrovali k <link_to_settings>upozorňování na úniky</link_to_settings>.
email-breach-alert-all-source-title-1 = Podrobnosti o úniku
email-breach-alert-company = Společnost:
email-breach-alert-date-of-breach = Datum úniku:
email-breach-alert-info-exposed = Vaše odhalené informace:
email-breach-alert-next-steps = Další kroky
email-breach-alert-next-steps-description = <sign_in_link>Přihlaste se</sign_in_link> do své nástěnky { -brand-mozilla-monitor }. Provedeme vás jednotlivými kroky k jeho vyřešení.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Vyřešit úniky na nástěnce
email-breach-alert-faqs-title = FAQ
email-breach-alert-faq-qn-1 = Proč toto dostávám?
email-breach-alert-faq-ans-1 = Přihlásili jste se k příjmu upozornění na úniky dat. <link_to_settings>Aktualizujte své předvolby</link_to_settings> v nastavení.
email-breach-alert-faq-qn-2 = Proč neznám tuto společnost či web?
email-breach-alert-faq-ans-2 = Účet možná změnil majitele či název, může se týkat starého účtu či účtu, který byl pro vás vytvořen, nebo mohlo pocházet ze zakoupeného seznamu vyzrazených osobních údajů.
email-breach-alert-faq-qn-3 = Co je to upozornění na únik dat?
email-breach-alert-faq-ans-3 = Upozornění { -brand-mozilla-monitor } se zasílá, když jsou osobní údaje, které sledujete, vyzrazeny, odcizeny nebo zkopírovány bez povolení.
email-breach-alert-faq-qn-4 = Co je { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Bezplatná služba pro upozornění na úniky dat, která vás upozorní, pokud byly vaše internetové účty součástí nějakého úniku dat.
