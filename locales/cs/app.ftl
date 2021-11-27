## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name =
    { $case ->
       *[nom] Firefox Monitor
        [gen] Firefox Monitoru
        [dat] Firefox Monitoru
        [acc] Firefox Monitor
        [voc] Firefox Monitore
        [loc] Firefox Monitoru
        [ins] Firefox Monitorem
    }
-product-name-nowrap =
    { $case ->
       *[nom] <span class="nowrap">{ -product-name(case: "nom") }</span>
        [gen] <span class="nowrap">{ -product-name(case: "gen") }</span>
        [dat] <span class="nowrap">{ -product-name(case: "dat") }</span>
        [acc] <span class="nowrap">{ -product-name(case: "acc") }</span>
        [voc] <span class="nowrap">{ -product-name(case: "voc") }</span>
        [loc] <span class="nowrap">{ -product-name(case: "loc") }</span>
        [ins] <span class="nowrap">{ -product-name(case: "ins") }</span>
    }
-product-short-name =
    { $case ->
        [nom] Monitor
        [gen] Monitoru
        [dat] Monitoru
        [acc] Monitor
        [voc] Monitore
        [loc] Monitoru
       *[ins] Monitorem
    }
-brand-name =
    { $case ->
       *[nom] Firefox
        [gen] Firefoxu
        [dat] Firefoxu
        [acc] Firefox
        [voc] Firefoxe
        [loc] Firefoxu
        [ins] Firefoxem
    }
-brand-Mozilla =
    { $case ->
       *[nom] Mozilla
        [gen] Mozilly
        [dat] Mozille
        [acc] Mozillu
        [voc] Mozillo
        [loc] Mozille
        [ins] Mozillou
    }
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
       *[nom]
            { $capitalization ->
               *[upper] Účet Firefoxu
                [lower] účet Firefoxu
            }
        [gen]
            { $capitalization ->
               *[upper] Účtu Firefoxu
                [lower] účtu Firefoxu
            }
        [dat]
            { $capitalization ->
               *[upper] Účtu Firefoxu
                [lower] účtu Firefoxu
            }
        [acc]
            { $capitalization ->
               *[upper] Účet Firefoxu
                [lower] účet Firefoxu
            }
        [voc]
            { $capitalization ->
               *[upper] Účte Firefoxu
                [lower] účte Firefoxu
            }
        [loc]
            { $capitalization ->
               *[upper] Účtu Firefoxu
                [lower] účtu Firefoxu
            }
        [ins]
            { $capitalization ->
               *[upper] Účtem Firefoxu
                [lower] účtem Firefoxu
            }
    }
-brand-pocket = Pocket
-brand-lockwise =
    { $case ->
       *[nom] Firefox Lockwise
        [gen] Firefoxu Lockwise
        [dat] Firefoxu Lockwise
        [acc] Firefox Lockwise
        [voc] Firefoxe Lockwise
        [loc] Firefoxu Lockwise
        [ins] Firefoxem Lockwise
    }
    .gender = masculine
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##

# “account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-brand-fx-account = Účet Firefoxu
terms-and-privacy = Podmínky a ochrana soukromí
GitHub-link-title = GitHub
error-scan-page-token = Pokusili jste se zkontrolovat příliš mnoho e-mailových adres ve velmi krátkém čase. Z bezpečnostních důvodů jsme další vyhledávání dočasně zablokovali. Zkuste to prosím znovu později.
error-could-not-add-email = E-mailovou adresu se nepodařilo přidat do databáze.
error-not-subscribed = Tato e-mailová adresa není zaregistrována k příjmu upozornění od { -product-name(case: "gen") }.
error-hibp-throttled = Příliš mnoho spojení k { -brand-HIBP }.
error-hibp-connect = Chyba při připojování k { -brand-HIBP }.
error-hibp-load-breaches = Nepodařilo se načíst informace o únicích.
error-must-be-signed-in = Musíte být přihlášeni do svého { -brand-fxa(case: "gen", capitalization: "lower") }.
error-to-finish-verifying = Pro dokončení ověření této e-mailové adresy pro { -product-name(case: "acc") } musíte být přihlášeni pod svým primárním e-mailovým účtem.
home-title = { -product-name }
home-not-found = Stránka nenalezena.
oauth-invalid-session = Neplatná relace
scan-title = { -product-name } - výsledky skenu
user-add-invalid-email = Neplatná e-mailová adresa
user-add-too-many-emails = Již monitorujete maximální počet e-mailových adres.
user-add-email-verify-subject = Potvrďte své přihlášení k odběru zpráv od { -product-name(case: "gen") }.
user-add-duplicate-email = Tato e-mailová adresa již byla do { -product-name(case: "gen") } přidána.
user-add-duplicate-email-part-2 = Chcete-li zkontrolovat stav e-mailové adresy { $userEmail }, navštivte své { $preferencesLink }.
error-headline = Chyba
user-verify-token-error = Je vyžadován ověřovací token.
user-verify-email-report-subject = Vaše hlášení od { -product-name(case: "gen") }
user-unsubscribe-token-error = Pro zrušení odběru je vyžadován token.
user-unsubscribe-token-email-error = Pro zrušení odběru je vyžadován token a emailHash.
user-unsubscribe-title = { -product-name } – zrušení příjmu upozornění
pwt-section-headline = Silnější hesla = lepší ochrana
landing-headline = Každý má právo na bezpečí před hackery.
scan-placeholder = Zadejte e-mailovou adresu
scan-submit = Vyhledat e-mailovou adresu
scan-error = Zadaná e-mailová adresa není platná.
download-firefox-banner-button = Stáhnout { -brand-name(case: "acc") }
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Odesláno!
sign-up = Zaregistrovat
form-signup-error = Neplatná e-mailová adresa
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datum úniku:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Počet kompromitovaných účtů:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitovaná data:
unsub-headline = Zrušit příjem upozornění od { -product-name-nowrap(case: "gen") }
unsub-blurb = Tímto smažete svou e-mailovou adresu ze seznamu { -product-name-nowrap(case: "gen") } a nebudete nadále dostávat upozornění na nově oznámené úniky dat.
unsub-button = Zrušit zasílání
# Breach data provided by Have I Been Pwned.
hibp-attribution = Data o únicích poskytuje { $hibp-link }
share-twitter = Většina lidí má na internetu okolo stovky účtů. Zjistěte, jestli nebyl některý z těch vašich součástí úniku dat.
share-facebook-headline = Zjistěte, zda byla vaše data součástí nějakého úniku
share-facebook-blurb = Byl některý z vašich účtů součástí nějakého úniku dat?
og-site-description = { -product-name } zjistí, jestli byla vaše data součástí nějakého úniku. Pro větší bezpečí se také přihlaste k zasílání výstrah o budoucích únicích.
show-all = Zobrazit vše
fxa-scan-another-email = Chcete zkontrolovat další e-mailovou adresu?
sign-in = Přihlásit se
sign-out = Odhlášení
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Správa { -brand-fxa(case: "gen", capitalization: "lower") }
have-an-account = Již máte účet?
fxa-pwt-summary-2 =
    Krátké jednoslovné heslo je velmi snadné uhodnout. Používejte alespoň
    dvouslovná hesla s kombinací malých a velkých písmen, čísel a speciálních znaků.
