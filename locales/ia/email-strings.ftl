# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Reporto de { -product-name }
report-date = data del reporto:
email-address = Adresse de e-mail:
# A link to legal information about mozilla products.
legal = Legal
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
# Button text
verify-email-cta = Verificar le email
# Button text
see-all-breaches = Vide tote le violationes
# Headline of verification email
email-link-expires = Iste ligamine expira in 24 horas
email-verify-blurb = Verifica tu adresse de e-mail pro adder lo a { -product-name } e inscriber te al avisos de violation.
# Email headline
email-found-breaches-hl = Ecce un summario del violationes de datos passate

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Summario violationes pro { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } appareva in 0 violationes cognoscite de datos
# Email headline
email-alert-hl = { $userEmail } appareva in un nove violation de datos

##

# Subject line of email
email-subject-found-breaches = { -product-name } trovava i tu informationes in le violationes sequente
# Subject line of email
email-subject-no-breaches = { -product-name } non ha trovate alcun violation cognoscite
# Subject line of email
email-subject-verify = Verifica tu adresse de e-mail pro { -product-name }
# Variables:
#   $fxmLink (string) - Link to Firefox Monitor that uses the text from { -product-name }.
learn-more-about-fxm = Apprender plus re { $fxmLink }
email-sensitive-disclaimer = A causa del natura sensibile de iste violation, le messages implicate non es publicamente consultabile. Tu recipe iste aviso perque tu es le proprietario verificate de iste adresse de e-mail.
fxm-warns-you-no-breaches =
    { -product-name } te adverti sur violationes de datos que implica tu informationes personal. 
    Presentemente, nulle violationes ha essite trovate. Nos te inviara un aviso si tu adresse de e-mail appare in un nove violation.
fxm-warns-you-found-breaches = { -product-name } te adverti sur violationes de datos que implica tu informationes personal. Tu es etiam inscribite pro reciper avisos si tu adresse de e-mail appare in un nove violation.
email-breach-alert-blurb = { -product-name } te adverti re violationes de datos que involve tu informationes personal. Nos ha justo recipite detalios re un altere violation de datos de un compania.
# Section headline
monitor-another-email = Vole tu adder un altere adresse email?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Variables:
#   $unsubscribe-link-attr (string) - Link to email unsubscribe
email-2022-unsubscribe =
    Tu recipe iste email automatisate como abonato de { -product-name }.
    <br>Senti te sempre libere de cambiar tu preferentias email <a { $unsubscribe-link-attr }>ci</a>.
# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Violation de datos fornite per <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Tu ha violationes non resolvite
email-unresolved-subhead =
    Tu email ha essite exponite.
    <br>Corrige lo immediatemente con { -product-name }.
email-is-affected = Tu email, { $email-address }, es afficite per al minus un violation de datos
email-more-detail = Accede a { -product-name } ora pro vider altere detalios re tu violationes (includite quando illos occurreva e que datos era exponite) e apprende lo que tu deberea facer quando tu email ha essite exponite in un violation de datos.
email-breach-status = Stato actual del violationes
# table row 1 label
email-monitored = Total emails surveliate:
# table row 2 label
email-breach-total = Numero total de violationes:
# table row 3 label
email-resolved = Violationes resolvite:
# table row 4 label
email-unresolved = Violationes non resolvite:
email-resolve-cta = Resolver violationes

## Verification email

email-verify-heading = Salveguarda tu datos, desde subito
email-verify-subhead = Verifica tu email pro initiar a proteger tu datos post un violation.
email-verify-simply-click = Simplemente clicca le ligamine infra pro finir de verificar tu conto.

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Ecce tu summario de violationes de datos
email-breach-detected = Le resultatos del recerca pro tu conto { $email-address } ha disvelate que tu email forsan ha essite exponite. Nos consilia que tu ora age pro resolver iste violation.
email-no-breach-detected = Formidabile novas! Nos ha trovate nulle violationes de datos que affice tu email, { $email-address }.
email-dashboard-cta = Va al pannello de controlo

## Breach alert

email-may-have-been-exposed = Tu email pote haber essite exponite in un violation de datos
email-spotted-new-breach = Nos ha individuate un nove violation de datos
