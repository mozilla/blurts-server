# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Pengaturan { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Pengaturan email
settings-alert-email-preferences-subtitle = Beri tahu kami surel mana yang ingin Anda terima.
settings-alert-preferences-allow-breach-alerts-title = Peringatan pembobolan instan
settings-alert-preferences-allow-breach-alerts-subtitle = Peringatan ini dikirim segera setelah pembobolan data terdeteksi
settings-alert-preferences-option-one = Kirim peringatan kebocoran ke alamat surel terkait
settings-alert-preferences-option-two = Kirim semua peringatan pembobolan ke alamat surel utama
settings-alert-preferences-allow-monthly-monitor-report-title = Laporan bulanan { -brand-monitor }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Pembaruan bulanan untuk eksposur baru, apa yang telah diperbaiki, dan apa yang perlu Anda perhatikan.

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Alamat surel yang dipantau
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
       *[other] Akun Anda mencakup pemantauan hingga { $limit } surel.
    }
settings-email-verification-callout = Verifikasi surel diperlukan
settings-resend-email-verification-link = Kirim ulang verifikasi surel
settings-add-email-button = Tambahkan alamat surel
settings-remove-email-button-label = Hapus
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Hentikan pemantauan { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
       *[other] Muncul dalam { $breachCount } pembobolan yang diketahui.
    }

## Deactivate account

settings-deactivate-account-title = Nonaktifkan akun
settings-deactivate-account-info-2 = Anda dapat menonaktifkan { -product-short-name } dengan menghapus { -brand-mozilla-account } Anda.
settings-fxa-link-label-3 = Buka pengaturan { -brand-mozilla-account }

## Delete Monitor account

settings-delete-monitor-free-account-title = Hapus akun { -brand-monitor }
settings-delete-monitor-free-account-description = Ini akan menghapus akun { -brand-monitor } Anda secara permanen dan mematikan semua notifikasi.
settings-delete-monitor-free-account-cta-label = Hapus akun
settings-delete-monitor-free-account-dialog-title = Akun { -brand-monitor } Anda akan dihapus secara permanen
settings-delete-monitor-free-account-dialog-lead = Semua informasi akun { -brand-monitor } Anda akan dihapus dan kami tidak akan lagi memantau kebocoran data baru. Ini tidak akan menghapus akun { -brand-mozilla } Anda.
settings-delete-monitor-free-account-dialog-cta-label = Hapus akun
settings-delete-monitor-free-account-dialog-cancel-button-label = Sudahlah, bawa aku kembali
settings-delete-monitor-account-confirmation-toast-label-2 = Akun { -brand-monitor } Anda sekarang telah dihapus.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Tutup
