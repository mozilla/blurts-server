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
layout-support = Destek
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Firefox uyarıları hakkında
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Görüş bildir
terms-and-privacy = Şartlar ve gizlilik
error-not-subscribed = Bu e-posta adresi { -product-name }’e abone değil.
error-hibp-throttled = Çok fazla { -brand-HIBP } bağlantısı.
error-hibp-connect = { -brand-HIBP } bağlantısı kurulamadı.
error-hibp-load-breaches = İhlaller yüklenemedi.
hibp-notify-email-subject = { -product-name } Uyarı: Hesabınız bir güvenlik ihlali kapsamında yer alıyor.
home-title = { -product-name }
home-not-found = Sayfa bulunamadı.
oauth-invalid-session = Geçersiz oturum
oauth-confirmed-title = { -product-name }: Abone oldunuz
scan-title = { -product-name }: Tarama Sonuçları
user-add-invalid-email = Geçersiz e-posta
user-add-email-verify-subject = { -product-name } aboneliğinizi doğrulayın.
user-add-title = { -product-name } : E-postayı onaylayın
error-headline = Hata
user-verify-token-error = Doğrulama jetonu gerekli.
user-verify-email-report-subject = { -product-name } raporunuz
user-verify-title = { -product-name } : Abone olundu
user-unsubscribe-token-error = Abonelikten çıkmak bir jeton gerektirir.
user-unsubscribe-token-email-error = Abonelikten çıkmak bir jeton ve emailHash gerektirir.
user-unsubscribe-title = { -product-name } : Abonelikten çık
user-unsubscribe-survey-title = { -product-name } : Abonelikten Çıkma Anketi
user-unsubscribed-title = { -product-name } : Abonelikten çıkıldı

## Password Tips

pwt-section-headline = Daha Güçlü Parolalar = Daha İyi Koruma
pwt-section-subhead = Parolalarınız ne kadar güvendeyse kişisel bilgileriniz de o kadar güvendedir.
pwt-section-blurb =
    Parolalarınız yalnızca hesaplarınızı korumakla kalmaz, hesaplarınıza kayıtlı tüm kişisel bilgilerinizi de korur.
    Hacker’lar, her yerde aynı parolayı kullanmak veya sık kullanılan parolaları kullanmak (p@r0la) gibi kötü alışkanlıklardan faydalanır. Böylece bir hesabı ele geçirdikten sonra diğer hesapları da ele geçirebilirler. Hesaplarınızı daha iyi korumanın yollarını aşağıda anlatıyoruz.
pwt-headline-1 = Her hesap için farklı bir parola kullanın
pwt-summary-1 =
    Her yerde aynı parolayı kullanırsanız kimlik hırsızlarına kapıyı açık bırakmış olursunuz.
    Tek bir parolanızı ele geçiren herkes tüm hesaplarınıza giriş yapabilir.
pwt-headline-2 = Güçlü, tahmin edilmesi zor parolalar oluşturun
pwt-summary-2 =
    Hacker’lar parolalarınızı tahmin etmek için sık kullanılan binlerce parolayı kullanır.
    Parolanız ne kadar uzun ve karmaşıksa tahmin edilmesi de o kadar zor olacaktır.
pwt-headline-3 = Güvenlik soruları da parolalar kadar önemlidir
pwt-summary-3 =
    Güvenlik sorularına gerçekten doğru yanıt vermeniz gerekmez. Önemli olan, yazdığınız yanıtı daha sonra hatırlamanızdır. 
    Uzun ve rasgele yanıtlar oluşturup bu yanıtlarınızı güvenli bir yerde saklayın.
pwt-headline-4 = Parolalarınızı hatırlamak için yardım alın
pwt-summary-4 =
    1Password, LastPass, Dashlane ve Bitwarden gibi parola yöneticileri güçlü ve benzersiz parolalar üretir.
    Ayrıca parolalarınızı güvenli bir şekilde depolayarak web sitelerindeki parola alanlarını otomatik doldurur.
pwt-headline-5 = İki aşamalı kimlik doğrulamayla güvenliği artırın
pwt-summary-5 =
    İki aşamalı doğrulamada (2FA) hesabınıza girmek için ek bir bilgi (kısa mesajla gönderilen tek kullanımlık kod gibi) gerekir.
    Böylece, birisi parolanıza sahip olsa bile hesabınıza giremez.
pwt-headline-6 = { -product-name-nowrap } uyarılarına kaydolun
pwt-summary-6 =
    Web sitelerinin karşılaştığı veri ihlalleri sürekli artıyor. Veritabanımıza yeni bir ihlal eklendiği anda
    { -product-name-nowrap } size uyarı gönderir. Böylece hemen eyleme geçip hesabınızı koruyabilirsiniz.
landing-headline = Hacker’lardan korunmaya herkesin hakkı var.
landing-blurb =
    { -product-name-nowrap }, kişisel bilgilerinizi güvende tutacak araçlarla sizi destekliyor.
    Hacker’ların hakkınızda neler bildiğini öğrenin, onların bir adım önünde kalın.
