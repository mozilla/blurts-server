# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $capitalization ->
       *[lowercase] account Firefox
        [uppercase] Account Firefox
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Hai cercato troppi indirizzi email in un breve lasso di tempo. Per motivi di sicurezza la funzione di ricerca è stata temporaneamente sospesa. Potrai riprovare più tardi.
error-could-not-add-email = Impossibile aggiungere l’indirizzo email al database.
error-not-subscribed = Questo indirizzo email non è iscritto a { -product-name }
error-hibp-throttled = Troppe connessioni a { -brand-HIBP }.
error-hibp-connect = Errore di connessione a { -brand-HIBP }.
error-hibp-load-breaches = Non è possibile caricare informazioni relative alle violazioni di dati.
error-must-be-signed-in = Devi effettuare l’accesso al tuo { -brand-fxa }.
error-to-finish-verifying = Per completare il processo di verifica di questo indirizzo email su { -product-name } devi essere autenticato con l’account email principale.
home-title = { -product-name }
home-not-found = Pagina non trovata.
oauth-invalid-session = Sessione non valida
scan-title = { -product-name } : Risultati scansione
user-add-invalid-email = Email non valida
user-add-too-many-emails = Stai controllando il numero massimo di indirizzi email.
user-add-email-verify-subject = Conferma la tua iscrizione a { -product-name }.
user-add-duplicate-email = Questo indirizzo email è già stato aggiunto a { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Vai su { $preferencesLink } per controllare lo stato di { $userEmail }.
user-add-verification-email-just-sent = Non è possibile inviare un’altra email di verifica così rapidamente. Riprova più tardi.
user-add-unknown-error = Si è verificato un errore durante l’aggiunta di un altro indirizzo email. Riprova più tardi.
user-delete-unknown-error = Si è verificato un errore durante la rimozione di un indirizzo email. Riprova più tardi.
error-headline = Errore
user-verify-token-error = È richiesto un token di verifica.
user-verify-email-report-subject = Il tuo rapporto di { -product-name }
user-unsubscribe-token-error = È richiesto un token per annullare l’iscrizione.
user-unsubscribe-token-email-error = Sono richiesti un token e un emaiHash per annullare l’iscrizione.
user-unsubscribe-title = { -product-name } : Annulla iscrizione
pwt-section-headline = Password più forti = Maggiore protezione
landing-headline = Il tuo diritto di proteggerti dagli hacker inizia qui.
scan-placeholder = Inserisci il tuo indirizzo email
scan-submit = Cerca il tuo indirizzo email
scan-error = Devi inserire un indirizzo email valido.
download-firefox-banner-button = Scarica { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Inviato.
sign-up = Registrati
form-signup-error = Devi inserire un indirizzo email valido
# breach-date = the calendar date a particular data theft occurred.
breach-date = Data della violazione:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Account compromessi:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dati compromessi:
unsub-headline = Annulla iscrizione a { -product-name-nowrap }
unsub-blurb = Questa operazione rimuoverà la tua email dall’elenco di { -product-name-nowrap } e non riceverai più avvisi quando verranno annunciate nuove violazioni di dati.
unsub-button = Annulla iscrizione
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Dati sulle violazioni forniti da { $hibp-link }
share-twitter = La maggior parte delle persone ha un centinaio di account online. Scopri se alcuni dei tuoi sono stati esposti a una violazione dei dati.
share-facebook-headline = Scopri se sei stato coinvolto in una violazione di dati
share-facebook-blurb = I tuoi account online sono stati esposti a una violazione dei dati?
og-site-description = Scopri se sei stato coinvolto in una violazione dei dati con { -product-name }. Iscriviti per ricevere notifiche su future violazioni e ottenere suggerimenti per mantenere i tuoi account al sicuro.
show-all = Mostra tutto
fxa-scan-another-email = Vuoi controllare un altro indirizzo email?
sign-out = Disconnetti
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestisci l’{ -brand-fxa }
have-an-account = Hai già un account?
fxa-pwt-summary-2 = Le password brevi che contengono una singola parola sono facili da indovinare per gli hacker. Usare almeno due parole e una combinazione di lettere, numeri e caratteri speciali.
fxa-pwt-summary-4 = I gestori di password come 1Password, LastPass, Dashlane e Bitwarden conservano le tue password e le inseriscono nei siti web per te. Ti aiutano persino a creare password sicure.
fxa-pwt-summary-6 = Le violazioni di dati sono in aumento. Se le tue informazioni personali sono coinvolte in una nuova violazioni di dati, { -product-name } ti invia un avviso, così puoi attivarti per proteggere i tuoi account.
fxa-what-to-do-blurb-1 = Se non riesci più ad accedere, contatta il sito web e chiedi come aggiornare le tue credenziali. Hai trovato nel rapporto un account che non riconosci?  I tuoi dati potrebbero essere stati venduti o ridistribuiti. Potrebbe anche trattarsi di un account che ti eri dimenticato di aver creato, oppure non lo riconosci perché la società che fornisce il servizio ha ne ha modificato il nome.
fxa-what-to-do-subhead-2 = Non usare più la password compromessa e modificala ovunque tu l’abbia utilizzata.
fxa-wtd-blurb-2 = Gli hacker potrebbero provare la stessa password in combinazione con il tuo indirizzo email per entrare in altri account. Imposta una password diversa e unica per ciascun account, in particolare per il tuo conto in banca, il tuo account email e altri siti che registrano informazioni personali.
fxa-what-to-do-blurb-3 = Generalmente le violazioni espongono solo email e password, ma alcune includono anche dati finanziari sensibili. Se il tuo conto bancario o il numero della tua carta di credito sono stati violati, avvisa subito la tua banca del rischio di frodi e controlla se negli estratti conto compaiono addebiti che non riconosci.
fxa-what-to-do-subhead-4 = Usa strumenti che ti aiutino a ricordare tutte le tue password e tenerle al sicuro.
fxa-what-to-do-blurb-4 = I gestori di password come 1Password, LastPass, Dashlane e Bitwarden memorizzano le tue password in modo sicuro e le inseriscono nei siti web per te. Usa un gestore di password sia sul telefono che sul computer per evitare di dovertele ricordare tutte a memoria.
# Alerts is a noun
sign-up-for-alerts = Iscriviti per ricevere gli avvisi
# Link title
frequently-asked-questions = Domande più frequenti
about-firefox-monitor = Informazioni su { -product-name }
# Link title
preferences = Preferenze
# Link title
home = Home
# Link title
security-tips = Consigli per la sicurezza
fxa-account = { -brand-fxa(capitalization: "uppercase") }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Apri la navigazione di { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ULTIMA VIOLAZIONE AGGIUNTA
# Link title
more-about-this-breach = Ulteriori informazioni su questa violazione
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
delayed-reporting-copy = A volte possono volerci mesi o anni prima che le credenziali compromesse in una violazione di dati compaiano nel “dark web”. Le violazioni sono aggiunte al nostro database appena vengono scoperte e verificate.
about-fxm-headline = Informazioni su { -product-name }
about-fxm-blurb = { -product-name } ti avvisa se i tuoi account online sono coinvolti in una violazione di dati. Scopri se sei stato coinvolto in una violazione, ricevi avvisi sulle nuove violazioni e inizia a proteggere i tuoi account online. { -product-name } è realizzato da { -brand-Mozilla }.
fxm-warns-you = { -product-name } ti avvisa se il tuo indirizzo email è stato esposto in una violazione di dati online. Controlla se i tuoi dati sono compromessi, impara come proteggere meglio i tuoi account online e ricevi un avviso se la tua email compare in una nuova violazione.
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
change-pw-site = Modifica la password per questo sito
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [0] Non è stato coinvolto in alcuna violazione conosciuta.
        [one] È stato coinvolto in { $breachCount } violazione conosciuta.
       *[other] È stato coinvolto in { $breachCount } violazioni conosciute.
    }
check-for-breaches = Cerca nelle violazioni
find-out-what-hackers-know = Scopri quello che gli hacker già sanno di te. Impara come rimanere sempre un passo avanti.
get-email-alerts = Rimani al sicuro: ricevi una notifica via email quando i tuoi dati vengono coinvolti in una violazione di dati conosciuta
search-for-your-email = Cerca il tuo indirizzo email nelle violazioni di dati di pubblico dominio a partire dal 2007.
back-to-top = Torna in alto
comm-opt-0 = Inviami un’email se uno degli indirizzi indicati di seguito appare in una violazione di dati.
# Variables:
#   $primaryEmail (String) - User primary email address
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
breach-summary = Riepilogo delle violazioni
show-breaches-for-this-email = Visualizza tutte le violazioni che coinvolgono questa email.
link-change-primary = Cambia l’indirizzo email principale
remove-fxm = Rimuovi { -product-name }
remove-fxm-blurb =
    Disattiva gli avvisi di { -product-name }. Il tuo { -brand-fxa } rimarrà attivo e potresti ricevere
    ulteriori comunicazioni relative all’account.
# Button title
manage-email-addresses = Gestisci indirizzi email
# Link title
latest-breach-link = Verifica se sei stato coinvolto in questa violazione

## Variables:
##   $userName (String) - Username

welcome-back = Bentornata/o, { $userName }.
welcome-user = Benvenuta/o, { $userName }.

##

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
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NUOVA VIOLAZIONE RILEVATA
       *[other] { $breachCount } NUOVE VIOLAZIONI RILEVATE
    }
sign-up-headline-1 = Ricevi avvisi per le violazioni future con un { -brand-fxa }.
account-not-required = Non è necessario utilizzare il browser { -brand-name } per avere un { -brand-fxa }. Potresti ricevere informazioni relative ai servizi offerti da { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Le tue informazioni sono state compromesse nella violazione di dati di { $breachName }?
fb-not-comp = Questa email non è stata coinvolta nella violazione di { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Tuttavia, è stata coinvolta in un’altra violazione.
       *[other] Tuttavia, è stata coinvolta in { $breachCount } altre violazioni.
    }
fb-comp-only = Questa email è stata coinvolta nella violazione di { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Questa email è stata coinvolta in una violazione di dati conosciuta, inclusa { $breachName }.
       *[other] Questa email è stata coinvolta in { $breachCount } violazioni di dati conosciute, inclusa { $breachName }.
    }

##

no-other-breaches-found = Nessun’altra violazione trovata con la ricerca di base.
no-results-blurb = Siamo spiacenti, questa violazione non si trova nel nostro database.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Il tuo indirizzo email non è coinvolto in questa fuga di dati
    ma il tuo numero di telefono potrebbe essere ancora a rischio.</span> Alcuni degli account
    compromessi dalla fuga di dati di Facebook, infatti, contengono numeri di telefono e altre
    informazioni personali ma non indirizzi di posta elettronica. Se ti sei registrato
    a Facebook, anche con un account che non stai usando attualmente, ti suggeriamo
    di seguire questi passaggi per proteggerti.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Configura la visibilità delle informazioni <a>nel tuo profilo Facebook</a> scegliendo l’opzione “Solo io” oppure un’altra opzione non pubblica.</span>
facebook-breach-what-to-do-1-copy = Nel corso di questa fuga di dati, gli hacker hanno raccolto informazioni del profilo configurate come pubbliche (“Tutti”) o condivise con gli amici. Queste informazioni possono essere incrociate con altri dati per ottenere accesso a ulteriori informazioni personali e ai tuoi account.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>Cambia password, PIN o altre credenziali di sicurezza negli <a>account del tuo gestore di telefonia mobile</a> per prevenire eventuali tentativi di sostituzione della SIM (“SIM swapping”)</span>.
facebook-breach-what-to-do-2-copy = Il “SIM swapping”, o “SIM jacking”,  si verifica quando un hacker utilizza numeri di telefono, data di nascita e altre informazioni personali per prendere possesso del numero di telefono cellulare di un’altra persona. Questo viene poi utilizzato per ottenere accesso ad account di posta elettronica, social e perfino conti bancari.
facebook-breach-what-to-do-3 = Leggi tutti i consigli sulla nostra pagina dedicata alla fuga di dati di Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Visualizzati:

## Updated error messages

error-bot-headline = Ricerca temporaneamente sospesa
error-bot-blurb = Crediamo che tu possa essere un bot perché hai cercato diversi indirizzi email in un breve periodo di tempo. Per ora, non potrai effettuare nuove ricerche. Puoi riprovare più tardi.
error-csrf-headline = La sessione è scaduta
error-csrf-blurb = Seleziona il pulsante Indietro del browser, ricarica la pagina e riprova.
error-invalid-unsub = Come annullare l’iscrizione agli avvisi di { -product-name }
error-invalid-unsub-blurb = Dovrai annullare l’iscrizione utilizzando una delle email inviate da { -product-name }. Controlla la tua casella di posta per i messaggi da { -brand-team-email }. Seleziona il link per annullare l’iscrizione nella parte finale dell’email.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Indirizzo email monitorato
       *[other] Indirizzi email monitorati
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Password compromessa in tutte le violazioni
       *[other] Password compromesse in tutte le violazioni
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Violazione di dati conosciuta che ha compromesso le tue informazioni
       *[other] Violazioni di dati conosciute che hanno compromesso le tue informazioni
    }
# Button
see-additional-breaches = Mostra ulteriori violazioni
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Questa email è stata coinvolta in una violazione di dati conosciuta.
       *[other] Questa email è stata coinvolta in { $breachCount } violazioni di dati conosciute.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
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
new-unsub-error = Dovrai annullare l’iscrizione utilizzando una delle email inviate da { -product-name }.
# Variables:
#   $breachCount (Integer) - Number of breaches
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
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Panoramica
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Il giorno { $breachDate }, { $breachTitle } è stato violato. La violazione è stata aggiunta al nostro database il giorno { $addedDate }, dopo essere stata scoperta e verificata.
# Title appearing on the Preferences dashboard.
monitor-preferences = Preferenze di { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Accesso effettuato come: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtra per categoria:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Invia avvisi relativi alle violazioni all’indirizzo email coinvolto
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = C’è un modo per proteggere la tua privacy. Entra in { -brand-name }.
# Link title
learn-more-link = Ulteriori informazioni.
email-sent = Email inviata.
# Form title
want-to-add = Vuoi aggiungere un’altra email?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifica il link inviato a { $userEmail } per aggiungere l’indirizzo a { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Indirizzo email verificato correttamente.
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Riceverai un avviso se l’indirizzo email { $email } sarà coinvolto in una violazione dati.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = { $nestedSignInLink } per visualizzare e gestire tutti gli indirizzi email sottoposti al monitoraggio per violazioni.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Accedi

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Gestisci tutti gli indirizzi email in { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Notifiche di violazioni
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Violazione aggiunta:
how-hackers-work-desc = Le tue password fanno gola ai criminali informatici: proteggile come si deve.
what-to-do-after-breach-desc = Blinda i tuoi account per mantenere le informazioni personali lontane dalle mani sbagliate.
create-strong-passwords-desc = Crea password complesse, sicure e difficili da indovinare.
steps-to-protect-desc = Impara a conoscere le minacce più comuni per capire a cosa fare attenzione.
five-myths-desc = Evita le cattive abitudini che servono le tue password agli hacker su un piatto d’argento.
take-further-steps-desc = Scopri come mitigare i rischi di furto d’identità per scongiurare perdite finanziarie.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Modifiche salvate.
# Section headline
rec-section-headline = Che cosa fare per questa violazione
rec-section-subhead = Ti consigliamo di adottare queste misure per mantenere le tue informazioni personali al sicuro e proteggere la tua identità digitale.
# Section headline
rec-section-headline-no-pw = Come proteggere le tue informazioni personali
rec-section-subhead-no-pw = Anche se nessuna password è stata compromessa in questa violazione, puoi sempre adottare nuove misure per proteggere meglio le tue informazioni personali.
# Button
see-additional-recs = Vedi altri suggerimenti

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = L’indirizzo { $affectedEmail } è stato coinvolto nella violazione. <a>Che cosa puoi fare ora?</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } dei tuoi indirizzi email è stato coinvolto nella violazione. <a>Che cosa puoi fare ora?</a>
       *[other] { $numAffectedEmails } dei tuoi indirizzi email sono stati coinvolti nella violazione. <a>Che cosa puoi fare ora?</a>
    }

##

marking-this-subhead = Contrassegna la violazione come risolta
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body = <span>Una volta prese tutte le contromisure possibili per proteggerti dalla violazione</span>, puoi contrassegnarla come risolta. Potrai accedere in qualsiasi momento alle informazioni sulla violazione dal pannello utente.
mark-as-resolve-button = Contrassegna come risolta
marked-as-resolved-label = Contrassegnata come risolta
undo-button = Annulla
confirmation-1-subhead = Ottimo! Hai risolto la tua prima violazione.
confirmation-1-body = Continua così! Controlla il pannello utente per vedere che cos’altro puoi fare per proteggerti.
confirmation-2-subhead = Beccatevi questo, hacker!
confirmation-2-body = Stai intraprendendo passi importanti per proteggere i tuoi account online.
confirmation-3-subhead = Un’altra violazione sistemata. Ottimo lavoro!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = La tua nuova password è univoca, efficace e difficile da indovinare? <a>Scoprilo</a>
generic-confirmation-subhead = Questa violazione è stata contrassegnata come risolta
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Vai al pannello utente per verificare la violazione rimasta.
       *[other] Vai al pannello utente per verificare tutte le violazioni rimaste.
    }
return-to-breach-details-link = Torna alle informazioni sulla violazione
go-to-dashboard-link = Vai al pannello utente
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% completato
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } risolta
       *[other] { $numResolvedBreaches } risolte
    }
