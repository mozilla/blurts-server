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
-brand-fxa = Firefox Hesabı
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Kısa süre içinde çok fazla e-posta adresi taramaya çalıştınız. Güvenlik nedeniyle yeni aramalar yapmanızı geçici olarak engelledik. Daha sonra yeniden deneyebileceksiniz.
error-could-not-add-email = E-posta adresi veritabanına eklenemedi.
error-not-subscribed = Bu e-posta adresi { -product-name }’e abone değil.
error-hibp-throttled = Çok fazla { -brand-HIBP } bağlantısı.
error-hibp-connect = { -brand-HIBP } bağlantısı kurulamadı.
error-hibp-load-breaches = İhlaller yüklenemedi.
error-must-be-signed-in = { -brand-fxa }nıza giriş yapmış olmalısınız.
error-to-finish-verifying = { -product-name } için bu e-postayı onaylamak üzere birinci e-posta adresinizle giriş yapmanız gerekiyor.
home-title = { -product-name }
home-not-found = Sayfa bulunamadı.
oauth-invalid-session = Geçersiz oturum
scan-title = { -product-name } : Tarama Sonuçları
user-add-invalid-email = Geçersiz e-posta
user-add-too-many-emails = Azami sayıda e-posta adresini gözlemliyorsunuz.
user-add-email-verify-subject = { -product-name } aboneliğinizi doğrulayın.
user-add-duplicate-email = Bu e-posta zaten { -product-name }'e eklenmiş.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = { $userEmail } adresinin durumunu kontrol etmek için { $preferencesLink }inizi ziyaret edin.
user-add-verification-email-just-sent = Bu kadar sıra sürede başka doğrulama e-postası gönderemiyoruz. Lütfen daha sonra yeniden deneyin.
user-add-unknown-error = Başka bir e-posta adresi eklenirken bir sorun oluştu. Lütfen daha sonra yeniden deneyin.
user-delete-unknown-error = Bir e-posta adresi kaldırılırken bir sorun oluştu. Lütfen daha sonra yeniden deneyin.
error-headline = Hata
user-verify-token-error = Doğrulama jetonu gerekli.
user-verify-email-report-subject = { -product-name } raporunuz
user-unsubscribe-token-error = Abonelikten çıkmak bir jeton gerektirir.
user-unsubscribe-token-email-error = Abonelikten çıkmak bir jeton ve emailHash gerektirir.
user-unsubscribe-title = { -product-name } : Abonelikten çık
pwt-section-headline = Daha Güçlü Parolalar = Daha İyi Koruma
landing-headline = Hacker’lardan korunmaya herkesin hakkı var.
scan-placeholder = E-posta adresinizi yazın
scan-submit = E-postamı ara
scan-error = Geçerli bir e-posta adresi olmalı.
download-firefox-banner-button = { -brand-name }’u indir
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Gönderildi!
sign-up = Kaydol
form-signup-error = Geçerli bir e-posta adresi olmalı
# breach-date = the calendar date a particular data theft occurred.
breach-date = İhlal tarihi:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Ele geçirilen hesap sayısı:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Ele geçirilen veriler:
unsub-headline = { -product-name-nowrap } aboneliğinden çık
unsub-blurb = E-posta adresiniz { -product-name-nowrap } listesinden kaldırılacak ve bundan sonraki ihlallerle ilgili uyarı almayacaksınız.
unsub-button = Abonelikten çık
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = İhlal verileri { $hibp-link } tarafından sağlanmaktadır
share-twitter = Çoğu kişinin yaklaşık 100 çevrimiçi hesabı var. Hesaplarınızdan birisi veri ihlaline maruz kalmış olabilir mi? Hemen öğrenin.
share-facebook-headline = Verilerinizin çalınıp çalınmadığını öğrenin
share-facebook-blurb = İnternet hesaplarınız veri ihallerine karışmış olabilir mi?
og-site-description = { -product-name } ile verilerinizin çalınıp çalınmadığını öğrenin. Gelecekteki ihlallere yönelik uyarılara kaydolun ve hesaplarınızı güvende tutmaya dair ipuçları alın.
show-all = Tümünü göster
fxa-scan-another-email = Başka bir adresi kontrol etmek ister misiniz?
sign-out = Çıkış
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa }mı yönet
have-an-account = Zaten hesabınız var mı?
fxa-pwt-summary-2 =
    Hacker’lar kısa ve tek kelimeden oluşan parolaları kolayca tahmin edebilir.
    En az iki kelimede oluşan ve harf, rakam ve özel karakterler içeren parolalar kullanın.
fxa-pwt-summary-4 =
    1Password, LastPass, Dashlane ve Bitwarden gibi parola yöneticileri parolalarınızı sizin için 
    saklayabilir web sitelerine otomatik giriş yapmanızı sağlayabilir. Ayrıca kaliteli parolalar oluşturmanıza yardımcı olurlar.
