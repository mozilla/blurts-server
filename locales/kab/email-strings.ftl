# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Fren taqeffalt senqed tansa-iw deg 24 n yisragen akken ad tessentemeḍ amiḍan-ik Firefox Monitor. Aneqqis-ik ad d-yeddu akken kan.
verify-my-email = Senqed imayl-iw
report-scan-another-email = Sleḍ imayl-nniḍen deg { -product-name }
automated-message = Wagi d iymayl awurman; ma yella d tuccḍa, ulac ayen ara txedmeḍ.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Nuzen imayl-a ɣer { $userEmail }, acku ilɣa i tensa-a remden deg { -product-name }.
unsubscribe-email-link = Ma yella ur tezgiḍ tebɣiḍ ilɣa n { -product-name }, ffeɣ seg ujerred.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Aneqqis { -product-name }
report-date = Azemz n tummla
email-address = Imayl/Tansa:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Acu-nniḍen ara txedmed
report-headline =
    { $breachCount ->
        [0] Skud yettaẓ, igerrez.
        [one] Amiḍan-ik iban-d deg { $breachCount } n trewla n yisefka.
       *[other] Imiḍanen-ik banen-d deg { $breachCount } n trewla n yisefka.
    }
report-subhead-no-breaches =
    Amiḍan-ik ur d-yettban ara deg uneqqis ummid n trewla n yisefka.
    D ayen igerrzen, maca ur ḥebbes ara deg uzgen n ubrid.
    Tirewliwin n yisefka zemrent ad d-ḍrunt yal tikkelt, ihi kemmel taɣuri akken ad tegzuḍ ammesten n wawalen-ik uffiren.
report-subhead-found-breaches = A-t-a uneqqis ummid n Firefox Monitor, i yegebren meṛṛa addaden yettwassnen n trewla n yisefka i yeḥuzan tansa-a n yimayl.
report-pwt-blurb =
    Awalen ufrinen d ayen ɣlayen ɣef waya agimen seg-sen ttakeren-ten yal ass, sakin ttnuzin deg ulzuz.
    Aseqdec n wawalen uffiren uǧhiden, ad yemmesten imiḍanen-ik akked telɣut tudmawant i gebren.
report-pwt-headline-1 = Seqdec awal uffir yemgaraden deg yal amiḍan
report-pwt-summary-1 = Tulsa n useqdec n wawalen uffiren yal amḍiq, ad d-yeldi abrid i yimakaren imsenselkamen. Zemren ad sqedcen awal-a uffir akken ad qqnen ɣer yimiḍanen-ik-nniḍen.
report-pwt-headline-2 = Rnu awalen uffiren iǧehden yemgaraden
report-pwt-summary-2 = Imakaren seqdacen tibdarin n wawalen uffiren yettwassnen akken ad ɛerḍen ad d-afen ayla-k. Skud awal-ik uffir meqqer, d agacuran, skud ad yettiwɛir i tifin.
report-pwt-headline-3 = Sesfer tilufa n tɣellist am wawalen uffiren-nniḍen
report-pwt-summary-3 = Ismal web ur senqaden ara ma yella tiririyin-ik d tusdidin, maca ma mmentaḍent kan yal tikkelt. Rnu tiririyin ɣezzifen, tigacurenin sakin sekles-itent deg umḍiɣ n ṭmana.
report-pwt-headline-4 = Seqdec amsefrak n wawalen uffiren
report-pwt-summary-4 = Imeẓla am 1Password, LastPass, Dashlane, d Bitwarden siriwen-d awalen uffiren uǧhiden, seklasen-ten s wudem aɛelsan daɣen ggaren-ten-id deg yismal web akken ur asent-ceffuḍ ara.
# A link to legal information about mozilla products.
legal = Usḍif
# Share Firefox Monitor by email subject line
share-by-email-subject = Wali ma yella tḥuz-ak trewla n yisefka.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Azul,
    { -brand-name } yessumur ameẓlu ilelli anida i tzemreḍ ad tesneqdeḍ ma yella tḥuza-k tkerda n yisefka. A-t-a amek iteddu:
    1. Ddu ɣer { "https://monitor.firefox.com" } sakin nadi imayl-ik.
    2. Wali ma yella imiḍanen-ik srid llan deg trewla n yisefka.
    3. Wali iwellihen n { -product-name } ɣef wayen ilaqen ad t-tgeḍ.
