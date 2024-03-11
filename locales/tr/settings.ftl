# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Ayarlar
settings-page-title = { -product-short-name } Ayarları

## Breach alert preferences

settings-alert-preferences-title = İhlal uyarısı tercihleri
settings-alert-preferences-option-one = İhlal uyarılarını etkilenen e-posta adresine gönder
settings-alert-preferences-option-two = Tüm ihlal uyarılarını birinci e-posta adresine gönder

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (birinci)
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
# Deprecated
settings-delete-email-button = E-posta adresini sil
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

settings-cancel-premium-subscription-title = { -brand-premium } aboneliğini iptal et

## Deactivate account

settings-deactivate-account-title = Hesabı devre dışı bırak
settings-deactivate-account-info-2 = { -product-short-name }’ü { -brand-mozilla-account }nızı silerek devre dışı bırakabilirsiniz.
settings-fxa-link-label-3 = { -brand-mozilla-account } ayarlarına gidin

## Delete Monitor account

settings-delete-monitor-free-account-title = { -brand-monitor } hesabını sil
settings-delete-monitor-free-account-cta-label = Hesabı sil
settings-delete-monitor-free-account-dialog-title = { -brand-monitor } hesabınız kalıcı olarak silinecektir
settings-delete-monitor-free-account-dialog-cta-label = Hesabı sil
settings-delete-monitor-free-account-dialog-cancel-button-label = Vazgeçtim, geri dön
settings-delete-monitor-plus-account-title = { -brand-monitor } hesabımı sil
settings-delete-monitor-plus-account-cta-label = Hesabı sil
settings-delete-monitor-plus-account-dialog-title = { -brand-monitor } hesabınız kalıcı olarak silinecektir
settings-delete-monitor-plus-account-dialog-cta-label = Hesabı sil
settings-delete-monitor-plus-account-dialog-cancel-button-label = Vazgeçtim, geri dön
settings-delete-monitor-account-confirmation-toast-label = { -brand-monitor } hesabınız kalıcı olarak silindi.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Kapat

## Add email dialog

settings-email-dialog-title = Başka bir e-posta adresi ekle
settings-add-email-text = Bir ihlale karışıp karışmadığını görmek için yeni bir e-posta adresi ekleyin.
settings-email-input-label = E-posta adresi
settings-send-email-verification-button = Doğrulama bağlantısını gönder

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Ayrılmanıza üzüldük. <br /> Neden ayrıldığınızı söylemek ister misiniz?
settings-unsubscribe-dialog-info = Deneyiminiz bizim için önemli. Her yanıtı okuyup dikkate alıyoruz.
settings-unsubscribe-dialog-message-placeholder = Neyi daha iyi yapabilirdik?
settings-unsubscribe-dialog-continue = İptal işlemine devam et
settings-unsubscribe-dialog-cancel = Vazgeçtim, geri dön
