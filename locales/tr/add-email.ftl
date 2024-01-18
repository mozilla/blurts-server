# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Başka bir e-posta adresi ekle
close-dialog-alt = İletişim kutusunu kapat
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Hesabınız toplam { $total } e-posta adresini izlemenize olanak veriyor. Yeni bir e-posta adresi ekleyerek o adresin ihlallerde yer alıp almadığını görebilirsiniz.
       *[other] Hesabınız toplam { $total } e-posta adresini izlemenize olanak veriyor. Yeni bir e-posta adresi ekleyerek o adresin ihlallerde yer alıp almadığını görebilirsiniz.
    }
add-email-address-input-label = E-posta adresi
add-email-send-verification-button = Doğrulama bağlantısını gönder
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = { -brand-fx-monitor }’e eklemek için { $email } adresine gönderilen bağlantıyı doğrulayın. Tüm e-posta adreslerini <a { $settings-href }>Ayarlar</a>’dan yönetebilirsiniz.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = <b>{ $email }</b> adresine gönderilen bağlantıyı onaylarak adresinizi { -brand-mozilla-monitor }’e ekleyin.
