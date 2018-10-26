# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Apakah Akun Saya Sudah Diterobos
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Dukungan
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Beri Umpanbalik
terms-and-privacy = Ketentuan dan Privasi
error-not-subscribed = Alamat surel ini tidak berlangganan { -product-name }.
error-hibp-throttled = Terlalu banyak koneksi ke { -brand-HIBP }.
error-hibp-connect = Gagal terhubung dengan { -brand-HIBP }.
error-hibp-load-breaches = Tidak dapat memuat data penerobosan.
hibp-notify-email-subject = { -product-name } Waspada: Akun anda telah terlibat dalam sebuah penerobosan.
home-title = { -product-name }
home-not-found = Laman tidak ditemukan.
oauth-confirmed-title = { -product-name }: Berlangganan
user-add-email-verify-subject = Verifikasi keberlangganan { -product-name } Anda.
user-add-title = { -product-name } : Konfirmasi Surel
user-verify-token-error = Perlu token verifikasi.
user-verify-email-report-subject = Laporan { -product-name } Anda
user-verify-title = { -product-name } : Berlangganan
user-unsubscribe-token-error = Perlu token untuk berhenti berlangganan.
user-unsubscribe-token-email-error = Perlu token dan emailHash untuk berhenti berlangganan.
user-unsubscribe-title = { -product-name } : Berhenti Berlangganan
user-unsubscribe-survey-title = { -product-name } : Berhenti Berlangganan Survei
user-unsubscribed-title = { -product-name } : Berhenti Berlangganan

## Password Tips

pwt-section-headline = Sandi yang Lebih Kuat = Perlindungan yang Lebih Baik
pwt-section-subhead = Informasi pribadi Anda aman seperti kata sandi Anda.
pwt-headline-1 = Gunakan kata sandi yang berbeda untuk setiap akun
pwt-headline-2 = Buat kata sandi yang kuat dan susah ditebak
pwt-headline-3 = Perlakukan pertanyaan keamanan seperti sandi tambahan.
pwt-headline-4 = Dapatkan bantuan mengingat sandi Anda
pwt-summary-4 =
    Pengelola sandi seperti 1Password, LastPass, Dashlane, dan Bitwarden mampu menghasilkan sandi yang kuat dan unik. 
    Pengelola sandi juga akan menyimpan sandi dengan aman dan mengisikannya pada situs web untuk kepentingan Anda
pwt-headline-5 = Tambahkan pengamanan ekstra dengan autentikasi dua faktor
pwt-headline-6 = Daftar untuk peringatan { -product-name-nowrap }
landing-headline = Hak Anda untuk aman dari para peretas dimulai dari sini.
landing-blurb = { -product-name-nowrap } mempersenjatai Anda dengan peralatan yang menjaga informasi pribadi Anda tetap aman. Cari tahu apa yang telah peretas ketahui tentang Anda, dan pelajari bagaimana supaya selalu selangkah di depan mereka.
scan-label = Periksa apakah Anda tersangkut dalam kebocoran data.
scan-placeholder = Masukkan Alamat Surel
scan-privacy = Surel Anda tidak akan disimpan.
scan-submit = Cari Surel Anda
scan-another-email = Pindai Alamat Surel Lainnya
scan-featuredbreach-label = Cari tahu apakah akun <span class="bold">{ $featuredBreach }</span> Anda telah diketahui orang lain.
scan-error = Harus surel yang valid.
signup-banner-headline = { -product-name-nowrap } mendeteksi ancaman terhadap akun daring Anda.
download-firefox-bar-blurb = { -product-name-nowrap } dipersembahkan oleh <span class="nowrap">{ -brand-name } yang serba baru</span>.
download-firefox-bar-link = Unduh { -brand-name } sekarang
download-firefox-banner-blurb = Ambil alih kendali peramban Anda
download-firefox-banner-button = Unduh { -brand-name }
signup-modal-headline = Daftar untuk { -product-name-nowrap }
signup-modal-blurb = Daftar untuk laporan penuh Anda, peringatan ketika terjadi kebocoran baru, dan kiat keamanan dari { -product-name-nowrap }.
signup-modal-close = Tutup
get-your-report = Dapatkan Laporan Anda
signup-modal-verify-headline = Verifikasi Keberlangganan Anda
signup-modal-verify-blurb = Kami telah mengirimkan tautan verifikasi ke <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Tautan ini kedaluwarsa dalam 24 jam.
signup-modal-verify-resend = Tidak ada di folder kotak masuk atau spam? Kirim ulang.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Terkirim!
signup-with-fxa = Daftar dengan Akun { -brand-name }
form-signup-placeholder = Masukkan surel
form-signup-checkbox = Dapatkan kabar terbaru dari { -brand-Mozilla } dan { -brand-name }.
sign-up = Daftar
form-signup-error = Harus surel yang valid
no-breaches-headline = Sejauh ini baik baik saja.
found-breaches-headline = Informasi Anda tersangkut dalam kebocoran data.
no-breaches =
    Alamat surel Anda tidak muncul pada pindaian dasar kami.
    Kabar yang bagus, tetapi kebocoran data dapat terjadi kapan saja dan masih ada hal lain yang dapat Anda lakukan. 
    Berlangganan { -product-name-nowrap } untuk laporan lengkap, peringatan ketika terjadi kebocoran baru, dan kiat untuk melindungi sandi Anda.
featured-breach-results =
    { $breachCount ->
       *[other] Akun Anda muncul dalam kebocoran <span class="bold">{ $featuredBreach }</span>, sebagaimana { $breachCount } kebocoran lainnya.
    }
show-more-breaches = Tampilkan Lebih Banyak
what-to-do-headline = Apa yang Perlu Dilakukan ketika Informasi Anda Terekspos dalam Suatu Kebocoran Data
what-to-do-subhead-1 = Ubah sandi Anda, termasuk untuk akun lama
what-to-do-subhead-2 = Jika Anda menggunakan kembali sandi yang telah terekspos, ubah ia.
what-to-do-subhead-3 = Ambil langkah ekstra untuk mengamankan akun finansial Anda
what-to-do-blurb-3 =
    Kebanyakan kebocoran hanya mengekspos surel dan sandi, tetapi beberapa juga membeberkan informasi keuangan. 
    Jika nomor rekening bank atau kartu kredit Anda tersangkut dalam kebocoran, beri tahu bank Anda tentang kemungkinan kecurangan, 
    dan awasi pernyataan atas biaya yang tidak Anda kenali.
what-to-do-subhead-4 = Dapatkan bantuan membuat sandi yang baik dan menjaganya tetap aman.
what-to-do-blurb-4 =
    Pengelola sandi seperti 1Password, LastPass, Dashlane, dan Bitwarden mampu menghasilkan sandi yang kuat, 
    menyimpannya dengan aman, dan mengisikannya pada situs web untuk Anda.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Tanggal kebocoran:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Akun yang telah diketahui orang lain:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data yang telah diketahui orang lain:
confirmed = Terkonfirmasi!<br />Anda Telah Berlangganan!
unsub-headline = Berhenti berlangganan { -product-name-nowrap }
unsub-button = Berhenti Berlangganan
unsub-survey-headline = Anda telah berhenti berlangganan.
unsub-survey-form-label = Mengapa Anda berhenti berlangganan peringatan { -product-name-nowrap }?
unsub-reason-1 = Saya rasa peringatannya tidak membuat data saya semakin aman
unsub-reason-2 = Saya menerima terlalu banyak surel dari { -product-name-nowrap }
unsub-reason-5 = Saya menggunakan layanan lain untuk mengawasi akun saya
unsub-reason-6 = Bukan dari salah satu di atas
unsub-survey-thankyou = Terima kasih atas umpan balik Anda.
unsub-survey-error = Silakan pilih satu.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Bagikan
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Cuitkan
download-firefox-quantum = Unduh { -brand-Quantum }
download-firefox-mobile = Unduh { -brand-name } Seluler
# Features here refers to Firefox browser features. 
features = Fitur
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Data kebocoran tersedia oleh { $hibp-link }
