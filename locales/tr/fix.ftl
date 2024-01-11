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


# High Risk Data Breaches

high-risk-breach-heading = İşte yapmanız gerekenler
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
security-recommendation-steps-cta-label = Anladım!

# Phone security recommendation

security-recommendation-phone-title = Telefon numaranızı koruyun

# Email security recommendation


# IP security recommendation


# Leaked Passwords

leaked-passwords-steps-title = İşte yapmanız gerekenler
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
