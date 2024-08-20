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
legal = Hukuki Bilgiler
# Unsubscribe link in email.
email-unsub-link = Abonelikten çık
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Bu e-postayı { -product-name } uyarılarına kaydolduğunuz için alıyorsunuz. Artık bu e-postaları istemiyor musunuz? { $unsubLink }. Bu otomatik bir e-postadır. Destek için { $faqLink } sayfasını ziyaret edebilirsiniz.
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
email-breach-alert-blurb = { -product-name } sizi kişisel bilgilerinizin dahil olduğu veri ihlalleri konusunda uyarır. Bir şirketin yaşadığı veri ihlali konusunda bilgi aldık.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = İhlal verileri <a { $hibp-link-attr }>{ -brand-HIBP }</a> tarafından sağlanmaktadır

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Çözümlenmemiş ihlalleriniz var
email-unresolved-subhead = E-postanız açığa çıktı. <br>{ -product-name } ile hemen düzeltin.
email-is-affected = { $email-address } adresiniz en az bir veri ihlalinden etkileniyor
email-more-detail = İhlallerinizle ilgili daha fazla ayrıntı (ne zaman meydana geldiği ve hangi verilerin ifşa edildiği dahil) görmek için hemen { -product-name }’de oturum açın ve e-postanız bir veri ihlaline maruz kaldığında ne yapmanız gerektiğini öğrenin.
email-breach-status = İhlal durumu
# table row 1 label
email-monitored = İzlenen toplam e-posta sayısı:
# table row 2 label
email-breach-total = Toplam ihlal sayısı:
# table row 3 label
email-resolved = Çözülen ihlaller:
# table row 4 label
email-unresolved = Çözülmemiş ihlaller:
email-resolve-cta = İhlalleri çöz

## Verification email

email-verify-heading = Verilerinizi korumaya hemen şimdi başlayın
email-verify-subhead = Veri ihlallerinin ardından verilerinizi korumaya başlamak için e-postanızı doğrulayın.
email-verify-simply-click = Hesabınızı doğrulamak için aşağıdaki bağlantıya tıklamanız yeterli.

## Breach report

email-breach-summary = İşte veri ihlali özetiniz
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = { $email-address } hesabınızın arama sonuçları, e-postanızın açığa çıkmış olabileceğini tespit etti. Bu ihlali çözmek için hemen harekete geçmenizi öneririz.
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = <b>{ $email-address }</b> hesabınızın arama sonuçları, e-postanızın açığa çıkmış olabileceğini tespit etti. Bu ihlali çözmek için hemen harekete geçmenizi öneririz.
email-dashboard-cta = Panoya git

## Breach alert

email-spotted-new-breach = Yeni bir veri ihlali tespit ettik
