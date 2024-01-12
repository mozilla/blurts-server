# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Yüksek riskli veri ihlalleri
fix-flow-nav-leaked-passwords = Sızan parolalar
fix-flow-nav-security-recommendations = Güvenlik önerileri
guided-resolution-flow-exit = Kontrol paneline dön
guided-resolution-flow-back-arrow = Önceki adıma git
guided-resolution-flow-next-arrow = Sonraki adıma git
guided-resolution-flow-step-navigation-label = Rehberli adımlar

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Devam edelim
fix-flow-celebration-next-recommendations-label = Önerilere bak
fix-flow-celebration-next-dashboard-label = Kontrol panelinize gidin

## High-risk flow


## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Parolalarınız artık koruma altında!
fix-flow-celebration-security-questions-title = Güvenlik sorularınız koruma altında!

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Tüm önerileri tamamladınız!
fix-flow-celebration-security-recommendations-description-next-dashboard = Tebrikler! Adımlarınızın sonuna geldiniz. Kontrol panelinizden istediğiniz işlemi görebilir ve ilerlemenizi takip edebilirsiniz.

# High Risk Data Breaches

high-risk-breach-heading = İşte yapmanız gerekenler
high-risk-breach-subheading = Bu işlem hassas bilgilerinize erişilmesini gerektirdiği için bunları kendiniz düzeltmeniz gerekiyor.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] { $num_breaches } veri ihlalinde yer alıyor:
       *[other] { $num_breaches } veri ihlalinde yer alıyor:
    }
high-risk-breach-mark-as-fixed = Düzeltildi olarak işaretle
high-risk-breach-skip = Şimdilik geç
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Tahmini süre: { $estimated_time }+ dakika
       *[other] Tahmini süre: { $estimated_time }+ dakika
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Kredi kartı numaranız ele geçirildi
high-risk-breach-credit-card-step-one = Bu kartı hâlâ kullanıyorsanız  kartı düzenleyen kuruluşla iletişime geçerek kartın çalındığını bildirin.
high-risk-breach-credit-card-step-two = Yeni bir numaraya sahip yeni bir kart isteyin.
high-risk-breach-credit-card-step-three = Hesaplarınızda tanımadığınız ödemeler olup olmadığını kontrol edin.

# Bank Account Breaches

high-risk-breach-bank-account-title = Banka hesap numaranız ele geçirildi
high-risk-breach-bank-account-description = En kısa sürede harekete geçmeniz, kayıplarınızı karşılamanıza yardımcı olacak daha fazla hukuki koruma sağlayabilir.
high-risk-breach-bank-account-step-one = Hesap numaranızın ele geçirildiğini hemen bankanıza bildirin.
high-risk-breach-bank-account-step-two = Hesap numaranızı değiştirin.
high-risk-breach-bank-account-step-three = Hesaplarınızda tanımadığınız ödemeler olup olmadığını kontrol edin.

# Social Security Number Breaches

high-risk-breach-social-security-title = Sosyal güvenlik numaranız ele geçirildi

# Social Security Number Modal

ssn-modal-ok = Tamam

# PIN Breaches


# No high risk breaches found

high-risk-breach-none-sub-description-part-one = Yüksek riskli veri ihlalleri şunlardır:
high-risk-breach-none-sub-description-ssn = Sosyal güvenlik numarası
high-risk-breach-none-sub-description-bank-account = Banka hesap bilgileri
high-risk-breach-none-sub-description-cc-number = Kredi kartı numaraları
high-risk-breach-none-sub-description-pin = PIN'ler
high-risk-breach-none-continue = Devam et

# Security recommendations

security-recommendation-steps-label = Güvenlik önerileri
security-recommendation-steps-title = Tavsiyemiz:
security-recommendation-steps-cta-label = Anladım!

# Phone security recommendation

security-recommendation-phone-title = Telefon numaranızı koruyun

# Email security recommendation

security-recommendation-email-title = E-posta adresinizi koruyun
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] E-posta adresiniz { $num_breaches } veri ihlalinde ele geçirildi:
       *[other] E-posta adresiniz { $num_breaches } veri ihlalinde ele geçirildi:
    }
security-recommendation-email-description = Maalesef bunu düzeltemezsiniz. Ancak kendinizi korumak için atabileceğiniz adımlar var.
security-recommendation-email-step-three = Şüpheli e-postaları spam olarak işaretleyip göndereni engelleyin
security-recommendation-email-step-four = E-postalarınızı korumak için <link_to_info>{ -brand-relay } e-posta maskelerini</link_to_info> kullanabilirsiniz

# IP security recommendation

security-recommendation-ip-title = Daha fazla gizlilik için VPN kullanabilirsiniz
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] IP adresiniz { $num_breaches } veri ihlalinde ele geçirildi:
       *[other] IP adresiniz { $num_breaches } veri ihlalinde ele geçirildi:
    }

# Leaked Passwords

leaked-passwords-steps-title = İşte yapmanız gerekenler
leaked-passwords-steps-subtitle = Bunun için hesabınıza erişim gerekiyor, o yüzden kendiniz düzeltmeniz gerekecek.
leaked-passwords-mark-as-fixed = Düzeltildi olarak işaretle
leaked-passwords-skip = Şimdilik geç
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Tahmini tamamlanma süresi: site başına { $estimated_time } dk.
       *[other] Tahmini tamamlanma süresi: site başına { $estimated_time } dk.
    }

# Leaked Security Questions

leaked-security-questions-title = Güvenlik sorularınız ele geçirilmiş
leaked-security-questions-steps-title = İşte yapmanız gerekenler
leaked-security-questions-steps-subtitle = Bunun için hesabınıza erişim gerekiyor, o yüzden kendiniz düzeltmeniz gerekecek.
