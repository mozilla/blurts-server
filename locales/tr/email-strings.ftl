# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Firefox Monitor hesabınızı onaylamak için 24 saat içinde “E-postamı doğrula” düğmesine tıklayın. 
    Ardından raporunuzu göndereceğiz.
verify-my-email = E-postamı doğrula
report-scan-another-email = { -product-name }’de başka bir e-posta tara
automated-message = Bu e-posta otomatik olarak gönderilmiştir. Hatalı olduğunu düşünüyorsanız bir şey yapmanıza gerek yoktur.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Bu mesaj, { -product-name } uyarılarına kaydolan { $userEmail } e-posta adresine gönderilmiştir.
unsubscribe-email-link = Artık { -product-name } uyarılarını almak istemiyorsanız abonelikten çıkabilirsiniz.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } Raporu
report-date = Rapor tarihi:
email-address = E-posta adresi:
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Bu e-posta adresini içerdiği bilinen tüm veri ihlallerini sıraladığımız tam { -product-name } raporunuz aşağıdadır.
report-no-breaches =
    E-posta adresiniz bilinen ihlaller veritabanımızda yer almıyor. 
    Ancak her an yeni ihlaller yaşabilir. Kişisel verilerinizi güvende tutmak için aşağıdaki adımları atın.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Şimdi ne yapmalı?
report-headline =
    { $breachCount ->
        [0] Şimdilik her şey yolunda.
        [one] Hesabınız { $breachCount } veri ihlalinde yer alıyor.
       *[other] Hesaplarınız { $breachCount } veri ihlalinde yer alıyor.
    }
report-subhead-no-breaches =
    Hesabınız veri ihlalleri veritabanımızda yer almıyor.
    Bu iyi haber ama yapabileceğiniz birkaç şey daha var.
    Her an yeni veri ihlalleri yaşanabilir, o yüzden parolalarınızı korumayı öğrenmek için okumaya devam edin.
report-subhead-found-breaches = Bu e-posta adresini içerdiği bilinen tüm veri ihlallerini sıraladığımız tam Firefox Monitor raporunuz aşağıdadır.
breach-alert-headline = Hesabınız bir veri ihlali kapsamında yer alıyor.
breach-alert-subhead = Yakın zamanda bildirilen bir veri ihlali, e-posta adresinizi ve aşağıdaki verileri içeriyor
report-pwt-blurb =
    Parolalar o kadar değerlidir ki her gün binlerce çalınıp karaborsada işlem görür veya satılır. 
    Daha güçlü parolalar seçmeniz, hesaplarınızı ve hesaplarınızdaki tüm kişisel bilgileri korur.
report-pwt-headline-1 = Her hesap için farklı bir parola kullanın
report-pwt-summary-1 =
    Her yerde aynı parolayı kullanırsanız hacker’lara kapıyı açık bırakmış olursunuz. 
    Tek bir parolanızı ele geçirdikten sonra tüm hesaplarınıza giriş yapabilirler.
report-pwt-headline-2 = Güçlü, benzersiz parolalar oluşturun
report-pwt-summary-2 =
    Hacker’lar parolalarınızı tahmin etmek için sık kullanılan parola listelerden yararlanır.
    Parolanız ne kadar uzun ve karmaşıksa çalınması da o kadar zor olacaktır.
report-pwt-headline-3 = Güvenlik sorularını da parola gibi düşünün
report-pwt-summary-3 =
    Güvenlik sorularına gerçekten doğru yanıt vermeniz gerekmez. Önemli olan, yazdığınız yanıtı daha sonra hatırlamanızdır. 
    Uzun ve rasgele yanıtlar oluşturup bu yanıtlarınızı güvenli bir yerde saklayın.
report-pwt-headline-4 = Parola yöneticisi kullanın
report-pwt-summary-4 =
    1Password, LastPass, Dashlane ve Bitwarden gibi hizmetler güçlü parolalar oluşturup onları güvenli bir şekilde saklayabilir,
    sitelerdeki parola alanlarını otomatik doldurabilir. Böylece her parolayı ezberlemeniz gerekmez.
# A link to legal information about mozilla products.
legal = Yasal bilgiler
