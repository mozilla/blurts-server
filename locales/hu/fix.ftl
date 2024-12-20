# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Magas kockázatú adatvédelmi incidensek
fix-flow-nav-leaked-passwords = Kiszivárgott jelszavak
fix-flow-nav-security-recommendations = Biztonsági javaslatok
guided-resolution-flow-exit = Vissza a vezérlőpulthoz
guided-resolution-flow-next-arrow = Ugrás a következő lépésre
guided-resolution-flow-next-arrow-sub-step = Ugrás a következő találatra
guided-resolution-flow-step-navigation-label = Irányított lépések

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Folytassa
fix-flow-celebration-next-recommendations-label = Ajánlások megtekintése
fix-flow-celebration-next-dashboard-label = Ugrás a vezérlőpulthoz

## High-risk flow

fix-flow-celebration-high-risk-title = Kijavította a magas kockázatú kitettségeit!
fix-flow-celebration-high-risk-description-in-progress = Ezt a munkát soknak érezheti, de fontos, hogy ezt tegye, hogy megvédje magát. Csak így tovább.
fix-flow-celebration-high-risk-description-done = Ezt a munkát soknak érezheti, de fontos, hogy ezt tegye, hogy megvédje magát.
fix-flow-celebration-high-risk-description-next-passwords = Most pedig javítsuk ki a kikerült jelszavait.
fix-flow-celebration-high-risk-description-next-security-questions = Most pedig javítsuk ki a kikerült biztonsági kérdéseit.
fix-flow-celebration-high-risk-description-next-security-recommendations = Ezután személyre szabott biztonsági javaslatokat adunk az alapján, hogy mely adatai kerültek ki.
fix-flow-celebration-high-risk-description-next-dashboard = Elérte a lépései végét. A műveletelemeket megtekintheti, és követheti az előrehaladást az irányítópulton.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = A jelszavai mostantól védettek!
fix-flow-celebration-security-questions-title = A biztonsági kérdései védettek!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Most pedig nézzük át és frissítsük a kikerült biztonsági kérdéseket.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Ezután személyre szabott biztonsági javaslatokat adunk az alapján, hogy mely adatai kerültek ki.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Szép munka! Elérte a lépései végét. A műveletelemeket megtekintheti, és követheti az előrehaladást az irányítópulton.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Teljesítette az összes javaslatot.
fix-flow-celebration-security-recommendations-description-next-dashboard = Szép munka! Elérte a lépései végét. A műveletelemeket megtekintheti, és követheti az előrehaladást az irányítópulton.

# High Risk Data Breaches

