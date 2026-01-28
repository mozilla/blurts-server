# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Pengaturan { -product-short-name }

## Breach alert preferences

settings-alert-email-preferences-title = Preferensi surel
settings-alert-email-preferences-subtitle = Beri tahu kami surel mana yang ingin Anda terima.
settings-alert-preferences-allow-breach-alerts-title = Peringatan pembobolan instan
settings-alert-preferences-allow-breach-alerts-subtitle = Peringatan ini dikirim segera setelah pembobolan data terdeteksi
settings-alert-preferences-option-one = Kirim peringatan kebocoran ke alamat surel terkait
settings-alert-preferences-option-two = Kirim semua peringatan pembobolan ke alamat surel utama

## Monitored email addresses

settings-email-verification-callout = Verifikasi surel diperlukan
settings-email-addresses-header = Alamat surel
settings-email-addresses-description = { -brand-monitor } akan mengingatkan Anda jika surel ini muncul dalam pembobolan yang diketahui.
settings-email-addresses-add-email-button = Tambahkan alamat surel
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Tambahkan hingga { $limit }
settings-email-addresses-add-email-resend-button-label = Kirim ulang tautan verifikasi
input-error-alt = Galat

## Email address dialog

settings-email-addresses-initial-dialog-header = Tambahkan alamat surel
settings-email-addresses-initial-dialog-description = Kami akan mengirimkan tautan verifikasi untuk mengonfirmasi bahwa Anda ingin menyertakannya dalam pemindaian { -brand-monitor } mendatang.
settings-email-addresses-initial-dialog-add-email-input-label = Masukkan alamat surel
settings-email-addresses-initial-dialog-add-email-button-label = Kirim tautan verifikasi
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Tautan verifikasi dikirim ke <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Buka tautan untuk menambahkannya ke akun ini untuk pemindaian { -brand-monitor } di masa mendatang.
settings-email-addresses-confirmation-dialog-close-button = Tutup

## Delete Monitor account

settings-delete-monitor-free-account-title = Hapus akun { -brand-monitor }
settings-delete-monitor-free-account-description = Ini akan menghapus akun { -brand-monitor } Anda secara permanen dan mematikan semua notifikasi.
settings-delete-monitor-free-account-cta-label = Hapus akun
settings-delete-monitor-free-account-dialog-title = Akun { -brand-monitor } Anda akan dihapus secara permanen
settings-delete-monitor-free-account-dialog-lead-v2 = Semua informasi akun { -brand-monitor } Anda akan dihapus dan kami tidak akan lagi memantau kebocoran data baru. Ini tidak akan menghapus { -brand-mozilla-account } Anda.
settings-delete-monitor-free-account-dialog-cta-label = Hapus akun
settings-delete-monitor-free-account-dialog-cancel-button-label = Lupakan saja, bawa aku kembali
settings-delete-monitor-account-confirmation-toast-label-2 = Akun { -brand-monitor } Anda sekarang telah dihapus.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Tutup

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Perbarui info pemindaian
settings-tab-label-edit-info = Edit info Anda
settings-tab-label-notifications = Setel notifikasi
settings-tab-label-manage-account = Kelola akun
settings-tab-subtitle-manage-account = Kelola akun { -product-name } Anda.
settings-tab-notifications-marketing-title = Komunikasi pemasaran
settings-tab-notifications-marketing-text = Pembaruan berkala tentang { -brand-monitor }, { -brand-mozilla }, dan produk keamanan kami lainnya.
settings-tab-notifications-marketing-link-label = Ke pengaturan surel { -brand-mozilla }
