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
-brand-HIBP = Have I Been Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Sokongan
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Beri Maklum Balas
terms-and-privacy = Terma dan Privasi
error-not-subscribed = Alamat e-mel ini tidak dilanggan ke { -product-name }.
error-hibp-throttled = Terlalu banyak sambungan ke { -brand-HIBP }.
error-hibp-connect = Ralat menyambung ke { -brand-HIBP }.
error-hibp-load-breaches = Tidak dapat memuat pelanggaran keselamatan.
hibp-notify-email-subject = { -product-name } Amaran: Akaun anda terlibat dalam pelanggaran keselamatan.
home-title = { -product-name }
home-not-found = Halaman tidak ditemui.
oauth-invalid-session = Sesi tidak sah
oauth-confirmed-title = { -product-name }: Dilanggan
scan-title = { -product-name }: Imbas Keputusan
user-add-invalid-email = E-mail tidak sah
user-add-email-verify-subject = Sahkan langganan anda untuk { -product-name }.
user-add-title = { -product-name }: Sahkan E-mel
user-verify-token-error = Token pengesahan diperlukan.
user-verify-email-report-subject = Laporan { -product-name } anda
user-verify-title = { -product-name }: Dilanggan
user-unsubscribe-token-error = Perlu ada token untuk membatalkan langganan.
user-unsubscribe-token-email-error = Perlu ada token dan emailHash untuk membatalkan langganan.
user-unsubscribe-title = { -product-name }: Nyahlanggan
user-unsubscribe-survey-title = { -product-name }: Nyahlanggan Kajian
user-unsubscribed-title = { -product-name }: Dinyahlanggan

## Password Tips

pwt-section-headline = Kata Laluan Lebih Sulit = Perlindungan Lebih Selamat
pwt-section-subhead = Maklumat peribadi anda selamat seperti kata laluan anda.
pwt-section-blurb =
    Kata laluan bukan sahaja melindungi akaun anda. Juga melindungi setiap maklumat peribadi yang berada di dalamnya.
    Dan penggodam bergantung pada tabiat buruk seseorang, seperti menggunakan kata laluan yang sama atau frasa umum (p@ ssw0rd, sesiapa?) supaya
    jika berjaya menggodam satu akaun, mereka boleh menggodam lebih banyak akaun. Inilah cara yang lebih baik untuk melindungi akaun anda.
pwt-headline-1 = Guna kata laluan yang berbeza untuk setiap akaun
pwt-summary-1 =
    Menggunakan kata laluan yang sama membuka peluang untuk kecurian identiti.
    Sesiapa yang menggunakan kata laluan itu boleh log masuk ke semua akaun anda.
pwt-headline-2 = Cipta kata laluan yang sukar diteka
pwt-summary-2 =
    Penggodam menggunakan beribu-ribu kata laluan lazim untuk kata laluan anda.
    Semakin panjang dan lebih rawak kata laluan itu, semakin sukar untuk diteka.
pwt-headline-3 = Anggap soalan keselamatan seperti kata laluan tambahan
pwt-headline-4 = Dapatkan bantuan untuk mengingati kata laluan anda
pwt-headline-5 = Tambah keselamatan dengan pengesahan dua faktor
pwt-headline-6 = Daftar untuk makluman { -product-name-nowrap }
landing-headline = Hak anda untuk selamat daripada penggodam bermula di sini.
scan-label = Lihat samada anda terlibat dalam pelanggaran keselamatan data.
scan-placeholder = Masukkan Alamat E-mel
scan-privacy = E-mel anda tidak akan disimpan.
scan-submit = Cari E-mel Anda
scan-another-email = Imbas Alamat E-mel Lain
scan-featuredbreach-label = Ketahui samada akaun <span class="bold">{ $featuredBreach } </span> anda telah dikompromi.
scan-error = Perlu e-mel yang sah
signup-banner-headline = { -product-name-nowrap } mengesan ancaman terhadap akaun atas talian anda.
download-firefox-bar-link = Muat turun { -brand-name } sekarang
download-firefox-banner-blurb = Kuasai pelayar anda
download-firefox-banner-button = Muat turun { -brand-name }
signup-modal-headline = Daftar untuk { -product-name-nowrap }
signup-modal-blurb = Daftar untuk mendapatkan laporan penuh, makluman apabila ada pelanggaran keselamatan baru dan panduan keselamatan dari { -product-name-nowrap }.
signup-modal-close = Tutup
get-your-report = Dapatkan Laporan Anda
signup-modal-verify-headline = Sahkan Langganan Anda
signup-modal-verify-blurb = Kami telah menghantar pautan pengesahan ke <span id="submitted-email" class="medium"></span> .
signup-modal-verify-expiration = Pautan ini luput dalam 24 jam.
signup-modal-verify-resend = Tiada dalam peti masuk atau folder spam? Hantar semula.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Sudah dihantar!
signup-with-fxa = Daftar dengan Akaun { -brand-name }
form-signup-placeholder = Masukkan e-mel
form-signup-checkbox = Ketahui perkembangan terbaru dari { -brand-Mozilla } dan { -brand-name }.
sign-up = Daftar
form-signup-error = Perlu e-mel yang sah
no-breaches-headline = Nampak bagus buat setakat ini.
found-breaches-headline = Maklumat anda menjadi sebahagian daripada pelanggaran keselamatan data.
show-more-breaches = Papar Selanjutnya
what-to-do-headline = Apa Yang Perlu Dilakukan Apabila Maklumat Anda Terlibat dalam Pelanggaran Keselamatan Data
what-to-do-subhead-1 = Tukar kata laluan, walaupun untuk akaun lama
what-to-do-subhead-2 = Jika anda menggunakan semula kata laluan yang terdedah, ubahnya
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Tarikh pelanggaran data:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Akaun yang dikompromi:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Data dikompromi:
