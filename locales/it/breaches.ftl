# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Dashboard

breach-all-meta-title = { -brand-fx-monitor } - Tutte le violazioni di dati
breach-all-meta-social-title = Tutte le violazioni rilevate da { -brand-fx-monitor }
breach-all-meta-social-description = Sfoglia l’elenco completo delle violazioni note rilevate da { -brand-fx-monitor }, quindi scopri se le tue informazioni sono state esposte.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - Violazione di dati per { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Sei stato coinvolto nella violazione di dati per { $company }?
breach-detail-meta-social-description = Utilizza { -brand-fx-monitor } per scoprire se le tue informazioni personali sono state esposte in questa violazione e capire come procedere.

breach-scan-meta-title = { -brand-fx-monitor } - Risultati violazione
breach-scan-meta-social-title = { -brand-fx-monitor } - Risultati violazione
breach-scan-meta-social-description = Accedi a { -brand-fx-monitor } per risolvere le violazioni e ottenere un monitoraggio continuo per ogni nuova violazione nota.

## Breaches header

# Data classes pie chart title
breach-chart-title = Dati violati

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Violazioni di dati per { $email-select }

# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
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

breaches-resolve-heading = Risolvi questa violazione:

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
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = In data { $breachDate } si è verificata una violazione di dati per { $companyName }. Una volta scoperta e verificata la violazione, è stata aggiunta al nostro database il giorno { $addedDate }. Questa violazione includeva: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Gestore password di { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Aggiorna le password e attiva l’autenticazione a due fattori (2FA).

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Nella maggior parte dei casi, ti consigliamo di modificare la password sul sito web dell’azienda. Tuttavia, <b>il sito web potrebbe non essere più disponibile o contenere contenuti dannosi</b>, quindi fai attenzione quando <breached-company-link>visiti il sito</breached-company-link>. Per una maggiore protezione, assicurati di utilizzare password univoche per tutti gli account, in modo che le password compromesse non possano essere utilizzate per accedere ad altri account. { $passwordManagerLink } può aiutarti a tenere traccia di tutte le tue password in modo sicuro.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Proteggi la tua email con un servizio che fornisce alias di posta elettronica come { $firefoxRelayLink }.
breach-checklist-email-body = Questo permette di inoltrare messaggi alla tua casella di posta senza rivelare il tuo indirizzo email reale.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Tieni sotto controllo il tuo credit report verificando la presenza di conti correnti, prestiti o carte di credito che non riconosci.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Puoi anche considerare la possibilità di bloccare il credito su { $equifaxLink }, { $experianLink } e { $transUnionLink } per impedire a eventuali truffatori di aprire nuovi account a tuo nome. È gratuito e non influirà sul tuo punteggio di credito.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Naviga su Internet proteggendo la tua privacy con una VPN, come { $mozillaVpnLink }.
breach-checklist-ip-body = Il tuo indirizzo IP (Internet Protocol address) permette di risalire alla tua posizione e al tuo fornitore di servizi internet. Una VPN può nascondere il tuo indirizzo IP reale consentendoti di utilizzare Internet in modo privato.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Modifica le password o i PIN che includono parti del tuo indirizzo.
breach-checklist-address-body = Gli indirizzi sono facilmente rintracciabili nei registri pubblici, e questo permette di indovinare agevolmente password e PIN.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Modifica le password o i PIN che includono la tua data di nascita.
breach-checklist-dob-body = Trovare la tua data di nascita in registri pubblici è semplice. Chiunque riesca a recuperare questa informazione può facilmente indovinare password e PIN .

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Proteggi il tuo numero di telefono con un servizio di alias come { $firefoxRelayLink } che nasconde il tuo numero di telefono reale.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Aggiorna le domande di sicurezza.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Nella maggior parte dei casi, ti consigliamo di aggiornare le domande di sicurezza sul sito web dell’azienda. Tuttavia, <b>il sito web potrebbe non essere più disponibile o contenere contenuti dannosi</b>, quindi fai attenzione quando <breached-company-link>visiti il sito</breached-company-link>. Per una maggiore protezione, aggiorna queste domande di sicurezza su tutti gli account importanti in cui le hai utilizzate e crea password univoche per tutti gli account.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Crea password uniche e sicure per ogni account in cui hai riutilizzato le password.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Un sistema di gestione password come il { $passwordManagerLink } (gratuito e integrato nel browser { -brand-firefox }) può aiutarti a tenere traccia di tutte le tue password e ad accedervi in modo sicuro da tutti i tuoi dispositivi.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Contatta { $companyName } per informarli di questa violazione e chiedi loro quali sono le misure specifiche da intraprendere.
