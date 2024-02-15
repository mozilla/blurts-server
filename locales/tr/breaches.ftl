# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Pano
breach-all-meta-title = { -brand-fx-monitor } - Tüm Veri İhlalleri
breach-all-meta-social-title = { -brand-fx-monitor } tarafından tespit edilen tüm ihlaller
breach-all-meta-social-description = { -brand-fx-monitor } tarafından tespit edilen bilinen ihlallerin tam listesine göz atın ve bilgilerinizin ele geçirilip geçirilmediğini öğrenin.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - { $company } Veri İhlali
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = { $company } veri ihlalinden etkilendiniz mi?
breach-detail-meta-social-description = Bu ihlalde kişisel bilgilerinizin ele geçirilip geçirilmediğini öğrenmek ve bundan sonra bu gibi durumlarda ne yapacağınızı anlamak için { -brand-fx-monitor } kullanın.
breach-scan-meta-title = { -brand-fx-monitor } - İhlal Sonuçları
breach-scan-meta-social-title = { -brand-fx-monitor } İhlal Sonuçları
breach-scan-meta-social-description = İhlalleri çözmek ve bilinen yeni ihlaller için sürekli takipte kalmak için { -brand-fx-monitor }’e giriş yapın.

## Breaches header

# Data classes pie chart title
breach-chart-title = Ele geçirilmiş veriler
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = { $email-select } için veri ihlalleri
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $total } e-postanın { $count } tanesi izleniyor
       *[other] { $total } e-postanın { $count } tanesi izleniyor
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = E-postaları yönet

## Breaches resolved filter

filter-label-unresolved = Çözülmemiş ihlaller
filter-label-resolved = Çözülmüş ihlaller

## Breaches table

column-company = ŞİRKET
column-breached-data = İHLAL EDİLMİŞ VERİLER
column-detected = TESPİT EDİLDİ
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Çözüldü
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Etkin
breaches-resolve-heading = Bu ihlali çözün:
breaches-none-headline = İhlal bulunamadı
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Her şey yolunda! { $email } için bilinen bir ihlal bildirilmedi. Bu e-postayı izlemeye devam edeceğiz ve herhangi bir yeni ihlal olursa size haber vereceğiz.
breaches-none-cta-blurb = Başka bir e-postayı izlemek ister misiniz?
breaches-none-cta-button = E-posta adresi ekle
breaches-all-resolved-headline = Tüm ihlaller çözüldü
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = { $email } için tüm ihlalleri çözdünüz. Bu e-postayı izlemeye devam edeceğiz ve herhangi bir yeni ihlal olursa size haber vereceğiz.
breaches-all-resolved-cta-blurb = Başka bir e-postayı izlemek ister misiniz?
breaches-all-resolved-cta-button = E-posta adresi ekle
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = { $breachDate } tarihinde { $companyName } bir veri ihlaline uğradı. İhlal keşfedildikten ve doğrulandıktan sonra { $addedDate } tarihinde veritabanımıza eklendi. İhlal şunları içeriyordu: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } Parola Yöneticisi
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Parolalarınızı güncelleyip iki aşamalı kimlik doğrulamayı (2FA) etkinleştirin.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Çoğu durumda şirketin web sitesine girip parolanızı değiştirmenizi öneririz. Ancak bazı durumlarda <b>site kapalı olabilir veya kötü amaçlı içerik barındırıyor olabilir</b>. Bu yüzden <breached-company-link>siteyi ziyaret ederken</breached-company-link> dikkatli olun. Ek bir önlem olarak, tüm hesaplarınızda birbirinden farklı parolalar kullanmalısınız. Böylece, ele geçirilen parolalarınız diğer hesaplarınıza erişmek için kullanılamaz. { $passwordManagerLink }, tüm parolalarınızı güvenli bir şekilde kaydetmenize yardımcı olabilir.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = { $firefoxRelayLink } gibi bir e-posta maskeleme hizmetiyle e-postanızı koruyun.
breach-checklist-email-body = Böylece e-postaları gelen kutunuza yönlendirirken gerçek e-posta adresinizi gizleyebilirsiniz.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Kredi raporunuzda tanımadığınız hesaplar, krediler ve kredi kartları olup olmadığını kontrol edin.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Ayrıca dolandırıcıların adınıza yeni hesap açmasını önlemek için { $equifaxLink }, { $experianLink } ve { $transUnionLink } üzerindeki kredinizi dondurmayı da düşünebilirsiniz. Bu işlem ücretsizdir ve kredi skorunuzu etkilemez.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Bu ihlali kredi kartınızı aldığınız kuruluşa bildirerek yeni bir numaraya sahip yeni bir kart isteyin.
breach-checklist-cc-body = Kredi kartı ekstrelerinizde tanımadığınız masraflar olup olmadığını da gözden geçirmelisiniz.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Hesap numaranızın ele geçirildiğini hemen bankanıza bildirin.
breach-checklist-bank-body = Hızlıca harekete geçmeniz kayıplarınızı karşılamanıza yardımcı olacak daha fazla hukuki koruma sağlayabilir. Hesabınızda tanımadığınız masraflar olup olmadığını da gözden geçirin.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Kartınızı aldığınız kuruluşa hemen haber verip PIN’inizi değiştirin.
breach-checklist-pin-body = Yeni PIN’inizin ve diğer PIN’leriniz, doğum tarihiniz veya adresiniz gibi kolayca tahmin edilebilecek rakamlar içermemelidir.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = { $mozillaVpnLink } gibi bir VPN hizmetiyle internetteki gizliliğinizi artırın.
breach-checklist-ip-body = IP adresiniz konumunuzu ve internet servis sağlayıcınızı ifşa edebilir. VPN kullanarak gerçek IP adresinizi gizleyebilirsiniz.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Adresinizin herhangi bir bölümünü içeren parolaları veya PIN’leri değiştirin.
breach-checklist-address-body = Kamuya açık kayıtlarda adresler kolayca bulunabilir ve adresleriniz parolaların ve PIN’lerin tahmin edilmesini kolaylaştırabilir.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Doğum tarihinizi içeren parolaları veya PIN’leri değiştirin.
breach-checklist-dob-body = Doğum tarihleri kamuya açık kayıtlarda kolayca bulunabilir ve bunları bulan kişiler PIN’inizi kolayca tahmin edebilir.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Gerçek telefon numaranızı gizleyen { $firefoxRelayLink } gibi bir maskeleme hizmetiyle telefon numaranızı koruyun.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Güvenlik sorularınızı güncelleyin.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Aynı parolayı kullandığınız tüm hesaplar için benzersiz, güçlü parolalar oluşturun.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = { $passwordManagerLink } (Ücretsizdir { -brand-firefox } tarayıcısıyla birlikte gelir.) veya başka bir parola yöneticisi kullanarak tüm parolalarınızı kaydedebilir ve tüm cihazlarınızdan güvenli bir şekilde parolalarınıza erişebilirsiniz.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = { $companyName } ile iletişime geçerek onlara bu ihlal hakkında bilgi verin ve ne yapmanız gerektiğini öğrenin.
