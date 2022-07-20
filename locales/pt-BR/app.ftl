# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Conta Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##

# “account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-brand-fx-account = Conta Firefox
terms-and-privacy = Termos e Privacidade
GitHub-link-title = GitHub
error-scan-page-token = Você tentou analisar endereços de email demais em um curto espaço de tempo. Por motivos de segurança, bloqueamos temporariamente novas buscas suas. Você poderá tentar novamente mais tarde.
error-could-not-add-email = Não foi possível adicionar endereço de email ao banco de dados.
error-not-subscribed = Este endereço de email não está cadastrado no { -product-name }
error-hibp-throttled = Conexões em excesso para o { -brand-HIBP }
error-hibp-connect = Falha ao conectar com o { -brand-HIBP }.
error-hibp-load-breaches = Não foi possível carregar os vazamentos.
error-must-be-signed-in = Você precisa entrar na sua { -brand-fxa }.
error-to-finish-verifying = Para concluir a verificação deste email pelo { -product-name }, você precisa acessar com o email principal da sua conta.
home-title = { -product-name }
home-not-found = Página não encontrada.
oauth-invalid-session = Sessão inválida
scan-title = { -product-name }: Resultados da Análise
user-add-invalid-email = Endereço de email inválido
user-add-too-many-emails = Você está monitorando o número máximo de endereços de email.
user-add-email-verify-subject = Confirme sua inscrição no { -product-name }.
user-add-duplicate-email = Este email já foi adicionado ao { -product-name }.
user-add-duplicate-email-part-2 = Visite suas { $preferencesLink } para verificar o status de { $userEmail }.
error-headline = Erro
user-verify-token-error = Token de verificação é necessário.
user-verify-email-report-subject = Seu relatório do { -product-name }
user-unsubscribe-token-error = É necessário um token para cancelar a inscrição.
user-unsubscribe-token-email-error = Para cancelar a inscrição são necessários um token e um hash de email.
user-unsubscribe-title = { -product-name }: Cancelar a inscrição
pwt-section-headline = Senhas Fortes = Mais Proteção
landing-headline = Seu direito de ficar seguro contra hackers começa aqui.
scan-placeholder = Digite um endereço de email
scan-submit = Procure seu endereço de email
scan-error = Precisa ser um endereço de email válido.
download-firefox-banner-button = Baixe o { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Enviado!
sign-up = Cadastre-se
form-signup-error = Precisa ser um endereço de email válido
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data do vazamento:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Contas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dados comprometidos:
unsub-headline = Cancelar a inscrição no { -product-name-nowrap }
unsub-blurb = Seu endereço de email será removido da lista do { -product-name-nowrap } e você não irá mais receber alertas quando novos vazamentos forem anunciados.
unsub-button = Cancelar a inscrição
# Breach data provided by Have I Been Pwned.
hibp-attribution = Dados de vazamentos fornecidos por { $hibp-link }
share-twitter = A maioria das pessoas tem cerca de 100 contas online. Alguma das suas foi exposta em um vazamento de dados? Descubra.
share-facebook-headline = Descubra se você foi vítima de um vazamento de dados
share-facebook-blurb = Suas contas online foram expostas em um vazamento de dados?
og-site-description = Descubra se você foi vítima de um vazamento de dados com o { -product-name }. Cadastre-se para receber alertas sobre futuros vazamentos e receber dicas para manter suas contas seguras.
show-all = Mostrar tudo
fxa-scan-another-email = Quer verificar outro email?
sign-in = Entre
sign-out = Sair
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gerenciar { -brand-fxa }
have-an-account = Já tem uma conta?
fxa-pwt-summary-2 =
    Senhas curtas, de uma só palavra, são fáceis para os hackers adivinharem. 
    Use pelo menos duas palavras e uma combinação de letras, dígitos e caracteres especiais.
fxa-pwt-summary-4 =
    Gerenciadores de senhas como 1Password, LastPass, Dashlane e Bitwarden armazenam 
    suas senhas e as preenchem em sites para você. Eles até ajudam a criar senhas fortes.
fxa-pwt-summary-6 =
    Vazamentos de dados vêm aumentando. Se aparecer suas informações pessoais em um novo vazamento de dados, 
    o { -product-name } envia um alerta, assim você pode tomar providências para proteger suas contas.
fxa-what-to-do-blurb-1 =
    Se não consegue entrar na conta, entre em contato com o site para saber como atualizar. 
    Vê uma conta que não reconhece? Seus dados podem ter sido vendidos 
    ou redistribuídos. Também pode ser uma conta que você esqueceu que 
    criou, ou uma empresa que mudou de nome.
fxa-what-to-do-subhead-2 = Pare de usar a senha exposta, e mude em todo lugar que a usou.
fxa-wtd-blurb-2 =
    Hackers podem tentar usar esta mesma senha e seu email para invadir outras contas.  
    Crie uma senha diferente e única para cada conta, especialmente para sua conta de banco, 
    email e outros sites onde salva informações pessoais.
fxa-what-to-do-blurb-3 =
    A maioria dos vazamentos só expõe emails e senhas, mas alguns incluem informações financeiras confidenciais. 
    Se números de sua conta de banco ou cartão de crédito foram expostos, alerte seu banco para a possibilidade de fraudes. 
    Monitore o extrato para ver se há cobranças que você não reconhece.
fxa-what-to-do-subhead-4 = Receba ajuda para lembrar todas as suas senhas e mantê-las em segurança.
fxa-what-to-do-blurb-4 =
    Gerenciadores de senhas como 1Password, LastPass, Dashlane e Bitwarden armazenam suas 
    senhas com segurança e as preenchem em sites para você. Use um gerenciador de senhas 
    em seu celular e no computador, assim não precisará lembrar todas elas.
# Alerts is a noun
sign-up-for-alerts = Cadastre-se para receber alertas
# Link title
frequently-asked-questions = Perguntas frequentes
about-firefox-monitor = Sobre o { -product-name }
# Link title
preferences = Preferências
# Link title
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
monitor-your-online-accounts = Inscreva-se no monitoramento de vazamentos de dados com uma { -brand-fxa }.
stay-alert = Receba alertas sobre novos vazamentos
if-your-info = Se suas informações surgirem em um novo vazamento de dados, enviaremos um alerta.
search-all-emails = Pesquise vazamentos de todas as suas contas de email e receba alertas de novas ameaças.
monitor-several-emails = Monitore vários emails
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
    tipos de vazamento após um endereço de email ter sido validado. Significa que você é 
    a única pessoa que pode ver se suas informações apareceram em um vazamento (a menos que
    mais alguém tenha acesso à sua conta de email).
delayed-reporting-headline = Por que demorou tanto para relatar este vazamento?
delayed-reporting-copy = Às vezes demora meses ou anos para que credenciais expostas em um vazamento de dados apareça na dark web. Vazamentos são adicionados ao nosso banco de dados assim que são descobertos e confirmados.
about-fxm-headline = Sobre o { -product-name }
about-fxm-blurb = O { -product-name } avisa se suas contas online estiveram envolvidas em um vazamento de dados. Descubra se você esteve em algum vazamento de dados, receba alertas sobre novos vazamentos e tome medidas para proteger suas contas online. O { -product-name } é fornecido pela { -brand-Mozilla }.
fxm-warns-you =
    O { -product-name } avisa se seu endereço de email foi exposto em um
    vazamento de dados online. Veja se suas informações foram expostas,
    aprenda como proteger melhor suas contas online e receba alertas
    caso seu endereço de email apareça em um novo vazamento.
# How Firefox Monitor works
how-fxm-works = Como o { -product-name } funciona
how-fxm-1-headline = Faça uma pesquisa básica
how-fxm-1-blurb =
    Pesquise seu endereço de email em vazamentos de dados tornados públicos desde 2007.
    Esta pesquisa básica traz à tona a maioria dos vazamentos de dados,
    mas não os que contêm informações pessoais sensíveis.
how-fxm-2-headline = Cadastre-se para ter monitoramento de vazamentos
how-fxm-2-blurb = Crie uma { -brand-fxa } para monitorar seu email em vazamentos futuros. Após validar seu email, receberá também um relatório completo de vazamentos já detectados, incluindo vazamentos sensíveis.
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
change-pw-site = Mude a senha neste site
even-for-old = Mesmo em contas antigas, é importante atualizar suas senhas.
make-new-pw-unique = Torne a nova senha diferente e única
strength-of-your-pw = A força de suas senhas afeta diretamente sua segurança online.
create-strong-passwords = Como criar senhas fortes
stop-reusing-pw = Pare de reusar as mesmas senhas
create-unique-pw = Crie senhas únicas e as salve em algum lugar seguro, como um gerenciador de senhas.
five-myths = 5 mitos sobre gerenciadores de senhas
create-a-fxa = Crie uma { -brand-fxa } para obter seu relatório completo de vazamentos e receber alertas.
feat-security-tips = Dicas de segurança para proteger suas contas
feat-sensitive = Pesquisa avançada em vazamentos sensíveis
feat-enroll-multiple = Inscreva vários emails na monitoração de vazamentos
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [zero] Não aparece em nenhum vazamento conhecido.
        [one] Aparece em { $breachCount } vazamento conhecido.
       *[other] Aparece em { $breachCount } vazamentos conhecidos.
    }
