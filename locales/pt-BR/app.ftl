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
layout-support = Suporte
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Sobre os alertas do Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Diga o que achou
terms-and-privacy = Termos e Privacidade
error-could-not-add-email = Não foi possível adicionar endereço de e-mail ao banco de dados.
error-not-subscribed = Este endereço de e-mail não está cadastrado no { -product-name }
error-hibp-throttled = Conexões em excesso para o { -brand-HIBP }
error-hibp-connect = Falha ao conectar com o { -brand-HIBP }.
error-hibp-load-breaches = Não foi possível carregar os vazamentos.
hibp-notify-email-subject = Alerta do { -product-name }: Sua conta foi envolvida em um vazamento.
home-title = { -product-name }
home-not-found = Página não encontrada.
oauth-invalid-session = Sessão inválida
oauth-confirmed-title = { -product-name }: Cadastrado
scan-title = { -product-name }: Resultados da Análise
user-add-invalid-email = Endereço de e-mail inválido
user-add-email-verify-subject = Confirme seu cadastro no { -product-name }.
user-add-title = { -product-name }: Confirmar endereço de e-mail
error-headline = Erro
user-verify-token-error = Token de verificação é necessário.
user-verify-email-report-subject = Seu relatório do { -product-name }
user-verify-title = { -product-name }: Cadastrado
user-unsubscribe-token-error = Um token é necessário para se descadastrar.
user-unsubscribe-token-email-error = Para se descadastrar são necessários um token e um hash de e-mail.
user-unsubscribe-title = { -product-name }: Descadastrar
user-unsubscribe-survey-title = { -product-name }: Pesquisa Sobre Descadastro
user-unsubscribed-title = { -product-name }: Descadastrado

## Password Tips

pwt-section-headline = Senhas Fortes = Mais Proteção
pwt-section-subhead = Suas informações pessoais são tão seguras quanto suas senhas
pwt-section-blurb = Suas senhas protegem mais do que suas contas. Elas protegem cada fragmento de informação pessoal que reside nelas. Hackers contam com maus hábitos dos usuários, como usar a mesma senha em várias contas, ou usar termos comuns (como senha123). Assim, se invadirem uma conta, eles podem invadir muitas outras. Veja como proteger melhor suas contas.
pwt-headline-1 = Use uma senha diferente para cada conta
pwt-summary-1 =
    Reusar a mesma senha em vários lugares facilita muito o roubo de identidade.
    Qualquer pessoa que saiba a senha pode entrar em todas as suas contas.
pwt-headline-2 = Crie senhas fortes e difíceis de adivinhar
pwt-summary-2 =
    Hackers usam milhares de senhas comuns para tentar adivinhar a sua.
    Quanto mais longa e aleatória for a sua senha, mais difícil ela será de ser adivinhada.
pwt-headline-3 = Trate perguntas de segurança como senhas extras
pwt-summary-3 =
    Sites não verificam se suas respostas são reais, eles apenas verificam se elas coincidem com as respostas dadas no momento do cadastro.
    Crie respostas longas e aleatórias e as armazene em algum lugar seguro.
pwt-headline-4 = Tenha ajuda para lembrar de suas senhas
pwt-summary-4 =
    Gerenciadores de senha como 1Password, Lastpass, Dashlane e Bitwarden geram senhas fortes e únicas.
    Eles também as armazenam com segurança e as preenchem nos sites para você
pwt-headline-5 = Adicione segurança extra com autenticação em duas etapas
pwt-summary-5 =
    Autenticação em duas etapas exige uma informação adicional (como um código enviado no momento via mensagem de texto) para entrar na sua conta.
    Mesmo que alguém tenha sua senha, não conseguirá entrar.
pwt-headline-6 = Cadastre-se nos alertas do { -product-name-nowrap }
pwt-summary-6 = Vazamentos de dados de sites aumentam a cada dia. Assim que um novo vazamento for adicionado à nossa base de dados, o { -product-name-nowrap } lhe enviará um alerta - assim você pode tomar providências e proteger sua conta.
landing-headline = Seu direito de ficar seguro contra hackers começa aqui.
landing-blurb =
    O { -product-name-nowrap } lhe equipa com ferramentas para manter suas informações pessoais seguras.
    Descubra o que hackers já sabem sobre você e aprenda como estar sempre um passo à frente deles.
