# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Pembobolan data berisiko tinggi
fix-flow-nav-leaked-passwords = Sandi bocor
fix-flow-nav-security-recommendations = Rekomendasi keamanan
guided-resolution-flow-exit = Kembali ke dasbor
guided-resolution-flow-next-arrow = Lanjutkan ke langkah berikutnya
guided-resolution-flow-next-arrow-sub-step = Buka hasil berikutnya
guided-resolution-flow-step-navigation-label = Langkah-langkah terpandu

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Ayo lanjutkan
fix-flow-celebration-next-recommendations-label = Lihat rekomendasi
fix-flow-celebration-next-dashboard-label = Ke Dasbor Anda

## High-risk flow

fix-flow-celebration-high-risk-title = Anda telah memperbaiki eksposur risiko tinggi Anda!
fix-flow-celebration-high-risk-description-in-progress = Melakukan pekerjaan ini bisa terasa sangat melelahkan, tetapi penting untuk dilakukan agar Anda tetap aman. Teruskan bekerja dengan baik.
fix-flow-celebration-high-risk-description-done = Melakukan pekerjaan ini bisa terasa sangat melelahkan, tetapi penting untuk dilakukan agar Anda tetap aman.
fix-flow-celebration-high-risk-description-next-passwords = Sekarang mari perbaiki kata sandi Anda yang terpapar.
fix-flow-celebration-high-risk-description-next-security-questions = Sekarang mari kita perbaiki pertanyaan keamanan Anda yang terpapar.
fix-flow-celebration-high-risk-description-next-security-recommendations = Selanjutnya, kami akan memberi Anda rekomendasi keamanan yang dipersonalisasi berdasarkan data Anda yang telah terpapar.
fix-flow-celebration-high-risk-description-next-dashboard = Anda telah mencapai akhir langkah Anda. Anda dapat melihat item tindakan apa pun dan melacak kemajuan Anda di dasbor Anda.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Sandi Anda sekarang dilindungi!
fix-flow-celebration-security-questions-title = Pertanyaan keamanan Anda dilindungi!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Sekarang mari kita tinjau dan perbarui pertanyaan keamanan Anda yang terpapar.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Selanjutnya, kami akan memberi Anda rekomendasi keamanan yang dipersonalisasi berdasarkan data Anda yang telah terpapar.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bagus! Anda telah mencapai akhir langkah Anda. Anda dapat melihat item tindakan apa pun dan melacak kemajuan Anda di dasbor Anda.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Anda telah menyelesaikan semua rekomendasi Anda!
fix-flow-celebration-security-recommendations-description-next-dashboard = Bagus! Anda telah mencapai akhir langkah Anda. Anda dapat melihat item tindakan apa pun dan melacak kemajuan Anda di dasbor Anda.

# High Risk Data Breaches

high-risk-breach-heading = Inilah yang harus dilakukan
high-risk-breach-subheading = Ini memerlukan akses ke informasi sensitif Anda, jadi Anda harus memperbaikinya secara manual.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
       *[other] Itu muncul dalam { $num_breaches } pembobolan data:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>pada { $breach_date }</breach_date>
high-risk-breach-skip = Lewatkan sekarang
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
       *[other] Perkiraan waktu Anda: { $estimated_time }+ menit
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Nomor kartu kredit Anda terungkap
high-risk-breach-credit-card-description = Siapa pun yang mendapatkannya dapat melakukan pembelian tidak sah yang mungkin menjadi tanggung jawab Anda. Bertindak sekarang untuk mencegah kerugian finansial.
high-risk-breach-credit-card-step-one = Jika Anda masih memiliki kartu ini, hubungi penerbit untuk melaporkannya dicuri.
high-risk-breach-credit-card-step-two = Minta kartu baru dengan nomor baru.
high-risk-breach-credit-card-step-three = Periksa akun Anda untuk tagihan yang tidak sah.

# Bank Account Breaches