fxa-pwt-summary-4 = Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden si umí vaše hesla bezpečně uložit a automaticky je za vás na webových stránkách vyplnit. Pomohou vám i s vytvořením silného hesla.
fxa-pwt-summary-6 = Počet úniků dat z webových stránek stoupá. Když se vaše osobní údaje objeví v novém úniku dat, { -product-name } vám pošle upozornění, abyste mohli co nejrychleji zareagovat a ochránit svůj účet.
fxa-what-to-do-blurb-1 = Pokud se nemůžete přihlásit, kontaktujte správce webu a zeptejte se, jak můžete své heslo změnit. Vidíte účet, který vám nic neříká? Web mohl změnit svůj název nebo jste na nepoužívaný účet už zapomněli.
fxa-what-to-do-subhead-2 = Přestaňte uniklé heslo používat a změňte ho všude, kde jste ho použili.
fxa-wtd-blurb-2 = Hackeři se mohou pokusit použít toto heslo a vaši e-mailovou adresu k získání přístupu i do dalších vašich účtů. U každého účtu používejte jiné heslo, zejména u internetového bankovnictví a dalších účtů, které obsahují vaše citlivé osobní údaje.
fxa-what-to-do-blurb-3 = Většina úniků vyzrazuje jen e-mailové adresy a hesla, ovšem některé obsahují i citlivé finanční údaje. Pokud bylo vyzrazeno číslo vašeho bankovního účtu nebo platební karty, informujte neprodleně svou banku o možném zneužití. Pravidelně také kontrolujte stav svého účtu kvůli podezřelé aktivitě.
fxa-what-to-do-subhead-4 = Získejte pomoc s pamatováním si svých hesel a jejich uchováváním v bezpečí.
fxa-what-to-do-blurb-4 = Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden si umí vaše hesla bezpečně uložit a automaticky je za vás na webových stránkách vyplnit. Používejte správce hesel na mobilu i počítači a už si svá hesla nebudete muset pamatovat.
# Alerts is a noun
sign-up-for-alerts = Zaregistrovat se
# Link title
frequently-asked-questions = Často kladené otázky
about-firefox-monitor = O { -product-name(case: "gen") }
# Link title
preferences = Předvolby
# Link title
home = Domů
# Link title
breaches = Úniky
# Link title
security-tips = Bezpečnostní tipy
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Otevřít nabídku { -brand-fxa(case: "gen", capitalization: "lower") }
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled 1-10.
micro-survey-nps-prompt = Na stupnici od 1 do 10, jako moc byste doporučili { -product-short-name(case: "acc") } svým přátelům nebo kolegům?
# This is a survey response to the micro-survey-nps-prompt question.
micro-survey-not-likely-response = Spíše ne
# This is a survey response to the micro-survey-nps-prompt question.
micro-survey-very-likely-response = Určitě ano
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# strongly-disagree, disagree, unsure, agree, strongly-agree
micro-survey-usability-prompt = Používá se vám { -product-short-name } snadno?
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# strongly-disagree, disagree, unsure, agree, strongly-agree
micro-survey-credibility-prompt = Je podle vás { -product-short-name } důvěryhodný?
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# strongly-disagree, disagree, unsure, agree, strongly-agree
micro-survey-appearance-prompt = Prezentuje se { -product-short-name } jednoduše a srozumitelně?
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-strongly-disagree-response = Rozhodně nesouhlasím
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-disagree-response = Nesouhlasím
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-unsure-response = Nevím
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-agree-response = Souhlasím
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-strongly-agree-response = Rozhodně souhlasím
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# very-disappointed, somewhat-disappointed, dont-care
micro-survey-pmf-prompt = Jak byste si cítili, kdybyste { -product-short-name(case: "acc") } najednou nemohli používat?
# This is a survey response that follows the pmf prompt
micro-survey-very-disappointed-response = Velké zklamání
# This is a survey response that follows the pmf prompt
micro-survey-somewhat-disappointed-response = Lehké zklamání
# This is a survey response that follows the pmf prompt
micro-survey-dont-care-response = Nechyběl by mi
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = NAPOSLEDY PŘIDANÝ ÚNIK
# Link title
more-about-this-breach = Další informace o tomto úniku
take-control = Získejte opět kontrolu nad svými osobními údaji.
cant-stop-hackers = Nemůžete zabránit hackerům v nabourávání se do počítačů. Ale můžete se vyvarovat špatných zvyků, které jim usnadňují práci.
read-more-tips = Další bezpečnostní tipy
how-hackers-work = Jak pracují hackeři
monitor-your-online-accounts = Zaregistrujte se k monitorování úniků pomocí { -brand-fxa(case: "gen", capitalization: "lower") }.
stay-alert = Buďte informováni o nových únicích
if-your-info = Jestliže budou vaše údaje součástí nového úniku dat, zašleme vám upozornění.
search-all-emails = Vyhledejte všechny své e-mailové adresy v únicích dat a dostávejte upozornění na nové úniky.
monitor-several-emails = Monitorujte několik e-mailových adres
take-action = Podnikněte kroky k ochraně svých účtů
keep-your-data-safe = Zjistěte, co musíte udělat, aby byly vaše údaje před kyberzločinci stále v bezpečí.
website-breach = Únik z webových stránek
sensitive-breach = Únik citlivých údajů z webových stránek
data-aggregator-breach = Únik z agregátoru dat
unverified-breach = Nepotvrzený únik
spam-list-breach = Únik ze spamerského seznamu adres
website-breach-plural = Úniky z webových stránek
sensitive-breach-plural = Úniky citlivých údajů
data-aggregator-breach-plural = Úniky z agregátorů dat
unverified-breach-plural = Nepotvrzené úniky
spam-list-breach-plural = Úniky ze spamerských seznamů adres
what-data = Jaké údaje byly vyzrazeny:
sensitive-sites = Jak se { -product-name } chová v případě webů obsahující citlivé údaje?
sensitive-sites-copy = Účty, které jsou spojené s těmito typy úniků, { -product-name } prozradí až po ověření e-mailové adresy. To znamená, že vy jste jediná osoba, která může zjistit, jestli byly vaše údaje součástí tohoto úniku (pokud nemá do vašeho poštovního účtu přístup ještě někdo jiný).
delayed-reporting-headline = Proč nahlášení tohoto úniku trvalo tak dlouho?
delayed-reporting-copy = Občas to může trvat měsíce či roky, než se přihlašovací údaje vyzrazené v úniku dat objeví na temném Webu. Úniky jsou přidány do naší databáze, jakmile byly odhaleny a potvrzeny.
about-fxm-headline = O { -product-name(case: "gen") }.
about-fxm-blurb = { -product-name } vás upozorní, jestliže byly vaše internetové účty součástí úniku dat. Zjistěte, jestli se vaše osobní údaje nestaly součástí nějakého úniku dat, dostávejte upozornění na nové úniky a podnikněte kroky k ochraně svých internetových účtů. { -product-name(case: "acc") } zajišťuje { -brand-Mozilla }.
fxm-warns-you = { -product-name } vás upozorní, jestliže byla vaše e-mailová adresa vyzrazena v nějakém internetovém úniku dat. Ověřte si, jestli nebyly vaše osobní údaje vyzrazeny, zjistěte, jak lépe ochránit své internetové účty, a buďte upozorněni v případě, že se vaše e-mailová adresa objeví v novém úniku dat.
# How Firefox Monitor works
how-fxm-works = Jak { -product-name } funguje
how-fxm-1-headline = Proveďte základní vyhledávání
how-fxm-1-blurb = Vyhledejte svou e-mailovou adresu ve veřejně dostupných únicích dat sahajících zpět do roku 2007. Toto základní vyhledávání zobrazí všechny úniky dat kromě těch, které obsahují citlivé osobní údaje.
how-fxm-2-headline = Zaregistrujte se k monitorování úniků
how-fxm-2-blurb = Vytvořte si { -brand-fxa(case: "acc", capitalization: "lower") }, abyste mohli monitorovat svou e-mailovou adresu pro případ probíhajících úniků. Ihned po ověření své e-mailové adresy rovněž obdržíte kompletní hlášení o předchozích únicích včetně úniků citlivých údajů.
how-fxm-3-headline = Dostávejte oznámení ve svém prohlížeči
how-fxm-3-blurb = Pokud používáte { -brand-name(case: "acc") }, obdržíte oznámení, jestliže navštívíte web, u něhož došlo k úniku dat. Hned si pak ověřte, jestli jste byli součástí tohoto úniku a co s tím můžete dělat.
wtd-after-website = Co dělat po úniku z webových stránek
wtd-after-data-agg = Co dělat po úniku z agregátoru dat
what-is-data-agg = Co je to agregátor dat?
what-is-data-agg-blurb =
    Agregátory dat či zprostředkovatelé údajů sbírají údaje z veřejných
    záznamů a rovněž je kupují od jiných společností. Tyto údaje shromažďují za účelem jejich prodeje různým společnostem, jimž slouží k marketingovým účelům. U obětí těchto úniků sice existuje menší pravděpodobnost, že na nich bude spáchán finanční podvod, ale hackeři by mohli tyto údaje použít k vydávání se za ně nebo k vytvoření jejich profilu.
