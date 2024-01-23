# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Vysoce rizikové úniky dat
fix-flow-nav-leaked-passwords = Uniklá hesla
fix-flow-nav-security-recommendations = Bezpečnostní doporučení
guided-resolution-flow-exit = Zpět na nástěnku
guided-resolution-flow-back-arrow = Přejít na předchozí krok
guided-resolution-flow-next-arrow = Přejít na další krok
guided-resolution-flow-step-navigation-label = Návody

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Pojďme dál
fix-flow-celebration-next-recommendations-label = Podívejte se na doporučení
fix-flow-celebration-next-dashboard-label = Přejít na svou nástěnku

## High-risk flow

fix-flow-celebration-high-risk-title = Opravili jste své vysoce rizikové expozice!
fix-flow-celebration-high-risk-description-in-progress = Tato práce může být náročná, ale je důležitá pro vaši bezpečnost. Pokračujte v dobré práci.
fix-flow-celebration-high-risk-description-done = Tato práce může být náročná, ale je důležitá pro vaši bezpečnost.
fix-flow-celebration-high-risk-description-next-passwords = Pojďme opravit vaše vyzrazená hesla.
fix-flow-celebration-high-risk-description-next-security-questions = Pojďme na opravu odhalených bezpečnostních otázek.
fix-flow-celebration-high-risk-description-next-security-recommendations = Dále vám dáme osobní bezpečnostní doporučení na základě toho, jaká vaše data byla vyzrazena.
fix-flow-celebration-high-risk-description-next-dashboard = Dosáhli jste konce svých kroků. Na nástěnce si můžete zobrazit úkoly a sledovat svůj postup.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Vaše hesla jsou nyní chráněna!
fix-flow-celebration-security-questions-title = Vaše bezpečnostní otázky jsou chráněny!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Nyní zkontrolujeme a aktualizujeme vaše odhalené bezpečnostní otázky.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Dále vám dáme osobní bezpečnostní doporučení na základě toho, jaká vaše data byla vyzrazena.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Výborně! Dosáhli jste konce svých kroků. Na nástěnce si můžete zobrazit úkoly a sledovat svůj postup.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Dokončili jste všechna naše doporučení!
fix-flow-celebration-security-recommendations-description-next-dashboard = Výborně! Dosáhli jste konce svých kroků. Na nástěnce si můžete zobrazit úkoly a sledovat svůj postup.

# High Risk Data Breaches

