# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Hlášení { -product-name(case: "gen") }
report-date = Datum:
email-address = E-mailová adresa:
# A link to legal information about mozilla products.
legal = Právní informace
# Unsubscribe link in email.
email-unsub-link = Zrušte jejich příjem
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Tento e-mail jste obdrželi, protože jste se zaregistrovali k příjmu upozornění od { -product-name(case: "gen") }. Nepřejete si už tyto e-maily dostávat? { $unsubLink }. Toto je automaticky zaslaný e-mail. Potřebujete-li pomoc, navštivte { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Tento e-mail jste obdrželi, protože jste se zaregistrovali k příjmu upozornění od { -product-name(case: "gen") }.
    Toto je automaticky zaslaný e-mail. Potřebujete-li pomoc, navštivte { $faqLink }.
# Button text
verify-email-cta = Ověřit e-mailovou adresu
# Button text
see-all-breaches = Zobrazit všechny úniky
# Headline of verification email
email-link-expires = Platnost tohoto odkazu vyprší za 24 hodin
email-verify-blurb = Ověřte svou e-mailovou adresu, aby byla přidána do { -product-name(case: "gen") } a zaregistrována k příjmu upozornění na úniky dat.
# Email headline
email-found-breaches-hl = Zde je váš souhrn dřívějších úniků
# Email headline
email-breach-summary-for-email = Souhrnné informace o únicích pro adresu { $userEmail }
# Email headline
email-no-breaches-hl = Adresa { $userEmail } se nevyskytuje v žádném známém úniku dat
# Email headline
email-alert-hl = Adresa { $userEmail } se objevila v novém úniku dat
# Subject line of email
email-subject-found-breaches = { -product-name } našel vaše údaje v těchto únicích dat
# Subject line of email
email-subject-no-breaches = { -product-name } nenašel žádné známé úniky dat
# Subject line of email
email-subject-verify = Ověření e-mailové adresy pro { -product-name(case: "acc") }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Zjistit více o službě { $fxmLink }
email-sensitive-disclaimer =
    Vzhledem k citlivé povaze tohoto úniku nejsou e-mailové adresy, které jsou jeho součástí, veřejně dohledatelné.
    Toto upozornění jste dostali, protože jste ověřeným majitelem této e-mailové adresy.
fxm-warns-you-no-breaches =
    { -product-name } vás upozorňuje na úniky dat, jejichž součástí byly vaše osobní údaje.
    Dosud jste nebyli součástí žádného úniku. Pošleme vám upozornění, jestliže se vaše e-mailová adresa vyskytne v novém úniku dat.
fxm-warns-you-found-breaches =
    { -product-name } vás upozorňuje na úniky dat, jejichž součástí byly vaše osobní údaje.
    Jste také zaregistrováni k obdržení upozornění, jestliže se vaše e-mailová adresa vyskytne v novém úniku dat.
email-breach-alert-blurb = { -product-name } vás upozorňuje na úniky dat, jejichž součástí byly vaše osobní údaje. Právě jsme obdrželi informace o dalším úniku dat.
# List headline
faq-list-headline = Často kladené otázky
# Link Title
faq-v2-1 = Tato společnost či web mi nic neříká. Proč dostávám oznámení o tomto úniku?
# Link Title
faq-v2-2 = Je třeba něco dělat, pokud se únik odehrál před lety nebo šlo o starý účet?
# Link Title
faq-v2-3 = Právě jsem zjistil, že byly mé údaje součástí úniku dat. Co mám dělat dál?
# Link Title
faq-v2-4 = Jak { -product-name } zachází s úniky citlivých dat?
# This string contains nested markup that becomes a link to Firefox Monitor
# later in the code. Please do not modify or remove "<a>" and "</a>".
pre-fxa-message = <a>Vytvořte si zdarma { -brand-fxa(case: "acc", capitalization: "lower") }</a> a můžete přidat až 15 e-mailových adres.
# Section headline
monitor-another-email = Chcete monitorovat další e-mailovou adresu?
# Subject line of email
pre-fxa-subject = Nejnovější informace od { -product-name(case: "gen") }
pre-fxa-headline = Co se u { -product-name(case: "gen") } změnilo
pre-fxa-blurb = Zde jsou informace o změnách, které byly provedeny od okamžiku vaší registrace do { -product-name(case: "gen") }, což je služba monitorující známé úniky dat pro případ, že se v nich objeví vaše osobní údaje. Propojujeme ji s účtem Firefoxu.
pre-fxa-tout-1 = Buďte informováni o větším množství úniků
pre-fxa-p-1 = <a>Vytvořte si účet</a> a nechte si monitorovat až 15 e-mailových adres pro případ úniku dat. Doporučujeme přidat každou e-mailovou adresu, kterou jste použili při vytváření internetových účtů.
pre-fxa-tout-2 = Získejte svou nástěnku s úniky
pre-fxa-p-2 =
    Mějte všechny úniky dat pěkně na jednom místě, abyste věděli, která hesla máte změnit.
    Nástěnka s přehledem úniků je k dispozici pouze s účtem.
pre-fxa-tout-3 = Dostávejte dál e-mailová upozornění
pre-fxa-p-3 = Stále budete dostávat upozornění od { -product-name(case: "gen") }. Dáme vám vědět, když se vaše údaje vyskytnou v novém úniku dat.
# Button at the bottom of pre-fxa email.
create-account = Vytvořit účet
# More security products
more-products-headline = Chraňte se pomocí dalších našich produktů
more-products-vpn = Celková ochrana pro každé vaše zařízení
more-products-cta-vpn = Získat { -product-name-vpn }
more-products-relay = Skryjte svou skutečnou e-mailovou adresu, abyste ochránili svou identitu.
more-products-cta-relay = Získat { -product-name-relay }

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Tento automatický e-mail dostáváte jako předplatitel { -product-name(case: "gen") }. <br>Nastavení zasílání e-mailů můžete kdykoli změnit <a { $unsubscribe-link-attr }>zde</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Údaje o únicích poskytl <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

email-unresolved-heading = Máte nevyřešené úniky
email-unresolved-subhead = Vaše e-mailová adresa se stala součástí úniku dat. <br>Ihned to napravte pomocí { -product-name(case: "gen") }.
email-is-affected = Vaše e-mailová adresa { $email-address } je předmětem nejméně jednoho úniku dat
email-more-detail = Přihlaste se do { -product-name(case: "gen") }, abyste se dozvěděli více podrobností o svých únicích (včetně toho, kdy k nim došlo a jaké údaje byly vyzrazeny), a zjistili, jak byste měli postupovat, když se vaše e-mailová adresa stala součástí úniku dat.
email-breach-status = Aktuální stav případů úniků
# table row 1 label
email-monitored = Celkem monitorovaných e-mailů:
# table row 2 label
email-breach-total = Celkový počet úniků:
