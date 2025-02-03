# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Dataintrång med hög risk
fix-flow-nav-leaked-passwords = Läckta lösenord
fix-flow-nav-security-recommendations = Säkerhetsrekommendationer
guided-resolution-flow-exit = Tillbaka till översikten
guided-resolution-flow-next-arrow = Gå till nästa steg
guided-resolution-flow-next-arrow-sub-step = Gå till nästa resultat
guided-resolution-flow-step-navigation-label = Guidade steg

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Låt oss fortsätta
fix-flow-celebration-next-recommendations-label = Se rekommendationer
fix-flow-celebration-next-dashboard-label = Gå till din översikt

## High-risk flow

fix-flow-celebration-high-risk-title = Du har löst dina högriskexponeringar!
fix-flow-celebration-high-risk-description-in-progress = Att göra det här arbetet kan kännas som mycket, men det är viktigt att göra det för att hålla dig själv säker. Fortsätt så.
fix-flow-celebration-high-risk-description-done = Att göra det här arbetet kan kännas som mycket, men det är viktigt att göra det för att skydda dig själv.
fix-flow-celebration-high-risk-description-next-passwords = Låt oss nu lösa dina exponerade lösenord.
fix-flow-celebration-high-risk-description-next-security-questions = Låt oss lösa dina utsatta säkerhetsfrågor.
fix-flow-celebration-high-risk-description-next-security-recommendations = Därefter ger vi dig personliga säkerhetsrekommendationer baserat på vilken data som har exponerats.
fix-flow-celebration-high-risk-description-next-dashboard = Du har nått till slutet. Du kan se alla åtgärder och följa dina framsteg på översikten.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Dina lösenord är nu skyddade!
fix-flow-celebration-security-questions-title = Dina säkerhetsfrågor är skyddade!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Låt oss nu granska och uppdatera dina exponerade säkerhetsfrågor.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Därefter ger vi dig personliga säkerhetsrekommendationer baserat på vilken data som har exponerats.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bra gjort! Du har nått till slutet. Du kan se alla åtgärder och följa dina framsteg på översikten.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Du har slutfört alla dina rekommendationer!
fix-flow-celebration-security-recommendations-description-next-dashboard = Bra gjort! Du har nått till slutet. Du kan se alla åtgärder och följa dina framsteg på översikten.

# High Risk Data Breaches

high-risk-breach-heading = Så här gör du
high-risk-breach-subheading = Detta kräver tillgång till din känsliga information, så du måste åtgärda det manuellt.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Den förekom i { $num_breaches } dataintrång:
       *[other] Den förekom i { $num_breaches } dataintrång:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>den { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Markera som löst
high-risk-breach-skip = Hoppa över nu
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Din beräknade tid: { $estimated_time }+ minut
       *[other] Din beräknade tid: { $estimated_time }+ minuter
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Ditt kreditkortsnummer har exponerats
high-risk-breach-credit-card-description = Alla som får det kan göra obehöriga köp som du kan bli ansvarig för. Agera nu för att förhindra ekonomisk skada.
high-risk-breach-credit-card-step-one = Om du fortfarande har det här kortet, kontakta utfärdaren för att rapportera det stulet.
high-risk-breach-credit-card-step-two = Begär ett nytt kort med ett nytt nummer.
high-risk-breach-credit-card-step-three = Kontrollera dina konton för obehöriga debiteringar.

# Bank Account Breaches

high-risk-breach-bank-account-title = Ditt bankkonto har exponerats
high-risk-breach-bank-account-description = Att vidta åtgärder så snart som möjligt kan ge dig fler juridiskt skydd som hjälper dig att återställa eventuella förluster.
high-risk-breach-bank-account-step-one = Meddela omedelbart din bank att ditt kontonummer har blivit utsatt för intrång.
high-risk-breach-bank-account-step-two = Ändra ditt kontonummer.
high-risk-breach-bank-account-step-three = Kontrollera dina konton för obehöriga debiteringar.

# Social Security Number Breaches

high-risk-breach-social-security-title = Ditt personnummer har exponerats
high-risk-breach-social-security-description = Bedragare kan öppna upp nya lån eller kreditkort med ditt personnummer. Agera snabbt för att förhindra ekonomisk skada.
high-risk-breach-social-security-step-one = Skydda dig själv genom att <link_to_info>konfigurera en bedrägerivarning eller frysa din kredit.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Kontrollera din kreditupplysning</link_to_info> efter okända konton.

# Social Security Number Modal

ssn-modal-title = Om bedrägerivarningar och spärrade krediter
ssn-modal-description-fraud-part-one = <b>En bedrägerivarning</b> kräver att företag verifierar din identitet innan de utfärdar en ny kredit i ditt namn. Det är gratis, varar i ett år och kommer inte att negativt påverka din kreditvärdering.
ssn-modal-description-fraud-part-two = För att skapa en, kontakta någon av de tre kreditinstituten. Du behöver inte kontakta alla tre.
ssn-modal-description-freeze-credit-part-one = <b>Att frysa din kredit</b> hindrar någon från att öppna ett nytt konto i ditt namn. Det är gratis och påverkar inte din kreditvärdighet negativt, men du måste låsa upp det innan du öppnar några nya konton.
ssn-modal-description-freeze-credit-part-two = För att frysa din kredit, kontakta var och en av de tre kreditinstituten — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> och <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Läs mer om bedrägerivarningar och frysta krediter
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Din PIN-kod har exponerats
high-risk-breach-pin-description = Att vidta åtgärder så snart som möjligt kan ge dig fler juridiskt skydd som hjälper dig att återställa eventuella förluster.
high-risk-breach-pin-step-one = Meddela omedelbart din bank att din PIN-kod har äventyrats.
high-risk-breach-pin-step-two = Ändra din PIN-kod där du har använt samma PIN-kod.
high-risk-breach-pin-step-three = Kontrollera dina konton för obehöriga debiteringar.

# No high risk breaches found

high-risk-breach-none-title = Goda nyheter, vi hittade inte några högriskdataintrång
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Vi upptäcker dataintrång baserat på din e-postadress och vi hittade inga högriskdataintrång för { $email_list }.
high-risk-breach-none-sub-description-part-one = Högriskdataintrång inkluderar:
high-risk-breach-none-sub-description-ssn = Personnummer
high-risk-breach-none-sub-description-bank-account = Bankkontoinformation
high-risk-breach-none-sub-description-cc-number = Kreditkortsnummer
high-risk-breach-none-sub-description-pin = PIN-koder
high-risk-breach-none-continue = Fortsätt

# Security recommendations

security-recommendation-steps-label = Säkerhetsrekommendationer
security-recommendation-steps-title = Här är våra råd:
security-recommendation-steps-cta-label = Jag fattar!

# Phone security recommendation

security-recommendation-phone-title = Skydda ditt telefonnummer
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Ditt telefonnummer avslöjades i { $num_breaches } dataintrång:
       *[other] Ditt telefonnummer avslöjades i { $num_breaches } dataintrång:
    }
