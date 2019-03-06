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
user-unsubscribe-survey-title = { -product-name } : Pesquisa de subscrição cancelada
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
scan-placeholder = Introduzir endereço de email
scan-privacy = O seu email não será armazenado.
scan-submit = Pesquisar o seu email
scan-another-email = Verificar outro endereço de email
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
form-signup-placeholder = Introduzir email
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
fxa-download-firefox-banner-blurb = Um carregamento de páginas melhor e mais rápido que utiliza menos memória computacional.
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
user-no-breaches-blurb = Alertaremos-lhe se este endereço de email aparecer numa nova brecha.
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
