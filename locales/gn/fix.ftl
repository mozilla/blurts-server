# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Mba’ekuaarã ñembyai oikokuaáva
fix-flow-nav-leaked-passwords = Ñe’ẽñemi mboguapyre
fix-flow-nav-security-recommendations = Ñemoñe’ẽ tekorosãrã
guided-resolution-flow-exit = Eguevijey mba’erupápe
guided-resolution-flow-next-arrow = Eho upeiguávape
guided-resolution-flow-next-arrow-sub-step = Eho upeiguávape
guided-resolution-flow-step-navigation-label = Jeguata ma’ẽgua

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Jaku’ejeýke
fix-flow-celebration-next-recommendations-label = Ehecha ñemoñe’ẽ
fix-flow-celebration-next-dashboard-label = Eho ne mba’erupa rendápe

## High-risk flow

fix-flow-celebration-high-risk-title = ¡Emoĩporãma nde jehechauka ivaikuaavéva!
fix-flow-celebration-high-risk-description-in-progress = Ejapóvo ko tembiapo erekuaa hetaha, hákatu ejapomanteva’erã eime hag̃ua tekorosãme. Emba’apo porãmeme ehóvo.
fix-flow-celebration-high-risk-description-done = Ejapóvo ko tembiapo erekuaa hetaha, hákatu ejapomanteva’erã eime hag̃ua tekorosãme.
fix-flow-celebration-high-risk-description-next-passwords = Ko’ág̃a ñamoĩporãta ne ñe’ẽñemi ivaikuaáva.
fix-flow-celebration-high-risk-description-next-security-questions = Ko’ág̃a ñamoĩporãta umi porandu tekorosãrã ivaikuaáva.
fix-flow-celebration-high-risk-description-next-security-recommendations = Ko’ág̃a guive, rome’ẽta ndéve tekorosãrã rape rohecha rire ne mba’ekuaarã oñembyaikuaahague.
fix-flow-celebration-high-risk-description-next-dashboard = Eg̃uahẽma hu’ãitépe. Ikatu ehecha oimeraẽva mba’eporu tembiaporã ha ehapykueho nde jeku’e techamemeha rupápe.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = ¡Ne ñe’ẽñemi ko’ág̃a oñemo’ãma!
fix-flow-celebration-security-questions-title = ¡Ne porandu tekorosãrãva oñemo’ãma!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Ko’ág̃a jahecha ha ñambohekopyahúta umi porandu tekorosãrã ivaikuaáva.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Ko’ág̃a guive, rome’ẽta ndéve tekorosãrã rape rohecha rire ne mba’ekuaarã oñembyaikuaahague.
fix-flow-celebration-leaked-passwords-description-next-dashboard = ¡Ejapo porã! Eg̃uahẽma hu’ãitépe. Ikatu ehecha oimeraẽva mba’eporu tembiaporã ha ehapykueho nde jeku’e techamemeha rupápe.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = ¡Emyanyhẽmapa opaite ne ñemoñe’ẽporã!
fix-flow-celebration-security-recommendations-description-next-dashboard = ¡Ejapo porã! Eg̃uahẽma hu’ãitépe. Ikatu ehecha oimeraẽva mba’eporu tembiaporã ha ehapykueho nde jeku’e techamemeha rupápe.

# High Risk Data Breaches

high-risk-breach-heading = Kóva pe rejapova’erã
high-risk-breach-subheading = Kóva oikotevẽ ne maranduetépe jeike, ikatuhápe emoĩporã nde poite rupive.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
       *[other] Ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date> { $breach_date }</breach_date>-pe
high-risk-breach-mark-as-fixed = Embokurusu oĩporãmaha
high-risk-breach-skip = Ehasa ko’ág̃a
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Mboy aravópa: hetave { $estimated_time } aravo’ígui
       *[other] Mboy aravópa: hetave { $estimated_time } aravo’ígui
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Nde kuatia’atã papapy ojehechakuaa
high-risk-breach-credit-card-description = Oimeraẽva ohupytýva ojoguakuaa oñemoneĩ’ỹva ikatúva oñemboja nde rehe. Eku’e ko’ág̃a ehenonde’ã hag̃ua mba’evai viru reheguáva.
high-risk-breach-credit-card-step-one = Erekóramo gueteri ko kuatia’atã, emombe’u ime’ẽhárape oñemondaha.
high-risk-breach-credit-card-step-two = Ejerure kuatia’atã papapy pyahu reheve.
high-risk-breach-credit-card-step-three = Ehechajey ne mba’ete oĩre tepyme’ẽrã nemba’e’ỹva.

# Bank Account Breaches