scan-label = Veja se você foi envolvido em um vazamento de dados.
scan-placeholder = Digite um endereço de e-mail
scan-privacy = Seu endereço de e-mail não será armazenado.
scan-submit = Procure seu endereço de e-mail
scan-another-email = Analise outro endereço de e-mail
scan-featuredbreach-label = Descubra se sua conta em <span class="bold">{ $featuredBreach }</span> foi comprometida.
sensitive-breach-email-required = A brecha contém informações sensíveis. É necessário uma confirmação por e-mail.
scan-error = Precisa ser um endereço de e-mail válido.
signup-banner-headline = O { -product-name-nowrap } detecta ameaças contra suas contas online.
signup-banner-blurb =
    Seu relatório detalhado do { -product-name-nowrap } mostra se informações das suas contas online foram vazadas ou roubadas.
    Também vamos lhe avisar caso suas contas apareçam em novos vazamentos.
download-firefox-bar-blurb = O { -product-name-nowrap } é trazido até você pelo <span class="nowrap"> novo { -brand-name }</span>.
download-firefox-bar-link = Baixe o { -brand-name } agora
download-firefox-banner-blurb = Tome as rédeas do seu navegador
download-firefox-banner-button = Baixe o { -brand-name }
signup-modal-headline = Cadastre-se no { -product-name-nowrap }
signup-modal-blurb = Cadastre-se para ter acesso ao seu relatório completo, alertas quando novos vazamentos ocorrerem e dicas de segurança do { -product-name-nowrap }.
signup-modal-close = Fechar
get-your-report = Veja seu Relatório
signup-modal-verify-headline = Confirme seu cadastro
signup-modal-verify-blurb = Enviamos um link de verificação para <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Este link irá expirar em 24 horas.
signup-modal-verify-resend = Não apareceu na caixa de entrada nem no spam? Reenviar.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Enviado!
signup-with-fxa = Cadastre-se com um Conta { -brand-name }
form-signup-placeholder = Digite o endereço de e-mail
form-signup-checkbox = Fique informado sobre a { -brand-Mozilla } e o { -brand-name }.
sign-up = Cadastre-se
form-signup-error = Precisa ser um endereço de e-mail válido
no-breaches-headline = Por enquanto tudo certo.
found-breaches-headline = Suas informações estão presentes em um vazamento de dados.
no-breaches =
    Seu endereço de e-mail não aparece em nossa análise básica.
    Isso é uma boa notícia, mas vazamentos podem acontecer a qualquer hora e você pode fazer mais para se proteger.
    Cadastre-se no { -product-name-nowrap } para obter um relatório completo, receber alertas quando novos vazamentos acontecerem e dicas para proteger suas senhas.
featured-breach-results =
    { $breachCount ->
        [0] Sua conta aparece no vazamento de <span class="bold">{ $featuredBreach }</span>, mas não aparece em nenhum outro vazamento conhecido.
        [one] Sua conta apareceu no vazamento de <span class="bold">{ $featuredBreach }</span>, e também em um outro vazamento.
       *[other] Sua conta apareceu no vazamento de <span class="bold">{ $featuredBreach }</span> e também em { $breachCount } outros vazamentos.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Sua conta não apareceu no vazamento de <span class="bold">{ $featuredBreach }</span>, mas apareceu em um outro vazamento.
       *[other] Sua conta não apareceu no vazamento de <span class="bold">{ $featuredBreach }</span>, mas apareceu em { $breachCount } outros vazamentos.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Sua conta apareceu em { $breachCount } vazamento.
       *[other] Contas associadas a este endereço de e-mail apareceram nos seguintes { $breachCount } vazamentos.
    }
show-more-breaches = Mostar mais
what-to-do-headline = O que fazer quando suas informações são expostas em um vazamento de dados
what-to-do-subhead-1 = Troque suas senhas, até nas contas antigas
what-to-do-blurb-1 =
    Se você não consegue acessar sua conta, entre em contato com o site perguntando como recuperar ou encerrar sua conta.
    Vê uma conta que não reconhece? O site pode ter trocado de nome ou alguém usou seu endereço de e-mail para criar uma conta.
what-to-do-subhead-2 = Se você utiliza a senha vazada em outras contas, troque-a
what-to-do-blurb-2 =
    Hackers podem tentar reutilizar sua senha exposta para acessar outras contas.
    Crie uma senha diferente para cada site, especialmente para sua conta bancária,
    e-mail e outros sites onde você salva informações pessoais.
what-to-do-subhead-3 = Tome providências extras para proteger suas contas financeiras
what-to-do-blurb-3 =
    A maioria dos vazamentos expõe apenas endereços de e-mail e senhas, mas alguns incluem informações financeiras sensíveis.
    Se sua conta bancária ou números de cartão de crédito foram expostos, alerte seu banco sobre possíveis fraudes e monitore seus extratos por cobranças que você não reconhece.