high-risk-breach-bank-account-title = Rekening bank Anda terungkap
high-risk-breach-bank-account-description = Mengambil tindakan sesegera mungkin dapat memberi Anda lebih banyak perlindungan hukum untuk membantu Anda memulihkan kerugian apa pun.
high-risk-breach-bank-account-step-one = Segera beri tahu bank Anda bahwa nomor rekening Anda telah terkompromi.
high-risk-breach-bank-account-step-two = Ubah nomor akun Anda.
high-risk-breach-bank-account-step-three = Periksa akun Anda untuk tagihan yang tidak sah.

# Social Security Number Breaches

high-risk-breach-social-security-title = Nomor jaminan sosial Anda terungkap
high-risk-breach-social-security-description = Penipu dapat membuka pinjaman atau kartu kredit baru dengan nomor jaminan sosial Anda. Bertindak cepat untuk mencegah kerugian finansial.
high-risk-breach-social-security-step-one = Lindungi diri Anda dengan <link_to_info>menyiapkan peringatan penipuan atau membekukan kredit Anda.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Periksa laporan kredit Anda</link_to_info> untuk akun yang tidak dikenal.

# Social Security Number Modal

ssn-modal-title = Tentang peringatan penipuan dan pembekuan kredit
ssn-modal-description-fraud-part-one = <b>Peringatan penipuan</b> mengharuskan bisnis untuk memverifikasi identitas Anda sebelum mengeluarkan kredit baru atas nama Anda. Gratis, berlaku satu tahun, dan tidak akan berdampak negatif pada nilai kredit Anda.
ssn-modal-description-fraud-part-two = Untuk menyiapkannya, hubungi salah satu dari tiga biro kredit. Anda tidak perlu menghubungi ketiganya.
ssn-modal-description-freeze-credit-part-one = <b>Membekukan kredit Anda</b> mencegah siapa pun membuka akun baru atas nama Anda. Ini gratis dan tidak akan berdampak negatif pada skor kredit Anda, tetapi Anda harus mencairkannya sebelum membuka akun baru.
ssn-modal-description-freeze-credit-part-two = Untuk membekukan kredit Anda, hubungi masing-masing dari tiga biro kredit — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link>, dan <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Pelajari lebih lanjut tentang peringatan penipuan dan pembekuan kredit
ssn-modal-ok = Oke

# PIN Breaches

high-risk-breach-pin-title = PIN Anda terungkap
high-risk-breach-pin-description = Mengambil tindakan sesegera mungkin dapat memberi Anda lebih banyak perlindungan hukum untuk membantu Anda memulihkan kerugian apa pun.
high-risk-breach-pin-step-one = Segera beri tahu bank Anda bahwa PIN Anda telah terkompromi.
high-risk-breach-pin-step-two = Ubah PIN Anda di mana pun Anda menggunakan PIN yang sama.
high-risk-breach-pin-step-three = Periksa akun Anda untuk tagihan yang tidak sah.

# No high risk breaches found

high-risk-breach-none-title = Berita bagus, kami tidak menemukan kebocoran data berisiko tinggi
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Kami mendeteksi pembobolan data berdasarkan alamat surel Anda, dan kami tidak menemukan pembobolan data berisiko tinggi untuk { $email_list }.
high-risk-breach-none-sub-description-part-one = Pembobolan data berisiko tinggi meliputi:
high-risk-breach-none-sub-description-ssn = Nomor jaminan sosial
high-risk-breach-none-sub-description-bank-account = Info rekening bank
high-risk-breach-none-sub-description-cc-number = Nomor kartu kredit
high-risk-breach-none-sub-description-pin = PIN
high-risk-breach-none-continue = Lanjutkan

# Security recommendations

security-recommendation-steps-label = Rekomendasi keamanan
security-recommendation-steps-title = Berikut saran kami:
security-recommendation-steps-cta-label = Paham!

# Phone security recommendation