fxa-pwt-summary-6 = Veri ihlalleri dur durak bilmiyor. Kişisel bilgileriniz yeni bir veri ihlalinde karşımıza çıkarsa { -product-name } size uyarı gönderir. Böylece hemen eyleme geçerek hesaplarınızı koruyabilirsiniz.
fxa-what-to-do-blurb-1 = Siteye giriş yapamıyorsanız siteyle iletişim kurarak parolanızı nasıl değiştirebileceğinizi öğrenin. Tanıdık gelmeyen bir hesap mı gördünüz? Verileriniz satılmış veya başka bir siteyle paylaşılmış olabilir. Unuttuğunuz bir hesap veya siz üye olduktan sonra adı değişmiş bir site de olabilir.
fxa-what-to-do-subhead-2 = Ele geçirilen parolanızı artık hiçbir yerde kullanmayın ve bu parolayı kullandığınız her yerde değiştirin.
fxa-wtd-blurb-2 =
    Hacker'lar ele geçirdikleri parolayı ve e-posta adresinizi kullanarak diğer hesaplarınıza girmeyi de deneyebilir.
    Her hesabınızda, özellikle de banka hesabınız, e-posta hesabınız ve 
    kişisel bilgilerinizi kaydettiğiniz diğer sitelerde birbirinden farklı parolalar kullanın.
fxa-what-to-do-blurb-3 =
    Çoğu veri ihlalinde yalnızca e-postalar ve parolalar ele geçirilir ama bazı ihlaller hassas finansal bilgilerinizi de içerebilir. 
    Banka hesabınız veya kredi kartı numaralarınız ele geçirilmişse bankanızı olası sahtekârlıklara karşı uyarın. 
    Kredi kartı hesap özetlerinizde tanıdık gelmeyen harcamalara karşı tetikte olun.
fxa-what-to-do-subhead-4 = Parolalarınızı hatırlamak ve güvende tutmak için yardım alın.
fxa-what-to-do-blurb-4 =
    1Password, LastPass, Dashlane ve Bitwarden gibi parola yöneticileri parolalarınızı sizin için 
    saklayabilir web sitelerine otomatik giriş yapmanızı sağlayabilir. İyi parolaları ezberlemek zordur. O yüzden telefonunuzda ve bilgisayarınızda bir parola yöneticisi kullanmanızı öneriyoruz.
# Alerts is a noun
sign-up-for-alerts = Uyarılara kaydolun
# Link title
frequently-asked-questions = Sıkça sorulan sorular
about-firefox-monitor = { -product-name } hakkında
# Link title
preferences = Tercihler
# Link title
home = Ana sayfa
# Link title
security-tips = Güvenlik ipuçları
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa } menüsünü aç
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = EKLENEN SON İHLAL
# Link title
more-about-this-breach = Bu ihlal hakkında daha fazla bilgi
take-control = Kişisel verilerinizin kontrolünü geri alın.
cant-stop-hackers = Hacker’ları tamamen durduramazsınız, ama onların işini kolaylaştıran kötü alışkanlardan vazgeçebilirsiniz.
read-more-tips = Daha fazla güvenlik ipucu
how-hackers-work = Hacker’ların nasıl çalıştığını anlayın
monitor-your-online-accounts = { -brand-fxa } ile ihlal uyarılarına kaydolun.
stay-alert = Yeni ihlallere karşı tetikte kalın
if-your-info = Bilgileriniz yeni bir veri ihlalinde karşımıza çıkarsa size bir uyarı göndereceğiz.
search-all-emails = İhallere dahil olabilecek tüm e-posta adreslerinizi arayın ve yeni tehditler hakkında uyarı alın.
monitor-several-emails = Birden fazla e-postayı izleyin
take-action = Hesaplarınızı korumak için harekete geçin
keep-your-data-safe = Verilerinizi siber suçlulardan korumak için neler yapmanız gerektiğini öğrenin.
website-breach = Web sitesi ihlali
sensitive-breach = Hassas web sitesi ihlali
data-aggregator-breach = Veri toplayıcı ihlali
unverified-breach = Doğrulanmamış ihlal
spam-list-breach = Spam listesi ihlali
website-breach-plural = Web sitesi ihlalleri
sensitive-breach-plural = Hassas ihlaller
data-aggregator-breach-plural = Veri toplayıcı ihlalleri
unverified-breach-plural = Doğrulanmamış ihlaller
spam-list-breach-plural = Spam listesi ihlalleri
what-data = Ele geçirilen veriler:
sensitive-sites = { -product-name } hassas siteleri nasıl ele alıyor?
sensitive-sites-copy = { -product-name } bu tür veri ihlallerine dahil olan hesapları yalnızca e-posta adresiniz onaylandıktan sonra gösterir. Yani bilgilerinizin bu veri ihlalinde ele geçirilip geçirilmediğini yalnızca siz görebilirsiniz (e-posta hesabınıza erişebilen başka birisi yoksa).
delayed-reporting-headline = Bu ihlalin bildirilmesi neden bu kadar uzun sürdü?
delayed-reporting-copy =
    Ele geçirilen bilgilerin dark web'de gün yüzüne çıkması bazen aylar veya yıllar sürebilir. 
    İhlaller keşfedildikten ve doğrulandıktan hemen sonra veritabanımıza eklenir.
