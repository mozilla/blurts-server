# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Dukungan
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Tentang Firefox Alerts
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Beri Masukan
terms-and-privacy = Ketentuan dan Privasi
error-scan-page-token = Anda telah coba memindah terlalu banyak alamat surel dalam periode singkat. Demi alasan keamanan, kami memblokir Anda sementara dari pencarian baru. Anda akan dapat mencobanya nanti kembali.
error-could-not-add-email = Tidak dapat menambahkan alamat surel ke basis data.
error-not-subscribed = Alamat surel ini tidak berlangganan { -product-name }.
error-hibp-throttled = Terlalu banyak koneksi ke { -brand-HIBP }.
error-hibp-connect = Gagal tersambung dengan { -brand-HIBP }.
error-hibp-load-breaches = Tidak dapat memuat data penerobosan.
hibp-notify-email-subject = Peringatan { -product-name }: Akun Anda telah terlibat dalam sebuah penerobosan.
home-title = { -product-name }
home-not-found = Laman tidak ditemukan.
oauth-invalid-session = Sesi tidak valid
oauth-confirmed-title = { -product-name }: Berlangganan
scan-title = { -product-name }: Hasil Pindaian
user-add-invalid-email = Surel Tidak Valid
user-add-email-verify-subject = Verifikasi langganan { -product-name } Anda.
user-add-title = { -product-name } : Konfirmasi Surel
error-headline = Masalah
user-verify-token-error = Token verifikasi diperlukan.
user-verify-email-report-subject = Laporan { -product-name } Anda
user-verify-title = { -product-name } : Berlangganan
user-unsubscribe-token-error = Token untuk berhenti berlangganan diperlukan.
user-unsubscribe-token-email-error = Token dan emailHash untuk berhenti berlangganan diperlukan.
user-unsubscribe-title = { -product-name } : Berhenti Berlangganan
user-unsubscribe-survey-title = { -product-name } : Berhenti Berlangganan Survei
user-unsubscribed-title = { -product-name } : Berhenti Berlangganan

## Password Tips

pwt-section-headline = Sandi yang Lebih Kuat = Perlindungan yang Lebih Baik
pwt-section-subhead = Informasi pribadi Anda aman seperti kata sandi Anda.
pwt-section-blurb =
    Sandi Anda melindungi lebih dari sekadar akun Anda. Sandi dapat melindungi setiap titik informasi pribadi yang ada di dalamnya. 
    Dan para peretas mengandalkan kebiasaan buruk, seperti menggunakan sandi yang sama di mana-mana atau menggunakan frasa yang biasa (p@ssw0rd, teman-teman?) 
    sehingga ketika mereka meretas satu akun, mereka bisa meretas banyak akun. Beginilah cara untuk melindungi akun Anda dengan lebih baik.
pwt-headline-1 = Gunakan kata sandi yang berbeda untuk setiap akun
pwt-summary-1 =
    Menggunakan kembali sandi yang sama di mana-mana akan membiarkan pintu yang terbuka untuk pencurian identitas. 
    Siapa pun yang memiliki sandi tersebut dapat masuk ke semua akun Anda.
pwt-headline-2 = Buat kata sandi yang kuat dan susah ditebak
pwt-summary-2 =
    Para peretas menggunakan ribuan sandi yang lazim untuk mencoba menebak sandi Anda.
    Makin panjang dan sebarang sandi Anda, makin sulit pula untuk menebaknya.
pwt-headline-3 = Perlakukan pertanyaan keamanan seperti sandi tambahan.
pwt-summary-3 =
    Situs web tidak memeriksa apakah jawaban Anda akurat; situs web hanya memeriksa kecocokannya.
    Buat jawaban yang panjang dan sebarang, lalu taruh di tempat yang aman.
pwt-headline-4 = Dapatkan bantuan mengingat sandi Anda
pwt-summary-4 =
    Pengelola sandi seperti 1Password, LastPass, Dashlane, dan Bitwarden mampu menghasilkan sandi yang kuat dan unik. 
    Pengelola sandi juga akan menyimpan sandi dengan aman dan mengisikannya pada situs web untuk kepentingan Anda
