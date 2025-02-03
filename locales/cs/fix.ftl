# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Vysoce rizikové úniky dat
fix-flow-nav-leaked-passwords = Uniklá hesla
fix-flow-nav-security-recommendations = Bezpečnostní doporučení
guided-resolution-flow-exit = Zpět na nástěnku
guided-resolution-flow-next-arrow = Přejít na další krok
guided-resolution-flow-next-arrow-sub-step = Přejde na další výsledek
guided-resolution-flow-step-navigation-label = Návody

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Pojďme dál
fix-flow-celebration-next-recommendations-label = Podívejte se na doporučení
fix-flow-celebration-next-dashboard-label = Přejít na svou nástěnku

## High-risk flow

fix-flow-celebration-high-risk-title = Vyřešili jste svoje vysoce rizikové úniky!
fix-flow-celebration-high-risk-description-in-progress = Tato práce se může zdát náročná, ale je důležité ji vykonávat, abyste byli v bezpečí. Pokračujte v dobré práci.
fix-flow-celebration-high-risk-description-done = Tato práce se může zdát náročná, ale je důležité ji vykonávat, abyste byli v bezpečí.
fix-flow-celebration-high-risk-description-next-passwords = Nyní pojďme vyřešit vaše odhalená hesla.
fix-flow-celebration-high-risk-description-next-security-questions = Nyní pojďme vyřešit vaše odhalené bezpečnostní otázky.
fix-flow-celebration-high-risk-description-next-security-recommendations = Dále vám poskytneme personalizovaná bezpečnostní doporučení na základě toho, jaká vaše data byla odhalena.
fix-flow-celebration-high-risk-description-next-dashboard = Dostali jste se na poslední krok. Na nástěnce si můžete zobrazit všechny položky, vykonávat akce a sledovat svůj pokrok.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Vaše hesla jsou nyní chráněna!
fix-flow-celebration-security-questions-title = Vaše bezpečnostní otázky jsou chráněny!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Nyní zkontrolujme a aktualizujme vaše odhalené bezpečnostní otázky.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Dále vám poskytneme osobní bezpečnostní doporučení na základě toho, jaká vaše data byla odhalena.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Velmi dobré! Dostali jste se na poslední krok. Na nástěnce si můžete prohlédnout všechny položky akcí a sledovat svůj pokrok.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Dokončili jste všechna naše doporučení!
fix-flow-celebration-security-recommendations-description-next-dashboard = Výborně! Dostali jste se na poslední krok. Na nástěnce si můžete zobrazit všechny položky a sledovat svůj postup.

# High Risk Data Breaches

high-risk-breach-heading = Zde je návod, jak postupovat
high-risk-breach-subheading = Toto vyžaduje přístup k vašim citlivým informacím, takže to budete muset vyřešit ručně.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Údaj se objevil v { $num_breaches } úniku údajů:
        [few] Údaj se objevil v { $num_breaches } únicích údajů:
       *[other] Údaj se objevil v { $num_breaches } únicích údajů:
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
        [one] Odhadovaný čas: více než { $estimated_time } minuta
        [few] Odhadovaný čas: více než { $estimated_time } minuty
       *[other] Odhadovaný čas: více než { $estimated_time } minut
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Číslo vaší platební karty bylo odhaleno
high-risk-breach-credit-card-description = Každý, kdo ho získá, může provádět neoprávněné nákupy, za které můžete nést odpovědnost. Jednejte hned a vyhněte se finančním škodám.
high-risk-breach-credit-card-step-one = Pokud tuto kartu stále máte, kontaktujte jejího vydavatele a nahlaste její zcizení.
high-risk-breach-credit-card-step-two = Požádejte o novou kartu s novým číslem.
high-risk-breach-credit-card-step-three = Zkontrolujte své účty, zda na nich nemáte neoprávněné pohyby.

# Bank Account Breaches

high-risk-breach-bank-account-title = Číslo vašeho bankovního účtu bylo odhaleno
high-risk-breach-bank-account-description = Pokud podniknete kroky co nejdříve, získáte větší právní ochranu, která vám pomůže získat zpět případné ztráty.
high-risk-breach-bank-account-step-one = Okamžitě oznamte své bance, že bylo zneužito číslo vašeho účtu.
high-risk-breach-bank-account-step-two = Změňte si číslo svého účtu.
high-risk-breach-bank-account-step-three = Zkontrolujte, zda na vašich účtech nejsou neoprávněně pohyby.

# Social Security Number Breaches

high-risk-breach-social-security-title = Vaše číslo sociálního zabezpečení bylo odhalené
high-risk-breach-social-security-description = Podvodníci si mohou otevřít nové půjčky nebo kreditní karty s vaším číslem sociálního pojištění. Jednejte rychle, abyste předešli finanční újmě.
high-risk-breach-social-security-step-one = Chraňte se tím, že si <link_to_info>nastavíte upozornění na podvod nebo si nastavíte zmrazení svého kreditu.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Zkontrolujte si pohyby na kreditní kartě</link_to_info>, zda se tam nenachází neznámé platby.

# Social Security Number Modal

