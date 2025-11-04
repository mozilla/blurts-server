# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Alamat surel ini tidak berlangganan { -product-name }.
error-hibp-throttled = Terlalu banyak koneksi ke { -brand-HIBP }.
error-hibp-connect = Gagal tersambung dengan { -brand-HIBP }.
user-add-invalid-email = Surel Tidak Valid
user-add-too-many-emails = Anda memantau alamat email dengan jumlah maksimum.
user-add-duplicate-email = Surel ini telah ditambahkan ke { -product-name }.
user-add-verification-email-just-sent = Surel verifikasi lainnya tidak dapat dikirim secepat ini. Silakan coba lagi nanti.
user-add-unknown-error = Ada yang salah saat menambahkan alamat surel lainnya. Silakan coba lagi nanti.
user-delete-unknown-error = Ada yang salah saat menghapus alamat surel. Silakan coba lagi nanti.
user-verify-token-error = Token verifikasi diperlukan.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data yang telah diketahui orang lain:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Data kebocoran disediakan oleh { $hibp-link }
show-all = Tampilkan Semua
sign-out = Keluar
# Link title
preferences = Pengaturan
# Link title
home = Beranda
# Link title
security-tips = Tips Keamanan
# Link title
more-about-this-breach = Lebih lanjut tentang pembobolan ini
monitor-several-emails = Pantau beberapa surel
website-breach = Pembobolan Situs Web
sensitive-breach = Pembobolan Situs Web Sensitif
data-aggregator-breach = Pembobolan Agregator Data
what-data = Data apa saja yang terkompromi:
sensitive-sites = Bagaimana { -product-name } memperlakukan situs sensitif?
sensitive-sites-copy =
    { -product-name } hanya memunculkan akun yang diasosiasikan dengan
    macam-macam kebocoran setelah sebuah alamat surel diverifikasi. Ini berarti Anda adalah
    satu-satu orang yang dapat melihat jika informasi Anda termasuk di dalam kebocoran ini
    (kecuali seseorang telah mengakses ke akun surel Anda).
delayed-reporting-headline = Mengapa butuh waktu lama untuk melaporkan pembobolan ini?
delayed-reporting-copy =
    Terkadang butuh waktu berbulan-bulan atau bertahun-tahun untuk identitas terungkap
    dalam kebocoran data untuk muncul di web gelap. Pembobolan ditambahkan ke basis data kami
    segera setelah ditemukan dan diverifikasi.
fxm-warns-you =
    { -product-name } memperingatkan Anda jika alamat surel Anda telah terungkap
    dalam kebocoran data daring. Lihat apakah informasi Anda telah terungkap, pelajari cara
    untuk melindungi akun daring Anda lebih baik, dan dapatkan pemberitahuan jika alamat surel Anda
    muncul dalam pembobolan baru.
what-is-data-agg = Apa itu agregator data?
what-is-data-agg-blurb =
    Pengumpul data, atau pialang data, mengumpulkan informasi dari rekaman
    publik dan membelinya dari perusahaan lain. Mereka mengkompilasi data ini untuk menjualnya kepada perusahaan
    untuk tujuan pemasaran. Korban pembobolan ini kecil kemungkinannya mengalami penipuan
    finansial, tetapi peretas dapat menggunakan data ini untuk menyamar atau membuat profil mereka.
avoid-personal-info = Hindari penggunaan informasi pribadi dalam kata sandi
send-verification = Kirim Tautan Verifikasi
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Ringkasan Pembobolan

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
       *[other] Kata sandi terungkap di semua pembobolan
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
       *[other] Pelanggaran data yang dikenal telah mengekspos informasi Anda
    }