high-risk-breach-heading = Ezeket kellene tennie
high-risk-breach-subheading = Ehhez hozzá kell férnie az érzékeny információihoz, ezért kézileg kell kijavítania.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] { $num_breaches } adatvédelmi incidensben szerepelt:
       *[other] { $num_breaches } adatvédelmi incidensben szerepelt:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>, ekkor: { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Megjelölés javítottként
high-risk-breach-skip = Kihagyás
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Becsült idő: { $estimated_time }+ perc
       *[other] Becsült idő: { $estimated_time }+ perc
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = A bankkártyaszáma kikerült
high-risk-breach-credit-card-description = Aki megszerzi, jogosulatlanul vásárolhat, amiért Ön felelős lehet. Cselekedjen gyorsan az anyagi károk megelőzése érdekében.
high-risk-breach-credit-card-step-one = Ha még mindig megvan ez a kártya, forduljon a kibocsátóhoz, és jelentse, hogy ellopták.
high-risk-breach-credit-card-step-two = Kérjen új kártyát új számmal.
high-risk-breach-credit-card-step-three = Ellenőrizze a számlaszámait, hogy nincsenek-e jogosulatlan terhelések.

# Bank Account Breaches

high-risk-breach-bank-account-title = Kikerült a bankszámlája
high-risk-breach-bank-account-description = A lehető leghamarabbi intézkedés több jogi védelmet nyújthat az esetleges veszteségek megtérítéséhez.
high-risk-breach-bank-account-step-one = Azonnal értesítse bankját, ha a számlaszámát feltörték.
high-risk-breach-bank-account-step-two = Módosítsa a számlaszámát.
high-risk-breach-bank-account-step-three = Ellenőrizze a számlaszámait, hogy nincsenek-e jogosulatlan terhelések.

# Social Security Number Breaches

high-risk-breach-social-security-title = Kikerült a társadalombiztosítási száma
high-risk-breach-social-security-description = A csalók új hiteleket vagy bankkártyákat nyithatnak az Ön társadalombiztosítási számával. Cselekedjen gyorsan az anyagi károk megelőzése érdekében.
high-risk-breach-social-security-step-one = Védje meg magát egy <link_to_info>csalási riasztás beállításával, vagy a hitelkeretének befagyasztásával.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Ellenőrizze a hitelkártya-jelentését</link_to_info>, hogy szerepelnek-e benne fel nem ismert számlaszámok.

# Social Security Number Modal

ssn-modal-title = A csalási riasztásokról és a hitelkeret befagyasztásáról
ssn-modal-description-fraud-part-one = <b>A csalási riasztás</b> megköveteli, hogy a vállalkozások igazolják a személyazonosságát, mielőtt új jóváírást adnak ki az Ön nevében. Ingyenes, egy évig használható, és nem befolyásolja negatívan a hitelképességi mutatóját.
ssn-modal-description-fraud-part-two = Hogy beállítson egyet, lépjen kapcsolatba a három hiteliroda bármelyikével. Nem kell kapcsolatba lépnie mindhárommal.
ssn-modal-description-freeze-credit-part-one = <b>A hitelkeretének befagyasztása</b> megakadályozza, hogy új számlát nyissanak az Ön nevében. Ingyenes és nem befolyásolja negatívan a hitelképességi mutatóját, de fel kell oldania, mielőtt új bankszámlákat nyit.
ssn-modal-description-freeze-credit-part-two = A hitelkeretének befagyasztásához vegye fel a kapcsolatot a három hitelinformációs irodával – az <equifax_link>Equifaxszal</equifax_link>, az <experian_link>Experiannal</experian_link> és a <transunion_link>TransUnionnal</transunion_link>.
ssn-modal-learn-more = Tudjon meg többet a csalási riasztásokról és a hitelkeretek befagyasztásáról
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = A PIN-kód kikerült
high-risk-breach-pin-description = A lehető leghamarabbi intézkedés több jogi védelmet nyújthat az esetleges veszteségek megtérítésében.
high-risk-breach-pin-step-one = Azonnal értesítse bankját, ha PIN-kódját feltörték.
high-risk-breach-pin-step-two = Módosítsa a PIN-kódját mindenütt, ahol ugyanazt használta.
high-risk-breach-pin-step-three = Ellenőrizze a fiókjait, hogy nincsenek-e jogosulatlan terhelések.

# No high risk breaches found

high-risk-breach-none-title = Jó hír, hogy nem találtunk magas kockázatú adatvédelmi incidenseket
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Az adatvédelmi incidenseket az e-mail-címe alapján észleljük, és nem találtunk magas kockázatú adatvédelmi incidenst a következővel kapcsolatban: { $email_list }.
high-risk-breach-none-sub-description-part-one = Magas kockázatú adatvédelmi incidensek, többek között:
high-risk-breach-none-sub-description-ssn = Társadalombiztosítási azonosító
high-risk-breach-none-sub-description-bank-account = Bankszámla-információk
high-risk-breach-none-sub-description-cc-number = Hitelkártyaszámok
high-risk-breach-none-sub-description-pin = PIN-kódok
high-risk-breach-none-continue = Folytatás

# Security recommendations

security-recommendation-steps-label = Biztonsági javaslatok
security-recommendation-steps-title = Íme a tanácsunk:
security-recommendation-steps-cta-label = Megértettem!

# Phone security recommendation

security-recommendation-phone-title = Védje meg a telefonszámát
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] A telefonszáma { $num_breaches } adatvédelmi incidensben szerepelt:
       *[other] A telefonszáma { $num_breaches } adatvédelmi incidensben szerepelt:
    }
