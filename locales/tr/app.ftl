# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-short-name = Monitor
-brand-name = Firefox
-brand-HIBP = Have I Been Pwned
-brand-lockwise = Firefox Lockwise
-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Vakfı
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

error-not-subscribed = Bu e-posta adresi { -product-name }’e abone değil.
error-hibp-throttled = Çok fazla { -brand-HIBP } bağlantısı.
error-hibp-connect = { -brand-HIBP } bağlantısı kurulamadı.
user-add-invalid-email = Geçersiz e-posta
user-add-too-many-emails = Azami sayıda e-posta adresini gözlemliyorsunuz.
user-add-duplicate-email = Bu e-posta zaten { -product-name }'e eklenmiş.
user-add-verification-email-just-sent = Bu kadar sıra sürede başka doğrulama e-postası gönderemiyoruz. Lütfen daha sonra yeniden deneyin.
user-add-unknown-error = Başka bir e-posta adresi eklenirken bir sorun oluştu. Lütfen daha sonra yeniden deneyin.
user-delete-unknown-error = Bir e-posta adresi kaldırılırken bir sorun oluştu. Lütfen daha sonra yeniden deneyin.
user-verify-token-error = Doğrulama jetonu gerekli.
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Ele geçirilen veriler:
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = İhlal verileri { $hibp-link } tarafından sağlanmaktadır
show-all = Tümünü göster
sign-out = Çıkış
# Link title
preferences = Tercihler
# Link title
home = Ana sayfa
# Link title
security-tips = Güvenlik ipuçları
# Link title
more-about-this-breach = Bu ihlal hakkında daha fazla bilgi
monitor-several-emails = Birden fazla e-postayı izleyin
website-breach = Web sitesi ihlali
sensitive-breach = Hassas web sitesi ihlali
data-aggregator-breach = Veri toplayıcı ihlali
what-data = Ele geçirilen veriler:
sensitive-sites = { -product-name } hassas siteleri nasıl ele alıyor?
sensitive-sites-copy = { -product-name } bu tür veri ihlallerine dahil olan hesapları yalnızca e-posta adresiniz onaylandıktan sonra gösterir. Yani bilgilerinizin bu veri ihlalinde ele geçirilip geçirilmediğini yalnızca siz görebilirsiniz (e-posta hesabınıza erişebilen başka birisi yoksa).
delayed-reporting-headline = Bu ihlalin bildirilmesi neden bu kadar uzun sürdü?
delayed-reporting-copy =
    Ele geçirilen bilgilerin dark web'de gün yüzüne çıkması bazen aylar veya yıllar sürebilir. 
    İhlaller keşfedildikten ve doğrulandıktan hemen sonra veritabanımıza eklenir.
fxm-warns-you = E-posta adresiniz çevrimiçi bir veri ihlalinde yer alırsa { -product-name } sizi uyarır. Bilgilerinizin ele geçirilip geçirilmediğini görün, hesaplarınızı nasıl daha iyi koruyabileceğinizi öğrenin ve e-posta adresiniz yeni veri ihlallerine karışırsa bildirim alın.
what-is-data-agg = Veri toplayıcı nedir?
what-is-data-agg-blurb =
    Veri toplayıcıları veya veri aracıları, halka açık kayıtlardan bilgi toplar 
    ve diğer şirketlerden veri satın alır. Bu verileri pazarlama amacıyla başka şirketlere satmak için derlerler. 
    Bu ihlallerin mağdurlarının finansal dolandırıcılık yaşama olasılığı daha düşüktür ama bilgisayar 
    korsanları kimlik hırsızlığı veya profil çıkarma amacıyla bu verileri kullanabilirler.
avoid-personal-info = Parolalarda kişisel bilgilerinizi kullanmaktan kaçının
send-verification = Doğrulama bağlantısını gönder
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = İhlal özeti

##

# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] parolanız ihlallerde ele geçirilmiş
       *[other] parolanız ihlallerde ele geçirilmiş
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] veri ihlalinde bilgileriniz ele geçirildi
       *[other] veri ihlalinde bilgileriniz ele geçirildi
    }
what-is-a-website-breach = Web sitesi ihlali nedir?
website-breach-blurb = Siber suçlular çevrimiçi hesaplardan kişisel bilgileri çaldığında, kopyaladığında veya ifşa ettiğinde web sitesinde veri ihlali meydana gelir. Genellikle hacker'ların web sitesinin güvenliğinde zayıf bir nokta bulması sonucunda oluşur. Hesap bilgileri kazayla sızdırıldığında da ihlaller meydana gelebilir.
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Genel Bakış
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } tarihinde { $breachTitle } bir veri ihlaline uğradı. İhlal keşfedildikten ve doğrulandıktan sonra { $addedDate } tarihinde veritabanımıza eklendi.
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menü
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = { $userEmail } adresine gönderilen bağlantıyı onaylarak adresinizi { -product-name }'e ekleyin.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Eklenme tarihi:
# Section headline
rec-section-headline = Bu ihlalle ilgili ne yapmalısınız?
rec-section-subhead = Kişisel bilgilerinizi güvende tutmak ve dijital kimliğinizi korumak için bu adımları uygulamanızı öneririz.
# Section headline
rec-section-headline-no-pw = Kişisel bilgilerinizi korumak için ne yapmalısınız?
rec-section-subhead-no-pw = Bu ihlal kapsamında parolalar ele geçirilmemiş olsa da kişisel bilgilerinizi daha iyi korumak için atabileceğiniz adımlar var.

##

# A status indicator that appears in the top right corner of new breach cards
new-breach = Yeni

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla hesabı
open-in-new-tab-alt = Bağlantıyı yeni sekmede aç

## Search Engine Optimization

meta-desc-2 = { -brand-fx-monitor } ile verilerinizin çalınıp çalınmadığını öğrenin. Bundan sonra ne yapacağınızı anlamanıza yardımcı olacağız ve yeni ihlalleri sürekli olarak izleyeceğiz.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Giriş yap
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

mobile-menu-label = Ana menü
main-nav-button-collapse-label = Menüyü daralt
main-nav-button-collapse-tooltip = Menüyü daralt
main-nav-button-expand-label = Menüyü genişlet
main-nav-button-expand-tooltip = Menüyü genişlet
main-nav-label = Gezinti
main-nav-link-home-label = Ana sayfa
main-nav-link-dashboard-label = Kontrol paneli
main-nav-link-settings-label = Ayarlar
main-nav-link-faq-label = SSS
main-nav-link-faq-tooltip = Sıkça sorulan sorular

## User menu

user-menu-trigger-label = Kullanıcı menüsünü aç
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = { -brand-mozilla-account }nızı yönetin
user-menu-settings-label = Ayarlar
user-menu-settings-tooltip = { -brand-mozilla-monitor }’ü yapılandır
user-menu-help-label = Yardım ve destek
user-menu-help-tooltip = { -brand-mozilla-monitor }’ün kullanımıyla ilgili yardım alın
user-menu-signout-label = Çıkış
user-menu-signout-tooltip = { -brand-mozilla-monitor }’den çıkış yap

## Footer

mozilla = { -brand-mozilla }
terms-of-service = Kullanım Koşulları
privacy-notice = Gizlilik Bildirimi
github = { -brand-github }
footer-nav-recent-breaches = En Son Veri İhlalleri
footer-external-link-faq-label = SSS
footer-external-link-faq-tooltip = Sıkça sorulan sorular

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Sayfa bulunamadı
error-page-error-404-copy = Aradığınız sayfa artık mevcut değil.
error-page-error-404-cta-button = Geri dön
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Bir hata oluştu

## Breach overview page

all-breaches-headline-3 = Veri İhlali Veri Tabanı
all-breaches-lead = Kişisel bilgilerinizin ele geçirilip geçirilmediğini öğrenmek için bilinen tüm veri ihlallerini izliyoruz. İşte 2007’den beri bildirilen tüm ihlallerin tam listesi.
search-breaches = İhlallerde ara
# the kind of user data exposed to hackers in data breach.
exposed-data = Ele geçirilen veriler:

## Public breach detail page

find-out-if-2 = Bu ihlale karışıp karışmadığınızı öğrenin
find-out-if-description = Bu ihlalde e-posta adresinizin ele geçirilip geçirilmediğini hızlıca görmenize ve bundan sonra ne yapacağınızı anlamanıza yardımcı olacağız.
breach-detail-cta-signup = İhlalleri kontrol et

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Yeni isim, yeni görünüm ve <b>gizliliğinizi geri almanın</b> yeni yolları.
banner-monitor-rebrand-dismiss-button-label = Tamam
banner-monitor-rebrand-dismiss-button-tooltip = Kapat
loading-accessibility = Yükleniyor
