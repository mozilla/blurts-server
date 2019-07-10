# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Selektearje binnen 24 oer de knop ‘Myn e-mailadres ferifiearje’ om jo Firefox Monitor-account te befêstigjen. 
    Jo rapport is dan ûnderweis.
verify-my-email = Myn e-mailadres ferifiearje
report-scan-another-email = Noch in e-mailadres skanne yn { -product-name }
automated-message = Dit is in automatisearre e-mailberjocht; as jo it by fersin ûntfongen hawwe, hoege jo neat te dwaan.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Wy hawwe dit berjocht nei { $userEmail } stjoerd, omdat it e-mailadres ynskreaun is foar warskôgingen fan { -product-name }.
unsubscribe-email-link = As jo gjin warskôgingen fan { -product-name } mear ûntfange wolle, skriuw jo dan út.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name }-rapport
report-date = Rapportdatum:
email-address = E-mailadres:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Folgjende stappen
report-headline =
    { $breachCount ->
        [0] Oant no ta alles goed.
        [one] Jo account komt foar yn { $breachCount } lek.
       *[other] Jo account komt foar yn { $breachCount } lekken.
    }
report-subhead-no-breaches =
    Jo account komt net foar yn ús folsleine rapport fan datalekken. 
    Dat is goed nijs, mar jo kinne mear dwaan. 
    Datalekken kinne altyd foarkomme, dus lês fierder om te sjen hoe't jo jo wachtwurden beskermje kinne.
report-subhead-found-breaches = Hjir is jo folsleine Firefox Monitor-rapport, wêryn alle bekende datalekken stean wêryn dit e-mailadres foarkomt.
report-pwt-blurb =
    Wachtwurden binne sa weardefol, dat der deistich tûzenen fan stellen en ferhannele of ferkocht wurde op de swarte merk. 
    Sterkere wachtwurden beskermje jo accounts en alle persoanlike gegevens dy't deryn bewarre wurde.
report-pwt-headline-1 = Brûk foar elk account in oar wachtwurd
report-pwt-summary-1 =
    It oeral opnij brûken fan wachtwurden iepenet de doar foar hackers. 
    Se kinne dat wachtwurd brûke om har by jo oare accounts oan te melden.
report-pwt-headline-2 = Meitsje sterke, unike wachtwurden
report-pwt-summary-2 =
    Hackers brûke listen mei faaks brûkte wachtwurden om dat fan jo te probearje te rieden. 
    Hoe langer en mear willekeurich jo wachtwurd is, hoe swierder it is om it te stellen.
report-pwt-headline-3 = Behannelje befeiligingsfragen as ekstra wachtwurden
report-pwt-summary-3 =
    Websites kontrolearje net oft jo antwurden krekt binne, allinnich oft se elke kear oerienkomme. 
    Meitsje lange, willekeurige antwurden en bewarje se op in feilich plak.
report-pwt-headline-4 = Brûk in wachtwurdbehearder
report-pwt-summary-4 = Tsjinsten lykas 1Password, LastPass, Dashlane en Bitwarden generearje sterke wachtwurden, bewarje se befeiligd en folje se op websites yn, sadat jo se net allegearre hoege te ûnthâlden.
# A link to legal information about mozilla products.
legal = Juridysk
# Share Firefox Monitor by email subject line
share-by-email-subject = Untdek oft jo troffen binne troch in datalek.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hallo,
    { -brand-name } hat in fergese service wêrmei't jo kontrolearje kinne oft jo troffen binne troch in datalek. Sa wurket it:
    1. Gean nei { "https://monitor.firefox.com" } en sykje nei jo e-mailadres.
    2. Sjoch oft jo online accounts troffen binne troch in datalek.
    3. Untfang tips fan { -product-name } oer wat jo fierder dwaan kinne.
# Unsubscribe link in email.
email-unsub-link = Ofmelde
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Jo ûntfange dit e-mailberjocht omdat jo jo oanmelden hawwe foar { -product-name }-warskôgingen.
    Wolle jo dizze e-mailberjochten net mear ûntfange? { $unsubLink }. Dit is in automatisearre e-mailberjocht. Gean foar stipe nei { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Jo ûntfange dit e-mailberjocht omdat jo jo oanmelden hawwe foar { -product-name }-warskôgingen.
    Dit is in automatisearre e-mailberjocht. Gean foar stipe nei { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Myn dashboerd besjen
# Button text
verify-email-cta = E-mailadres ferifiearje
# Headline of verification email
email-link-expires = Dizze keppeling ferrint oer 24 oer
email-verify-blurb = Ferifiearje jo e-mailadres om dizze ta te foegjen oan { -product-name } en meld jo oan foar datalekmeldingen.
# Email headline
email-found-breaches-hl = Hjirby in oersjoch fan eardere datalekken
# Email headline
email-breach-summary-for-email = Datalekoersjoch foar { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } is yn 0 bekende datalekken ferskynd
# Email headline
email-alert-hl = { $userEmail } is yn in bekend datalek ferskynd
# Subject line of email
email-subject-found-breaches = { -product-name } hat jo gegevens fûn yn dizze datalekken
# Subject line of email
email-subject-no-breaches = { -product-name } hat gjin bekende datalekken fûn
# Subject line of email
email-subject-verify = Ferifiearje jo e-mailadres foar { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Mear ynfo oer { $fxmLink }
email-sensitive-disclaimer =
    Fanwegen de gefoelige aard fan dit datalek, binne de e-mailberjochten dy't hjirby belutsen binne net publyklik te finen.
    Jo ûntfange dizze melding omdat jo de ferifiearre eigener fan dit e-mailadres binne.
fxm-warns-you-no-breaches =
    { -product-name } warskôget jo foar datalekken mei betrekking ta jo persoanlike gegevens.
    Oant no ta binne der gjin datalekken fûn. Wy stjoere jo in melding as jo e-mailadres werjûn wurdt yn in nij datalek.
fxm-warns-you-found-breaches =
    { -product-name } warskôget jo foar datalekken mei betrekking ta jo persoanlike gegevens.
    Jo binne ek oanmeld om meldingen te ûntfangen as jo e-mailadres werjûn wurdt yn in nij datalek.
email-breach-alert-blurb =
    { -product-name } warskôget jo foar datalekken mei betrekking ta jo persoanlike gegevens.
    Wy hawwe sakrekt ynformaasje ûntfongen oer in datalek fan in oar bedriuw.
# List headline
faq-list-headline = Faak stelde fragen
# Link Title
faq-v2-1 = Ik werken gjin fan dizze bedriuwen of websites. Wêrom kom ik foar yn dit datalek?
# Link Title
faq-v2-2 = Moat ik wat dwaan as in datalek jierren lyn bard is of as dit in âld account is?