security-recommendation-phone-description = Tyvärr kan du inte ta tillbaka den. Men det finns åtgärder du kan vidta för att se till att du är säker.
security-recommendation-phone-step-one = Blockera nummer för att förhindra fler skräpsamtal
security-recommendation-phone-step-two = Klicka inte på länkar i texter från okända avsändare; om den verkar komma från en tillförlitlig källa, ring direkt för att bekräfta

# Email security recommendation

security-recommendation-email-title = Skydda din e-postadress
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Din e-postadress avslöjades i { $num_breaches } dataintrång:
       *[other] Din e-postadress avslöjades i { $num_breaches } dataintrång:
    }
security-recommendation-email-description = Tyvärr kan du inte lösa detta. Men det finns åtgärder du kan vidta för att skydda dig själv.
security-recommendation-email-step-one = Klicka inte på länkar i e-postmeddelanden från okända avsändare; om den verkar komma från en tillförlitlig källa, ring direkt för att bekräfta
security-recommendation-email-step-two = Var medveten om <link_to_info>nätfiskebedrägerier</link_to_info>
security-recommendation-email-step-three = Markera misstänkta e-postmeddelanden som skräppost och blockera avsändaren
security-recommendation-email-step-four = Använd <link_to_info>{ -brand-relay } e-postalias</link_to_info> för att skydda din e-post i framtiden

# IP security recommendation

security-recommendation-ip-title = Använd ett VPN för extra sekretess
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Din IP-adress avslöjades i { $num_breaches } dataintrång:
       *[other] Din IP-adress avslöjades i { $num_breaches } dataintrång:
    }
security-recommendation-ip-description = Din IP-adress pekar ut din plats och internetleverantör. Hackare kan använda denna information för att hitta din plats eller försöka ansluta till dina enheter.
security-recommendation-ip-step-one = Använd ett VPN (som <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) för att dölja din riktiga IP-adress och använda internet privat.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Ditt lösenord för { $breach_name } exponerades
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Det förekom i ett dataintrång den { $breach_date }.
leaked-passwords-description = Bedragare kan komma åt ditt konto och kommer sannolikt att försöka använda det på andra konton för att se om du har använt samma lösenord. Ändra det överallt där du har använt det för att skydda dig själv.
leaked-passwords-steps-title = Så här gör du
leaked-passwords-steps-subtitle = Detta kräver åtkomst till ditt konto, så du måste åtgärda det manuellt.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Ändra ditt lösenord för <b>{ $emails_affected }</b> på <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Ändra det på alla ställen du använt det.
leaked-passwords-mark-as-fixed = Markera som löst
leaked-passwords-skip = Hoppa över nu
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Uppskattad tid att slutföra: { $estimated_time } minut per webbplats
       *[other] Uppskattad tid att slutföra: { $estimated_time } minuter per webbplats
    }

# Leaked Security Questions

leaked-security-questions-title = Dina säkerhetsfrågor har avslöjats
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = De förekom i ett dataintrång på { $breach_name } den { $breach_date }.
leaked-security-questions-description = Bedragare kan använda dessa för att komma åt dina konton och alla andra webbplatser där du har använt samma säkerhetsfrågor. Uppdatera dem nu för att skydda dina konton.
leaked-security-questions-steps-title = Så här gör du
leaked-security-questions-steps-subtitle = Detta kräver åtkomst till ditt konto, så du måste åtgärda det manuellt.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Uppdatera dina säkerhetsfrågor för <b>{ $email_affected }</b> på <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Uppdatera dem på en annan webbplats där du använt samma säkerhetsfrågor. Var noga med att använda olika säkerhetsfrågor för varje konto.
