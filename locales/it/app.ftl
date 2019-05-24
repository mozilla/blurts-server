# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $capitalization ->
       *[lowercase] account Firefox
        [uppercase] Account Firefox
    }
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Supporto
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Informazioni sugli avvisi in Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Invia la tua opinione
terms-and-privacy = Termini di utilizzo e privacy
error-scan-page-token = Hai cercato troppi indirizzi email in un breve lasso di tempo. Per motivi di sicurezza la funzione di ricerca è stata temporaneamente sospesa. Potrai riprovare più tardi.
error-could-not-add-email = Impossibile aggiungere l’indirizzo email al database.
error-not-subscribed = Questo indirizzo email non è iscritto a { -product-name }
error-hibp-throttled = Troppe connessioni a { -brand-HIBP }.
error-hibp-connect = Errore di connessione a { -brand-HIBP }.
error-hibp-load-breaches = Non è possibile caricare informazioni relative alle violazioni di dati.
hibp-notify-email-subject = Avviso di { -product-name }: Il tuo account è stato coinvolto in una violazione di dati.
home-title = { -product-name }
home-not-found = Pagina non trovata.
oauth-invalid-session = Sessione non valida
oauth-confirmed-title = { -product-name }: Iscritto
scan-title = { -product-name } : Risultati scansione
user-add-invalid-email = Email non valida
user-add-email-verify-subject = Conferma la tua iscrizione a { -product-name }.
user-add-title = { -product-name } : Conferma email
error-headline = Errore
user-verify-token-error = È richiesto un token di verifica.
user-verify-email-report-subject = Il tuo rapporto di { -product-name }
user-verify-title = { -product-name } : Iscrizione completata
user-unsubscribe-token-error = È richiesto un token per annullare l’iscrizione.
user-unsubscribe-token-email-error = Sono richiesti un token e un emaiHash per annullare l’iscrizione.
user-unsubscribe-title = { -product-name } : Annulla iscrizione
user-unsubscribe-survey-title = { -product-name } : Sondaggio annullamento iscrizione
user-unsubscribed-title = { -product-name } : Iscrizione annullata

## Password Tips

pwt-section-headline = Password più forti = Maggiore protezione
pwt-section-subhead = Le tue informazioni private sono al sicuro solo se le tue password sono sicure.
pwt-section-blurb =
    Le tue password proteggono molto più di un account. Proteggono tutte le informazioni personali che vi hai registrato.
    E gli hacker fanno affidamento sulle cattive abitudini degli utenti, come usare la stessa password in tutti i siti o usare frasi comuni (mai usato “p@ssw0rd”?). In questo modo, se riescono a ottenere l’accesso a un account, avranno automaticamente accesso anche a molti altri. Ecco alcuni suggerimenti su come proteggere i tuoi account.
pwt-headline-1 = Utilizza una password diversa per ogni account
pwt-summary-1 =
    Riutilizzare la stessa password ovunque apre le porte ai furti di identità.
    Chiunque in possesso di quella password potrà accedere a tutti i tuoi account.
pwt-headline-2 = Crea password complesse e difficili da indovinare
pwt-summary-2 =
    Gli hacker utilizzano milioni di password comuni per cercare di indovinare la tua.
    Più lunga e casuale è la tua password, più sarà difficile indovinarla.
pwt-headline-3 = Tratta le domande di sicurezza come password aggiuntive
pwt-summary-3 =
    I siti web non controllano che le risposte siano accurate, ma solo che corrispondano ogni volta.
    Crea risposte lunghe e complesse e archiviale in un posto sicuro.
pwt-headline-4 = Fatti dare una mano a ricordare le password
pwt-summary-4 =
    I gestori di password come 1Password, LastPass, Dashlane e Bitwarden possono generare password complesse e uniche. 
    Sono anche in grado di memorizzarle in modo sicuro e inserirle direttamente nei siti web quando li visiti.
pwt-headline-5 = Aggiungi un passaggio di sicurezza con l’autenticazione a due fattori
pwt-summary-5 =
    L’autenticazione a due fattori (2FA) richiede un’informazione aggiuntiva, come un codice inviato tramite SMS, per accedere all’account.
    Anche se qualcuno conosce la tua password, non potrà accedere.
pwt-headline-6 = Iscriviti agli avvisi di { -product-name-nowrap }
pwt-summary-6 = Le violazioni di dati dei siti web sono in constante crescita. { -product-name-nowrap } ti invia un avviso non appena una nuova violazione viene aggiunta al nostro database, così puoi intervenire e proteggere il tuo account.
landing-headline = Il tuo diritto di proteggerti dagli hacker inizia qui.
landing-blurb =
    { -product-name-nowrap } ti offre gli strumenti per mantenere al sicuro le tue informazioni personali.
    Scopri quello che gli hacker già conoscono su di te e come essere sempre un passo avanti a loro.
