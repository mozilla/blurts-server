# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Giriş yap

## Email footers

email-footer-support-heading = { -brand-mozilla-monitor } hakkında sorularınız mı var?
email-footer-support-content = Yardım için <support-link>Destek Merkezimizi</support-link> ziyaret edin
email-footer-trigger-transactional = Bu e-postayı { -brand-mozilla-monitor } abonesi olduğunuz için aldınız.
email-footer-reason-subscriber = Bu otomatik e-postayı { -brand-mozilla-monitor } abonesi olduğunuz için aldınız. Hatalı olarak aldıysanız herhangi bir işlem yapmanız gerekmez. Daha fazla bilgi için <support-link>{ -brand-mozilla } Destek</support-link> sitesini ziyaret edebilirsiniz.
email-footer-reason-subscriber-one-time = Bu tek seferlik otomatik e-postayı { -brand-monitor-plus } abonesi olduğunuz için aldınız. Bir daha bunun gibi bir e-posta almayacaksınız. Daha fazla bilgi için <support-link>{ -brand-mozilla } Destek</support-link> sitesini ziyaret edebilirsiniz.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Yardım almak için destek merkezimizi ziyaret edebilirsiniz:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = İhlal verileri { -brand-HIBP } tarafından sağlanmaktadır: { $hibp_link }
email-footer-source-hibp = İhlal verileri <hibp-link>{ -brand-HIBP }</hibp-link> tarafından sağlanmaktadır
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Gizlilik
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = E-postayı doğrula
# Headline of verification email
email-link-expires = Bu bağlantı 24 saat sonra geçersiz hale gelir

##

# Subject line of email
email-subject-found-breaches = { -product-name } aşağıdaki veri ihlallerinde bilgilerinizi buldu
# Subject line of email
email-subject-no-breaches = { -product-name } bilinen veri ihlali bulamadı
# Subject line of email
email-subject-verify = { -product-name } e-postanızı doğrulayın
fxm-warns-you-no-breaches = { -product-name } sizi kişisel bilgilerinizin dahil olduğu veri ihlalleri konusunda uyarır. Şimdilik herhangi bir veri ihlali bulunamadı. E-posta adresiniz yeni bir veri ihlalinde yer alırsa size bildirim göndereceğiz.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = İhlal verileri <a { $hibp-link-attr }>{ -brand-HIBP }</a> tarafından sağlanmaktadır

## Verification email

email-verify-heading = Verilerinizi korumaya hemen şimdi başlayın
email-verify-simply-click = Hesabınızı doğrulamak için aşağıdaki bağlantıya tıklamanız yeterli.

## Breach report

email-breach-summary = İşte veri ihlali özetiniz
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = { $email-address } hesabınızın arama sonuçları, e-postanızın açığa çıkmış olabileceğini tespit etti. Bu ihlali çözmek için hemen harekete geçmenizi öneririz.
email-dashboard-cta = Kontrol paneline git

## Breach alert email

email-breach-alert-all-subject = Yeni bir veri ihlali tespit ettik
email-breach-alert-all-preview = Sorunu çözmeniz için gereken adımlarda size rehberlik edeceğiz.
email-breach-alert-all-hero-heading = Yeni bir veri ihlalinde yer alıyorsunuz
email-breach-alert-all-hero-subheading = Endişelenmeyin, bu ihlali çözmenize yardımcı olabiliriz
email-breach-alert-all-lead = { -brand-mozilla-monitor }, kişisel bilgilerinizi de içeren aşağıdaki veri ihlallerini tespit etti:
email-breach-alert-all-source-title = İhlal kaynağı:
email-breach-alert-all-data-points-title = Ele geçirilen verileriniz:
email-breach-alert-all-next-steps-lead = Bu veri ihlalini nasıl çözeceğinizi adım adım anlatacağız.
email-breach-alert-all-next-steps-cta-label = Başlayalım
email-breach-alert-all-next-steps-button-dashboard = Kontrol paneline git