protect-your-privacy = Chraňte své soukromí na internetu
no-pw-to-change = Na rozdíl od úniků z webových stránek zde není žádné heslo, které by se mělo změnit.
avoid-personal-info = Nepoužívejte v heslech osobní údaje
avoid-personal-info-blurb = Je snadné na internetu najít datumy narození, adresy a jména členů rodiny. Tato slova určitě nevkládejte do hesel.

## What to do after data breach tips

change-pw = Změňte si své heslo
change-pw-site = Změňte si na tomto serveru heslo
even-for-old = I pro staré účty platí, že je důležité vytvořit nové heslo.
make-new-pw-unique = Dbejte na to, aby bylo nové heslo odlišné a jedinečné
strength-of-your-pw = Síla vašich hesel má přímý vliv na vaší bezpečnost na internetu.
create-strong-passwords = Jak vytvářet silná hesla
stop-reusing-pw = Přestaňte používat hesla opakovaně
create-unique-pw = Vytvořte si jedinečná hesla a uschovejte je na nějakém bezpečném místě, např. ve správci hesel.
five-myths = 5 mýtů o správcích hesel
create-a-fxa = Vytvořte si { -brand-fxa(case: "acc", capitalization: "lower") } pro příjem upozornění na nové úniky a obdržení svého kompletního hlášení.
feat-security-tips = Bezpečnostní tipy, jak zabezpečit své účty
feat-sensitive = Pokročilé vyhledávání v únicích citlivých údajů
feat-enroll-multiple = Nechte si monitorovat více e-mailových adres
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [zero] Nevyskytuje se v žádném známém úniku dat.
        [one] Vyskytuje se v { $breachCount } známém úniku.
        [few] Vyskytuje se ve { $breachCount } známých únicích.
       *[other] Vyskytuje se v { $breachCount } známých únicích.
    }
check-for-breaches = Prohledat úniky
find-out-what-hackers-know = Odhalte, co už o vás hackeři vědí. Zjistěte, jak být stále o krok před nimi.
get-email-alerts = Zůstaňte v bezpečí: Nechte se upozornit, jestliže se vaše údaje objeví ve známém úniku dat.
search-for-your-email = Vyhledejte svou e-mailovou adresu ve veřejně dostupných únicích dat sahajících zpět do roku 2007.
back-to-top = Zpět na začátek
comm-opt-0 = Poslat mi e-mail, pokud se jedna z mých níže uvedených e-mailových adres objeví v nějakém úniku dat.
comm-opt-1 = Posílat všechna upozornění na úniky dat na adresu { $primaryEmail }
stop-monitoring-this = Přestat monitorovat tuto e-mailovou adresu.
resend-verification = Znovu poslat ověřovací e-mail
add-new-email = Přidání nové e-mailové adresy
send-verification = Zaslat ověřovací odkaz
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Souhrnné informace
show-breaches-for-this-email = Zobrazit všechny úniky pro tuto adresu.
link-change-primary = Změnit primární e-mailovou adresu
remove-fxm = Vypnout { -product-name(case: "acc") }
remove-fxm-blurb = Tímto zrušíte zasílání upozornění { -product-name(case: "ins") }. Váš { -brand-fxa(capitalization: "lower") } zůstane aktivní a můžete dostávat jiné zprávy týkající se vašeho účtu.
# Button title
manage-email-addresses = Spravovat e-mailové adresy
# Link title
latest-breach-link = Zjistit, jestli jste byli součástí tohoto úniku
welcome-back = Vítejte zpět, { $userName }!
welcome-user = Vítejte, { $userName }!
breach-alert-subject = { -product-name } našel vaši e-mailovou adresu v novém úniku dat
your-info-was-discovered-headline = Vaše údaje byly nalezeny v novém úniku dat.
your-info-was-discovered-blurb =
    Jste zaregistrováni k obdržení upozornění od { -product-name(case: "gen") },
    jestliže se vaše e-mailová adresa objeví v nějakém úniku dat. Zde je vše, co o tomto úniku víme.