about-fxm-headline = { -product-name } hakkında
about-fxm-blurb = Çevrimiçi hesaplarınız veri ihlallerine dahil olduğunda { -product-name } sizi uyarır. Verilerinizin ele geçirilip geçirilmediğini öğrenin, yeni ihlaller yaşandığında bildirim alın ve çevrimiçi hesaplarınızı korumak için gereken adımları atın. { -product-name }, { -brand-Mozilla } tarafından sağlanmaktadır.
fxm-warns-you = E-posta adresiniz çevrimiçi bir veri ihlalinde yer alırsa { -product-name } sizi uyarır. Bilgilerinizin ele geçirilip geçirilmediğini görün, hesaplarınızı nasıl daha iyi koruyabileceğinizi öğrenin ve e-posta adresiniz yeni veri ihlallerine karışırsa bildirim alın.
# How Firefox Monitor works
how-fxm-works = { -product-name } nasıl çalışır?
how-fxm-1-headline = Temel sorgulama yap
how-fxm-1-blurb =
    Bilgilerinizi 2007’den beri gerçeklemiş veri ihlallerinde arayın.
    Temel sorgulama çoğu veri ihlalini tarar
    fakat hassas kişisel veri içerenleri hariç tutar.
how-fxm-2-headline = İhlal takibi için kaydolun
how-fxm-2-blurb = Yeni ihlallerden haberdar olmak için { -brand-fxa } açın. E-postanızı doğruladıktan sonra hassas ihlaller de dahil olmak üzere geçmiş veri ihlallerini içeren tam raporunuzu göndereceğiz.
how-fxm-3-headline = Tarayıcınızdan bildirim alın
how-fxm-3-blurb = { -brand-name } kullanıyorsanız veri ihlaline uğramış bir siteyi ziyaret ettiğinizde bildirim alacaksınız. İhlale dahil olup olmadığınızı ve ne yapabileceğinizi anında öğrenebilirsiniz.
wtd-after-website = Veri ihlalinden sonra ne yapmalı:
wtd-after-data-agg = Veri toplayıcısı ihlalinden sonra ne yapılmalı?
what-is-data-agg = Veri toplayıcı nedir?
what-is-data-agg-blurb =
    Veri toplayıcıları veya veri aracıları, halka açık kayıtlardan bilgi toplar 
    ve diğer şirketlerden veri satın alır. Bu verileri pazarlama amacıyla başka şirketlere satmak için derlerler. 
    Bu ihlallerin mağdurlarının finansal dolandırıcılık yaşama olasılığı daha düşüktür ama bilgisayar 
    korsanları kimlik hırsızlığı veya profil çıkarma amacıyla bu verileri kullanabilirler.
protect-your-privacy = Çevrimiçi gizliliğinizi koruyun
no-pw-to-change = Web sitesi ihlallerinin aksine, değiştirebileceğiniz bir parola yoktur.
avoid-personal-info = Parolalarda kişisel bilgilerinizi kullanmaktan kaçının
avoid-personal-info-blurb = Doğum günleri, adresler ve akrabalarınızın adları internette bulunabilir. Bu gibi kelime ve sayıları parolanızda kullanmayın.

## What to do after data breach tips

change-pw = Parolanızı değiştirin
change-pw-site = Bu sitedeki parolanızı değiştirin
even-for-old = Eski hesaplarınızın bile parolalarını güncellemeniz önemli.
make-new-pw-unique = Yeni parolanız eskisinden ve tüm parolalarınızdan farklı olsun
strength-of-your-pw = Parolalarınızın kalitesi, internetteki güvenliğinizi doğrudan etkiler.
create-strong-passwords = Güçlü parolalar nasıl oluşturulur?
stop-reusing-pw = Aynı parolaları kullanmayın
create-unique-pw = Benzersiz parolalar oluşturun ve bunları parola yöneticisi gibi güvenli bir yerde saklayın.
five-myths = Parola yöneticileri hakkında 5 şehir efsanesi
create-a-fxa = Tam ihlal raporunuzu görmek ve ihlal uyarıları almak için { -brand-fxa } açın.
feat-security-tips = Hesaplarınızı korumanız için güvenlik ipuçları
feat-sensitive = Hassas veri ihlalerinde gelişmiş arama
feat-enroll-multiple = İhlal izlemesine birden fazla e-posta ekleyin
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Bilinen { $breachCount } ihlalde yer alıyor.
       *[other] Bilinen { $breachCount } ihlalde yer alıyor.
    }
