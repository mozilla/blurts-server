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
-brand-fxa = Conta Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Apoio
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Acerca dos alertas do Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Dar feedback
terms-and-privacy = Termos e privacidade
error-scan-page-token = Tentou verificar muitos endereços de email num curto período de tempo. Por motivos de segurança, bloqueámos-lhe de novas pesquisas. Irá poder tentar novamente mais tarde.
error-could-not-add-email = Não foi possível adicionar o endereço de email à base de dados.
error-not-subscribed = Este endereço de email não está subscrito no { -product-name }.
error-hibp-throttled = Demasiadas ligações para { -brand-HIBP }.
error-hibp-connect = Erro ao ligar a { -brand-HIBP }.
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
error-headline = Erro
user-verify-token-error = Um token de verificação é requerido.
user-verify-email-report-subject = O seu relatório do { -product-name }
user-verify-title = { -product-name } : Subscrito
user-unsubscribe-token-error = Cancelar a subscrição requer um token.
user-unsubscribe-token-email-error = Cancelar a subscrição requer um token e emailHash.
user-unsubscribe-title = { -product-name } : Cancelar subscrição
user-unsubscribe-survey-title = { -product-name } : Cancelar subscrição de pesquisa
user-unsubscribed-title = { -product-name } : Subscrição cancelada

## Password Tips

pwt-section-headline = Palavras-passe mais fortes = melhor proteção
pwt-section-subhead = A sua informação privada é tão segura quanto as suas palavras-passe.
pwt-section-blurb =
    As suas palavras-passe protegem mais que as suas contas. Estas protegem cada bit de informação pessoal que reside nelas.
    E os hackers confiam em maus hábitos, como utilizar a mesma palavra-passe em todos os lugares ou utilizar frases comuns (p@ssw0rd, alguém?)
    então, se conseguem uma conta, podem conseguir muitas. Aqui está como proteger melhor as suas contas.
pwt-headline-1 = Utilize uma palavra-passe diferente para cada conta
pwt-summary-1 =
    Reutilizar a mesma palavra-passe em todos os lugares deixa a porta aberta para o roubo de identidade.
    Qualquer pessoa com essa palavra-passe pode iniciar sessão em todas as suas contas.
pwt-headline-2 = Crie palavras-passe fortes e difíceis de adivinhar
pwt-summary-2 =
    Os hackers utilizam centenas de palavras-passe comuns para tentar adivinhar as suas.
    Quanto mais longa e mais aleatória for a sua palavra-passe, mais difícil será adivinhar.
pwt-headline-3 = Trate as questões de segurança como palavras-passe extra
pwt-summary-3 =
    Os websites não verificam se as suas respostas são precisas, apenas que estas correspondem todas as vezes.
    Crie respostas longas e aleatórias e armazene-as em algum lugar seguro.
pwt-headline-4 = Obtenha ajuda para se lembrar das suas palavras-passe
pwt-summary-4 =
    Gestores de palavras-passe como 1Password, LastPass, Dashlane e Bitwarden geram palavras-passe fortes e únicas.
    Estes também armazenam palavras-passe com segurança e preenchem-nas em websites por si
pwt-headline-5 = Adicione segurança extra com autenticação de dois fatores
pwt-summary-5 =
    O 2FA exige um pedaço de informação adicional (como um código único enviado por mensagem de texto) para iniciar sessão na sua conta.
    Mesmo que alguém tenha a sua palavra-passe, não poderão entrar.
pwt-headline-6 = Registe-se para alertas do { -product-name-nowrap }
pwt-summary-6 =
    As brechas de dados de website estão em ascensão. Assim que uma nova brecha for adicionada à nossa base de dados,
    o { -product-name-nowrap } envia-lhe um alerta — para que possa tomar medidas e proteger a sua conta.
landing-headline = O seu direito de estar a salvo de hackers começa aqui.
landing-blurb =
    O { -product-name-nowrap } oferece-lhe ferramentas para manter a sua informação pessoal segura.
    Descubra o que os hackers já sabem acerca de si, e saiba como ficar um passo à frente dos mesmos.
