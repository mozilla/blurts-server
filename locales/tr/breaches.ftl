# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = { $email-select } için veri ihlalleri
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $total } e-postanın { $count } tanesi izleniyor
       *[other] { $total } e-postanın { $count } tanesi izleniyor
    }
add-email-link = E-posta adresi ekle

## Breaches resolved filter

filter-label-unresolved = Çözülmemiş ihlaller
filter-label-resolved = Çözülmüş ihlaller

## Breaches table

column-company = ŞİRKET
column-breached-data = İHLAL EDİLMİŞ VERİLER
column-detected = TESPİT EDİLDİ
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = { $breachDate } tarihinde { $companyName } bir veri ihlaline uğradı. İhlal keşfedildikten ve doğrulandıktan sonra { $addedDate } tarihinde veritabanımıza eklendi. İhlal şunları içeriyordu: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Parolanızı değiştirmek ve iki aşamalı kimlik doğrulamayı (2FA) etkinleştirmek için <a>{ $breachedCompanyUrl }</a> adresine gidin.
breach-checklist-pw-body = Parolanız benzersiz ve tahmin edilmesi zor olmalı. Bu parolayı başka hesaplarda da kullanıyorsanız o hesapların parolasını da değiştirin. <a>{ -brand-firefox } parola yöneticisi</a>, tüm parolalarınızı güvenli bir şekilde kaydetmenize yardımcı olabilir.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = <a>{ -brand-relay }</a> gibi bir e-posta maskeleme hizmetiyle e-postanızı koruyun.
breach-checklist-email-body = Böylece e-postaları gelen kutunuza yönlendirirken gerçek e-posta adresinizi gizleyebilirsiniz.

## Prompts the user for changes when there is a breach detected of social security number


## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Bu ihlali kredi kartınızı aldığınız kuruluşa bildirerek yeni bir numaraya sahip yeni bir kart isteyin.
breach-checklist-cc-body = Kredi kartı ekstrelerinizde tanımadığınız masraflar olup olmadığını da gözden geçirmelisiniz.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Hesap numaranızın ele geçirildiğini hemen bankanıza bildirin.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Kartınızı aldığınız kuruluşa hemen haber verip PIN’inizi değiştirin.
breach-checklist-pin-body = Yeni PIN’inizin ve diğer PIN’leriniz, doğum tarihiniz veya adresiniz gibi kolayca tahmin edilebilecek rakamlar içermemelidir.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = <a>{ -brand-mozilla-vpn }</a> gibi bir VPN hizmetiyle internetteki gizliliğinizi artırın.
breach-checklist-ip-body = IP adresiniz konumunuzu ve internet servis sağlayıcınızı ifşa edebilir. VPN kullanarak gerçek IP adresinizi gizleyebilirsiniz.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Adresinizin herhangi bir bölümünü içeren parolaları veya PIN’leri değiştirin.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Doğum tarihinizi içeren parolaları veya PIN’leri değiştirin.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Gerçek telefon numaranızı gizleyen <a>{ -brand-relay }</a> gibi bir maskeleme hizmetiyle telefon numaranızı koruyun.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = <a>{ $breachedCompanyUrl }</a> adresindeki güvenlik sorularınızı güncelleyin.
breach-checklist-sq-body = Uzun, rastgele yanıtlar kullanın ve bunları güvenli bir yerde saklayın. Bu işlemi aynı güvenlik sorularını kullandığınız diğer her yerde yapın.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Aynı parolayı kullandığınız tüm hesaplar için benzersiz, güçlü parolalar oluşturun.

## Prompts the user for changes when there is a breach detected of other types