what-to-do-after-breach = Co dělat po úniku dat
ba-next-step-1 = Změňte heslo a nové vytvořte silné a jedinečné.
ba-next-step-blurb-1 =
    Silné heslo používá kombinaci velkých a malých písmen,
    speciálních znaků a čísel. Neobsahuje osobní údaje jako např.
    adresu, datum narození či příjmení.
ba-next-step-2 = Přestaňte toto vyzrazené heslo úplně používat.
ba-next-step-blurb-2 =
    Kyberzločinci by mohli vaše heslo najít na temném Webu a použít ho
    k přihlášení se do jiných vašich účtů. Nejlepší způsob, jak ochránit své účty,
    je používat u každého z nich jedinečné heslo.
ba-next-step-3 = Získejte pomoc s tvorbou lepších hesel a jejich uchováváním v bezpečí.
ba-next-step-blurb-3 = Pro vytváření silných a jedinečných hesel používejte správce hesel. Správci hesel bezpečně uchovávají všechny vaše přihlašovací údaje, takže k nim máte přístup ve všech svých zařízeních.
faq1 = Tato společnost či web mi nic neříká. Proč jsem součástí tohoto úniku?
faq2 = Proč trvalo tak dlouho, než jsem byl o tomto úniku informován?
faq3 = Jak poznám, že tato e-mailová zpráva opravdu pochází od { -product-name(case: "gen") }?
new-breaches-found =
    { $breachCount ->
        [one] NALEZEN { $breachCount } NOVÝ ÚNIK DAT
        [few] NALEZENY { $breachCount } NOVÉ ÚNIKY DAT
       *[other] NALEZENO { $breachCount } NOVÝCH ÚNIKŮ DAT
    }
sign-up-headline-1 = Dostávejte průběžně upozornění pomocí { -brand-fxa(case: "gen", capitalization: "lower") }.
account-not-required = Pro vytvoření { -brand-fxa(case: "gen", capitalization: "lower") } není nutné mít prohlížeč { -brand-name }. Můžete dostávat informace o službách { -brand-Mozilla(case: "gen") }.
was-your-info-exposed = Byly vaše údaje vyzrazeny v úniku { $breachName }?
find-out-if = Zjistěte, jestli byly vaše údaje vyzrazeny v tomto úniku.
fb-not-comp = Tato e-mailová adresa se nevyskytuje v úniku { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Vyskytuje se však v { $breachCount } dalším úniku dat.
        [few] Vyskytuje se však ve { $breachCount } dalších únicích dat.
       *[other] Vyskytuje se však v { $breachCount } dalších únicích dat.
    }
fb-comp-only = Tato e-mailová adresa se vyskytuje v úniku { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Tato e-mailová adresa se vyskytovala v { $breachCount } známém úniku dat, včetně úniku { $breachName }.
        [few] Tato e-mailová adresa se vyskytovala ve { $breachCount } známých únicích dat, včetně úniku { $breachName }.
       *[other] Tato e-mailová adresa se vyskytovala v { $breachCount } známých únicích dat, včetně úniku { $breachName }.
    }
no-other-breaches-found = Základní vyhledávání nenalezlo žádné další úniky.
no-results-blurb = Litujeme, ale tento únik se nenachází v naší databázi.
all-breaches-headline = Všechny úniky obsažené ve { -product-name(case: "loc") }
search-breaches = Prohledat úniky dat
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Vaši e-mailovou adresu jsme v žádném úniku nenašli, ale vaše
    telefonní číslo může být stále zranitelné.</span> Některé účty postižené
    únikem dat z Facebooku obsahovaly informace o telefonním čísle a další
    osobní informace, ale ne e-mailovou adresu. Pokud jste někdy měli
    zaregistrovaný účet na Facebooku, i když ho už třeba nepoužíváte,
    doporučujeme provést následující kroky
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Nastavte viditelnost informací na <a>svém profilu na Facebooku</a> na „Pouze já“ nebo jiné neveřejné.</span>
facebook-breach-what-to-do-1-copy =
    Během tohoto úniku získali hackeři informace
    o profilech, které byly nastaveny jako „veřejné“ nebo „sdílené s přáteli“.
    Kombinací těchto informací s dalšími daty lze získat o vás a vašich
    účtech ještě více podrobností.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Změňte si heslo, PIN a další bezpečnostní prvky chránící <a>účty
    u vašeho telefonního operátora</a>, abyste předešli útoku „SIM swap“.</span>