ssn-modal-title = O upozorněních na podvody a zmrazení úvěrů
ssn-modal-description-fraud-part-one = <b>Upozornění na podvod</b> vyžaduje od firem ověření vaší identity dříve, než bude připsán na vaše jméno další kredit. Je zdarma, trvá jeden rok a nebude negativně ovlivňovat vaše kreditní skóre.
ssn-modal-description-fraud-part-two = Chcete-li si ho zřídit, obraťte se na kterýkoli ze tří úvěrových úřadů. Nemusíte kontaktovat všechny tři.
ssn-modal-description-freeze-credit-part-one = <b>Zmrazení vašeho úvěru</b> zabrání komukoli, aby si na vaše jméno otevřel nový účet. Je to zdarma a nemá to negativní vliv na vaše kreditní skóre, ale před otevřením nových účtů ho musíte rozmrazit.
ssn-modal-description-freeze-credit-part-two = Pro zmrazení svého úvěru kontaktujte každou ze tří úvěrových institucí — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> či<transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Další informace o upozorněních na podvody a zmrazení úvěrů
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Váš PIN byl prozrazen
high-risk-breach-pin-description = Pokud podniknete kroky co nejdříve, získáte větší právní ochranu, která vám pomůže získat zpět případné ztráty.
high-risk-breach-pin-step-one = Okamžitě oznamte své bance, že byl váš PIN kód prozrazen.
high-risk-breach-pin-step-two = Změňte si PIN kdekoli, kde jste použili stejný.
high-risk-breach-pin-step-three = Zkontrolujte, zda na vašich účtech nejsou neoprávněné pohyby.

# No high risk breaches found

high-risk-breach-none-title = Skvělá zpráva, neobjevili jsme žádný vysoce rizikový únik údajů
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Úniky údajů zjišťujeme na základě vaší e-mailové adresy a pro { $email_list } jsme nenašli žádné vysoce rizikové úniky dat.
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
security-recommendation-phone-step-two = Neklikejte na odkazy v textových zprávách od neznámých odesílatelů. Pokud se zdá, že je zpráva z důvěryhodného zdroje, zavolejte přímo a ověřte si to.

# Email security recommendation

security-recommendation-email-title = Chraňte svou e-mailovou adresu
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Vaše e-mailová adresa byla vyzrazena při { $num_breaches } úniku údajů:
        [few] Vaše e-mailová adresa byla vyzrazena v { $num_breaches } únicích údajů:
       *[other] Vaše e-mailová adresa byla vyzrazena v { $num_breaches } únicích údajů:
    }
security-recommendation-email-description = Bohužel to nelze opravit. Můžete však podniknout určité kroky, abyste se ochránili.
security-recommendation-email-step-one = Neklikejte na odkazy v e-mailech od neznámých odesílatelů. Pokud se zdá, že pochází z důvěryhodného zdroje, zavolejte mu a ověřte si to.
security-recommendation-email-step-two = Pozor na <link_to_info>phishingové podvody</link_to_info>
security-recommendation-email-step-three = Označte podezřelé e-maily jako nevyžádanou poštu a zablokuje odesílatele
security-recommendation-email-step-four = Používejte <link_to_info>e-mailové masky služby { -brand-relay }</link_to_info> pro budoucí ochranu svých e-mailů

# IP security recommendation

security-recommendation-ip-title = Pro větší soukromí použijte VPN
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Vaše IP adresa byla vyzrazena při { $num_breaches } úniku údajů:
        [few] Vaše IP adresa byla vyzrazena v { $num_breaches } únicích údajů:
       *[other] Vaše IP adresa byla vyzrazena v { $num_breaches } únicích údajů:
    }
security-recommendation-ip-description = Vaše IP adresa určuje vaši polohu a poskytovatele internetových služeb. Hackeři mohou tyto informace použít k nalezení vaší polohy nebo k pokusu o připojení k vašim zařízením.
security-recommendation-ip-step-one = Použijte VPN (například <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) ke skrytí své skutečné IP adresy a používejte internet soukromě.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Vaše heslo pro { $breach_name } bylo odhaleno
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Objevilo se při úniku údajů dne { $breach_date }.
leaked-passwords-description = Podvodníci mohou získat přístup k vašemu účtu a pravděpodobně se ho pokusí použít na jiných účtech, aby zjistili, zda jste použili stejné heslo. Změňte si ho všude, kde jste ho použili, abyste se ochránili.
leaked-passwords-steps-title = Toto je potřeba udělat
leaked-passwords-steps-subtitle = To vyžaduje přístup k vašemu účtu, takže to budete muset vyřešit ručně.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Změňte si heslo pro účet <b>{ $emails_affected }</b> na stránkách<link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Změňte si ho i kdekoliv jinde, kde jste ho používali.
leaked-passwords-mark-as-fixed = Označit jako vyřešené
leaked-passwords-skip = Nyní přeskočit
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Odhadovaný čas: { $estimated_time } minuta na stránku
        [few] Odhadovaný čas: { $estimated_time } minuty na stránku
       *[other] Odhadovaný čas: { $estimated_time } minut na stránku
    }

# Leaked Security Questions

leaked-security-questions-title = Vaše bezpečnostní otázky byly odhaleny
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Objevily se v úniku údajů ze stránky { $breach_name } dne { $breach_date }.
leaked-security-questions-description = Podvodníci je mohou použít k přístupu k vašim účtům a k jakémukoli jinému webu, kde jste použili stejné bezpečnostní otázky. Aktualizujte je nyní, abyste ochránili své účty.
leaked-security-questions-steps-title = Zde je návod, jak postupovat
leaked-security-questions-steps-subtitle = To vyžaduje přístup k vašemu účtu, takže to budete muset vyřešit ručně.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Aktualizujte svoje bezpečnostní otázky pro <b>{ $email_affected }</b> na stránce <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Aktualizujte je na jakékoliv jiné stránce, kde používáte stejné bezpečnostní otázky. Ujistěte se, že pro každý účet používáte jiné bezpečnostní otázky.