high-risk-breach-bank-account-title = Nde mba’ete banco pegua ojehechakuaa
high-risk-breach-bank-account-description = Ehecháke pya’e mba’épa ikatúva ne mo’ã léi rovake nepytyvõtava eguerujey hag̃ua nemba’e kañyngue.
high-risk-breach-bank-account-step-one = Emomarandu pya’eterei ne banco-pe ne mba’ete papapy ikatuháre ojeporu.
high-risk-breach-bank-account-step-two = Emoambue ne mba’ete papapy
high-risk-breach-bank-account-step-three = Ehechajey ne mba’ete oĩre tepyme’ẽrã nemba’e’ỹva.

# Social Security Number Breaches

high-risk-breach-social-security-title = Nde seguridad social papapy ojehechakuaa
high-risk-breach-social-security-description = Umi mondaha ikatu oguenohẽ pirapire térã kuatia’atã ñemurã nde papapy rupive. Eku’e pya’e ani eñemonda.
high-risk-breach-social-security-step-one = Eñemo’ã <link_to_info>embohekóvo kyhyjerã ani ejehode térã ejokóvo viru jeporu.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Ehecha nde deveha marandu’i</link_to_info> eikuaa hag̃ua oĩpa emonei’ỹva.

# Social Security Number Modal

ssn-modal-title = Ñemonge rehegua ha nde jedeverã jejoko
ssn-modal-description-fraud-part-one = <b>Peteĩ kyhyjerã</b> ojerure umi mba’apohaguasu tohecha nde reraite oiporuka mboyve viru nde rérape. Ha’e reigua, ipukukuaa peteĩ ary ha nombyaimo’ãi nde viru jeporurã tenondevépe.
ssn-modal-description-fraud-part-two = Emboheko hag̃ua, eñe’ẽ peteĩva umi mbohapy oporombodevéva ndive. Natekotevẽi eñe’ẽ mbohapyvéva ndive.
ssn-modal-description-freeze-credit-part-one = <b>Ejoko nde vitu ñeme’ẽ</b> omboyke ani avave ombojurujávo mba’ete pyahu nde rérape. Ha’e reigua ha nombyaimo’ãi nde viru jeporurãme, hákatu tekotevẽta ejora embojuruja mboyve ambue mba’ete pyahu.
ssn-modal-description-freeze-credit-part-two = Ejoko hag̃ua nde crédito, eñe’ẽ peteĩteĩva ko’ã agencia de crédito ndive: <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> ha <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Eikuaave ñemonge rehegua ha nde jedeverã jejoko
ssn-modal-ok = MONEĨ

# PIN Breaches

high-risk-breach-pin-title = Nde PIN ojehechakuaákuri
high-risk-breach-pin-description = Ehecháke pya’e mba’épa ikatúva ne mo’ã léi rovake nepytyvõtava eguerujey hag̃ua nemba’e kañyngue.
high-risk-breach-pin-step-one = Emomarandu pya’e ne banco-pe ne mba’ete papapy ojeporukuaátarõ.
high-risk-breach-pin-step-two = Emoambue ne PIN oimeraẽva tenda eiporuhaguépe.
high-risk-breach-pin-step-three = Ehechajey ne mba’ete oĩre tepyme’ẽrã nemba’e’ỹva.

# No high risk breaches found

high-risk-breach-none-title = Marandu iporãva, ndorojuhúi mba’ekuaarã ñembogua ivaikuaáva
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Rohecha mba’ekuaarã ñembogua ne ñanduti veve rehegua, ha ndorojuhúi mba’ekuaarã ñembogua ivaikuaáva { $email_list }-pe g̃uarã.
high-risk-breach-none-sub-description-part-one = Mba’ekuaarã ñembyai oikokuaávape oĩ:
high-risk-breach-none-sub-description-ssn = Seguro social papapy
high-risk-breach-none-sub-description-bank-account = Marandu mba’ete banco pegua
high-risk-breach-none-sub-description-cc-number = Kuatia’atã ñemurã papapy
high-risk-breach-none-sub-description-pin = PINs
high-risk-breach-none-continue = Ku’ejey

# Security recommendations

security-recommendation-steps-label = Ñemoñe’ẽ tekorosãrã
security-recommendation-steps-title = Ko’ápe oĩ ore ñemoñe’ẽ:
security-recommendation-steps-cta-label = ¡Aikũmby!

# Phone security recommendation

security-recommendation-phone-title = Emo’ã ne pumbyry papapy
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Ne pumbyry papapy ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
       *[other] Ne pumbyry papapy ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
    }
