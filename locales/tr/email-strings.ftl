# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } Raporu
report-date = Rapor tarihi:
email-address = E-posta adresi:

# A link to legal information about mozilla products.
legal = Hukuki Bilgiler

# Unsubscribe link in email.
email-unsub-link = Abonelikten çık

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Bu e-postayı { -product-name } uyarılarına kaydolduğunuz için alıyorsunuz. Artık bu e-postaları istemiyor musunuz? { $unsubLink }. Bu otomatik bir e-postadır. Destek için { $faqLink } sayfasını ziyaret edebilirsiniz.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Bu e-postayı { -product-name } uyarılarına kaydolduğunuz için alıyorsunuz.
    Bu otomatik bir e-postadır. Destek için { $faqLink } sayfasını ziyaret edebilirsiniz.

# Button text
verify-email-cta = E-postayı doğrula

# Button text
see-all-breaches = Tüm veri ihlallerini gör

# Headline of verification email
email-link-expires = Bu bağlantı 24 saat sonra geçersiz hale gelir
email-verify-blurb = E-posta adresinizi onaylayarak { -product-name }'e katılın ve veri ihlali bildirimlerine kaydolun.

# Email headline
email-found-breaches-hl = Geçmiş veri ihlallerinizin özeti aşağıdadır

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = { $userEmail } ihlal özeti

# Email headline
email-no-breaches-hl = { $userEmail } bilinen 0 veri ihlalinde bulundu

# Email headline
email-alert-hl = { $userEmail } yeni bir veri ihlalinde yer alıyor

##

# Subject line of email
email-subject-found-breaches = { -product-name } aşağıdaki veri ihlallerinde bilgilerinizi buldu

# Subject line of email
email-subject-no-breaches = { -product-name } bilinen veri ihlali bulamadı

# Subject line of email
email-subject-verify = { -product-name } e-postanızı doğrulayın

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = { $fxmLink } hakkında daha fazla bilgi alın

email-sensitive-disclaimer = Bu veri ihlalinin hassaslığından dolayı olaya dahil olan e-posta adreslerini herkes tarayamaz. Bu e-posta adresinin onaylanmış sahibi olduğunuz için bu bildirimi aldınız.

fxm-warns-you-no-breaches = { -product-name } sizi kişisel bilgilerinizin dahil olduğu veri ihlalleri konusunda uyarır. Şimdilik herhangi bir veri ihlali bulunamadı. E-posta adresiniz yeni bir veri ihlalinde yer alırsa size bildirim göndereceğiz.

fxm-warns-you-found-breaches = { -product-name } sizi kişisel bilgilerinizin dahil olduğu veri ihlalleri konusunda uyarır. E-posta adresinizin yeni bir veri ihlalinde bulunması durumunda bildirim almak için kaydoldunuz.

email-breach-alert-blurb = { -product-name } sizi kişisel bilgilerinizin dahil olduğu veri ihlalleri konusunda uyarır. Bir şirketin yaşadığı veri ihlali konusunda bilgi aldık.

# Section headline
monitor-another-email = Başka bir e-postayı izlemek ister misiniz?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Bu otomatik e-postayı { -product-name } abonesi olduğunuz için alıyorsunuz. <br>E-posta tercihlerinizi istediğiniz zaman <a { $unsubscribe-link-attr }>buradan</a> değiştirebilirsiniz.
# Have I Been Pwned attribution
email-2022-hibp-attribution = İhlal verileri <a { $hibp-link-attr }>{ -brand-HIBP }</a> tarafından sağlanmaktadır

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Çözümlenmemiş ihlalleriniz var
email-unresolved-subhead = E-postanız açığa çıktı. <br>{ -product-name } ile hemen düzeltin.
email-is-affected = { $email-address } adresiniz en az bir veri ihlalinden etkileniyor
email-more-detail = İhlallerinizle ilgili daha fazla ayrıntı (ne zaman meydana geldiği ve hangi verilerin ifşa edildiği dahil) görmek için hemen { -product-name }’de oturum açın ve e-postanız bir veri ihlaline maruz kaldığında ne yapmanız gerektiğini öğrenin.
email-breach-status = İhlal durumu
# table row 1 label
email-monitored = İzlenen toplam e-posta sayısı:
# table row 2 label
email-breach-total = Toplam ihlal sayısı:
# table row 3 label
email-resolved = Çözülen ihlaller:
# table row 4 label
email-unresolved = Çözülmemiş ihlaller:
email-resolve-cta = İhlalleri çöz

## Verification email

email-verify-heading = Verilerinizi korumaya hemen şimdi başlayın
email-verify-subhead = Veri ihlallerinin ardından verilerinizi korumaya başlamak için e-postanızı doğrulayın.
email-verify-simply-click = Hesabınızı doğrulamak için aşağıdaki bağlantıya tıklamanız yeterli.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = İşte veri ihlali özetiniz
email-breach-detected = { $email-address } hesabınızın arama sonuçları, e-postanızın açığa çıkmış olabileceğini tespit etti. Bu ihlali çözmek için hemen harekete geçmenizi öneririz.
email-no-breach-detected = Her şey yolunda! { $email-address } e-postanızı etkileyen hiçbir veri ihlali bulamadık.
email-dashboard-cta = Panoya git

## Breach alert

email-may-have-been-exposed = E-postanız bir veri ihlali nedeniyle açığa çıkmış olabilir
email-spotted-new-breach = Yeni bir veri ihlali tespit ettik
