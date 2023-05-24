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
settings-delete-email-button = Hapus alamat surel
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
       *[other] Muncul dalam { $breachCount } pembobolan yang diketahui.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Batalkan langganan { -brand-premium }
settings-cancel-premium-subscription-info = Langganan Anda akan kembali ke akun gratis setelah siklus penagihan saat ini berakhir. Hasil pemindaian perlindungan privasi Anda akan dihapus secara permanen, dan Anda hanya akan memiliki pemantauan pelanggaran data untuk 1 alamat email.
settings-cancel-premium-subscription-link-label = Batalkan dari { -brand-fx-account } Anda

## Deactivate account

settings-deactivate-account-title = Nonaktifkan akun
settings-deactivate-account-info = Anda dapat menonaktifkan { -product-short-name } dengan menghapus { -brand-fx-account } Anda.
settings-fxa-link-label = Buka Pengaturan { -brand-firefox }

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
