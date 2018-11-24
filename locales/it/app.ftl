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
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Supporto
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Informazioni sugli avvisi in Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Invia la tua opinione
terms-and-privacy = Termini di utilizzo e privacy
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
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Parte di questi contenuti sono ©1998–2018 di singoli collaboratori di mozilla.org.<br/>
    I contenuti sono disponibili secondo la <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">licenza Creative Commons</a> .
# Breach data provided by Have I Been Pwned.
hibp-attribution = Dati sulle violazioni forniti da { $hibp-link }
site-description = I tuoi account sono stati compromessi o rubati in una violazione di dati? Scoprilo su { -product-name }. Cerca nel nostro database e registrati per ricevere avvisi.
