# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
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
# Email headline
email-breach-summary-for-email = Vuotoyhteenveto sähköpostiosoitteelle { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } ei ilmennyt yhdessäkään tunnetussa tietovuodossa
# Email headline
email-alert-hl = { $userEmail } ilmeni uudessa tietovuodossa
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
# List headline
faq-list-headline = Usein kysytyt kysymykset
# Link Title
faq-v2-1 = En tunnista jotain tiettyä yritystä tai verkkosivustoa. Miksi olen mukana vuodossa?
# Link Title
faq-v2-2 = Tarvitseeko minun tehdä mitään, jos vuoto tapahtui vuosia sitten tai jos kyseessä on vanha käyttäjätili?
# Link Title
faq-v2-3 = Minulle selvisi juuri, että olen osallisena tietovuodossa. Mitä teen seuraavaksi?
# Link Title
faq-v2-4 = Kuinka { -product-name } kohtelee arkaluonteisia sivustoja?
# This string contains nested markup that becomes a link to Firefox Monitor
# later in the code. Please do not modify or remove "<a>" and "</a>".
pre-fxa-message = <a>Luo ilmainen { -brand-fxa }</a>, sen jälkeen voit lisätä jopa 15 sähköpostiosoitetta.
# Section headline
monitor-another-email = Haluatko seurata myös muita sähköpostiosoitteita?
# Subject line of email
pre-fxa-subject = Päivitys palvelusta { -product-name }
pre-fxa-headline = Mitä uutuuksia { -product-name } saa
pre-fxa-blurb =
    Tässä uusimmat kuulumiset sen jälkeen, kun rekisteröidyt { -product-name }iin, palveluun joka
    tarkkailee tunnettuissa tietovuodoissa mahdollisesti esiintyviä henkilötietojasi. Linkitämme sen Firefox-tileihin.
pre-fxa-tout-1 = Pysy ajan tasalla uusien vuotojen suhteen
pre-fxa-p-1 =
    <a>Luo tili</a> valvoaksesi enintään 15 sähköpostiosoitetta tietovuotojen varalta. 
    Suosittelemme lisäämään kaikki sähköpostiosoitteet, joita olet käyttänyt verkkotilejä luodessasi.
pre-fxa-tout-2 = Hanki kojelautanäkymä
pre-fxa-p-2 =
    Näe kaikki tietovuodot yhdestä paikasta, jolloin tiedät mitkä salasanat tulee vaihtaa. 
    Vuotojen yhteenveto on saatavilla vain kirjautuneille käyttäjille.
pre-fxa-tout-3 = Vastaanota sähköpostihälytyksiä
pre-fxa-p-3 =
    Saat edelleen hälytyksiä { -product-name }ista. Ilmoitamme sinulle, jos 
    tietojasi ilmenee uudessa tietovuodossa.
# Button at the bottom of pre-fxa email.
create-account = Luo tili
# More security products
more-products-headline = Suojaa itseäsi muilla tuotteillamme
more-products-vpn = Suojausta koko laitteellesi, jokaiselle laitteellesi.
more-products-cta-vpn = Hanki { -product-name-vpn }
more-products-relay = Piilota todellinen sähköpostiosoitteesi henkilöytesi suojaamiseksi.
more-products-cta-relay = Hanki { -product-name-relay }
