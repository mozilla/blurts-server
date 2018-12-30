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
        [one] Din konto optræder i { $breachCount } læk.
       *[other] Dine konti optræder i { $breachCount } lækker.
    }
report-subhead-no-breaches =
    Din konto optræder ikke i nogen af vores rapporter over læk af data.
    Det er godt nyt, men der er mere, du kan gøre. 
    Datalæk kan ske når som helst, så læs videre for at lære, hvad du kan gøre for at beskytte dine adgangskoder.
report-subhead-found-breaches = Her er din komplette Firefox Monitor-rapport. Den indeholder alle kendte datalæk, der indeholder denne mailadresse.
breach-alert-headline = Din konto er blevet kompromitteret i en datalæk.
# A link to legal information about mozilla products.
legal = Juridisk
