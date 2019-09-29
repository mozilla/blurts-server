# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Që të ripohoni llogarinë tuaj Firefox Monitor, klikoni brenda 24 orësh mbi butonin Verifiko Email-in Tim. 
    Mandej raporti juaj do të jetë rrugës për te ju.
verify-my-email = Verifiko Email-in Tim
report-scan-another-email = Skanoni Një Tjetër Email në { -product-name }
automated-message = Ky është një email i automatizuar; nëse e morët gabimisht, s’ka nevojë të bëni gjë.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = E dërguam këtë mesazh te { $userEmail } ngaqë për adresën email është zgjedhur përfshirja në sinjalizime nga { -product-name }.
unsubscribe-email-link = Nëse s’doni më sinjalizim rreth { -product-name }, shpajtohuni.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Raport { -product-name }
report-date = Datë Raporti:
email-address = Adresë Email:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Ç’të Bëhet Më Pas
report-headline =
    { $breachCount ->
        [0] Deri këtu, në rregull.
        [one] Llogaria juaj shfaqet në { $breachCount } shkelje.
       *[other] Llogaria juaj shfaqet në { $breachCount } shkelje.
    }
report-subhead-no-breaches =
    Llogaria juaj s’duket te raporti ynë i plotë i shkeljeve. 
    Kaq është mirë, por mund të bëni më tepër. 
    Shkeljet e të dhënave ndodhin kurdo, ndaj lexoni më tej që të mësoni se si mund mbroni fjalëkalimet tuaj.
report-subhead-found-breaches = Ja raporti i plotë Firefox Monitor për ju, që përfshin krejt shkeljet e njohura të të dhënave që përmbajnë këtë adresë email.
report-pwt-blurb =
    Fjalëkalimet janë kaq të vyer, saqë  përditë vidhen mijëra të tillë dhe shkëmbehen ose shiten në treg të zi. 
    Fjalëkalimet më të fuqishëm mbrojnë llogaritë tuaja dhe të dhënat personale brenda tyre.
report-pwt-headline-1 = Përdorni një fjalëkalim të ndryshëm për çdo llogari
report-pwt-summary-1 =
    Përdorimi i të njëjtit fjalëkalim kudo e lë derën hapur për hacker-at. 
    Që mund ta përdorin atë fjalëkalim për të hyrë në llogaritë tuaja të tjera.
report-pwt-headline-2 = Krijoni fjalëkalime të fuqishëm, unikë
report-pwt-summary-2 =
    Për të provuar të gjejnë tuajin, hackera-t përdorin lista fjalëkalimesh të rëndomtë. 
    Sa më i gjatë dhe i rastësishëm të jetë fjalëkalimi juaj, aq më e vështirë do të jetë të vidhet.
report-pwt-headline-3 = Pyetjet e sigurisë shihini si fjalëkalime ekstra
report-pwt-summary-3 =
    Sajtet nuk kontrollojnë nëse përgjigjet tuaja janë të sakta a jo, ata thjesht shohin nëse përputhen çdo herë. 
    Krijoni përgjigje të gjata, kuturu, dhe depozitojini diku në një vend pa rrezik.
report-pwt-headline-4 = Përdorni një përgjegjës fjalëkalimesh
report-pwt-summary-4 = Shërbime të tillë si 1Password, LastPass, Dashlane, dhe Bitwarden prodhojnë fjalëkalime të fuqishëm, i depozitojnë në mënyrë të sigurt, dhe i japin për sajtet, ndaj s’ju duhet të mbani mend secilin prej tyre.
# A link to legal information about mozilla products.
legal = Ligjore
# Share Firefox Monitor by email subject line
share-by-email-subject = Shihni nëse jeni prekur nga ndonjë shkelje e të dhënave.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Njatjeta,
    { -brand-name }-i ka një shërbim falas në të cilin mund të kontrolloni për të parë nëse keni qenë prekur nga ndonjë shkelje të dhënash. Ja se si funksionon:
    1. Shkoni te { "https://monitor.firefox.com" } dhe kërkoni për email-in tuaj.
    2. Shihni nëse llogaritë tuaja internetore kanë qenë të ekspozuara në ndonjë shkelje të dhënash.
    3. Get tips from { -product-name } about what to do next.
# Unsubscribe link in email.
email-unsub-link = Shpajtohuni
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Këtë email po e merrni ngaqë jeni regjistruar për sinjalizime { -product-name }. S’i doni më këto email-e? { $unsubLink }. Ky është një email i automatizuar. Për asistencë vizitoni { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Këtë email po e merrni ngaqë jeni regjistruar për sinjalizime { -product-name }. Ky është një email i automatizuar. Për asistencë vizitoni { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Parje e Pultit Tim
# Button text
verify-email-cta = Verifikoni Email
# Button text
see-all-breaches = Shihni Krejt Cenimet
# Headline of verification email
email-link-expires = Kjo lidhje skadon pas 24 orësh
email-verify-blurb = Verifikoni email-in tuaj që të shtohet te { -product-name } dhe të regjistroheni për sinjalizime cenimesh.
# Email headline
email-found-breaches-hl = Ja përmbledhja juaj e cenimeve të dikurshme të të dhënave
# Email headline
email-breach-summary-for-email = Përmbledhje cenimesh për { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } u shfaq në zero shkelje të ditura të dhënash
# Email headline
email-alert-hl = { $userEmail } u shfaq në një shkelje të re të dhënash
# Subject line of email
email-subject-found-breaches = { -product-name } i gjeti të dhënat tuaja në këto cenime
# Subject line of email
email-subject-no-breaches = { -product-name } s’gjeti cenime të ditura
# Subject line of email
email-subject-verify = Verifikoni email-in tuaj për { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Mësoni më tepër mbi { $fxmLink }
email-sensitive-disclaimer =
    Për shkak të natyrës rezervat të kësaj shkeljeje, email-et e përfshirë në të nuk mund të shihen publikisht. 
    Këtë sinjalizim po e merrni ngaqë jeni i zoti i verifikuar i kësaj adrese email.
fxm-warns-you-no-breaches =
    { -product-name } ju sinjalizon rreth shkeljesh të dhënash që prekin të dhëna tuajat personale. 
    Deri këtu, s’janë gjetur shkelje. Do t’ju dërgojmë një sinjalizim, nëse një adresat tuaja email shfaqet në një shkelje të re.
fxm-warns-you-found-breaches =
    { -product-name } ju sinjalizon rreth shkeljesh të dhënash që prekin të dhëna tuajat personale. 
    Jeni regjistruar gjithashtu të merrni sinjalizime, nëse adresa juaj email shfaqet në një shkelje të re.
email-breach-alert-blurb =
    { -product-name } ju sinjalizon rreth shkeljesh të dhënash që prekin të dhëna tuajat personale. 
    Sapo morëm hollësi rreth një shkelje tjetër të të dhënave të shoqërisë.
# List headline
faq-list-headline = Pyetje të bëra shpesh
# Link Title
faq-v2-1 = Nuk e njoh një prej këtyre shoqërive apo sajteve. Çne unë në këtë shkelje?
# Link Title
faq-v2-2 = Më duhet të bëj ndonjë gjë, nëse kjo shkelje ka ndodhur vite më parë ose nëse kjo është një llogari e dikurshme?
# Link Title
faq-v2-3 = Sapo pashë se jam pjesë e një cenimi të dhënash. Ç’të bëj më tej?
# Link Title
faq-v2-4 = Si i trajton { -product-name } sajtet me të dhëna rezervat?
