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

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (birinci)
settings-email-list-title = İzlenen e-posta adresleri
settings-email-verification-callout = E-posta doğrulaması gerekiyor
settings-resend-email-verification-link = Doğrulama e-postasını yeniden gönder
settings-add-email-button = E-posta adresi ekle
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Bilinen { $breachCount } ihlalde yer alıyor.
       *[other] Bilinen { $breachCount } ihlalde yer alıyor.
    }

## Deactivate account

settings-deactivate-account-title = Hesabı devre dışı bırak
settings-deactivate-account-info = { -product-short-name }’ü { -brand-fx-account }nızı silerek devre dışı bırakabilirsiniz.
settings-fxa-link-label = { -brand-firefox } ayarlarına git

## Add email dialog

settings-email-dialog-title = Başka bir e-posta adresi ekle
settings-add-email-text = Bir ihlale karışıp karışmadığını görmek için yeni bir e-posta adresi ekleyin.
settings-email-input-label = E-posta adresi
settings-send-email-verification-button = Doğrulama bağlantısını gönder
