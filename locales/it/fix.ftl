# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Violazioni di dati ad alto rischio
fix-flow-nav-leaked-passwords = Password esposte
fix-flow-nav-security-recommendations = Consigli di sicurezza
guided-resolution-flow-exit = Ritorna alla dashboard
guided-resolution-flow-next-arrow = Vai al passaggio successivo
guided-resolution-flow-next-arrow-sub-step = Vai al prossimo risultato
guided-resolution-flow-step-navigation-label = Passaggi guidati

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Continuiamo
fix-flow-celebration-next-recommendations-label = Visualizza i suggerimenti
fix-flow-celebration-next-dashboard-label = Vai alla dashboard

## High-risk flow

fix-flow-celebration-high-risk-title = Hai risolto le tue esposizioni ad alto rischio!
fix-flow-celebration-high-risk-description-in-progress = È un lavoro impegnativo, ma è importante per mantenerti al sicuro. Continua così!
fix-flow-celebration-high-risk-description-done = È un lavoro impegnativo, ma è importante per mantenerti al sicuro.
fix-flow-celebration-high-risk-description-next-passwords = Ora correggiamo le password esposte.
fix-flow-celebration-high-risk-description-next-security-questions = Ora risolviamo le tue domande di sicurezza esposte.
fix-flow-celebration-high-risk-description-next-security-recommendations = Successivamente, ti forniremo consigli di sicurezza personalizzati in base ai tuoi dati che sono stati esposti.
fix-flow-celebration-high-risk-description-next-dashboard = Hai raggiunto la fine della procedura guidata. Puoi visualizzare qualsiasi azione in sospeso e tenere traccia dei tuoi progressi nella dashboard.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Le tue password sono protette.
fix-flow-celebration-security-questions-title = Le tue domande di sicurezza sono protette.
fix-flow-celebration-leaked-passwords-description-next-security-questions = Ora esaminiamo e aggiorniamo le domande di sicurezza esposte.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Successivamente, ti forniremo consigli di sicurezza personalizzati in base ai tuoi dati che sono stati esposti.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Complimenti! Hai raggiunto la fine della procedura guidata. Puoi visualizzare qualsiasi azione in sospeso e tenere traccia dei tuoi progressi nella dashboard.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Hai completato tutti i consigli a te dedicati.
fix-flow-celebration-security-recommendations-description-next-dashboard = Complimenti! Hai raggiunto la fine della procedura guidata. Puoi visualizzare qualsiasi azione in sospeso e tenere traccia dei tuoi progressi nella dashboard.

# High Risk Data Breaches