scan-label = Veri ihlallerine karışıp karışmadığınız görün.
scan-placeholder = E-posta adresinizi yazın
scan-privacy = E-postanız kaydedilmeyecektir.
scan-submit = E-postamı ara
scan-another-email = Başka bir e-posta adresini tara
scan-featuredbreach-label = <span class="bold"> { $featuredBreach } </span> hesabınız ele geçirilmiş olabilir mi? Hemen öğrenin.
sensitive-breach-email-required = By ihlal hassas bilgiler içeriyor. O yüzden e-postanızı doğrulamanız gerekiyor.
scan-error = Geçerli bir e-posta adresi olmalı.
signup-banner-headline = { -product-name-nowrap }, çevrimiçi hesaplarınıza yönelik tehditleri algılar.
signup-banner-blurb =
    Ayrıntılı { -product-name-nowrap } raporunuz, hangi çevrimiçi hesaplarınızdaki bilgilerin sızdırıldığını veya çalındığını gösterir.
    Ayrıca, hesaplarınız yeni web sitesi güvenlik ihlallerinde yer alırsa sizi uyarırız.
download-firefox-bar-blurb = { -product-name-nowrap }, <span class="nowrap">yenilenen { -brand-name }</span> tarafından sunulmaktadır.
download-firefox-bar-link = { -brand-name }’u hemen indirebilirsiniz
download-firefox-banner-blurb = Tarayıcının kontrolünü eline al
download-firefox-banner-button = { -brand-name }’u indir
signup-modal-headline = { -product-name-nowrap }’e kaydolun
signup-modal-blurb = Eksiksiz raporunuz, yeni ihlal uyarıları ve güvenlikle ilgili ipuçları için { -product-name-nowrap }’e kaydolun.
signup-modal-close = Kapat
get-your-report = Raporunuzu alın
signup-modal-verify-headline = Aboneliğinizi doğrulayın
signup-modal-verify-blurb = <span id="submitted-email" class="medium"></span> adresine bir doğrulama bağlantısı gönderdik.
signup-modal-verify-expiration = Bu bağlantı 24 saatten sonra kullanılamaz.
signup-modal-verify-resend = Gelen kutusunda da spam klasöründe de yok mu? Yeniden gönder.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Gönderildi!
signup-with-fxa = { -brand-name } Hesabı ile kaydolun
form-signup-placeholder = E-posta adresinizi yazın
form-signup-checkbox = { -brand-Mozilla } ve { -brand-name } ile ilgili güncel haberleri de almak istiyorum.
sign-up = Kaydol
form-signup-error = Geçerli bir e-posta adresi olmalı
no-breaches-headline = Şimdilik her şey yolunda.
found-breaches-headline = Bilgileriniz bir veri ihlali kapsamında ele geçirilmiş.
no-breaches =
    E-posta adresiniz temel taramamızda görünmedi.
    Bu iyi haber ama veri ihlalleri her zaman yaşanabilir ve yapabileceğiniz başka şeyler de var.
    Eksiksiz raporunuz, yeni ihlal uyarıları ve parolalarınızı korumaya dair ipuçları için { -product-name-nowrap }’e abone olabilirsiniz.
featured-breach-results =
    { $breachCount ->
        [0] Hesabınız <span class="bold">{ $featuredBreach }</span> ihlalinde yer alıyor ama başka bilinen veri ihallerinde görünmüyor.
        [one] Hesabınız <span class="bold">{ $featuredBreach }</span> ihlalinde ve bir ihlalde daha yer alıyor.
       *[other] Hesabınız <span class="bold">{ $featuredBreach }</span> ihlalinde ve { $breachCount } ihlalde daha yer alıyor.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Hesabınız <span class="bold">{ $featuredBreach }</span> ihlalinde yer almıyor ama başka bir ihlalde yer alıyor.
       *[other] Hesabınız <span class="bold">{ $featuredBreach }</span> ihlalinde yer almıyor ama başka { $breachCount } ihlalde yer alıyor.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Hesabınız { $breachCount } ihlalde yer alıyor.
       *[other] E-posta adresinizle ilişkili hesaplar aşağıdaki { $breachCount } ihlalde yer alıyor.
    }
show-more-breaches = Devamını göster
what-to-do-headline = Bilgileriniz veri ihlaline maruz kaldığında yapmanız gerekenler
what-to-do-subhead-1 = Eski hesaplarınız da dahil olmak üzere parolalarınızı değiştirin
what-to-do-blurb-1 =
    Siteye giriş yapamıyorsanız siteyle iletişim kurarak hesabınızı nasıl kurtarabileceğinizi veya kapatabileceğinizi öğrenin.
    Tanıdık gelmeyen bir hesap mı gördünüz? Sitenin adı değişmiş olabilir veya birisi sizin adınıza hesap açmış olabilir.