# Unsubscribe link in email.
email-unsub-link = Ffeɣ seg ujerred
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Tremseḍ-d izen-a acku tjerrdeḍ ɣer yilɣa n { -product-name }
    Ur tebɣiḍ ara ad tremseḍ iznan-a? { $unsubLink }. Wagi d izen awurman. I wugar n tallelt, rzu ɣer { $faqLink }-nneɣ.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Tremseḍ-d izen-a acku tjerrdeḍ ɣer yilɣa n { -product-name }
    Wagi d izen awurman. I wugar n tallelt, rzu ɣer { $faqLink }-nneɣ.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Sken Tafelwit n usenqed-inu
# Button text
verify-email-cta = Senqed tansa imayl
# Button text
see-all-breaches = Wali akk tirewliwin
# Headline of verification email
email-link-expires = Aseɣwen-agi ad yemmet akka 24 isragen
email-verify-blurb = Sefqed tansa-ik imayl akked ad tt-ternuḍ ɣer { -product-name } sakin jerred ɣer yilɣa n trewliwin n yisefka.
# Email headline
email-found-breaches-hl = A-t-an ugzul ɣef trewliwin n yisefka i k-iḥuzan
# Email headline
email-breach-summary-for-email = Agzul ɣef trewliwin n yisefka i { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } ur d-iban ara deg trewla n yisefka yettwassnen
# Email headline
email-alert-hl = { $userEmail } iban-d deg trewla n yisefka yettwassnen
# Subject line of email
email-subject-found-breaches = { -product-name } yufa-d talɣut-ik deg tkerḍiwin-a n yisefka
# Subject line of email
email-subject-no-breaches = { -product-name } ur d-yufi ara takerḍa n yisefka yettwassnen
# Subject line of email
email-subject-verify = Senqed tansa imayl-ik/im i { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Issin ugar ɣef { $fxmLink }
email-sensitive-disclaimer =
    Ɣef sebba n ṣṣifa iweɛren n trewla-a n yisefka, tansiwin imayl yettwaɣen ur d-ffiɣent ara s wudem azayez.
    Tremseḍ-d alqu-a acku twekkdeḍ-d d akken tansa-a d ayla-k.
fxm-warns-you-no-breaches =
    { -product-name } ad d-id-yelɣu ɣef trewliwin n yisefka i yeḥuzan talɣut-ik tudmawant
    Akka tura, ulac tarewla n yisefka yettwafen. Ad ak-d-nazen alɣu ma yella tansa-ik imayl tban-d deg trewla tamaynut n yisefka.
fxm-warns-you-found-breaches =
    { -product-name } ad d-id-yelɣu ɣef trewliwin n yisefka i yeḥuzan talɣut-ik tudmawant
    Aql-ak daɣen tjerrdeḍ akken ad tremseḍ ilɣa ma yella tansa-ik tban-d deg trewla n yisefka.
email-breach-alert-blurb =
    { -product-name } ad d-id-yelɣu ɣef trewliwin n yisefka i yeḥuzan talɣut-ik tudmawant
    Akken kan i d-nermes talqut ɣef trewla n yisefka i yeḥuzan takebbanit-nniḍen.
# List headline
faq-list-headline = Isteqsiyen i d-yettuɣalen s waṭas
# Link Title
faq-v2-1 = Ur ssineɣ ara yiwet ger tkebbaniyin-agi neɣ ismal-agi. Acuɣer iyi-teɛna trewla-agi?
# Link Title
faq-v2-2 = Ilaq ad t-xedmeɣ kra ma yella teḍra-d trewla n yisefka iseggasen aya neɣ d amiḍan aqbuṛ?
# Link Title
faq-v2-3 = Akken kan ufiɣ tarewla n yisefka n yi-iḥuzan. Acu ara xedmeɣ?
# Link Title
faq-v2-4 = Amek isesfar { -product-name } yismal web iweɛren?
