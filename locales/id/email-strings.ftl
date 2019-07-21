# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Pilih tombol Verifikasi Surel Saya dalam 24 jam untuk mengonfirmasi akun Firefox Monitor Anda. 
    Laporan Anda akan segera tiba.
verify-my-email = Verifikasi Surel Saya
report-scan-another-email = Pindai Surel Lainnya pada { -product-name }
automated-message = Ini adalah surel otomatis; Jika Anda menerimanya karena kesalahan, tidak ada yang perlu dilakukan.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Kami mengirim pesan ini ke { $userEmail } karena alamat surel tersebut mendaftar untuk mendapat pemberitahuan dari { -product-name }.
unsubscribe-email-link = Jika Anda tidak ingin menerima pemberitahuan { -product-name }, berhenti berlangganan.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Laporan { -product-name }
report-date = Tanggal Laporan:
email-address = Alamat Surel:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Yang Selanjutnya Perlu Dilakukan
report-headline =
    { $breachCount ->
        [0] Sejauh ini baik-baik saja.
       *[other] Akun Anda muncul dalam { $breachCount } kebocoran.
    }
report-subhead-no-breaches =
    Akun Anda tidak muncul di dalam laporan lengkap kebocoran kami.
    Ini adalah kabar baik, namun ada banyak hal yang Anda dapat lakukan.
    Kebocoran data dapat terjadi kapan saja, maka simak dan pelajari bagaimana Anda dapat melindungi kata sandi Anda.
report-subhead-found-breaches = Berikut adalah laporan lengkap Firefox Monitor Anda, yang mencakup seluruh kebocoran data yang diketahui memuat alamat surel ini.
report-pwt-blurb =
    Sandi begitu berarti, hingga ribuan darinya dicuri setiap hari dan diperjualbelikan di pasar gelap.
    Sandi yang lebih kuat akan melindungi akun Anda dan seluruh informasi pribadi yang ada di dalamnya.
report-pwt-headline-1 = Gunakan sandi yang berbeda untuk setiap akun
report-pwt-summary-1 =
    Menggunakan kembali sandi yang sama di mana-mana akan membuka pintu bagi para peretas.
    Mereka dapat menggunakan sandi itu untuk masuk ke akun Anda yang lain.
report-pwt-headline-2 = Buat sandi yang kuat dan unik
report-pwt-summary-2 =
    Para peretas menggunakan daftar sandi yang umum untuk mencoba menebak sandi Anda.
    Makin panjang dan makin sebarang sandi, makin sulit pula untuk dicuri.
report-pwt-headline-3 = Perlakukan pertanyaan keamanan seperti sandi tambahan.
report-pwt-summary-3 =
    Situs web tidak memeriksa apakah jawaban Anda akurat; situs web hanya memeriksa kecocokannya.
    Buat jawaban yang panjang dan sebarang, lalu simpan di tempat yang aman.
report-pwt-headline-4 = Gunakan pengelola sandi
report-pwt-summary-4 =
    Layanan seperti 1Password, LastPass, Dashlane, dan Bitwarden mampu menghasilkan sandi yang kuat, menyimpannya secara aman, 
    dan mengisikannya pada situs web sehingga Anda tidak perlu lagi mengingatnya satu per satu.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Ketahui apakah Anda tersangkut dalam kebocoran data.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Halo,
    { -brand-name } memiliki layanan gratis di mana Anda dapat memeriksa apakah Anda tersangkut dalam suatu kebocoran data. Begini caranya:
    1. Kunjungi { "https://monitor.firefox.com" } dan cari alamat surel Anda.
    2. Cek apakah akun daring Anda telah tersangkut dalam kebocoran data.
    3. Dapatkan kiat dari { -product-name } tentang apa yang selanjutnya perlu Anda lakukan.
# Unsubscribe link in email.
email-unsub-link = Berhenti berlangganan
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Anda menerima email ini karena Anda mendaftar untuk peringatan { -product-name }
    Tidak lagi menginginkan surel ini? { $unsubLink }. Ini adalah surel otomatis. Untuk dukungan, kunjungi { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Anda menerima surel ini karena Anda mendaftar untuk dapatkan peringatan { -product-name }.
    Ini adalah surel otomatis. Untuk dukungan, kunjungi { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Lihat Dasbor Saya
# Button text
verify-email-cta = Verifikasi Surel
# Headline of verification email
email-link-expires = Tautan ini kedaluwarsa dalam 24 jam
email-verify-blurb = Verifikasi surel Anda untuk menambahkannya ke { -product-name } dan mendaftar untuk peringatan kebocoran.
# Email headline
email-found-breaches-hl = Berikut ringkasan pembobolan data sebelumnya
# Email headline
email-breach-summary-for-email = Ringkasan pembobolan untuk { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } muncul di 0 pembobolan data yang diketahui
# Email headline
email-alert-hl = { $userEmail } muncul dalam pembobolan data baru
# Subject line of email
email-subject-found-breaches = { -product-name } menemukan info Anda dalam pembobolan ini
# Subject line of email
email-subject-no-breaches = { -product-name } tidak menemukan pembobolan yang diketahui
# Subject line of email
email-subject-verify = Verifikasi surel Anda untuk { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Pelajari lebih lanjut tentang { $fxmLink }
email-sensitive-disclaimer =
    Karena sifat sensitif dari pembobolan ini, surel yang terlibat tidak dapat ditemukan secara publik.
    Anda menerima pemberitahuan ini karena Anda adalah pemilik terverifikasi dari alamat surel ini.
fxm-warns-you-no-breaches =
    { -product-name } memperingatkan Anda tentang pembobolan data yang melibatkan informasi pribadi Anda.
    Sejauh ini, tidak ada pembobolan yang ditemukan. Kami akan mengirimkan peringatan kepada Anda jika alamat surel Anda muncul dalam pembobolan baru.
fxm-warns-you-found-breaches =
    { -product-name } memperingatkan Anda tentang pembobolan data yang melibatkan informasi pribadi Anda.
    Anda juga mendaftar untuk menerima peringatan jika alamat surel Anda muncul dalam pembobolan baru.
email-breach-alert-blurb =
    { -product-name } memperingatkan Anda tentang pembobolan data yang melibatkan informasi pribadi Anda.
    Kami baru saja menerima rinciian tentang pembobolan data perusahaan lain.
# List headline
faq-list-headline = Pertanyaan umum
# Link Title
faq-v2-1 = Saya tidak mengenali salah satu perusahaan atau situs web ini. Mengapa saya termasuk dalam pembobolan ini?
# Link Title
faq-v2-2 = Apakah saya perlu melakukan sesuatu jika pembobolan terjadi bertahun-tahun yang lalu atau ini adalah akun lama?
# Link Title
faq-v2-3 = Saya baru tahu saya termasuk korban pembobolan data. Apa yang harus saya lakukan selanjutnya?
# Link Title
faq-v2-4 = Bagaimana { -product-name } memperlakukan situs sensitif?
