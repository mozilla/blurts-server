# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } -raportti
report-date = Raportin päivä:
email-address = Sähköpostiosoite:

# A link to legal information about mozilla products.
legal = Juridiset asiat

# Unsubscribe link in email.
email-unsub-link = Lopeta tilaus

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Saat tämän viestin, koska tilasit { -product-name } -hälytykset.
    Haluatko eroon näistä viesteistä? { $unsubLink }. Tämä on automaattinen viesti. Tukea on tarjolla sivulla { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Saat tämän viestin, koska tilasit { -product-name } -hälytykset. 
    Tämä on automaattinen viesti. Tukea on tarjolla sivulla { $faqLink }.

# Button text
verify-email-cta = Vahvista sähköposti

# Button text
see-all-breaches = Näytä kaikki vuodot

# Headline of verification email
email-link-expires = Tämä linkki vanhenee 24 tunnissa
email-verify-blurb = Vahvista sähköpostisi ja tilaa { -product-name } -vuotohälytykset.

# Email headline
email-found-breaches-hl = Tässä on yhteenveto aiemmista tietovuodoista

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Vuotoyhteenveto sähköpostiosoitteelle { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } ei ilmennyt yhdessäkään tunnetussa tietovuodossa

# Email headline
email-alert-hl = { $userEmail } ilmeni uudessa tietovuodossa

##

# Subject line of email
email-subject-found-breaches = { -product-name } löysi tietojasi näistä vuodoista

# Subject line of email
email-subject-no-breaches = { -product-name } ei löytänyt tunnettuja vuotoja

# Subject line of email
email-subject-verify = Vahvista sähköpostiosoitteesi { -product-name }iin

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Lue lisää { $fxmLink }ista

email-sensitive-disclaimer =
    Tietovuodossa mukana olevat sähköpostiosoitteet eivät ole julkisesti löydettävissä, koska
    sisältö on arkaluonteista. Saat tämän hälytyksen, koska olet tämän sähköpostiosoitteen
    vahvistettu omistaja.

fxm-warns-you-no-breaches =
    { -product-name } varoittaa sinua tietovuodoista, kun joudut sellaisen uhriksi. 
    Toistaiseksi vuotoja ei ole löytynyt. Lähetämme sinulle hälytyksen, jos sähköpostiosoitteesi ilmenee uudessa vuodossa.

fxm-warns-you-found-breaches =
    { -product-name } varoittaa sinua tietovuodoista, kun joudut sellaisen uhriksi. 
    Olet myös tilannut hälytykset, jos sähköpostiosoitteesi ilmenee uudessa vuodossa.

email-breach-alert-blurb =
    { -product-name } varoittaa sinua tietovuodoista, kun joudut sellaisen uhriksi. 
    Saimme yksityiskohtia yritykseen kohdistuneesta tietovuodosta.

# Section headline
monitor-another-email = Haluatko seurata myös muita sähköpostiosoitteita?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Saat tämän automaattisen sähköpostin tuotteen { -product-name } tilaajana. <br>Voit muuttaa sähköpostiasetuksiasi milloin tahansa <a { $unsubscribe-link-attr }>täällä</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Vuototiedot tarjoaa <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Sinulla on ratkaisemattomia vuotoja
email-unresolved-subhead = Sähköpostiosoitteesi on paljastunut. <br>Korjaa asia käyttämällä { -product-name }.
email-is-affected = Sähköpostiosoitteeseesi { $email-address } on kohdistunut ainakin yksi tietovuoto
email-more-detail = Kirjaudu sisään { -product-name } -palveluun nyt, niin näet lisätietoja tietovuodoista (mukaan lukien vuotojen ajankohdat ja mitä tietoa paljastui) ja katso, mitä sinun tulee tehdä, jos sähköpostiosoitteesi on paljastunut tietovuodossa.
email-breach-status = Vuotojen nykyinen tila
# table row 1 label
email-monitored = Valvottuja sähköpostiosoitteita yhteensä:
# table row 2 label
email-breach-total = Vuotojen kokonaismäärä:
# table row 3 label
email-resolved = Ratkaistut vuodot:
# table row 4 label
email-unresolved = Ratkaisemattomat vuodot:
email-resolve-cta = Selvitä vuodot

## Verification email

email-verify-heading = Suojaa tietosi heti
email-verify-subhead = Vahvista sähköpostiosoitteesi, jotta voit aloittaa tietojesi suojaamisen tietovuodon jälkeen.
email-verify-simply-click = Viimeistele tilisi vahvistaminen napsauttamalla alla olevaa linkkiä.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Tässä on yhteenveto tietovuodosta
email-breach-detected = Tiliäsi { $email-address } koskevissa hakutuloksissa havaittiin, että sähköpostiosoitteesi on saattanut paljastua. Suosittelemme, että toimit nyt tämän vuodon ratkaisemiseksi.
email-no-breach-detected = Hyviä uutisia! Emme ole havainneet tietovuotoja, jotka koskisivat sähköpostiosoitettasi { $email-address }.
email-dashboard-cta = Siirry kojelaudalle

## Breach alert

email-may-have-been-exposed = Sähköpostiosoitteesi on saattanut paljastua tietovuodossa
email-spotted-new-breach = Olemme havainneet uuden tietovuodon
