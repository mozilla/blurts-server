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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Her er din komplette { -product-name }-rapport. Den indeholder alle kendte datalæk, der indeholder denne mailadresse.
report-no-breaches =
    Din mailadresse optræder ikke i vores database over kendte læk af data. 
    Men datalæk kan ske når som helst. Tag disse forholdsregler for at sikre, at dine personlige data er sikre på nettet.
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
breach-alert-headline = Din konto er blevet kompromitteret i en datalæk.
breach-alert-subhead = En nylig rapporteret datalæk indeholder din mailadresse og følgende data
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
