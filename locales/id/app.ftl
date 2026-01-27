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
-brand-solo-ai = Solo AI

##

error-not-subscribed = Alamat surel ini tidak berlangganan { -product-name }.
user-add-invalid-email = Surel Tidak Valid
user-add-too-many-emails = Anda memantau alamat email dengan jumlah maksimum.
user-add-duplicate-email = Surel ini telah ditambahkan ke { -product-name }.
user-add-verification-email-just-sent = Surel verifikasi lainnya tidak dapat dikirim secepat ini. Silakan coba lagi nanti.
user-add-unknown-error = Ada yang salah saat menambahkan alamat surel lainnya. Silakan coba lagi nanti.
user-delete-unknown-error = Ada yang salah saat menghapus alamat surel. Silakan coba lagi nanti.
user-verify-token-error = Token verifikasi diperlukan.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data yang telah diketahui orang lain:
# Link title
more-about-this-breach = Lebih lanjut tentang pembobolan ini
what-data = Data apa saja yang terkompromi:
delayed-reporting-headline = Mengapa butuh waktu lama untuk melaporkan pembobolan ini?
delayed-reporting-copy =
    Terkadang butuh waktu berbulan-bulan atau bertahun-tahun untuk identitas terungkap
    dalam kebocoran data untuk muncul di web gelap. Pembobolan ditambahkan ke basis data kami
    segera setelah ditemukan dan diverifikasi.

##

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Ringkasan
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Pada { $breachDate }, { $breachTitle } mengalami pembobolan. Setelah pembobolan ditemukan dan diverifikasi, maka informasi ini ditambahkan ke basis data kami pada { $addedDate }.

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
loading-accessibility = Memuat
