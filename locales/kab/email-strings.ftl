# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Aneqqis { -product-name }
report-date = Azemz n tummla
email-address = Imayl/Tansa:

# A link to legal information about mozilla products.
legal = Usḍif

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

# Button text
verify-email-cta = Senqed tansa imayl

# Button text
see-all-breaches = Wali akk tirewliwin

# Headline of verification email
email-link-expires = Aseɣwen-agi ad yemmet akka 24 isragen
email-verify-blurb = Sefqed tansa-ik imayl akked ad tt-ternuḍ ɣer { -product-name } sakin jerred ɣer yilɣa n trewliwin n yisefka.

# Email headline
email-found-breaches-hl = A-t-an ugzul ɣef trewliwin n yisefka i k-iḥuzan

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Agzul ɣef trewliwin n yisefka i { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } ur d-iban ara deg trewla n yisefka yettwassnen

# Email headline
email-alert-hl = { $userEmail } iban-d deg trewla n yisefka yettwassnen

##

# Subject line of email
email-subject-found-breaches = { -product-name } yufa-d talɣut-ik deg tkerḍiwin-a n yisefka

# Subject line of email
email-subject-no-breaches = { -product-name } ur d-yufi ara takerḍa n yisefka yettwassnen

# Subject line of email
email-subject-verify = Senqed tansa imayl-ik/im i { -product-name }

# Variables:
#   $fxmLink (string) - Link to Firefox Monitor that uses the text from { -product-name }.
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

# Section headline
monitor-another-email = Tebɣiḍ ad tɛasseḍ imayl-nniḍen?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-breach-status = Addad n trewla tamirant
# table row 2 label
email-breach-total = Amḍan asemday n wanfalen:
# table row 3 label
email-resolved = Anfalen yefran:
# table row 4 label
email-unresolved = Tirewliwin ur nefri ara:
email-resolve-cta = Fru tirewliwin

## Verification email


## Breach report
## Variables:
##   $email-address (string) - Email address

email-dashboard-cta = Ddu ɣer tfelwit n usenqed

## Breach alert