facebook-breach-what-to-do-2-copy =
    Při útoku známém jako „SIM swap“ nebo také „únos SIM“
    využije hacker telefonní číslo, datum narození a další data pro získání kontroly
    nad telefonním číslem, které může využít třeba k nabourání e-mailové schránky,
    sociálních sítí nebo bankovních účtů.
facebook-breach-what-to-do-3 = Přečtěte si všechna naše doporučení ohledně úniku dat z Facebooku
# "Appears in-page as: Showing: All Breaches"
currently-showing = Zobrazeno:

## Updated error messages

error-bot-headline = Vyhledávání bylo dočasně pozastaveno
error-bot-blurb =
    Máme obavy, že byste mohli být bot, protože jste v krátkém čase hledali
    několik e-mailových adres . Pro teď máte další vyhledávání zablokováno. Můžete to opět zkusit později.
error-csrf-headline = Vypršel časový limit relace
error-csrf-blurb = Klepněte v prohlížeči na tlačítko Zpět, aktualizujte stránku a akci opakujte.
error-invalid-unsub = Jak zrušit příjem upozornění od { -product-name(case: "gen") }
error-invalid-unsub-blurb = Zrušit příjem budete muset prostřednictvím jedné z e-mailových zpráv, kterou vám { -product-name } odeslal. Podívejte se do své e-mailové schránky po zprávách od { -brand-team-email(case: "gen") }. V dolní části zprávy pak klepněte na odkaz pro zrušení příjmu.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] e-mailová adresa je monitorována
        [few] e-mailové adresy jsou monitorovány
       *[other] e-mailových adres je monitorováno
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] vaše heslo bylo vyzrazeno souhrnně ve všech únicích
        [few] vaše hesla byla vyzrazena souhrnně ve všech únicích
       *[other] vašich hesel bylo vyzrazeno souhrnně ve všech únicích
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] známý únik dat vyzradil vaše údaje
        [few] známé úniky dat vyzradily vaše údaje
       *[other] známých úniků dat vyzradilo vaše údaje
    }