check-for-breaches = İhlalleri kontrol et
find-out-what-hackers-know = Hacker’ların sizin hakkınızda neler bildiklerini öğrenin, onların bir adım önüne geçin.
get-email-alerts = Güvende kalın: Bilgileriniz yeni bir ihlalde yer alırsa e-posta uyarıları alın
search-for-your-email = 2007’ye uzanan bilindik veri ihlallerinde e-posta adresinizi arayın.
back-to-top = Başa dön
comm-opt-0 = Aşağıdaki e-posta adreslerimden birisi bir veri ihlalinde tespit edilirse bana e-posta gönder.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Tüm ihlal uyarılarını { $primaryEmail } adresine gönder.
stop-monitoring-this = Bu e-postayı izlemeyi durdur.
resend-verification = Doğrulama e-postasını yeniden gönder
add-new-email = Yeni e-posta adresi ekle
send-verification = Doğrulama bağlantısını gönder
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = İhlal özeti
show-breaches-for-this-email = Bu e-postayı içeren tüm ihlalleri göster.
link-change-primary = Birinci e-posta adresini değiştir
remove-fxm = { -product-name }’ü kaldır
remove-fxm-blurb = { -product-name } bildirimlerini kapatın. { -brand-fxa } etkin kalacaktır ve diğer hesabınızla ilişkili durumlardan haberdar olabileceksiniz.
# Button title
manage-email-addresses = E-posta adreslerini yönet
# Link title
latest-breach-link = Bu ihlale dahil olup olmadığınızı öğrenin

## Variables:
##   $userName (String) - Username

welcome-back = Yeniden hoş geldin { $userName }!
welcome-user = Hoş geldin { $userName }!

##

breach-alert-subject = { -product-name } yeni bir veri ihlalinde e-posta adresinizi buldu
your-info-was-discovered-headline = Bilgileriniz yeni bir veri ihlalinde tespit edildi.
your-info-was-discovered-blurb = E-posta adresiniz bir veri ihlalinde karşımıza çıkarsa size haber vermemiz için { -product-name }’e kaydolmuştunuz. İşte bu ihlal hakkında öğrendiklerimiz…
what-to-do-after-breach = Veri ihlalinden sonra ne yapılmalı?
ba-next-step-1 = Parolanızı güçlü ve benzersiz bir parolayla değiştirin.
ba-next-step-blurb-1 =
    Güçlü bir parola büyük ve küçük harflerin, özel karakterlerin ve
    rakamların birleşiminden oluşur. Adresiniz, doğum tarihiniz ve
    akrabalarınızın adları gibi kişisel bilgileri içermez.
ba-next-step-2 = Ele geçirilen parolayı kullanmayı tamamen bırakın.
ba-next-step-blurb-2 = Siber suçlular dark web'de parolanızı bulabilir ve bu parolayı diğer hesaplarınıza giriş yapmak için kullanabilirler. Hesaplarınızı korumanın en iyi yolu her biri için benzersiz parolalar kullanmaktır.
ba-next-step-3 = Daha iyi parolalar oluşturma ve onları güvende tutma konusunda yardım alın.
ba-next-step-blurb-3 = Güçlü ve benzersiz parolalar oluşturmak için bir parola yöneticisi kullanın. Parola yöneticileri tüm hesaplarını güvenli bir şekilde depolar, böylece tüm cihazlarınızda onlara erişebilirsiniz.
faq1 = Bu şirketi veya web sitesini tanımıyorum. Neden bu ihlalde yer alıyorum?
faq2 = Bu ihlali bana bildirmeniz neden bu kadar uzun sürdü?
faq3 = Bu e-postanın gerçekten { -product-name } tarafından gönderildiğini nasıl anlayabilirim?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } YENİ İHLAL BULUNDU
       *[other] { $breachCount } YENİ İHLAL BULUNDU
    }
sign-up-headline-1 = { -brand-fxa } ile düzenli uyarılar alabilirsiniz.
account-not-required = { -brand-fxa } için { -brand-name } tarayıcısı gerekmez. Size { -brand-Mozilla } hizmetleri hakkında bilgi gönderebiliriz.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Bilgileriniz { $breachName } ihlalinde açığa çıktı mı?
fb-not-comp = Bu e-posta { $breachName } ihlalinde yer almıyor.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Ancak başka { $breachCount } ihlalde yer alıyor.
       *[other] Ancak başka { $breachCount } ihlalde yer alıyor.
    }
fb-comp-only = Bu e-posta adresi { $breachName } ihlalinde yer alıyor.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Bu e-posta adresi { $breachName } dahil { $breachCount } başka bilinen ihlalde bulundu.
       *[other] Bu e-posta adresi { $breachName } dahil { $breachCount } başka bilinen ihlalde bulundu.
    }

##