pwt-headline-5 = Tambahkan pengamanan ekstra dengan autentikasi dua faktor
pwt-summary-5 =
    Autentikasi dua faktor (ADF) memerlukan informasi tambahan lain (seperti kode sekali pakai yang dikirimkan melalui pesan teks) untuk masuk ke akun Anda. 
    Bahkan ketika seseorang telah memiliki sandi Anda, ia tidak akan dapat masuk begitu saja.
pwt-headline-6 = Daftar untuk peringatan { -product-name-nowrap }
pwt-summary-6 = Kebocoran data situs web terus meningkat. Begitu kebocoran baru telah ditambahkan ke basis data kami, { -product-name-nowrap } akan segera memberi Anda peringatan — sehingga Anda dapat mengambil tindakan dan melindungi akun Anda.
landing-headline = Hak Anda untuk aman dari para peretas dimulai dari sini.
landing-blurb = { -product-name-nowrap } mempersenjatai Anda dengan peralatan yang menjaga informasi pribadi Anda tetap aman. Cari tahu apa yang telah peretas ketahui tentang Anda, dan pelajari bagaimana supaya selalu selangkah di depan mereka.
scan-label = Periksa apakah Anda tersangkut dalam kebocoran data.
scan-placeholder = Masukkan Alamat Surel
scan-privacy = Surel Anda tidak akan disimpan.
scan-submit = Cari Surel Anda
scan-another-email = Pindai Alamat Surel Lainnya
scan-featuredbreach-label = Cari tahu apakah akun <span class="bold">{ $featuredBreach }</span> Anda telah diketahui orang lain.
sensitive-breach-email-required = Penerobosan mengandung informasi yang sensitif. Verifikasi surel dibutuhkan.
scan-error = Harus surel yang valid.
signup-banner-headline = { -product-name-nowrap } mendeteksi ancaman terhadap akun daring Anda.
signup-banner-blurb =
    Laporan { -product-name-nowrap } terperinci Anda menunjukkan apakah informasi dari akun daring Anda telah terkuak atau tercuri. 
    Kami juga akan memberi Anda peringatan jika akun Anda muncul pada kebocoran situs web yang baru.
download-firefox-bar-blurb = { -product-name-nowrap } dipersembahkan oleh <span class="nowrap">{ -brand-name } yang serba baru</span>.
download-firefox-bar-link = Unduh { -brand-name } sekarang
download-firefox-banner-blurb = Ambil alih kendali peramban Anda
download-firefox-banner-button = Unduh { -brand-name }
signup-modal-headline = Daftar untuk { -product-name-nowrap }
signup-modal-blurb = Daftar untuk laporan penuh Anda, peringatan ketika terjadi kebocoran baru, dan kiat keamanan dari { -product-name-nowrap }.
signup-modal-close = Tutup
get-your-report = Dapatkan Laporan Anda
signup-modal-verify-headline = Verifikasi langganan Anda
signup-modal-verify-blurb = Kami telah mengirimkan tautan verifikasi ke <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Tautan ini akan kedaluwarsa dalam 24 jam.
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
        [0] Akun Anda muncul dalam kebocoran <span class="bold">{ $featuredBreach }</span>, namun tidak muncul pada kebocoran data lainnya yang telah diketahui.
       *[other] Akun Anda muncul dalam kebocoran <span class="bold">{ $featuredBreach }</span>, sebagaimana { $breachCount } kebocoran lainnya.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
       *[other] Akun Anda tidak muncul di dalam pembobolan <span class="bold">{ $featuredBreach }</span>, namun muncul di { $breachCount } pembobolan lainnya.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
       *[other] Akun-akun yang diasosiasikan dengan alamat surel Anda muncul pada { $breachCount } kebocoran berikut.
    }
