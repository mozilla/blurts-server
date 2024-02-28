# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Anda telah coba memindah terlalu banyak alamat surel dalam periode singkat. Demi alasan keamanan, kami memblokir Anda sementara dari pencarian baru. Anda akan dapat mencobanya nanti kembali.
error-could-not-add-email = Tidak dapat menambahkan alamat surel ke basis data.
error-not-subscribed = Alamat surel ini tidak berlangganan { -product-name }.
error-hibp-throttled = Terlalu banyak koneksi ke { -brand-HIBP }.
error-hibp-connect = Gagal tersambung dengan { -brand-HIBP }.
error-hibp-load-breaches = Tidak dapat memuat data pembobolan.
error-must-be-signed-in = Anda harus masuk dengan { -brand-fxa } Anda.
error-to-finish-verifying = Untuk menyelesaikan verifikasi surel ini untuk { -product-name }, Anda harus masuk menggunakan surel akun utama Anda.
home-title = { -product-name }
home-not-found = Laman tidak ditemukan.
oauth-invalid-session = Sesi tidak valid
scan-title = { -product-name }: Hasil Pindaian
user-add-invalid-email = Surel Tidak Valid
user-add-too-many-emails = Anda memantau alamat email dengan jumlah maksimum.
user-add-email-verify-subject = Verifikasi langganan { -product-name } Anda.
user-add-duplicate-email = Surel ini telah ditambahkan ke { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Kunjungi { $preferencesLink } Anda untuk memeriksa status { $userEmail }.
user-add-verification-email-just-sent = Surel verifikasi lainnya tidak dapat dikirim secepat ini. Silakan coba lagi nanti.
user-add-unknown-error = Terjadi kesalahan saat menambahkan alamat surel lainnya. Silakan coba lagi nanti.
user-delete-unknown-error = Terjadi kesalahan saat menghapus alamat surel. Silakan coba lagi nanti.
error-headline = Masalah
user-verify-token-error = Token verifikasi diperlukan.
user-verify-email-report-subject = Laporan { -product-name } Anda
user-unsubscribe-token-error = Token untuk berhenti berlangganan diperlukan.
user-unsubscribe-token-email-error = Token dan emailHash untuk berhenti berlangganan diperlukan.
user-unsubscribe-title = { -product-name } : Berhenti Berlangganan
pwt-section-headline = Sandi yang Lebih Kuat = Perlindungan yang Lebih Baik
landing-headline = Hak Anda untuk aman dari para peretas dimulai dari sini.
scan-placeholder = Masukkan Alamat Surel
scan-submit = Cari Surel Anda
scan-error = Harus surel yang valid.
download-firefox-banner-button = Unduh { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Terkirim!
sign-up = Daftar
form-signup-error = Harus surel yang valid
# breach-date = the calendar date a particular data theft occurred.
breach-date = Tanggal kebocoran:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Akun yang telah diketahui orang lain:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data yang telah diketahui orang lain:
unsub-headline = Berhenti berlangganan { -product-name-nowrap }
unsub-blurb = Ini akan menghapus surel Anda dari daftar { -product-name-nowrap } dan Anda tidak akan menerima peringatan lagi ketika ada pengumuman kebocoran yang baru.
unsub-button = Berhenti Berlangganan
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Data kebocoran disediakan oleh { $hibp-link }
share-twitter = Kebanyakan orang memiliki sekitar 100 akun daring. Apakah salah satu dari akun Anda terkena pembobolan data? Temukan segera.
share-facebook-headline = Cari tahu apakah Anda telah menjadi bagian dari pembobolan data
share-facebook-blurb = Apakah akun daring Anda sudah terpapar dalam pembobolan data?
og-site-description = Temukan apakah Anda telah menjadi bagian dari pembobolan data dengan { -product-name }. Daftarkan diri Anda untuk mendapatkan pemberitahuan tentang pembobolan di masa depan dan dapatkan kiat-kiat menjaga akun Anda tetap aman.
show-all = Tampilkan Semua
fxa-scan-another-email = Ingin memeriksa surel lainnya?
sign-out = Keluar
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Kelola { -brand-fxa }
have-an-account = Sudah memiliki akun?
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
# Alerts is a noun
sign-up-for-alerts = Mendaftar untuk Alerts
# Link title
frequently-asked-questions = Pertanyaan yang Sering Diajukan (FAQ)
about-firefox-monitor = Tentang { -product-name }
# Link title
preferences = Pengaturan
# Link title
home = Beranda
# Link title
security-tips = Tips Keamanan
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Buka navigasi { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = KEBOCORAN TERBARU TELAH DITAMBAHKAN
# Link title
more-about-this-breach = Lebih lanjut tentang pembobolan ini
take-control = Ambil alih kendali data pribadi Anda.
cant-stop-hackers = Anda tidak dapat menghentikan peretas dari peretasan. Tetapi Anda dapat menghindari kebiasaan buruk yang membuat pekerjaan mereka menjadi mudah.
read-more-tips = Baca Lebih Lanjut Tips Keamanan
how-hackers-work = Memahami bagaimana para peretas bekerja
monitor-your-online-accounts = Daftar untuk memantau pelanggaran data dengan { -brand-fxa }.
stay-alert = Tetap waspada terhadap pembobolan baru
if-your-info = Jika informasi Anda muncul dalam pembobolan data baru, kami akan mengirimkan peringatan kepada Anda.
search-all-emails = Cari semua alamat surel Anda untuk pembobolan dan dapatkan peringatan tentang ancaman terbaru.
monitor-several-emails = Pantau beberapa surel
take-action = Ambil tindakan untuk melindungi akun Anda
keep-your-data-safe = Cari tahu apa yang perlu Anda lakukan untuk menjaga data Anda aman dari penjahat siber.
website-breach = Pembobolan Situs Web
sensitive-breach = Pembobolan Situs Web Sensitif
data-aggregator-breach = Pembobolan Agregator Data
unverified-breach = Pembobolan Tidak Terverifikasi
spam-list-breach = Daftar Spam Pembobolan
website-breach-plural = Pembobolan Situs Web
sensitive-breach-plural = Pembobolan Sensitif
data-aggregator-breach-plural = Pembobolan Agregator Data
unverified-breach-plural = Pembobolan Belum Terverifikasi
spam-list-breach-plural = Pembobolan Data Spam
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
about-fxm-headline = Tentang { -product-name }
about-fxm-blurb =
    { -product-name } memperingatkan jika akun daring Anda tersangkut dalam
    kebocoran data. Cari tahu apakah Anda pernah tersangkut dalam kebocoran data, dapatkan peringatan tentang pembobolan terkini,
    dan mengambil langkah-langkah untuk melindungi akun online Anda. { -product-name } disediakan
    oleh { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } memperingatkan Anda jika alamat surel Anda telah terungkap
    dalam kebocoran data daring. Lihat apakah informasi Anda telah terungkap, pelajari cara
    untuk melindungi akun daring Anda lebih baik, dan dapatkan pemberitahuan jika alamat surel Anda
    muncul dalam pembobolan baru.
# How Firefox Monitor works
how-fxm-works = Bagaimana { -product-name } bekerja
how-fxm-1-headline = Lakukan pencarian dasar
how-fxm-1-blurb =
    Cari alamat email Anda saat terjadi kebocoran data publik terjadi
    sejak 2007. Pencarian dasar ini akan memunculkan sebagian besar kebocoran data, tetapi tidak
    termasuk kebocoran yang berisi informasi pribadi yang sensitif.
how-fxm-2-headline = Mendaftar untuk pemantauan pembobolan
how-fxm-2-blurb =
    Buat { -brand-fxa } untuk memantau surel Anda jika ada pembobolan.
    Setelah memverifikasi email Anda, Anda juga akan menerima laporan lengkap tentang pembobolan di masa lalu,
    termasuk kebocoran sensitif.
how-fxm-3-headline = Dapatkan notifikasi di peramban Anda
how-fxm-3-blurb =
    Jika Anda menggunakan { -brand-name }, Anda akan menerima pemberitahuan jika Anda mengunjungi
    situs yang telah dibobol. Cari tahu segera apakah Anda tersangkut dalam pembobolan tersebut
    dan apa yang dapat Anda lakukan.
wtd-after-website = Apa yang harus dilakukan setelah pembobolan situs web
wtd-after-data-agg = Apa yang harus dilakukan setelah pembobolan agregator data
what-is-data-agg = Apa itu agregator data?
what-is-data-agg-blurb =
    Pengumpul data, atau pialang data, mengumpulkan informasi dari rekaman
    publik dan membelinya dari perusahaan lain. Mereka mengkompilasi data ini untuk menjualnya kepada perusahaan
    untuk tujuan pemasaran. Korban pembobolan ini kecil kemungkinannya mengalami penipuan
    finansial, tetapi peretas dapat menggunakan data ini untuk menyamar atau membuat profil mereka.
protect-your-privacy = Lindungi privasi daring Anda
no-pw-to-change = Tidak seperti pembobolan situs web, tidak ada kata sandi untuk diubah.
avoid-personal-info = Hindari penggunaan informasi pribadi dalam kata sandi
avoid-personal-info-blurb = Sangat mudah untuk menemukan tanggal lahir, alamat, dan nama anggota keluarga secara daring. Jauhkan kata-kata ini dari kata sandi Anda.

## What to do after data breach tips

change-pw = Ubah kata sandi Anda
change-pw-site = Ubah kata sandi untuk situs ini
even-for-old = Bahkan untuk akun lama, adalah penting untuk memperbarui kata sandi Anda.
make-new-pw-unique = Buat kata sandi baru yang berbeda dan unik
strength-of-your-pw = Kekuatan kombinasi kata sandi Anda secara langsung berdampak pada keamanan daring Anda.
create-strong-passwords = Cara membuat kata sandi yang kuat
stop-reusing-pw = Berhenti menggunakan kembali kata sandi yang sama
create-unique-pw = Buat kata sandi unik dan simpan di tempat yang aman, seperti pengelola kata sandi.
five-myths = 5 mitos tentang pengelola kata sandi
create-a-fxa = Buat { -brand-fxa } untuk laporan lengkap pembobolan dan sekaligus mendapatkan peringatan.
feat-security-tips = Tips keamanan untuk melindungi akun Anda
feat-sensitive = Pencarian lanjutan dalam pembobolan sensitif
feat-enroll-multiple = Daftarkan beberapa surel dalam pemantauan kebocoran
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
       *[other] Muncul dalam { $breachCount } pembobolan yang diketahui.
    }
check-for-breaches = Periksa Pelanggaran Data
find-out-what-hackers-know = Cari tahu apa yang sudah diketahui peretas tentang Anda. Pelajari cara agar selalu selangkah lebih depan dari mereka.
get-email-alerts = Tetap aman: Dapatkan lansiran surel saat info Anda muncul dalam pelanggaran yang diketahui
search-for-your-email = Cari alamat surel Anda yang tersangkut kebocoran data publik sejak 2007.
back-to-top = Kembali ke Atas
comm-opt-0 = Kirim saya surel jika salah satu alamat surel saya di bawah ini tersangkut dalam kebocoran data.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Kirim semua peringatan kebocoran ke { $primaryEmail }.
stop-monitoring-this = Hentikan pemantauan surel ini.
resend-verification = Kirim ulang verifikasi surel
add-new-email = Tambah alamat surel baru
send-verification = Kirim Tautan Verifikasi
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Ringkasan Pembobolan
show-breaches-for-this-email = Tampilkan semua pembobolan untuk surel ini.
link-change-primary = Ubah Alamat Surel Utama
remove-fxm = Hapus { -product-name }
remove-fxm-blurb =
    Matikan peringatan { -product-name }. { -brand-fxa } Anda akan tetap aktif, dan Anda mungkin menerima
    komunikasi terkait akun lainnya.
# Button title
manage-email-addresses = Kelola Alamat Surel
# Link title
latest-breach-link = Lihat apakah Anda tersangkut dalam pembobolan ini.

## Variables:
##   $userName (String) - Username

welcome-back = Selamat datang kembali, { $userName }!
welcome-user = Selamat datang, { $userName }!

##

breach-alert-subject = { -product-name } menemukan surel Anda dalam kebocoran data terkini.
your-info-was-discovered-headline = Informasi Anda ditemukan dalam kebocoran data terkini.
your-info-was-discovered-blurb =
    Anda mendaftarkan diri untuk menerima peringatan { -product-name }
    ketika surel Anda muncul dalam kebocoran data. Inilah yang kami ketahui tentang pembobolan ini.
what-to-do-after-breach = Apa yang harus dilakukan setelah tersangkut kebocoran data:
ba-next-step-1 = Ubah kata sandi Anda menjadi kata sandi yang kuat dan unik.
ba-next-step-blurb-1 =
    Kata sandi yang kuat menggunakan kombinasi huruf besar dan kecil,
    karakter khusus, dan angka. Kata sandi pun tidak mengandung info pribadi seperti
    alamat, tanggal lahir, atau nama keluarga Anda.
ba-next-step-2 = Hentikan penggunaan kata sandi yang terungkap sepenuhnya.
ba-next-step-blurb-2 =
    Penjahat siber dapat menemukan kata sandi Anda di web gelap dan menggunakannya
    masuk ke akun Anda yang lain. Cara terbaik untuk melindungi akun Anda
    adalah dengan menggunakan kata sandi unik untuk masing-masing akun.
ba-next-step-3 = Dapatkan bantuan untuk membuat kata sandi yang lebih baik dan menjaganya tetap aman.
ba-next-step-blurb-3 = Gunakan pengelola kata sandi untuk membuat kata sandi yang kuat dan unik. Pengelola kata sandi menyimpan semua info masuk Anda dengan aman agar dapat diakses di semua perangkat Anda.
faq1 = Saya tidak mengenali perusahaan atau situs web ini. Mengapa saya tersangkut pembobolan ini?
faq2 = Mengapa butuh waktu lama untuk memberi tahu saya tentang pembobolan ini?
faq3 = Bagaimana saya tahu ini adalah surel yang sah dari { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
       *[other] { $breachCount } PEMBOBOLAN BARU DITEMUKAN
    }
sign-up-headline-1 = Dapatkan peringatan berkelanjutan dengan { -brand-fxa }.
account-not-required = Peramban { -brand-name } tidak dibutuhkan untuk sebuah { -brand-fxa }. Anda dapat menerima info tentang layanan { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Apakah informasi Anda terungkap dalam kebocoran data { $breachName }?
fb-not-comp = Surel ini tidak muncul dalam pembobolan { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
       *[other] Namun, itu muncul dalam { $breachCount } pembobolan lainnya yang diketahui.
    }
fb-comp-only = Surel ini muncul di pembobolan { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
       *[other] Surel ini muncul di { $breachCount } kebocoran data yang diketahui, termasuk { $breachName }.
    }

##

no-other-breaches-found = Tidak ada pembobolan lain yang ditemukan dari pencarian dasar.
no-results-blurb = Maaf, kebocoran tersebut tidak ada dalam basis data kami.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Email Anda tidak muncul dalam kebocoran ini,
    tetapi nomor telepon Anda mungkin masih rentan.</span> Beberapa akun
    dikompromikan dalam kebocoran Facebook termasuk nomor telepon dan lainnya
    informasi pribadi tetapi bukan alamat surel. Jika Anda pernah mendaftar
    untuk akun Facebook — bahkan jika Anda tidak menggunakannya sekarang — kami sarankan Anda
    ambil langkah-langkah ini untuk melindungi diri Anda sendiri
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Setel informasi Anda ke “Hanya saya” atau pengaturan non-publik lainnya di <a>profil Facebook Anda</a>.</span>
facebook-breach-what-to-do-1-copy =
    Selama kebocoran ini, peretas mengambil profil
    informasi yang ditetapkan sebagai “terbuka untuk umum” atau “dibagikan dengan teman.”
    Informasi ini dapat digabungkan dengan data lain untuk mengakses lebih banyak lagi
    informasi pribadi dan akun Anda.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Ubah sandi, PIN, atau kredensial keamanan lainnya di <a>ponsel Anda
    akun operator telepon</a> untuk mencegah pertukaran SIM</span>.
facebook-breach-what-to-do-2-copy =
    Pertukaran SIM, yang juga disebut pembajakan SIM,
    adalah saat peretas menggunakan nomor telepon, tanggal lahir, dan data lainnya untuk mengambil alih
    nomor ponsel seseorang dan kemudian meretas ke surel, media sosial, dan bahkan akun keuangan mereka.
facebook-breach-what-to-do-3 = Lihat semua rekomendasi di laman kebocoran Facebook kami
# "Appears in-page as: Showing: All Breaches"
currently-showing = Menampilkan:

## Updated error messages

error-bot-headline = Pencarian sementara ditangguhkan
error-bot-blurb =
    Kami khawatir Anda mungkin menjadi bot karena Anda mencari
    beberapa alamat surel dalam waktu singkat. Untuk saat ini, Anda diblokir
    dari pencarian baru. Anda bisa mencobanya lagi nanti.
error-csrf-headline = Sesi habis
error-csrf-blurb = Pilih tombol kembali pada peramban Anda, muat ulang laman, dan coba lagi.
error-invalid-unsub = Cara berhenti berlangganan dari peringatan { -product-name }
error-invalid-unsub-blurb =
    Anda harus berhenti berlangganan dari salah satu dari
    surel { -product-name } yang mengirimi Anda. Periksa kotak masuk Anda untuk pesan dari
    { -brand-team-email }. Pilih tautan berhenti berlangganan di bagian bawah surel.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
       *[other] Alamat surel sedang dipantau
    }
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
# Button
see-additional-breaches = Lihat Pembobolan Tambahan
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
       *[other] Surel ini muncul di { $breachCount } kebocoran data yang diketahui.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Hasil untuk: { $userEmail }
other-monitored-emails = Surel Terpantau Lainnya
email-verification-required = Verifikasi Surel Diperlukan
fxa-primary-email = Surel Utama { -brand-fxa }
what-is-a-website-breach = Apa itu pembobolan situs web?
website-breach-blurb = Kebocoran data situs web terjadi ketika penjahat siber mencuri, menyalin, atau mengungkap informasi pribadi dari akun daring. Biasanya ini merupakan hasil peretas yang menemukan titik lemah dalam keamanan situs web. Pembobolan juga dapat terjadi ketika informasi akun bocor secara tidak sengaja.
security-tips-headline = Kiat keamanan untuk melindungi diri Anda dari peretas
steps-to-protect = Langkah-langkah yang harus diambil untuk melindungi identitas daring Anda
take-further-steps = Ambil langkah lebih lanjut untuk melindungi identitas Anda
alert-about-new-breaches = Beritahu saya tentang pembobolan baru
see-if-youve-been-part = Lihat apakah Anda telah tersangkut kebocoran data online.
get-ongoing-breach-monitoring = Dapatkan pemantauan yang sedang berlangsung atas kebocoran untuk beberapa alamat surel.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Temukan
new-unsub-error = Anda harus berhenti berlangganan dari salah satu surel { -product-name } yang dikirim.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
       *[other] Namun, itu muncul dalam { $breachCount } pembobolan lainnya yang diketahui.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informasi tambahan, termasuk:
# Title
email-addresses-title = Alamat Surel
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Ringkasan
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Pada { $breachDate }, { $breachTitle } mengalami pembobolan. Setelah pembobolan ditemukan dan diverifikasi, maka informasi ini ditambahkan ke basis data kami pada { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Pengaturan { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Masuk sebagai: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Saring berdasarkan Kategori:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Kirim peringatan kebocoran ke alamat surel terkait
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Ada cara untuk melindungi privasi Anda. Bergabunglah dengan { -brand-name }.
# Link title
learn-more-link = Pelajari lebih lanjut.
email-sent = Surel Terkirim!
# Form title
want-to-add = Ingin tambahkan alamat surel lainnya?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifikasi tautan terkirim ke { $userEmail } untuk menambahkannya ke { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Surel Telah Sukses Diverifikasi!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Kami akan memberitahu Anda jika { $email } muncul dalam pelanggaran data.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Untuk melihat dan mengelola semua surel yang Anda daftarkan untuk pemantauan pelanggaran, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = masuk

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Kelola semua alamat surel di { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Notifikasi Pemberitahuan Pembobolan
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Pembobolan ditambahkan pada:
how-hackers-work-desc = Lindungi kata sandi Anda dari penjahat dunia maya, karena itulah yang paling mereka pedulikan.
what-to-do-after-breach-desc = Kunci akun Anda untuk menjaga informasi Anda dari tangan yang salah.
create-strong-passwords-desc = Buat kata sandi Anda kuat, aman, dan sulit ditebak.
steps-to-protect-desc = Pahami ancaman yang paling umum dan ketahui apa yang harus diwaspadai.
five-myths-desc = Pelajari cara menghindari kebiasaan kata sandi buruk yang membuat peretas bekerja dengan mudah.
take-further-steps-desc = Cari tahu cara mengurangi risiko pencurian identitas untuk mencegah kerugian finansial.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Perubahan disimpan!
# Section headline
rec-section-headline = Apa yang harus dilakukan untuk pelanggaran ini
rec-section-subhead = Kami menyarankan Anda mengambil langkah-langkah ini untuk menjaga informasi pribadi Anda aman dan melindungi identitas digital Anda.
# Section headline
rec-section-headline-no-pw = Apa yang harus dilakukan untuk melindungi informasi pribadi Anda
rec-section-subhead-no-pw = Meskipun kata sandi tidak terbongkar dalam pelanggaran ini, masih ada langkah-langkah yang dapat Anda ambil untuk melindungi informasi pribadi Anda dengan lebih baik.
# Button
see-additional-recs = Lihat Rekomendasi Tambahan

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } muncul dalam pelanggaran ini. <a>Apa yang harus dilakukan selanjutnya</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } dari alamat surel Anda muncul dalam pelanggaran ini. <a>Apa yang harus dilakukan selanjutnya</a>
    }

##

marking-this-subhead = Tandai pelanggaran ini sebagai teratasi
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Setelah Anda mengambil langkah-langkah yang Anda bisa untuk mengatasi pelanggaran ini</span>,
    Anda dapat menandainya sebagai teratasi. Anda masih dapat mengakses rincian pelanggaran tersebut
    dari dasbor Anda kapan saja.
mark-as-resolve-button = Tandai sebagai Teratasi
marked-as-resolved-label = Telah ditandai sebagai Teratasi
undo-button = Urungkan
confirmation-1-subhead = Bagus! Anda baru saja mengatasi pelanggaran pertama Anda.
confirmation-1-body = Pertahankan momentumnya. Periksa dasbor Anda untuk melihat apakah ada lagi yang harus dilakukan.
confirmation-2-subhead = Terima itu, peretas!
confirmation-2-body = Anda mengambil langkah-langkah penting untuk melindungi akun daring Anda.
confirmation-3-subhead = Satu lagi jatuh. Kerja bagus!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Apakah kata sandi baru Anda unik, kuat, dan sulit ditebak? <a>Cari tahu</a>
generic-confirmation-subhead = Pelanggaran ini telah ditandai sebagai teratasi
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
       *[other] Untuk melihat semua pelanggaran yang tersisa, buka dasbor Anda.
    }
return-to-breach-details-link = Kembali ke rincian pelanggaran
go-to-dashboard-link = Buka Dasbor
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% selesai
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
       *[other] { $numResolvedBreaches } Teratasi
    }
progress-intro-subhead = Baru di { -product-name }: Tandai pelanggaran sebagai teratasi
progress-intro-message =
    Setelah meninjau rincian pelanggaran dan mengambil langkah untuk melindungi
    info pribadi Anda, Anda dapat menandai pelanggaran sebagai teratasi.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
       *[other] { $numResolvedBreaches } dari { $numTotalBreaches } pelanggaran ditandai sebagai teratasi
    }
