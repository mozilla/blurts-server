# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Rapporto di { -product-name }
report-date = Data rapporto:
email-address = Indirizzo email:

# A link to legal information about mozilla products.
legal = Note legali

# Unsubscribe link in email.
email-unsub-link = Annulla l’iscrizione

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Ricevi questa email perché sei iscritto agli avvisi di { -product-name }. Non desideri più ricevere email di questo tipo? { $unsubLink } Questo messaggio è stato inviato automaticamente. Per assistenza consulta le { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Ricevi questa email perché sei iscritto agli avvisi di { -product-name }. Questo messaggio è stato inviato automaticamente. Per assistenza consulta le { $faqLink }.

# Button text
verify-email-cta = Verifica email

# Button text
see-all-breaches = Vedi tutte le violazioni

# Headline of verification email
email-link-expires = Questo link scadrà tra 24 ore
email-verify-blurb = Verifica l’indirizzo email per aggiungerlo a { -product-name } e ricevere avvisi in caso di violazioni.

# Email headline
email-found-breaches-hl = Sommario delle violazioni dati che hanno coinvolto il tuo account in passato

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Elenco di violazioni dati per { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } non è stato coinvolto in alcuna violazione di dati conosciuta

# Email headline
email-alert-hl = { $userEmail } è stato coinvolto in una nuova violazione di dati

##

# Subject line of email
email-subject-found-breaches = { -product-name } ha trovato i tuoi dati nelle seguenti violazioni

# Subject line of email
email-subject-no-breaches = { -product-name } non ha trovato violazioni conosciute

# Subject line of email
email-subject-verify = Verifica il tuo indirizzo email per { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Ulteriori informazioni su { $fxmLink }

email-sensitive-disclaimer = A causa dei dati sensibili oggetto di questa violazione, gli indirizzi email coinvolti non sono stati resi pubblici. Hai ricevuto questo avviso perché sei il proprietario verificato di un indirizzo email interessato.

fxm-warns-you-no-breaches = { -product-name } ti avvisa quando le tue informazioni personali vengono coinvolte in una violazione. Per il momento il tuo indirizzo email non risulta compromesso, ma se dovesse essere coinvolto in una nuova violazione riceverai un avviso.

fxm-warns-you-found-breaches = { -product-name } ti permette di scoprire se le tue informazioni personali sono state coinvolte in una violazione. Inoltre riceverai un avviso ogni volta che il tuo indirizzo viene coinvolto in una nuova violazione.

email-breach-alert-blurb = { -product-name } ti avvisa quando le tue informazioni personali vengono coinvolte in una violazione. È stata appena segnalata la violazione dati di un’altra società.

# Section headline
monitor-another-email = Vuoi monitorare un altro indirizzo email?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Ricevi questa email da un servizio automatico in quanto abbonato a { -product-name }. <br>Puoi modificare le tue preferenze email in qualsiasi momento <a { $unsubscribe-link-attr }>qui</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Dati sulle violazioni forniti da <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Hai delle violazioni non risolte
email-unresolved-subhead = Il tuo indirizzo email è stato coinvolto in una violazione di dati. <br>Risolvila subito con { -product-name }.
email-is-affected = Il tuo indirizzo email { $email-address }, è stato coinvolto in almeno una violazione di dati
email-more-detail = Accedi ora a { -product-name } per visualizzare ulteriori dettagli sulle violazioni che ti riguardano (incluso quando si sono verificate e quali dati sono stati esposti) e per scoprire quali procedure adottare quando il tuo indirizzo email risulta coinvolto in una violazione di dati.
email-breach-status = Stato attuale della violazione
# table row 1 label
email-monitored = Totale indirizzi email monitorati:
# table row 2 label
email-breach-total = Numero totale di violazioni:
# table row 3 label
email-resolved = Violazioni risolte:
# table row 4 label
email-unresolved = Violazioni non risolte:
email-resolve-cta = Risolvi violazioni

## Verification email

email-verify-heading = Proteggi i tuoi dati, a partire da adesso
email-verify-subhead = Verifica il tuo indirizzo email per iniziare a proteggere i tuoi dati dopo una violazione.
email-verify-simply-click = Fai clic sul link sottostante per completare il processo di verifica del tuo account.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Sommario delle violazioni dati che hanno coinvolto il tuo account
email-breach-detected = I risultati della ricerca per il tuo account { $email-address } indicano che il tuo indirizzo email potrebbe essere stato esposto. Ti consigliamo di agire ora per risolvere questa violazione.
email-no-breach-detected = Buone notizie! Non abbiamo trovato alcuna violazione di dati che include il tuo indirizzo email, { $email-address }.
email-dashboard-cta = Vai al pannello utente

## Breach alert

email-may-have-been-exposed = Il tuo indirizzo email potrebbe essere stato esposto in una violazione di dati
email-spotted-new-breach = Abbiamo individuato una nuova violazione di dati
