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
pwt-headline-1 = Her hesap için farklı bir parola kullanın
pwt-headline-2 = Güçlü, tahmin edilmesi zor parolalar oluşturun
pwt-summary-2 =
    Hacker’lar parolalarınızı tahmin etmek için sık kullanılan binlerce parolayı kullanır.
    Parolanız ne kadar uzun ve karmaşıksa tahmin edilmesi de o kadar zor olacaktır.
pwt-headline-3 = Güvenlik soruları da parolalar kadar önemlidir
pwt-headline-4 = Parolalarınızı hatırlamak için yardım alın
pwt-headline-6 = { -product-name-nowrap } uyarılarına kaydolun
landing-headline = Hacker’lardan korunmaya herkesin hakkı var.
landing-blurb =
    { -product-name-nowrap }, kişisel bilgilerinizi güvende tutacak araçlarla sizi destekliyor.
    Hacker’ların hakkınızda neler bildiğini öğrenin, onların bir adım önünde kalın.
scan-placeholder = E-posta adresinizi yazın
scan-privacy = E-postanız kaydedilmeyecektir.
scan-submit = E-postanızı arayın
scan-another-email = Başka bir e-posta adresini tara
scan-featuredbreach-label = <span class="bold"> { $featuredBreach } </span> hesabınız ele geçirilmiş olabilir mi? Hemen öğrenin.
scan-error = Geçerli bir e-posta adresi olmalı.
download-firefox-bar-blurb = { -product-name-nowrap }, <span class="nowrap">yenilenen { -brand-name }</span> tarafından sunulmaktadır.
download-firefox-bar-link = { -brand-name }’u hemen indirebilirsiniz
download-firefox-banner-blurb = Tarayıcının kontrolünü eline al
download-firefox-banner-button = { -brand-name }’u indir
signup-modal-headline = { -product-name-nowrap }’e kaydolun
signup-modal-close = Kapat
get-your-report = Raporunuzu alın
signup-modal-verify-headline = Aboneliğinizi doğrulayın
signup-modal-verify-expiration = Bu bağlantı 24 saatten sonra kullanılamaz.
signup-modal-verify-resend = Gelen kutusunda da spam klasöründe de yok mu? Yeniden gönder.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Gönderildi!
signup-with-fxa = { -brand-name } Hesabı ile kaydolun
form-signup-placeholder = E-posta adresinizi yazın
form-signup-checkbox = { -brand-Mozilla } ve { -brand-name } ile ilgili güncel haberleri alın.
sign-up = Kaydol
form-signup-error = Geçerli bir e-posta adresi olmalı
no-breaches-headline = Şimdilik her şey yolunda.
show-more-breaches = Devamını göster
# breach-date = the calendar date a particular data theft occurred. 
breach-date = İhlal tarihi:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Ele geçirilen hesaplar:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Ele geçirilen veriler:
confirmed = Onaylandı!<br />Abone oldunuz!
unsub-headline = { -product-name-nowrap } aboneliğinden çık
unsub-button = Abonelikten çık
unsub-survey-headline = Artık abone değilsiniz.
unsub-reason-1 = Uyarıların verilerimi daha güvenli hale getirmediğini düşünüyorum
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
# Breach data provided by Have I Been Pwned.
hibp-attribution = İhlal verileri { $hibp-link } tarafından sağlanmaktadır
