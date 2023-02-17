# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Violazioni di dati per { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $totale ->
        [one] { $count } di { $total } email monitorata
       *[other] { $count } di { $total } email monitorate
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Gestisci email

## Breaches resolved filter

filter-label-unresolved = Violazioni non risolte
filter-label-resolved = Violazioni risolte

## Breaches table

column-company = AZIENDA
column-breached-data = DATI VIOLATI
column-detected = RILEVATA
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Risolta
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Attiva
breaches-none-headline = Nessuna violazione rilevata
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Buone notizie! Non sono state segnalate violazioni conosciute per { $email }. Continueremo a controllare questa email e ti faremo sapere se si verificano nuove violazioni.
breaches-none-cta-blurb = Controllare un’altra email?
breaches-none-cta-button = Aggiungi un indirizzo email
breaches-all-resolved-headline = Tutte le violazioni sono state risolte
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Ben fatto! Hai risolto tutte le violazioni per { $email }. Continueremo a controllare questa email e ti faremo sapere se si verificano nuove violazioni.
breaches-all-resolved-cta-blurb = Controllare un’altra email?
breaches-all-resolved-cta-button = Aggiungi un indirizzo email
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = In data { $breachDate } si è verificata una violazione di dati per { $companyName }. Una volta scoperta e verificata la violazione, è stata aggiunta al nostro database il giorno { $addedDate }. Questa violazione includeva: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Visita <a>{ $breachedCompanyUrl }</a> per cambiare la tua password e attivare l’autenticazione a due fattori (2FA).
breach-checklist-pw-body = Assicurati che la tua password sia unica e difficile da indovinare. Se questa password è utilizzata in altri account, assicurati di cambiarla anche lì. <a>Il gestore password di { -brand-firefox }</a> può aiutarti a tenere traccia di tutte le tue password in modo sicuro.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Proteggi la tua email con un servizio che fornisce alias di posta elettronica come <a>{ -brand-relay }</a>.
breach-checklist-email-body = Questo permette di inoltrare messaggi alla tua casella di posta senza rivelare il tuo indirizzo email reale.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Tieni sotto controllo il tuo credit report verificando la presenza di conti correnti, prestiti o carte di credito che non riconosci.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Puoi anche considerare la possibilità di bloccare il credito su <a>Equifax</a>, <a>Experian</a> e <a>TransUnion</a> per impedire a eventuali truffatori di aprire nuovi account a tuo nome. È gratuito e non influirà sul tuo punteggio di credito.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Segnala questa violazione all’emittente della tua carta di credito e richiedi una nuova carta con un nuovo numero.
breach-checklist-cc-body = È consigliato tenere sotto controllo gli estratti conto della tua carta di credito per rilevare eventuali addebiti non riconosciuti.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Avvisa immediatamente la tua banca se ti accorgi che il tuo conto corrente è stato violato.
breach-checklist-bank-body = Una maggiore tempestività nelle comunicazioni con la banca potrebbe tradursi in una maggiore tutela legale nel recupero di eventuali perdite. Ti consigliamo inoltre di controllare i tuoi conti correnti per rilevare eventuali addebiti non riconosciuti.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Avvisa l’emittente della carta e modifica il PIN immediatamente.
breach-checklist-pin-body = Assicurati che il nuovo PIN, o qualsiasi altro PIN, non contenga numeri facilmente indovinabili come la data di nascita o il proprio indirizzo.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Naviga su Internet proteggendo la tua privacy con una VPN, come <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Il tuo indirizzo IP (Internet Protocol address) permette di risalire alla tua posizione e al tuo fornitore di servizi internet. Una VPN può nascondere il tuo indirizzo IP reale consentendoti di utilizzare Internet in modo privato.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Modifica le password o i PIN che includono parti del tuo indirizzo.
breach-checklist-address-body = Gli indirizzi sono facilmente rintracciabili nei registri pubblici, e questo permette di indovinare agevolmente password e PIN.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Modifica le password o i PIN che includono la tua data di nascita.
breach-checklist-dob-body = Trovare la tua data di nascita in registri pubblici è semplice. Chiunque riesca a recuperare questa informazione può facilmente indovinare password e PIN .

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Proteggi il tuo numero di telefono con un servizio di alias come <a>{ -brand-relay }</a> che nasconde il tuo numero di telefono reale.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Aggiorna le tue domande di sicurezza su <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Scegli risposte lunghe e casuali e conservale in un posto sicuro. Ripeti questa operazione ovunque tu abbia utilizzato le stesse domande di sicurezza.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crea password uniche e sicure per ogni account in cui hai riutilizzato le password.
breach-checklist-hp-body = Un sistema di gestione password come il <a>gestore di password di { -brand-firefox }</a> (gratuito e integrato nel browser { -brand-firefox }) può aiutarti a tenere traccia di tutte le tue password e ad accedervi in modo sicuro da tutti i tuoi dispositivi.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Contatta { $companyName } per informarli di questa violazione e chiedi loro quali sono le misure specifiche da intraprendere.
