# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Tambahkan alamat surel lainnya
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
       *[other] Akun Anda mencakup pemantauan hingga { $total } alamat surel. Tambahkan alamat surel baru untuk melihat apakah alamatnya terlibat dalam pembobolan.
    }
add-email-address-input-label = Alamat surel
add-email-send-verification-button = Kirim tautan verifikasi
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifikasi tautan yang dikirim ke { $email } untuk menambahkannya ke { -brand-fx-monitor }. Kelola semua alamat surel di <a { $settings-href }>Pengaturan</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifikasi tautan yang dikirim ke <b>{ $email }</b> untuk menambahkannya ke { -brand-mozilla-monitor }.