show-more-breaches = Tampilkan Lebih Banyak
what-to-do-headline = Apa yang Perlu Dilakukan ketika Informasi Anda Terekspos dalam Suatu Kebocoran Data
what-to-do-subhead-1 = Ubah sandi Anda, termasuk untuk akun lama
what-to-do-blurb-1 = Jika Anda tidak dapat masuk, hubungi situs web tersebut untuk menanyakan bagaimana Anda dapat memulihkan atau menutup akun tersebut. Lihat akun yang Anda tidak kenali? Mungkin saja situs telah berubah nama atau seseorang telah membuatkan akun untuk Anda.
what-to-do-subhead-2 = Jika Anda menggunakan kembali sandi yang telah terekspos, ubah ia.
what-to-do-blurb-2 =
    Peretas dapat coba menggunakan ulang kata sandi Anda yang terdedah untuk masuk ke dalam akun lainnya.
    Buat kata sandi yang berbeda untuk setiap situs web, khususnya untuk akun bank Anda,
    surel dan situs web lainnya di mana Anda menyimpan informasi pribadi.
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
confirmed-blurb = { -product-name-nowrap } akan segera mengirimkan surel beriisikan laporan lengkap, dan akan mengirimkan surel pemberitahuan jika akun Anda muncul pada kebocoran terlapor yang baru.
confirmed-social-blurb = Jika data Anda bocor, kemungkinan data teman, keluarga, atau koneksi daring Anda juga mengalaminya. Beri tahu mereka tentang { -product-name-nowrap }.
unsub-headline = Berhenti berlangganan { -product-name-nowrap }
unsub-blurb = Ini akan menghapus surel Anda dari daftar { -product-name-nowrap } dan Anda tidak akan menerima peringatan lagi ketika ada pengumuman kebocoran yang baru.
unsub-button = Berhenti Berlangganan
fxa-unsub-headline = Berhenti berlangganan dari peringatan { -product-name }.
fxa-unsub-blurb =
    Anda tidak akan lagi menerima peringatan { -product-name }.
    { -brand-fxa } Anda akan tetap aktif, dan Anda dapat menerima komunikasi
    lainnya terkait akun.
unsub-survey-form-label = Mengapa Anda berhenti berlangganan peringatan { -product-name-nowrap }?
unsub-reason-1 = Saya rasa peringatannya tidak membuat data saya semakin aman
unsub-reason-2 = Saya menerima terlalu banyak surel dari { -product-name-nowrap }
unsub-reason-3 = Saya tidak melihat kegunaan layanan ini
unsub-reason-4 = Saya telah melakukan langkah-langkah untuk mengamankan akun saya
unsub-reason-5 = Saya menggunakan layanan lain untuk mengawasi akun saya
unsub-reason-6 = Bukan dari salah satu di atas
unsub-survey-thankyou = Terima kasih atas umpan balik Anda.
unsub-survey-error = Silakan pilih satu.
unsub-survey-headline-v2 = Anda telah berhenti berlangganan.
unsub-survey-blurb-v2 =
    Anda tidak akan lagi menerima peringatan { -product-name }.
    Apakah Anda bersedia meluangkan waktu sejenak untuk menjawab satu pertanyaan tentang pengalaman Anda?