# Button
see-additional-breaches = Zobrazit další úniky
scan-results-known-breaches =
    { $breachCount ->
        [one] Tato e-mailová adresa se vyskytuje v 1 známém úniku dat.
        [few] Tato e-mailová adresa se vyskytuje ve { $breachCount } známých únicích dat.
       *[other] Tato e-mailová adresa se vyskytuje v { $breachCount } známých únicích dat.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Výsledky pro: { $userEmail }
other-monitored-emails = Další monitorované e-mailové adresy
email-verification-required = Vyžadováno ověření e-mailové adresy
fxa-primary-email = E-mailová adresa { -brand-fxa(case: "gen", capitalization: "lower") } (primární)
what-is-a-website-breach = Co je to únik dat z webových stránek?
website-breach-blurb = Únik dat z webových stránek se odehraje, když kyberzločinci odcizí, zkopírují nebo zveřejní osobní údaje z internetových účtů. Zpravidla je to výsledkem činnosti hackerů, kteří nalezli slabé místo v zabezpečení webu. K úniku osobních údajů z účtu však také může dojít nedopatřením.
security-tips-headline = Bezpečnostní tipy, jak se chránit před hackery
steps-to-protect = Jaké kroky podniknout k ochraně své internetové identity
take-further-steps = Podnikněte další kroky k ochraně své identity
alert-about-new-breaches = Upozornit mě na nové úniky
see-if-youve-been-part = Zjistěte, zda jste nebyli součástí internetového úniku dat.
get-ongoing-breach-monitoring = Nechte si průběžně monitorovat více e-mailových adres.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Zjistit
new-unsub-error = Zrušit příjem budete muset prostřednictvím jedné z e-mailových zpráv, kterou vám { -product-name } odeslal.
other-known-breaches-found =
    { $breachCount ->
        [one] Objevila se však v { $breachCount } dalším úniku.
        [few] Objevila se však ve { $breachCount } dalších únicích.
       *[other] Objevila se však v { $breachCount } dalších únicích.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Další informace, jmenovitě:
# Title
email-addresses-title = E-mailové adresy
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Přehled
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Dne { $breachDate } došlo u subjektu { $breachTitle } k úniku dat. Ihned po odhalení a potvrzení úniku byl dne { $addedDate } přidán do naší databáze.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Předvolby { -product-short-name(case: "gen") }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Přihlášen(a) jako: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrovat podle kategorie:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Nabídka
to-affected-email = Poslat upozornění na únik na postiženou e-mailovou adresu
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Existuje způsob, jak ochránit své soukromí. Používejte { -brand-name(case: "acc") }.
# Link title
learn-more-link = Zjistit více.
email-sent = E-mail odeslán!
# Form title
want-to-add = Chcete přidat další e-mailovou adresu?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Pro přidání adresy { $userEmail } do { -product-name(case: "gen") } klepněte na odkaz zaslaný na tuto adresu.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-mailová adresa byla úspěšně ověřena.
email-added-to-subscription = Pokud se adresa { $email } objeví v nějakém úniku dat, dostanete upozornění.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Pro zobrazení a správu adres, které jste nechali monitorovat pro případ úniku dat, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = se přihlaste

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Pro správu všech e-mailových adres navštivte { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Upozornění na úniky
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Datum přidání:
how-hackers-work-desc = Chraňte svá hesla před kyberzločinci, protože o ně mají největší zájem.
what-to-do-after-breach-desc = Uzavřete své účty, aby se vaše údaje nedostaly do cizích rukou.
create-strong-passwords-desc = Vytvářejte hesla silná, bezpečná a těžko uhodnutelná.
steps-to-protect-desc = Porozumějte nejběžnějším hrozbám a poznejte, na co je třeba dávat pozor.
five-myths-desc = Zjistěte, jak se vyvarovat špatných zvyků, které hackerům usnadňují práci.
take-further-steps-desc = Zjistěte, jak snížit rizika krádeže identity a předejít tak finanční ztrátě.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Změny uloženy
# Section headline
rec-section-headline = Co dělat s tímto únikem dat
rec-section-subhead = Za účelem zabezpečení vašich osobních údajů a ochrany vaší digitální identity doporučujeme podniknout následující opatření.
# Section headline
rec-section-headline-no-pw = Co dělat pro ochranu vašich osobních údajů
rec-section-subhead-no-pw = Přestože součástí úniku nebyla hesla, doporučujeme učinit následující kroky pro lepší ochranu vašich osobních údajů.
# Button
see-additional-recs = Podívejte se na další doporučení

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

resolve-top-notification = E-mailová adresa { $affectedEmail } se objevila v tomto úniku. <a>Co dělat dál</a>
resolve-top-notification-plural =
    V tomto úniku { $numAffectedEmails ->
        [one] se vyskytuje { $numAffectedEmails } vaše e-mailová adresa
        [few] se vyskytují { $numAffectedEmails } vaše e-mailové adresy
       *[other] se vyskytuje { $numAffectedEmails } vašich e-mailových adres
    }. <a>Co dělat dál</a>

##

marking-this-subhead = Označení tohoto úniku jako vyřešeného
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Pokud jste učinili kroky vedoucí k odstranění následků tohoto úniku</span>,
    můžete ho označit jako vyřešený. Na podrobnosti o tomto úniku
    se můžete kdykoliv podívat na nástěnce.
mark-as-resolve-button = Označit jako vyřešené
marked-as-resolved-label = Označeno jako vyřešené
undo-button = Zpět
confirmation-1-subhead = Výborně! Právě jste vyřešili svůj první únik.
confirmation-1-body = Nepolevujte. Zkontrolujte svou nástěnku, zda ještě není něco k vyřešení.
confirmation-2-subhead = Na to nemáte, hackeři!
confirmation-2-body = Děláte důležité kroky na cestě k zabezpečení svých online účtů.
confirmation-3-subhead = Další hotové. Skvělá práce!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Je vaše heslo unikátní, silné a obtížně uhodnutelné? <a>Zjistěte to</a>
generic-confirmation-subhead = Tento únik byl označen za vyřešený
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Pro zobrazení zbývajícího úniku přejděte na nástěnku.
        [few] Pro zobrazení zbývajících úniků přejděte na nástěnku.
       *[other] Pro zobrazení zbývajících úniků přejděte na nástěnku.
    }
return-to-breach-details-link = Zpět na podrobnosti o úniku
go-to-dashboard-link = Přejít na nástěnku
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = Hotovo na { $percentComplete } %
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } vyřešený únik
        [few] { $numResolvedBreaches } vyřešené úniky
       *[other] { $numResolvedBreaches } vyřešených úniků
    }
progress-intro-subhead = Nově ve { -product-name(case: "loc") }: Označení úniků jako vyřešené
progress-intro-message = Po přezkoumání podrobností o úniku a přijetí opatření k ochraně vašich osobních údajů můžete označit úniky jako vyřešené.
progress-status =
    { $numResolvedBreaches } { $numTotalBreaches ->
        [one] z { $numTotalBreaches } úniku
        [few] ze { $numTotalBreaches } úniků
       *[other] z { $numTotalBreaches } úniků
    } { $numResolvedBreaches ->
        [one] je označen jako vyřešený
        [few] jsou označeny jako vyřešené
       *[other] je označeno jako vyřešených
    }
