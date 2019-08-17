# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Elige intra 24 horas le button Verificar mi email, pro confirmar tu conto de Firefox Monitor.
verify-my-email = Verifica mi email
report-scan-another-email = Scander un altere email in { -product-name }
automated-message = Iste message ha essite inviate automaticamente. Si tu lo ha recipite per error, nulle action es necesse.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Nos inviava iste message a { $userEmail } perque le adresse de email optava in alertas ex { -product-name }.
unsubscribe-email-link = Si tu non vole plus alertas de { -product-name }, remove te ab le inscription.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Reporto de { -product-name }
report-date = data del reporto:
email-address = Adresse email:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Que facer postea
report-headline =
    { $breachCount ->
        [0] Usque ora, toto bon.
        [one] Tu conto appareva in { $breachCount } violation.
       *[other] Tu contos appareva in { $breachCount } violationes.
    }
report-subhead-no-breaches =
    Tu conto non appare in nostre reporto plen del violationes. 
    Illo es bon novas, ma il ha plus que tu pote facer.
    Le violationes de datos eveni sempre, assi lege pro apprender como pote tu proteger tu contrasignos.
report-subhead-found-breaches = Ecce tu reporto plen de Firefox Monitor, que include tote le note violationes de datos que contine iste adresse de email.
report-pwt-blurb =
    Contrasignos es assi preciose que milles de illos es robate cata die e excambiate o vendite sur le mercato nigre.
    Le contrasignos plus forte protege tu contos e tote le informationes personal que demora intra illos.
report-pwt-headline-1 = Usa un contrasigno differente pro cata conto
report-pwt-summary-1 =
    Reusar identic contrasigno ubique aperi le porta al hackers.
    Illes pote usar ille contrasigno pro acceder a tu altere contos.
report-pwt-headline-2 = Crea contrasignos forte e unic
report-pwt-summary-2 =
    Le hackers usa listas de commun contrasignos pro provar a divinar illos tue.
    Plus longe e plus aleatori es tu contrasigno, plus difficile illo sera a robar.
report-pwt-headline-3 = Tracta le questiones de securitate como contrasignos extra
report-pwt-summary-3 =
    Le sitos web non verifica que tu responsas es accurate, ma solo que illos concorda sempre.
    Crea responsas longe, aleatori e reserva los in qualque loco secur.
report-pwt-headline-4 = Usa le gestor de contrasigno
report-pwt-summary-4 =
    Servicios como 1Password, LastPass, Dashlane, e Bitwarden genera contrasignos forte, reserva los con securitate,
    e stipa los in sitos web assi que tu non ha a rememorar cata singule uno.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Vide si tu ha essite parte de un violation de datos.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Holla,
    { -brand-name } ha un servicio libere ubi tu pote verificar si tu ha essite parte de un violation de datos. Ecce como illo functiona:
    1. Va a { "https://monitor.firefox.com" } e cerca tu email.
    2. Vide si tu contos online ha essite exponite in un violation de datos.
    3. Recipe le suggestiones ex { -product-name } re que facer successivemente.
# Unsubscribe link in email.
email-unsub-link = Remover le subscription
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Tu recipe iste email perque tu es inscribite al avisos de { -product-name }. Non vole tu plus iste emails? { $unsubLink }. Iste email ha essite inviate automaticamente. Pro supporto, visita { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Tu recipe iste email perque tu es inscribite al avisos de { -product-name }.
    Iste email ha essite inviate automaticamente. Pro supporto, visita { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Monstrar mi pannello
# Button text
verify-email-cta = Verificar le email
# Button text
see-all-breaches = Vide tote le violationes
# Headline of verification email
email-link-expires = Iste ligamine expira in 24 horas
email-verify-blurb = Verifica tu adresse email pro lo adder a { -product-name } e inscribe te al avisos de violation.
# Email headline
email-found-breaches-hl = Ecce un summario del violationes de datos passate
# Email headline
email-breach-summary-for-email = Summario violationes pro { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } appareva in 0 note violationes de datos
# Email headline
email-alert-hl = { $userEmail } appareva in un nove violation de datos
# Subject line of email
email-subject-found-breaches = { -product-name } trovava i tu informationes in le violationes sequente
# Subject line of email
email-subject-no-breaches = { -product-name } non trovava ulle violationes note
# Subject line of email
email-subject-verify = Verifica tu adresse email pro { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Apprender plus re { $fxmLink }
email-sensitive-disclaimer = Per le natura sensibile de iste violation, emails implicate non es publicamente detectabile. Tu recipe iste aviso perque tu es le proprietario verificate de iste adresse email.
fxm-warns-you-no-breaches =
    { -product-name } te adverti re violationes de datos que involve tu informationes personal. 
    Adhuc, nulle violationes esseva trovate. Nos te inviara un aviso si tu adresse email apparera in un nove violation.
# List headline
faq-list-headline = Demandas frequente
# Link Title
faq-v2-4 = Como tracta { -product-name } le sitos sensibile?
