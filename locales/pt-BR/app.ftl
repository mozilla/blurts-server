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
layout-support = Suporte
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Sobre os alertas do Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Diga o que achou
terms-and-privacy = Termos e Privacidade
error-scan-page-token = Você tentou analisar endereços de e-mail demais em um curto espaço de tempo. Por motivos de segurança, bloqueamos temporariamente novas buscas suas. Você poderá tentar novamente mais tarde.
error-could-not-add-email = Não foi possível adicionar endereço de e-mail ao banco de dados.
error-not-subscribed = Este endereço de e-mail não está cadastrado no { -product-name }
error-hibp-throttled = Conexões em excesso para o { -brand-HIBP }
error-hibp-connect = Falha ao conectar com o { -brand-HIBP }.
error-hibp-load-breaches = Não foi possível carregar os vazamentos.
error-must-be-signed-in = Você precisa entrar na sua { -brand-fxa }.
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
    Gerenciadores de senhas como 1Password, Lastpass, Dashlane e Bitwarden geram senhas fortes e únicas.
    Eles também as armazenam com segurança e as preenchem em sites para você
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
signup-with-fxa = Cadastre-se com uma Conta { -brand-name }
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
fxa-unsub-headline = Descadastrar de alertas do { -product-name }.
fxa-unsub-blurb =
    Você não receberá mais alertas do { -product-name }.
    Sua { -brand-fxa } permanecerá ativa e você pode receber outras
    comunicações relacionadas à conta.
unsub-survey-form-label = Por que você está se descadastrando dos alertas do { -product-name-nowrap }?
unsub-reason-1 = Eu não acho que os alertas tornam meus dados mais seguros
unsub-reason-2 = Eu recebo e-mails demais do { -product-name-nowrap }
unsub-reason-3 = Eu não acho que o serviço tenha valor
unsub-reason-4 = Eu já fiz o necessário para proteger minhas contas
unsub-reason-5 = Estou usando outros serviços para monitorar minhas contas
unsub-reason-6 = Nenhuma resposta acima
unsub-survey-thankyou = Obrigado por sua opinião
unsub-survey-error = Por favor selecione uma resposta:
unsub-survey-headline-v2 = Você foi descadastrado.
unsub-survey-blurb-v2 =
    Você não receberá mais alertas do { -product-name }.
    Tem um momento para responder uma pergunta sobre sua experiência?
unsub-survey-button = Enviar resposta
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
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Mostrar tudo
fxa-landing-blurb =
    Descubra o que hackers já sabem sobre você,
    e saiba como estar um passo à frente deles.
fxa-scan-label = Veja se você apareceu em um vazamento de dados.
fxa-welcome-headline = Boas-vindas ao { -product-name }.
fxa-welcome-blurb = Tudo pronto para você receber alertas se { $userEmail } aparecer em um vazamento de dados.
fxa-scan-another-email = Quer verificar outro e-mail?
# Search Firefox Monitor
fxa-scan-submit = Pesquisar no { -product-name }
sign-up-to-check = Cadastre-se para verificar
sign-in = Entrar
sign-out = Sair
full-report-headline = Seu relatório do { -product-name }
see-full-report = Ver relatório completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gerenciar { -brand-fxa }
fxa-download-firefox-bar-blurb = Produzido pela { -brand-name }. 2x mais rápido. Usa 30% menos memória que o { -brand-Chrome }.
fxa-download-firefox-bar-link = Baixe agora
fxa-download-firefox-banner-blurb = Carregamento de páginas melhor e mais rápido que usa menos memória do computador.
user-fb-compromised-headline = { $userEmail } apareceu no vazamento de dados de { $breachName }.
guest-fb-compromised-headline = Este e-mail apareceu no vazamento de dados de { $breachName }.
user-zero-breaches-headline = { $userEmail } não apareceu em nenhum vazamento de dados.
guest-zero-breaches-headline = Este e-mail não apareceu em nenhum vazamento de dados.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } apareceu em 1 vazamento de dados.
       *[other] { $userEmail } apareceu em { $breachCount } vazamentos de dados.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Este e-mail apareceu em 1 vazamento de dados.
       *[other] Este e-mail apareceu em { $breachCount } vazamentos de dados.
    }