progress-complete = Všechny známé úniky byly označeny jako vyřešené.

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Dobrý začátek!</span> Zkontrolujte zbývající úniky a podívejte se, 
    jaké kroky podniknout.
progress-message-2 =
    <span>Jen do toho!</span> Malé změny, jako je například změna hesla, mají velký vliv
    na bezpečnost vašich osobních údajů.
progress-message-3 = <span>Pěkně jste s těmi úniky zamávali!</span> Nepolevujte, ještě vám jich tu pár zbývá.
progress-message-4 = <span>Téměř hotovo!</span> Jste blízko cílové čáry.
progress-complete-message =
    <span>Je to dobrý pocit, že?</span> Pokud stále nemáte dost, můžete nahradit hesla 
    za silnější i u ostatních účtů.

##

resolve-this-breach-link = Vyřešit tento únik
# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Označeno jako vyřešené:
hide-resolved-button = Skrýt vyřešené
show-resolved-button = Zobrazit vyřešené
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] uniklé heslo v nevyřešených únicích
        [few] uniklá hesla v nevyřešených únicích
       *[other] uniklých hesel v nevyřešených únicích
    }
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] známý únik označený jako vyřešený
        [few] známé úniky označené jako vyřešené
       *[other] známých úniků označených jako vyřešené
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nový
mobile-promo-headline = { -brand-name } ve vašem telefonu a tabletu
mobile-promo-body = Rychlé, soukromé a bezpečné prohlížení kamkoliv se hnete. Najděte { -brand-name(case: "acc") } na Google Play a App Storu.
mobile-promo-cta = Získejte { -brand-name(case: "acc") } pro Android či iOS
promo-lockwise-headline = Vezměte si svá hesla všude s sebou
lockwise-promo-body = Mějte přehled o svých přihlašovacích údajích napříč zařízeními. Přistupujte k nim bezpečně z počítače, telefonu či tabletu.
promo-lockwise-cta = Stáhnout { -brand-lockwise(case: "acc") }
fpn-promo-headline = Skryjte svoji polohu před webovými stránkami a sledovacími prvky
promo-fpn-body = { -brand-fpn } vás pomocí zamaskování vaší skutečné IP adresy ochrání před sběrem dat a cílenými reklamami.
promo-fpn-cta = Stáhnout { -brand-fpn }
monitor-promo-headline = Buďte informováni o nových únicích dat
monitor-promo-body = Nechte se upozornit, jestliže se vaše údaje objeví ve známém úniku dat.
ecosystem-promo-headline = Buďte na internetu v bezpečí díky produktům, které dbají na vaše soukromí
ecosystem-promo-body = Žádný { -brand-name } nezneužívá vaše data. Méně dat je vždy více, udržíme je v bezpečí a nemáme před vámi žádná tajemství.
promo-ecosystem-cta = Zobrazit všechny produkty
steps-to-resolve-headline = Kroky vedoucí k vyřešení tohoto úniku
vpn-promo-headline = Je čas zlepšit svou bezpečnost na internetu.
vpn-promo-copy = Virtuální privátní síť (VPN) od { -brand-Mozilla(case: "gen") } ochrání vaše internetové připojení před hackery a špióny.
vpn-promo-cta = Získat { -brand-mozilla-vpn(case: "acc") }
vpn-promo-headline-new = Ušetřete až 50 % s předplatným na celý rok.
vpn-promo-copy-new = Chraňte svá online data a vyberte si plán předplatného pro síť VPN, který vám vyhovuje.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# user's IP location is determined dynamically by 3rd-party, eg: "Your location: Los Angeles, CA".  The 3rd-party service provides its own localization.
vpn-banner-location = Vaše poloha: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Chraňte se</em> pomocí služby { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Chráněno</em> pomocí služby { -brand-mozilla-vpn }.
vpn-banner-title-1 = Jste chráněni – děkujeme, že používáte službu { -brand-mozilla-vpn }.
vpn-banner-title-2 = Pokud nepoužíváte síť VPN, je možné vysledovat vaši polohu.
vpn-banner-subtitle-2 = Chraňte svou polohu a brouzdejte bezpečně ve 3 krocích
vpn-banner-status-protected = Aktuální stav: <em>Chráněno ✓</em>
vpn-banner-status-not-protected = Aktuální stav: <em>Nechráněno ⚠</em>
# user's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP adresa: { $ip-address }
vpn-banner-step-1 = Předplatit si službu { -brand-mozilla-vpn }
vpn-banner-step-2 = Vyberte umístění serveru VPN
vpn-banner-step-3 = Aktivujte si síť VPN a brouzdejte bezpečně
vpn-banner-cta = Získat službu { -brand-mozilla-vpn }