scan-label = Veja se foi envolvido(a) numa brecha de dados.
scan-placeholder = Inserir endereço de e-mail
scan-privacy = O seu e-mail não será guardado.
scan-submit = Pesquisar pelo seu e-mail
scan-another-email = Pesquisar outro endereço de e-mail
scan-featuredbreach-label = Descubra se a sua conta <span class="bold"> { $featuredBreach } </span> foi comprometida.
sensitive-breach-email-required = A brecha contém informação sensível. Verificação por email requerida.
scan-error = Tem de ser um email válido.
signup-banner-headline = O { -product-name-nowrap } deteta ameaças contra as suas contas online.
signup-banner-blurb =
    O seu relatório detalhado do { -product-name-nowrap } mostra se a informação das suas contas online foi vazada ou furtada.
    Também alertaremos se as suas contas aparecerem em novas brechas de websites.
download-firefox-bar-blurb = O { -product-name-nowrap } é trazido a si pelo <span class="nowrap">todo novo { -brand-name }</span>.
download-firefox-bar-link = Transferir o { -brand-name } agora
download-firefox-banner-blurb = Tome o controlo do seu navegador
download-firefox-banner-button = Transferir o { -brand-name }
signup-modal-headline = Registar-se no { -product-name-nowrap }
signup-modal-blurb = Registe-se para o seu relatório completo, alertas quando novas brechas acontecerem e dicas de segurança do { -product-name-nowrap }.
signup-modal-close = Fechar
get-your-report = Obter o seu relatório
signup-modal-verify-headline = Verifique a sua subscrição
signup-modal-verify-blurb = Enviámos uma ligação de verificação para <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Esta ligação expira em 24 horas.
signup-modal-verify-resend = Não está na caixa de entrada ou pasta de lixo? Reenviar.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Enviado!
signup-with-fxa = Registe-se com uma Conta { -brand-name }
form-signup-placeholder = Inserir e-mail
form-signup-checkbox = Obter as últimas da { -brand-Mozilla } e do { -brand-name }.
sign-up = Registar
form-signup-error = Tem de ser um email válido
no-breaches-headline = Até agora, tudo bem.
found-breaches-headline = A sua informação foi parte de uma brecha de dados.
no-breaches =
    O seu endereço de email não apareceu na nossa verificação básica.
    Isto são boas notícias, mas as brechas de dados podem acontecer a qualquer momento e ainda há mais coisas que pode fazer.
    Subscreva ao { -product-name-nowrap } para um relatório completo, alertas sobre novas brechas e dicas sobre como proteger as suas palavras-passe.
featured-breach-results =
    { $breachCount ->
        [0] A sua conta aparece na brecha <span class="bold">{ $featuredBreach }</span>, mas não aparece em quaisquer outras brechas de dados conhecidas.
        [one] A sua conta apareceu na brecha <span class="bold"> { $featuredBreach } </span>, e também numa outra brecha.
       *[other] A sua conta apareceu na brecha <span class="bold"> { $featuredBreach } </span>, e também em { $breachCount } outras brechas.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] A sua conta não apareceu na brecha <span class="bold">{ $featuredBreach }</span>, mas apareceu numa outra brecha.
       *[other] A sua conta não apareceu na brecha <span class="bold">{ $featuredBreach }</span>, mas apareceu em { $breachCount } outras brechas.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] A sua conta apareceu em { $breachCount } brecha.
       *[other] As contas associadas com o seu endereço de email apareceram nas seguintes { $breachCount } brechas.
    }
show-more-breaches = Mostrar mais
what-to-do-headline = O que fazer quando a sua informação é exposta numa brecha de dados
what-to-do-subhead-1 = Altere as suas palavras-passe, mesmo para contas antigas
what-to-do-blurb-1 =
    Se não conseguir iniciar sessão, contacte o website para perguntar como recuperar ou encerrar a conta.
    Vê uma conta que não reconhece? O site pode ter alterado de nome ou alguém pode ter criado uma conta por si.
what-to-do-subhead-2 = Se reutilizar uma palavra-passe exposta, altere-a
what-to-do-blurb-2 =
    Os hackers podem tentar reutilizar a sua palavra-passe exposta para aceder a outras contas.
    Crie uma palavra-passe diferente para cada website, especialmente para a sua conta bancária,
    email e outros websites onde guarda informação pessoal.
what-to-do-subhead-3 = Tome passos extra para proteger as suas contas financeiras
what-to-do-blurb-3 =
    A maioria das brechas apenas expõem emails e palavras-passe, mas algumas incluem informação financeira sensível.
    Se a sua conta bancária ou números de cartão de crédito foram incluídos numa brecha, alerte o seu banco sobre possíveis fraudes,
    e monitorize os extratos por cobranças que não reconhece.
