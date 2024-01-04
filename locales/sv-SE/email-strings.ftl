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

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Intrångssammanfattning för { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } förekom i 0 kända dataintrång

# Email headline
email-alert-hl = { $userEmail } förekom i ett nytt dataintrång

##

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

# Section headline
monitor-another-email = Vill du övervaka en ny e-postadress?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Du får detta automatiska e-postmeddelande som prenumerant på { -product-name }. <br>Ändra dina e-postinställningar när som helst <a { $unsubscribe-link-attr }>här</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Intrångsdata tillhandahållen av <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Du har olösta intrång
email-unresolved-subhead = Din e-postadress var inblandad i ett dataintrång. <br>Åtgärda det direkt med { -product-name }.
email-is-affected = Din e-postadress, { $email-address }, påverkas av minst ett dataintrång
email-more-detail = Logga in på { -product-name } nu för att se mer information om dina intrång (inklusive när de inträffade och vilken data som avslöjades), och ta reda på vad du ska göra när din e-postadress har avslöjats i ett dataintrång.
email-breach-status = Aktuell intrångsstatus
# table row 1 label
email-monitored = Totalt antal övervakade e-postadresser:
# table row 2 label
email-breach-total = Totalt antal intrång:
# table row 3 label
email-resolved = Lösta intrång:
# table row 4 label
email-unresolved = Olösta intrång:
email-resolve-cta = Åtgärda intrång

## Verification email

email-verify-heading = Skydda dina data, från och med nu
email-verify-subhead = Verifiera din e-post för att börja skydda din data efter ett intrång.
email-verify-simply-click = Klicka på länken nedan för att slutföra verifieringen av ditt konto.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Här är din sammanfattning av dataintrång
email-breach-detected = Sökresultat för ditt { $email-address }-konto har upptäckt att din e-post kan ha blivit avslöjad. Vi rekommenderar att du agerar nu för att lösa detta intrång.
email-no-breach-detected = Goda nyheter! Vi har inte hittat några dataintrång som påverkar din e-post, { $email-address }.
email-dashboard-cta = Gå till översikten

## Breach alert

email-may-have-been-exposed = Din e-post kan ha avslöjats i ett dataintrång
email-spotted-new-breach = Vi har upptäckt ett nytt dataintrång
