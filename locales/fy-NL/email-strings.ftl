# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name }-rapport
report-date = Rapportdatum:
email-address = E-mailadres:

# A link to legal information about mozilla products.
legal = Juridysk

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

# Button text
verify-email-cta = E-mailadres ferifiearje

# Button text
see-all-breaches = Alle datalekken besjen

# Headline of verification email
email-link-expires = Dizze keppeling ferrint oer 24 oer
email-verify-blurb = Ferifiearje jo e-mailadres om dizze ta te foegjen oan { -product-name } en meld jo oan foar datalekmeldingen.

# Email headline
email-found-breaches-hl = Hjirby in oersjoch fan eardere datalekken

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Datalekoersjoch foar { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } is yn 0 bekende datalekken ferskynd

# Email headline
email-alert-hl = { $userEmail } is yn in bekend datalek ferskynd

##

# Subject line of email
email-subject-found-breaches = { -product-name } hat jo gegevens fûn yn dizze datalekken

# Subject line of email
email-subject-no-breaches = { -product-name } hat gjin bekende datalekken fûn

# Subject line of email
email-subject-verify = Ferifiearje jo e-mailadres foar { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Mear ynfo oer { $fxmLink }

email-sensitive-disclaimer =
    Fanwegen de gefoelige aard fan dit datalek, binne de e-mailberjochten dy’t hjirby belutsen binne net publyklik te finen.
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

# Section headline
monitor-another-email = Wolle jo in oar e-mailadres kontrolearje?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Jo ûntfange dit automatyske e-mailberjocht as abonnee fan { -product-name }. <br>Fiel jo frij om jo e-mailfoarkar op elk momint <a { $unsubscribe-link-attr }>hjir</a> te wizigjen.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Datalek oanlevere troch <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Jo hawwe net oploste datalekken
email-unresolved-subhead = Jo e-mailadres is bleatsteld. <br>Los it daliks op mei { -product-name }.
email-is-affected = Jo e-mailadres, { $email-address }, wurdt beynfloede troch op syn minst ien datalek
email-more-detail = Meld jo no oan by { -product-name } om mear details te sjen oer jo datalekken (ynklusyf wannear’t se bard binne en hokker gegevens bleatsteld binne), en lear wat jo dwaan moatte as jo e-mailadres bleatsteld is yn in datalek.
email-breach-status = Aktuele dataleksteat
# table row 1 label
email-monitored = Totaal oantal kontrolearre e-mailberjochten:
# table row 2 label
email-breach-total = Totaal oantal datalekken:
# table row 3 label
email-resolved = Oploste datalekken:
# table row 4 label
email-unresolved = Net oploste datalekken:
email-resolve-cta = Datalekken oplosse

## Verification email

email-verify-heading = Beskermje jo gegevens, daliks
email-verify-subhead = Ferifiearje jo e-mailadres om jo gegevens te beskermjen nei in datalek.
email-verify-simply-click = Klik op de ûndersteande keppeling om de ferifikaasje fan jo account te foltôgjen.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Hjir is jo gearfetting fan jo datalek
email-breach-detected = Sykresultaten foar jo account { $email-address } hawwe ûntdutsen dat jo e-mailadres mooglik lekt is. Wy rekommandearje oan dat jo no hannelje om dit datalek op te lossen.
email-no-breach-detected = Geweldich nijs! Wy hawwe gjin datalekken fûn dy’t ynfloed hawwe op jo e-mailadres, { $email-address }.
email-dashboard-cta = Nei it dashboerd

## Breach alert

email-may-have-been-exposed = Jo e-mailadres is mooglik lekt by in datalek
email-spotted-new-breach = Wy hawwe in nije datalek ûntdekt
