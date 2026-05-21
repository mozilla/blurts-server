# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Prijava

## Email footers

email-footer-support-heading = Vprašanja o { -brand-mozilla-monitor(sklon: "mestnik") }?
email-footer-support-content = Za pomoč obiščite naše <support-link>središče za podporo</support-link>
email-footer-trigger-transactional = To e-poštno sporočilo ste prejeli kot naročnik na { -brand-mozilla-monitor(sklon: "tožilnik") }.
email-footer-reason-subscriber = To samodejno e-poštno sporočilo ste prejeli, ker ste naročnik na { -brand-mozilla-monitor }. Če ste ga prejeli po pomoti, ni potrebno ukrepanje. Za več informacij obiščite <support-link>podporo za { -brand-mozilla }</support-link>.
email-footer-reason-subscriber-one-time = To enkratno samodejno e-poštno sporočilo ste prejeli, ker ste naročeni na { -brand-monitor-plus }. Nobene tovrstne e-pošte ne boste prejemali več. Za več informacij obiščite <support-link>podporo za { -brand-mozilla }</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = Za pomoč obiščite naš center za podporo: { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Podatke o krajah podatkov ponudnika { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Podatke o krajah podatkov posredoval <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Zasebnost
email-unsubscribe-link = <link_to_unsub>Odjava</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Odjava: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Potrdi e-poštni naslov
# Headline of verification email
email-link-expires = Ta povezava poteče v naslednjih 24 urah

##

# Subject line of email
email-subject-found-breaches = { -product-name } je našel vaše podatke v teh krajah
# Subject line of email
email-subject-no-breaches = { -product-name } ni našel nobenih znanih kraj
# Subject line of email
email-subject-verify = Potrdite e-pošto za { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } vas opozori na kraje podatkov, ki vključujejo vaše osebne podatke.
    Do zdaj ni bilo ugotovljenih nobenih kraj. Če se bo vaš e-poštni naslov pojavil v novi kraji, vas bomo opozorili.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Podatke o krajah zagotavlja <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Začnite varovati svoje podatke
email-verify-simply-click = Preprosto kliknite spodnjo povezavo, da dokončate preverjanje računa.

## Breach report

email-breach-summary = Tukaj je povzetek kraje podatkov
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Rezultati iskanja za vaš račun { $email-address } kažejo, da je bil vaš e-poštni naslov morda izpostavljen. Priporočamo, da takoj ukrepate in razrešite to krajo.
email-dashboard-cta = Pojdi na nadzorno ploščo

## Breach alert email

email-breach-alert-all-subject = Zaznana nova kraja podatkov
email-breach-alert-all-preview = Vodili vas bomo skozi korake za rešitev težave.
email-breach-alert-all-hero-heading = Bili ste vpleteni v novo krajo podatkov
email-breach-alert-all-hero-subheading = Brez skrbi, pomagamo vam lahko odpraviti to izpostavljenost
email-breach-alert-all-lead = { -brand-mozilla-monitor } je odkril naslednjo krajo podatkov, ki vključujejo vaše osebne podatke:
email-breach-alert-all-source-title = Vir kraje podatkov:
email-breach-alert-all-data-points-title = Vaši izpostavljeni podatki:
email-breach-alert-all-next-steps-lead = Korak za korakom vas bomo vodili, kako razrešiti krajo podatkov.
email-breach-alert-all-next-steps-cta-label = Pa začnimo
email-breach-alert-all-next-steps-button-dashboard = Pojdi na nadzorno ploščo

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Podrobnosti o kraji podatkov za { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } je našel vaše podatke v kraji podatkov { $company-name } dne { $breach-date }. To opozorilo ste prejeli, ker ste se prijavili na <link_to_settings>obvestila o krajah</link_to_settings>.
email-breach-alert-all-source-title-1 = Podrobnosti kraje podatkov
email-breach-alert-company = Podjetje:
email-breach-alert-date-of-breach = Datum kraje podatkov:
email-breach-alert-info-exposed = Vaši izpostavljeni podatki:
email-breach-alert-next-steps = Naslednji koraki
email-breach-alert-next-steps-description = <sign_in_link>Prijavite se</sign_in_link> na { -brand-mozilla-monitor } nadzorno ploščo. Vodili vas bomo skozi korake, ki jih potrebujete za rešitev težave.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Razrešite krajo na nadzorni plošči
email-breach-alert-faqs-title = Pogosta vprašanja
email-breach-alert-faq-qn-1 = Zakaj prejemam to?
email-breach-alert-faq-ans-1 = Prijavili ste se na opozorila o kraji podatkov. Kadarkoli <link_to_settings>Posodobite svoje nastavitve</link_to_settings> v nastavitvah.
email-breach-alert-faq-qn-2 = Zakaj ne prepoznam tega podjetja ali spletnega mesta?
email-breach-alert-faq-ans-2 = Lahko ima spremenjeno lastništvo ali ime, vključuje star račun ali računa, ki je bil ustvarjen za vas, ali prihaja s kupljenega seznama izpostavljenih osebnih podatkov.
email-breach-alert-faq-qn-3 = Kaj je opozorilo o kraji podatkov?
email-breach-alert-faq-ans-3 = Obvestilo { -brand-mozilla-monitor } pošlje, ko so osebni podatki, ki jih spremljate, izpostavljeni, ukradeni ali kopirani brez dovoljenja.
email-breach-alert-faq-qn-4 = Kaj je { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Brezplačna storitev obveščanja o krajah podatkov, ki vas opozori, če so bili vaši spletni računi vpleteni v krajo podatkov.
