# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Vysoko rizikové úniky údajov
fix-flow-nav-leaked-passwords = Uniknuté heslá
fix-flow-nav-security-recommendations = Bezpečnostné odporúčania
guided-resolution-flow-exit = Návrat na nástenku
guided-resolution-flow-next-arrow = Prejsť na nasledujúci krok
guided-resolution-flow-next-arrow-sub-step = Prejsť na ďalší výsledok
guided-resolution-flow-step-navigation-label = Kroky sprievodcu

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Poďme chrániť naďalej
fix-flow-celebration-next-recommendations-label = Pozrite si odporúčania
fix-flow-celebration-next-dashboard-label = Prejsť na moju Nástenku

## High-risk flow

fix-flow-celebration-high-risk-title = Vyriešili ste svoje vysoko rizikové úniky!
fix-flow-celebration-high-risk-description-in-progress = Vykonávať tieto kroky môže znieť ako veľa práce, ale je dôležité, aby ste ich robili a zostali v bezpečí. Pokračujte v dobrej práci.
fix-flow-celebration-high-risk-description-done = Vykonávať tieto kroky môže znieť ako veľa práce, ale je dôležité, aby ste ich robili a zostali v bezpečí.
fix-flow-celebration-high-risk-description-next-passwords = Teraz poďme vyriešiť vaše odhalené heslá.
fix-flow-celebration-high-risk-description-next-security-questions = Teraz poďme vyriešiť vaše odhalené bezpečnostné otázky.
fix-flow-celebration-high-risk-description-next-security-recommendations = Ďalej vám poskytneme prispôsobené bezpečnostné odporúčania na základe toho, aké vaše údaje boli odhalené.
fix-flow-celebration-high-risk-description-next-dashboard = Dosiahli ste posledný z vašich krokov. Na nástenke si môžete pozrieť všetky položky, vykonať akcie a sledovať svoj pokrok.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Vaše heslá sú teraz chránené!
fix-flow-celebration-security-questions-title = Vaše bezpečnostné otázky sú chránené!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Teraz poďme skontrolovať a aktualizovať vaše odhalené bezpečnostné otázky.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Ďalej vám poskytneme prispôsobené bezpečnostné odporúčania na základe toho, aké vaše údaje boli odhalené.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Veľmi dobré! Dosiahli ste posledný z vašich krokov. Na nástenke si môžete pozrieť všetky položky, vykonať akcie a sledovať svoj pokrok.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Dokončili ste všetky naše odporúčania!
fix-flow-celebration-security-recommendations-description-next-dashboard = Veľmi dobré! Dosiahli ste posledný z vašich krokov. Na nástenke si môžete pozrieť všetky položky, vykonať akcie a sledovať svoj pokrok.

# High Risk Data Breaches

high-risk-breach-heading = Toto je potrebné urobiť
high-risk-breach-subheading = Toto si vyžaduje prístup k vašim citlivým informáciám, takže to budete musieť vyriešiť manuálne.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Údaj sa objavil v { $num_breaches } úniku údajov:
        [few] Údaj sa objavil v { $num_breaches } únikoch údajov:
        [many] Údaj sa objavil v { $num_breaches } únikoch údajov:
       *[other] Údaj sa objavil v { $num_breaches } únikoch údajov:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>dňa { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Označiť ako vyriešené
high-risk-breach-skip = Teraz preskočiť
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Odhadovaný čas: viac ako { $estimated_time } minúta
        [few] Odhadovaný čas: viac ako { $estimated_time } minúty
        [many] Odhadovaný čas: viac ako { $estimated_time } minút
       *[other] Odhadovaný čas: viac ako { $estimated_time } minút
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Číslo vašej kreditnej karty bolo odhalené
high-risk-breach-credit-card-description = Každý, kto ho získa, môže vykonávať neoprávnené nákupy, za ktoré môžete niesť zodpovednosť. Konajte teraz, aby ste predišli finančným škodám.
high-risk-breach-credit-card-step-one = Ak túto kartu stále máte, kontaktujte jej vydavateľa a nahláste jej odcudzenie.
high-risk-breach-credit-card-step-two = Požiadajte o novú kartu s novým číslom.
high-risk-breach-credit-card-step-three = Skontrolujte svoje účty, či nemáte neoprávnené pohyby.

# Bank Account Breaches

high-risk-breach-bank-account-title = Číslo vášho bankového účtu bolo odhalené
high-risk-breach-bank-account-description = Ak podniknete kroky čo najskôr, môžete získať viac právnej ochrany, ktorá vám pomôže získať späť akékoľvek straty.
high-risk-breach-bank-account-step-one = Okamžite informujte svoju banku, že číslo vášho účtu bolo prezradené.
high-risk-breach-bank-account-step-two = Zmeňte si číslo účtu.
high-risk-breach-bank-account-step-three = Skontrolujte svoje účty, či nemáte neoprávnené pohyby.

# Social Security Number Breaches

high-risk-breach-social-security-title = Vaše číslo sociálneho zabezpečenia bolo odhalené
high-risk-breach-social-security-description = Podvodníci si môžu otvoriť nové pôžičky alebo kreditné karty s vaším číslom sociálneho zabezpečenia. Konajte rýchlo, aby ste predišli finančným škodám.
high-risk-breach-social-security-step-one = Chráňte sa <link_to_info>nastavením upozornení na podvod alebo zmrazením úverov.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Skontrolujte si pohyby na kreditnej karte</link_to_info>, či sa tam nenachádzajú neznáme platby.

# Social Security Number Modal

ssn-modal-title = O upozorneniach na podvody a zmrazení úverov
ssn-modal-description-fraud-part-one = <b>Upozornenie na podvod</b> vyžaduje, aby firmy overili vašu totožnosť predtým, ako im vydá nový kredit na vaše meno. Je to zadarmo, trvá jeden rok a nebude to mať negatívny vplyv na vaše kreditné skóre.
ssn-modal-description-fraud-part-two = Ak si ho chcete nastaviť, kontaktujte ktorúkoľvek z troch úverových kancelárií. Nemusíte kontaktovať všetky tri.
ssn-modal-description-freeze-credit-part-one = <b>Zmrazenie úverov</b> bráni komukoľvek otvoriť si nový účet na vaše meno. Je to zadarmo a nebude to mať negatívny vplyv na vaše kreditné skóre, ale pred otvorením akýchkoľvek nových účtov ich musíte rozmraziť.
ssn-modal-description-freeze-credit-part-two = Ak chcete zmraziť svoje úvery, kontaktujte každú z troch úverových kancelárií – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> a <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Ďalšie informácie o upozorneniach na podvody a zmrazení úverov
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Váš PIN bol odhalený
high-risk-breach-pin-description = Ak podniknete kroky čo najskôr, môžete získať viac právnej ochrany, ktorá vám pomôže získať späť akékoľvek straty.
high-risk-breach-pin-step-one = Okamžite informujte svoju banku, že váš kód PIN bol prezradený.
high-risk-breach-pin-step-two = Zmeňte svoj PIN kdekoľvek, kde ste použili rovnaký.
high-risk-breach-pin-step-three = Skontrolujte svoje účty, či nemáte neoprávnené pohyby.

# No high risk breaches found

high-risk-breach-none-title = Skvelá správa, nenašli sme žiadne vysoko rizikové úniky údajov
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Na základe vašej e‑mailovej adresy preverujeme úniky údajov a nenašli sme žiadne vysoko rizikové úniky pre adresu { $email_list }.
high-risk-breach-none-sub-description-part-one = Medzi vysokorizikové úniky údajov patria:
high-risk-breach-none-sub-description-ssn = Číslo sociálneho zabezpečenia
high-risk-breach-none-sub-description-bank-account = Informácie o bankovom účte
high-risk-breach-none-sub-description-cc-number = Čísla kreditných kariet
high-risk-breach-none-sub-description-pin = PIN kódy
high-risk-breach-none-continue = Pokračovať

# Security recommendations

security-recommendation-steps-label = Bezpečnostné odporúčania
security-recommendation-steps-title = Tu je naša rada:
security-recommendation-steps-cta-label = Rozumiem

# Phone security recommendation

security-recommendation-phone-title = Chráňte svoje telefónne číslo
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Vaše telefónne číslo bolo odhalené pri { $num_breaches } úniku údajov:
        [few] Vaše telefónne číslo bolo odhalené pri { $num_breaches } únikoch údajov:
        [many] Vaše telefónne číslo bolo odhalené pri { $num_breaches } únikoch údajov:
       *[other] Vaše telefónne číslo bolo odhalené pri { $num_breaches } únikoch údajov:
    }
security-recommendation-phone-description = Bohužiaľ toto nie je možné vyriešiť. Existujú však kroky, ktoré môžete podniknúť, aby ste zostali v bezpečí.
security-recommendation-phone-step-one = Blokujte spamovacie čísla, aby ste zabránili ďalším nevyžiadaným hovorom
security-recommendation-phone-step-two = Neklikajte na odkazy v SMS správach od neznámych odosielateľov. Ak sa vám zdá, že správa pochádza z dôveryhodného zdroja, zavolajte mu a potvrďte ju