no-other-breaches-found = Temel aramada başka bir ihlal bulunamadı.
no-results-blurb = Üzgünüz, bu ihlal veritabanımızda yok.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note = <span>E-posta adresiniz bu sızıntıda yer almıyor ama telefon numaranız yine de ele geçirilmiş olabilir.</span> Facebook sızıntısında ele geçirilen bazı hesaplarda e-posta adresleri yer almamasına rağmen telefon numaraları ve başka kişisel bilgiler yer alıyordu. Daha önce Facebook hesabı açtıysanız -şu anda kullanmıyor olsanız bile- kendini korumak için şu adımları atmanızı öneririz
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span><a>Facebook profilinizdeki</a> bilgilerinizi "Sadece ben" veya herkese açık olmayan bir ayara ayarlayın.</span>
facebook-breach-what-to-do-1-copy = Bu sızıntı sırasında hacker’lar “herkese açık” veya “arkadaşlarla paylaşıldı” olarak ayarlanmış profil bilgilerini ele geçirdi. Bu bilgiler, başka verilerle bir araya getirilerek daha fazla kişisel bilginize veya hesabınıza ulaşmak için kullanılabilir.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>SIM değişikliği saldırılarını önlemek için <a>mobil operatör hesaplarınızdaki</a> parolanızı, PIN'inizi veya diğer güvenlik bilgilerini değiştirin.</span>
facebook-breach-what-to-do-2-copy = SIM değiş tokuşu (SIM-jacking), hacker’ın telefon numaralarını, doğum tarihini ve başka bilgileri kullanarak bir kişinin telefon numarasını ele geçirmesidir. Bu işlemin ardından e-posta, sosyal medya ve hatta banka hesapları bile hack’lenebilir.
facebook-breach-what-to-do-3 = Diğer önerilerimizi Facebook sızıntı sayfamızda görebilirsiniz
# "Appears in-page as: Showing: All Breaches"
currently-showing = Gösterilen:

## Updated error messages

error-bot-headline = Arama geçici olarak kullanılamıyor
error-bot-blurb = Kısa süre içerisinde çok fazla e-posta adresi sorguladığınız için bot olabileceğinizden şüphelendik. Şimdilik yeni sorgulama yapmanız engellendi. Daha sonra tekrar deneyebilirsiniz.
error-csrf-headline = Oturum zaman aşımına uğradı
error-csrf-blurb = Tarayıcınızın geri düğmesine tıklayın, sayfayı tazeleyin ve tekrar deneyin.
error-invalid-unsub = { -product-name } uyarılarından ayrılma
error-invalid-unsub-blurb = Abonelikten çıkmak için size gönderilen { -product-name } e-postalarından birini kullanmalısınız. Gelen kutunuzda { -brand-team-email } tarafından gönderilen iletilerden birini bulup e-postanın altındaki abonelikten çıkma bağlantısına tıklayın.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] e-posta adresi izleniyor
       *[other] e-posta adresi izleniyor
    }
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
# Button
see-additional-breaches = Diğer ihlallere bakın
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Bu e-posta, bilinen 1 veri ihlalinde yer alıyor.
       *[other] Bu e-posta, bilinen { $breachCount } veri ihlalinde yer alıyor.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Sonuçlar: { $userEmail }
other-monitored-emails = İzlenen diğer e-postalar
email-verification-required = E-posta doğrulaması gerekiyor
fxa-primary-email = { -brand-fxa } e-postası - birinci
what-is-a-website-breach = Web sitesi ihlali nedir?
website-breach-blurb = Siber suçlular çevrimiçi hesaplardan kişisel bilgileri çaldığında, kopyaladığında veya ifşa ettiğinde web sitesinde veri ihlali meydana gelir. Genellikle hacker'ların web sitesinin güvenliğinde zayıf bir nokta bulması sonucunda oluşur. Hesap bilgileri kazayla sızdırıldığında da ihlaller meydana gelebilir.
security-tips-headline = Hacker’lardan korunmanız için güvenlik ipuçları
steps-to-protect = Çevrimiçi kimliğinizi korumak için yapmanız gerekenler
take-further-steps = Kimliğinizi korumak için birkaç adım daha atın
alert-about-new-breaches = Yeni ihlaller yaşandığında beni uyar
see-if-youve-been-part = Veri ihlallerinde verileriniz çalınmış olabilir mi? Öğrenin.
get-ongoing-breach-monitoring = İstediğiniz sayıda e-posta adresinin ihlallerini sürekli olarak takip edin.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Öğrenin
new-unsub-error = { -product-name } tarafından gönderilen e-postalardaki linkleri kullanarak üyelikten çıkabilirsiniz.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Ancak başka { $breachCount } ihlalde yer alıyor.
       *[other] Ancak başka { $breachCount } ihlalde yer alıyor.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Ek bilgiler:
# Title
email-addresses-title = E-posta adresi
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Genel Bakış
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = { $breachDate } tarihinde { $breachTitle } bir veri ihlaline uğradı. İhlal keşfedildikten ve doğrulandıktan sonra { $addedDate } tarihinde veritabanımıza eklendi.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } tercihleri
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = { $userEmail } olarak giriş yapıldı
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Kategoriye göre filtrele:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menü
to-affected-email = İhlal uyarılarını etkilenen e-posta adresine gönder
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Gizliliğinizi korumanın bir yolu var. { -brand-name }’a katılın.
# Link title
learn-more-link = Daha fazla bilgi alın.
email-sent = E-posta gönderildi!
# Form title
want-to-add = Başka bir e-posta eklemek ister misiniz?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = { $userEmail } adresine gönderilen bağlantıyı onaylarak adresinizi { -product-name }'e ekleyin.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-posta başarıyla doğrulandı!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Bir veri ihlalinde { $email } adresine rastlarsak sizi uyaracağız.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = İhlal izleme için kaydolduğunuz tüm e-postaları görmek ve yönetmek için { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = giriş yapın

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = { $preferencesLink } üzerinden tüm e-postalarınızı yönetebilirsiniz.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = İhlal uyarısı bildirimleri
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Eklenme tarihi:
how-hackers-work-desc = Parolalarınızı siber suçlulardan koruyun çünkü bu onların en çok umursadığı şey.
what-to-do-after-breach-desc = Hesaplarınızı kilitleyerek bilgilerinizin yanlış kişilerin eline geçmesini önleyin.
create-strong-passwords-desc = Güçlü, güvenli ve tahmin etmesi zor parolalar seçin.
steps-to-protect-desc = Sık karşılaşılan tehditlerin farkında olun ve nelere dikkat etmeniz gerektiğini öğrenin.
five-myths-desc = Hacker'ların işini kolaylaştıran kötü parola alışkanlıklarından kaçınmayı öğrenin.
take-further-steps-desc = Mali kaybı önlemek üzere kimlik hırsızlığı risklerini nasıl azaltabileceğinizi öğrenin.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Değişiklikler kaydedildi!
# Section headline
rec-section-headline = Bu ihlalle ilgili ne yapmalısınız?
rec-section-subhead = Kişisel bilgilerinizi güvende tutmak ve dijital kimliğinizi korumak için bu adımları uygulamanızı öneririz.
# Section headline
rec-section-headline-no-pw = Kişisel bilgilerinizi korumak için ne yapmalısınız?
rec-section-subhead-no-pw = Bu ihlal kapsamında parolalar ele geçirilmemiş olsa da kişisel bilgilerinizi daha iyi korumak için atabileceğiniz adımlar var.
# Button
see-additional-recs = Ek tavsiyelere bakın

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } bu ihlalde yer alıyor. <a>Şimdi ne yapmalıyım?</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } e-posta adresiniz bu ihlalde yer alıyor. <a>Şimdi ne yapmalıyım?</a>
       *[other] { $numAffectedEmails } e-posta adresiniz bu ihlalde yer alıyor. <a>Şimdi ne yapmalıyım?</a>
    }

##

marking-this-subhead = Bu ihlali çözüldü olarak işaretleyebilirsiniz
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Bu ihlali gidermek için gereken adımları attıktan sonra</span> onu
    "çözüldü" olarak işaretleyebilirsiniz. İhlal ile ilgili bilgilere panonuzdan istediğiniz zaman erişebilirsiniz.
mark-as-resolve-button = Çözüldü olarak işaretle
marked-as-resolved-label = Çözüldü olarak işaretlendi
undo-button = Geri al
confirmation-1-subhead = Güzel! İlk ihlalinizi çözdünüz.
confirmation-1-body = Böyle devam edin. Çözülecek diğer ihlalleri görmek için kontrol panelinize bakın.
confirmation-2-subhead = Hacker’lara kapak olsun!
confirmation-2-body = Çevrimiçi hesaplarınızı korumaya yönelik önemli adımlar atıyorsunuz.
confirmation-3-subhead = Biri daha gitti. İyi iş!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Yeni parolanız benzersiz, güçlü ve tahmin edilmesi zor mu? <a>Öğrenin</a>
generic-confirmation-subhead = Bu ihlal çözüldü olarak işaretlendi
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Kalan ihlali görmek için kontrol panelinize gidin.
       *[other] Kalan tüm ihlalleri görmek için kontrol panelinize gidin.
    }
return-to-breach-details-link = İhlal ayrıntılarına dön
go-to-dashboard-link = Panoya git
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = %{ $percentComplete } tamamlandı
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } çözüldü
       *[other] { $numResolvedBreaches } çözüldü
    }
progress-intro-subhead = Yeni { -product-name } özelliği: İhlalleri "çözüldü" olarak işaretleme
progress-intro-message =
    Bir ihlalle ilgili ayrıntıları inceleyip kişisel bilgilerinizi korumak için gereken adımları attıktan sonra 
    o ihlali “çözüldü” olarak işaretleyebilirsiniz.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numTotalBreaches } ihlalden { $numResolvedBreaches } tanesi çözüldü olarak işaretlendi
       *[other] { $numTotalBreaches } ihlalden { $numResolvedBreaches } tanesi çözüldü olarak işaretlendi
    }
progress-complete = Bilinen tüm ihlaller çözüldü olarak işaretlendi

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Harika bir başlangıç yaptınız!</span> Atabileceğiniz diğer adımları öğrenmek için 
    kalan ihlallere göz atın.
progress-message-2 =
    <span>Böyle devam edin!</span> Parolalarınızı güncellemek gibi küçük değişiklikler bile 
    kişisel bilgilerinizin güvenliğini sağlamada büyük etki yaratabilir.