what-to-do-subhead-4 = Obtenha ajuda para criar boas senhas e mantê-las seguras.
what-to-do-blurb-4 = Gerenciadores de senhas como 1Password, LastPass, Dashlane e Bitwarden geram senhas fortes, as armazenam com segurança e as preenchem automaticamente em sites para você.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data do vazamento:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Contas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dados comprometidos:
confirmed = Confirmado!<br />Você está cadastrado!
confirmed-blurb = O { -product-name-nowrap } irá enviar um relatório completo por e-mail para você em breve, e você receberá um alerta se sua conta aparecer em novos vazamentos.
confirmed-social-blurb = Se seus dados foram vazados, é possível que os dos seus amigos, família e conexões virtuais tenham sido afetados também. Compartilhe com eles o { -product-name-nowrap }.
unsub-headline = Descadastrar do { -product-name-nowrap }
unsub-blurb = Isso irá remover seu endereço de e-mail da lista do { -product-name-nowrap } e você não irá mais receber alertas quando novos vazamentos forem anunciados.
unsub-button = Descadastrar
unsub-survey-headline = Você não está mais cadastrado
unsub-survey-blurb =
    Seu endereço de e-mail foi descadastrado do { -product-name-nowrap }. Obrigado por usar este serviço.
    Você responderia uma pergunta sobre sua experiência?
unsub-survey-form-label = Por que você está se descadastrando dos alertas do { -product-name-nowrap }?
unsub-reason-1 = Eu não acho que os alertas tornam meus dados mais seguros
unsub-reason-2 = Eu recebo e-mails demais do { -product-name-nowrap }
unsub-reason-3 = Eu não acho que o serviço tenha valor
unsub-reason-4 = Eu já fiz o necessário para proteger minhas contas
unsub-reason-5 = Estou usando outros serviços para monitorar minhas contas
unsub-reason-6 = Nenhuma resposta acima
unsub-survey-thankyou = Obrigado por sua opinião
unsub-survey-error = Por favor selecione uma resposta:
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Compartilhar
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tuitar
download-firefox-quantum = Baixar o { -brand-Quantum }
download-firefox-mobile = Baixar o { -brand-name } Mobile
# Features here refers to Firefox browser features. 
features = Funcionalidades
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Partes deste conteúdo são &#x24B8; 1998-2018 por colaboradores individuais do mozilla.org<br />
    Conteúdo disponível sob uma licença <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Dados de vazamentos fornecidos por { $hibp-link }
site-description = Suas contas foram vazadas ou roubadas em um vazamento de dados? Descubra com o { -product-name }. Pesquise nossa base de dados e cadastre-se para receber alertas.
confirmation-headline = Seu relatório do { -product-name } está a caminho.
confirmation-blurb = Vazamentos de dados podem afetar qualquer pessoa. Divulgue isso, para que seus amigos e familiares possam verificar e saber se suas contas online estão seguras.
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Outro
share-twitter = A maioria das pessoas tem cerca de 100 contas online. Alguma das suas foi exposta em um vazamento de dados? Descubra.
share-facebook-headline = Descubra se você foi vítima de um vazamento de dados
share-facebook-blurb = Suas contas online foram expostas em um vazamento de dados?
og-site-description = Descubra se você foi vítima de um vazamento de dados com o { -product-name }. Cadastre-se para receber alertas sobre futuros vazamentos e receber dicas para manter suas contas seguras.
mozilla-security-blog = Blog de segurança do { -brand-Mozilla }
show-all = Mostrar tudo
fxa-signup-banner-blurb = Cadastre uma { -brand-fxa } para receber seu relatório detalhado e alertas sobre novos vazamentos de dados.
fxa-scan-label = Veja se você apareceu em um vazamento de dados.
fxa-welcome-blurb = Tudo pronto para você receber alertas se { $userEmail } aparecer em um vazamento de dados.
sign-in = Entrar
sign-out = Sair
see-full-report = Ver relatório completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gerenciar { -brand-fxa }
fxa-download-firefox-bar-link = Baixe agora
user-fb-compromised-headline = { $userEmail } apareceu no vazamento de dados de { $breachName }.
guest-fb-compromised-headline = Este e-mail apareceu no vazamento de dados de { $breachName }.
user-zero-breaches-headline = { $userEmail } não apareceu em nenhum vazamento de dados.
guest-zero-breaches-headline = Este e-mail não apareceu em nenhum vazamento de dados.