unsub-survey-button = Kirim Tanggapan
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
site-description = Pernahkah akun Anda terkuak atau tercuri dalam kebocoran data? Cari tahu di { -product-name }. Telusuri basis data kami dan daftarkan diri untuk mendapatkan peringatan.
confirmation-headline = Laporan { -product-name } Anda sedang dikirim.
confirmation-blurb = Pembobolan data dapat mengenai siapa saja. Sebarkan kabar ini sehingga teman dan keluarga Anda dapat memeriksa apakah akun daring mereka aman.
share-email = Surel
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Lainnya
share-twitter = Kebanyakan orang memiliki sekitar 100 akun daring. Apakah salah satu dari akun Anda terkena pembobolan data? Temukan segera.
share-facebook-headline = Cari tahu apakah Anda telah menjadi bagian dari pembobolan data
share-facebook-blurb = Apakah akun daring Anda sudah terpapar dalam pembobolan data?
og-site-description = Temukan apakah Anda telah menjadi bagian dari pembobolan data dengan { -product-name }. Daftarkan diri Anda untuk mendapatkan pemberitahuan tentang pembobolan di masa depan dan dapatkan kiat-kiat menjaga akun Anda tetap aman.
mozilla-security-blog = Blog Keamanan { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Media Sosial
show-all = Tampilkan Semua
fxa-landing-blurb =
    Cari tahu apa saja yang telah peretas ketahui tentang Anda,
    dan pelajari bagaimana untuk tetap selangkah di depan mereka.
fxa-scan-label = Lihat apakah Anda muncul dalam data yang telah bocor.
fxa-welcome-headline = Selamat datang di { -product-name }.
fxa-welcome-blurb = Anda siap untuk mendapatkan peringatan ketika { $userEmail } muncul dalam data yang telah bocor.
fxa-scan-another-email = Ingin memeriksa surel lainnya?
# Search Firefox Monitor
fxa-scan-submit = Cari { -product-name }
sign-up-to-check = Mendaftar untuk Memeriksa
sign-in = Masuk
sign-out = Keluar
full-report-headline = Laporan { -product-name } Anda
see-full-report = Lihat Laporan Lengkap
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Kelola { -brand-fxa }
fxa-download-firefox-bar-blurb = Dipersembahkan oleh { -brand-name }. 2x lebih cepat. Menggunakan 30% lebih sedikit memori daripada { -brand-Chrome }.
fxa-download-firefox-bar-link = Unduh sekarang
fxa-download-firefox-banner-blurb = Pemuatan laman yang lebih cepat dan lebih baik, menggunakan lebih sedikit memori komputer.
user-fb-compromised-headline = { $userEmail } muncul pada data { $breachName } yang telah bocor.
guest-fb-compromised-headline = Surel ini muncul pada data { $breachName } yang telah bocor.
user-zero-breaches-headline = { $userEmail } muncul dalam nol pelanggaran data.
guest-zero-breaches-headline = Surel ini tidak muncul pada data yang telah bocor.
user-scan-results-headline =
    { $breachCount ->
       *[other] { $userEmail } muncul pada { $breachCount } kebocoran data.
    }
guest-scan-results-headline =
    { $breachCount ->
       *[other] Surel ini muncul pada { $breachCount } kebocoran data.
    }
user-no-breaches-blurb = Kami akan mengingatkan Anda ketika jika alamat surel ini muncul dalam kebocoran yang baru.
guest-no-breaches-blurb = Untuk mengetahui apakah surel ini muncul dalam kebocoran yang sensitif, buat { -brand-fxa }. Kami juga akan mengingatkan Anda ketika alamat ini muncul dalam kebocoran data yang baru.
user-one-breach-blurb = Kebocoran ini telah membuka informasi pribadi berikut.
user-fb-compromised-blurb =
    { $breachCount ->
       *[other] Surel Anda juga muncul dalam { $breachCount } kebocoran lain.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
       *[other] Surel ini juga muncul dalam { $breachCount } kebocoran lain.
    }
user-fb-compromised-single = Kebocoran ini telah membeberkan informasi pribadi berikut. Silakan ubah sandi jika Anda belum melakukannya.
user-generic-fb-compromised-single = Kebocoran ini telah membuka informasi pribadi berikut.
guest-fb-compromised-single-v2 =
    Kebocoran ini membeberkan informasi pribadi berikut.
    Buat { -brand-fxa } gratis untuk laporan lengkap Anda tentang kebocoran-kebocoran sebelumnya, peringatan kebocoran yang baru,
    dan informasi mengenai layanan { -brand-Mozilla } yang lain.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
       *[other]
            Surel ini juga muncul dalam { $breachCount } kebocoran lainnya. Buat 
            { -brand-fxa } gratis untuk laporan lengkap Anda tentang kebocoran-kebocoran sebelumnya, peringatan kebocoran yang baru, 
            dan informasi mengenai layanan { -brand-Mozilla } yang lain.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
       *[other] Anda tidak tersangkut dalam kebocoran { $breachName }, tetapi kami menemukan surel tersebut dalam kebocoran lainnya.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
       *[other] Surel ini tidak ditemukan dalam kebocoran { $breachName }, tetapi ditemukan dalam kebocoran lain.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
       *[other]
            Surel ini tidak ditemukan dalam kebocoran { $breachName }, tetapi ditemukan dalam kebocoran lainnya. 
            Buat { -brand-fxa } gratis untuk laporan lengkap Anda tentang kebocoran-kebocoran sebelumnya, 
            peringatan kebocoran baru, dan informasi mengenai layanan { -brand-Mozilla } yang lain.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
       *[other] Kebocoran ini membeberkan informasi pribadi berikut. Silakan ubah sandi jika Anda belum melakukannya.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
       *[other] Kebocoran ini telah membuka informasi pribadi berikut.
    }