progress-message-3 = <span>Bu ihlalleri çözmede iyi iş çıkardınız!</span> Böyle devam edin. Birkaç tane daha var.
progress-message-4 = <span>Neredeyse bitti!</span> Bitiş çizgisine yakınsınız.
progress-complete-message = <span>Hoşunuza gitti mi?</span> Vaktiniz varsa şimdi diğer hesaplarınızı da daha güçlü parolalarla güncellemenizi öneririz.

##

resolve-this-breach-link = Bu ihlali çöz
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Çözüldü olarak işaretlendi:
hide-resolved-button = Çözülenleri gizle
show-resolved-button = Çözülenleri göster
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] parola çözülmemiş ihlallerde ele geçirildi
       *[other] parola çözülmemiş ihlallerde ele geçirildi
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] veri ihlali “çözüldü” olarak işaretlendi
       *[other] veri ihlali “çözüldü” olarak işaretlendi
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Yeni
mobile-promo-headline = { -brand-name } uygulamasını telefon ve tabletinize indirin
mobile-promo-body = Her yerde hızlı, gizli ve güvenli gezinti. { -brand-name } uygulamasını Google Play ve App Store’dan indirebilirsiniz.
mobile-promo-cta = Android ve iOS için { -brand-name } uygulamasını indirin
promo-lockwise-headline = Parolalarınızı yanınızda taşıyın
lockwise-promo-body = Hesaplarınızı tüm cihazlarınızla eşitleyin. Onlara bilgisayarınızdan, telefonunuzdan veya tabletinizden güvenli bir şekilde erişin.
promo-lockwise-cta = { -brand-lockwise } kullanın
fpn-promo-headline = Web sitelerinden ve takip kodlarından konumunuzu saklayın
promo-fpn-body = { -brand-fpn } gerçek IP adresinizi maskeleyerek, reklamlara dayalı profilinizi oluşturan web sitelerinden ve veri toplayıcılarından sizi kurtarır.
promo-fpn-cta = { -brand-fpn } kullanın
monitor-promo-headline = Yeni veri ihlallerinden haberiniz olsun
monitor-promo-body = Kişisel bilgileriniz yeni bir veri ihlalinde ele geçerilirse size haber verelim.
ecosystem-promo-headline = Gizliliğinize önem veren ürünlerle internetteki yaşamınızı koruyun
ecosystem-promo-body = Tüm { -brand-name } ürünleri Kişisel Veri Sözümüzü yerine getirir: Daha az veri topla. Güvenle sakla. Sır tutma.
promo-ecosystem-cta = Tüm ürünleri görün
steps-to-resolve-headline = Bu ihlali giderme adımları
vpn-promo-headline = Şimdi çevrimiçi güvenliğinizi artırmanın tam zamanı.
vpn-promo-copy = { -brand-Mozilla } VPN, internet bağlantınızı hacker'lardan ve casuslardan korumaya yardımcı olur.
vpn-promo-cta = { -brand-mozilla-vpn }’i indirin
vpn-promo-headline-new = Yıllık abonelikle %50 tasarruf edin
vpn-promo-copy-new = Çevrimiçi verilerinizi koruyun. Size en uygun VPN abonelik paketini seçin.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Konumunuz: { $ip-location }
vpn-banner-protect-yourself-with-vpn = { -brand-mozilla-vpn } ile <em>kendinizi koruyun</em>.
vpn-banner-protected-with-vpn = { -brand-mozilla-vpn } ile <em>korunuyorsunuz</em>.
vpn-banner-title-1 = Koruma altındasınız. { -brand-mozilla-vpn } kullandığınız için teşekkürler.
vpn-banner-title-2 = VPN kullanmıyorsanız konumunuz takip edilebilir.
vpn-banner-subtitle-2 = 3 adımda konumunuzu gizleyin ve güvenle gezinin
vpn-banner-status-protected = Mevcut durum: <em>Korunuyor ✓</em>
vpn-banner-status-not-protected = Mevcut durum: <em>Korunmuyor ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP adresi: { $ip-address }
vpn-banner-step-1 = { -brand-mozilla-vpn }’e abone olun
vpn-banner-step-2 = VPN konumunu seçin
vpn-banner-step-3 = VPN’i etkinleştirin ve güvenle gezinin
vpn-banner-cta = { -brand-mozilla-vpn }’i edinin
# button to expand panel
vpn-banner-cta-expand = Genişlet
# button to close panel
vpn-banner-cta-close = Kapat

## Relay and VPN educational/ad units

