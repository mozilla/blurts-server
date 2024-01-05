# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Tambahkan alamat surel lainnya
close-dialog-alt = Tutup dialog

# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
       *[other] Akun Anda mencakup pemantauan hingga { $total } alamat surel. Tambahkan alamat surel baru untuk melihat apakah alamatnya terlibat dalam pembobolan.
    }

add-email-address-input-label = Alamat surel
add-email-send-verification-button = Kirim tautan verifikasi

# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Verifikasi tautan yang dikirim ke { $email } untuk menambahkannya ke { -brand-fx-monitor }. Kelola semua alamat surel di <a { $settings-href }>Pengaturan</a>.