security-recommendation-phone-description = Sajnos nem szerezheti vissza. De vannak lépések, amelyeket megtehet a biztonsága érdekében.
security-recommendation-phone-step-one = Blokkolja a kéretlen hívások számait, hogy megakadályozza a további kéretlen hívásokat
security-recommendation-phone-step-two = Ne kattintson az ismeretlen feladótól származó szövegekben lévő hivatkozásokra; ha úgy tűnik, hogy megbízható forrásból származik, hívja fel közvetlenül a megerősítéséhez

# Email security recommendation

security-recommendation-email-title = Védje meg az e-mail-címét
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Az e-mail-címe { $num_breaches } adatvédelmi incidensben szerepelt:
       *[other] Az e-mail-címe { $num_breaches } adatvédelmi incidensben szerepelt:
    }
security-recommendation-email-description = Sajnos ezt nem tudja kijavítani. De vannak lépések, amelyeket megtehet a biztonsága érdekében.
security-recommendation-email-step-one = Ne kattintson az ismeretlen feladótól származó e-mailekben lévő hivatkozásokra; ha úgy tűnik, hogy megbízható forrásból származik, hívja fel közvetlenül a megerősítéséhez
security-recommendation-email-step-two = Legyen tudatában az <link_to_info>adathalász csalásoknak</link_to_info>
security-recommendation-email-step-three = Jelölje levélszemétnek a gyanús leveleket, és blokkolja a feladót
security-recommendation-email-step-four = Használjon <link_to_info>{ -brand-relay } e-mail-maszkokat</link_to_info>, hogy megvédje az e-mail-címét a jövőben

# IP security recommendation

security-recommendation-ip-title = Használjon VPN-t a nagyobb adatvédelem érdekében
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Az IP-címe { $num_breaches } adatvédelmi incidensben szerepelt:
       *[other] Az IP-címe { $num_breaches } adatvédelmi incidensben szerepelt:
    }
security-recommendation-ip-description = Az IP-címe meghatározza a tartózkodási helyét és az internetszolgáltatóját. A hackerek felhasználhatják ezeket az információkat a tartózkodási helyének megtalálására, vagy megpróbálhatnak csatlakozni az eszközeihez.
security-recommendation-ip-step-one = Használjon VPN-t (például a <link_to_info>{ -brand-mozilla-vpn }-t</link_to_info>), hogy elrejtse a valódi IP-címét, és bizalmasabban használja az internetet.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Kikerült a(z) { $breach_name } jelszava
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Egy adatvédelmi incidensben jelent meg ekkor: { $breach_date }.
leaked-passwords-description = A csalók hozzáférnek a fiókjához, és valószínűleg megpróbálják más fiókokhoz is használni, hogy megnézzék, hogy ugyanazt a jelszót használja-e. Cserélje le mindenhol, ahol használta, hogy megvédje magát.
leaked-passwords-steps-title = Ezeket kellene tennie
leaked-passwords-steps-subtitle = Ehhez hozzá kell férnie a fiókjához, ezért kézileg kell kijavítania.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Változtassa meg a(z) <b>{ $emails_affected }</b> jelszavát itt: <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Módosítsa mindenhol, ahol használta.
leaked-passwords-mark-as-fixed = Megjelölés javítottként
leaked-passwords-skip = Egyelőre kihagyás
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Becsült befejezési idő: webhelyenként { $estimated_time } perc
       *[other] Becsült befejezési idő: webhelyenként { $estimated_time } perc
    }

# Leaked Security Questions

leaked-security-questions-title = A biztonsági kérdései nyilvánosságra kerültek
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Ebben az adatvédelmi incidensben jelentek meg: { $breach_name }, ekkor: { $breach_date }.
leaked-security-questions-description = A csalók ezeket arra használhatják, hogy hozzáférjenek a fiókjaihoz, és minden olyan webhelyhez, ahol ugyanazokat a biztonsági kérdéseket használta. Frissítse őket most, hogy megvédje a fiókjait.
leaked-security-questions-steps-title = Ezeket kellene tennie
leaked-security-questions-steps-subtitle = Ehhez hozzá kell férnie a fiókjához, ezért kézileg kell kijavítania.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Frissítse a(z) <b>{ $email_affected }</b> biztonsági kérdéseit itt: <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Frissítse minden olyan oldalon, ahol ugyanazokat a biztonsági kérdéseket használta. Győződjön meg róla, hogy különböző biztonsági kérdéseket használ minden fiókhoz.