ad-unit-relay-cta = { -brand-relay } hakkında bilgi alın
ad-unit-vpn-cta = { -brand-mozilla-vpn } hakkında bilgi alın
# ad 1 heading
ad-unit-1-how-do-you-keep = E-posta adresinizi nasıl gizli tutabilirsiniz?
# ad 2 heading
ad-unit-2-do-you-worry = Halka açık Wi-Fi ağlarının güvenliğinden endişeleniyor musunuz?
# ad 3 heading
ad-unit-3-stay-in-the-game = Oyunda kalın!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn }, oyun oynarken veya film izlerken güvenli bir stabil bağlantı kurmanıza olanak tanır.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Hız sınırlarına takılmayın
# ad 3 list item 2
ad-unit-3-be-anywhere = Dünyanın her yerinde olun
# ad 3 list item 3
ad-unit-3-access-more = Daha fazlasına erişin
# ad 4 heading
ad-unit-4-shopping-with = E-posta maskeleri ile alışveriş
ad-unit-4-want-to-buy = Çevrimiçi bir şey satın almak istiyor fakat mağazayı bilmiyor veya mağazaya tam olarak güvenmiyor musunuz?
ad-unit-4-shop-online = İnternetten alışveriş yaparken e-posta maskesi kullanın. Onay mesajı gerçek e-postanıza iletildikten sonra maskeyi kolayca kapatabilirsiniz.
# ad 5 heading
ad-unit-5-on-the-go = { -brand-relay } her yerde
ad-unit-5-instantly-make = Nerede olursanız olun, istediğiniz zaman özel e-posta maskeleri oluşturun!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Dışarıdan bağlanın
ad-unit-5-privately-sign-in = Oturduğunuz kafenin ağına veya herkese açık Wi-Fi ağlarına giriş yaparken kimliğinizi açığa çıkarmamak için e-posta maskenizi kullanabilirsiniz
# ad 5 subheading 2
ad-unit-5-email-receipts = Faturalar e-postanıza gelsin
ad-unit-5-share-custom-email = Gerçek e-posta adresinizi paylaşmadan, faturalarınızı özel e-posta maskenize gelmesini sağlayabilirsiniz
# ad 5 subheading 3
ad-unit-5-use-on-phone = Telefonunuzda kullanın
ad-unit-5-no-matter-where = Nerede olursanız olun, yapmak istediğiniz her şey için saniyeler içinde özel bir e-posta maskesi oluşturabilirsiniz
# ad 6 heading
ad-unit-6-worry-free = Kaydolurken endişe etmeyin
ad-unit-6-want-to-start = Gelen kutunuzu spam mesajlarla doldurmadan bir siteye üye olmak, bir davete yanıt vermek veya promosyon kodu almak mı istiyorsunuz?
ad-unit-6-before-you-complete = Siteye kaydolurken bilgilerinizi korumak ve gelen kutunuzun kontrolünü elinizde tutmak için gerçek e-posta adresiniz yerine e-posta maskenizi kullanabilirsiniz.

# Monitor V2


## The following messages are brands and should be kept entirely in English

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

site-nav-breaches-link = Veri ihlallerini çöz
site-nav-settings-link = Ayarlar
site-nav-help-link = Yardım ve destek
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Diğer güvenlik araçlarımızı deneyin:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
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

# Obsolete
menu-button-title = Kullanıcı menüsü
# Obsolete
menu-button-alt = Kullanıcı menüsünü aç
# Obsolete
menu-list-accessible-label = Hesap menüsü
# Obsolete
menu-item-fxa-2 = { -brand-mozilla-account }nızı yönetin
# Obsolete
menu-item-settings = Ayarlar
# Obsolete
menu-item-help = Yardım ve destek
# Obsolete
menu-item-logout = Çıkış yap
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

mozilla = { -brand-Mozilla }
terms-of-service = Kullanım Koşulları
privacy-notice = Gizlilik Bildirimi
github = { -brand-github }
footer-nav-all-breaches = Tüm ihlaller
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
error-page-error-other-copy = Lütfen daha sonra tekrar deneyin

## Breach overview page

all-breaches-headline-2 = { -brand-fx-monitor } tarafından tespit edilen tüm ihlaller
all-breaches-lead = Kişisel bilgilerinizin ele geçirilip geçirilmediğini öğrenmek için bilinen tüm veri ihlallerini izliyoruz. İşte 2007’den beri bildirilen tüm ihlallerin tam listesi.
search-breaches = İhlallerde ara
# the kind of user data exposed to hackers in data breach.
exposed-data = Ele geçirilen veriler:

## Public breach detail page

find-out-if-2 = Bu ihlale karışıp karışmadığınızı öğrenin
find-out-if-description = Bu ihlalde e-posta adresinizin ele geçirilip geçirilmediğini hızlıca görmenize ve bundan sonra ne yapacağınızı anlamanıza yardımcı olacağız.
breach-detail-cta-signup = İhlalleri kontrol et

## Floating banner

floating-banner-text = { -brand-Mozilla }’dan haberler ve ipuçlarıyla çevrimiçi güvenliğinizi artırın.
floating-banner-link-label = Kaydol
floating-banner-dismiss-button-label = Gerek yok

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Yeni isim, yeni görünüm ve <b>gizliliğinizi geri almanın</b> yeni yolları.
banner-monitor-rebrand-dismiss-button-label = Tamam
banner-monitor-rebrand-dismiss-button-tooltip = Kapat
loading-accessibility = Yükleniyor
