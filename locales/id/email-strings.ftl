# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Laporan { -product-name }
report-date = Tanggal Laporan:
email-address = Alamat Surel:

# A link to legal information about mozilla products.
legal = Legal

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

# Button text
verify-email-cta = Verifikasi Surel

# Button text
see-all-breaches = Lihat Semua Pembobolan

# Headline of verification email
email-link-expires = Tautan ini kedaluwarsa dalam 24 jam
email-verify-blurb = Verifikasi surel Anda untuk menambahkannya ke { -product-name } dan mendaftar untuk peringatan kebocoran.

# Email headline
email-found-breaches-hl = Berikut ringkasan pembobolan data sebelumnya

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Ringkasan pembobolan untuk { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } muncul di 0 pembobolan data yang diketahui

# Email headline
email-alert-hl = { $userEmail } muncul dalam pembobolan data baru

##

# Subject line of email
email-subject-found-breaches = { -product-name } menemukan info Anda dalam pembobolan ini

# Subject line of email
email-subject-no-breaches = { -product-name } tidak menemukan pembobolan yang diketahui

# Subject line of email
email-subject-verify = Verifikasi surel Anda untuk { -product-name }

# Variables:
#   $fxmLink (string) - Link to Firefox Monitor that uses the text from { -product-name }.
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

# Section headline
monitor-another-email = Ingin memantau surel lainnya?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Variables:
#   $unsubscribe-link-attr (string) - Link to email unsubscribe
email-2022-unsubscribe = Anda menerima surel otomatis ini sebagai pelanggan { -product-name }. <br>Anda dapat selalu dapat mengubah preferensi surel Anda kapan saja <a { $unsubscribe-link-attr }>di sini</a>.
# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Data pembobolan disediakan oleh <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Anda memiliki pembobolan yang belum ditindaklanjuti
email-unresolved-subhead = Surel Anda telah terungkap. <br>Tindaklanjuti segera dengan { -product-name }.
email-is-affected = Surel Anda, { $email-address }, terdampak pada setidaknya satu pembobolan data
email-more-detail = Masuk ke { -product-name } sekarang untuk melihat detail lebih lanjut tentang pembobolan Anda (termasuk waktu kejadian dan data apa yang terungkap), serta pelajari apa yang harus dilakukan ketika surel Anda terekspos dalam pembobolan data.
email-breach-status = Status pembobolan saat ini
# table row 1 label
email-monitored = Total surel yang dipantau:
# table row 2 label
email-breach-total = Jumlah total pembobolan:
# table row 3 label
email-resolved = Pembobolan ditindaklanjuti:
# table row 4 label
email-unresolved = Pembobolan yang belum ditindaklanjuti:
email-resolve-cta = Tindaklanjuti pembobolan

## Verification email

email-verify-heading = Lindungi data Anda, mulai sekarang
email-verify-subhead = Verifikasikan surel Anda untuk mulai melindungi data Anda setelah pembobolan.
email-verify-simply-click = Cukup klik tautan di bawah ini untuk menyelesaikan verifikasi akun Anda.

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Berikut ringkasan pembobolan data Anda
email-breach-detected = Hasil pencarian untuk akun { $email-address } Anda telah mendeteksi bahwa surel Anda mungkin telah terekspos. Kami menyarankan Anda bertindak sekarang untuk menindaklanjuti pelanggaran ini.
email-no-breach-detected = Berita bagus! Kami tidak menemukan pembobolan data yang memengaruhi surel Anda, { $email-address }.
email-dashboard-cta = Buka Dasbor

## Breach alert

email-may-have-been-exposed = Surel Anda mungkin telah terekspos dalam pembobolan data
email-spotted-new-breach = Kami telah menemukan pembobolan data baru
