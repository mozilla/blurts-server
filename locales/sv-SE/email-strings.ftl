# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Rapport { -product-name }
report-date = Rapportdatum:
email-address = E-postadress:
# A link to legal information about mozilla products.
legal = Juridisk information
# Unsubscribe link in email.
email-unsub-link = Avsluta prenumeration
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Du får detta meddelande eftersom du anmälde dig till { -product-name } för
    varningar. Vill du inte längre ha dessa e-postmeddelanden? { $unsubLink }. Det här är ett automatiserat e-postmeddelande. För support, besök { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Du får detta meddelande eftersom du anmälde dig till { -product-name } för
    varningar. Det här är ett automatiserat e-postmeddelande. För support, besök { $faqLink }.
# Button text
verify-email-cta = Verifiera e-postadress
# Button text
see-all-breaches = Se alla intrång
# Headline of verification email
email-link-expires = Den här länken upphör inom 24 timmar
email-verify-blurb = Verifiera din e-postadress för att lägga till den i { -product-name } och registrera dig för intrångsvarningar.
# Email headline
email-found-breaches-hl = Här är din sammanfattning av tidigare dataintrång
# Email headline
email-breach-summary-for-email = Intrångssammanfattning för { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } förekom i 0 kända dataintrång
# Email headline
email-alert-hl = { $userEmail } förekom i ett nytt dataintrång
# Subject line of email
email-subject-found-breaches = { -product-name } hittade din information i dessa intrång
# Subject line of email
email-subject-no-breaches = { -product-name } hittade inga kända intrång
# Subject line of email
email-subject-verify = Verifiera din e-postadress för { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Läs mer om { $fxmLink }
email-sensitive-disclaimer =
    På grund av den känsliga karaktären av detta intrång är inblandade e-postadresser inte offentligt tillgängliga.
    Du tar emot den här varningen eftersom du är den verifierade ägaren till den här e-postadressen.
fxm-warns-you-no-breaches =
    { -product-name } varnar dig om intrång av uppgifter som involverar din personliga information.
    Hittills har inga intrång hittats. Vi skickar en varning om din e-postadress visas i ett nytt intrång.
fxm-warns-you-found-breaches =
    { -product-name } varnar dig om intrång av uppgifter som involverar din personliga information.
    Du är också registrerad för att få varningar om din e-postadress visas i ett nytt intrång.
email-breach-alert-blurb =
    { -product-name } varnar dig om intrång av uppgifter som involverar din personliga information.
    Vi har precis fått uppgifter om ett dataintrång från ett annat företag.
# List headline
faq-list-headline = Vanliga frågor
# Link Title
faq-v2-1 = Jag känner inte igen detta företag eller webbplats. Varför finns jag med i detta intrång?
# Link Title
faq-v2-2 = Behöver jag göra någonting om ett intrång inträffade för några år sedan eller om det är ett gammalt konto?
# Link Title
faq-v2-3 = Jag fick reda på att jag finns med i ett dataintrång. Vad ska jag göra nu?
# Link Title
faq-v2-4 = Hur behandlar { -product-name } känsliga webbplatser?
# This string contains nested markup that becomes a link to Firefox Monitor
# later in the code. Please do not modify or remove "<a>" and "</a>".
pre-fxa-message = <a>Skapa ett gratis { -brand-fxa }</a> och du kan lägga till upp till 15 e-postadresser.
# Section headline
monitor-another-email = Vill du övervaka en ny e-postadress?
# Subject line of email
pre-fxa-subject = En uppdatering från { -product-name }
pre-fxa-headline = Vad förändras med { -product-name }
pre-fxa-blurb =
    Det här är vad som har ändrats sedan du registrerade dig för { -product-name }, tjänsten som
    övervakar kända dataintrång för din personliga information. Vi länkar det till ditt Firefox-konto.
pre-fxa-tout-1 = Var uppmärksam på fler intrång
pre-fxa-p-1 =
    <a>Skapa ett konto</a> för att övervaka upp till 15 e-postadresser för
    dataintrång. Vi rekommenderar att du lägger till alla e-postadresser som du har använt för att skapa onlinekonton.
pre-fxa-tout-2 = Få en översikt
pre-fxa-p-2 =
    Se alla dataintrång på ett ställe så att du vet vilka lösenord som ska ändras.
    Översikten är endast tillgänglig med ett konto.
pre-fxa-tout-3 = Fortsätt få e-postvarningar
pre-fxa-p-3 =
    Du kommer fortfarande att få varningar från { -product-name }. Vi berättar om din information
    förekommer i ett nytt dataintrång.
# Button at the bottom of pre-fxa email.
create-account = Skapa konto
# More security products
more-products-headline = Skydda dig själv med fler av våra produkter
more-products-vpn = Skydd för hela din enhet, på varje enhet.
more-products-cta-vpn = Hämta { -product-name-vpn }
more-products-relay = Dölj din riktiga e-postadress för att skydda din identitet.
more-products-cta-relay = Hämta { -product-name-relay }

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
email-2022-hibp-attribution = Intrångsdata tillhandahållen av <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

email-unresolved-heading = Du har olösta intrång