security-recommendation-phone-title = Lindungi nomor telepon Anda
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
       *[other] Nomor telepon Anda terpapar dalam { $num_breaches } kebocoran data:
    }
security-recommendation-phone-description = Sayangnya Anda tidak dapat mengambilnya kembali. Tetapi ada beberapa langkah yang dapat Anda ambil untuk memastikan Anda tetap aman.
security-recommendation-phone-step-one = Blokir nomor spam untuk mencegah lebih banyak panggilan sampah
security-recommendation-phone-step-two = Jangan mengklik tautan dalam teks dari pengirim yang tidak dikenal; jika tampaknya berasal dari sumber tepercaya, hubungi langsung untuk mengonfirmasi

# Email security recommendation

security-recommendation-email-title = Lindungi alamat surel Anda
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
       *[other] Alamat surel Anda terekspos dalam { $num_breaches } pembobolan data:
    }
security-recommendation-email-description = Sayangnya Anda tidak dapat memperbaikinya. Tetapi ada beberapa langkah yang dapat Anda ambil untuk melindungi diri Anda sendiri.
security-recommendation-email-step-one = Jangan mengeklik tautan dalam surel dari pengirim yang tidak dikenal; jika tampaknya berasal dari sumber tepercaya, hubungi langsung untuk mengonfirmasi
security-recommendation-email-step-two = Waspadai <link_to_info>penipuan phishing</link_to_info>
security-recommendation-email-step-three = Tandai surel yang mencurigakan sebagai spam dan blokir pengirimnya
security-recommendation-email-step-four = Gunakan <link_to_info>{ -brand-relay } topeng surel</link_to_info> untuk melindungi surel Anda di masa mendatang

# IP security recommendation

security-recommendation-ip-title = Gunakan VPN untuk privasi tambahan
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
       *[other] Alamat IP Anda terpapar dalam { $num_breaches } kebocoran data:
    }
security-recommendation-ip-description = Alamat IP Anda menunjukkan lokasi dan penyedia layanan internet Anda. Peretas dapat menggunakan informasi ini untuk menemukan lokasi Anda atau mencoba menyambung ke perangkat Anda.
security-recommendation-ip-step-one = Gunakan VPN (seperti <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) untuk menyembunyikan alamat IP asli Anda dan menggunakan internet secara pribadi.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Sandi { $breach_name } Anda terekspos
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Itu muncul dalam kebocoran data pada { $breach_date }.
leaked-passwords-description = Penipu dapat mengakses akun Anda dan kemungkinan akan mencoba menggunakannya di akun lain untuk melihat apakah Anda menggunakan kata sandi yang sama. Ubah kata sandi tersebut di mana pun Anda menggunakannya untuk melindungi diri sendiri.
leaked-passwords-steps-title = Inilah yang harus dilakukan
leaked-passwords-steps-subtitle = Ini memerlukan akses ke akun Anda, jadi Anda harus memperbaikinya secara manual.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Ubah sandi Anda untuk <b>{ $emails_affected }</b> di <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Ubah di mana pun Anda pernah menggunakannya.
leaked-passwords-mark-as-fixed = Tandai sebagai diperbaiki
leaked-passwords-skip = Lewatkan sekarang

# Leaked Security Questions

leaked-security-questions-title = Pertanyaan keamanan Anda terungkap
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Mereka muncul dalam pembobolan data pada { $breach_name } pada { $breach_date }.
leaked-security-questions-steps-title = Inilah yang harus dilakukan
leaked-security-questions-steps-subtitle = Ini memerlukan akses ke akun Anda, jadi Anda harus memperbaikinya secara manual.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Perbarui pertanyaan keamanan Anda untuk <b>{ $email_affected }</b> di <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Perbarui di situs lain tempat Anda menggunakan pertanyaan keamanan yang sama. Pastikan untuk menggunakan pertanyaan keamanan yang berbeda untuk setiap akun.