security-recommendation-phone-description = Rombyasyeterei, ndaikatumo’ãi eipe’a. Hákatu eku’ekuaa eñemo’ãve hag̃ua.
security-recommendation-phone-step-one = Ejoko spam papapy emboyke hag̃ua ñehenói oiko’ỹva
security-recommendation-phone-step-two = Ani eikutu juajuha moñe’ẽrã eikua’ỹva omboúvagui; eimo’ãramo ouha ejeroviahágui, ehenói eikuaa porã hag̃ua

# Email security recommendation

security-recommendation-email-title = Emo’ã ñanduti veve kundaharape
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Ne ñanduti veve kundaharape ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
       *[other] Ne ñanduti veve kundaharape ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
    }
security-recommendation-email-description = Rombyasyeterei, ndaikatumo’ãi emyatyrõ ko apañuái. Hákatu eku’ekuaa eñemo’ã hag̃ua.
security-recommendation-email-step-one = Ani eikutu juajuha ñanduti veve eikua’ỹva omboúvagui; eimo’ãramo ouha ejeroviahágui, ehenói eikuaa porã hag̃ua
security-recommendation-email-step-two = Ema’ẽke <link_to_info>phishing jehode</link_to_info> rehe
security-recommendation-email-step-three = Emongurusu ñanduti veve ikatúva spam ha emboyke imbouhára
security-recommendation-email-step-four = Eiporu <link_to_info>{ -brand-relay } ñanduti veve rovamo’ãha</link_to_info> mba’éva emo’ã hag̃ua ne ñanduti veve tenondeve

# IP security recommendation

security-recommendation-ip-title = Eiporu VPN nde rekoñemiverã
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Ne IP kundaharape ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
       *[other] Ne IP kundaharape ojehecha { $num_breaches } mba’ekuaarã ñemboguápe:
    }
security-recommendation-ip-description = Nde IP kundaharape ohechauka ne rendaite ha ñanduti me’ẽhára. Umi hacker ikatu oiporu ko marandu ojuhu hag̃ua ne rendaite térã oñeha’ã hag̃ua oike ne mba’e’okápe.
security-recommendation-ip-step-one = Eiporu VPN (<link_to_info>{ -brand-mozilla-vpn }</link_to_info>) ramo emokañy hag̃ua nde IP kundaharape ha eiporu ñanduti ñemihápe.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Ne ñe’ẽñemi { $breach_name } pegua ojehechakuaa
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Osẽ peteĩ mba’ekuaarã ñembogua { $breach_date }.
leaked-passwords-description = Umi mba’evaiapoha ikatu oike ne mba’etépe ha oiméne oñeha’ãta oiporu ambue mba’etépe ohecha hag̃ua eiporujeýpa pe ñe’ẽñemi. Emoambue opaite tenda eiporu haguépe eñemo’ã hag̃ua.
leaked-passwords-steps-title = Kóva pe rejapova’erã
leaked-passwords-steps-subtitle = Kóva oikotevẽ ne mba’etépe jeike, ikatuhápe emoĩporã nde poite rupive.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Emoambue ne ñe’ẽñemi <b>{ $emails_affected }</b> peg̃uarã <link_to_breach_site>{ $breach_name }</link_to_breach_site>-pe.
leaked-passwords-step-two = Emoambue oimeraẽva tenda eiporuhaguépe.
leaked-passwords-mark-as-fixed = Embokurusu oĩporãmaha
leaked-passwords-skip = Ehasa ko’ág̃a
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Aravo eikotevẽva emoĩmba hag̃ua: { $estimated_time } aravo’i tendápe
       *[other] Aravo eikotevẽva emoĩmba hag̃ua: { $estimated_time } aravo’i tendápe
    }

# Leaked Security Questions

leaked-security-questions-title = Ne porandu tekorosãrãva ojehechakakuaa
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Osẽ peteĩ mba’ekuaarã ñembogua { $breach_name }-pe { $breach_date }.
leaked-security-questions-description = Umi mba’evaiapoha ikatukuaa oike ne mba’etépe ha oimeraẽva ambue tenda eiporu haguépe porandu tekorosãgua. Embohekopyahu ko’ág̃a emo’ã hag̃ua ne mba’ete.
leaked-security-questions-steps-title = Kóva pe rejapova’erã
leaked-security-questions-steps-subtitle = Kóva oikotevẽ ne mba’etépe jeike, ikatuhápe emoĩporã nde poite rupive.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Embohekopyahu ne porandu tekorosãrã <b>{ $email_affected }</b> peg̃uarã <link_to_breach_site>{ $breach_name }</link_to_breach_site>-pe.
leaked-security-questions-step-two = Embohekopyahu ambue tenda eipuru jey haguépe porandu tekorosãgua. Ejesareko eipuruha iñambuéva porandu tekorosãgua peteĩteĩva mba’etépe.