have-an-account = Sudah memiliki akun?
signup-banner-sensitive-blurb =
    Cari tahu apa yang telah peretas ketahui tentang Anda, dan pelajari bagaimana agar 
    tetap selangkah di depan mereka. Dapatkan pemberitahuan ketika akun Anda muncul 
    dalam kebocoran data yang baru.
fxa-pwt-section-blurb = Sandi melindungi seluruh informasi pribadi dalam akun daring Anda. Dan peretas mengandalkan kebiasaan buruk, seperti menggunakan sandi yang sama atau menggunakan frasa umum (@p@ssw0rd, misalnya?) di mana-mana sehingga ketika mereka berhasil meretas satu akun, mereka juga bisa meretas yang lainnya.
fxa-pwt-summary-2 =
    Sandi satu kata yang pendek akan mudah ditebak oleh peretas. 
    Gunakan minimal dua kata dan kombinasi huruf, angka, dan karakter khusus.
fxa-pwt-summary-4 =
    Pengelola sandi seperti 1Password, LastPass, Dashlane, dan Bitwarden menyimpan 
    sandi Anda dan mengisikannya pada situs web untuk Anda. Semuanya bahkan membantu Anda membuat sandi yang kuat.
fxa-pwt-summary-6 = Kebocoran data terus meningkat. Ketika informasi pribadi Anda muncul dalam kebocoran data yang baru, { -product-name } akan segera memberi Anda peringatan — sehingga Anda dapat mengambil tindakan dan melindungi akun Anda.
fxa-what-to-do-blurb-1 =
    Jika Anda tidak bisa masuk, hubungi situs web untuk menanyakan cara memperbaruinya.
    Menemukan akun yang tidak Anda kenal? Bisa saja data Anda telah dijual
    atau dibagi-bagikan. Bisa juga ini adalah akun buatan Anda yang tidak Anda ingat
    atau perusahaan yang telah berganti nama.
fxa-what-to-do-subhead-2 = Berhenti menggunakan kata sandi yang telah terbuka, dan ubah di mana saja Anda telah menggunakannya.
fxa-wtd-blurb-2 =
    Peretas dapat coba menggunakan ulang kata sandi Anda yang terdedah untuk masuk ke dalam akun lainnya.
    Buat kata sandi yang berbeda dan unik untuk setiap situs web, khususnya untuk akun bank Anda,
    surel, dan situs web lainnya yang menyimpan informasi pribadi Anda.
fxa-what-to-do-blurb-3 =
    Kebanyakan kebocoran hanya membeberkan surel dan sandi, tetapi beberapa juga mencakup informasi keuangan yang sensitif. 
    Jika rekening bank atau nomor kartu kredit Anda terekspos, beri tahu bank Anda tentang adanya kemungkinan penyalahgunaan. 
    Pantau laporan biaya yang tidak Anda kenali.
fxa-what-to-do-subhead-4 = Dapatkan bantuan untuk mengingat semua kata sandi Anda dan menjaganya tetap aman.
fxa-what-to-do-blurb-4 =
    Pengelola sandi seperti 1Password, LastPass, Dashlane, dan Bitwarden menyimpan 
    sandi dengan aman dan mengisikannya pada situs web untuk Anda. Gunakan pengelola sandi 
    pada telepon dan komputer agar Anda tak perlu lagi menghafal semuanya.
fb-landing-headline = Apakah informasi anda terpapar pada data { $breachName } yang telah bocor?
copyright = Sebagian dari konten ini adalah © 1999-{ $year } oleh kontributor individu mozilla.org.
content-available = Konten tersedia di bawah lisensi Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Mendaftar untuk Alerts
sign-up-for-fxa-alerts = Mendaftar untuk peringatan { -product-name }.
create-free-account =
    Buat { -brand-fxa } gratis untuk laporan lengkap Anda tentang kebocoran di masa lalu, kebocoran baru
    peringatan, dan info tentang layanan { -brand-Mozilla } lainnya.
get-your-report-and-sign-up = Dapatkan laporan Anda dan mendaftar untuk mendapatkan peringatan
# Link title
frequently-asked-questions = Pertanyaan yang Sering Diajukan (FAQ)
about-firefox-monitor = Tentang { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Pengaturan
# Link title.
home = Beranda
# Link title
breaches = Pelanggaran
# Link title
security-tips = Tips Keamanan
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Buka navigasi { -brand-fxa }

## What to do after data breach tips


## Updated error messages

