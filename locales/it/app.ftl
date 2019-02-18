# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
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
unsub-survey-headline = Hai annullato la tua iscrizione.
unsub-survey-blurb =
    La tua iscrizione a { -product-name-nowrap } è stata annullata. Grazie per aver utilizzato questo servizio.
    Puoi dedicarci ancora un momento per rispondere a una domanda sulla tua esperienza?
unsub-survey-form-label = Perché stai annullando la tua iscrizione agli avvisi di { -product-name-nowrap }?
unsub-reason-1 = Non credo che gli avvisi contribuiscano a rendere i miei dati più sicuri
unsub-reason-2 = Ricevo troppe email da { -product-name-nowrap }
unsub-reason-3 = Non trovo utile il servizio
unsub-reason-4 = Ho già adottato misure per proteggere i miei account
unsub-reason-5 = Sto usando un altro servizio per tenere sotto controllo i miei account
unsub-reason-6 = Nessuna delle precedenti
unsub-survey-thankyou = Grazie per aver condiviso la tua opinione.
unsub-survey-error = Seleziona un’opzione.
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
fxa-signup-banner-headline = Tieni sotto controllo le minacce ai tuoi account online.
fxa-signup-banner-blurb = Registra un { -brand-fxa } per ricevere il rapporto completo e avvisi sulle nuove violazioni di dati.
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
guest-fb-compromised-single = Questa violazione di dati ha esposto le seguenti informazioni personali. Registra un { -brand-fxa } per ottenere il rapporto completo e avvisi su nuove violazioni.
guest-fb-compromised-blurb =
    { $breachCount ->
        [one] Questo indirizzo email è stato coinvolto anche in { $breachCount } altra violazione di dati. Registra un { -brand-fxa } per ricevere il rapporto completo e avvisi di nuove violazioni.
       *[other] Questo indirizzo email è stato coinvolto anche in altre { $breachCount } violazioni di dati. Registra un { -brand-fxa } per ricevere il rapporto completo e avvisi di nuove violazioni.
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
guest-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Questa email non è stata coinvolta nella violazione { $breachName }, ma è stata trovata in un’altra violazione. Registra un { -brand-fxa } per ricevere il rapporto completo e avvisi di nuove violazioni.
       *[other] Questa email non è stata coinvolta nella violazione { $breachName }, ma è stata trovata in altre violazioni. Registra un { -brand-fxa } per ricevere il rapporto completo e avvisi di nuove violazioni.
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
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
guest-found-breaches-blurb =
    { $breachCount ->
        [one] Questa violazione di dati ha esposto le seguenti informazioni personali. Registra un { -brand-fxa } per ricevere il rapporto completo e avvisi di nuove violazioni.
       *[other] Queste violazioni di dati hanno esposto le seguenti informazioni personali. Registra un { -brand-fxa } per ricevere il rapporto completo e avvisi di nuove violazioni.
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
