# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
click-to-verify =
    Potvrďte své přihlášení ke službě { -product-name } do 24 hodin od odeslání tohoto e-mailu.
    Hlášení o vašich účtech vám pak pošleme co nejdříve.
verify-my-email = Ověřit e-mailovou adresu
report-scan-another-email = Vyhledat další e-mailovou adresu ve službě { -product-name }
automated-message = Toto je automaticky zaslaný e-mail - pokud jste si ho nevyžádali, můžete ho ignorovat.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Tuto zprávu jsme poslali na adresu { $userEmail }, protože jste ji vy nebo někdo jiný přihlásil k zasílání upozornění ze služby { -product-name }.
unsubscribe-email-link = Pokud už nechcete upozornění ze služby { -product-name } dostávat, odhlaste se.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Hlášení { -product-name }
report-date = Datum nahlášení:
email-address = E-mailová adresa:
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Toto je kompletní hlášení ze služby { -product-name }, které obsahuje všechny známé úniky dat s touto e-mailovou adresou.
report-no-breaches =
    Vaše e-mailová adresa není v naší databázi známých úniků dat.
    K dalšímu úniku dat ale může dojít kdykoliv. Zabezpečte svá osobní data na internetu.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Co dál
report-headline =
    { $breachCount ->
        [0] Zatím jde všechno dobře.
        [one] Váš účet byl nalezen v jednom úniku dat.
        [few] Váš účet byl nalezen ve { $breachCount } únicích dat.
       *[other] Váš účet byl nalezen v { $breachCount } únicích dat.
    }
report-subhead-no-breaches =
    Váš účet nebyl součástí naší databáze úniků dat.
    To je dobrá zpráva, ale pořád ještě můžete něco zlepšovat.
    K dalšímu úniku dat může dojít kdykoliv. Přečtěte si, jak můžete ochránit svá hesla.
report-subhead-found-breaches = Toto je vaše kompletní hlášení ze služby { -product-name }, které obsahuje všechny známé úniky dat s touto e-mailovou adresou.
breach-alert-headline = Váš účet byl součástí úniku dat.
breach-alert-subhead = Nedávno nahlášený únik dat obsahuje vaši e-mailovou adresu a následující data
report-pwt-blurb =
    Hesla jsou velmi cenná a proto jich jsou denně ukradeny tisíce a tisíce a směňovány nebo prodávány na černém trhu. 
    Silnější hesla lépe chrání vaše účty a všechna osobní data, která v nich máte uložena.
report-pwt-headline-1 = Používejte rozdílná hesla pro každý účet
report-pwt-summary-1 =
    Používáním stejného hesla necháváte hackerům otevřené dveře.
    I oni mohou použít stejné heslo pro přihlášení ke všem vašim účtům.
report-pwt-headline-2 = Vytvářejte silná a unikátní hesla
report-pwt-summary-2 = Hackeři používají seznam běžně používaných hesel, aby se pokusili uhodnout to vaše. Čím delší a náhodnější je vaše heslo, tím těžší ho bude uhádnout.
report-pwt-headline-3 = Považujte bezpečnostní otázky jako hesla
report-pwt-summary-3 =
    Webové stránky nekontrolují, jestli jsou vaše odpovědi správně, jenom jestli jsou pokaždé stejné.
    Připravte si dlouhé a náhodné odpovědi a někam si je bezpečně uložte.
report-pwt-headline-4 = Používejte správce hesel
report-pwt-summary-4 = Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden umí vygenerovat silná, bezpečně je uložit a automaticky je pro vás na webových stránkách vyplnit, takže si nemusíte každé pamatovat.
# A link to legal information about mozilla products.
legal = Právní informace
