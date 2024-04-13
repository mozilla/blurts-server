# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = { -product-short-name } Ayarları

## Breach alert preferences

settings-alert-preferences-title = İhlal uyarısı tercihleri
settings-alert-preferences-option-one = İhlal uyarılarını etkilenen e-posta adresine gönder
settings-alert-preferences-option-two = Tüm ihlal uyarılarını birinci e-posta adresine gönder

## Monitored email addresses

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

## Cancel Premium subscription

## Deactivate account

settings-deactivate-account-title = Hesabı devre dışı bırak
settings-deactivate-account-info-2 = { -product-short-name }’ü { -brand-mozilla-account }nızı silerek devre dışı bırakabilirsiniz.
settings-fxa-link-label-3 = { -brand-mozilla-account } ayarlarına gidin

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor } hesabını sil
settings-delete-monitor-free-account-description = Bu işlem { -brand-monitor } hesabınızı kalıcı olarak silecek ve tüm bildirimleri kapatacaktır.
settings-delete-monitor-free-account-cta-label = Hesabı sil
settings-delete-monitor-free-account-dialog-title = { -brand-monitor } hesabınız kalıcı olarak silinecektir
settings-delete-monitor-free-account-dialog-cta-label = Hesabı sil
settings-delete-monitor-free-account-dialog-cancel-button-label = Vazgeçtim, geri dön
settings-delete-monitor-account-confirmation-toast-label-2 = { -brand-monitor } hesabınız silindi.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Kapat

## Add email dialog

## Unsubscribe Dialog Survey

