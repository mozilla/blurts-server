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
layout-support = Apoio
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Dar feedback
terms-and-privacy = Termos e privacidade
error-not-subscribed = Este endereço de email não está subscrito no { -product-name }.
error-hibp-throttled = Demasiadas ligações para { -brand-HIBP }.
error-hibp-connect = Erro ao ligar-se a { -brand-HIBP }.
error-hibp-load-breaches = Não foi possível carregar as brechas.
hibp-notify-email-subject = { -product-name } Alerta: A sua conta foi envolvida numa brecha.
home-title = { -product-name }
home-not-found = Página não encontrada.
oauth-invalid-session = Sessão inválida
oauth-confirmed-title = { -product-name } : Subscrito
scan-title = { -product-name } : Resultados da verificação
user-add-invalid-email = Email inválido
user-add-email-verify-subject = Verifique a sua subscrição do { -product-name }.
user-add-title = { -product-name } : Confirmar email
user-verify-token-error = Um token de verificação é requerido.
user-verify-title = { -product-name } : Subscrito
user-unsubscribe-token-error = Cancelar a subscrição requer um token.
user-unsubscribe-token-email-error = Cancelar a subscrição requer um token e emailHash.
user-unsubscribe-title = { -product-name } : Cancelar subscrição
user-unsubscribe-survey-title = { -product-name } : Pesquisa de subscrição cancelada
user-unsubscribed-title = { -product-name } : Subscrição cancelada

## Password Tips

scan-placeholder = Introduzir endereço de email
scan-privacy = O seu email não será armazenado.
scan-submit = Pesquisar o seu email
scan-another-email = Verificar outro endereço de email
scan-featuredbreach-label = Descubra se a sua conta <span class="bold"> { $featuredBreach } </span> foi comprometida.
scan-error = Tem de ser um email válido.
signup-banner-headline = O { -product-name-nowrap } deteta ameaças contra as suas contas online.
download-firefox-bar-link = Transferir o { -brand-name } agora
download-firefox-banner-blurb = Tome o controlo do seu navegador
download-firefox-banner-button = Transferir o { -brand-name }
signup-modal-close = Fechar
get-your-report = Obter o seu relatório
signup-modal-verify-headline = Verifique a sua subscrição
signup-modal-verify-blurb = Enviámos uma ligação de verificação para <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Esta ligação expira em 24 horas.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Enviado!
form-signup-error = Tem de ser um email válido
no-breaches-headline = Por enquanto, tudo bem.
found-breaches-headline = A sua informação foi parte de uma brecha de dados.
show-more-breaches = Mostrar mais
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data da brecha
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Contas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dados comprometidos:
confirmed = Confirmado!<br />Está subscrito(a)!
unsub-headline = Cancelar a subscrição do { -product-name-nowrap }
unsub-button = Cancelar subscrição
unsub-survey-blurb =
    O seu email foi cancelado da subscrição do { -product-name-nowrap }. Obrigado por uitilizar este serviço.
    Tem um momento para responder a uma pergunta acerca da sua experiência?
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Partilhar
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweetar
download-firefox-quantum = Transferir o { -brand-Quantum }
download-firefox-mobile = Transferir o { -brand-name } Móvel
# Features here refers to Firefox browser features. 
features = Funcionalidades
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Dados de brechas fornecidos por { $hibp-link }