progress-intro-subhead = Nuova funzione in { -product-name }: contrassegna le violazioni come risolte
progress-intro-message = Dopo aver controllato le informazioni su una violazione e aver preso le misure necessarie per proteggere le tue informazioni personali, puoi contrassegnare le violazioni come risolte.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } violazione su { $numTotalBreaches } contrassegnata come risolta
       *[other] { $numResolvedBreaches } violazioni su { $numTotalBreaches } contrassegnate come risolte
    }
progress-complete = Tutte le violazioni conosciute sono state contrassegnate come risolte

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 = <span>Hai iniziato alla grande!</span> Verifica le violazioni rimaste e scopri quali misure adottare.
progress-message-2 = <span>Continua così!</span> Anche piccoli accorgimenti, come aggiornare le password, danno un contributo decisivo alla sicurezza delle tue informazioni personali.
progress-message-3 = <span>Hai risolto parecchie violazioni!</span> Continua così, hai quasi finito.
progress-message-4 = <span>È quasi fatta!</span> Ormai sei al traguardo.
progress-complete-message = <span>Una bella soddisfazione, eh?</span> Se vuoi fare ancora di più, questo è un buon momento per aggiornare tutte le tue credenziali con password migliori.

##

resolve-this-breach-link = Risolvi violazione
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Contrassegnata come risolta:
hide-resolved-button = Nascondi risolte
show-resolved-button = Mostra risolte
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Password compromessa in violazioni non risolte
       *[other] Password compromesse in violazioni non risolte
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Violazione di dati conosciuta contrassegnata come risolta
       *[other] Violazioni di dati conosciute contrassegnate come risolte
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nuova
mobile-promo-headline = Porta { -brand-name } sul tuo telefono e tablet
mobile-promo-body = Navigazione veloce, privata e sicura ovunque tu vada. Trova { -brand-name } in Google Play e nell’App Store.
mobile-promo-cta = Installa { -brand-name } su Android e iOS
promo-lockwise-headline = Porta le tue password sempre con te
lockwise-promo-body = Tieni traccia delle tue credenziali di accesso su tutti i dispositivi. Accedi a questi dati in modo sicuro dal tuo computer, telefono o tablet.
promo-lockwise-cta = Installa { -brand-lockwise }
fpn-promo-headline = Impedisci a siti web ed elementi traccianti di conoscere la tua posizione
promo-fpn-body = { -brand-fpn }, mascherando il tuo vero indirizzo IP, tiene alla larga siti web e società di raccolta dati che ti profilano attraverso annunci pubblicitari.
promo-fpn-cta = Installa { -brand-fpn }
monitor-promo-headline = Scopri le nuove violazioni di dati
monitor-promo-body = Ricevi una notifica la prossima volta che le tue informazioni personali vengono esposte in una violazione di dati conosciuta.
ecosystem-promo-headline = Proteggi la tua vita in rete con prodotti che mettono la privacy al primo posto
ecosystem-promo-body = Tutti i prodotti { -brand-name } rispettano il nostro “Impegno per i dati personali”: raccogli meno dati, mantienili al sicuro, nessun segreto.
promo-ecosystem-cta = Vedi tutti i prodotti
steps-to-resolve-headline = Passaggi per risolvere questa violazione
vpn-promo-headline = È il momento di aumentare la tua sicurezza online.
vpn-promo-copy = La rete privata virtuale (VPN) di { -brand-Mozilla } aiuta a proteggere la tua connessione a Internet da hacker e spie.
vpn-promo-cta = Ottieni { -brand-mozilla-vpn }
vpn-promo-headline-new = Risparmia il 50% con un abbonamento annuale
vpn-promo-copy-new = Proteggi i tuoi dati online e scegli un piano di abbonamento VPN adatto alle tue esigenze.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = La tua posizione: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Proteggiti</em> con { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Protetto</em> con { -brand-mozilla-vpn }.
vpn-banner-title-1 = La tua connessione è protetta. Grazie per aver utilizzato { -brand-mozilla-vpn }.
vpn-banner-title-2 = La tua posizione può essere tracciata se non utilizzi una VPN.
vpn-banner-subtitle-2 = Proteggi la tua posizione e naviga in sicurezza in 3 passaggi
vpn-banner-status-protected = Stato attuale: <em>Protetto ✓</em>
vpn-banner-status-not-protected = Stato attuale: <em>Non protetto ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Indirizzo IP: { $ip-address }
vpn-banner-step-1 = Sottoscrivi un abbonamento a { -brand-mozilla-vpn }
vpn-banner-step-2 = Seleziona una posizione VPN
vpn-banner-step-3 = Attiva la VPN e naviga in sicurezza
vpn-banner-cta = Ottieni { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Espandi
# button to close panel
vpn-banner-cta-close = Chiudi

## Relay and VPN educational/ad units

ad-unit-relay-cta = Scopri di più su { -brand-relay }
ad-unit-vpn-cta = Scopri di più su { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = In che modo cerchi di mantenere segreto il tuo indirizzo email?
# ad 2 heading
ad-unit-2-do-you-worry = Sei preoccupato per la sicurezza dei tuoi dati quando utilizzi reti Wi-Fi pubbliche?
# ad 3 heading
ad-unit-3-stay-in-the-game = Rimani in partita!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } ti consente di mantenere una connessione stabile, sicura e protetta mentre giochi o riproduci film in streaming.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Evita limitazioni di banda
# ad 3 list item 2
ad-unit-3-be-anywhere = Puoi risultare ovunque nel mondo, senza esserti mosso da casa
# ad 3 list item 3
ad-unit-3-access-more = Accedi a più contenuti
# ad 4 heading
ad-unit-4-shopping-with = Fai acquisti con gli alias di posta elettronica
ad-unit-4-want-to-buy = Vuoi acquistare qualcosa online e non conosci o non ti fidi completamente del negozio?
ad-unit-4-shop-online = Utilizza un alias di posta elettronica ogni volta che fai acquisti online. Ricevi la conferma al tuo indirizzo email reale e disattiva facilmente l’alias in qualsiasi momento.
# ad 5 heading
ad-unit-5-on-the-go = Fuori casa con { -brand-relay }
ad-unit-5-instantly-make = Crea al volo un alias di posta elettronica personalizzato, ovunque ti trovi.
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Connettiti mentre sei in viaggio
ad-unit-5-privately-sign-in = Utilizza il tuo alias di posta elettronica quando vuoi accedere in modo privato alla rete Wi-Fi del tuo bar preferito o a una rete pubblica
# ad 5 subheading 2
ad-unit-5-email-receipts = Ricevi fatture via email
ad-unit-5-share-custom-email = Quando fai acquisti in un negozio, fornisci un alias di posta elettronica personalizzato per ricevere la fattura senza condividere il tuo indirizzo email reale
# ad 5 subheading 3
ad-unit-5-use-on-phone = Utilizzalo sul tuo telefono
ad-unit-5-no-matter-where = Non importa dove ti trovi, crea un alias di posta elettronica personalizzato in pochi secondi per qualsiasi cosa tu voglia fare
# ad 6 heading
ad-unit-6-worry-free = Registrazioni senza pensieri
ad-unit-6-want-to-start = Vuoi sottoscrivere un nuovo abbonamento, rispondere a un invito o ottenere un codice promozionale vantaggioso senza che lo spam invada la tua casella di posta?
ad-unit-6-before-you-complete = La prossima volta che devi registrarti, utilizza un alias di posta elettronica invece del tuo indirizzo email reale. In questo modo potrai proteggere le tue informazioni e rimanere in controllo della tua casella di posta

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $capitalization ->
        [uppercase] Account Mozilla
       *[lowercase] account Mozilla
    }
open-in-new-tab-alt = Apri in una nuova scheda

## Search Engine Optimization

meta-desc-2 = Scopri se sei stato coinvolto in una violazione di dati con { -brand-fx-monitor }. Ti aiuteremo a capire i passi successivi da fare e a monitorare costantemente eventuali nuove violazioni.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Accedi
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Risolvi le violazioni di dati
site-nav-settings-link = Impostazioni
site-nav-help-link = Guida e supporto
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Prova i nostri altri strumenti di sicurezza:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Menu principale
main-nav-button-collapse-label = Comprimi il menu
main-nav-button-collapse-tooltip = Comprimi il menu
main-nav-button-expand-label = Espandi il menu
main-nav-button-expand-tooltip = Espandi il menu
main-nav-label = Navigazione
main-nav-link-home-label = Pagina iniziale
main-nav-link-dashboard-label = Dashboard
main-nav-link-settings-label = Impostazioni
main-nav-link-faq-label = FAQ
main-nav-link-faq-tooltip = Domande più frequenti

## User menu

# Obsolete
menu-button-title = Menu utente
# Obsolete
menu-button-alt = Apri il menu utente
# Obsolete
menu-list-accessible-label = Menu dell’account
# Obsolete
menu-item-fxa-2 = Gestisci il tuo { -brand-mozilla-account }
# Obsolete
menu-item-settings = Impostazioni
# Obsolete
menu-item-help = Guida e supporto
# Obsolete
menu-item-logout = Disconnetti
user-menu-trigger-label = Apri il menu utente
user-menu-trigger-tooltip = Profilo
user-menu-manage-fxa-label = Gestisci il tuo { -brand-mozilla-account }
user-menu-settings-label = Impostazioni
user-menu-settings-tooltip = Configura { -brand-mozilla-monitor }
user-menu-help-label = Guida e supporto
user-menu-help-tooltip = Ottieni assistenza per { -brand-mozilla-monitor }
user-menu-signout-label = Disconnetti
user-menu-signout-tooltip = Esci da { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Condizioni di utilizzo del servizio
privacy-notice = Informativa sulla privacy
github = { -brand-github }
footer-nav-all-breaches = Tutte le violazioni
footer-external-link-faq-label = FAQ
footer-external-link-faq-tooltip = Domande più frequenti

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Pagina non trovata
error-page-error-404-copy = Siamo spiacenti, la pagina che stai cercando non è più disponibile.
error-page-error-404-cta-button = Torna indietro
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Si è verificato un errore
error-page-error-other-copy = Riprova adesso o ritorna più tardi

## Breach overview page

all-breaches-headline-2 = Tutte le violazioni rilevate da { -brand-fx-monitor }
all-breaches-lead = Monitoriamo tutte le violazioni di dati conosciute per scoprire se le tue informazioni personali sono state compromesse. Ecco un elenco completo di tutte le violazioni segnalate dal 2007.
search-breaches = Cerca nelle violazioni
# the kind of user data exposed to hackers in data breach.
exposed-data = Dati esposti:

## Public breach detail page

find-out-if-2 = Scopri se sei stato coinvolto in questa violazione
find-out-if-description = Ti aiuteremo a verificare rapidamente se il tuo indirizzo email è stato coinvolto in questa violazione e a capire come procedere.
breach-detail-cta-signup = Cerca nelle violazioni

## Floating banner

floating-banner-text = Migliora la tua sicurezza online con notizie, suggerimenti e aggiornamenti da { -brand-Mozilla }.
floating-banner-link-label = Iscriviti
floating-banner-dismiss-button-label = No grazie

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: nuovo nome, nuovo look e ancora più modi per <b>riprendere possesso della tua privacy</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Chiudi
loading-accessibility = Caricamento…
