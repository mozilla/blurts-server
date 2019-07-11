# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Klicka på knappen "Verifiera min e-postadress" inom 24 timmar för att bekräfta ditt Firefox Monitor-konto. Din rapport skickas sedan till dig.
verify-my-email = Verifiera min e-postadress
report-scan-another-email = Skanna en annan e-postadress i { -product-name }
automated-message = Detta är ett automatiserat e-postmeddelande; om du fått det felaktigt krävs ingen åtgärd.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Vi skickade det här meddelandet till { $userEmail } eftersom e-postadressen har valt att få varningar från { -product-name }.
unsubscribe-email-link = Om du inte längre vill ha varningar från { -product-name }, avbryt prenumerationen.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Rapport { -product-name }
report-date = Rapportdatum:
email-address = E-postadress:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Nästa steg
report-headline =
    { $breachCount ->
        [0] Än så länge är allt bra.
        [one] Ditt konto figurerar i { $breachCount } överträdelse.
       *[other] Dina konton figurerar i { $breachCount } överträdelser.
    }
report-subhead-no-breaches =
    Ditt konto visas inte i vår fullständiga rapport om överträdelser.
    Det är goda nyheter, men det finns mer du kan göra.
    Dataöverträdelser inträffar när som helst, så läs vidare för att lära dig hur du kan skydda dina lösenord.
report-subhead-found-breaches = Här är din fullständiga Firefox Monitor rapport, som innehåller alla kända dataöverträdelser som innehåller den här e-postadressen.
report-pwt-blurb = Lösenord är så värdefulla att tusentals av dem stjäls varje dag och handlas eller säljs på den svarta marknaden. Starkare lösenord skyddar dina konton och all personlig information som finns inom dem.
report-pwt-headline-1 = Använd olika lösenord för varje konto
report-pwt-summary-1 =
    Återanvända samma lösenord överallt öppnar dörren för hackare. 
    De kan använda det lösenordet för att logga in på dina andra konton.
report-pwt-headline-2 = Skapa starka, unika lösenord
report-pwt-summary-2 =
    Hackers använder listor med vanliga lösenord för att försöka gissa ditt.
    Ju längre och mer slumpmässigt ditt lösenord är desto svårare blir det att stjäla.
report-pwt-headline-3 = Behandla säkerhetsfrågor som extra lösenord
report-pwt-summary-3 =
    Webbplatser kontrollerar inte att dina svar är korrekta, bara att de matchar varje gång.
    Skapa långa, slumpmässiga svar och lagra dem någonstans säkert.
report-pwt-headline-4 = Använd en lösenordshanterare
report-pwt-summary-4 = Tjänster som 1Password, LastPass, Dashlane och Bitwarden genererar starka lösenord, lagra dem säkert och lägg till dem på webbplatser så att du inte behöver komma ihåg alla dina lösenord.
# A link to legal information about mozilla products.
legal = Juridisk information
# Share Firefox Monitor by email subject line
share-by-email-subject = Se om du har blivit utsatt för ett dataintrång.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hej,
    { -brand-name } har en gratis tjänst där du kan kontrollera om du har varit med i ett dataintrång. Så här fungerar det:
    1. Gå till { "https://monitor.firefox.com" } och sök på din e-postadress.
    2. Se om dina konton på nätet har blivit utsatta för ett dataintrång.
    3. Hämta tips från { -product-name } om vad du ska göra härnäst.
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
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Visa min översikt
# Button text
verify-email-cta = Verifiera e-postadress
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
