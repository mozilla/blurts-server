# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Raport { -product-name }
report-date = Data raportului:
email-address = Adresă de e-mail:

# A link to legal information about mozilla products.
legal = Mențiuni legale

# Unsubscribe link in email.
email-unsub-link = Dezabonează-te

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Primești acest e-mail deoarece te-ai înscris pentru alertele { -product-name }. Nu mai vrei să primești e-mailuri? { $unsubLink }. Acesta este un e-mail automat. Pentru asistență, vizitează { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Primești acest e-mail deoarece te-ai înscris pentru alertele { -product-name }.
    Acesta este un e-mail automat. Pentru asistență, vizitează { $faqLink }.

# Button text
verify-email-cta = Verifică e-mailul

# Button text
see-all-breaches = Vezi toate încălcările securității datelor

# Headline of verification email
email-link-expires = Acest link expiră în 24 de ore
email-verify-blurb = Verifică-ți adresa de e-mail pentru a o adăuga în { -product-name } și abonează-te la alertele privind încălcările securității datelor.

# Email headline
email-found-breaches-hl = Iată rezumatul tău privind încălcările securității datelor din trecut

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Rezumatul încălcărilor securității datelor pentru { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } a apărut în 0 încălcări cunoscute ale securității datelor

# Email headline
email-alert-hl = { $userEmail } a apărut într-o nouă încălcare a securității datelor

##

# Subject line of email
email-subject-found-breaches = { -product-name } ți-a găsit informațiile în aceste încălcări ale securității datelor

# Subject line of email
email-subject-no-breaches = { -product-name } nu a găsit încălcări cunoscute ale securității datelor

# Subject line of email
email-subject-verify = Verifică-ți e-mailul pentru { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Află mai multe despre { $fxmLink }

email-sensitive-disclaimer =
    Datorită caracterului sensibil al acestei încălcări a securității datelor, adresele de e-mail implicate nu pot fi dezvăluite public. 
    Primești această alertă deoarece ești posesorul confirmat al acestei adrese de e-mail.

fxm-warns-you-no-breaches =
    { -product-name } te avertizează cu privire la încălcările securității datelor în care sunt implicate informațiile tale cu caracter personal.
    Până în prezent nu au fost găsite încălcări. Îți vom trimite o alertă dacă adresa ta de e-mail apare într-o nouă încălcare.

fxm-warns-you-found-breaches =
    { -product-name } te avertizează cu privire la încălcările securității datelor în care sunt implicate informațiile tale cu caracter personal.
    De asemenea, te-ai înscris pentru a primi alerte dacă adresa ta de e-mail apare într-o nouă încălcare.

email-breach-alert-blurb =
    { -product-name } te avertizează cu privire la încălcările securității datelor în care sunt implicate informațiile tale cu caracter personal.
    Tocmai am primit detalii despre o încălcare a securității datelor suferită de o altă companie.

# Section headline
monitor-another-email = Vrei să monitorizezi altă adresă de e-mail?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
email-2022-hibp-attribution = Datele privind încălcările securității datelor sunt furnizate de <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`


## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email


## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-detected = Rezultatele căutării pentru contul { $email-address } au detectat că este posibil ca e-mailul tău să fi fost expus. Îți recomandăm să acționezi de îndată pentru a rezolva această încălcare a securității datelor.
email-dashboard-cta = Mergi la tabloul de bord

## Breach alert

email-spotted-new-breach = Am identificat o nouă încălcare a securității datelor