# Email security recommendation

security-recommendation-email-title = Chráňte svoju e‑mailovú adresu
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Vaša e‑mailová adresa bola odhalená pri { $num_breaches } úniku údajov:
        [few] Vaša e‑mailová adresa bola odhalená pri { $num_breaches } únikoch údajov:
        [many] Vaša e‑mailová adresa bola odhalená pri { $num_breaches } únikoch údajov:
       *[other] Vaša e‑mailová adresa bola odhalená pri { $num_breaches } únikoch údajov:
    }
security-recommendation-email-description = Bohužiaľ toto nie je možné vyriešiť. Existujú však kroky, ktorými sa môžete chrániť.
security-recommendation-email-step-one = Neklikajte na odkazy v e‑mailoch od neznámych odosielateľov; ak sa zdá, že odkaz pochádza z dôveryhodného zdroja, zavolajte mu a potvrďte ho
security-recommendation-email-step-two = Pozrite si informácie o <link_to_info>phishingových podvodoch</link_to_info>
security-recommendation-email-step-three = Označte podozrivé e‑maily ako nevyžiadané a zablokujte odosielateľa
security-recommendation-email-step-four = V budúcnosti použite <link_to_info>e‑mailové masky služby { -brand-relay }</link_to_info> na ochranu vašej skutočnej e‑mailovej adresy

# IP security recommendation

security-recommendation-ip-title = Väčšie súkromie získate použitím VPN
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Vaša IP adresa bola odhalená pri { $num_breaches } úniku údajov:
        [few] Vaša IP adresa bola odhalená pri { $num_breaches } únikoch údajov:
        [many] Vaša IP adresa bola odhalená pri { $num_breaches } únikoch údajov:
       *[other] Vaša IP adresa bola odhalená pri { $num_breaches } únikoch údajov:
    }
security-recommendation-ip-description = Vaša IP adresa presne určuje vašu polohu a poskytovateľa internetových služieb. Hackeri môžu tieto informácie použiť na nájdenie vašej polohy alebo na pokus o pripojenie k vašim zariadeniam.
security-recommendation-ip-step-one = Použite sieť VPN (napríklad <link_to_info>{ -brand-mozilla-vpn }</link_to_info>), aby ste skryli svoju skutočnú IP adresu a používali internet súkromne.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Vaše heslo pre { $breach_name } bolo odhalené
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Objavilo sa pri úniku údajov dňa { $breach_date }.
leaked-passwords-description = Podvodníci ho môžu použiť na prístup k vášmu účtu a pravdepodobne sa ho pokúsia použiť aj na iných účtoch, aby zistili, či ste nepoužili rovnaké heslo. Heslo zmeňte všade, kde ste ho používali.
leaked-passwords-steps-title = Toto je potrebné urobiť
leaked-passwords-steps-subtitle = Toto si vyžaduje prístup k vášmu účtu, takže to budete musieť vyriešiť manuálne.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Zmeňte si heslo pre účet <b>{ $emails_affected }</b> na stránkach <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Zmeňte ho aj kdekoľvek inde, kde ste ho používali.
leaked-passwords-mark-as-fixed = Označiť ako vyriešené
leaked-passwords-skip = Teraz preskočiť
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Odhadovaný čas: { $estimated_time } minúta na stránku
        [few] Odhadovaný čas: { $estimated_time } minúty na stránku
        [many] Odhadovaný čas: { $estimated_time } minút na stránku
       *[other] Odhadovaný čas: { $estimated_time } minút na stránku
    }

# Leaked Security Questions

leaked-security-questions-title = Vaše bezpečnostné otázky boli odhalené
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Objavili sa pri úniku údajov stránky { $breach_name } dňa { $breach_date }.
leaked-security-questions-description = Podvodníci ich môžu použiť na prístup k vašim účtom a iným stránkam, na ktorých ste použili rovnaké bezpečnostné otázky. Aktualizujte ich teraz, aby ste ochránili svoje účty.
leaked-security-questions-steps-title = Toto je potrebné urobiť
leaked-security-questions-steps-subtitle = Toto si vyžaduje prístup k vášmu účtu, takže to budete musieť vyriešiť manuálne.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Aktualizujte svoje bezpečnostné otázky pre <b>{ $email_affected }</b> na stránkach <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Aktualizujte ich na akejkoľvek inej stránke, kde ste použili rovnaké bezpečnostné otázky. Pre každý účet použite iné bezpečnostné otázky.
