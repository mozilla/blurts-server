# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Seleziona il pulsante “Verifica il mio indirizzo email” entro 24 ore per confermare il tuo account. Una volta confermato l’account, il tuo rapporto arriverà a breve.
verify-my-email = Verifica il mio indirizzo email
report-scan-another-email = Controlla un altro indirizzo email con { -product-name }
automated-message = Questa email è stata inviata da un servizio automatico. Se hai ricevuto questa email per errore, puoi semplicemente ignorarla.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Abbiamo inviato questo messaggio a { $userEmail } perché è stato scelto di ricevere avvisi da { -product-name } su questo indirizzo email.
unsubscribe-email-link = Se non desideri più ricevere avvisi da { -product-name }, annulla l’iscrizione.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Rapporto di { -product-name }
report-date = Data rapporto:
email-address = Indirizzo email:
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Ecco il tuo rapporto completo da { -product-name }. Il documento include tutte le violazioni di dati conosciute che coinvolgono questo indirizzo email.
report-no-breaches =
    Il tuo indirizzo email non è presente nel nostro archivio di violazioni di dati.
    Però questi incidenti possono verificarsi in qualsiasi momento. Adotta questi accorgimenti per mantenere i tuoi dati personali al sicuro quando sei online.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Che cosa fare dopo
report-headline =
    { $breachCount ->
        [0] Fin qui tutto bene.
        [one] Il tuo account è stato coinvolto in una violazione di dati.
       *[other] Il tuo account è stato coinvolto in altre { $breachCount } violazioni di dati.
    }
report-subhead-no-breaches =
    Il tuo account non è presente nel nostro archivio completo di violazioni di dati.
    Si tratta di una una buona notizia, ma c'è molto altro che puoi fare.
    Le violazioni di dati possono verificarsi in qualsiasi momento, quindi continua a leggere per scoprire come proteggere le tue password.
report-subhead-found-breaches = Ecco il tuo rapporto completo da Firefox Monitor. Il documento include tutte le violazioni di dati conosciute che coinvolgono questo indirizzo email.
breach-alert-headline = Il tuo account è stato coinvolto in una violazione di dati.
breach-alert-subhead = Una violazione di dati recentemente segnalata contiene la tua email e i seguenti dati
report-pwt-blurb =
    Le password sono così preziose che ne vengono rubate a migliaia ogni giorno, per poi essere scambiate o vendute sul mercato nero.
    Password più complesse possono proteggere i tuoi account e tutte le informazioni personali memorizzate al loro interno.
report-pwt-headline-1 = Utilizza una password diversa per ogni account
report-pwt-summary-1 =
    Riutilizzare la stessa password ovunque apre le porte agli hacker.
    Possono utilizzare quella password per accedere a tutti i tuoi account.
report-pwt-headline-2 = Crea password complesse e uniche
report-pwt-summary-2 =
    Gli hacker utilizzano elenchi di password comuni per cercare di indovinare la tua.
    Più lunga e casuale è la tua password, più sarà difficile rubarla.
report-pwt-headline-3 = Tratta le domande di sicurezza come password aggiuntive
report-pwt-summary-3 =
    I siti web non controllano che le risposte siano accurate, ma solo che corrispondano ogni volta.
    Crea risposte lunghe e casuali e memorizzale in un posto sicuro.
report-pwt-headline-4 = Utilizza un gestore di password
report-pwt-summary-4 = Servizi come 1Password, LastPass, Dashlane e Bitwarden possono generare password complesse e uniche, memorizzarle in modo sicuro e inserirle direttamente nei siti web quando li visiti, senza più bisogno di ricordarle ogni volta.
# A link to legal information about mozilla products.
legal = Note legali
# Share Firefox Monitor by email subject line
share-by-email-subject = Vedi se hai subito una violazione dei dati.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Ciao,
    { -brand-name } ha un servizio gratuito con il quale puoi verificare se hai subito una violazione dei dati. Ecco la procedura da seguire:
    1. Vai su { "https://monitor.firefox.com" } e inserisci il tuo indirizzo email.
    2. Verifica se i tuoi account online sono stati esposti a una violazione dei dati.
    3. Ottieni suggerimenti da { -product-name } su cosa fare dopo.
