# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } Ayarları

## Breach alert preferences

settings-alert-email-preferences-title = E-posta tercihleri
settings-alert-email-preferences-subtitle = Ne tür e-postaları almak istediğinizi bize söyleyin.
settings-alert-preferences-allow-breach-alerts-title = Anlık ihlal uyarıları
settings-alert-preferences-allow-breach-alerts-subtitle = Bu uyarılar bir veri ihlali algılandığı anda hemen gönderilir.
settings-alert-preferences-option-one = İhlal uyarılarını etkilenen e-posta adresine gönder
settings-alert-preferences-option-two = Tüm ihlal uyarılarını birinci e-posta adresine gönder
settings-alert-preferences-allow-monthly-monitor-report-title = Aylık { -brand-monitor } raporu

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = İzlenen e-posta adresleri
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Hesabınız toplam { $limit } e-posta adresini izlemenize olanak veriyor.
       *[other] Hesabınız toplam { $limit } e-posta adresini izlemenize olanak veriyor.
    }
settings-email-verification-callout = E-posta doğrulaması gerekiyor
settings-resend-email-verification-link = Doğrulama e-postasını yeniden gönder
settings-add-email-button = E-posta adresi ekle
settings-remove-email-button-label = Kaldır
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = { $emailAddress } adresini izlemeyi durdur
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Bilinen { $breachCount } ihlalde yer alıyor.
       *[other] Bilinen { $breachCount } ihlalde yer alıyor.
    }

## Deactivate account

settings-deactivate-account-title = Hesabı devre dışı bırak
settings-deactivate-account-info-2 = { -product-short-name }’ü { -brand-mozilla-account }nızı silerek devre dışı bırakabilirsiniz.
settings-fxa-link-label-3 = { -brand-mozilla-account } ayarlarına gidin

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor } hesabını sil
settings-delete-monitor-free-account-description = Bu işlem { -brand-monitor } hesabınızı kalıcı olarak silecek ve tüm bildirimleri kapatacaktır.
settings-delete-monitor-free-account-cta-label = Hesabı sil
settings-delete-monitor-free-account-dialog-title = { -brand-monitor } hesabınız kalıcı olarak silinecektir
settings-delete-monitor-free-account-dialog-lead = Tüm { -brand-monitor } hesap bilgileriniz silinecek ve artık yeni veri ihlalleri için izlenmeyecektir. Bu işlem { -brand-mozilla } hesabınızı silmez.
settings-delete-monitor-free-account-dialog-cta-label = Hesabı sil
settings-delete-monitor-free-account-dialog-cancel-button-label = Vazgeçtim, geri dön
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor } hesabınız silindi.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Kapat