check-for-breaches = Verificar se há vazamentos
find-out-what-hackers-know = Descubra o que os hackers já sabem sobre você. Saiba como estar um passo à frente.
get-email-alerts = Mantenha-se protegido: Receba alertas por email quando aparecer suas informações em um vazamento de dados conhecido
search-for-your-email = Pesquise seu endereço de email em vazamentos de dados tornados públicos desde 2007.
back-to-top = Voltar ao início
comm-opt-0 = Enviar email para mim se um de meus endereços de email abaixo aparecer em um vazamento de dados.
comm-opt-1 = Enviar todos os alertas de vazamento para { $primaryEmail }.
stop-monitoring-this = Parar de monitorar este email.
resend-verification = Enviar email de verificação novamente
add-new-email = Adicionar um novo endereço de email
send-verification = Enviar link de confirmação
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Resumo de vazamentos
show-breaches-for-this-email = Mostrar todos os vazamentos deste email.
link-change-primary = Alterar endereço de email principal
remove-fxm = Remover do { -product-name }
remove-fxm-blurb =
    Desativar alertas do { -product-name }. Sua { -brand-fxa } continuará ativa e você pode receber
    outras comunicações relacionadas à conta.
# Button title
manage-email-addresses = Gerenciar endereços de email
# Link title
latest-breach-link = Veja se você estava neste vazamento
welcome-back = Bom ver você de volta, { $userName }!
welcome-user = Boas-vindas, { $userName }!
breach-alert-subject = O { -product-name } encontrou seu email em um novo vazamento de dados.
your-info-was-discovered-headline = Suas informações foram descobertas em um novo vazamento de dados.
your-info-was-discovered-blurb =
    Você se cadastrou para receber alertas do { -product-name }
    quando seu email aparecer em um vazamento de dados. Veja o que sabemos sobre este vazamento.
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
faq3 = Como saber se este é um email legítimo do { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NOVO VAZAMENTO ENCONTRADO
       *[other] { $breachCount } NOVOS VAZAMENTOS ENCONTRADOS
    }
sign-up-headline-1 = Receba alertas sobre novos vazamentos com uma { -brand-fxa }.
account-not-required = Não é obrigatório usar o navegador { -brand-name } para ter uma { -brand-fxa }. Você pode receber informações sobre serviços { -brand-Mozilla }.
was-your-info-exposed = Suas informações foram expostas no vazamento de dados de { $breachName }?
find-out-if = Descubra se seus dados foram expostos neste vazamento.
fb-not-comp = Este email não apareceu no vazamento de { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] No entanto, ele apareceu em { $breachCount } outro vazamento.
       *[other] No entanto, ele apareceu em { $breachCount } outros vazamentos.
    }
fb-comp-only = Este email apareceu no vazamento de { $breachName }
fb-comp-and-others =
    { $breachCount ->
        [zero] Este email não apareceu em nenhum vazamento de dados conhecido.
        [one] Este email apareceu em { $breachCount } vazamento de dados conhecido: { $breachName }.
       *[other] Este email apareceu em { $breachCount } vazamentos de dados conhecidos, incluindo { $breachName }.
    }
no-other-breaches-found = Nenhum outro vazamento foi encontrado em uma pesquisa básica.
no-results-blurb = Desculpe, aquele vazamento não está em nosso banco de dados.
all-breaches-headline = Todos os vazamentos no { -product-name }
search-breaches = Pesquisar vazamentos
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note = <span>Seu email não aparece neste vazamento, mas seu número de telefone ainda pode estar vulnerável.</span> Algumas contas comprometidas no vazamento do Facebook incluem números de telefone e outras informações pessoais, mas não endereços de email. Se você criou uma conta no Facebook, mesmo que não a esteja usando, recomendamos seguir essas instruções para se proteger
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Defina a visibilidade das suas informações para "Somente eu" ou outra configuração não pública no <a>seu perfil do Facebook</a>.</span>
facebook-breach-what-to-do-1-copy = Durante este vazamento, hackers coletaram informações de perfil que estavam definidas como "abertas ao público" ou "compartilhadas com amigos". Essas informações podem ser combinadas com outros dados para acessar ainda mais de suas informações pessoais e contas.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>Altere a senha, PIN ou outras credenciais de segurança em suas <a>contas de operadoras de celular</a> para evitar golpe de troca de SIM</span>.
facebook-breach-what-to-do-2-copy = O golpe de troca de SIM, também chamado sequestro de SIM, é quando um hacker usa números de telefone, data de nascimento e outros dados para assumir o controle do número de celular de alguém e invadir suas contas de email, redes sociais e até contas bancárias.
facebook-breach-what-to-do-3 = Veja todas as recomendações em nossa página de vazamento do Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Exibindo:

## Updated error messages

error-bot-headline = Pesquisas temporariamente suspensas
error-bot-blurb =
    Estamos preocupados, você pode ser um 'bot' porque pesquisou vários 
    endereços de email em um curto período de tempo. No momento você está 
    bloqueado de fazer novas pesquisas. Você pode tentar novamente mais tarde.
error-csrf-headline = A sessão expirou
error-csrf-blurb = Selecione o botão de voltar do seu navegador, recarregue a página e tente novamente.
error-invalid-unsub = Como cancelar a inscrição de alertas do { -product-name }
error-invalid-unsub-blurb =
    Você precisa cancelar a inscrição a partir de um dos emails que 
    o { -product-name } enviou a você. Procure na sua caixa de entrada mensagens 
    de { -brand-team-email }. Selecione o link de cancelar inscrição no final do email.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Endereço de email sendo monitorado
       *[other] Endereços de email sendo monitorados
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
scan-results-known-breaches =
    { $breachCount ->
        [zero] Este email não apareceu em nenhum vazamento de dados conhecido.
        [one] Este email apareceu em 1 vazamento de dados conhecido.
       *[other] Este email apareceu em { $breachCount } vazamentos de dados conhecidos.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Resultados de: { $userEmail }
other-monitored-emails = Outros emails monitorados
email-verification-required = Verificação de email é necessária
fxa-primary-email = Email da { -brand-fxa } - Principal
what-is-a-website-breach = O que é um vazamento de site?
website-breach-blurb = Um vazamento de dados de site acontece quando criminosos cibernéticos roubam, copiam ou expõem informações pessoais de contas online. Geralmente é resultado de hackers procurando um ponto fraco na segurança do site. Vazamentos também podem acontecer quando informações de contas são vazados por acidente.
security-tips-headline = Dicas de segurança para se proteger de hackers
steps-to-protect = Medidas a tomar para proteger sua identidade online
take-further-steps = Tome medidas adicionais para proteger sua identidade
alert-about-new-breaches = Me alertar sobre novos vazamentos
see-if-youve-been-part = Veja se você foi vítima de um vazamento de dados online.
get-ongoing-breach-monitoring = Tenha monitoramento contínuo de vazamentos para vários endereços de email.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Descobrir
new-unsub-error = Você precisa cancelar a inscrição a partir de um dos emails que o { -product-name } enviou.
other-known-breaches-found =
    { $breachCount ->
        [one] No entanto, apareceu em { $breachCount } outro vazamento conhecido.
       *[other] No entanto, apareceu em { $breachCount } outros vazamentos conhecidos.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informações adicionais, incluindo:
# Title
email-addresses-title = Endereços de email
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Visão geral
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Em { $breachDate }, { $breachTitle } foi vazado. Uma vez que o vazamento foi descoberto e confirmado, ele foi adicionado à nossa base de dados em { $addedDate }.
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
to-affected-email = Enviar alertas de vazamento para os endereços de email afetados
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Existe um meio de proteger sua privacidade. Use o { -brand-name }.
# Link title
learn-more-link = Saiba mais.
email-sent = Email enviado!
# Form title
want-to-add = Quer adicionar outro email?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Clique no link de confirmação enviado para { $userEmail } para adicionar ao { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Email confirmado com sucesso!
email-added-to-subscription = Alertaremos você, caso { $email } apareça em um vazamento de dados.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Para ver e gerenciar todos os emails que você cadastrou para monitoramento de vazamentos, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = entre

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Gerencie todos os endereços de email nas { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Notificações de alerta de vazamento
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Informações sobre o vazamento adicionadas em:
how-hackers-work-desc = Proteja suas senhas de criminosos cibernéticos, já que isso é o que eles mais querem.
what-to-do-after-breach-desc = Tranque suas contas para manter suas informações longe de mãos erradas.
create-strong-passwords-desc = Use senhas fortes, seguras e difíceis de adivinhar.
steps-to-protect-desc = Compreenda as ameaças mais comuns e saiba o que zelar.
five-myths-desc = Saiba como evitar hábitos ruins com senhas, que facilitam o trabalho de um hacker.
take-further-steps-desc = Descubra como atenuar os riscos de roubo de identidade para impedir perdas financeiras.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Alterações salvas!
# Section headline
rec-section-headline = O que fazer a respeito deste vazamento
rec-section-subhead = Recomendamos que você siga estas etapas para manter suas informações pessoais seguras e proteger sua identidade digital.
# Section headline
rec-section-headline-no-pw = O que fazer para proteger suas informações pessoais
rec-section-subhead-no-pw = Apesar de não ter sido expostas senhas neste vazamento, ainda existem etapas que você pode seguir para proteger melhor suas informações pessoais.
# Button
see-additional-recs = Ver recomendações adicionais

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

resolve-top-notification = { $affectedEmail } apareceu neste vazamento. <a>O que fazer agora</a>
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } dos seus endereços de email apareceu neste vazamento. <a>O que fazer agora</a>
       *[other] { $numAffectedEmails } dos seus endereços de email apareceram neste vazamento. <a>O que fazer agora</a>
    }

##

marking-this-subhead = Marcar este vazamento como resolvido
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Depois de tomar as medidas ao seu alcance para lidar com este vazamento</span>,
    você pode marcá-lo como resolvido. Os detalhes sobre o vazamento continuam disponíveis no seu painel.
mark-as-resolve-button = Marcar como resolvido
marked-as-resolved-label = Marcado como resolvido
undo-button = Desfazer
confirmation-1-subhead = Muito bem! Você acabou de resolver seu primeiro vazamento.
confirmation-1-body = Mantenha o ritmo. Verifique seu painel para ver se há mais o que fazer.
confirmation-2-subhead = Tome isso, hackers!
confirmation-2-body = Você está tomando medidas importantes para proteger suas contas online.
confirmation-3-subhead = Menos um. Bom trabalho!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Sua nova senha é única, forte e difícil de adivinhar? <a>Descubra</a>
generic-confirmation-subhead = Este vazamento foi marcado como recolvido
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Para ver o vazamento restante, acesse seu painel.
       *[other] Para ver todos os vazamentos restantes, acesse seu painel.
    }
return-to-breach-details-link = Voltar aos detalhes do vazamento
go-to-dashboard-link = Ir para o painel
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = { $percentComplete }% concluído
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } resolvido
       *[other] { $numResolvedBreaches } resolvidos
    }
progress-intro-subhead = Novidade no { -product-name }: marcar vazamentos como resolvidos
progress-intro-message = Após revisar os detalhes sobre um vazamento e tomar medidas para proteger suas informações pessoais, você pode marcar alertas de vazamentos como resolvidos.
progress-status =
    { $numTotalBreaches ->
       *[other] { $numResolvedBreaches } de { $numTotalBreaches } vazamentos marcados como resolvidos
    }
progress-complete = Todos os vazamentos conhecidos foram marcados como resolvidos

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 = <span>Você começou bem!</span> Verifique os vazamentos restantes para saber que medidas tomar.
progress-message-2 = <span>Continue assim!</span> Pequenas mudanças, como alterar senhas, têm um grande impacto em manter suas informações pessoais em segurança.
progress-message-3 = <span>Bom trabalho resolvendo esses vazamentos!</span> Continue assim. Você ainda tem mais alguns.
progress-message-4 = <span>Quase pronto!</span> Você está perto do fim.
progress-complete-message = <span>Sensação boa, né?</span> Se quiser continuar, é um bom momento para alterar outras contas com senhas mais fortes.

##

resolve-this-breach-link = Resolver este vazamento
# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Marcados como resolvidos:
hide-resolved-button = Ocultar resolvidos
show-resolved-button = Mostrar resolvidos
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Senha exposta em vazamentos não resolvidos
       *[other] Senhas expostas em vazamentos não resolvidos
    }
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Vazamento de dados conhecido marcado como resolvido
       *[other] Vazamentos de dados conhecidos marcados como resolvidos
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Novo
mobile-promo-headline = Leve o { -brand-name } para seu celular e tablet
mobile-promo-body = Navegação rápida, privativa e segura em qualquer lugar que você vá. Encontre o { -brand-name } no Google Play e na App Store.
mobile-promo-cta = Instale o { -brand-name } no Android e iOS
promo-lockwise-headline = Tenha suas senhas em qualquer lugar
lockwise-promo-body = Acompanhe suas contas em todos os dispositivos. Acesse-as com segurança no seu computador, celular ou tablet.
promo-lockwise-cta = Instale o { -brand-lockwise }
fpn-promo-headline = Oculte sua localização de sites e rastreadores
promo-fpn-body = O { -brand-fpn } oculta seu endereço IP real, despistando os sites e coletores de dados que usam anúncios para tentar traçar um perfil seu.
promo-fpn-cta = Instale o { -brand-fpn }
monitor-promo-headline = Descubra novos vazamentos de dados
monitor-promo-body = Seja notificado na próxima vez que suas informações pessoais forem expostas em um vazamento conhecido.
ecosystem-promo-headline = Proteja sua vida online com produtos que põem sua privacidade em primeiro lugar
ecosystem-promo-body = Todos os produtos { -brand-name } honram nosso compromisso de como lidar com dados pessoais: Coletar pouco. Manter seguro. Sem segredos.
promo-ecosystem-cta = Veja todos os produtos
steps-to-resolve-headline = Passos para resolver este vazamento
vpn-promo-headline = Agora é a hora de aumentar sua segurança online.
vpn-promo-copy = A Rede Privada Virtual da { -brand-Mozilla } ajuda a proteger sua conexão com a internet de hackers e espiões.
vpn-promo-cta = Instale o { -brand-mozilla-vpn }
vpn-promo-headline-new = Economize 50% com uma assinatura de ano inteiro
vpn-promo-copy-new = Proteja seus dados online, escolha um plano de assinatura de VPN que sirva para você.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# user's IP location is determined dynamically by 3rd-party, eg: "Your location: Los Angeles, CA".  The 3rd-party service provides its own localization.
vpn-banner-location = Sua localização: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Proteja-se</em> com o { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Protegido</em> com o { -brand-mozilla-vpn }.
vpn-banner-title-1 = Você está protegido — obrigado por usar o { -brand-mozilla-vpn }.
vpn-banner-title-2 = Sua localização pode ser rastreada se você não usar uma VPN.
vpn-banner-subtitle-2 = Proteja sua localização e navegue com segurança em 3 etapas
vpn-banner-status-protected = Status atual: <em>Protegido ✓</em>
vpn-banner-status-not-protected = Status atual: <em>Não protegido ⚠</em>
# user's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Endereço IP: { $ip-address }
vpn-banner-step-1 = Assine o { -brand-mozilla-vpn }
vpn-banner-step-2 = Selecione uma localização de VPN
vpn-banner-step-3 = Ative a VPN e navegue com segurança
vpn-banner-cta = Instale o { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Expandir
# button to close panel
vpn-banner-cta-close = Fechar

## Relay and VPN educational/ad units

ad-unit-relay-cta = Saiba mais sobre o { -brand-relay }
ad-unit-vpn-cta = Saiba mais sobre o { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Como você mantém seu endereço de email em segredo?
# ad 2 heading
ad-unit-2-do-you-worry = Você se preocupa com segurança em redes públicas de WiFi?
# ad 3 heading
ad-unit-3-stay-in-the-game = Esteja em dia!
ad-unit-3-lets-you-keep = O { -brand-mozilla-vpn } permite manter uma conexão estável segura e protegida enquanto você joga ou assiste filmes.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Evite limitação
# ad 3 list item 2
ad-unit-3-be-anywhere = Esteja em qualquer lugar do mundo
# ad 3 list item 3
ad-unit-3-access-more = Acesse mais
# ad 4 heading
ad-unit-4-shopping-with = Compras com máscaras de email
ad-unit-4-want-to-buy = Quer comprar algo online, mas não conhece ou não confia totalmente na loja?
ad-unit-4-shop-online = Use uma máscara de email sempre que fizer compras online. Receba a confirmação enviada para seu email real e depois desative facilmente a máscara, quando quiser.
# ad 5 heading
ad-unit-5-on-the-go = Em movimento com o { -brand-relay }
ad-unit-5-instantly-make = Crie instantaneamente uma máscara de email personalizada em todo e qualquer lugar que você vá!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Conexão em movimento
ad-unit-5-privately-sign-in = Use sua máscara de email quando quiser acessar com privacidade em uma cafeteria ou em uma rede pública de WiFi
# ad 5 subheading 2
ad-unit-5-email-receipts = Receba notas fiscais por email
ad-unit-5-share-custom-email = Compartilhe uma máscara de email personalizada para receber notas fiscais de compras de uma loja sem compartilhar seu email real
# ad 5 subheading 3
ad-unit-5-use-on-phone = Usar no seu celular
ad-unit-5-no-matter-where = Não importa onde você esteja, crie uma máscara de email personalizada em segundos para qualquer coisa que você queira fazer
# ad 6 heading
ad-unit-6-worry-free = Cadastro de contas sem preocupações
ad-unit-6-want-to-start = Quer iniciar uma nova inscrição, responder a um convite ou obter um código promocional de pechincha sem ter spam inundando sua caixa de entrada?
ad-unit-6-before-you-complete = Antes de concluir o próximo cadastro, use uma máscara de email em vez do email real para proteger suas informações e manter o controle sobre sua caixa de entrada
