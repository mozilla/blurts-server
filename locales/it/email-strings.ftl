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
# Email headline
email-breach-summary-for-email = Elenco di violazioni dati per { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } non è stato coinvolto in alcuna violazione di dati conosciuta
# Email headline
email-alert-hl = { $userEmail } è stato coinvolto in una nuova violazione di dati
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
# List headline
faq-list-headline = domande più frequenti
# Link Title
faq-v2-1 = Non riconosco una delle società o dei siti oggetto della violazione. In che modo sono coinvolto?
# Link Title
faq-v2-2 = Devo prendere dei provvedimenti anche se la violazione è avvenuta anni fa oppure su un account che non uso più?
# Link Title
faq-v2-3 = Ho appena scoperto che il mio account è stato coinvolto in una violazione. Che cosa faccio adesso?
# Link Title
faq-v2-4 = In che modo vengono trattati i siti contenenti dati sensibili in { -product-name }?
# This string contains nested markup that becomes a link to Firefox Monitor
# later in the code. Please do not modify or remove "<a>" and "</a>".
pre-fxa-message = <a>Crea un { -brand-fxa }</a> gratuito, puoi aggiungere fino a 15 indirizzi email.
# Section headline
monitor-another-email = Vuoi monitorare un altro indirizzo email?
# Subject line of email
pre-fxa-subject = Un aggiornamento da { -product-name }
pre-fxa-headline = Che cosa sta cambiando in { -product-name }
pre-fxa-blurb = Ecco che cosa è cambiato da quando hai registrato un account su { -product-name }, il servizio che tiene sotto controllo le violazioni di dati conosciute che coinvolgono i tuoi dati personali: presto sarà collegato all’account Firefox.
pre-fxa-tout-1 = Rimani aggiornato sulle nuove violazioni
pre-fxa-p-1 = <a>Crea un account</a> per tenere sotto controllo le violazioni di dati su fino a 15 indirizzi email contemporaneamente. Raccomandiamo di aggiungere tutti gli indirizzi email usati per creare account online.
pre-fxa-tout-2 = Visualizza tutto su un pannello
pre-fxa-p-2 = Tieni sotto controllo tutte le violazioni dati da un’unica postazione per vedere quali password hanno bisogno di essere modificate. Il pannello di sorveglianza delle violazioni è disponibile soltanto con un account.
pre-fxa-tout-3 = Continua a ricevere avvisi email
pre-fxa-p-3 = Riceverai altri avvisi da { -product-name } per informarti ogni volta che i tuoi dati sensibili verranno coinvolti in una nuova violazione.
# Button at the bottom of pre-fxa email.
create-account = Crea account
# More security products
more-products-headline = Proteggiti con i nostri altri prodotti
more-products-vpn = Protezione completa del dispositivo, per ogni dispositivo.
more-products-cta-vpn = Ottieni { -product-name-vpn }
more-products-relay = Nascondi il tuo indirizzo email reale per mantenere la tua identità al sicuro.
more-products-cta-relay = Ottieni { -product-name-relay }

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Ricevi questa email da un servizio automatico in quanto abbonato a { -product-name }. <br>Puoi modificare le tue preferenze email in qualsiasi momento <a { $unsubscribe-link-attr }>qui</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Dati sulle violazioni forniti da <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

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