scan-label = Verifica se sei stato coinvolto in una violazione di dati.
scan-placeholder = Inserisci il tuo indirizzo email
scan-privacy = Il tuo indirizzo email non verrà conservato.
scan-submit = Cerca il tuo indirizzo email
scan-another-email = Controlla un altro indirizzo email
scan-featuredbreach-label = Scopri se il tuo account su <span class="bold">{ $featuredBreach }</span> è stato compromesso.
sensitive-breach-email-required = La violazione contiene informazioni sensibili. È richiesta la verifica tramite email.
scan-error = Devi inserire un indirizzo email valido.
signup-banner-headline = { -product-name-nowrap } rileva minacce contro i tuoi account online.
signup-banner-blurb =
    Il rapporto dettagliato di { -product-name-nowrap } mostra se le informazioni contenute nei tuoi account online sono state compromesse o rubate.
    Ti avviseremo se i tuoi account appaiono in nuove violazioni di dati di siti web.
download-firefox-bar-blurb = { -product-name-nowrap } è offerto da <span class="nowrap">{ -brand-name }</span>.
download-firefox-bar-link = Scarica subito { -brand-name }
download-firefox-banner-blurb = Prendi il controllo del tuo browser
download-firefox-banner-button = Scarica { -brand-name }
signup-modal-headline = Iscriviti a { -product-name-nowrap }
signup-modal-blurb = Iscriviti per ricevere da { -product-name-nowrap } il rapporto completo, avvisi quando si verificano nuove violazioni di dati e suggerimenti per la sicurezza.
signup-modal-close = Chiudi
get-your-report = Ottieni il tuo rapporto
signup-modal-verify-headline = Conferma la tua iscrizione
signup-modal-verify-blurb = Abbiamo inviato un link di conferma a <span id="submitted-email" class="medium"></span> .
signup-modal-verify-expiration = Il link scade tra 24 ore.
signup-modal-verify-resend = Il messaggio non si trova nella posta in arrivo e neppure nello spam? Invia nuovamente il link.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Inviato.
signup-with-fxa = Registra un account { -brand-name }
form-signup-placeholder = Inserisci un indirizzo email
form-signup-checkbox = Ricevi le ultime notizie da { -brand-Mozilla } e { -brand-name }.
sign-up = Registrati
form-signup-error = Devi inserire un indirizzo email valido
no-breaches-headline = Fin qui tutto bene.
found-breaches-headline = Le tue informazioni sono state coinvolte in una violazione di dati.
no-breaches =
    Il tuo indirizzo email non appare nella nostra scansione di base.
    Si tratta di una una buona notizia, ma le violazioni di dati possono accadere in qualsiasi momento e ci sono altri accorgimenti che puoi adottare per proteggerti.
    Iscriviti a { -product-name-nowrap } per ricevere un rapporto completo, avvisi quando si verificano nuove violazioni e suggerimenti su come proteggere le tue password.
featured-breach-results =
    { $breachCount ->
        [0] Il tuo account è stato coinvolto nella violazione di dati di <span class="bold">{ $featuredBreach }</span> ma non appare in nessun'altra violazione.
        [one] Il tuo account è stato coinvolto nella violazione di dati di <span class="bold">{ $featuredBreach }</span> e in un’altra violazione.
       *[other] Il tuo account è stato coinvolto nella violazione di dati di <span class="bold">{ $featuredBreach }</span> e in altre { $breachCount } violazioni.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Il tuo account non è stato coinvolto nella violazione di dati di <span class="bold">{ $featuredBreach }</span>, ma è coinvolto in un’altra violazione.
       *[other] Il tuo account non è stato coinvolto nella violazione di dati di <span class="bold">{ $featuredBreach }</span>, ma è coinvolto in altre { $breachCount } violazioni.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Il tuo account è stato coinvolto in { $breachCount } violazione di dati.
       *[other] Gli account associati al tuo indirizzo email sono stati coinvolti nelle seguenti { $breachCount } violazioni di dati.
    }
show-more-breaches = Mostra dettagli
what-to-do-headline = Che cosa fare quando le tue informazioni sono coinvolte in una violazione di dati
what-to-do-subhead-1 = Cambia le tue password, anche per i vecchi account
what-to-do-blurb-1 =
    Se non riesci ad accedere, chiedi al gestore del sito come ripristinare l’accesso o eliminare l’account.
    Non riconosci uno degli account? Il sito potrebbe aver cambiato nome o qualcuno potrebbe aver creato un account al tuo posto.
