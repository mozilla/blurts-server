# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    V naslednjih 24 urah kliknite gumb Potrdi e-poštni naslov za potrditev vašega računa Firefox Monitor.
    Nato vam bomo poslali poročilo.
verify-my-email = Potrdi e-poštni naslov
report-scan-another-email = Preveri nov e-poštni naslov s { -product-name }jem
automated-message = Sporočilo je bilo poslano samodejno. Če ste ga prejeli po pomoti, vam ni potrebno storiti ničesar.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = To sporočilo smo poslali na { $userEmail }, ker se je e-poštni naslov naročil na prejemanje opozoril { -product-name }ja.
unsubscribe-email-link = Če ne želite več prejemati opozoril { -product-name }ja, se odjavite.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Poročilo { -product-name }
report-date = Datum poročila:
email-address = E-poštni naslov:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Naslednji koraki
report-headline =
    { $breachCount ->
        [0] Zaenkrat vse lepo in prav.
        [one] Vaš račun se je pojavil v { $breachCount } kraji podatkov.
        [two] Vaš račun se je pojavil v { $breachCount } krajah podatkov.
        [few] Vaš račun se je pojavil v { $breachCount } krajah podatkov
       *[other] Vaš račun se je pojavil v { $breachCount } krajah podatkov.
    }
report-subhead-no-breaches =
    Vaš račun ni prikazan v našem celotnem poročilu o krajah podatkov.
    To je dobra novica, vendar kljub temu bodite pozorni.
    Do kraje podatkov lahko pride kadarkoli, preberite si, kako zaščititi svoja gesla.
report-subhead-found-breaches = Tukaj je vaše celotno poročilo Firefox Monitorja, ki vključuje vse znane kraje podatkov, v katere je vključen ta e-poštni naslov.
report-pwt-blurb =
    Gesla so tako dragocena, da jih je na tisoče ukradenih vsak dan, z njimi pa se tudi trguje na črnih trgih.
    Močna gesla ščitijo vaše račune in vse osebne podatke, ki se nahajajo v njih.
report-pwt-headline-1 = Uporabite različna gesla za posamezne račune
report-pwt-summary-1 =
    Uporaba enakega gesla povsod pomeni odprta vrata za napadalce.
    Ukradeno geslo lahko uporabijo za prijavo v druge vaše račune.
report-pwt-headline-2 = Ustvarite močna, enkratna gesla
report-pwt-summary-2 =
    Napadalci uporabljajo sezname pogostih gesel, s pomočjo katerih poskušajo uganiti vaše.
    Daljše in naključnejše kot je vaše geslo, teže ga bo ukrasti.
report-pwt-headline-3 = Uporabljajte varnostna vprašanja kot dodatna gesla
report-pwt-summary-3 =
    Spletne strani ne preverjajo, ali so vaši odgovori točni, le da se vsakič ujemajo.
    Ustvarite dolge, naključne odgovore in jih shranite na varnem mestu.
report-pwt-headline-4 = Uporabite upravitelja gesel
report-pwt-summary-4 = Storitve, kot so 1Password, LastPass, Dashlane in Bitwarden, ustvarjajo močna gesla, jih varno shranjujejo in jih na spletnih straneh izpolnijo za vas, tako da si vam ni treba zapomniti posameznih gesel.
# A link to legal information about mozilla products.
legal = Pravno obvestilo
# Share Firefox Monitor by email subject line
share-by-email-subject = Preverite, ali ste bili žrtev kraje podatkov.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Živjo,
    { -brand-name } ponuja brezplačno storitev, kjer lahko preveriš, ali si bil/a del kraje podatkov. Kako deluje:
    1. Obišči { "https://monitor.firefox.com" } in preveri svoj e-poštni naslov.
    2. Preveri, ali so bili tvoji spletni računi izpostavljeni v kraji podatkov.
    3. Prejmi nasvete { -product-name }ja o tem, kako ukrepati.
# Unsubscribe link in email.
email-unsub-link = Odjavi se
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Prikaži mojo nadzorno ploščo
# Button text
verify-email-cta = Potrdi e-poštni naslov
# Headline of verification email
email-link-expires = Ta povezava poteče v naslednjih 24 urah
# Email headline
email-found-breaches-hl = Tukaj je vaš povzetek preteklih kraj podatkov
# Email headline
email-breach-summary-for-email = Povzetek kraj podatkov za { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } se ni pojavil v nobeni znani kraji podatkov
# Email headline
email-alert-hl = { $userEmail } se je pojavil v novi kraji podatkov
# Subject line of email
email-subject-found-breaches = { -product-name } je našel vaše podatke v teh krajah
# Subject line of email
email-subject-no-breaches = { -product-name } ni našel nobenih znanih kraj
# Subject line of email
email-subject-verify = Potrdite e-pošto za { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Več o storitvi { $fxmLink }
email-breach-alert-blurb =
    { -product-name } vas opozarja o krajah podatkov, ki vključujejo vaše osebne podatke.
    Pravkar smo prejeli podrobnosti o novi kraji podatkov.
# List headline
faq-list-headline = Pogosto zastavljena vprašanja
# Link Title
faq-v2-3 = Pravkar sem ugotovil, da sem vpleten v krajo podatkov. Kaj naj storim?
# Link Title
faq-v2-4 = Kako { -product-name } obravnava občutljive strani?
