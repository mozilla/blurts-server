# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = Basis Data Pembobolan Data — { -brand-fx-monitor }
breach-all-meta-social-title = Semua Pembobolan Terdeteksi oleh { -brand-fx-monitor }
breach-all-meta-social-description = Jelajahi daftar lengkap pembobolan yang diketahui yang terdeteksi oleh { -brand-fx-monitor }, lalu cari tahu apakah informasi Anda terungkap.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = Pembobolan Data { $company } – { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Apakah Anda terpengaruh oleh Pembobolan Data { $company }?
breach-detail-meta-social-description = Gunakan { -brand-fx-monitor } untuk mengetahui apakah informasi pribadi Anda terungkap dalam pembobolan ini, dan memahami apa yang harus dilakukan selanjutnya.

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Pengelola Sandi { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Perbarui kata sandi Anda dan aktifkan autentikasi dua faktor (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Dalam kebanyakan kasus, kami menyarankan Anda mengubah kata sandi Anda di situs web perusahaan. Tetapi <b>situs web mereka mungkin sedang tidak aktif atau mengandung konten berbahaya</b>, jadi berhati-hatilah jika Anda <breached-company-link>mengunjungi situs tersebut</breached-company-link>. Untuk perlindungan tambahan, pastikan Anda menggunakan kata sandi unik untuk semua akun, sehingga kata sandi yang bocor tidak dapat digunakan untuk mengakses akun lain. { $passwordManagerLink } dapat membantu Anda melacak semua kata sandi Anda dengan aman.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Lindungi surel Anda dengan layanan penyamaran surel seperti { $firefoxRelayLink }.
breach-checklist-email-body = Ini dapat menyembunyikan alamat surel asli Anda saat meneruskan surel ke kotak masuk asli Anda.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Pantau laporan kredit finansial Anda termasuk akun, pinjol, atau kartu kredit yang tidak Anda kenal.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Anda juga dapat mempertimbangkan untuk membekukan kredit Anda di { $equifaxLink }, { $experianLink } dan { $transUnionLink } untuk menghentikan penipu membuka akun baru atas nama Anda. Ini gratis dan tidak akan memengaruhi skor kredit Anda.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Laporkan pembobolan ini ke penerbit kartu kredit Anda dan minta kartu baru dengan nomor baru.
breach-checklist-cc-body = Anda juga harus meninjau laporan kartu kredit Anda untuk tagihan yang tidak dikenali.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Segera beri tahu bank Anda bahwa nomor rekening Anda telah disusupi.
breach-checklist-bank-body = Melakukannya lebih cepat dapat memberi Anda lebih banyak perlindungan hukum untuk membantu Anda memulihkan kerugian. Anda mungkin juga ingin memeriksa rekening Anda tentang tagihan yang tidak dikenali.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Beri tahu penerbit kartu Anda dan ubah PIN Anda segera.
breach-checklist-pin-body = Pastikan PIN baru Anda, atau PIN lainnya, tidak menyertakan angka yang mudah ditebak seperti tanggal lahir atau alamat Anda.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Gunakan internet secara pribadi dengan VPN, seperti { $mozillaVpnLink }.
breach-checklist-ip-body = Alamat IP Anda (alamat Protokol Internet) menunjukkan lokasi dan penyedia layanan internet Anda. VPN dapat menyembunyikan alamat IP asli Anda sehingga Anda dapat menggunakan internet secara pribadi.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Ubah sandi atau PIN yang menyertakan bagian alamat Anda.
breach-checklist-address-body = Alamat mudah ditemukan dalam data publik sehingga membuat kata sandi dan PIN mudah ditebak.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Ubah sandi atau PIN yang menyertakan tanggal lahir Anda.
breach-checklist-dob-body = Tanggal lahir mudah ditemukan dalam data publik, dan orang yang menemukannya dapat dengan mudah menebak PIN Anda.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Lindungi nomor telepon Anda dengan layanan penyamaran seperti { $firefoxRelayLink }, yang menyembunyikan nomor telepon Anda yang sebenarnya.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Perbarui pertanyaan keamanan Anda.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Dalam kebanyakan kasus, kami menyarankan Anda memperbarui pertanyaan keamanan Anda di situs web perusahaan. Tetapi <b>situs web mereka mungkin sedang tidak aktif atau mengandung konten berbahaya</b>, jadi berhati-hatilah jika Anda <breached-company-link>mengunjungi situs tersebut</breached-company-link>. Untuk perlindungan tambahan, perbarui pertanyaan keamanan ini pada akun penting mana pun yang Anda gunakan, dan buat kata sandi unik untuk semua akun.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Buat kata sandi yang unik dan kuat untuk semua akun tempat Anda menggunakan kata sandi yang sama berulang kali.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Pengelola kata sandi seperti { $passwordManagerLink } (yang gratis dan terpasang di peramban { -brand-firefox }) dapat membantu Anda melacak semua kata sandi Anda dan mengaksesnya dengan aman dari semua perangkat Anda.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Hubungi { $companyName } untuk memberi tahu mereka tentang pembobolan ini dan meminta langkah spesifik yang dapat Anda ambil.