what-to-do-subhead-2 = Se utilizzi una password compromessa su altri siti, cambiala
what-to-do-blurb-2 =
    Gli hacker potrebbero provare a riutilizzare una tua password compromessa per entrare in altri account.
    Imposta una password diversa per ciascun sito web, in particolare per il tuo conto in banca, account email e altri siti web in cui salvi informazioni personali.
what-to-do-subhead-3 = Adotta misure aggiuntive per proteggere gli account connessi alle tue finanze
what-to-do-blurb-3 =
    La maggior parte delle violazioni espone solo email e password, ma alcune includono informazioni finanziarie riservate.
    Se il tuo conto bancario o numero di carta di credito sono inclusi in una violazione, avvisa la banca di possibili frodi
    e verifica negli estratti conto la presenza di addebiti che non riconosci.
what-to-do-subhead-4 = Lasciati aiutare a creare password complesse e conservarle al sicuro.
what-to-do-blurb-4 = I gestori di password come 1Password, LastPass, Dashlane e Bitwarden possono generare password complesse e uniche, memorizzarle in modo sicuro e inserirle direttamente nei siti web quando li visiti.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data della violazione:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Account compromessi:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dati compromessi:
confirmed = Tutto confermato,<br />ora sei iscritto.
confirmed-blurb = A breve riceverai un rapporto completo da { -product-name-nowrap }. In futuro verranno inviati avvisi nel caso in cui il tuo indirizzo email appaia in nuove violazioni di dati.
confirmed-social-blurb = Se sei stato vittima di una violazione di dati, è possibile che anche i tuoi amici, i tuoi famigliari o i tuoi conoscenti online ne siano stati affetti. Fagli conoscere { -product-name-nowrap }.
unsub-headline = Annulla iscrizione a { -product-name-nowrap }
unsub-blurb = Questa operazione rimuoverà la tua email dall’elenco di { -product-name-nowrap } e non riceverai più avvisi quando verranno annunciate nuove violazioni di dati.
unsub-button = Annulla iscrizione
fxa-unsub-headline = Annulla l’iscrizione agli avvisi di { -product-name }.
fxa-unsub-blurb = Non riceverai più avvisi di sicurezza da { -product-name }. Il tuo { -brand-fxa } rimarrà attivo e potresti ricevere ulteriori comunicazioni relative all’account.
unsub-survey-form-label = Perché stai annullando la tua iscrizione agli avvisi di { -product-name-nowrap }?
unsub-reason-1 = Non credo che gli avvisi contribuiscano a rendere i miei dati più sicuri
unsub-reason-2 = Ricevo troppe email da { -product-name-nowrap }
unsub-reason-3 = Non trovo utile il servizio
unsub-reason-4 = Ho già adottato misure per proteggere i miei account
unsub-reason-5 = Sto usando un altro servizio per tenere sotto controllo i miei account
unsub-reason-6 = Nessuna delle precedenti
unsub-survey-thankyou = Grazie per aver condiviso la tua opinione.
unsub-survey-error = Seleziona un’opzione.
unsub-survey-headline-v2 = Hai annullato l’iscrizione.
unsub-survey-blurb-v2 = Non riceverai più avvisi di sicurezza da { -product-name }. Ti chiediamo di dedicarci ancora un minuto per rispondere a una domanda sulla tua esperienza con il servizio.
unsub-survey-button = Invia risposta
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Condividi
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Invia un tweet
download-firefox-quantum = Scarica { -brand-Quantum }
download-firefox-mobile = Scarica { -brand-name } per dispositivi mobili
# Features here refers to Firefox browser features. 
features = Caratteristiche
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Dati sulle violazioni forniti da { $hibp-link }
site-description = I tuoi account sono stati compromessi o rubati in una violazione di dati? Scoprilo su { -product-name }. Cerca nel nostro database e registrati per ricevere avvisi.
confirmation-headline = Il rapporto di { -product-name } è in arrivo.
confirmation-blurb = Le violazioni dei dati possono riguardare chiunque. Spargi la voce in modo che i tuoi amici e familiari possano controllare se i loro account online sono al sicuro.
share-email = Indirizzo email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Altro
share-twitter = La maggior parte delle persone ha un centinaio di account online. Scopri se alcuni dei tuoi sono stati esposti a una violazione dei dati.
share-facebook-headline = Scopri se hai subito una violazione dei dati
share-facebook-blurb = I tuoi account online sono stati esposti a una violazione dei dati?
og-site-description = Scopri se hai subito una violazione dei dati con { -product-name }. Iscriviti per ricevere notifiche su future violazioni e ottenere suggerimenti per mantenere i tuoi account al sicuro.
mozilla-security-blog = Blog sulla sicurezza di { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Mostra tutto
fxa-landing-blurb = Scopri che cosa gli hacker già sanno su di te e apprendi come mantenerti sempre un passo avanti a loro.
fxa-scan-label = Scopri se sei stato coinvolto in una violazione di dati.
fxa-welcome-headline = Benvenuto in { -product-name }.
fxa-welcome-blurb = Ti sei registrato per ricevere avvisi ogni volta che { $userEmail } viene coinvolto in una violazione di dati.
fxa-scan-another-email = Vuoi controllare un altro indirizzo email?
# Search Firefox Monitor
fxa-scan-submit = Cerca su { -product-name }
sign-up-to-check = Registrati e controlla
sign-in = Accedi
sign-out = Disconnetti
full-report-headline = Il tuo rapporto di { -product-name }
see-full-report = Vedi rapporto completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestisci l’{ -brand-fxa }
fxa-download-firefox-bar-blurb = Offerto da { -brand-name }. 2 volte più veloce. Consuma il 30% di memoria in meno di { -brand-Chrome }.
fxa-download-firefox-bar-link = Scarica ora
fxa-download-firefox-banner-blurb = Caricamento delle pagine più fluido e veloce con un minore consumo di memoria.
user-fb-compromised-headline = { $userEmail } è stato coinvolto nella violazione di dati { $breachName }.
guest-fb-compromised-headline = Questo indirizzo email è stato coinvolto nella violazione di dati { $breachName }.
user-zero-breaches-headline = { $userEmail } non è stato coinvolto in alcuna violazione di dati.
guest-zero-breaches-headline = Questo indirizzo email non è stato coinvolto in alcuna violazione di dati.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } è stato coinvolto in 1 violazione di dati.
       *[other] { $userEmail } è stato coinvolto in { $breachCount } violazioni di dati.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Questo indirizzo email è stato coinvolto in 1 violazione di dati.
       *[other] Questo indirizzo email è stato coinvolto in { $breachCount } violazioni di dati.
    }