what-is-a-website-breach = Apa itu pembobolan situs web?
website-breach-blurb = Kebocoran data situs web terjadi ketika penjahat siber mencuri, menyalin, atau mengungkap informasi pribadi dari akun daring. Biasanya ini merupakan hasil peretas yang menemukan titik lemah dalam keamanan situs web. Pembobolan juga dapat terjadi ketika informasi akun bocor secara tidak sengaja.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Ringkasan
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Pada { $breachDate }, { $breachTitle } mengalami pembobolan. Setelah pembobolan ditemukan dan diverifikasi, maka informasi ini ditambahkan ke basis data kami pada { $addedDate }.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifikasi tautan terkirim ke { $userEmail } untuk menambahkannya ke { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Pembobolan ditambahkan pada:
# Section headline
rec-section-headline = Apa yang harus dilakukan untuk pelanggaran ini
rec-section-subhead = Kami menyarankan Anda mengambil langkah-langkah ini untuk menjaga informasi pribadi Anda aman dan melindungi identitas digital Anda.
# Section headline
rec-section-headline-no-pw = Apa yang harus dilakukan untuk melindungi informasi pribadi Anda
rec-section-subhead-no-pw = Meskipun kata sandi tidak terbongkar dalam pelanggaran ini, masih ada langkah-langkah yang dapat Anda ambil untuk melindungi informasi pribadi Anda dengan lebih baik.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Baru

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Akun Mozilla
open-in-new-tab-alt = Buka tautan di tab baru

## Search Engine Optimization

meta-desc-2 = Cari tahu apakah Anda telah menjadi bagian dari pembobolan data dengan { -brand-fx-monitor }. Kami akan membantu Anda memahami apa yang harus dilakukan selanjutnya dan terus memantau setiap pelanggaran baru.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Masuk
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Menu utama
main-nav-button-collapse-label = Kuncupkan menu
main-nav-button-collapse-tooltip = Kuncupkan menu
main-nav-button-expand-label = Bentangkan menu
main-nav-button-expand-tooltip = Bentangkan menu
main-nav-label = Navigasi
main-nav-link-home-label = Beranda
main-nav-link-dashboard-label = Dasbor
main-nav-link-settings-label = Pengaturan
main-nav-link-faq-label = T&J
main-nav-link-faq-tooltip = Pertanyaan yang sering diajukan

## User menu

user-menu-trigger-label = Buka menu pengguna
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Kelola { -brand-mozilla-account } Anda
user-menu-settings-label = Pengaturan
user-menu-settings-tooltip = Konfigurasikan { -brand-mozilla-monitor }
user-menu-help-label = Bantuan dan dukungan
user-menu-help-tooltip = Dapatkan bantuan menggunakan { -brand-mozilla-monitor }
user-menu-signout-label = Keluar
user-menu-signout-tooltip = Keluar dari { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Ketentuan Layanan
privacy-notice = Pemberitahuan Privasi
github = { -brand-github }
footer-nav-recent-breaches = Pembobolan Data Terbaru
footer-external-link-faq-label = T&J
footer-external-link-faq-tooltip = Pertanyaan yang sering diajukan

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Laman tidak ditemukan
error-page-error-404-copy = Maaf, laman yang Anda cari sudah tidak ada lagi.
error-page-error-404-cta-button = Kembali
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Ada yang tidak beres

## Breach overview page

all-breaches-headline-3 = Basis Data Pembobolan Data
all-breaches-lead = Kami memantau semua pembobolan data yang diketahui untuk mengetahui apakah informasi pribadi Anda telah disusupi. Berikut daftar lengkap semua pembobolan yang telah dilaporkan sejak 2007.
search-breaches = Cari Pembobolan
# the kind of user data exposed to hackers in data breach.
exposed-data = Data terungkap:

## Public breach detail page

find-out-if-2 = Cari tahu apakah Anda terlibat dalam pembobolan ini
find-out-if-description = Kami akan membantu untuk dengan cepat melihat apakah alamat surel Anda terungkap dalam pembobolan ini, dan memahami apa yang harus dilakukan selanjutnya.
breach-detail-cta-signup = Periksa pembobolan data

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nama baru, tampilan, dan lebih banyak cara untuk <b>mendapatkan kembali privasi Anda</b>.
banner-monitor-rebrand-dismiss-button-label = Oke
banner-monitor-rebrand-dismiss-button-tooltip = Tutup
loading-accessibility = Memuat
