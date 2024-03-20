# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Pengaturan
settings-page-title = Pengaturan { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Melanggar preferensi peringatan
settings-alert-preferences-option-one = Kirim peringatan kebocoran ke alamat surel terkait
settings-alert-preferences-option-two = Kirim semua peringatan pembobolan ke alamat surel utama

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (utama)
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
# Deprecated
settings-delete-email-button = Hapus alamat surel
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Batalkan langganan { -brand-premium }
settings-cancel-premium-subscription-info = Langganan Anda akan kembali ke akun gratis setelah siklus penagihan saat ini berakhir. Hasil pemindaian perlindungan privasi Anda akan dihapus secara permanen, dan Anda hanya akan memiliki pemantauan pelanggaran data untuk 1 alamat email.

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
settings-delete-monitor-plus-account-title = Hapus akun { -brand-monitor }
settings-delete-monitor-plus-account-description = Ini akan menghapus akun { -brand-monitor } Anda secara permanen dan segera mengakhiri langganan { -brand-monitor-plus } berbayar Anda.
settings-delete-monitor-plus-account-cta-label = Hapus akun
settings-delete-monitor-plus-account-dialog-title = Akun { -brand-monitor } Anda akan dihapus secara permanen
settings-delete-monitor-plus-account-dialog-lead-p1 = Semua informasi akun { -brand-monitor } Anda akan dihapus dan kami tidak akan lagi memantau kebocoran data baru atau eksposur broker data. Ini tidak akan menghapus akun { -brand-mozilla } Anda.
settings-delete-monitor-plus-account-dialog-lead-p2 = Langganan berbayar Anda akan berakhir hari ini dan Anda tidak akan diprorata untuk sisa langganan Anda.
settings-delete-monitor-plus-account-dialog-cta-label = Hapus akun
settings-delete-monitor-plus-account-dialog-cancel-button-label = Sudahlah, bawa aku kembali
settings-delete-monitor-account-confirmation-toast-label = Akun { -brand-monitor } Anda sekarang telah dihapus secara permanen.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Tutup

## Add email dialog

settings-email-dialog-title = Tambahkan alamat surel lainnya
settings-add-email-text = Tambahkan alamat surel baru untuk melihat apakah itu terlibat dalam pembobolan.
settings-email-input-label = Alamat surel
settings-send-email-verification-button = Kirim tautan verifikasi

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Kami sedih melihat Anda pergi. <br /> Maukah Anda memberi tahu kami alasan Anda pergi?
settings-unsubscribe-dialog-info = Pengalaman Anda penting bagi kami. Kami membaca setiap tanggapan dan mempertimbangkannya.
settings-unsubscribe-dialog-message-placeholder = Apa yang bisa lebih baik?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Harap dicatat, semua layanan { -brand-monitor-premium } Anda akan <a { $faq_href }>dihapus secara permanen</a> setelah siklus penagihan Anda saat ini berakhir.
settings-unsubscribe-dialog-continue = Lanjutkan ke pembatalan
settings-unsubscribe-dialog-cancel = Sudahlah, bawa aku kembali
