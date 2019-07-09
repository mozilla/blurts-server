# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Potvrďte své přihlášení k zasílání upozornění od Firefox Monitoru klepnutím na tlačítko níže do 24 hodin od odeslání tohoto e-mailu.
    Vaše hlášení vám pak pošleme co nejdříve.
verify-my-email = Ověřit e-mailovou adresu
report-scan-another-email = Vyhledat další e-mailovou adresu ve { -product-name(case: "loc") }
automated-message = Toto je automaticky zaslaný e-mail – pokud jste si ho nevyžádali, můžete ho ignorovat.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Tuto zprávu jsme poslali na adresu { $userEmail }, protože byla přihlášena k dostávání upozornění od { -product-name(case: "gen") }.
unsubscribe-email-link = Pokud již nechcete upozornění od { -product-name(case: "gen") } dostávat, odhlaste se.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Hlášení { -product-name(case: "gen") }
report-date = Datum:
email-address = E-mailová adresa:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Co teď dělat?
report-headline =
    { $breachCount ->
        [0] Zatím jde všechno dobře.
        [one] Váš účet se objevil v jednom úniku dat.
        [few] Váš účet se objevil ve { $breachCount } únicích dat.
       *[other] Váš účet se objevil v { $breachCount } únicích dat.
    }
report-subhead-no-breaches =
    Váš účet se nevyskytuje v našem kompletním hlášení o únicích dat.
    To je dobrá zpráva, ale pořád ještě můžete něco zlepšovat.
    K dalšímu úniku dat může dojít kdykoliv. Přečtěte si, jak můžete ochránit svá hesla.
report-subhead-found-breaches = Toto je vaše kompletní hlášení z Firefox Monitoru, které obsahuje všechny známé úniky dat, v nichž se vyskytuje tato e-mailová adresa.
report-pwt-blurb =
    Hesla jsou velmi cenná a proto jich jsou denně ukradeny tisíce, načež jsou pak směňovány nebo prodávány na černém trhu. 
    Silnější hesla lépe chrání vaše účty a všechna osobní data, která v nich máte uložena.
report-pwt-headline-1 = Používejte u každého účtu jiné heslo
report-pwt-summary-1 =
    Opakovaným používáním jednoho hesla necháváte hackerům otevřené dveře.
    Mohou ho totiž použít k přihlášení se i do jiných vašich účtů.
report-pwt-headline-2 = Vytvářejte silná a unikátní hesla
report-pwt-summary-2 = Hackeři při pokusu o uhodnutí vašeho hesla užívají seznam běžně používaných hesel. Čím delší a náhodnější je vaše heslo, tím těžší ho bude uhádnout.
report-pwt-headline-3 = Bezpečnostní otázky berte jako přídavná hesla
report-pwt-summary-3 =
    Webové stránky nekontrolují, jestli jsou vaše odpovědi správně, nýbrž jenom jestli jsou pokaždé stejné.
    Připravte si dlouhé a náhodné odpovědi a někam si je bezpečně uložte.
report-pwt-headline-4 = Používejte správce hesel
report-pwt-summary-4 = Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden umí vygenerovat silná hesla, bezpečně si je uložit a automaticky je za vás na webových stránkách vyplnit, takže už si ani nemusíte každé pamatovat.
# A link to legal information about mozilla products.
legal = Právní informace
# Share Firefox Monitor by email subject line
share-by-email-subject = Zjistěte, zda jste nebyli součástí nějakého úniku dat.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Zdravím,
    { -brand-name } má bezplatnou službu, u níž si můžete zkontrolovat, jestli jste nebyli součástí nějakého úniku dat. Jak to funguje:
    1. Přejděte na adresu { "https://monitor.firefox.com" } a vyhledejte svou e-mailovou adresu.
    2. Uvidíte, jestli byly vaše internetové účty součástí úniku dat.
    3. { -product-name } vám nabídne pár tipů, co dál a jak zůstat v bezpečí.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Tento e-mail jste obdrželi, protože jste se zaregistrovali k dostávání upozornění od { -product-name(case: "gen") }.
    Toto je automaticky zaslaný e-mail. Potřebujete-li pomoc, navštivte { $faqLink }.
# Button text
verify-email-cta = Ověřit e-mailovou adresu
# Headline of verification email
email-link-expires = Platnost tohoto odkazu vyprší za 24 hodin
email-verify-blurb = Ověřte svou e-mailovou adresu, aby byla přidána do { -product-name(case: "gen") } a zaregistrována k dostávání upozornění na úniky dat.
# Email headline
email-breach-summary-for-email = Souhrnné informace o únicích pro { $userEmail }
# Subject line of email
email-subject-found-breaches = { -product-name } našel vaše údaje v těchto únicích dat
# Subject line of email
email-subject-verify = Ověření e-mailové adresy pro { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Zjistit více o službě { $fxmLink }
fxm-warns-you-found-breaches =
    { -product-name } vás upozorňuje na úniky dat, jejichž součástí byly vaše osobní údaje.
    Jste také zaregistrováni k obdržení upozornění, jestliže se vaše e-mailová adresa vyskytne v novém úniku dat.
