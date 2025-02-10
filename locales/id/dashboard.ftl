# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading =
    { $nr ->
       *[other] <nr>{ $nr }</nr> <label>exposures</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Tetap</label>
exposure-chart-legend-heading-type = Eksposur
exposure-chart-legend-heading-nr = Angka
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Bagan ini menunjukkan berapa kali info Anda diekspos secara aktif.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Bagan ini menunjukkan total eksposur yang diperbaiki ({ $total_fixed_exposures_num } dari { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Alamat rumah, anggota keluarga, dan lainnya belum disertakan.
exposure-chart-returning-user-upgrade-prompt-cta = Mulai pemindaian gratis
exposure-chart-scan-in-progress-prompt = <b>Pemindaian sedang berlangsung:</b> alamat, anggota keluarga, dan lainnya belum disertakan.
modal-active-number-of-exposures-title = Tentang jumlah eksposur aktif Anda
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
       *[other] Bagan ini mencakup berapa kali kami menemukan setiap jenis data yang terekspos di semua kebocoran data hingga { $limit } alamat surel yang sedang Anda pantau.
    }
modal-active-number-of-exposures-part-two = Misalnya, jika Anda memiliki 10 eksposur nomor telepon Anda, itu mungkin berarti satu nomor telepon terpapar di 10 situs berbeda, atau bisa berarti 2 nomor telepon berbeda terpapar di 5 situs berbeda.
modal-active-number-of-exposures-part-three-all = Setelah mereka diselesaikan, mereka akan ditambahkan ke jumlah total eksposur tetap Anda pada halaman Tetap.
modal-fixed-number-of-exposures-title = Tentang jumlah eksposur tetap Anda
modal-fixed-number-of-exposures-all = Bagan ini mencakup jumlah kebocoran data yang telah diperbaiki untuk semua alamat surel yang sedang Anda pantau. Setelah eksposur ditandai sebagai tetap, mereka akan ditambahkan ke total di sini.
modal-cta-ok = Oke
modal-cta-got-it = Paham
open-modal-alt = Buka modal
close-modal-alt = Tutup
open-tooltip-alt = Buka tooltip
progress-card-heres-what-we-fixed-headline-all = Inilah yang Anda perbaiki
progress-card-manually-fixed-headline = Diperbaiki secara manual
dashboard-tab-label-action-needed = Diperlukan tindakan
dashboard-tab-label-fixed = Diperbaiki
dashboard-exposures-all-fixed-label = Semua diperbaiki di sini!
dashboard-exposures-area-headline = Lihat semua situs tempat info Anda terekspos
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
       *[other] Kami menemukan { $exposures_unresolved_num } eksposur data Anda.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
       *[other] Itu muncul di { $data_breach_unresolved_num } kebocoran data.
    }
dashboard-fixed-area-headline-all = Lihat semua eksposur yang diperbaiki
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Perusahaan
dashboard-exposures-filter-date-found = Tanggal ditemukan
dashboard-exposures-filter-date-found-last-seven-days = 7 hari terakhir
dashboard-exposures-filter-date-found-last-thirty-days = 30 hari terakhir
dashboard-exposures-filter-date-found-last-year = Tahun lalu
dashboard-exposures-filter-status = Status
popover-open-filter-settings-alt = Pilih filter
dashboard-exposures-filter-show-all = Tampilkan Semua
dashboard-exposures-filter-show-results = Tampilkan hasil
dashboard-exposures-filter-reset = Setel Ulang

## Top banner on the dashboard

dashboard-top-banner-section-label = Ringkasan dasbor
dashboard-top-banner-scan-in-progress-title = Pemindaian Anda masih dalam proses
dashboard-top-banner-your-data-is-protected-title = Data Anda terlindungi
dashboard-top-banner-your-data-is-protected-cta = Lihat apa yang diperbaiki
dashboard-top-banner-lets-keep-protecting-title = Mari terus melindungi data Anda
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
       *[other] Anda masih memiliki { $exposures_unresolved_num } eksposur yang tersisa untuk diperbaiki. Lanjutkan dan lindungi diri Anda. Kami akan memandu Anda langkah demi langkah.
    }
dashboard-top-banner-lets-keep-protecting-cta = Ayo lanjutkan
dashboard-top-banner-protect-your-data-title = Mari lindungi data Anda
dashboard-top-banner-protect-your-data-cta = Mari kita perbaiki
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
       *[other] Kami menemukan { $exposures_unresolved_num } eksposur data Anda.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
       *[other] Itu muncul di { $data_breach_unresolved_num } kebocoran data. Kami akan memandu Anda langkah demi langkah tentang cara memperbaikinya.
    }
dashboard-top-banner-no-exposures-found-title = Tidak ada eksposur ditemukan
dashboard-top-banner-non-us-no-exposures-found-description = Berita bagus! Kami mencari semua pembobolan data yang diketahui dan tidak menemukan eksposur. Kami akan terus memantau alamat surel Anda dan akan mengingatkan Anda jika terjadi pembobolan baru.
dashboard-no-exposures-label = Tidak ada eksposur ditemukan
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
       *[other] Kerja bagus, semua { $exposures_resolved_num } eksposur data Anda telah diperbaiki! Kami akan terus memantau dan akan mengingatkan Anda tentang eksposur baru.
    }
dashboard-top-banner-monitor-more-cta = Pantau lebih banyak surel

# About Exposure Indicators Modal

modal-exposure-status-description-all = Kami mencari eksposur di semua pembobolan data yang diketahui. Eksposur Anda akan memiliki salah satu status berikut:
modal-exposure-indicator-title = Status paparan
modal-exposure-indicator-action-needed = Tindakan lanjutan atau manual diperlukan oleh Anda untuk menyelesaikan suatu tindakan.
modal-exposure-indicator-fixed = Eksposur telah teratasi dan tidak ada tindakan yang dapat Anda lakukan.
