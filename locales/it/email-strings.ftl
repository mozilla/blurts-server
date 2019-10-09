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
# Unsubscribe link in email.
email-unsub-link = Annulla iscrizione
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Ricevi questa email perché ti sei iscritto agli avvisi di { -product-name }. Non desideri più ricevere email di questo tipo? { $unsubLink } Questo messaggio è stato inviato automaticamente. Per assistenza consulta { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Ricevi questa email perché ti sei iscritto agli avvisi di { -product-name }. Questo messaggio è stato inviato automaticamente. Per assistenza consulta { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Visualizza Pannello utente
# Button text
verify-email-cta = Verifica email
# Button text
see-all-breaches = Vedi tutte le violazioni
# Headline of verification email
email-link-expires = Questo link scadrà tra 24 ore
email-verify-blurb = Verifica l’indirizzo email per aggiungerlo a { -product-name } e ricevere avvisi in caso di violazioni.
# Email headline
email-found-breaches-hl = Elenco di violazioni dati passate del tuo account
# Email headline
email-breach-summary-for-email = Elenco di violazioni dati di { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } è stato coinvolto in 0 violazioni di dati
# Email headline
email-alert-hl = { $userEmail } è stato coinvolto in una nuova violazione di dati
# Subject line of email
email-subject-found-breaches = { -product-name } ha trovato i tuoi dati nelle seguenti violazioni
# Subject line of email
email-subject-no-breaches = { -product-name } non ha trovato violazioni note
# Subject line of email
email-subject-verify = Verifica il tuo indirizzo email per { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Ulteriori informazioni su { $fxmLink }
email-sensitive-disclaimer = A causa dei dati sensibili oggetto di questa violazione, gli indirizzi email coinvolti non sono stati resi pubblici. Hai ricevuto questo avviso perché sei il proprietario verificato di un indirizzo email interessato.
fxm-warns-you-no-breaches = { -product-name } ti avvisa quando le tue informazioni personali vengono coinvolte in una violazione. Per il momento il tuo indirizzo email non risulta compromesso, ma se dovesse essere coinvolto in una nuova violazione riceverai un avviso.
fxm-warns-you-found-breaches = { -product-name } ti permette di scoprire se le tue informazioni personali sono state coinvolte in una violazione. Inoltre ti sei iscritto per ricevere un avviso ogni volta che il tuo indirizzo viene coinvolto in una nuova violazione.
email-breach-alert-blurb = { -product-name } ti avvisa quando le tue informazioni personali vengono coinvolte in una violazione. È stata appena segnalata la violazione dati di un’altra società.
# List headline
faq-list-headline = Domande più frequenti
# Link Title
faq-v2-1 = Non riconosco una delle società o dei siti oggetto della violazione. In che modo sono coinvolto?
# Link Title
faq-v2-2 = Devo prendere dei provvedimenti anche se la violazione è avvenuta anni fa oppure su un account che non uso più?
# Link Title
faq-v2-3 = Ho appena scoperto che il mio account è stato coinvolto in una violazione. Che cosa faccio adesso?
# Link Title
faq-v2-4 = In che modo vengono trattati i siti contenenti dati sensibili in { -product-name }?
# Section headline
monitor-another-email = Vuoi monitorare un altro indirizzo email?