what-to-do-subhead-2 = Ele geçirilen bir parolayı başka yerlerde de kullandıysanız hepsini değiştirin
what-to-do-blurb-2 =
    Hacker'lar ele geçirdikleri parolalarınızı kullanarak diğer hesaplarınıza girmeyi de deneyebilir.
    Her web sitesi için, özellikle de banka hesabınız, e-posta hesabınız ve 
    kişisel bilgilerinizi kaydettiğiniz diğer siteler için farklı parolalar kullanın.
what-to-do-subhead-3 = Finansal hesaplarınızı güvenceye almak için ek adımlar atın
what-to-do-blurb-3 =
    Çoğu veri ihlalinde yalnızca e-postalar ve parolalar ele geçirilir ama bazı ihlaller hassas finansal bilgilerinizi de içerebilir. 
    Banka hesabınız veya kredi kartı numaralarınız ele geçirilmişse bankanızı olası sahtekârlıklara karşı uyarın ve 
    kredi kartı hesap özetlerinizde tanıdık gelmeyen harcamalara karşı tetikte olun.
what-to-do-subhead-4 = İyi parolalar oluşturma ve onları güvende tutma konusunda yardım alın.
what-to-do-blurb-4 =
    1Password, LastPass, Dashlane ve Bitwarden gibi parola yöneticileri güçlü parolalar üretir,
    parolalarınızı güvenli bir şekilde depolar ve web sitelerindeki parola alanlarını otomatik doldurur.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = İhlal tarihi:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Ele geçirilen hesap sayısı:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Ele geçirilen veriler:
confirmed = Onaylandı!<br />Abone oldunuz.
confirmed-blurb = { -product-name-nowrap } birazdan size tam raporunuzu gönderecek, yeni veri ihlallerinde hesabınız algılandığında da e-posta uyarısı gönderecek.
confirmed-social-blurb = Sizin verileriniz ele geçirildiyse arkadaşlarınızın, akrabalarınızın ve internetteki tanıdıklarınızın da verileri ele geçirilmiş olabilir. Onları { -product-name-nowrap } hakkında bilgilendirin.
unsub-headline = { -product-name-nowrap } aboneliğinden çık
unsub-blurb = E-posta adresiniz { -product-name-nowrap } listesinden kaldırılacak ve bundan sonraki ihlallerle ilgili uyarı almayacaksınız.
unsub-button = Abonelikten çık
unsub-survey-headline = Artık abone değilsiniz.
unsub-survey-blurb =
    { -product-name-nowrap } aboneliğiniz iptal edildi. Hizmetimizi kullandığınız için teşekkür ederiz. 
    Deneyiminizle ilgili kısa bir soruyu yanıtlamanızı rica ediyoruz.
unsub-survey-form-label = { -product-name-nowrap } uyarıları aboneliğinizi neden iptal ediyorsunuz?
unsub-reason-1 = Uyarıların verilerimi daha güvenli hale getirmediğini düşünüyorum
unsub-reason-2 = { -product-name-nowrap }'den çok fazla e-posta alıyorum
unsub-reason-3 = Hizmeti değerli bulmuyorum
unsub-reason-4 = Hesaplarımı korumak için zaten önlem aldım
unsub-reason-5 = Hesaplarımı izlemek için başka bir hizmet kullanıyorum
unsub-reason-6 = Yukarıdakilerin hiçbiri
unsub-survey-thankyou = Görüşleriniz için teşekkür ederiz.
unsub-survey-error = Lütfen birini seçin.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Paylaş
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweetle
download-firefox-quantum = { -brand-Quantum }’u indir
download-firefox-mobile = Mobil cihazlar için { -brand-name }’u indir
# Features here refers to Firefox browser features. 
features = Özellikler
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Bu içeriğin bazı kısımları &#x24B8; 1998-2018 bireysel mozilla.org gönüllüleri. <br />
    İçerik, <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener"> Creative Commons lisansı</a> ile kullanılabilir.
# Breach data provided by Have I Been Pwned.
hibp-attribution = İhlal verileri { $hibp-link } tarafından sağlanmaktadır
site-description = Veri ihlallerinde hesaplarınız sızdırılmış veya çalınmış olabilir mi? { -product-name } ile öğrenin. Veritabanımızda arama yapın ve uyarılara kaydolun.
confirmation-headline = { -product-name } raporunuz yola çıktı.
confirmation-blurb = Veri ihlalleri herkesin başına gelebilir. Bu siteyi paylaşın ki arkadaşlarınız da internet hesaplarının güvende olup olmadığını öğrensin.
share-email = E-posta
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Diğer
share-twitter = Çoğu kişinin yaklaşık 100 çevrimiçi hesabı var. Hesaplarınızdan birisi veri ihlaline maruz kalmış olabilir mi? Hemen öğrenin.
share-facebook-headline = Verilerinizin çalınıp çalınmadığını öğrenin
share-facebook-blurb = İnternet hesaplarınız veri ihallerine karışmış olabilir mi?
og-site-description = { -product-name } ile verilerinizin çalınıp çalınmadığını öğrenin. Gelecekteki ihlallere yönelik uyarılara kaydolun ve hesaplarınızı güvende tutmaya dair ipuçları alın.
