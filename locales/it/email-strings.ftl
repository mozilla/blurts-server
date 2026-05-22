# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Accedi

## Email footers

email-footer-support-heading = Hai domande su { -brand-mozilla-monitor }?
email-footer-support-content = Visita il nostro <support-link>Centro di supporto</support-link> per ricevere assistenza
email-footer-trigger-transactional = Hai ricevuto questa email in quanto sei abbonato a { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Hai ricevuto questa email automatica perché sei abbonato a { -brand-mozilla-monitor }. Se l’hai ricevuta per errore, non è richiesta alcuna azione. Per ulteriori informazioni, visita il <support-link>supporto { -brand-mozilla }</support-link>.
email-footer-reason-subscriber-one-time = Hai ricevuto questa email automatica perché sei abbonato a { -brand-monitor-plus }. Non riceverai altre email come questa. Per ulteriori informazioni, visita il <support-link>supporto { -brand-mozilla }</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = Visita il nostro centro assistenza: { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Dati sulle violazioni forniti da { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Dati sulle violazioni forniti da <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacy
email-unsubscribe-link = <link_to_unsub>Annulla iscrizione</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Annulla iscrizione: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Verifica email
# Headline of verification email
email-link-expires = Questo link scadrà tra 24 ore

##

# Subject line of email
email-subject-found-breaches = { -product-name } ha trovato i tuoi dati nelle seguenti violazioni
# Subject line of email
email-subject-no-breaches = { -product-name } non ha trovato violazioni conosciute
# Subject line of email
email-subject-verify = Verifica il tuo indirizzo email per { -product-name }
fxm-warns-you-no-breaches = { -product-name } ti avvisa quando le tue informazioni personali vengono coinvolte in una violazione. Per il momento il tuo indirizzo email non risulta compromesso, ma se dovesse essere coinvolto in una nuova violazione riceverai un avviso.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Dati sulle violazioni forniti da <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Proteggi i tuoi dati, a partire da adesso
email-verify-simply-click = Fai clic sul link sottostante per completare il processo di verifica del tuo account.

## Breach report

email-breach-summary = Sommario delle violazioni dati che hanno coinvolto il tuo account
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = I risultati della ricerca per il tuo account { $email-address } indicano che il tuo indirizzo email potrebbe essere stato esposto. Ti consigliamo di agire ora per risolvere questa violazione.
email-dashboard-cta = Vai al pannello utente

## Breach alert email

email-breach-alert-all-subject = Rilevata nuova violazione di dati
email-breach-alert-all-preview = Ti guideremo attraverso i passaggi per risolverla.
email-breach-alert-all-hero-heading = Sei stato coinvolto in una nuova violazione di dati
email-breach-alert-all-hero-subheading = Non preoccuparti, possiamo aiutarti a risolvere questo problema
email-breach-alert-all-lead = { -brand-mozilla-monitor } ha rilevato la seguente violazione di dati che include informazioni personali:
email-breach-alert-all-source-title = Sorgente della violazione:
email-breach-alert-all-data-points-title = Le tue informazioni esposte:
email-breach-alert-all-next-steps-lead = Ti guideremo passo dopo passo su come risolvere questa violazione di dati.
email-breach-alert-all-next-steps-cta-label = Cominciamo
email-breach-alert-all-next-steps-button-dashboard = Vai al pannello utente

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Dettagli sulla violazione di dati di { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } ha trovato le tue informazioni in una violazione di dati che ha coinvolto { $company-name } il { $breach-date }. Ricevi questa notifica perché ti sei registrato per ricevere le <link_to_settings>notifiche di violazione</link_to_settings>.
email-breach-alert-all-source-title-1 = Dettagli della violazione
email-breach-alert-company = Azienda:
email-breach-alert-date-of-breach = Data della violazione:
email-breach-alert-info-exposed = Informazioni esposte:
email-breach-alert-next-steps = Passi successivi
email-breach-alert-next-steps-description = <sign_in_link>Accedi</sign_in_link> alla dashboard di { -brand-mozilla-monitor }. Ti guideremo attraverso i passaggi necessari per risolverla.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Risolvi la violazione nella dashboard
email-breach-alert-faqs-title = FAQ
email-breach-alert-faq-qn-1 = Perché ricevo questo messaggio?
email-breach-alert-faq-ans-1 = Ti sei registrato per ricevere avvisi relativi alle violazioni di dati. <link_to_settings>Aggiorna le tue preferenze</link_to_settings> in qualsiasi momento nelle impostazioni.
email-breach-alert-faq-qn-2 = Perché non riconosco questa azienda o questo sito?
email-breach-alert-faq-ans-2 = Potrebbe aver cambiato proprietario o nome, riferirsi a un vecchio account o a uno creato per te, oppure derivare da una lista in vendita di dati personali esposti.
email-breach-alert-faq-qn-3 = Che cos’è un avviso di violazione di dati?
email-breach-alert-faq-ans-3 = { -brand-mozilla-monitor } invia una notifica quando le informazioni personali che stai monitorando vengono esposte, rubate o copiate senza autorizzazione.
email-breach-alert-faq-qn-4 = Che cos’è { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Un servizio gratuito che ti informa se i tuoi account online sono stati compromessi in una violazione di dati.
