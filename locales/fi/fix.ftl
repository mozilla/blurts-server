# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Suuren riskin tietomurrot
fix-flow-nav-leaked-passwords = Vuotaneet salasanat
fix-flow-nav-security-recommendations = Turvallisuussuositukset
guided-resolution-flow-exit = Palaa hallintapaneeliin
guided-resolution-flow-next-arrow = Siirry seuraavaan vaiheeseen
guided-resolution-flow-next-arrow-sub-step = Siirry seuraavaan tulokseen
guided-resolution-flow-step-navigation-label = Ohjatut vaiheet

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Jatketaan
fix-flow-celebration-next-recommendations-label = Näytä suositukset
fix-flow-celebration-next-dashboard-label = Siirry hallintapaneeliin

## High-risk flow

fix-flow-celebration-high-risk-title = Olet korjannut suuren riskin altistumiset!
fix-flow-celebration-high-risk-description-in-progress = Tämän työn tekeminen voi tuntua suurelta, mutta se on tärkeää pitääksesi itsesi turvassa. Jatka samaan malliin.
fix-flow-celebration-high-risk-description-done = Tämän työn tekeminen voi tuntua suurelta, mutta se on tärkeää pitääksesi itsesi turvassa.
fix-flow-celebration-high-risk-description-next-passwords = Korjataan nyt altistuneet salasanasi.
fix-flow-celebration-high-risk-description-next-security-questions = Korjataan nyt altistuneet turvallisuuskysymyksesi.
fix-flow-celebration-high-risk-description-next-security-recommendations = Seuraavaksi annamme sinulle räätälöityjä tietoturvasuosituksia sen perusteella, mitä tietojasi on vuodettu.
fix-flow-celebration-high-risk-description-next-dashboard = Olet saavuttanut vaiheesi loppuun. Voit tarkastella mitä tahansa toimintokohteita ja seurata edistymistäsi hallintapaneelissa.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Salasanasi ovat nyt suojattu!
fix-flow-celebration-security-questions-title = Turvakysymyksesi ovat suojattuja!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Katselmoidaan ja päivitetään nyt altistuneet turvallisuuskysymyksesi.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Seuraavaksi annamme sinulle räätälöityjä tietoturvasuosituksia sen perusteella, mitä tietojasi on vuodettu.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Hyvä, olet saavuttanut vaiheesi loppuun. Voit tarkastella mitä tahansa toimintokohteita ja seurata edistymistäsi hallintapaneelissa.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Hienoa, olet seurannut kaikkia suosituksia!
fix-flow-celebration-security-recommendations-description-next-dashboard = Hyvä, olet saavuttanut vaiheesi loppuun. Voit tarkastella mitä tahansa toimintokohteita ja seurata edistymistäsi hallintapaneelissa.

# High Risk Data Breaches

high-risk-breach-heading = Tämän kaiken voit tehdä
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Se esiintyi { $num_breaches } tietovuodon yhteydessä:
       *[other] Se esiintyi { $num_breaches } tietovuodon yhteydessä:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date> { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Merkitse korjatuksi
high-risk-breach-skip = Ohita nyt
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Arvioitu aika: { $estimated_time }+ minuutti
       *[other] Arvioitu aika: { $estimated_time }+ minuuttia
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Luottokorttisi numero paljastui
high-risk-breach-credit-card-description = Jokainen, joka saa sen, voi tehdä luvattomia ostoksia, joista saatat olla vastuussa. Toimi nyt estääksesi taloudelliset harmit.
high-risk-breach-credit-card-step-one = Jos sinulla on edelleen tämä kortti, ota yhteyttä sen myöntäjään ja ilmoita se varastetuksi.
high-risk-breach-credit-card-step-two = Pyydä uusi kortti uudella numerolla.
high-risk-breach-credit-card-step-three = Tarkista tilisi luvattomien maksujen varalta.

# Bank Account Breaches

high-risk-breach-bank-account-title = Pankkitilisi paljastui
high-risk-breach-bank-account-step-one = Ilmoita pankillesi välittömästi, että tilinumerosi on vaarantunut.
high-risk-breach-bank-account-step-two = Vaihda tilinumerosi.
high-risk-breach-bank-account-step-three = Tarkista tilisi luvattomien maksujen varalta.

# Social Security Number Breaches

high-risk-breach-social-security-title = Henkilötunnuksesi paljastui

# Social Security Number Modal

ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = PIN-koodisi paljastui
high-risk-breach-pin-step-one = Ilmoita pankillesi välittömästi, että PIN-koodisi on vaarantunut.
high-risk-breach-pin-step-two = Vaihda PIN-koodi kaikkialla, missä olet mahdollisesti käyttänyt samaa PIN-koodia.
high-risk-breach-pin-step-three = Tarkista tilisi luvattomien maksujen varalta.

# No high risk breaches found

high-risk-breach-none-title = Hyviä uutisia, suuren riskin tietovuotoja ei löytynyt
high-risk-breach-none-sub-description-part-one = Suuren riskin tietomurtoihin sisältyy:
high-risk-breach-none-sub-description-ssn = Henkilötunnus
high-risk-breach-none-sub-description-bank-account = Pankkitilin tiedot
high-risk-breach-none-sub-description-cc-number = Luottokorttien numerot
high-risk-breach-none-sub-description-pin = PIN-koodit
high-risk-breach-none-continue = Jatka

# Security recommendations

security-recommendation-steps-label = Turvallisuussuositukset
security-recommendation-steps-title = Tässä meidän neuvomme:
security-recommendation-steps-cta-label = Selvä!

# Phone security recommendation

security-recommendation-phone-title = Suojaa puhelinnumerosi
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Puhelinnumerosi paljastui { $num_breaches } tietovuodossa:
       *[other] Puhelinnumerosi paljastui { $num_breaches } tietovuodossa:
    }
