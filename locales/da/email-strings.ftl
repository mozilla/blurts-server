# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Klik på knappen "Bekræft min mailadresse" inden for 24 timer for at bekræfte din Firefox Monitor-konto. Din rapport bliver derefter sendt til dig.
verify-my-email = Bekræft min mailadresse
report-scan-another-email = Skan en anden mailadresse i { -product-name }
automated-message = Dette er en automatisk udsendt mail. Hvis du har modtaget den ved en fejl, så behøver du ikke at gøre noget.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Vi har sendt denne meddelelse til { $userEmail }, fordi mailadressen er blevet meldt til at modtage advarsler fra { -product-name }.
unsubscribe-email-link = Afslut abonnementet, hvis du ikke længere ønsker at modtage afvarsler fra { -product-name }.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name }-rapport
report-date = Dato for rapport:
email-address = Mailadresse:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Næste skridt
report-headline =
    { $breachCount ->
        [one] Din konto optræder i { $breachCount } datalæk.
       *[other] Dine konti optræder i { $breachCount } datalæk.
    }
report-subhead-no-breaches =
    Din konto optræder ikke i nogen af vores rapporter over læk af data.
    Det er godt nyt, men der er mere, du kan gøre. 
    Datalæk kan ske når som helst, så læs videre for at lære, hvad du kan gøre for at beskytte dine adgangskoder.
report-subhead-found-breaches = Her er din komplette Firefox Monitor-rapport. Den indeholder alle kendte datalæk, der indeholder denne mailadresse.
report-pwt-blurb = Adgangskoder er så værdifulde, at tusindvis af adgangskoder stjæles hver dag og sælges eller byttes på det sorte marked. Stærkere adgangskoder beskytter dine konti og al personlig information, der findes i dem.
report-pwt-headline-1 = Brug en ny adgangskode for hver konto
report-pwt-summary-1 =
    At anvende samme adgangskode overalt er at åbne døren for hackere. 
    De kan nemlig anvende adgangskoden til at logge ind på alle dine konti.
report-pwt-headline-2 = Opret stærke, unikke adgangskoder
report-pwt-summary-2 =
    Hackers gør brug af lister med almindelige adgangskoder til at gætte din adgangskode.
    Jo længere og jo mere tilfældig din adgangskode er, jo sværere er den at stjæle.
report-pwt-headline-3 = Behandl sikkerheds-spørgsmål som ekstra adgangskoder
report-pwt-summary-3 =
    Websteder kontrollerer ikke, om dine svar er korrekte - kun om de stemmer hver gang.
    Sørg for at have lange, tilfældige svar, og sørg for at gemme svarene et sikkert sted.
report-pwt-headline-4 = Brug et program til håndtering af adgangskoder
report-pwt-summary-4 =
    Tjenester som 1Password, LastPass, Dashlane og Bitwarden opretter stærke adgangskoder, gemmer dem sikkert,
    og udfylder dem på websider, så du ikke behøver at huske hver eneste adgangskode.
# A link to legal information about mozilla products.
legal = Juridisk
# Share Firefox Monitor by email subject line
share-by-email-subject = Se, om du er omfattet af en datalæk.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hej
    { -brand-name } har en gratis tjeneste, hvor du kan kontrollere, om du er omfattet af en datalæk. Sådan virker det:
    1. Gå til { "https://monitor.firefox.com" }, og søg efter din mailadresse.
    2. Se om dine online-konti er blevet ramt af en datalæk.
    3. Få tips fra { -product-name } om, hvad du nu skal gøre.
# Unsubscribe link in email.
email-unsub-link = Afslut abonnementet
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Du modtager denne mail, fordi du har tilmeldt dig alarmer fra { -product-name }. { $unsubLink }, hvis du ikke længere ønsker at modtage disse mails. Dette er en automatisk udsendt mail. Hvis du ønsker support, så besøg siden { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Du modtager denne mail, fordi du har tilmeldt dig alarmer fra { -product-name }. Dette er en automatisk udsendt mail. Hvis du ønsker support, så besøg siden { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Vis min oversigt
# Button text
verify-email-cta = Bekræft mailadresse
# Button text
see-all-breaches = Se alle datalæk
# Headline of verification email
email-link-expires = Dette link udløber om 24 timer
email-verify-blurb = Bekræft din mailadresse for at føje den til { -product-name } og tilmelde dig advarsler om datalæk.
# Email headline
email-found-breaches-hl = Her er din oversigt over tidligere datalæk
# Email headline
email-breach-summary-for-email = Opsummering af datalæk for { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } optrådte i 0 kendte datalæk
# Email headline
email-alert-hl = { $userEmail } optrådte i en ny datalæk
# Subject line of email
email-subject-found-breaches = { -product-name } fandt dine informationer i disse datalæk
# Subject line of email
email-subject-no-breaches = { -product-name } fandt ingen kendte datalæk
# Subject line of email
email-subject-verify = Bekræft din mailadresse for { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Læs mere om { $fxmLink }
email-sensitive-disclaimer =
    På grund af denne datalæks følsomme karakter er de involverede mailadresser ikke offentligt tilgængelige.
    Du modtager denne advarsel, fordi du er den bekræftede ejer af denne mailadresse.
fxm-warns-you-no-breaches =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Indtil videre er det ikke sket. Vi sender dig en advarsel, hvis din mailadresse optræder i en ny datalæk.
fxm-warns-you-found-breaches =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Du har også tilmeldt dig advarsler, hvis din mailadresse optræder i en ny datalæk.
email-breach-alert-blurb =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Vi har lige modtaget detaljer om et andet firmas datalæk.
# List headline
faq-list-headline = Ofte stillede spørgsmål
# Link Title
faq-v2-1 = Jeg genkender ikke nogle af disse firma eller websteder. Hvorfor er jeg i denne datalæk?
# Link Title
faq-v2-2 = Behøver jeg at foretage mig noget, hvis en datalæk skete for år tilbage eller hvis det er en gammel konto?
# Link Title
faq-v2-3 = Jeg har lige fundet ud af, at jeg er omfattet af en datalæk. Hvad gør jeg nu?
# Link Title
faq-v2-4 = Hvordan behandler { -product-name } websteder, der har følsomme data om sine brugere?