high-risk-breach-heading = Zde je návod, jak postupovat
high-risk-breach-subheading = Tento problém vyžaduje přístup k vašim citlivým údajům, které proto musíte opravit ručně.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Bylo to nalezeno v { $num_breaches } únikech:
        [few] Vyskytla se v { $num_breaches } únicích dat:
       *[other] Vyskytla se v { $num_breaches } únicích dat:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date> dne { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Označit jako vyřešené
high-risk-breach-skip = Nyní přeskočit
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Váš odhadovaný čas: více než { $estimated_time } minut
        [few] Váš odhadovaný čas: více než { $estimated_time } minut
       *[other] Váš odhadovaný čas: více než { $estimated_time } minut
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Číslo vaší platební karty bylo odhaleno
high-risk-breach-credit-card-description = Každý, kdo ho získá, může provádět neoprávněné nákupy, za které můžete nést odpovědnost. Jednejte hned a vyhněte se finančním škodám.
high-risk-breach-credit-card-step-one = Pokud tuto kartu stále máte, kontaktujte vydavatele a nahlaste nám, že je karta ukradena.
high-risk-breach-credit-card-step-two = Požádat o novou kartu s novým číslem.
high-risk-breach-credit-card-step-three = Zkontrolujte účty za neoprávněné platby.

# Bank Account Breaches

high-risk-breach-bank-account-title = Číslo vašeho bankovního účtu bylo odhaleno
high-risk-breach-bank-account-description = Pokud podniknete kroky co nejdříve, můžete získat další právní ochranu, která vám pomůže získat zpět jakékoli ztráty.
high-risk-breach-bank-account-step-one = Okamžitě informujte svou banku, že číslo vašeho účtu bylo prozrazeno.
high-risk-breach-bank-account-step-two = Změňte si číslo svého účtu.
high-risk-breach-bank-account-step-three = Zkontrolujte, zda na vašich účtech nejsou neoprávněně pohyby.

# Social Security Number Breaches

high-risk-breach-social-security-title = Vaše číslo sociálního zabezpečení bylo odhalené
high-risk-breach-social-security-description = Podvodníci si mohou otevřít nové půjčky nebo kreditní karty s vaším číslem sociálního zabezpečení. Jednejte rychle, abyste předešli finančním škodám.
high-risk-breach-social-security-step-one = Chraňte se tím, že si <link_to_info>nastavíte upozornění na podvod nebo si nastavíte zmrazení svého kreditu.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Zkontrolujte stav svého účtu</link_to_info>, jestli neobsahuje nerozpoznané účty.

# Social Security Number Modal

ssn-modal-title = O upozorněních na podvody a zmrazení úvěrů
ssn-modal-description-fraud-part-one = <b>Upozornění na podvod</b> vyžaduje od firem ověření vaší identity dříve, než bude připsána na vaše jméno další kredit. Je zdarma, trvá jeden rok a nebude negativně ovlivňovat vaše kreditní skóre.
ssn-modal-description-fraud-part-two = Pro založení kontaktujte kteroukoliv ze tří úvěrových institucí. Nemusíte kontaktovat všechny tři.
ssn-modal-description-freeze-credit-part-one = <b>Zmrazení vašeho kreditu</b> zabrání komukoliv otevřít nový účet vedený na vaše jméno. Je zdarma a neovlivní negativně vaše kreditní skóre, ale před otevřením jakéhokoli nového účtu jej musíte rozmrazit.
ssn-modal-description-freeze-credit-part-two = Pro zmrazení svého kreditu kontaktujte každou ze tří úvěrových institucí — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> a <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Zjistěte více o upozorněních na podvody a zmrazení kreditu
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Váš PIN byl prozrazen
high-risk-breach-pin-description = Pokud podniknete kroky co nejdříve, můžete získat další právní ochranu, která vám pomůže získat zpět jakékoli ztráty.
high-risk-breach-pin-step-one = Okamžitě informujte svou banku, že byl váš PIN vyzrazen.
high-risk-breach-pin-step-two = Změňte svůj PIN všude, kde jste použili stejný PIN.
high-risk-breach-pin-step-three = Zkontrolujte účty za neoprávněné platby.

# No high risk breaches found

high-risk-breach-none-title = Skvělá zpráva, neobjevili jsme žádný vysoce rizikový únik dat
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Únik dat zjišťujeme na základě vaší e-mailové adresy a pro { $email_list } jsme nezaznamenali žádný vysoce rizikový únik dat.
high-risk-breach-none-sub-description-part-one = Mezi vysoce rizikové úniky údajů patří:
high-risk-breach-none-sub-description-ssn = Číslo sociálního zabezpečení
high-risk-breach-none-sub-description-bank-account = Informace o bankovním účtu
high-risk-breach-none-sub-description-cc-number = Čísla platebních karet
high-risk-breach-none-sub-description-pin = PIN kódy
high-risk-breach-none-continue = Pokračovat

# Security recommendations

security-recommendation-steps-label = Bezpečnostní doporučení
security-recommendation-steps-title = Zde je naše rada:
security-recommendation-steps-cta-label = Rozumím

# Phone security recommendation

security-recommendation-phone-title = Chraňte své telefonní číslo
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Vaše telefonní číslo bylo odhaleno při { $num_breaches } úniků údajů:
        [few] Vaše telefonní číslo bylo odhaleno v { $num_breaches } únicích údajů:
       *[other] Vaše telefonní číslo bylo odhaleno v { $num_breaches } únicích údajů:
    }