high-risk-breach-heading = Ecco che cosa fare
high-risk-breach-subheading = Questa operazione richiede accesso alle tue informazioni sensibili, quindi dovrai procedere manualmente.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] È stato coinvolto in { $num_breaches } violazione di dati:
       *[other] È stato coinvolto in { $num_breaches } violazioni di dati:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>il { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Segna come risolta
high-risk-breach-skip = Ignora per il momento
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Tempo stimato: { $estimated_time }+ minuto
       *[other] Tempo stimato: { $estimated_time }+ minuti
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Il numero della tua carta di credito è stato esposto
high-risk-breach-credit-card-description = Chiunque lo ottenga può effettuare acquisti non autorizzati di cui potresti essere ritenuto responsabile. Agisci ora per prevenire danni finanziari.
high-risk-breach-credit-card-step-one = Se hai ancora questa carta, contatta l’autorità emittente per segnalarne il furto.
high-risk-breach-credit-card-step-two = Richiedi una nuova carta con un nuovo numero.
high-risk-breach-credit-card-step-three = Controlla i tuoi conti per rilevare addebiti non autorizzati.

# Bank Account Breaches

high-risk-breach-bank-account-title = Il tuo conto bancario è stato esposto
high-risk-breach-bank-account-description = Intervenire il prima possibile potrebbe offrirti maggiori protezioni legali per recuperare eventuali perdite.
high-risk-breach-bank-account-step-one = Avvisa immediatamente la tua banca se ti accorgi che il tuo conto corrente è stato violato.
high-risk-breach-bank-account-step-two = Cambia il tuo numero di conto.
high-risk-breach-bank-account-step-three = Controlla i tuoi conti per rilevare addebiti non autorizzati.

# Social Security Number Breaches

high-risk-breach-social-security-title = Il tuo numero di previdenza sociale è stato esposto
high-risk-breach-social-security-description = I truffatori possono richiedere prestiti o carte di credito con il tuo numero di previdenza sociale. Agisci in fretta per prevenire danni finanziari.
high-risk-breach-social-security-step-one = Proteggiti <link_to_info>impostando un avviso contro le frodi o bloccando il tuo credito.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Controlla il tuo rapporto di credito</link_to_info> per verificare la presenza di conti che non riconosci.

# Social Security Number Modal

ssn-modal-title = Informazioni sugli avvisi contro le frodi e sul blocco del credito
ssn-modal-description-fraud-part-one = <b>Un avviso contro le frodi</b> richiede alle aziende di verificare la tua identità prima di emettere nuovo credito a tuo nome. È gratuito, dura un anno e non influirà negativamente sul tuo punteggio di credito.
ssn-modal-description-fraud-part-two = Per configurarne uno, contatta una delle tre agenzie di credito. Non è necessario contattare tutte e tre.
ssn-modal-description-freeze-credit-part-one = <b>Il blocco del credito</b> impedisce a chiunque di aprire un nuovo conto a tuo nome. È gratuito e non influirà negativamente sul tuo punteggio di credito, ma dovrai sbloccarlo prima di aprire nuovi conti.
ssn-modal-description-freeze-credit-part-two = Per bloccare il credito, contatta le tre agenzie di credito: <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> e <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Ulteriori informazioni sugli avvisi contro le frodi e sul blocco del credito
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Il PIN è stato esposto
high-risk-breach-pin-description = Intervenire il prima possibile potrebbe offrirti maggiori protezioni legali per recuperare eventuali perdite.
high-risk-breach-pin-step-one = Avvisa immediatamente la tua banca che il tuo PIN è stato esposto.
high-risk-breach-pin-step-two = Cambia il tuo PIN ovunque tu abbia utilizzato lo stesso codice.
high-risk-breach-pin-step-three = Controlla i tuoi conti per rilevare addebiti non autorizzati.

# No high risk breaches found

high-risk-breach-none-title = Ottime notizie, non abbiamo rilevato alcuna violazione di dati ad alto rischio
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Rileviamo violazioni di dati in base al tuo indirizzo email e non abbiamo rilevato violazioni di dati ad alto rischio per { $email_list }.
high-risk-breach-none-sub-description-part-one = Le violazioni di dati ad alto rischio includono:
high-risk-breach-none-sub-description-ssn = Numero di previdenza sociale
high-risk-breach-none-sub-description-bank-account = Informazioni sul conto bancario
high-risk-breach-none-sub-description-cc-number = Numeri di carte di credito
high-risk-breach-none-sub-description-pin = PIN
high-risk-breach-none-continue = Continua

# Security recommendations

security-recommendation-steps-label = Consigli di sicurezza
security-recommendation-steps-title = Ecco i nostri consigli:
security-recommendation-steps-cta-label = OK

# Phone security recommendation

security-recommendation-phone-title = Proteggi il tuo numero di telefono
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Il tuo numero di telefono è stato coinvolto in { $num_breaches } violazione di dati:
       *[other] Il tuo numero di telefono è stato coinvolto in { $num_breaches } violazioni di dati:
    }
security-recommendation-phone-description = Purtroppo non è possibile tornare indietro e nascondere questa informazione. Ma ci sono dei passaggi che puoi adottare per assicurarti di rimanere al sicuro.
security-recommendation-phone-step-one = Blocca i numeri che generano spam per evitare chiamate indesiderate
security-recommendation-phone-step-two = Non fare clic su link in SMS provenienti da mittenti sconosciuti; se sembra che provenga da una fonte attendibile, chiamali direttamente per confermare

# Email security recommendation

security-recommendation-email-title = Proteggi il tuo indirizzo email
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Il tuo indirizzo email è stato coinvolto in { $num_breaches } violazione di dati:
       *[other] Il tuo indirizzo email è stato esposto in { $num_breaches } violazioni di dati:
    }
security-recommendation-email-description = Purtroppo non è possibile tornare indietro e nascondere questa informazione. Ma ci sono dei passaggi che puoi adottare per proteggerti.
security-recommendation-email-step-one = Non fare clic sui link nelle email provenienti da mittenti sconosciuti; se sembra provenire da una fonte attendibile, chiamali direttamente per confermare
security-recommendation-email-step-two = Fai attenzione alle <link_to_info>truffe di phishing</link_to_info>
security-recommendation-email-step-three = Contrassegna le email sospette come spam e blocca il mittente
security-recommendation-email-step-four = Utilizza gli <link_to_info>alias di posta elettronica di { -brand-relay }</link_to_info> per proteggere la tua email in futuro

# IP security recommendation

security-recommendation-ip-title = Utilizza una VPN per una privacy maggiore
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Il tuo indirizzo IP è stato coinvolto in { $num_breaches } violazione di dati:
       *[other] Il tuo indirizzo IP è stato coinvolto in { $num_breaches } violazioni di dati:
    }
security-recommendation-ip-description = Il tuo indirizzo IP identifica la tua posizione e il tuo fornitore di servizi internet. Gli hacker potrebbero utilizzare queste informazioni per identificare la tua posizione o tentare di connettersi ai tuoi dispositivi.
security-recommendation-ip-step-one = Utilizza una VPN (come <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) per nascondere il tuo indirizzo IP reale e utilizzare Internet in modo riservato.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = La password di “{ $breach_name }” è stata esposta
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = È stata esposta in una violazione di dati il { $breach_date }.
leaked-passwords-description = I truffatori possono accedere al tuo account e probabilmente cercheranno di accedere ad altri account per vedere se hai utilizzato la stessa password. Per proteggerti, cambiala ovunque hai utilizzato la stessa password.
leaked-passwords-steps-title = Ecco che cosa fare
leaked-passwords-steps-subtitle = Questa operazione richiede accesso alle tue informazioni sensibili, quindi dovrai procedere manualmente.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Modifica la password per <b>{ $emails_affected }</b> su <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Cambiala in qualsiasi altro servizio in cui hai utilizzato la stessa password.
leaked-passwords-mark-as-fixed = Segna come risolta
leaked-passwords-skip = Ignora per il momento
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Tempo stimato per completare: { $estimated_time } minuto per sito
       *[other] Tempo stimato per completare: { $estimated_time } minuti per sito
    }

# Leaked Security Questions

leaked-security-questions-title = Le tue domande di sicurezza sono state esposte
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Sono state esposte in una violazione di dati su “{ $breach_name }” il { $breach_date }.
leaked-security-questions-description = I truffatori possono utilizzarle per accedere ai tuoi account e a qualsiasi altro sito in cui hai utilizzato le stesse domande di sicurezza. Aggiornale ora per proteggere i tuoi account.
leaked-security-questions-steps-title = Ecco che cosa fare
leaked-security-questions-steps-subtitle = Questa operazione richiede accesso alle tue informazioni sensibili, quindi dovrai procedere manualmente.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Aggiorna le domande di sicurezza per <b>{ $email_affected }</b> su <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Aggiornale in qualsiasi altro sito in cui hai utilizzato le stesse domande di sicurezza. Assicurati di utilizzare domande di sicurezza diverse per ogni account.