what-to-do-subhead-4 = Obtenha ajuda para criar boas palavras-passe e mantê-las seguras.
what-to-do-blurb-4 =
    Gestores de palavras-passe como 1Password, LastPass, Dashlane e Bitwarden geram palavras-passe fortes,
    armazenam-nas com segurança e preenchem-nas em websites por si.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data da brecha
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Contas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dados comprometidos:
confirmed = Confirmado!<br />Está subscrito(a)!
confirmed-blurb = O { -product-name-nowrap } irá enviar-lhe por email um relatório completo, e irá enviar um alerta por email se a sua conta aparecer numa nova brecha relatada.
confirmed-social-blurb = Se tiver sido vítima de brechas, as chances dos seus amigos, familiares ou conexões online de o terem sido são grandes. Deixe-os saber acerca do { -product-name-nowrap }.
unsub-headline = Cancelar subscrição de { -product-name-nowrap }
unsub-blurb = Isto irá remover o seu email da lista do { -product-name-nowrap } e não irá receber mais alertas quando novas brechas são anunciadas.
unsub-button = Cancelar subscrição
fxa-unsub-headline = Cancele a subscrição de alertas do { -product-name }.
fxa-unsub-blurb =
    Não irá receber mais alertas do { -product-name }.
    A sua { -brand-fxa } irá permanecer ativa e poderá receber outras
    comunicações relacionadas à conta.
unsub-survey-form-label = Porque está a cancelar a sua subscrição de alertas do { -product-name-nowrap }?
unsub-reason-1 = Acho que os alertas não tornam os meus dados mais seguros
unsub-reason-2 = Recebo demasiados emails do { -product-name-nowrap }
unsub-reason-3 = Não acho o serviço valioso
unsub-reason-4 = Já tomei medidas para proteger as minhas contas
unsub-reason-5 = Estou a utilizar outro serviço para monitorizar as minhas contas
unsub-reason-6 = Nenhuma das acima
unsub-survey-thankyou = Obrigado pelo seu feedback.
unsub-survey-error = Por favor selecione uma.
unsub-survey-headline-v2 = A sua subscrição foi cancelada.
unsub-survey-blurb-v2 =
    Não irá receber mais alertas do { -product-name }.
    Poderia tirar um momento para responder a uma pergunta acerca da sua experiência?
unsub-survey-button = Submeter resposta
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
site-description = As suas contas foram vazadas ou furtadas numa brecha de dados? Descubra no { -product-name }. Pesquise a nossa base de dados e registe-se para alertas.
confirmation-headline = O seu relatório do { -product-name } está a caminho.
confirmation-blurb = As brechas de dados podem afetar qualquer um. Espalhe a palavra para que os seus amigos e familiares possam verificar para ver se as suas contas online estão seguras.
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Outro
share-twitter = A maioria das pessoas tem cerca de 100 contas online. Alguma das suas foi exposta numa brecha de dados? Descubra.
share-facebook-headline = Descubra se fez parte de uma brecha de dados
share-facebook-blurb = Alguma das suas contas online foi exposta numa brecha de dados?
og-site-description = Descubra se fez parte de uma brecha de dados com o { -product-name }. Registe-se para receber alertas acerca de futuras brechas e receba dicas para manter as suas contas seguras.
mozilla-security-blog = Blogue de segurança da { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Mostrar todas
fxa-landing-blurb =
    Descubra o que os hackers já sabem acerca de si
    e aprenda como ficar um passo à frente deles.
fxa-scan-label = Veja se já apareceu numa brecha de dados.
fxa-welcome-headline = Bem-vindo(a) ao { -product-name }.
fxa-welcome-blurb = Está pronto(a) para obter alertas se { $userEmail } aparecer numa brecha de dados.
fxa-scan-another-email = Pretende verificar outro email?
# Search Firefox Monitor
fxa-scan-submit = Pesquisar no { -product-name }
sign-up-to-check = Registe-se para verificar
sign-in = Iniciar sessão
sign-out = Terminar sessão
full-report-headline = O seu relatório do { -product-name }
see-full-report = Ver relatório completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gerir { -brand-fxa }
fxa-download-firefox-bar-blurb = Trazido a si pelo { -brand-name }. 2x mais rápido. Utiliza 30% menos memória do que o { -brand-Chrome }.
fxa-download-firefox-bar-link = Transferir agora
fxa-download-firefox-banner-blurb = Um carregamento de páginas melhor e mais rápido que utiliza menos memória do computador.
user-fb-compromised-headline = { $userEmail } apareceu na brecha de dados { $breachName }.
guest-fb-compromised-headline = Este email apareceu na brecha de dados { $breachName }.
user-zero-breaches-headline = { $userEmail } apareceu em zero brechas de dados.
guest-zero-breaches-headline = Este email apareceu em zero brechas de dados.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } apareceu em 1 brecha de dados.
       *[other] { $userEmail } apareceu em { $breachCount } brechas de dados.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Este email apareceu em 1 brecha de dados.
       *[other] Este email apareceu em { $breachCount } brechas de dados.
    }
