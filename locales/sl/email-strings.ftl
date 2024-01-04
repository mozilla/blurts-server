# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Poročilo { -product-name }
report-date = Datum poročila:
email-address = E-poštni naslov:

# A link to legal information about mozilla products.
legal = Pravno obvestilo

# Unsubscribe link in email.
email-unsub-link = Odjavite se

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    To e-poštno sporočilo ste prejeli, ker ste se prijavili na { -product-name }. 
    Ne želite več prejemati teh e-poštnih sporočil? { $unsubLink }. To je samodejno e-poštno sporočilo. Za dodatno pomoč obiščite { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    To e-poštno sporočilo ste prejeli, ker ste se prijavili na opozorila { -product-name }ja. 
    To je samodejno e-poštno sporočilo. Za dodatno pomoč obiščite { $faqLink }.

# Button text
verify-email-cta = Potrdi e-poštni naslov

# Button text
see-all-breaches = Prikaži vse kraje podatkov

# Headline of verification email
email-link-expires = Ta povezava poteče v naslednjih 24 urah
email-verify-blurb = Potrdite svoj e-poštni naslov, da ga dodate v { -product-name } in se prijavite na opozorila o krajah.

# Email headline
email-found-breaches-hl = Tukaj je vaš povzetek preteklih kraj podatkov

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Povzetek kraj podatkov za { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } se ni pojavil v nobeni znani kraji podatkov

# Email headline
email-alert-hl = { $userEmail } se je pojavil v novi kraji podatkov

##

# Subject line of email
email-subject-found-breaches = { -product-name } je našel vaše podatke v teh krajah

# Subject line of email
email-subject-no-breaches = { -product-name } ni našel nobenih znanih kraj

# Subject line of email
email-subject-verify = Potrdite e-pošto za { -product-name }

# Variables:
#   $fxmLink (string) - Link to Firefox Monitor that uses the text from { -product-name }.
learn-more-about-fxm = Več o storitvi { $fxmLink }

email-sensitive-disclaimer =
    Zaradi občutljive narave te kraje, vpletenih e-poštnih naslovov ni mogoče javno odkriti.
    To opozorilo ste prejeli, ker ste preverjeni lastnik tega e-poštnega naslova.

fxm-warns-you-no-breaches =
    { -product-name } vas opozori na kraje podatkov, ki vključujejo vaše osebne podatke.
    Do zdaj ni bilo ugotovljenih nobenih kraj. Če se bo vaš e-poštni naslov pojavil v novi kraji, vas bomo opozorili.

fxm-warns-you-found-breaches =
    { -product-name } vas opozori na kraje podatkov, ki vključujejo vaše osebne podatke.
    Prijavljeni ste na prejemanje opozoril, če se vaš e-poštni naslov pojavi v novi kraji.

email-breach-alert-blurb =
    { -product-name } vas opozarja o krajah podatkov, ki vključujejo vaše osebne podatke.
    Pravkar smo prejeli podrobnosti o novi kraji podatkov.

# Section headline
monitor-another-email = Želite spremljati še en e-poštni naslov?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Variables:
#   $unsubscribe-link-attr (string) - Link to email unsubscribe
email-2022-unsubscribe = To samodejno e-poštno sporočilo ste prejeli, ker ste naročeni na { -product-name }. <br>Svoje nastavitve e-pošte lahko kadar koli spremenite <a { $unsubscribe-link-attr }>tukaj</a>.
# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Podatke o krajah zagotavlja <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Imate nerazrešene kraje podatkov
email-unresolved-subhead = Vaš e-poštni naslov je bil razkrit. <br>Odpravite težavo takoj s { -product-name }.
email-is-affected = Vaš e-poštni naslov { $email-address } je odkrit v vsaj eni kraji podatkov
email-more-detail = Prijavite se v { -product-name }, če si želite ogledati več podrobnosti o krajah vaših podatkov (vključno s tem, kdaj je do njih prišlo in kateri podatki so bili izpostavljeni), ter izvedeti, kaj morate storiti, če je vaša e-pošta izpostavljena v kraji podatkov.
email-breach-status = Trenutno stanje kraje
# table row 1 label
email-monitored = Skupaj nadzorovanih e-poštnih naslovov:
# table row 2 label
email-breach-total = Skupno število kraj:
# table row 3 label
email-resolved = Razrešene kraje:
# table row 4 label
email-unresolved = Nerazrešene kraje:
email-resolve-cta = Razreši kraje

## Verification email

email-verify-heading = Začnite varovati svoje podatke
email-verify-subhead = Potrdite svoj e-poštni naslov in začnite varovati svoje podatke po kraji.
email-verify-simply-click = Preprosto kliknite spodnjo povezavo, da dokončate preverjanje računa.

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Tukaj je povzetek kraje podatkov
email-breach-detected = Rezultati iskanja za vaš račun { $email-address } kažejo, da je bil vaš e-poštni naslov morda izpostavljen. Priporočamo, da takoj ukrepate in razrešite to krajo.
email-no-breach-detected = Odlična novica! Odkrili nismo nobene kraje podatkov, ki bi vplivale na vaš e-poštni naslov { $email-address }.
email-dashboard-cta = Pojdi na nadzorno ploščo

## Breach alert

email-may-have-been-exposed = Vaš e-poštni naslov je bil morda razkrit v kraji podatkov
email-spotted-new-breach = Zaznali smo novo krajo podatkov