user-no-breaches-blurb = Alertaremos você caso este endereço de e-mail apareça em um novo vazamento.
guest-no-breaches-blurb =
    Para ver se este e-mail aparece em vazamentos sensíveis, crie uma { -brand-fxa }. 
    Também lhe alertaremos se este endereço aparecer em novos vazamentos de dados.
user-one-breach-blurb = Este vazamento expôs as seguintes informações pessoais.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Seu e-mail também apareceu em { $breachCount } outro vazamento.
       *[other] Seu e-mail também apareceu em { $breachCount } outros vazamentos.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Este e-mail também apareceu em { $breachCount } outro vazamento.
       *[other] Este e-mail também apareceu em { $breachCount } outros vazamentos.
    }
user-fb-compromised-single =
    Este vazamento expôs as seguintes informações pessoais. Se ainda não fez, 
    mude suas senhas.
user-generic-fb-compromised-single = Este vazamento expôs as seguintes informações pessoais.
guest-fb-compromised-single-v2 =
    Este vazamento expôs as seguintes informações pessoais.
    Crie uma { -brand-fxa } gratuita para receber seu relatório completo de vazamentos anteriores, alertas de novos vazamentos
    e informações sobre outros serviços da { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Este e-mail também apareceu em { $breachCount } outro vazamento. Crie uma { -brand-fxa } gratuita para receber seu relatório completo de vazamentos anteriores, alertas de novos vazamentos
            e informações sobre outros serviços da { -brand-Mozilla }.
       *[other]
            Este e-mail também apareceu em { $breachCount } outros vazamentos. Crie uma { -brand-fxa } gratuita para receber seu relatório completo de vazamentos anteriores, alertas de novos vazamentos
            e informações sobre outros serviços da { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Você não estava no vazamento de { $breachName }, mas encontramos este endereço de e-mail em outro.
       *[other] Você não estava no vazamento de { $breachName }, mas encontramos este endereço de e-mail em outros.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Este e-mail não estava no vazamento de { $breachName }, mas foi encontrado em outro.
       *[other] Este e-mail não estava no vazamento de { $breachName }, mas foi encontrado em outros.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Este e-mail não estava no vazamento de { $breachName }, mas foi encontrado em outro. 
            Crie uma { -brand-fxa } gratuita para receber seu relatório completo de vazamentos anteriores, alertas de novos vazamentos e informações sobre outros serviços da { -brand-Mozilla }.
       *[other]
            Este e-mail não estava no vazamento de { $breachName }, mas foi encontrado em outros. 
            Crie uma { -brand-fxa } gratuita para receber seu relatório completo de vazamentos anteriores, alertas de novos vazamentos e informações sobre outros serviços da { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Este vazamento expôs as seguintes informações pessoais. Se ainda não fez, mude sua senha.
       *[other] Estes vazamentos expuseram as seguintes informações pessoais. Se ainda não fez, mude suas senhas.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Este vazamento expôs as seguintes informações pessoais.
       *[other] Estes vazamentos expuseram as seguintes informações pessoais.
    }
have-an-account = Já tem uma conta?
signup-banner-sensitive-blurb =
    Descubra os que hackers já sabem sobre você, e saiba como 
    estar um passo à frente deles. Receba um alerta caso sua conta 
    apareça em novos vazamentos de dados.
fxa-pwt-section-blurb =
    As senhas protegem todas as informações pessoais de suas contas online. 
    Os hackers contam com maus hábitos, como usar a mesma senha em todo lugar, 
    ou usar frases comuns, de modo que se conseguirem invadir uma conta, 
    podem invadir várias.
fxa-pwt-summary-2 =
    Senhas curtas, de uma só palavra, são fáceis para os hackers adivinharem. 
    Use pelo menos duas palavras e uma combinação de letras, dígitos e caracteres especiais.
fxa-pwt-summary-4 =
    Gerenciadores de senhas como 1Password, LastPass, Dashlane e Bitwarden armazenam 
    suas senhas e as preenchem em sites para você. Eles até ajudam a criar senhas fortes.
fxa-pwt-summary-6 =
    Vazamentos de dados vêm aumentando. Se suas informações pessoais aparecerem em um novo vazamento do dados, 
    o { -product-name } envia um alerta — assim você pode tomar providências e proteger suas contas.
fxa-what-to-do-blurb-1 =
    Se não consegue entrar na conta, entre em contato com o site para saber como atualizar. 
    Vê uma conta que não reconhece? Seus dados podem ter sido vendidos 
    ou redistribuídos. Também pode ser uma conta que você esqueceu que 
    criou, ou uma empresa que mudou de nome.
fxa-what-to-do-subhead-2 = Pare de usar a senha exposta, e mude em todo lugar que a usou.
fxa-wtd-blurb-2 =
    Hackers podem tentar usar esta mesma senha e seu e-mail para invadir outras contas.  
    Crie uma senha diferente e única para cada conta, especialmente para sua conta de banco, 
    e-mail e outros sites onde você salva informações pessoais.
fxa-what-to-do-blurb-3 =
    A maioria dos vazamentos só expõem e-mails e senhas, mas alguns incluem informações financeiras confidenciais. 
    Se números de sua conta de banco ou cartão de crédito foram expostos, alerte seu banco para a possibilidade de fraudes. 
    Monitore o extrato para ver se há cobranças que você não reconhece.
fxa-what-to-do-subhead-4 = Receba ajuda para lembrar todas as suas senhas e mantê-las em segurança.
fxa-what-to-do-blurb-4 =
    Gerenciadores de senhas como 1Password, LastPass, Dashlane e Bitwarden armazenam suas 
    senhas com segurança e as preenchem em sites para você. Use um gerenciador de senhas 
    em seu celular e no computador, assim não precisará lembrar todas elas.
fb-landing-headline = Suas informações foram expostas no vazamento de dados de { $breachName }?
copyright = Parcelas deste conteúdo são © 1999-{ $year } por colaboradores individuais do mozilla.org.
content-available = Conteúdo disponível sob uma licença Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Cadastre-se para receber alertas
sign-up-for-fxa-alerts = Cadastre-se para receber alertas do { -product-name }.
create-free-account =
    Crie uma { -brand-fxa } gratuita para receber seu relatório completo de vazamentos anteriores,
    alertas de novos vazamentos e informações sobre outros serviços da { -brand-Mozilla }.
get-your-report-and-sign-up = Receba seu relatório e cadastre-se para receber alertas.
# Link title
frequently-asked-questions = Perguntas frequentes
about-firefox-monitor = Sobre o { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Preferências
# Link title.
home = Início
# Link title
breaches = Vazamentos
# Link title
security-tips = Dicas de segurança
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Abrir navegação na { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMO VAZAMENTO ADICIONADO
# Link title
more-about-this-breach = Mais sobre este vazamento
take-control = Assuma de volta o controle sobre seus dados pessoais.
cant-stop-hackers = Você não pode impedir hackers de hackear. Mas pode evitar hábitos ruins que facilitam o trabalho deles.
read-more-tips = Leia mais dicas de segurança
how-hackers-work = Entenda como os hackers trabalham
monitor-your-online-accounts = Inscreva-se no monitoramento de violações com uma { -brand-fxa }.
stay-alert = Receba alertas sobre novos vazamentos
if-your-info = Se suas informações surgirem em uma nova violação de dados, enviaremos um alerta.
search-all-emails = Pesquise vazamentos de todas as suas contas de e-mail e receba alertas de novas ameaças.
monitor-several-emails = Monitore vários e-mails
take-action = Tome atitude para proteger suas contas
keep-your-data-safe = Descubra o que você precisa fazer para manter seus dados protegidos contra criminosos cibernéticos.
website-breach = Vazamento de site
sensitive-breach = Vazamento de site sensível
data-aggregator-breach = Vazamento de agregador de dados
unverified-breach = Vazamento não verificado
spam-list-breach = Vazamento de lista de spam
website-breach-plural = Vazamentos de sites
sensitive-breach-plural = Vazamentos sensíveis
data-aggregator-breach-plural = Vazamentos de agregadores de dados
unverified-breach-plural = Vazamentos não verificados
spam-list-breach-plural = Vazamentos de listas de spam
what-data = Que dados foram comprometidos:
sensitive-sites = Com o { -product-name } trata sites sensíveis?
sensitive-sites-copy =
    O { -product-name } só revela contas associadas a esses 
    tipos de vazamento após um endereço de e-mail ter sido validado. Significa que você é 
    a única pessoa que pode ver se suas informações apareceram em um vazamento (a menos que
    mais alguém tenha acesso à sua conta de e-mail).
delayed-reporting-headline = Por que demorou tanto para reportar este vazamento?
delayed-reporting-copy = Às vezes demora meses ou anos para que credenciais expostas em um vazamento de dados apareça na dark web. Vazamentos são adicionados ao nosso banco de dados assim que são descobertos e confirmados.
about-fxm-headline = Sobre o { -product-name }
about-fxm-blurb = O { -product-name } avisa se suas contas online estiveram envolvidas em um vazamento de dados. Descubra se você esteve em algum vazamento de dados, receba alertas sobre novos vazamentos e tome medidas para proteger suas contas online. O { -product-name } é fornecido pela { -brand-Mozilla }.
fxm-warns-you =
    O { -product-name } avisa se seu endereço de e-mail foi exposto em um
    vazamento de dados online. Veja se suas informações foram expostas,
    aprenda como proteger melhor suas contas online e receba alertas
    caso seu endereço de e-mail apareça em um novo vazamento.
# How Firefox Monitor works
how-fxm-works = Como o { -product-name } funciona
how-fxm-1-headline = Faça uma pesquisa básica
how-fxm-1-blurb =
    Pesquise seu endereço de e-mail em vazamentos de dados públicos desde 2007.
    Esta pesquisa básica traz à tona a maioria dos vazamentos de dados,
    mas não os que contêm informações pessoais sensíveis.
how-fxm-2-headline = Cadastre-se para ter monitoramento de vazamentos
how-fxm-2-blurb = Crie uma { -brand-fxa } para monitorar seu e-mail em vazamentos futuros. Após confirmar seu e-mail, receberá também um relatório completo de vazamentos já detectados, incluindo vazamentos sensíveis.
how-fxm-3-headline = Receba notificações em seu navegador
how-fxm-3-blurb =
    Se você usar o { -brand-name }, receberá uma notificação se visitar 
    um site que foi vazado. Descubra imediatamente se foi vítima desse 
    vazamento e o que você pode fazer a respeito.
wtd-after-website = O que fazer após um vazamento de site
wtd-after-data-agg = O que fazer após um vazamento de agregador de dados
what-is-data-agg = O que é um agregador de dados?
what-is-data-agg-blurb =
    Agregadores de dados, ou negociadores de dados, coletam informações de registros públicos e 
    também compram de outras empresas. Eles reúnem esses dados para vender para empresas com 
    propósito de marketing. As vítimas desses vazamentos têm menor probabilidade de sofrer fraudes 
    financeiras, mas hackers podem usar esses dados para se fazer passar por elas ou traçar seu perfil.
protect-your-privacy = Proteja sua privacidade online
no-pw-to-change = Diferente de um vazamento de site, não há senha a alterar.
avoid-personal-info = Evite usar informações pessoais em senhas
avoid-personal-info-blurb = É fácil encontrar online datas de aniversários, endereços e nomes de membros da família. Deixe essas palavras de fora das suas senhas.

## What to do after data breach tips

change-pw = Mude sua senha
even-for-old = Mesmo em contas antigas, é importante atualizar suas senhas.
make-new-pw-unique = Torne a nova senha diferente e única
strength-of-your-pw = A força de suas senhas impacta diretamente sua segurança online.
create-strong-passwords = Como criar senhas fortes
stop-reusing-pw = Pare de reusar as mesmas senhas
create-unique-pw = Crie senhas únicas e as salve em algum lugar seguro, como um gerenciador de senhas.
five-myths = 5 mitos sobre gerenciadores de senhas
create-a-fxa = Crie uma { -brand-fxa } para obter seu relatório completo de vazamentos e receber alertas.
feat-security-tips = Dicas de segurança para proteger suas contas
feat-sensitive = Pesquisa avançada em vazamentos sensíveis
feat-enroll-multiple = Inscreva vários e-mails na monitoração de vazamentos
sign-up-for-fxa = Crie uma { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Aparece em { $breachCount } vazamento conhecido.
       *[other] Aparece em { $breachCount } vazamentos conhecidos.
    }
see-if-breached = Veja se você esteve em um vazamento de dados online.
check-for-breaches = Verificar se há vazamentos
find-out-what-hackers-know = Descubra o que os hackers já sabem sobre você. Saiba como estar um passo à frente deles.
search-for-your-email = Pesquise seu endereço de e-mail em vazamentos de dados públicos desde 2007.
back-to-top = Voltar ao início
comm-opt-0 = Enviar e-mail para mim se um de meus endereços de e-mail abaixo aparecer em um vazamento de dados.
comm-opt-1 = Enviar todos os alertas de vazamento para { $primaryEmail }.
stop-monitoring-this = Parar de monitorar este e-mail.
resend-verification = Enviar e-mail de verificação novamente
add-new-email = Adicionar um novo endereço de e-mail
send-verification = Enviar link de confirmação
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Resumo do vazamento
show-breaches-for-this-email = Mostrar todos os vazamentos deste e-mail.
link-change-primary = Alterar endereço de e-mail principal
remove-fxm = Remover o { -product-name }
remove-fxm-blurb =
    Desativar alertas do { -product-name }. Sua { -brand-fxa } continuará ativa e você pode receber
    outras comunicações relacionadas à conta.
manage-email-addresses = Gerenciar endereços de e-mail
latest-breach-link = Veja se você estava neste vazamento
welcome-back = Bom ver você de volta, { $userName }!
welcome-user = Boas-vindas, { $userName }!
breach-alert-subject = O { -product-name } encontrou seu e-mail em um novo vazamento de dados.
your-info-was-discovered-headline = Suas informações foram descobertas em um novo vazamento de dados.
your-info-was-discovered-blurb =
    Você se cadastrou para receber alertas do { -product-name }
    quando seu e-mail aparecer em um vazamento de dados. Veja o que sabemos sobre este vazamento.
what-to-do-after-breach = O que fazer após um vazamento de dados
ba-next-step-1 = Mude sua senha para uma senha forte e única.
ba-next-step-blurb-1 =
    Uma senha forte usa uma combinação de letras maiúsculas e minúsculas, 
    caracteres especiais e números. Ela não contém informações pessoais como 
    seu endereço, aniversário ou nomes da família.
ba-next-step-2 = Pare completamente de usar aquela senha exposta.
ba-next-step-blurb-2 =
    Criminosos cibernéticos podem encontrar sua senha na dark web e usar 
    para acessar suas outras contas. A melhor maneira de proteger suas contas 
    é usar uma senha única em cada conta.
ba-next-step-3 = Obtenha ajuda para criar senhas melhores e mantê-las protegidas.
ba-next-step-blurb-3 = Use um gerenciador de senhas para criar senhas fortes e únicas. Gerenciadores de senhas armazenam com segurança todas as suas contas, assim você pode acessá-las em todos os seus dispositivos.
faq1 = Não reconheço essa empresa ou site. Por que estou neste vazamento?
faq2 = Por que demorou tanto para me notificar deste vazamento?
faq3 = Como saber se este é um e-mail legítimo do { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NOVO VAZAMENTO ENCONTRADO
       *[other] { $breachCount } NOVOS VAZAMENTOS ENCONTRADOS
    }
sign-up-headline-1 = Receba alertas de violações futuras com uma { -brand-fxa }.
account-not-required = O navegador { -brand-name } não é obrigatório para ter uma { -brand-fxa }. Você pode receber informações sobre serviços da { -brand-Mozilla }.
get-alerted = Seja alertado sobre novos vazamentos.
was-your-info-exposed = Suas informações foram expostas no vazamento de dados de { $breachName }?
find-out-if = Descubra se seus dados foram expostos neste vazamento.
fb-not-comp = Este e-mail não apareceu no vazamento de { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] No entanto, ele apareceu em { $breachCount } outro vazamento.
       *[other] No entanto, ele apareceu em { $breachCount } outros vazamentos.
    }
fb-comp-only = Este e-mail apareceu no vazamento { $breachName }
fb-comp-and-others =
    { $breachCount ->
        [one] Este e-mail apareceu em { $breachCount } vazamento de dados conhecido, incluindo { $breachName }.
       *[other] Este e-mail apareceu em { $breachCount } vazamentos de dados conhecidos, incluindo { $breachName }.
    }
no-other-breaches-found = Nenhum outro vazamento foi encontrado em uma pesquisa básica.
no-results-blurb = Desculpe, aquele vazamento não está em nosso banco de dados.
all-breaches-headline = Todos os vazamentos no { -product-name }
search-breaches = Pesquisar vazamentos
# "Appears in-page as: Showing: All Breaches"
currently-showing = Exibindo:
all-breaches = Todos os vazamentos

## Updated error messages

error-bot-headline = Pesquisas temporariamente suspensas
error-bot-blurb =
    Estamos preocupados, você pode ser um 'bot' porque pesquisou vários 
    endereços de e-mail em um curto período de tempo. No momento você está 
    bloqueado de fazer novas pesquisas. Você pode tentar novamente mais tarde.
error-csrf-headline = A sessão expirou
error-csrf-blurb = Selecione o botão de voltar do seu navegador, recarregue a página e tente novamente.
error-invalid-unsub = Como cancelar a inscrição de alertas do { -product-name }
error-invalid-unsub-blurb =
    Você precisa cancelar a inscrição a partir de um dos e-mails que 
    o { -product-name } enviou a você. Procure na sua caixa de entrada mensagens 
    de { -brand-team-email }. Selecione o link de cancelar inscrição no final do e-mail.
login-link-pre = Já tem uma conta?
login-link = Entre
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Endereço de e-mail sendo monitorado
       *[other] Endereços de e-mail sendo monitorados
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Vazamento de dados expôs suas informações
       *[other] Vazamentos de dados expuseram suas informações
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Senha exposta em todos os vazamentos
       *[other] Senhas expostas em todos os vazamentos
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Vazamento conhecido de dados expôs suas informações
       *[other] Vazamentos conhecidos de dados expuseram suas informações
    }
# Button
see-additional-breaches = Ver vazamentos adicionais
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Ver todos os vazamentos
scan-results-known-breaches =
    { $breachCount ->
        [one] Este e-mail apareceu em 1 vazamento de dados conhecido.
       *[other] Este e-mail apareceu em { $breachCount } vazamentos de dados conhecidos.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Resultados de: { $userEmail }
other-monitored-emails = Outros e-mails monitorados
email-verification-required = Verificação de email é necessária
fxa-primary-email = E-mail da { -brand-fxa } - Principal
what-is-a-website-breach = O que é um vazamento de site?
website-breach-blurb = Um vazamento de dados de site acontece quando criminosos cibernéticos roubam, copiam ou expõem informações pessoais de contas online. Geralmente é resultado de hackers procurando um ponto fraco na segurança do site. Vazamentos também podem acontecer quando informações de contas são vazados por acidente.
security-tips-headline = Dicas de segurança para se proteger de hackers
steps-to-protect = Medidas a tomar para proteger sua identidade online
take-further-steps = Tome medidas adicionais para proteger sua identidade
alert-about-new-breaches = Me alertar sobre novos vazamentos
see-if-youve-been-part = Veja se você foi vítima de um vazamento de dados online.
get-ongoing-breach-monitoring = Tenha monitoramento contínuo de vazamentos para vários endereços de e-mail.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Descobrir
new-unsub-error = Você precisa cancelar a inscrição a partir de um dos e-mails que o { -product-name } enviou.
other-known-breaches-found =
    { $breachCount ->
        [one] No entanto, apareceu em { $breachCount } outro vazamento conhecido.
       *[other] No entanto, apareceu em { $breachCount } outros vazamentos conhecidos.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informações adicionais, incluindo:
# Title
email-addresses-title = Endereços de e-mail
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = Em { $breachDate }, { $breachTitle } sofreu um vazamento. Uma vez que o vazamento foi descoberto e confirmado, ele foi adicionado à nossa base de dados em { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Preferências do { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Acessando como: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrar por categoria:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Enviar alertas de vazamento para os endereços de e-mail afetados
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Existe um meio de proteger sua privacidade. Use o { -brand-name }.
# Link title
learn-more-link = Saiba mais.
email-sent = E-mail enviado!
# Form title
want-to-add = Quer adicionar outro e-mail?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Clique no link de confirmação enviado para { $userEmail } para adicionar ao { -product-name }.
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Gerencie todos os endereços de e-mail nas { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Notificações de alerta de vazamento
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Vazamento adicionado em:
