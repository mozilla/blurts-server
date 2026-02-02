# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Masuk

## Email footers

email-footer-support-heading = Ada pertanyaan tentang { -brand-mozilla-monitor }?
email-footer-support-content = Kunjungi <support-link>Pusat Dukungan</support-link> kami untuk mendapatkan bantuan
email-footer-trigger-transactional = Anda menerima surel ini sebagai pelanggan { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Anda menerima surel otomatis ini sebagai pelanggan { -brand-mozilla-monitor }. Jika Anda menerimanya karena kesalahan, tidak ada tindakan yang diperlukan. Untuk informasi lebih lanjut, silakan kunjungi <support-link>{ -brand-mozilla } Support</support-link>.
email-footer-reason-subscriber-one-time = Anda menerima surel otomatis satu kali ini karena Anda berlangganan { -brand-monitor-plus }. Anda tidak akan menerima surel lagi seperti ini. Untuk informasi lebih lanjut, silakan kunjungi <support-link>{ -brand-mozilla } Support</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = Kunjungi Pusat Dukungan kami untuk mendapatkan bantuan: { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Data pembobolan disediakan oleh { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Data pembobolan disediakan oleh <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privasi
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Verifikasi Surel
# Headline of verification email
email-link-expires = Tautan ini kedaluwarsa dalam 24 jam

##

# Subject line of email
email-subject-found-breaches = { -product-name } menemukan info Anda dalam pembobolan ini
# Subject line of email
email-subject-no-breaches = { -product-name } tidak menemukan pembobolan yang diketahui
# Subject line of email
email-subject-verify = Verifikasi surel Anda untuk { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } memperingatkan Anda tentang pembobolan data yang melibatkan informasi pribadi Anda.
    Sejauh ini, tidak ada pembobolan yang ditemukan. Kami akan mengirimkan peringatan kepada Anda jika alamat surel Anda muncul dalam pembobolan baru.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Data pembobolan disediakan oleh <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Lindungi data Anda, mulai sekarang
email-verify-simply-click = Cukup klik tautan di bawah ini untuk menyelesaikan verifikasi akun Anda.

## Breach report

email-breach-summary = Berikut ringkasan pembobolan data Anda
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Hasil pencarian untuk akun { $email-address } Anda telah mendeteksi bahwa surel Anda mungkin telah terekspos. Kami menyarankan Anda bertindak sekarang untuk menindaklanjuti pelanggaran ini.
email-dashboard-cta = Buka Dasbor

## Breach alert email

email-breach-alert-all-subject = Pembobolan data baru terdeteksi
email-breach-alert-all-preview = Kami akan memandu Anda melalui langkah-langkah untuk mengatasinya.
email-breach-alert-all-hero-heading = Anda mengalami kebocoran data baru
email-breach-alert-all-hero-subheading = Jangan khawatir, kami dapat membantu Anda mengatasi paparan ini
email-breach-alert-all-lead = { -brand-mozilla-monitor } menemukan pembobolan data berikut yang mencakup informasi pribadi Anda:
email-breach-alert-all-source-title = Sumber pembobolan:
email-breach-alert-all-data-points-title = Data Anda yang terpapar:
email-breach-alert-all-next-steps-lead = Kami akan memandu Anda langkah demi langkah tentang cara mengatasi kebocoran data ini.
email-breach-alert-all-next-steps-cta-label = Mari kita mulai
email-breach-alert-all-next-steps-button-dashboard = Ke Dasbor