user-no-breaches-blurb = Iremos alertar-lhe se este endereço de email aparecer numa nova brecha.
guest-no-breaches-blurb =
    Para ver se este email aparece em brechas sensíveis, crie uma { -brand-fxa }.
    Também lhe alertaremos se este endereço aparecer em novas brechas de dados.
user-one-breach-blurb = Esta brecha expôs a seguinte informação pessoal.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] O seu email também apareceu em { $breachCount } outra brecha.
       *[other] O seu email também apareceu em { $breachCount } outras brechas.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Este email também apareceu em { $breachCount } outra brecha.
       *[other] Este email também apareceu em { $breachCount } outras brechas.
    }
user-fb-compromised-single =
    Esta brecha expôs a seguinte informação pessoal. Se ainda não
    alterou as suas palavras-passe, agora é o momento.
user-generic-fb-compromised-single = Esta brecha expôs a seguinte informação pessoal.
guest-fb-compromised-single-v2 =
    Esta brecha expôs a seguinte informação pessoal.
    Crie uma { -brand-fxa } gratuita para o seu relatório completo de brechas passadas, alertas de novas brechas,
    e informação acerca de outros serviços da { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Este email também apareceu em { $breachCount } outra brecha. Crie uma
            { -brand-fxa } gratuita para o seu relatório completo de brechas passadas, alertas de novas brechas,
            e informação acerca de outros serviços da { -brand-Mozilla }.
       *[other]
            Este email também apareceu em { $breachCount } outras brechas. Crie uma
            { -brand-fxa } gratuita para o seu relatório completo de brechas passadas, alertas de novas brechas,
            e informação acerca de outros serviços da { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Não estava na brecha { $breachName }, mas encontrámos esse endereço de email noutra.
       *[other] Não estava na brecha { $breachName }, mas encontrámos esse endereço de email noutras.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Este email não estava na brecha { $breachName }, mas foi encontrado noutra.
       *[other] Este email não estava na brecha { $breachName }, mas foi encontrado noutras.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Este email não estava na brecha { $breachName }. mas foi encontrado noutra. Crie uma
            { -brand-fxa } gratuita para o seu relatório completo de brechas passadas, alertas de novas brechas,
            e informação acerca de outros serviços da { -brand-Mozilla }.
       *[other]
            Este email não estava na brecha { $breachName }. mas foi encontrado noutras. Crie uma
            { -brand-fxa } gratuita para o seu relatório completo de brechas passadas, alertas de novas brechas,
            e informação acerca de outros serviços da { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Esta brecha expôs a seguinte informação pessoal. Se ainda não alterou as suas palavras-passe, agora é o momento.
       *[other] Estas brechas expuseram a seguinte informação pessoal. Se ainda não alterou as suas palavras-passe, agora é o momento.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Esta brecha expôs a seguinte informação pessoal.
       *[other] Esta brechas expuseram a seguinte informação pessoal.
    }
have-an-account = Já tem uma conta?
signup-banner-sensitive-blurb =
    Descubra o que os hackers já sabem acerca de si e aprenda como
    ficar um passo à frente deles. Seja alertado(a) se a sua conta aparecer
    em novas brechas de dados.
fxa-pwt-section-blurb =
    As palavras-passe protegem toda a informação pessoal nas suas contas online. E
    os hackers confiam em maus hábitos, como utilizar a mesma palavra-passe em todos os lugares ou utilizar
    frases comuns (p@ssw0rd, alguém?) então, se conseguem uma conta, podem
    conseguir muitas.
fxa-pwt-summary-2 =
    Palavras-passe curtas e de palavra única são fáceis para os hackers adivinharem.
    Utilize pelo menos duas palavras e uma combinação de letras, dígitos e caracteres especiais.
fxa-pwt-summary-4 =
    Os gestores de palavras-passe como 1Password, LastPass, Dashlane e Bitwarden armazenam as suas
    palavras-passe em segurança e preenchem-nas em websites por si. Estes também lhe ajudam a fazer palavras-passe mais fortes.
fxa-pwt-summary-6 =
    As brechas de dados estão em ascensão. Se a sua informação pessoal aparecer numa nova brecha de dados,
    o { -product-name } irá enviar um alerta — para que possa tomar medidas e proteger as suas contas.
fxa-what-to-do-blurb-1 =
    Se não conseguir iniciar sessão, contacte o website para perguntar como atualizá-la.
    Vê uma conta que não reconhece? Os seus dados podem ter sido vendidos
    ou redistribuídos. Esta também pode ser uma conta que se esqueceu que
    criou ou uma empresa que mudou de nome.
fxa-what-to-do-subhead-2 = Pare de utilizar a palavra-passe exposta e altere-a em todos os lugares em que a utilizou.
fxa-wtd-blurb-2 =
    Os hackers podem tentar utilizar essa mesma palavra-passe e o seu email para aceder a outras contas.
    Crie uma palavra-passe diferente e única para cada conta, especialmente para a sua conta bancária,
    email e outros websites onde guarda informação pessoal.
fxa-what-to-do-blurb-3 =
    A maioria das brechas apenas expõem emails e palavras-passe, mas algumas incluem informação financeira sensível.
    Se a sua conta bancária ou números de cartão de crédito foram expostos, alerte o seu banco sobre possíveis fraudes.
    Monitorize os extratos por cobranças que não reconhece.
fxa-what-to-do-subhead-4 = Obtenha ajuda para se lembrar de todas as suas palavras-passe e mantê-las seguras.
fxa-what-to-do-blurb-4 =
    Os gestores de palavras-passe como 1Password, LastPass, Dashlane e Bitwarden armazenam as suas
    palavras-passe em segurança e preenchem-nas em websites por si. Utilize um gestor de palavras-passe
    no seu telefone e computador, para que não precise de se lembrar de todas elas.
fb-landing-headline = A sua informação foi exposta na brecha de dados { $breachName }?
copyright = Porções deste conteúdo são © 1999- { $year } por contribuidores individuais da mozilla.org.
content-available = Conteúdo disponível sob uma licença Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Registar-se para receber alertas
sign-up-for-fxa-alerts = Registe-se para alertas do { -product-name }.
create-free-account =
    Crie uma { -brand-fxa } gratuita para o seu relatório completo de brechas passadas, alertas de
    novas brechas e informação acerca de outros serviços da { -brand-Mozilla }.
get-your-report-and-sign-up = Obtenha o seu relatório e registe-se para receber alertas.
# Link title
frequently-asked-questions = Perguntas frequentes
about-firefox-monitor = Acerca do { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Preferências
# Link title.
home = Início
# Link title
breaches = Brechas
# Link title
security-tips = Dicas de segurança
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Abrir navegação do { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMA BRECHA ADICIONADA
breach-added = Brecha reportada:
breach-discovered = Brecha descoberta:
# Link title
more-about-this-breach = Mais acerca desta brecha
take-control = Retome o controlo dos seus dados pessoais.
cant-stop-hackers = Não pode impedir que os hackers invadam. Mas pode evitar maus hábitos que lhes facilitam o trabalho.
read-more-tips = Ler mais dicas de segurança
how-hackers-work = Compreender como é que os hackers funcionam
monitor-your-online-accounts = Inscreva-se para uma monitorização de violações com { -brand-fxa }.
stay-alert = Mantenha-se atento às novas violações
if-your-info = Se a sua informação apareceu numa nova violação de dados, nós iremos enviar-lhe um alerta.
search-all-emails = Procure por violações em todos os seus endereços de e-mail e receba alertas sobre novas ameaças.
monitor-several-emails = Monitorize vários emails
take-action = Tome medidas para proteger as suas contas
keep-your-data-safe = Descubra o que precisa de fazer para manter os seus dados seguros de cibercriminosos.
website-breach = Brecha de website
sensitive-breach = Brechas de websites sensíveis
data-aggregator-breach = Brecha agregadora de dados
unverified-breach = Brecha não verificada
spam-list-breach = Brecha de listas de spam
website-breach-plural = Brechas de websites
sensitive-breach-plural = Brechas sensíveis
data-aggregator-breach-plural = Brechas agregadoras de dados
unverified-breach-plural = Brechas não verificadas
spam-list-breach-plural = Brechas de listas de spam
what-data = Que dados foram comprometidos:
sensitive-sites = Como é que o { -product-name } trata sites sensíveis?
sensitive-sites-copy =
    { -product-name } só revela as contas associadas com estes 
    tipos de violações depois de um endereço de e-mail ter sido verificado. Isto significa que 
    é a única pessoa que pode ver se a sua informação estava numa violação (a menos que 
    alguém tenha acesso à sua conta de e-mail).
delayed-reporting-headline = Porque demorou tanto tempo até esta violação ser reportada?
delayed-reporting-copy =
    Pode demorar meses ou até mesmo anos para as credenciais expostas 
    numa violação de dados aparecerem na dark web. As violações são adicionadas à nossa base de dados 
    assim que são descobertas e validadas.
about-fxm-headline = Acerca do { -product-name }
about-fxm-blurb = { -product-name } indica que as suas contas online estiveram envolvidas numa fuga de dados. Descubra se esteve numa fuga de dados, obtenha alertas sobre novas fugas e execute os procedimentos para proteger as suas contas onlines. { -product-name } é fornecido por { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } indica se o seu endereço de e-mail foi exposto 
    numa violação de dados online. Confirme se a sua informação foi exposta, aprenda a 
    proteger melhor as suas contas online e receba alertas caso o seu endereço de e-mail 
    apareça numa nova violação.
# How Firefox Monitor works
how-fxm-works = Como é que o { -product-name } funciona
how-fxm-1-headline = Realizar uma pesquisa básica
how-fxm-1-blurb =
    Procure pelo seu endereço de e-mail em violações de dados públicas desde 
    2007. Esta pesquisa básica vai apresentar a maior parte das violações de dados, mas não 
    as que contenham dados pessoais sensíveis.
how-fxm-2-headline = Registe-se para monitorizar violações
how-fxm-2-blurb =
    Crie uma { -brand-fxa } para monitorizar o seu e-mail sobre violações atuais. 
    Assim que confirmar o seu e-mail, irá também receber um relatório completo sobre violações anteriores, 
    incluindo violações sensíveis.
how-fxm-3-headline = Receba notificações no seu navegador
how-fxm-3-blurb =
    Se utilizar { -brand-name }, irá receber uma notificação se visitar um 
    site cujos dados tenham sido violados. Saiba imediatamente se faz parte dessa violação 
    e o que pode fazer quanto a isso.
wtd-after-website = O que fazer depois de uma brecha de website
wtd-after-data-agg = O que fazer depois de uma brecha de agregador de dados
what-is-data-agg = O que é um agregador de dados?
what-is-data-agg-blurb =
    Um agregador ou agente de dados, recolhe informações de registos 
    públicos e adquire dados de outras empresas. Trabalham estes dados para os venderem a outras empresas 
    para fins de marketing. As vítimas destas violações são uma probabilidade mais baixa de fraude financeira 
    mas os piratas informáticos podem utilizar estes dados para se fazerem passar por essas pessoas ou as perfilar.
protect-your-privacy = Proteja a sua privacidade online
no-pw-to-change = Ao contrário de uma violação de website, não há uma palavra-passe para alterar.
avoid-personal-info = Evite utilizar informação pessoal nas palavras-passe
avoid-personal-info-blurb = É fácil encontrar aniversários, moradas e nomes de membros de família online. Mantenha estas palavras fora das suas palavras-passe.

## What to do after data breach tips

change-pw = Altere a sua palavra-passe
even-for-old = Mesmo para as contas antigas, é importante atualizar a sua palavra-passe.
make-new-pw-unique = Torne a nova palavra-passe diferente e única
strength-of-your-pw = A força das suas palavras-passe tem um impacto direto na sua segurança online.
create-strong-passwords = Como criar palavras-passe fortes
stop-reusing-pw = Pare de reutilizar as mesmas palavras-passe
create-unique-pw = Crie palavras-passe únicas e guarde-as num lugar seguro, tal como um gestor de palavras-passe.
five-myths = 5 mitos sobre os gestores de palavras-passe
create-a-fxa = Crie uma { -brand-fxa } para o seu relatório completo das violações e para receber alertas.
feat-security-tips = Dicas de segurança para proteger as suas contas
feat-sensitive = Pesquisa avançada em violações sensíveis
feat-enroll-multiple = Registar vários e-mails na monitorização de violações
sign-up-for-fxa = Registe-se para uma { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Aparece em { $breachCount } violação conhecida.
       *[other] Aparece em { $breachCount } violações conhecidas.
    }
see-if-breached = Consulte se esteve numa violação de dados online.
check-for-breaches = Consultar violações
find-out-what-hackers-know = Descubra o que os piratas informáticos já sabem sobre si. Saiba como ficar um passo à frente deles.
search-for-your-email = Pesquise pelo seu endereço de e-mail em violações públicas de dados até 2007.
back-to-top = Voltar ao topo
comm-opt-0 = Enviar um e-mail para mim caso um dos meus endereços de e-mail abaixo aparecer numa violação de dados.
comm-opt-1 = Enviar todos alertas de violações para { $primaryEmail }.
stop-monitoring-this = Pare de monitorizar este e-mail.
resend-verification = Reenviar e-mail de verificação
add-new-email = Adicionar um novo endereço de e-mail
send-verification = Enviar ligação de verificação
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Comunicação global
breach-summary = Resumo da violação
show-breaches-for-this-email = Mostrar todas as violações para este e-mail.
link-change-primary = Alterar endereço de e-mail primário
remove-fxm = Remover { -product-name }
remove-fxm-blurb =
    Desativar os alertas de { -product-name }. A sua { -brand-fxa } continuará ativa e poderá receber 
    outras comunicações relacionadas com a conta.
manage-email-addresses = Gerir endereços de e-mail
latest-breach-link = Veja se esteve nesta violação
welcome-back = Bem-vindo(a) de volta, { $userName }!
welcome-user = Bem-vindo(a), { $userName }!
breach-alert-subject = { -product-name } encontrou o seu e-mail numa nova violação de dados.
your-info-was-discovered-headline = Os seus dados foram descobertos numa nova violação de dados.
your-info-was-discovered-blurb =
    Registou-se para receber alertas do { -product-name } 
    quando o seu e-mail aparecer numa violação de dados. Veja o que nós sabemos sobre esta violação.
what-to-do-after-breach = O que fazer depois de uma violação de dados:
ba-next-step-1 = Altere a sua palavra-passe para uma palavra-passe forte e única.
ba-next-step-blurb-1 =
    Uma palavra-passe forte utiliza uma combinação de letras maiúsculas e minúsculas, 
    carateres especiais e números. Não contem informações pessoais tais como 
    a sua morada, data de nascimento ou apelidos.
ba-next-step-2 = Nunca mais volte a utilizar a palavra-se exposta.
ba-next-step-blurb-2 =
    Os cibercriminosos poderão encontrar a sua palavra-passe na "dark web" e utilizá-la 
    para iniciar a sessão nas suas outras contas. O melhor modo para proteger as suas 
    contas é utilizar palavras-passe únicas para cada uma.
ba-next-step-3 = Obtenha ajuda para criar melhores palavras-passe e as manter seguras.
ba-next-step-blurb-3 =
    Utilize um gestor de palavras-passe para criar palavras-passe fortes e únicas. Os gestores de palavras-passe guardam 
    com segurança todas as suas credenciais para que possa aceder às mesmas em todos os seus dispositivos.
faq1 = Eu não reconheço esta empresa ou website. Por que é que eu estou nesta violação?
faq2 = Porque é que demorou tanto para me notificarem desta violação?
faq3 = Como é que eu sei que é um e-mail legitimo do { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] ENCONTRADA { $breachCount } NOVA VIOLAÇÃO
       *[other] ENCONTRADAS { $breachCount } NOVAS VIOLAÇÕES
    }
sign-up-headline-1 = Receba alertas atuais com uma { -brand-fxa }.
account-not-required = O navegador { -brand-name } não é obrigatório para uma { -brand-fxa }. Poderá receber informações sobre os serviços da { -brand-Mozilla }.
get-alerted = Receba alertas sobre novas violações.
was-your-info-exposed = A sua informação foi exposta na violação de dados de { $breachName }?
find-out-if = Saiba se os seus dados foram expostos nesta violação.
fb-not-comp = Este e-mail não apareceu na violação { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Contudo, este apareceu em { $breachCount } outra violação.
       *[other] Contudo, este apareceu em { $breachCount } outras violações
    }
fb-comp-only = Este e-mail apareceu na violação { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Este e-mail apareceu em { $breachCount } violação de dados conhecida, incluindo { $breachName }.
       *[other] Este e-mail apareceu em { $breachCount } violações de dados conhecidas, incluindo { $breachName }.
    }
no-other-breaches-found = Nenhuma outra violação encontrada a partir de uma pesquisa básica.
no-results-blurb = Desculpe, esta violação não está na nossa base de dados.
all-breaches-headline = Todas as violações no { -product-name }
search-breaches = Procurar por violações
# "Appears in-page as: Showing: All Breaches"
currently-showing = A mostrar:
all-breaches = Todas as violações

## Updated error messages

error-bot-headline = Pesquisas temporariamente suspensas
error-bot-blurb =
    Nós estamos preocupados que seja um "bot" porque pesquisou 
    vários endereços de e-mail num curto espaço de tempo. Por agora, as novas 
    pesquisas estão bloqueadas. Pode tentar novamente mais tarde.
error-csrf-headline = A sessão expirou
error-csrf-blurb = Selecione o seu botão de retroceder do seu navegador, recarregue a página e tente novamente.
error-invalid-unsub = Como cancelar a subscrição dos alertas do { -product-name }
error-invalid-unsub-blurb =
    Terá de cancelar a subscrição a partir de um dos 
    e-mails que o { -product-name } lhe enviou. Procure na sua caixa de correio por mensagens 
    de { -brand-team-email }. Selecione a ligação de cancelamento da subscrição no final da mensagem.
login-link-pre = Tem uma conta?
login-link = Iniciar sessão
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Endereço de email a ser monitorizado
       *[other] Endereços de email a serem monitorizados
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Brecha de dados expôs a sua informação
       *[other] Brechas de dados expuseram a sua informação
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Palavra-passe exposta em todas as brechas
       *[other] Palavras-passe expostas em todas as brechas
    }
# Button
see-additional-breaches = Ver brechas adicionais
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Ver todas as brechas
scan-results-known-breaches =
    { $breachCount ->
        [one] Este email apareceu numa brecha de dados conhecida.
       *[other] Este email apareceu em { $breachCount } brechas de dados conhecidas.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Resultados para: { $userEmail }
other-monitored-emails = Outros emails monitorizados
email-verification-required = Verificação de email requerida
fxa-primary-email = Email do { -brand-fxa } - Primário
what-is-a-website-breach = O que é uma violação do website?
website-breach-blurb = Uma violação de dados do website ocorre quando os cibercriminosos roubam, copiam ou expõem a informação pessoal das contas online. Geralmente, é a consequência dos piratas informáticos encontrarem um ponto fraco na segurança do website. As violações também podem acontecer quando a informação de contas é divulgada acidentalmente.
security-tips-headline = Dicas de segurança para se proteger contra hackers
steps-to-protect = Passos a tomar para proteger a sua identidade online
take-further-steps = Mais passos para proteger a sua identidade
alert-about-new-breaches = Alertar-me acerca de novas brechas
see-if-youve-been-part = Veja se fez parte de uma violação de dados online.
get-ongoing-breach-monitoring = Obtenha a monitorização de violações atuais para múltiplos endereços de e-mail.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Descobrir
new-unsub-error = Terá de cancelar a subscrição de um dos e-mails que o { -product-name } lhe enviou.
other-known-breaches-found =
    { $breachCount ->
        [one] Contudo, este apareceu em { $breachCount } outra violação conhecida.
       *[other] Contudo, este apareceu em { $breachCount } outras violações conhecidas.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informação adicional, incluindo:
# Title
email-addresses-title = Endereços de e-mail
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = Em { $breachDate }, { $breachTitle } sofreu uma violação. Assim que a violação foi descoberta e confirmada, esta foi adicionada à nossa base de dados em { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name } - Preferências
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Sessão iniciada como: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrar por categoria:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Enviar alertas de violação para o endereço de e-mail afetado
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Existe um modo para proteger a sua privacidade. Registe-se em { -brand-name }.
# Link title
learn-more-link = Saber mais.