progress-complete = Semua pelanggaran yang diketahui telah ditandai sebagai teratasi

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Anda memulai awal yang bagus!</span> Periksa pelanggaran yang tersisa untuk pelajari
    langkah apa yang harus diambil.
progress-message-2 =
    <span>Pertahankan!</span> Perubahan kecil seperti memperbarui kata sandi berdampak besar
    menjaga keamanan informasi pribadi Anda.
progress-message-3 = <span>Kerja bagus untuk menyelesaikan pelanggaran itu!</span> Teruskan. Anda masih punya beberapa buah lagi.
progress-message-4 = <span>Hampir selesai!</span> Anda sudah dekat dengan garis akhir.
progress-complete-message =
    <span>Menyenangkan bukan?</span> Jika Anda ingin melanjutkan, ini saat yang tepat untuk
    memutakhirkan info masuk lainnya dengan kata sandi yang lebih kuat.

##

resolve-this-breach-link = Atasi pelanggaran ini
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Tandai telah diatasi:
hide-resolved-button = Sembunyikan yang Teratasi
show-resolved-button = Tampilkan yang Teratasi
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
       *[other] Kata sandi terbongkar dalam pelanggaran yang belum teratasi
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
       *[other] Pelanggaran data yang dikenal ditandai sebagai teratasi
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Baru
mobile-promo-headline = Bawa { -brand-name } ke ponsel dan tablet Anda
mobile-promo-body = Penjelajahan yang cepat, pribadi, dan aman ke mana pun Anda pergi. Temukan { -brand-name } di Google Play dan App Store.
mobile-promo-cta = Dapatkan { -brand-name } di Android dan iOS
promo-lockwise-headline = Bawa kata sandi Anda ke mana saja
lockwise-promo-body = Pantau info masuk Anda di semua perangkat. Akses dengan aman dari komputer, ponsel, atau tablet Anda.
promo-lockwise-cta = Dapatkan { -brand-lockwise }
fpn-promo-headline = Tutupi lokasi Anda dari situs web dan pelacak
promo-fpn-body = { -brand-fpn } membuang situs web dan pengumpul data yang menggunakan iklan untuk memprofil Anda dengan menutupi alamat IP asli Anda.
promo-fpn-cta = Dapatkan { -brand-fpn }
monitor-promo-headline = Cari tahu tentang pelanggaran data baru
monitor-promo-body = Dapatkan pemberitahuan ketika informasi pribadi Anda terungkap dalam pelanggaran yang diketahui.
ecosystem-promo-headline = Lindungi kehidupan daring Anda dengan produk yang mengutamakan privasi
ecosystem-promo-body = Semua produk { -brand-name } menghormati Janji Data Pribadi kami: Ambil lebih sedikit. Jaga agar tetap aman. Tidak ada rahasia.
promo-ecosystem-cta = Lihat Semua Produk
steps-to-resolve-headline = Langkah-langkah untuk mengatasi pelanggaran ini
vpn-promo-headline = Sekaranglah waktunya untuk meningkatkan keamanan Anda saat daring.
vpn-promo-copy = Jaringan Pribadi Virtual (VPN) { -brand-Mozilla } membantu melindungi koneksi internet Anda dari peretas dan mata-mata.
vpn-promo-cta = Dapatkan { -brand-mozilla-vpn }
vpn-promo-headline-new = Hemat 50% dengan berlangganan setahun penuh
vpn-promo-copy-new = Lindungi data daring Anda—dan pilih paket langganan VPN yang sesuai untuk Anda.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Lokasi Anda: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Lindungi diri Anda</em> dengan { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Dilindungi</em> dengan { -brand-mozilla-vpn }.
vpn-banner-title-1 = Anda terlindungi — terima kasih telah menggunakan { -brand-mozilla-vpn }.
vpn-banner-title-2 = Lokasi Anda dapat dilacak jika tidak menggunakan VPN.
vpn-banner-subtitle-2 = Lindungi lokasi Anda dan jelajahi dengan aman dalam 3 langkah
vpn-banner-status-protected = Status saat ini: <em>Dilindungi </em>
vpn-banner-status-not-protected = Status saat ini: <em>Tidak dilindungi </em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Alamat IP: { $ip-address }
vpn-banner-step-1 = Berlangganan { -brand-mozilla-vpn }
vpn-banner-step-2 = Pilih lokasi VPN
vpn-banner-step-3 = Aktifkan VPN dan jelajahi dengan aman
vpn-banner-cta = Dapatkan { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Bentangkan
# button to close panel
vpn-banner-cta-close = Tutup

## Relay and VPN educational/ad units

ad-unit-relay-cta = Pelajari lebih lanjut tentang { -brand-relay }
ad-unit-vpn-cta = Pelajari lebih lanjut tentang { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Bagaimana Anda merahasiakan alamat surel Anda?
# ad 2 heading
ad-unit-2-do-you-worry = Apakah Anda khawatir tentang keamanan di Wi-Fi publik?
# ad 3 heading
ad-unit-3-stay-in-the-game = Tetap dalam permainan!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } memungkinkan Anda menjaga koneksi yang stabil dan aman saat bermain game atau streaming film.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Cegah pelambatan
# ad 3 list item 3
ad-unit-3-access-more = Akses lebih banyak
# ad 4 heading
ad-unit-4-shopping-with = Berbelanja dengan Topeng Surel
ad-unit-4-want-to-buy = Ingin membeli sesuatu secara daring dan tidak tahu atau tidak percaya sepenuhnya dengan tokonya?
ad-unit-4-shop-online = Gunakan topeng surel kapan saat Anda berbelanja daring. Dapatkan pesan konfirmasi dikirim ke surel Anda yang sebenarnya dan kemudian matikan topeng kapan saja suatu saat.
# ad 5 heading
ad-unit-5-on-the-go = Di mana saja bersama { -brand-relay }
ad-unit-5-instantly-make = Langsung buat topeng surel khusus di mana saja dan ke mana pun saat bepergian!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Sambungkan di mana saja
ad-unit-5-privately-sign-in = Gunakan topeng surel saat Anda ingin masuk secara pribadi ke kedai kopi favorit atau Wi-Fi publik
# ad 5 subheading 2
ad-unit-5-email-receipts = Dapatkan tanda terima surel
ad-unit-5-share-custom-email = Bagikan topeng surel kustom untuk mendapatkan kuitansi belanja tanpa perlu membagikan surel asli Anda
# ad 5 subheading 3
ad-unit-5-use-on-phone = Gunakan di ponsel Anda
ad-unit-5-no-matter-where = Di mana pun Anda berada, buat topeng surel khusus dalam sekejap untuk semua yang ingin Anda lakukan
# ad 6 heading
ad-unit-6-worry-free = Pendaftaran Tanpa Perlu Khawatir
ad-unit-6-want-to-start = Ingin memulai langganan baru, membalas undangan, atau mendapatkan kode promo diskon tanpa spam membanjiri kotak masuk Anda?
ad-unit-6-before-you-complete = Sebelum menyelesaikan pendaftaran berikutnya, gunakan topeng surel alih-alih surel asli Anda untuk melindungi info Anda dan tetap mengendalikan kotak masuk Anda

# Monitor V2


## The following messages are brands and should be kept entirely in English

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

site-nav-breaches-link = Atasi Pembobolan Data
site-nav-settings-link = Pengaturan
site-nav-help-link = Bantuan dan Dukungan
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Coba alat keamanan kami lainnya:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Menu utama
main-nav-button-collapse-label = Ciutkan menu
main-nav-button-collapse-tooltip = Ciutkan menu
main-nav-button-expand-label = Bentangkan menu
main-nav-button-expand-tooltip = Bentangkan menu
main-nav-label = Navigasi
main-nav-link-home-label = Beranda
main-nav-link-dashboard-label = Dasbor
main-nav-link-settings-label = Pengaturan
main-nav-link-faq-label = T&amp;J
main-nav-link-faq-tooltip = Tanya-Jawab

## User menu

# Obsolete
menu-button-title = Menu pengguna
# Obsolete
menu-button-alt = Buka menu pengguna
# Obsolete
menu-list-accessible-label = Menu akun
# Obsolete
menu-item-fxa-2 = Kelola { -brand-mozilla-account } Anda
# Obsolete
menu-item-settings = Pengaturan
# Obsolete
menu-item-help = Bantuan dan dukungan
# Obsolete
menu-item-logout = Keluar
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

mozilla = { -brand-Mozilla }
terms-of-service = Ketentuan Layanan
privacy-notice = Kebijakan Privasi
github = { -brand-github }
footer-nav-all-breaches = Semua Pembobolan
footer-external-link-faq-label = T&amp;J
footer-external-link-faq-tooltip = Tanya-Jawab

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Laman tidak ditemukan
error-page-error-404-copy = Maaf, laman yang Anda cari sudah tidak ada lagi.
error-page-error-404-cta-button = Kembali
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Ada yang tidak beres
error-page-error-other-copy = Coba lagi atau kembali lagi nanti

## Breach overview page

all-breaches-headline-2 = Semua pembobolan yang terdeteksi oleh { -brand-fx-monitor }
all-breaches-lead = Kami memantau semua pembobolan data yang diketahui untuk mengetahui apakah informasi pribadi Anda telah disusupi. Berikut daftar lengkap semua pembobolan yang telah dilaporkan sejak 2007.
search-breaches = Cari Pembobolan
# the kind of user data exposed to hackers in data breach.
exposed-data = Data terungkap:

## Public breach detail page

find-out-if-2 = Cari tahu apakah Anda terlibat dalam pembobolan ini
find-out-if-description = Kami akan membantu untuk dengan cepat melihat apakah alamat surel Anda terungkap dalam pembobolan ini, dan memahami apa yang harus dilakukan selanjutnya.
breach-detail-cta-signup = Periksa pembobolan data

## Floating banner

floating-banner-text = Tingkatkan keamanan daring Anda dengan berita, kiat, dan pembaruan dari { -brand-Mozilla }.
floating-banner-link-label = Daftar
floating-banner-dismiss-button-label = Tidak, terima kasih

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nama baru, tampilan, dan lebih banyak cara untuk <b>mendapatkan kembali privasi Anda</b>.
banner-monitor-rebrand-dismiss-button-label = Oke
banner-monitor-rebrand-dismiss-button-tooltip = Tutup
loading-accessibility = Memuat