security-recommendation-phone-description = Valitettavasti tätä asiaa ei voi muuttaa. On olemassa toimenpiteitä, joiden avulla voit varmistaa, että pysyt turvassa.
security-recommendation-phone-step-one = Estä ns. spamminumerot estääksesi mahdolliset roskapuhelut
security-recommendation-phone-step-two = Älä napsauta tuntemattomien lähettäjien tekstiviesteissä olevia linkkejä. Jos viesti vaikuttaa olevan luotettavasta lähteestä, soita lähettäjälle vahvistaaksesi

# Email security recommendation

security-recommendation-email-title = Suojaa sähköpostiosoitteesi
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Sähköpostiosoitteesi altistui { $num_breaches } tietovuodossa:
       *[other] Sähköpostiosoitteesi altistui { $num_breaches } tietovuodossa:
    }
security-recommendation-email-description = Valitettavasti et voi korjata tätä. On olemassa toimenpiteitä, joiden avulla voit silti suojata itseäsi.
security-recommendation-email-step-one = Älä napsauta tuntemattomien lähettäjien sähköpostiviesteissä olevia linkkejä. Jos viesti vaikuttaa olevan luotettavasta lähteestä, soita lähettäjälle vahvistaaksesi
security-recommendation-email-step-two = Ole tietoinen <link_to_info>kalasteluhuijauksista</link_to_info>
security-recommendation-email-step-three = Merkitse epäilyttävät sähköpostit roskapostiksi ja estä lähettäjä
security-recommendation-email-step-four = Käytä <link_to_info>{ -brand-relay }-sähköpostimaskeja</link_to_info> suojataksesi sähköpostiosoitettasi jatkossa

# IP security recommendation

security-recommendation-ip-title = Käytä VPN:ää yksityisyyden lisäämiseksi
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] IP-osoitteesi paljastui { $num_breaches } tietovuodon yhteydessä:
       *[other] IP-osoitteesi paljastui { $num_breaches } tietovuodon yhteydessä:
    }
security-recommendation-ip-description = IP-osoitteesi osoittaa sijaintisi ja Internet-palveluntarjoajasi. Hakkerit voivat käyttää näitä tietoja paikantaakseen sinut tai yrittääkseen muodostaa yhteyden laitteihisi.
security-recommendation-ip-step-one = Käytä VPN:ää (kuten <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) piilottaaksesi todellisen IP-osoitteesi ja käyttääksesi Internetiä yksityisesti.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Salasanasi kohteessa { $breach_name } vuodettiin
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Se esiintyi tietovuodossa { $breach_date }.
leaked-passwords-steps-title = Tämän kaiken voit tehdä
leaked-passwords-steps-subtitle = Tämä vaatii pääsyn tiliisi, joten sinun on korjattava se manuaalisesti.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Vaihda tilisi <b>{ $emails_affected }</b> salasana sivustolla <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Vaihda se missä tahansa muualla, missä olet käyttänyt sitä.
leaked-passwords-mark-as-fixed = Merkitse korjatuksi
leaked-passwords-skip = Ohita nyt
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Arvioitu valmistumisaika: { $estimated_time } min per sivusto
       *[other] Arvioitu valmistumisaika: { $estimated_time } min per sivusto
    }

# Leaked Security Questions

leaked-security-questions-title = Turvakysymyksesi paljastettiin
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Ne paljastuivat tietovuodossa { $breach_name } { $breach_date }.
leaked-security-questions-description = Huijarit voivat käyttää näitä päästäkseen tileillesi ja muille sivustoille, joilla olet käyttänyt samoja turvakysymyksiä. Päivitä kysymykset välittömästi suojataksesi tilisi.
leaked-security-questions-steps-title = Tämän kaiken voit tehdä
leaked-security-questions-steps-subtitle = Tämä vaatii pääsyn tiliisi, joten sinun on korjattava se manuaalisesti.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Päivitä tilin <b>{ $email_affected }</b> turvakysymykset sivustolla <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