security-recommendation-phone-description = Bohužel to nelze vzít zpět. Můžete však podniknout určité kroky, abyste zůstali v bezpečí.
security-recommendation-phone-step-one = Blokujte nevyžádana čísla, abyste zabránili dalším nevyžádaným hovorům
security-recommendation-phone-step-two = Neklikejte na odkazy v textech od neznámých odesílatelů; pokud se zdá, že pochází z důvěryhodného zdroje, zavolejte pro potvrzení

# Email security recommendation

security-recommendation-email-title = Chraňte svou e-mailovou adresu
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Vaše e-mailová adresa byla vyzrazena při { $num_breaches } úniku dat:
        [few] Vaše e-mailová adresa byla vyzrazena v { $num_breaches } únikech:
       *[other] Vaše e-mailová adresa byla vyzrazena v { $num_breaches } únikech:
    }
security-recommendation-email-description = Toto bohužel nenapravíte. Existují však kroky, které můžete podniknout, abyste se ochránili.
security-recommendation-email-step-one = Neklikejte na odkazy v e-mailech od neznámých odesílatelů; pokud se zdá, že pochází z důvěryhodného zdroje, zavolejte pro potvrzení
security-recommendation-email-step-two = Pozor na <link_to_info>phishingové podvody</link_to_info>
security-recommendation-email-step-three = Označí podezřelé e-maily jako spam a zablokuje odesílatele
security-recommendation-email-step-four = Používejte <link_to_info>e-mailové masky služby { -brand-relay }</link_to_info> pro budoucí ochranu svých e-mailů

# IP security recommendation

security-recommendation-ip-title = Pro větší soukromí použijte VPN
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Vaše IP adresa byla vyzrazena při { $num_breaches } úniku dat:
        [few] Vaše IP adresa byla vyzrazena v { $num_breaches } únikech:
       *[other] Vaše IP adresa byla vyzrazena v { $num_breaches } únikech:
    }
security-recommendation-ip-description = Vaše IP adresa přesně určuje vaši pozici a poskytovatele internetových služeb. Hackeři mohou tyto informace použít k zjištění vaší polohy nebo k pokusu připojit se k vašim zařízením.
security-recommendation-ip-step-one = Použijte VPN (například <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) ke skrytí své skutečné IP adresy a používejte internet soukromě.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Vaše heslo v režimu { $breach_name } bylo prozrazeno
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Objevila se v úniku dat dne { $breach_date }.
leaked-passwords-description = Podvodníci mají přístup k vašemu účtu a pravděpodobně se ho pokusí použít na jiných účtech, aby zjistili, zda jste nepoužili stejné heslo. Změňte ho všude, kde jste ho použili pro vaši ochranu.
leaked-passwords-steps-title = Toto je potřeba udělat
leaked-passwords-steps-subtitle = Tato chyba vyžaduje přístup k vašemu účtu, takže ji budete muset opravit ručně.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Změňte si své heslo pro <b>{ $emails_affected }</b> na <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Změňte ho všude tam, kde jste ho použili.
leaked-passwords-mark-as-fixed = Označit jako vyřešené
leaked-passwords-skip = Nyní přeskočit
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Odh. čas do dokončení: { $estimated_time } minut na stránku
        [few] Odh. čas do dokončení: { $estimated_time } minut na stránku
       *[other] Odh. čas do dokončení: { $estimated_time } minut na stránku
    }

# Leaked Security Questions

leaked-security-questions-title = Vaše bezpečnostní otázky byly odhaleny
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Objevily se v úniku dat z { $breach_name } dne { $breach_date }.
leaked-security-questions-description = Podvodníci je mohou použít pro přístup k vašim účtům a jakýmkoli dalším stránkám, kde jste použili stejné bezpečnostní otázky. Pro ochranu vašich účtů je aktualizujte.
leaked-security-questions-steps-title = Zde je návod, jak postupovat
leaked-security-questions-steps-subtitle = Tato chyba vyžaduje přístup k vašemu účtu, takže ji budete muset opravit ručně.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Aktualizujte bezpečnostní otázku pro účet <b>{ $email_affected }</b> na <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Aktualizujte je na jakékoliv jiné stránce, kde používáte stejné bezpečnostní otázky. Ujistěte se, že pro každý účet používáte jiné bezpečnostní otázky.