user-no-breaches-blurb = Ti avviseremo se questo indirizzo email sarà coinvolto in una nuova violazione.
guest-no-breaches-blurb = Per vedere se questo indirizzo email è coinvolto in violazioni di dati sensibili, registra un { -brand-fxa }. In questo modo ti avviseremo anche se l’indirizzo sarà coinvolto in nuove violazioni di dati.
user-one-breach-blurb = Questa violazione di dati ha coinvolto le seguenti informazioni personali.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Il tuo indirizzo email è stato coinvolto anche in { $breachCount } altra violazione.
       *[other] Il tuo indirizzo email è stato coinvolto anche in { $breachCount } altre violazioni.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Questo indirizzo email è stato coinvolto anche in { $breachCount } altra violazione.
       *[other] Questo indirizzo email è stato coinvolto anche in { $breachCount } altre violazioni.
    }
user-fb-compromised-single = Questa violazione di dati ha coinvolto le seguenti informazioni personali. Se non l’hai fatto, cambia le password.
user-generic-fb-compromised-single = Questa violazione di dati ha coinvolto le seguenti informazioni personali.
guest-fb-compromised-single-v2 = La violazione ha coinvolto le seguenti informazioni personali. Crea gratuitamente un { -brand-fxa } per ottenere il rapporto completo sulle violazioni passate, avvisi di violazioni future e informazioni sugli altri servizi { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Questo indirizzo email è stato coinvolto in un'altra violazione. Crea gratuitamente un { -brand-fxa } per ottenere il rapporto completo sulle violazioni passate, avvisi di nuove violazioni e informazioni sugli altri servizi { -brand-Mozilla }.
       *[other] Questo indirizzo email è stato coinvolto in { $breachCount } altre violazioni. Crea gratuitamente un { -brand-fxa } per ottenere il rapporto completo sulle violazioni passate, avvisi di nuove violazioni e informazioni sugli altri servizi { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Non sei stato coinvolto nella violazione di { $breachName } ma abbiamo trovato quell'indirizzo email in un’altra violazione.
       *[other] Non sei stato coinvolto nella violazione di { $breachName } ma abbiamo trovato quell'indirizzo email in altre violazioni.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Questa email non era nella violazione di { $breachName } ma è stata coinvolta in un’altra violazione.
       *[other] Questa email non era nella violazione di { $breachName } ma è stata coinvolta in altre violazioni.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] Questo indirizzo email non è stato coinvolto nella violazione { $breachName }, ma è stato rilevato in un’altra violazione. Crea gratuitamente un { -brand-fxa } per ottenere il rapporto completo sulle violazioni passate, avvisi di nuove violazioni e informazioni sugli altri servizi { -brand-Mozilla }.
       *[other] Questo indirizzo email non è stato coinvolto nella violazione { $breachName }, ma è stato rilevato in diverse altre violazioni. Crea gratuitamente un { -brand-fxa } per ottenere il rapporto completo sulle violazioni passate, avvisi di nuove violazioni e informazioni sugli altri servizi { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Questa violazione di dati ha esposto le seguenti informazioni personali. Cambia password, se non l’hai già fatto.
       *[other] Queste violazioni di dati hanno esposto le seguenti informazioni personali. Cambia password, se non l’hai già fatto.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Questa violazione di dati ha esposto le seguenti informazioni personali.
       *[other] Queste violazioni di dati hanno esposto le seguenti informazioni personali.
    }
have-an-account = Hai già un account?
signup-banner-sensitive-blurb = Scopri ciò che gli hacker già sanno su di te e impara come stare un passo avanti a loro. Ricevi un avviso se il tuo account viene coinvolto in nuove violazioni di dati.
fxa-pwt-section-blurb = Le password proteggono tutte le informazioni personali degli account online. Gli hacker fanno affidamento sulle cattive abitudini degli utenti, come servirsi della stessa password ovunque o usare frasi comuni (@p@ssw0rd, per esempio). In questo modo, una volta violato un account, possono accedere a molti altri.
fxa-pwt-summary-2 = Le password brevi che contengono una singola parola sono facili da indovinare per gli hacker. Usare almeno due parole e una combinazione di lettere, numeri e caratteri speciali.
fxa-pwt-summary-4 = I gestori di password come 1Password, LastPass, Dashlane e Bitwarden conservano le tue password e le inseriscono nei siti web per te. Ti aiutano persino a creare password sicure.
fxa-pwt-summary-6 = Le violazioni dei dati sono in aumento. Se le tue informazioni personali sono coinvolte in una nuova violazioni di dati, { -product-name } ti invia un avviso, così puoi attivarti per proteggere i tuoi account.
fxa-what-to-do-blurb-1 = Se non riesci più ad accedere, contatta il sito web e chiedi come aggiornare le tue credenziali. Hai trovato nel rapporto un account che non riconosci?  I tuoi dati potrebbero essere stati venduti o ridistribuiti. Potrebbe anche trattarsi di un account che ti eri dimenticato di aver creato, oppure non lo riconosci perché la società che fornisce il servizio ha ne ha modificato il nome.
fxa-what-to-do-subhead-2 = Non usare più la password esposta e modificala ovunque tu l’abbia utilizzata.
fxa-wtd-blurb-2 = Gli hacker potrebbero provare la stessa password in combinazione con il tuo indirizzo email per entrare in altri account. Imposta una password diversa e unica per ciascun account, in particolare per il tuo conto in banca, il tuo account email e altri siti che registrano informazioni personali.
fxa-what-to-do-blurb-3 = Generalmente le violazioni espongono solo email e password, ma alcune includono anche dati finanziari sensibili. Se il tuo conto bancario o il numero della tua carta di credito sono stati violati, avvisa subito la tua banca del rischio di frodi e controlla se negli estratti conto compaiono addebiti che non riconosci.
fxa-what-to-do-subhead-4 = Usa strumenti che ti aiutino a ricordare tutte le tue password e tenerle al sicuro.
fxa-what-to-do-blurb-4 = I gestori di password come 1Password, LastPass, Dashlane e Bitwarden memorizzano le tue password in modo sicuro e le inseriscono nei siti web per te. Usa un gestore di password sia sul telefono che sul computer per evitare di dovertele ricordare tutte a memoria.
fb-landing-headline = I tuoi dati sono stati esposti nella violazione di { $breachName }?
copyright = Parti di questo contenuto sono protette da © 1999-{ $year } dei singoli collaboratori di mozilla.org.
content-available = Contenuto disponibile sotto licenza Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Iscriviti per ricevere gli avvisi
sign-up-for-fxa-alerts = Iscriviti per ricevere gli avvisi di { -product-name }.
create-free-account = Crea gratuitamente un { -brand-fxa } per ottenere il rapporto completo sulle violazioni passate, avvisi di nuove violazioni e informazioni sugli altri servizi { -brand-Mozilla }.
get-your-report-and-sign-up = Ottieni un rapporto personalizzato e iscriviti per ricevere nuovi avvisi.
# Link title
frequently-asked-questions = Domande più frequenti
about-firefox-monitor = Informazioni su { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Preferenze
# Link title.
home = Home
# Link title
breaches = Violazioni
# Link title
security-tips = Consigli per la sicurezza
fxa-account = { -brand-fxa(capitalization: "uppercase") }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Apri la navigazione di { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ULTIMA VIOLAZIONE AGGIUNTA
breach-added = Data segnalazione:
breach-discovered = Violazione scoperta:
# Link title
more-about-this-breach = Altro su questa violazione
take-control = Riprendi il controllo dei tuoi dati personali
cant-stop-hackers = Non puoi fermare gli hacker, ma puoi evitare le cattive abitudini che gli semplificano il lavoro.
read-more-tips = Leggi altri consigli sulla sicurezza
how-hackers-work = Capire come gli hacker lavorano
monitor-your-online-accounts = Iscriviti con un { -brand-fxa } per tenere sotto controllo le violazioni
stay-alert = Rimani sempre aggiornato sulle nuove violazioni
if-your-info = Ti invieremo un avviso se le tue informazioni compaiono in una nuova violazione.
search-all-emails = Cerca tutti i tuoi indirizzi email tra le violazioni e ricevi avvisi sulle nuove minacce.
monitor-several-emails = Tieni sotto controllo più indirizzi email
take-action = Prendi misure per proteggere i tuoi account
keep-your-data-safe = Scopri cosa devi fare per proteggere i tuoi dati dai criminali informatici.
website-breach = Violazione sito web
sensitive-breach = Violazione di dati sensibili
data-aggregator-breach = Violazione aggregatore dati
unverified-breach = Violazione non verificata
spam-list-breach = Violazione lista di spam
website-breach-plural = Violazioni di siti web
sensitive-breach-plural = Violazioni di dati sensibili
data-aggregator-breach-plural = Violazioni di aggregatori dati
unverified-breach-plural = Violazioni non verificate
spam-list-breach-plural = Violazioni di liste di spam
what-data = Quali dati sono stati compromessi:
sensitive-sites = In che modo vengono gestiti i dati sensibili in { -product-name }?
sensitive-sites-copy = { -product-name } rivela gli account associati con questo tipo di violazioni solo dopo la verifica dell’indirizzo email. Questo significa che sei l’unica persona in grado di vedere se i tuoi dati sono presenti nella violazione (a meno che qualcun altro abbia accesso alla tua email).
delayed-reporting-headline = Perché ci è voluto così tanto tempo per segnalare questa violazione?
delayed-reporting-copy = A volte possono volerci mesi o anni prima che le credenziali esposte in una violazione di dati compaiano nel “dark web”. Le violazioni sono aggiunte al nostro database appena vengono scoperte e verificate.
about-fxm-headline = Informazioni su { -product-name }
about-fxm-blurb = { -product-name } ti avvisa se i tuoi account online sono coinvolti in una violazione di dati. Scopri se sei stato coinvolto in una violazione, ricevi avvisi sulle nuove violazioni e inizia a proteggere i tuoi account online. { -product-name } è realizzato da { -brand-Mozilla }.
fxm-warns-you = { -product-name } ti avvisa se il tuo indirizzo email è stato esposto in una violazione di dati online. Controlla se i tuoi dati sono esposti, impara come proteggere meglio i tuoi account online e ricevi un avviso se la tua email compare in una nuova violazione.
# How Firefox Monitor works
how-fxm-works = Come funziona { -product-name }
how-fxm-1-headline = Effettua una ricerca di base
how-fxm-1-blurb = Cerca il tuo indirizzo email in violazioni di dati di pubblico dominio a partire dal 2007. Questa ricerca di base identificherà la maggior parte delle violazioni di dati, ma non quelle che contengono informazioni personali sensibili.
how-fxm-2-headline = Iscriviti per monitorare le violazioni
how-fxm-2-blurb = Crea un { -brand-fxa } per tenere sotto controllo la tua email in caso di nuove violazioni. Una volta verificato il tuo indirizzo, riceverai anche un rapporto completo sulle violazioni passate, incluse quelle che coinvolgono dati sensibili.
how-fxm-3-headline = Ricevi notifiche nel browser
how-fxm-3-blurb = Se utilizzi { -brand-name }, riceverai una notifica ogni volta che visiti un sito che è stato violato. Scopri immediatamente se sei stato coinvolto e cosa fare per proteggerti.
wtd-after-website = Che cosa fare quando si verifica la violazione di un sito web
wtd-after-data-agg = Che cosa fare quando si verifica la violazione di un aggregatore di dati
what-is-data-agg = Che cos’è un aggregatore di dati?
what-is-data-agg-blurb = Gli aggregatori di dati, o ”data broker”, raccolgono informazioni di pubblico dominio e acquistano dati da altre società, per poi venderli alle aziende con finalità di marketing. Il rischio di truffa per le vittime di queste violazioni è limitato, ma gli hacker possono comunque utilizzare queste informazioni per impersonarle o creare un loro profilo.
protect-your-privacy = Proteggi la tua privacy online
no-pw-to-change = A differenza di una violazione di un sito web, non c’è alcuna password da cambiare.
avoid-personal-info = Non utilizzare informazioni personali nelle password
avoid-personal-info-blurb = È facile trovare online informazioni su compleanni, indirizzi e nomi dei componenti della famiglia. Non includere questi dati nelle tue password.

## What to do after data breach tips

change-pw = Cambia la tua password
even-for-old = È importante aggiornare la password anche per account vecchi.
make-new-pw-unique = Rendi la nuova password diversa e unica
strength-of-your-pw = La complessità delle tue password influisce direttamente sulla tua sicurezza online.
create-strong-passwords = Come creare password complesse
stop-reusing-pw = Non riutilizzare le stesse password
create-unique-pw = Crea password uniche e salvale in un posto sicuro, come un gestore di password.
five-myths = 5 miti sui gestori di password
create-a-fxa = Crea un { -brand-fxa } per ottenere un rapporto completo delle violazioni e ricevere avvisi.
feat-security-tips = Suggerimenti sulla sicurezza per proteggere i tuoi account
feat-sensitive = Ricerca avanzata nelle violazioni di dati sensibili
feat-enroll-multiple = Registra più indirizzi email per il monitoraggio delle violazioni
sign-up-for-fxa = Registra un { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] È stato coinvolto in { $breachCount } violazione conosciuta.
       *[other] È stato coinvolto in { $breachCount } violazioni conosciute.
    }
see-if-breached = Verifica se sei stato coinvolto in una violazione di dati online
check-for-breaches = Cerca nelle violazioni
find-out-what-hackers-know = Scopri quello che gli hacker già sanno di te. Impara come rimanere sempre un passo avanti.
search-for-your-email = Cerca il tuo indirizzo email nelle violazioni di dati di pubblico dominio a partire dal 2007.
back-to-top = Torna in alto
comm-opt-0 = Inviami un’email se uno degli indirizzi indicati di seguito appare in una violazione di dati.
comm-opt-1 = Invia tutti gli avvisi a { $primaryEmail }.
stop-monitoring-this = Interrompi il monitoraggio di questa email.
resend-verification = Invia nuovamente l’email di conferma
add-new-email = Aggiungi un altro indirizzo email
send-verification = Invia link di verifica
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Impostazioni notifiche
breach-summary = Riepilogo delle violazioni
show-breaches-for-this-email = Visualizza tutte le violazioni che coinvolgono questa email.
link-change-primary = Cambia l’indirizzo email principale
remove-fxm = Rimuovi { -product-name }
remove-fxm-blurb =
    Disattiva gli avvisi di { -product-name }. Il tuo { -brand-fxa } rimarrà attivo e potresti ricevere
    ulteriori comunicazioni relative all’account.
manage-email-addresses = Gestisci indirizzi email
latest-breach-link = Verifica se sei stato coinvolto in questa violazione
welcome-back = Bentornata/o, { $userName }.
welcome-user = Benvenuta/o, { $userName }.
breach-alert-subject = { -product-name } ha trovato la tua email in una nuova violazione di dati.
your-info-was-discovered-headline = I tuoi dati sono stati rilevati in una nuova violazione di dati.
your-info-was-discovered-blurb = Ti sei registrato per ricevere gli avvisi di { -product-name } quando la tua email appare in una violazione di dati. Ecco che cosa sappiamo di questa violazione.
what-to-do-after-breach = Che cosa fare dopo una violazione di dati
ba-next-step-1 = Sostituisci la tua password con una password complessa e unica.
ba-next-step-blurb-1 = Una password complessa utilizza una combinazione di lettere maiuscole e minuscole, caratteri speciali e numeri. Non contiene informazioni personali come il tuo indirizzo, compleanno o nomi dei componenti della tua famiglia.
ba-next-step-2 = Smetti completamente di usare questa password compromessa.
ba-next-step-blurb-2 = I criminali informatici potrebbero trovare la tua password sul “dark web” e usarla per accedere ad altri account. Il modo migliore per proteggere i tuoi account è quello di utilizzare password uniche per ciascuno di essi.
ba-next-step-3 = Scopri come creare password migliori e conservarle al sicuro.
ba-next-step-blurb-3 = Utilizza un gestore di password per creare password complesse e uniche. I gestori di password memorizzano in modo sicuro tutte le tue credenziali e ti permettono di utilizzarle su tutti i tuoi dispositivi.
faq1 = Non riconosco questa azienda o sito web. Perché sono in questa violazione?
faq2 = Perché ci è voluto così tanto tempo per informarmi di questa violazione?
faq3 = Come faccio a essere sicuro che si tratti di una email legittima da { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NUOVA VIOLAZIONE RILEVATA
       *[other] { $breachCount } NUOVE VIOLAZIONI RILEVATE
    }
sign-up-headline-1 = Ricevi avvisi per le violazioni future con un { -brand-fxa }.
account-not-required = Non è necessario utilizzare il browser { -brand-name } per avere un { -brand-fxa }. Potresti ricevere informazioni relative ai servizi offerti da { -brand-Mozilla }.
get-alerted = Ricevi avvisi per nuove violazioni.
was-your-info-exposed = Le tue informazioni sono state esposte nella violazione di dati di { $breachName }?
find-out-if = Scopri se i tuoi dati sono stati esposti in questa violazione.
fb-not-comp = Questa email non è stata coinvolta nella violazione di { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Tuttavia, è stata coinvolta in un’altra violazione.
       *[other] Tuttavia, è stata coinvolta in { $breachCount } altre violazioni.
    }
fb-comp-only = Questa email è stata coinvolta nella violazione di { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Questa email è stata coinvolta in una violazione di dati conosciuta, inclusa { $breachName }.
       *[other] Questa email è stata coinvolta in { $breachCount } violazioni di dati conosciute, inclusa { $breachName }.
    }
no-other-breaches-found = Nessun’altra violazione trovata con la ricerca di base.
no-results-blurb = Siamo spiacenti, questa violazione non si trova nel nostro database.
all-breaches-headline = Tutte le violazioni in { -product-name }
search-breaches = Cerca nelle violazioni
# "Appears in-page as: Showing: All Breaches"
currently-showing = Visualizzati:
all-breaches = Tutte le violazioni

## Updated error messages

error-bot-headline = Ricerca temporaneamente sospesa
error-bot-blurb = Crediamo che tu possa essere un bot perché hai cercato diversi indirizzi email in un breve periodo di tempo. Per ora, non potrai effettuare nuove ricerche. Puoi riprovare più tardi.
error-csrf-headline = La sessione è scaduta
error-csrf-blurb = Seleziona il pulsante Indietro del browser, ricarica la pagina e riprova.
error-invalid-unsub = Come annullare l’iscrizione agli avvisi di { -product-name }
error-invalid-unsub-blurb = Dovrai annullare l'iscrizione utilizzando una delle email inviate da { -product-name }. Controlla la tua casella di posta per i messaggi da { -brand-team-email }. Seleziona il link per annullare l’iscrizione nella parte finale dell'email.
login-link-pre = Hai un account?
login-link = Accedi
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Indirizzo email monitorato
       *[other] Indirizzi email monitorati
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Violazione di dati che ha esposto le tue informazioni
       *[other] Violazioni di dati che hanno esposto le tue informazioni
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Password esposta da tutte le violazioni
       *[other] Password esposte da tutte le violazioni
    }
# Button
see-additional-breaches = Vedi ulteriori violazioni
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Vedi tutte le violazioni
scan-results-known-breaches =
    { $breachCount ->
        [one] Questa email è stata coinvolta in una violazione di dati conosciuta.
       *[other] Questa email è stata coinvolta in { $breachCount } violazioni di dati conosciute.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Risultati per: { $userEmail }
other-monitored-emails = Altri indirizzi email monitorati
email-verification-required = Richiesta verifica email
fxa-primary-email = Email dell’{ -brand-fxa } - Principale
what-is-a-website-breach = Che cos’è una violazione di dati?
website-breach-blurb = La violazione di dati di un sito web si verifica quando criminali informatici rubano, copiano o espongono informazioni personali dagli account online. Di solito è il risultato del lavoro di hacker che riescono a individuare un punto debole nella sicurezza del sito web. Una violazione può verificarsi anche quando le informazioni sull’account vengono lasciate trapelare per errore.
security-tips-headline = Suggerimenti sulla sicurezza per proteggersi dagli hacker
steps-to-protect = Passi da intraprendere per proteggere la tua identità online
take-further-steps = Ulteriori misure per proteggere la tua identità
alert-about-new-breaches = Avvisami in caso di nuove violazioni
see-if-youve-been-part = Verifica se sei stato coinvolto in una violazione di dati online
get-ongoing-breach-monitoring = Tieni traccia delle violazioni in corso per più indirizzi email.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Scopri
new-unsub-error = Dovrai annullare l'iscrizione utilizzando una delle email inviate da { -product-name }.
other-known-breaches-found =
    { $breachCount ->
        [one] Tuttavia, è stato coinvolta in un’altra violazione conosciuta.
       *[other] Tuttavia, è stato coinvolta in { $breachCount } altre violazioni conosciute.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informazioni aggiuntive, tra cui:
# Title
email-addresses-title = Indirizzi email
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = { $breachTitle } è stato oggetto di una violazione di dati il { $breachDate }. Una volta che la violazione è stata scoperta e verificata, è stata aggiunta al nostro database il { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Preferenze di { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Accesso effettuato come:
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtra per categoria:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Invia avvisi relativi alle violazioni all’indirizzo email coinvolto
